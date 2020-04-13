import * as prisma from '@prisma/client'
import { core } from '@nexus/schema'
import { GraphQLResolveInfo } from 'graphql'

// Types helpers
type IsModelNameExistsInGraphQLTypes<
  ReturnType extends any
> = ReturnType extends core.GetGen<'objectNames'> ? true : false

type NexusPrismaScalarOpts = {
  alias?: string
}

type Pagination = {
  first?: boolean
  last?: boolean
  before?: boolean
  after?: boolean
  skip?: boolean
}

type RootObjectTypes = Pick<
  core.GetGen<'rootTypes'>,
  core.GetGen<'objectNames'>
>

/**
 * Determine if `B` is a subset (or equivalent to) of `A`.
 */
type IsSubset<A, B> = keyof A extends never ? false : B extends A ? true : false

type OmitByValue<T, ValueType> = Pick<
  T,
  { [Key in keyof T]: T[Key] extends ValueType ? never : Key }[keyof T]
>

type GetSubsetTypes<ModelName extends any> = keyof OmitByValue<
  {
    [P in keyof RootObjectTypes]: ModelName extends keyof ModelTypes
      ? IsSubset<RootObjectTypes[P], ModelTypes[ModelName]> extends true
        ? RootObjectTypes[P]
        : never
      : never
  },
  never
>

type SubsetTypes<ModelName extends any> = GetSubsetTypes<
  ModelName
> extends never
  ? `ERROR: No subset types are available. Please make sure that one of your GraphQL type is a subset of your t.model('<ModelName>')`
  : GetSubsetTypes<ModelName>

type DynamicRequiredType<
  ReturnType extends any
> = IsModelNameExistsInGraphQLTypes<ReturnType> extends true
  ? { type?: SubsetTypes<ReturnType> }
  : { type: SubsetTypes<ReturnType> }

type GetNexusPrismaInput<
  ModelName extends any,
  MethodName extends any,
  InputName extends 'filtering' | 'ordering'
> = ModelName extends keyof NexusPrismaInputs
  ? MethodName extends keyof NexusPrismaInputs[ModelName]
    ? NexusPrismaInputs[ModelName][MethodName][InputName]
    : never
  : never

/**
 *  Represents arguments required by Prisma Client JS that will
 *  be derived from a request's input (args, context, and info)
 *  and omitted from the GraphQL API. The object itself maps the
 *  names of these args to a function that takes an object representing
 *  the request's input and returns the value to pass to the prisma
 *  arg of the same name.
 */
export type LocalComputedInputs<MethodName extends any> = Record<
  string,
  (params: LocalMutationResolverParams<MethodName>) => unknown
>

export type GlobalComputedInputs = Record<
  string,
  (params: GlobalMutationResolverParams) => unknown
>

type BaseMutationResolverParams = {
  info: GraphQLResolveInfo
  ctx: Context
}

export type GlobalMutationResolverParams = BaseMutationResolverParams & {
  args: Record<string, any> & { data: unknown }
}

export type LocalMutationResolverParams<
  MethodName extends any
> = BaseMutationResolverParams & {
  args: MethodName extends keyof core.GetGen2<'argTypes', 'Mutation'>
    ? core.GetGen3<'argTypes', 'Mutation', MethodName>
    : any
}

export type Context = core.GetGen<'context'>

type NexusPrismaRelationOpts<
  ModelName extends any,
  MethodName extends any,
  ReturnType extends any
> = GetNexusPrismaInput<
  // If GetNexusPrismaInput returns never, it means there are no filtering/ordering args for it.
  ModelName,
  MethodName,
  'filtering'
> extends never
  ? {
      alias?: string
      computedInputs?: LocalComputedInputs<MethodName>
    } & DynamicRequiredType<ReturnType>
  : {
      alias?: string
      computedInputs?: LocalComputedInputs<MethodName>
      filtering?:
        | boolean
        | Partial<
            Record<
              GetNexusPrismaInput<ModelName, MethodName, 'filtering'>,
              boolean
            >
          >
      ordering?:
        | boolean
        | Partial<
            Record<
              GetNexusPrismaInput<ModelName, MethodName, 'ordering'>,
              boolean
            >
          >
      pagination?: boolean | Pagination
    } & DynamicRequiredType<ReturnType>

type IsScalar<TypeName extends any> = TypeName extends core.GetGen<
  'scalarNames'
>
  ? true
  : false

type IsObject<Name extends any> = Name extends core.GetGen<'objectNames'>
  ? true
  : false

type IsEnum<Name extends any> = Name extends core.GetGen<'enumNames'>
  ? true
  : false

type IsInputObject<Name extends any> = Name extends core.GetGen<'inputNames'>
  ? true
  : false

/**
 * The kind that a GraphQL type may be.
 */
type Kind = 'Enum' | 'Object' | 'Scalar' | 'InputObject'

/**
 * Helper to safely reference a Kind type. For example instead of the following
 * which would admit a typo:
 *
 * ```ts
 * type Foo = Bar extends 'scalar' ? ...
 * ```
 *
 * You can do this which guarantees a correct reference:
 *
 * ```ts
 * type Foo = Bar extends AKind<'Scalar'> ? ...
 * ```
 *
 */
type AKind<T extends Kind> = T

type GetKind<Name extends any> = IsEnum<Name> extends true
  ? 'Enum'
  : IsScalar<Name> extends true
  ? 'Scalar'
  : IsObject<Name> extends true
  ? 'Object'
  : IsInputObject<Name> extends true
  ? 'InputObject' // FIXME should be `never`, but GQL objects named differently // than backing type fall into this branch
  : 'Object'

type NexusPrismaFields<ModelName extends keyof NexusPrismaTypes> = {
  [MethodName in keyof NexusPrismaTypes[ModelName]]: NexusPrismaMethod<
    ModelName,
    MethodName,
    GetKind<NexusPrismaTypes[ModelName][MethodName]> // Is the return type a scalar?
  >
}

type NexusPrismaMethod<
  ModelName extends keyof NexusPrismaTypes,
  MethodName extends keyof NexusPrismaTypes[ModelName],
  ThisKind extends Kind,
  ReturnType extends any = NexusPrismaTypes[ModelName][MethodName]
> = ThisKind extends AKind<'Enum'>
  ? () => NexusPrismaFields<ModelName>
  : ThisKind extends AKind<'Scalar'>
  ? (opts?: NexusPrismaScalarOpts) => NexusPrismaFields<ModelName> // Return optional scalar opts
  : IsModelNameExistsInGraphQLTypes<ReturnType> extends true // If model name has a mapped graphql types
  ? (
      opts?: NexusPrismaRelationOpts<ModelName, MethodName, ReturnType>,
    ) => NexusPrismaFields<ModelName> // Then make opts optional
  : (
      opts: NexusPrismaRelationOpts<ModelName, MethodName, ReturnType>,
    ) => NexusPrismaFields<ModelName> // Else force use input the related graphql type -> { type: '...' }

type GetNexusPrismaMethod<
  TypeName extends string
> = TypeName extends keyof NexusPrismaMethods
  ? NexusPrismaMethods[TypeName]
  : <CustomTypeName extends keyof ModelTypes>(
      typeName: CustomTypeName,
    ) => NexusPrismaMethods[CustomTypeName]

type GetNexusPrisma<
  TypeName extends string,
  ModelOrCrud extends 'model' | 'crud'
> = ModelOrCrud extends 'model'
  ? TypeName extends 'Mutation'
    ? never
    : TypeName extends 'Query'
    ? never
    : GetNexusPrismaMethod<TypeName>
  : ModelOrCrud extends 'crud'
  ? TypeName extends 'Mutation'
    ? GetNexusPrismaMethod<TypeName>
    : TypeName extends 'Query'
    ? GetNexusPrismaMethod<TypeName>
    : never
  : never

// Generated
interface ModelTypes {
  User: prisma.User
  Profile: prisma.Profile
  Phone: prisma.Phone
  Work: prisma.Work
  Image: prisma.Image
  Collection: prisma.Collection
  SpatialRefSy: prisma.SpatialRefSy
}

interface NexusPrismaInputs {
  Query: {
    users: {
      filtering:
        | 'id'
        | 'name'
        | 'email'
        | 'password'
        | 'collections'
        | 'role'
        | 'createdAt'
        | 'updatedAt'
        | 'AND'
        | 'OR'
        | 'NOT'
        | 'profile'
      ordering:
        | 'id'
        | 'name'
        | 'email'
        | 'password'
        | 'role'
        | 'createdAt'
        | 'updatedAt'
    }
    profiles: {
      filtering:
        | 'id'
        | 'phone'
        | 'companyName'
        | 'website'
        | 'userId'
        | 'updatedAt'
        | 'AND'
        | 'OR'
        | 'NOT'
        | 'user'
      ordering:
        | 'id'
        | 'companyName'
        | 'website'
        | 'userId'
        | 'user'
        | 'updatedAt'
    }
    phones: {
      filtering:
        | 'id'
        | 'type'
        | 'number'
        | 'profileId'
        | 'AND'
        | 'OR'
        | 'NOT'
        | 'profile'
      ordering: 'id' | 'type' | 'number' | 'profileId' | 'profile'
    }
    works: {
      filtering:
        | 'id'
        | 'catalogId'
        | 'title'
        | 'medium'
        | 'dimensions'
        | 'date'
        | 'type'
        | 'price'
        | 'image'
        | 'category'
        | 'published'
        | 'createdAt'
        | 'updatedAt'
        | 'collectionId'
        | 'AND'
        | 'OR'
        | 'NOT'
        | 'collection'
      ordering:
        | 'id'
        | 'catalogId'
        | 'title'
        | 'medium'
        | 'dimensions'
        | 'date'
        | 'type'
        | 'price'
        | 'category'
        | 'published'
        | 'createdAt'
        | 'updatedAt'
        | 'collectionId'
        | 'collection'
    }
    images: {
      filtering:
        | 'id'
        | 'name'
        | 'url'
        | 'width'
        | 'height'
        | 'createdAt'
        | 'updatedAt'
        | 'workId'
        | 'AND'
        | 'OR'
        | 'NOT'
        | 'work'
      ordering:
        | 'id'
        | 'name'
        | 'url'
        | 'width'
        | 'height'
        | 'createdAt'
        | 'updatedAt'
        | 'workId'
        | 'work'
    }
    collections: {
      filtering:
        | 'id'
        | 'name'
        | 'works'
        | 'createdAt'
        | 'updatedAt'
        | 'users'
        | 'AND'
        | 'OR'
        | 'NOT'
      ordering: 'id' | 'name' | 'createdAt' | 'updatedAt'
    }
    spatialRefSies: {
      filtering:
        | 'srid'
        | 'authName'
        | 'authSrid'
        | 'proj4text'
        | 'srtext'
        | 'AND'
        | 'OR'
        | 'NOT'
      ordering: 'srid' | 'authName' | 'authSrid' | 'proj4text' | 'srtext'
    }
  }
  User: {
    collections: {
      filtering:
        | 'id'
        | 'name'
        | 'works'
        | 'createdAt'
        | 'updatedAt'
        | 'users'
        | 'AND'
        | 'OR'
        | 'NOT'
      ordering: 'id' | 'name' | 'createdAt' | 'updatedAt'
    }
  }
  Profile: {
    phone: {
      filtering:
        | 'id'
        | 'type'
        | 'number'
        | 'profileId'
        | 'AND'
        | 'OR'
        | 'NOT'
        | 'profile'
      ordering: 'id' | 'type' | 'number' | 'profileId' | 'profile'
    }
  }
  Phone: {}
  Work: {
    image: {
      filtering:
        | 'id'
        | 'name'
        | 'url'
        | 'width'
        | 'height'
        | 'createdAt'
        | 'updatedAt'
        | 'workId'
        | 'AND'
        | 'OR'
        | 'NOT'
        | 'work'
      ordering:
        | 'id'
        | 'name'
        | 'url'
        | 'width'
        | 'height'
        | 'createdAt'
        | 'updatedAt'
        | 'workId'
        | 'work'
    }
  }
  Image: {}
  Collection: {
    works: {
      filtering:
        | 'id'
        | 'catalogId'
        | 'title'
        | 'medium'
        | 'dimensions'
        | 'date'
        | 'type'
        | 'price'
        | 'image'
        | 'category'
        | 'published'
        | 'createdAt'
        | 'updatedAt'
        | 'collectionId'
        | 'AND'
        | 'OR'
        | 'NOT'
        | 'collection'
      ordering:
        | 'id'
        | 'catalogId'
        | 'title'
        | 'medium'
        | 'dimensions'
        | 'date'
        | 'type'
        | 'price'
        | 'category'
        | 'published'
        | 'createdAt'
        | 'updatedAt'
        | 'collectionId'
        | 'collection'
    }
    users: {
      filtering:
        | 'id'
        | 'name'
        | 'email'
        | 'password'
        | 'collections'
        | 'role'
        | 'createdAt'
        | 'updatedAt'
        | 'AND'
        | 'OR'
        | 'NOT'
        | 'profile'
      ordering:
        | 'id'
        | 'name'
        | 'email'
        | 'password'
        | 'role'
        | 'createdAt'
        | 'updatedAt'
    }
  }
  SpatialRefSy: {}
}

interface NexusPrismaTypes {
  Query: {
    user: 'User'
    users: 'User'
    profile: 'Profile'
    profiles: 'Profile'
    phone: 'Phone'
    phones: 'Phone'
    work: 'Work'
    works: 'Work'
    image: 'Image'
    images: 'Image'
    collection: 'Collection'
    collections: 'Collection'
    spatialRefSy: 'SpatialRefSy'
    spatialRefSies: 'SpatialRefSy'
  }
  Mutation: {
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'BatchPayload'
    deleteOneUser: 'User'
    deleteManyUser: 'BatchPayload'
    upsertOneUser: 'User'
    createOneProfile: 'Profile'
    updateOneProfile: 'Profile'
    updateManyProfile: 'BatchPayload'
    deleteOneProfile: 'Profile'
    deleteManyProfile: 'BatchPayload'
    upsertOneProfile: 'Profile'
    createOnePhone: 'Phone'
    updateOnePhone: 'Phone'
    updateManyPhone: 'BatchPayload'
    deleteOnePhone: 'Phone'
    deleteManyPhone: 'BatchPayload'
    upsertOnePhone: 'Phone'
    createOneWork: 'Work'
    updateOneWork: 'Work'
    updateManyWork: 'BatchPayload'
    deleteOneWork: 'Work'
    deleteManyWork: 'BatchPayload'
    upsertOneWork: 'Work'
    createOneImage: 'Image'
    updateOneImage: 'Image'
    updateManyImage: 'BatchPayload'
    deleteOneImage: 'Image'
    deleteManyImage: 'BatchPayload'
    upsertOneImage: 'Image'
    createOneCollection: 'Collection'
    updateOneCollection: 'Collection'
    updateManyCollection: 'BatchPayload'
    deleteOneCollection: 'Collection'
    deleteManyCollection: 'BatchPayload'
    upsertOneCollection: 'Collection'
    createOneSpatialRefSy: 'SpatialRefSy'
    updateOneSpatialRefSy: 'SpatialRefSy'
    updateManySpatialRefSy: 'BatchPayload'
    deleteOneSpatialRefSy: 'SpatialRefSy'
    deleteManySpatialRefSy: 'BatchPayload'
    upsertOneSpatialRefSy: 'SpatialRefSy'
  }
  User: {
    id: 'Int'
    name: 'String'
    email: 'String'
    profile: 'Profile'
    password: 'String'
    collections: 'Collection'
    role: 'Role'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  Profile: {
    id: 'Int'
    phone: 'Phone'
    companyName: 'String'
    website: 'String'
    userId: 'Int'
    user: 'User'
    updatedAt: 'DateTime'
  }
  Phone: {
    id: 'Int'
    type: 'PhoneType'
    number: 'String'
    profileId: 'Int'
    profile: 'Profile'
  }
  Work: {
    id: 'Int'
    catalogId: 'Int'
    title: 'String'
    medium: 'String'
    dimensions: 'String'
    date: 'DateTime'
    type: 'Type'
    price: 'Float'
    image: 'Image'
    category: 'Category'
    published: 'Boolean'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    collectionId: 'Int'
    collection: 'Collection'
  }
  Image: {
    id: 'Int'
    name: 'String'
    url: 'String'
    width: 'Int'
    height: 'Int'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    workId: 'Int'
    work: 'Work'
  }
  Collection: {
    id: 'Int'
    name: 'String'
    works: 'Work'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    users: 'User'
  }
  SpatialRefSy: {
    srid: 'Int'
    authName: 'String'
    authSrid: 'Int'
    proj4text: 'String'
    srtext: 'String'
  }
}

interface NexusPrismaMethods {
  User: NexusPrismaFields<'User'>
  Profile: NexusPrismaFields<'Profile'>
  Phone: NexusPrismaFields<'Phone'>
  Work: NexusPrismaFields<'Work'>
  Image: NexusPrismaFields<'Image'>
  Collection: NexusPrismaFields<'Collection'>
  SpatialRefSy: NexusPrismaFields<'SpatialRefSy'>
  Query: NexusPrismaFields<'Query'>
  Mutation: NexusPrismaFields<'Mutation'>
}

declare global {
  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = GetNexusPrisma<TypeName, ModelOrCrud>
}
