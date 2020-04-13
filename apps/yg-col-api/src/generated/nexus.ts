/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as Context from "../context"
import * as prisma from "@prisma/client"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CollectionCreateManyWithoutUsersInput: { // input type
    connect?: NexusGenInputs['CollectionWhereUniqueInput'][] | null; // [CollectionWhereUniqueInput!]
    create?: NexusGenInputs['CollectionCreateWithoutUsersInput'][] | null; // [CollectionCreateWithoutUsersInput!]
  }
  CollectionCreateWithoutUsersInput: { // input type
    createdAt?: any | null; // DateTime
    name: string; // String!
    updatedAt?: any | null; // DateTime
    works?: NexusGenInputs['WorkCreateManyWithoutCollectionInput'] | null; // WorkCreateManyWithoutCollectionInput
  }
  CollectionWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  ImageCreateManyWithoutWorkInput: { // input type
    connect?: NexusGenInputs['ImageWhereUniqueInput'][] | null; // [ImageWhereUniqueInput!]
    create?: NexusGenInputs['ImageCreateWithoutWorkInput'][] | null; // [ImageCreateWithoutWorkInput!]
  }
  ImageCreateWithoutWorkInput: { // input type
    createdAt?: any | null; // DateTime
    height?: number | null; // Int
    name: string; // String!
    updatedAt?: any | null; // DateTime
    url: string; // String!
    width?: number | null; // Int
  }
  ImageWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  PhoneCreateManyWithoutProfileInput: { // input type
    connect?: NexusGenInputs['PhoneWhereUniqueInput'][] | null; // [PhoneWhereUniqueInput!]
    create?: NexusGenInputs['PhoneCreateWithoutProfileInput'][] | null; // [PhoneCreateWithoutProfileInput!]
  }
  PhoneCreateWithoutProfileInput: { // input type
    number: string; // String!
    type?: NexusGenEnums['PhoneType'] | null; // PhoneType
  }
  PhoneWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  ProfileCreateOneWithoutUserInput: { // input type
    connect?: NexusGenInputs['ProfileWhereUniqueInput'] | null; // ProfileWhereUniqueInput
    create?: NexusGenInputs['ProfileCreateWithoutUserInput'] | null; // ProfileCreateWithoutUserInput
  }
  ProfileCreateWithoutUserInput: { // input type
    companyName?: string | null; // String
    phone?: NexusGenInputs['PhoneCreateManyWithoutProfileInput'] | null; // PhoneCreateManyWithoutProfileInput
    updatedAt?: any | null; // DateTime
    website?: string | null; // String
  }
  ProfileWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  UserCreateInput: { // input type
    collections?: NexusGenInputs['CollectionCreateManyWithoutUsersInput'] | null; // CollectionCreateManyWithoutUsersInput
    createdAt?: any | null; // DateTime
    email: string; // String!
    name?: string | null; // String
    password?: string | null; // String
    profile?: NexusGenInputs['ProfileCreateOneWithoutUserInput'] | null; // ProfileCreateOneWithoutUserInput
    role?: NexusGenEnums['Role'] | null; // Role
    updatedAt?: any | null; // DateTime
  }
  WorkCreateManyWithoutCollectionInput: { // input type
    connect?: NexusGenInputs['WorkWhereUniqueInput'][] | null; // [WorkWhereUniqueInput!]
    create?: NexusGenInputs['WorkCreateWithoutCollectionInput'][] | null; // [WorkCreateWithoutCollectionInput!]
  }
  WorkCreateWithoutCollectionInput: { // input type
    catalogId: number; // Int!
    category: NexusGenEnums['Category']; // Category!
    createdAt?: any | null; // DateTime
    date?: any | null; // DateTime
    dimensions?: string | null; // String
    image?: NexusGenInputs['ImageCreateManyWithoutWorkInput'] | null; // ImageCreateManyWithoutWorkInput
    medium?: string | null; // String
    price?: number | null; // Float
    published: boolean; // Boolean!
    title: string; // String!
    type?: NexusGenEnums['Type'] | null; // Type
    updatedAt?: any | null; // DateTime
  }
  WorkWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
}

export interface NexusGenEnums {
  Category: prisma.Category
  PhoneType: prisma.PhoneType
  Role: prisma.Role
  Type: prisma.Type
}

export interface NexusGenRootTypes {
  Mutation: {};
  Profile: prisma.Profile;
  Query: {};
  User: prisma.User;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  CollectionCreateManyWithoutUsersInput: NexusGenInputs['CollectionCreateManyWithoutUsersInput'];
  CollectionCreateWithoutUsersInput: NexusGenInputs['CollectionCreateWithoutUsersInput'];
  CollectionWhereUniqueInput: NexusGenInputs['CollectionWhereUniqueInput'];
  ImageCreateManyWithoutWorkInput: NexusGenInputs['ImageCreateManyWithoutWorkInput'];
  ImageCreateWithoutWorkInput: NexusGenInputs['ImageCreateWithoutWorkInput'];
  ImageWhereUniqueInput: NexusGenInputs['ImageWhereUniqueInput'];
  PhoneCreateManyWithoutProfileInput: NexusGenInputs['PhoneCreateManyWithoutProfileInput'];
  PhoneCreateWithoutProfileInput: NexusGenInputs['PhoneCreateWithoutProfileInput'];
  PhoneWhereUniqueInput: NexusGenInputs['PhoneWhereUniqueInput'];
  ProfileCreateOneWithoutUserInput: NexusGenInputs['ProfileCreateOneWithoutUserInput'];
  ProfileCreateWithoutUserInput: NexusGenInputs['ProfileCreateWithoutUserInput'];
  ProfileWhereUniqueInput: NexusGenInputs['ProfileWhereUniqueInput'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  WorkCreateManyWithoutCollectionInput: NexusGenInputs['WorkCreateManyWithoutCollectionInput'];
  WorkCreateWithoutCollectionInput: NexusGenInputs['WorkCreateWithoutCollectionInput'];
  WorkWhereUniqueInput: NexusGenInputs['WorkWhereUniqueInput'];
  Category: NexusGenEnums['Category'];
  PhoneType: NexusGenEnums['PhoneType'];
  Role: NexusGenEnums['Role'];
  Type: NexusGenEnums['Type'];
}

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createOneUser: NexusGenRootTypes['User']; // User!
  }
  Profile: { // field return type
    companyName: string | null; // String
    id: number; // Int!
    user: NexusGenRootTypes['User']; // User!
    userId: number; // Int!
    website: string | null; // String
  }
  Query: { // field return type
    profile: NexusGenRootTypes['Profile'] | null; // Profile
  }
  User: { // field return type
    email: string; // String!
    id: number; // Int!
    name: string | null; // String
    profile: NexusGenRootTypes['Profile'] | null; // Profile
    role: NexusGenEnums['Role']; // Role!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOneUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
  }
  Query: {
    profile: { // args
      where: NexusGenInputs['ProfileWhereUniqueInput']; // ProfileWhereUniqueInput!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Mutation" | "Profile" | "Query" | "User";

export type NexusGenInputNames = "CollectionCreateManyWithoutUsersInput" | "CollectionCreateWithoutUsersInput" | "CollectionWhereUniqueInput" | "ImageCreateManyWithoutWorkInput" | "ImageCreateWithoutWorkInput" | "ImageWhereUniqueInput" | "PhoneCreateManyWithoutProfileInput" | "PhoneCreateWithoutProfileInput" | "PhoneWhereUniqueInput" | "ProfileCreateOneWithoutUserInput" | "ProfileCreateWithoutUserInput" | "ProfileWhereUniqueInput" | "UserCreateInput" | "WorkCreateManyWithoutCollectionInput" | "WorkCreateWithoutCollectionInput" | "WorkWhereUniqueInput";

export type NexusGenEnumNames = "Category" | "PhoneType" | "Role" | "Type";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}