
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model insurers
 * 
 */
export type insurers = $Result.DefaultSelection<Prisma.$insurersPayload>
/**
 * Model clients
 * 
 */
export type clients = $Result.DefaultSelection<Prisma.$clientsPayload>
/**
 * Model uploads
 * 
 */
export type uploads = $Result.DefaultSelection<Prisma.$uploadsPayload>
/**
 * Model decks
 * 
 */
export type decks = $Result.DefaultSelection<Prisma.$decksPayload>
/**
 * Model intellicareMasterlist
 * 
 */
export type intellicareMasterlist = $Result.DefaultSelection<Prisma.$intellicareMasterlistPayload>
/**
 * Model maxicareMasterlist
 * 
 */
export type maxicareMasterlist = $Result.DefaultSelection<Prisma.$maxicareMasterlistPayload>
/**
 * Model intellicare
 * 
 */
export type intellicare = $Result.DefaultSelection<Prisma.$intellicarePayload>
/**
 * Model maxicare
 * 
 */
export type maxicare = $Result.DefaultSelection<Prisma.$maxicarePayload>
/**
 * Model customIllnesses
 * 
 */
export type customIllnesses = $Result.DefaultSelection<Prisma.$customIllnessesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.insurers`: Exposes CRUD operations for the **insurers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Insurers
    * const insurers = await prisma.insurers.findMany()
    * ```
    */
  get insurers(): Prisma.insurersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clients`: Exposes CRUD operations for the **clients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.clients.findMany()
    * ```
    */
  get clients(): Prisma.clientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uploads`: Exposes CRUD operations for the **uploads** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Uploads
    * const uploads = await prisma.uploads.findMany()
    * ```
    */
  get uploads(): Prisma.uploadsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.decks`: Exposes CRUD operations for the **decks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Decks
    * const decks = await prisma.decks.findMany()
    * ```
    */
  get decks(): Prisma.decksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.intellicareMasterlist`: Exposes CRUD operations for the **intellicareMasterlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntellicareMasterlists
    * const intellicareMasterlists = await prisma.intellicareMasterlist.findMany()
    * ```
    */
  get intellicareMasterlist(): Prisma.intellicareMasterlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maxicareMasterlist`: Exposes CRUD operations for the **maxicareMasterlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaxicareMasterlists
    * const maxicareMasterlists = await prisma.maxicareMasterlist.findMany()
    * ```
    */
  get maxicareMasterlist(): Prisma.maxicareMasterlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.intellicare`: Exposes CRUD operations for the **intellicare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Intellicares
    * const intellicares = await prisma.intellicare.findMany()
    * ```
    */
  get intellicare(): Prisma.intellicareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maxicare`: Exposes CRUD operations for the **maxicare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maxicares
    * const maxicares = await prisma.maxicare.findMany()
    * ```
    */
  get maxicare(): Prisma.maxicareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customIllnesses`: Exposes CRUD operations for the **customIllnesses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomIllnesses
    * const customIllnesses = await prisma.customIllnesses.findMany()
    * ```
    */
  get customIllnesses(): Prisma.customIllnessesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    insurers: 'insurers',
    clients: 'clients',
    uploads: 'uploads',
    decks: 'decks',
    intellicareMasterlist: 'intellicareMasterlist',
    maxicareMasterlist: 'maxicareMasterlist',
    intellicare: 'intellicare',
    maxicare: 'maxicare',
    customIllnesses: 'customIllnesses'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "insurers" | "clients" | "uploads" | "decks" | "intellicareMasterlist" | "maxicareMasterlist" | "intellicare" | "maxicare" | "customIllnesses"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      insurers: {
        payload: Prisma.$insurersPayload<ExtArgs>
        fields: Prisma.insurersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.insurersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insurersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.insurersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insurersPayload>
          }
          findFirst: {
            args: Prisma.insurersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insurersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.insurersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insurersPayload>
          }
          findMany: {
            args: Prisma.insurersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insurersPayload>[]
          }
          create: {
            args: Prisma.insurersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insurersPayload>
          }
          createMany: {
            args: Prisma.insurersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.insurersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insurersPayload>
          }
          update: {
            args: Prisma.insurersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insurersPayload>
          }
          deleteMany: {
            args: Prisma.insurersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.insurersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.insurersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$insurersPayload>
          }
          aggregate: {
            args: Prisma.InsurersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsurers>
          }
          groupBy: {
            args: Prisma.insurersGroupByArgs<ExtArgs>
            result: $Utils.Optional<InsurersGroupByOutputType>[]
          }
          count: {
            args: Prisma.insurersCountArgs<ExtArgs>
            result: $Utils.Optional<InsurersCountAggregateOutputType> | number
          }
        }
      }
      clients: {
        payload: Prisma.$clientsPayload<ExtArgs>
        fields: Prisma.clientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          findFirst: {
            args: Prisma.clientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          findMany: {
            args: Prisma.clientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>[]
          }
          create: {
            args: Prisma.clientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          createMany: {
            args: Prisma.clientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.clientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          update: {
            args: Prisma.clientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          deleteMany: {
            args: Prisma.clientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          aggregate: {
            args: Prisma.ClientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClients>
          }
          groupBy: {
            args: Prisma.clientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientsCountArgs<ExtArgs>
            result: $Utils.Optional<ClientsCountAggregateOutputType> | number
          }
        }
      }
      uploads: {
        payload: Prisma.$uploadsPayload<ExtArgs>
        fields: Prisma.uploadsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.uploadsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploadsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.uploadsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploadsPayload>
          }
          findFirst: {
            args: Prisma.uploadsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploadsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.uploadsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploadsPayload>
          }
          findMany: {
            args: Prisma.uploadsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploadsPayload>[]
          }
          create: {
            args: Prisma.uploadsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploadsPayload>
          }
          createMany: {
            args: Prisma.uploadsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.uploadsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploadsPayload>
          }
          update: {
            args: Prisma.uploadsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploadsPayload>
          }
          deleteMany: {
            args: Prisma.uploadsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.uploadsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.uploadsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploadsPayload>
          }
          aggregate: {
            args: Prisma.UploadsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUploads>
          }
          groupBy: {
            args: Prisma.uploadsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UploadsGroupByOutputType>[]
          }
          count: {
            args: Prisma.uploadsCountArgs<ExtArgs>
            result: $Utils.Optional<UploadsCountAggregateOutputType> | number
          }
        }
      }
      decks: {
        payload: Prisma.$decksPayload<ExtArgs>
        fields: Prisma.decksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.decksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.decksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decksPayload>
          }
          findFirst: {
            args: Prisma.decksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.decksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decksPayload>
          }
          findMany: {
            args: Prisma.decksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decksPayload>[]
          }
          create: {
            args: Prisma.decksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decksPayload>
          }
          createMany: {
            args: Prisma.decksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.decksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decksPayload>
          }
          update: {
            args: Prisma.decksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decksPayload>
          }
          deleteMany: {
            args: Prisma.decksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.decksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.decksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$decksPayload>
          }
          aggregate: {
            args: Prisma.DecksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDecks>
          }
          groupBy: {
            args: Prisma.decksGroupByArgs<ExtArgs>
            result: $Utils.Optional<DecksGroupByOutputType>[]
          }
          count: {
            args: Prisma.decksCountArgs<ExtArgs>
            result: $Utils.Optional<DecksCountAggregateOutputType> | number
          }
        }
      }
      intellicareMasterlist: {
        payload: Prisma.$intellicareMasterlistPayload<ExtArgs>
        fields: Prisma.intellicareMasterlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.intellicareMasterlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intellicareMasterlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.intellicareMasterlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intellicareMasterlistPayload>
          }
          findFirst: {
            args: Prisma.intellicareMasterlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intellicareMasterlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.intellicareMasterlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intellicareMasterlistPayload>
          }
          findMany: {
            args: Prisma.intellicareMasterlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intellicareMasterlistPayload>[]
          }
          create: {
            args: Prisma.intellicareMasterlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intellicareMasterlistPayload>
          }
          createMany: {
            args: Prisma.intellicareMasterlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.intellicareMasterlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intellicareMasterlistPayload>
          }
          update: {
            args: Prisma.intellicareMasterlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intellicareMasterlistPayload>
          }
          deleteMany: {
            args: Prisma.intellicareMasterlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.intellicareMasterlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.intellicareMasterlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intellicareMasterlistPayload>
          }
          aggregate: {
            args: Prisma.IntellicareMasterlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntellicareMasterlist>
          }
          groupBy: {
            args: Prisma.intellicareMasterlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntellicareMasterlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.intellicareMasterlistCountArgs<ExtArgs>
            result: $Utils.Optional<IntellicareMasterlistCountAggregateOutputType> | number
          }
        }
      }
      maxicareMasterlist: {
        payload: Prisma.$maxicareMasterlistPayload<ExtArgs>
        fields: Prisma.maxicareMasterlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.maxicareMasterlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maxicareMasterlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.maxicareMasterlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maxicareMasterlistPayload>
          }
          findFirst: {
            args: Prisma.maxicareMasterlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maxicareMasterlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.maxicareMasterlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maxicareMasterlistPayload>
          }
          findMany: {
            args: Prisma.maxicareMasterlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maxicareMasterlistPayload>[]
          }
          create: {
            args: Prisma.maxicareMasterlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maxicareMasterlistPayload>
          }
          createMany: {
            args: Prisma.maxicareMasterlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.maxicareMasterlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maxicareMasterlistPayload>
          }
          update: {
            args: Prisma.maxicareMasterlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maxicareMasterlistPayload>
          }
          deleteMany: {
            args: Prisma.maxicareMasterlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.maxicareMasterlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.maxicareMasterlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maxicareMasterlistPayload>
          }
          aggregate: {
            args: Prisma.MaxicareMasterlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaxicareMasterlist>
          }
          groupBy: {
            args: Prisma.maxicareMasterlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaxicareMasterlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.maxicareMasterlistCountArgs<ExtArgs>
            result: $Utils.Optional<MaxicareMasterlistCountAggregateOutputType> | number
          }
        }
      }
      intellicare: {
        payload: Prisma.$intellicarePayload<ExtArgs>
        fields: Prisma.intellicareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.intellicareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intellicarePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.intellicareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intellicarePayload>
          }
          findFirst: {
            args: Prisma.intellicareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intellicarePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.intellicareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intellicarePayload>
          }
          findMany: {
            args: Prisma.intellicareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intellicarePayload>[]
          }
          create: {
            args: Prisma.intellicareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intellicarePayload>
          }
          createMany: {
            args: Prisma.intellicareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.intellicareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intellicarePayload>
          }
          update: {
            args: Prisma.intellicareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intellicarePayload>
          }
          deleteMany: {
            args: Prisma.intellicareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.intellicareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.intellicareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$intellicarePayload>
          }
          aggregate: {
            args: Prisma.IntellicareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntellicare>
          }
          groupBy: {
            args: Prisma.intellicareGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntellicareGroupByOutputType>[]
          }
          count: {
            args: Prisma.intellicareCountArgs<ExtArgs>
            result: $Utils.Optional<IntellicareCountAggregateOutputType> | number
          }
        }
      }
      maxicare: {
        payload: Prisma.$maxicarePayload<ExtArgs>
        fields: Prisma.maxicareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.maxicareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maxicarePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.maxicareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maxicarePayload>
          }
          findFirst: {
            args: Prisma.maxicareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maxicarePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.maxicareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maxicarePayload>
          }
          findMany: {
            args: Prisma.maxicareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maxicarePayload>[]
          }
          create: {
            args: Prisma.maxicareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maxicarePayload>
          }
          createMany: {
            args: Prisma.maxicareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.maxicareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maxicarePayload>
          }
          update: {
            args: Prisma.maxicareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maxicarePayload>
          }
          deleteMany: {
            args: Prisma.maxicareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.maxicareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.maxicareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$maxicarePayload>
          }
          aggregate: {
            args: Prisma.MaxicareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaxicare>
          }
          groupBy: {
            args: Prisma.maxicareGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaxicareGroupByOutputType>[]
          }
          count: {
            args: Prisma.maxicareCountArgs<ExtArgs>
            result: $Utils.Optional<MaxicareCountAggregateOutputType> | number
          }
        }
      }
      customIllnesses: {
        payload: Prisma.$customIllnessesPayload<ExtArgs>
        fields: Prisma.customIllnessesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customIllnessesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customIllnessesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customIllnessesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customIllnessesPayload>
          }
          findFirst: {
            args: Prisma.customIllnessesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customIllnessesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customIllnessesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customIllnessesPayload>
          }
          findMany: {
            args: Prisma.customIllnessesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customIllnessesPayload>[]
          }
          create: {
            args: Prisma.customIllnessesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customIllnessesPayload>
          }
          createMany: {
            args: Prisma.customIllnessesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.customIllnessesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customIllnessesPayload>
          }
          update: {
            args: Prisma.customIllnessesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customIllnessesPayload>
          }
          deleteMany: {
            args: Prisma.customIllnessesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customIllnessesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.customIllnessesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customIllnessesPayload>
          }
          aggregate: {
            args: Prisma.CustomIllnessesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomIllnesses>
          }
          groupBy: {
            args: Prisma.customIllnessesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomIllnessesGroupByOutputType>[]
          }
          count: {
            args: Prisma.customIllnessesCountArgs<ExtArgs>
            result: $Utils.Optional<CustomIllnessesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    insurers?: insurersOmit
    clients?: clientsOmit
    uploads?: uploadsOmit
    decks?: decksOmit
    intellicareMasterlist?: intellicareMasterlistOmit
    maxicareMasterlist?: maxicareMasterlistOmit
    intellicare?: intellicareOmit
    maxicare?: maxicareOmit
    customIllnesses?: customIllnessesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type InsurersCountOutputType
   */

  export type InsurersCountOutputType = {
    clients: number
    uploads: number
  }

  export type InsurersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | InsurersCountOutputTypeCountClientsArgs
    uploads?: boolean | InsurersCountOutputTypeCountUploadsArgs
  }

  // Custom InputTypes
  /**
   * InsurersCountOutputType without action
   */
  export type InsurersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsurersCountOutputType
     */
    select?: InsurersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InsurersCountOutputType without action
   */
  export type InsurersCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientsWhereInput
  }

  /**
   * InsurersCountOutputType without action
   */
  export type InsurersCountOutputTypeCountUploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: uploadsWhereInput
  }


  /**
   * Count Type ClientsCountOutputType
   */

  export type ClientsCountOutputType = {
    uploads: number
    decks: number
    intellicareMasterlist: number
    maxicareMasterlist: number
    intellicare: number
    maxicare: number
    customIllnesses: number
  }

  export type ClientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploads?: boolean | ClientsCountOutputTypeCountUploadsArgs
    decks?: boolean | ClientsCountOutputTypeCountDecksArgs
    intellicareMasterlist?: boolean | ClientsCountOutputTypeCountIntellicareMasterlistArgs
    maxicareMasterlist?: boolean | ClientsCountOutputTypeCountMaxicareMasterlistArgs
    intellicare?: boolean | ClientsCountOutputTypeCountIntellicareArgs
    maxicare?: boolean | ClientsCountOutputTypeCountMaxicareArgs
    customIllnesses?: boolean | ClientsCountOutputTypeCountCustomIllnessesArgs
  }

  // Custom InputTypes
  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsCountOutputType
     */
    select?: ClientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountUploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: uploadsWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountDecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: decksWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountIntellicareMasterlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: intellicareMasterlistWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountMaxicareMasterlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: maxicareMasterlistWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountIntellicareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: intellicareWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountMaxicareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: maxicareWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountCustomIllnessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customIllnessesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    admin: boolean | null
    canUpload: boolean | null
    canCreate: boolean | null
    canViewDeck: boolean | null
    canUploadDeck: boolean | null
    canAdd: boolean | null
    canRemove: boolean | null
    canEdit: boolean | null
    superAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    admin: boolean | null
    canUpload: boolean | null
    canCreate: boolean | null
    canViewDeck: boolean | null
    canUploadDeck: boolean | null
    canAdd: boolean | null
    canRemove: boolean | null
    canEdit: boolean | null
    superAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    admin: number
    canUpload: number
    canCreate: number
    canViewDeck: number
    canUploadDeck: number
    canAdd: number
    canRemove: number
    canEdit: number
    superAdmin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    admin?: true
    canUpload?: true
    canCreate?: true
    canViewDeck?: true
    canUploadDeck?: true
    canAdd?: true
    canRemove?: true
    canEdit?: true
    superAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    admin?: true
    canUpload?: true
    canCreate?: true
    canViewDeck?: true
    canUploadDeck?: true
    canAdd?: true
    canRemove?: true
    canEdit?: true
    superAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    admin?: true
    canUpload?: true
    canCreate?: true
    canViewDeck?: true
    canUploadDeck?: true
    canAdd?: true
    canRemove?: true
    canEdit?: true
    superAdmin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    admin: boolean
    canUpload: boolean
    canCreate: boolean
    canViewDeck: boolean
    canUploadDeck: boolean
    canAdd: boolean
    canRemove: boolean
    canEdit: boolean
    superAdmin: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    admin?: boolean
    canUpload?: boolean
    canCreate?: boolean
    canViewDeck?: boolean
    canUploadDeck?: boolean
    canAdd?: boolean
    canRemove?: boolean
    canEdit?: boolean
    superAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    admin?: boolean
    canUpload?: boolean
    canCreate?: boolean
    canViewDeck?: boolean
    canUploadDeck?: boolean
    canAdd?: boolean
    canRemove?: boolean
    canEdit?: boolean
    superAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "admin" | "canUpload" | "canCreate" | "canViewDeck" | "canUploadDeck" | "canAdd" | "canRemove" | "canEdit" | "superAdmin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      admin: boolean
      canUpload: boolean
      canCreate: boolean
      canViewDeck: boolean
      canUploadDeck: boolean
      canAdd: boolean
      canRemove: boolean
      canEdit: boolean
      superAdmin: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly admin: FieldRef<"user", 'Boolean'>
    readonly canUpload: FieldRef<"user", 'Boolean'>
    readonly canCreate: FieldRef<"user", 'Boolean'>
    readonly canViewDeck: FieldRef<"user", 'Boolean'>
    readonly canUploadDeck: FieldRef<"user", 'Boolean'>
    readonly canAdd: FieldRef<"user", 'Boolean'>
    readonly canRemove: FieldRef<"user", 'Boolean'>
    readonly canEdit: FieldRef<"user", 'Boolean'>
    readonly superAdmin: FieldRef<"user", 'Boolean'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
  }


  /**
   * Model insurers
   */

  export type AggregateInsurers = {
    _count: InsurersCountAggregateOutputType | null
    _avg: InsurersAvgAggregateOutputType | null
    _sum: InsurersSumAggregateOutputType | null
    _min: InsurersMinAggregateOutputType | null
    _max: InsurersMaxAggregateOutputType | null
  }

  export type InsurersAvgAggregateOutputType = {
    id: number | null
  }

  export type InsurersSumAggregateOutputType = {
    id: number | null
  }

  export type InsurersMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type InsurersMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type InsurersCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type InsurersAvgAggregateInputType = {
    id?: true
  }

  export type InsurersSumAggregateInputType = {
    id?: true
  }

  export type InsurersMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type InsurersMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type InsurersCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type InsurersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which insurers to aggregate.
     */
    where?: insurersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of insurers to fetch.
     */
    orderBy?: insurersOrderByWithRelationInput | insurersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: insurersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` insurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` insurers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned insurers
    **/
    _count?: true | InsurersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InsurersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InsurersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InsurersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InsurersMaxAggregateInputType
  }

  export type GetInsurersAggregateType<T extends InsurersAggregateArgs> = {
        [P in keyof T & keyof AggregateInsurers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsurers[P]>
      : GetScalarType<T[P], AggregateInsurers[P]>
  }




  export type insurersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: insurersWhereInput
    orderBy?: insurersOrderByWithAggregationInput | insurersOrderByWithAggregationInput[]
    by: InsurersScalarFieldEnum[] | InsurersScalarFieldEnum
    having?: insurersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InsurersCountAggregateInputType | true
    _avg?: InsurersAvgAggregateInputType
    _sum?: InsurersSumAggregateInputType
    _min?: InsurersMinAggregateInputType
    _max?: InsurersMaxAggregateInputType
  }

  export type InsurersGroupByOutputType = {
    id: number
    name: string
    _count: InsurersCountAggregateOutputType | null
    _avg: InsurersAvgAggregateOutputType | null
    _sum: InsurersSumAggregateOutputType | null
    _min: InsurersMinAggregateOutputType | null
    _max: InsurersMaxAggregateOutputType | null
  }

  type GetInsurersGroupByPayload<T extends insurersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InsurersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InsurersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsurersGroupByOutputType[P]>
            : GetScalarType<T[P], InsurersGroupByOutputType[P]>
        }
      >
    >


  export type insurersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    clients?: boolean | insurers$clientsArgs<ExtArgs>
    uploads?: boolean | insurers$uploadsArgs<ExtArgs>
    _count?: boolean | InsurersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insurers"]>



  export type insurersSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type insurersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["insurers"]>
  export type insurersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | insurers$clientsArgs<ExtArgs>
    uploads?: boolean | insurers$uploadsArgs<ExtArgs>
    _count?: boolean | InsurersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $insurersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "insurers"
    objects: {
      clients: Prisma.$clientsPayload<ExtArgs>[]
      uploads: Prisma.$uploadsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["insurers"]>
    composites: {}
  }

  type insurersGetPayload<S extends boolean | null | undefined | insurersDefaultArgs> = $Result.GetResult<Prisma.$insurersPayload, S>

  type insurersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<insurersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InsurersCountAggregateInputType | true
    }

  export interface insurersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['insurers'], meta: { name: 'insurers' } }
    /**
     * Find zero or one Insurers that matches the filter.
     * @param {insurersFindUniqueArgs} args - Arguments to find a Insurers
     * @example
     * // Get one Insurers
     * const insurers = await prisma.insurers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends insurersFindUniqueArgs>(args: SelectSubset<T, insurersFindUniqueArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Insurers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {insurersFindUniqueOrThrowArgs} args - Arguments to find a Insurers
     * @example
     * // Get one Insurers
     * const insurers = await prisma.insurers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends insurersFindUniqueOrThrowArgs>(args: SelectSubset<T, insurersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Insurers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurersFindFirstArgs} args - Arguments to find a Insurers
     * @example
     * // Get one Insurers
     * const insurers = await prisma.insurers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends insurersFindFirstArgs>(args?: SelectSubset<T, insurersFindFirstArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Insurers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurersFindFirstOrThrowArgs} args - Arguments to find a Insurers
     * @example
     * // Get one Insurers
     * const insurers = await prisma.insurers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends insurersFindFirstOrThrowArgs>(args?: SelectSubset<T, insurersFindFirstOrThrowArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Insurers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insurers
     * const insurers = await prisma.insurers.findMany()
     * 
     * // Get first 10 Insurers
     * const insurers = await prisma.insurers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const insurersWithIdOnly = await prisma.insurers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends insurersFindManyArgs>(args?: SelectSubset<T, insurersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Insurers.
     * @param {insurersCreateArgs} args - Arguments to create a Insurers.
     * @example
     * // Create one Insurers
     * const Insurers = await prisma.insurers.create({
     *   data: {
     *     // ... data to create a Insurers
     *   }
     * })
     * 
     */
    create<T extends insurersCreateArgs>(args: SelectSubset<T, insurersCreateArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Insurers.
     * @param {insurersCreateManyArgs} args - Arguments to create many Insurers.
     * @example
     * // Create many Insurers
     * const insurers = await prisma.insurers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends insurersCreateManyArgs>(args?: SelectSubset<T, insurersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Insurers.
     * @param {insurersDeleteArgs} args - Arguments to delete one Insurers.
     * @example
     * // Delete one Insurers
     * const Insurers = await prisma.insurers.delete({
     *   where: {
     *     // ... filter to delete one Insurers
     *   }
     * })
     * 
     */
    delete<T extends insurersDeleteArgs>(args: SelectSubset<T, insurersDeleteArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Insurers.
     * @param {insurersUpdateArgs} args - Arguments to update one Insurers.
     * @example
     * // Update one Insurers
     * const insurers = await prisma.insurers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends insurersUpdateArgs>(args: SelectSubset<T, insurersUpdateArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Insurers.
     * @param {insurersDeleteManyArgs} args - Arguments to filter Insurers to delete.
     * @example
     * // Delete a few Insurers
     * const { count } = await prisma.insurers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends insurersDeleteManyArgs>(args?: SelectSubset<T, insurersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insurers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insurers
     * const insurers = await prisma.insurers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends insurersUpdateManyArgs>(args: SelectSubset<T, insurersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Insurers.
     * @param {insurersUpsertArgs} args - Arguments to update or create a Insurers.
     * @example
     * // Update or create a Insurers
     * const insurers = await prisma.insurers.upsert({
     *   create: {
     *     // ... data to create a Insurers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insurers we want to update
     *   }
     * })
     */
    upsert<T extends insurersUpsertArgs>(args: SelectSubset<T, insurersUpsertArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Insurers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurersCountArgs} args - Arguments to filter Insurers to count.
     * @example
     * // Count the number of Insurers
     * const count = await prisma.insurers.count({
     *   where: {
     *     // ... the filter for the Insurers we want to count
     *   }
     * })
    **/
    count<T extends insurersCountArgs>(
      args?: Subset<T, insurersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InsurersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Insurers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsurersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InsurersAggregateArgs>(args: Subset<T, InsurersAggregateArgs>): Prisma.PrismaPromise<GetInsurersAggregateType<T>>

    /**
     * Group by Insurers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends insurersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: insurersGroupByArgs['orderBy'] }
        : { orderBy?: insurersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, insurersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsurersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the insurers model
   */
  readonly fields: insurersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for insurers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__insurersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends insurers$clientsArgs<ExtArgs> = {}>(args?: Subset<T, insurers$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    uploads<T extends insurers$uploadsArgs<ExtArgs> = {}>(args?: Subset<T, insurers$uploadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the insurers model
   */ 
  interface insurersFieldRefs {
    readonly id: FieldRef<"insurers", 'Int'>
    readonly name: FieldRef<"insurers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * insurers findUnique
   */
  export type insurersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insurers
     */
    omit?: insurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    /**
     * Filter, which insurers to fetch.
     */
    where: insurersWhereUniqueInput
  }

  /**
   * insurers findUniqueOrThrow
   */
  export type insurersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insurers
     */
    omit?: insurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    /**
     * Filter, which insurers to fetch.
     */
    where: insurersWhereUniqueInput
  }

  /**
   * insurers findFirst
   */
  export type insurersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insurers
     */
    omit?: insurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    /**
     * Filter, which insurers to fetch.
     */
    where?: insurersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of insurers to fetch.
     */
    orderBy?: insurersOrderByWithRelationInput | insurersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for insurers.
     */
    cursor?: insurersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` insurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` insurers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of insurers.
     */
    distinct?: InsurersScalarFieldEnum | InsurersScalarFieldEnum[]
  }

  /**
   * insurers findFirstOrThrow
   */
  export type insurersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insurers
     */
    omit?: insurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    /**
     * Filter, which insurers to fetch.
     */
    where?: insurersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of insurers to fetch.
     */
    orderBy?: insurersOrderByWithRelationInput | insurersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for insurers.
     */
    cursor?: insurersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` insurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` insurers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of insurers.
     */
    distinct?: InsurersScalarFieldEnum | InsurersScalarFieldEnum[]
  }

  /**
   * insurers findMany
   */
  export type insurersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insurers
     */
    omit?: insurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    /**
     * Filter, which insurers to fetch.
     */
    where?: insurersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of insurers to fetch.
     */
    orderBy?: insurersOrderByWithRelationInput | insurersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing insurers.
     */
    cursor?: insurersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` insurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` insurers.
     */
    skip?: number
    distinct?: InsurersScalarFieldEnum | InsurersScalarFieldEnum[]
  }

  /**
   * insurers create
   */
  export type insurersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insurers
     */
    omit?: insurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    /**
     * The data needed to create a insurers.
     */
    data: XOR<insurersCreateInput, insurersUncheckedCreateInput>
  }

  /**
   * insurers createMany
   */
  export type insurersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many insurers.
     */
    data: insurersCreateManyInput | insurersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * insurers update
   */
  export type insurersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insurers
     */
    omit?: insurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    /**
     * The data needed to update a insurers.
     */
    data: XOR<insurersUpdateInput, insurersUncheckedUpdateInput>
    /**
     * Choose, which insurers to update.
     */
    where: insurersWhereUniqueInput
  }

  /**
   * insurers updateMany
   */
  export type insurersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update insurers.
     */
    data: XOR<insurersUpdateManyMutationInput, insurersUncheckedUpdateManyInput>
    /**
     * Filter which insurers to update
     */
    where?: insurersWhereInput
    /**
     * Limit how many insurers to update.
     */
    limit?: number
  }

  /**
   * insurers upsert
   */
  export type insurersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insurers
     */
    omit?: insurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    /**
     * The filter to search for the insurers to update in case it exists.
     */
    where: insurersWhereUniqueInput
    /**
     * In case the insurers found by the `where` argument doesn't exist, create a new insurers with this data.
     */
    create: XOR<insurersCreateInput, insurersUncheckedCreateInput>
    /**
     * In case the insurers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<insurersUpdateInput, insurersUncheckedUpdateInput>
  }

  /**
   * insurers delete
   */
  export type insurersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insurers
     */
    omit?: insurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    /**
     * Filter which insurers to delete.
     */
    where: insurersWhereUniqueInput
  }

  /**
   * insurers deleteMany
   */
  export type insurersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which insurers to delete
     */
    where?: insurersWhereInput
    /**
     * Limit how many insurers to delete.
     */
    limit?: number
  }

  /**
   * insurers.clients
   */
  export type insurers$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    where?: clientsWhereInput
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    cursor?: clientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * insurers.uploads
   */
  export type insurers$uploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    where?: uploadsWhereInput
    orderBy?: uploadsOrderByWithRelationInput | uploadsOrderByWithRelationInput[]
    cursor?: uploadsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UploadsScalarFieldEnum | UploadsScalarFieldEnum[]
  }

  /**
   * insurers without action
   */
  export type insurersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insurers
     */
    omit?: insurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
  }


  /**
   * Model clients
   */

  export type AggregateClients = {
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  export type ClientsAvgAggregateOutputType = {
    id: number | null
    insurer_id: number | null
  }

  export type ClientsSumAggregateOutputType = {
    id: number | null
    insurer_id: number | null
  }

  export type ClientsMinAggregateOutputType = {
    id: number | null
    client_name: string | null
    description: string | null
    insurer_id: number | null
  }

  export type ClientsMaxAggregateOutputType = {
    id: number | null
    client_name: string | null
    description: string | null
    insurer_id: number | null
  }

  export type ClientsCountAggregateOutputType = {
    id: number
    client_name: number
    description: number
    insurer_id: number
    _all: number
  }


  export type ClientsAvgAggregateInputType = {
    id?: true
    insurer_id?: true
  }

  export type ClientsSumAggregateInputType = {
    id?: true
    insurer_id?: true
  }

  export type ClientsMinAggregateInputType = {
    id?: true
    client_name?: true
    description?: true
    insurer_id?: true
  }

  export type ClientsMaxAggregateInputType = {
    id?: true
    client_name?: true
    description?: true
    insurer_id?: true
  }

  export type ClientsCountAggregateInputType = {
    id?: true
    client_name?: true
    description?: true
    insurer_id?: true
    _all?: true
  }

  export type ClientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to aggregate.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clients
    **/
    _count?: true | ClientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientsMaxAggregateInputType
  }

  export type GetClientsAggregateType<T extends ClientsAggregateArgs> = {
        [P in keyof T & keyof AggregateClients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClients[P]>
      : GetScalarType<T[P], AggregateClients[P]>
  }




  export type clientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientsWhereInput
    orderBy?: clientsOrderByWithAggregationInput | clientsOrderByWithAggregationInput[]
    by: ClientsScalarFieldEnum[] | ClientsScalarFieldEnum
    having?: clientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientsCountAggregateInputType | true
    _avg?: ClientsAvgAggregateInputType
    _sum?: ClientsSumAggregateInputType
    _min?: ClientsMinAggregateInputType
    _max?: ClientsMaxAggregateInputType
  }

  export type ClientsGroupByOutputType = {
    id: number
    client_name: string
    description: string | null
    insurer_id: number | null
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  type GetClientsGroupByPayload<T extends clientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientsGroupByOutputType[P]>
            : GetScalarType<T[P], ClientsGroupByOutputType[P]>
        }
      >
    >


  export type clientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_name?: boolean
    description?: boolean
    insurer_id?: boolean
    insurer?: boolean | clients$insurerArgs<ExtArgs>
    uploads?: boolean | clients$uploadsArgs<ExtArgs>
    decks?: boolean | clients$decksArgs<ExtArgs>
    intellicareMasterlist?: boolean | clients$intellicareMasterlistArgs<ExtArgs>
    maxicareMasterlist?: boolean | clients$maxicareMasterlistArgs<ExtArgs>
    intellicare?: boolean | clients$intellicareArgs<ExtArgs>
    maxicare?: boolean | clients$maxicareArgs<ExtArgs>
    customIllnesses?: boolean | clients$customIllnessesArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clients"]>



  export type clientsSelectScalar = {
    id?: boolean
    client_name?: boolean
    description?: boolean
    insurer_id?: boolean
  }

  export type clientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "client_name" | "description" | "insurer_id", ExtArgs["result"]["clients"]>
  export type clientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insurer?: boolean | clients$insurerArgs<ExtArgs>
    uploads?: boolean | clients$uploadsArgs<ExtArgs>
    decks?: boolean | clients$decksArgs<ExtArgs>
    intellicareMasterlist?: boolean | clients$intellicareMasterlistArgs<ExtArgs>
    maxicareMasterlist?: boolean | clients$maxicareMasterlistArgs<ExtArgs>
    intellicare?: boolean | clients$intellicareArgs<ExtArgs>
    maxicare?: boolean | clients$maxicareArgs<ExtArgs>
    customIllnesses?: boolean | clients$customIllnessesArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $clientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clients"
    objects: {
      insurer: Prisma.$insurersPayload<ExtArgs> | null
      uploads: Prisma.$uploadsPayload<ExtArgs>[]
      decks: Prisma.$decksPayload<ExtArgs>[]
      intellicareMasterlist: Prisma.$intellicareMasterlistPayload<ExtArgs>[]
      maxicareMasterlist: Prisma.$maxicareMasterlistPayload<ExtArgs>[]
      intellicare: Prisma.$intellicarePayload<ExtArgs>[]
      maxicare: Prisma.$maxicarePayload<ExtArgs>[]
      customIllnesses: Prisma.$customIllnessesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      client_name: string
      description: string | null
      insurer_id: number | null
    }, ExtArgs["result"]["clients"]>
    composites: {}
  }

  type clientsGetPayload<S extends boolean | null | undefined | clientsDefaultArgs> = $Result.GetResult<Prisma.$clientsPayload, S>

  type clientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientsCountAggregateInputType | true
    }

  export interface clientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clients'], meta: { name: 'clients' } }
    /**
     * Find zero or one Clients that matches the filter.
     * @param {clientsFindUniqueArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clientsFindUniqueArgs>(args: SelectSubset<T, clientsFindUniqueArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Clients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clientsFindUniqueOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clientsFindUniqueOrThrowArgs>(args: SelectSubset<T, clientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindFirstArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clientsFindFirstArgs>(args?: SelectSubset<T, clientsFindFirstArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Clients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindFirstOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clientsFindFirstOrThrowArgs>(args?: SelectSubset<T, clientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.clients.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.clients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientsWithIdOnly = await prisma.clients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clientsFindManyArgs>(args?: SelectSubset<T, clientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Clients.
     * @param {clientsCreateArgs} args - Arguments to create a Clients.
     * @example
     * // Create one Clients
     * const Clients = await prisma.clients.create({
     *   data: {
     *     // ... data to create a Clients
     *   }
     * })
     * 
     */
    create<T extends clientsCreateArgs>(args: SelectSubset<T, clientsCreateArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Clients.
     * @param {clientsCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clientsCreateManyArgs>(args?: SelectSubset<T, clientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clients.
     * @param {clientsDeleteArgs} args - Arguments to delete one Clients.
     * @example
     * // Delete one Clients
     * const Clients = await prisma.clients.delete({
     *   where: {
     *     // ... filter to delete one Clients
     *   }
     * })
     * 
     */
    delete<T extends clientsDeleteArgs>(args: SelectSubset<T, clientsDeleteArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Clients.
     * @param {clientsUpdateArgs} args - Arguments to update one Clients.
     * @example
     * // Update one Clients
     * const clients = await prisma.clients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clientsUpdateArgs>(args: SelectSubset<T, clientsUpdateArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Clients.
     * @param {clientsDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.clients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clientsDeleteManyArgs>(args?: SelectSubset<T, clientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clientsUpdateManyArgs>(args: SelectSubset<T, clientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clients.
     * @param {clientsUpsertArgs} args - Arguments to update or create a Clients.
     * @example
     * // Update or create a Clients
     * const clients = await prisma.clients.upsert({
     *   create: {
     *     // ... data to create a Clients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clients we want to update
     *   }
     * })
     */
    upsert<T extends clientsUpsertArgs>(args: SelectSubset<T, clientsUpsertArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.clients.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends clientsCountArgs>(
      args?: Subset<T, clientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientsAggregateArgs>(args: Subset<T, ClientsAggregateArgs>): Prisma.PrismaPromise<GetClientsAggregateType<T>>

    /**
     * Group by Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientsGroupByArgs['orderBy'] }
        : { orderBy?: clientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clients model
   */
  readonly fields: clientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insurer<T extends clients$insurerArgs<ExtArgs> = {}>(args?: Subset<T, clients$insurerArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    uploads<T extends clients$uploadsArgs<ExtArgs> = {}>(args?: Subset<T, clients$uploadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    decks<T extends clients$decksArgs<ExtArgs> = {}>(args?: Subset<T, clients$decksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$decksPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    intellicareMasterlist<T extends clients$intellicareMasterlistArgs<ExtArgs> = {}>(args?: Subset<T, clients$intellicareMasterlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$intellicareMasterlistPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    maxicareMasterlist<T extends clients$maxicareMasterlistArgs<ExtArgs> = {}>(args?: Subset<T, clients$maxicareMasterlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maxicareMasterlistPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    intellicare<T extends clients$intellicareArgs<ExtArgs> = {}>(args?: Subset<T, clients$intellicareArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$intellicarePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    maxicare<T extends clients$maxicareArgs<ExtArgs> = {}>(args?: Subset<T, clients$maxicareArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maxicarePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    customIllnesses<T extends clients$customIllnessesArgs<ExtArgs> = {}>(args?: Subset<T, clients$customIllnessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customIllnessesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clients model
   */ 
  interface clientsFieldRefs {
    readonly id: FieldRef<"clients", 'Int'>
    readonly client_name: FieldRef<"clients", 'String'>
    readonly description: FieldRef<"clients", 'String'>
    readonly insurer_id: FieldRef<"clients", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * clients findUnique
   */
  export type clientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients findUniqueOrThrow
   */
  export type clientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients findFirst
   */
  export type clientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * clients findFirstOrThrow
   */
  export type clientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * clients findMany
   */
  export type clientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * clients create
   */
  export type clientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * The data needed to create a clients.
     */
    data: XOR<clientsCreateInput, clientsUncheckedCreateInput>
  }

  /**
   * clients createMany
   */
  export type clientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clients.
     */
    data: clientsCreateManyInput | clientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clients update
   */
  export type clientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * The data needed to update a clients.
     */
    data: XOR<clientsUpdateInput, clientsUncheckedUpdateInput>
    /**
     * Choose, which clients to update.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients updateMany
   */
  export type clientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clients.
     */
    data: XOR<clientsUpdateManyMutationInput, clientsUncheckedUpdateManyInput>
    /**
     * Filter which clients to update
     */
    where?: clientsWhereInput
    /**
     * Limit how many clients to update.
     */
    limit?: number
  }

  /**
   * clients upsert
   */
  export type clientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * The filter to search for the clients to update in case it exists.
     */
    where: clientsWhereUniqueInput
    /**
     * In case the clients found by the `where` argument doesn't exist, create a new clients with this data.
     */
    create: XOR<clientsCreateInput, clientsUncheckedCreateInput>
    /**
     * In case the clients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientsUpdateInput, clientsUncheckedUpdateInput>
  }

  /**
   * clients delete
   */
  export type clientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter which clients to delete.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients deleteMany
   */
  export type clientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to delete
     */
    where?: clientsWhereInput
    /**
     * Limit how many clients to delete.
     */
    limit?: number
  }

  /**
   * clients.insurer
   */
  export type clients$insurerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurers
     */
    select?: insurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the insurers
     */
    omit?: insurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: insurersInclude<ExtArgs> | null
    where?: insurersWhereInput
  }

  /**
   * clients.uploads
   */
  export type clients$uploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    where?: uploadsWhereInput
    orderBy?: uploadsOrderByWithRelationInput | uploadsOrderByWithRelationInput[]
    cursor?: uploadsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UploadsScalarFieldEnum | UploadsScalarFieldEnum[]
  }

  /**
   * clients.decks
   */
  export type clients$decksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decks
     */
    select?: decksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decks
     */
    omit?: decksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: decksInclude<ExtArgs> | null
    where?: decksWhereInput
    orderBy?: decksOrderByWithRelationInput | decksOrderByWithRelationInput[]
    cursor?: decksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DecksScalarFieldEnum | DecksScalarFieldEnum[]
  }

  /**
   * clients.intellicareMasterlist
   */
  export type clients$intellicareMasterlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicareMasterlist
     */
    select?: intellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicareMasterlist
     */
    omit?: intellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareMasterlistInclude<ExtArgs> | null
    where?: intellicareMasterlistWhereInput
    orderBy?: intellicareMasterlistOrderByWithRelationInput | intellicareMasterlistOrderByWithRelationInput[]
    cursor?: intellicareMasterlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntellicareMasterlistScalarFieldEnum | IntellicareMasterlistScalarFieldEnum[]
  }

  /**
   * clients.maxicareMasterlist
   */
  export type clients$maxicareMasterlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicareMasterlist
     */
    select?: maxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicareMasterlist
     */
    omit?: maxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareMasterlistInclude<ExtArgs> | null
    where?: maxicareMasterlistWhereInput
    orderBy?: maxicareMasterlistOrderByWithRelationInput | maxicareMasterlistOrderByWithRelationInput[]
    cursor?: maxicareMasterlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaxicareMasterlistScalarFieldEnum | MaxicareMasterlistScalarFieldEnum[]
  }

  /**
   * clients.intellicare
   */
  export type clients$intellicareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicare
     */
    select?: intellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicare
     */
    omit?: intellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareInclude<ExtArgs> | null
    where?: intellicareWhereInput
    orderBy?: intellicareOrderByWithRelationInput | intellicareOrderByWithRelationInput[]
    cursor?: intellicareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntellicareScalarFieldEnum | IntellicareScalarFieldEnum[]
  }

  /**
   * clients.maxicare
   */
  export type clients$maxicareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicare
     */
    select?: maxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicare
     */
    omit?: maxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareInclude<ExtArgs> | null
    where?: maxicareWhereInput
    orderBy?: maxicareOrderByWithRelationInput | maxicareOrderByWithRelationInput[]
    cursor?: maxicareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaxicareScalarFieldEnum | MaxicareScalarFieldEnum[]
  }

  /**
   * clients.customIllnesses
   */
  export type clients$customIllnessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customIllnesses
     */
    select?: customIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customIllnesses
     */
    omit?: customIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customIllnessesInclude<ExtArgs> | null
    where?: customIllnessesWhereInput
    orderBy?: customIllnessesOrderByWithRelationInput | customIllnessesOrderByWithRelationInput[]
    cursor?: customIllnessesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomIllnessesScalarFieldEnum | CustomIllnessesScalarFieldEnum[]
  }

  /**
   * clients without action
   */
  export type clientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
  }


  /**
   * Model uploads
   */

  export type AggregateUploads = {
    _count: UploadsCountAggregateOutputType | null
    _avg: UploadsAvgAggregateOutputType | null
    _sum: UploadsSumAggregateOutputType | null
    _min: UploadsMinAggregateOutputType | null
    _max: UploadsMaxAggregateOutputType | null
  }

  export type UploadsAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    insurerId: number | null
  }

  export type UploadsSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    insurerId: number | null
  }

  export type UploadsMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    insurerId: number | null
    year: string | null
    months: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UploadsMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    insurerId: number | null
    year: string | null
    months: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UploadsCountAggregateOutputType = {
    id: number
    clientId: number
    insurerId: number
    year: number
    months: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UploadsAvgAggregateInputType = {
    id?: true
    clientId?: true
    insurerId?: true
  }

  export type UploadsSumAggregateInputType = {
    id?: true
    clientId?: true
    insurerId?: true
  }

  export type UploadsMinAggregateInputType = {
    id?: true
    clientId?: true
    insurerId?: true
    year?: true
    months?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UploadsMaxAggregateInputType = {
    id?: true
    clientId?: true
    insurerId?: true
    year?: true
    months?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UploadsCountAggregateInputType = {
    id?: true
    clientId?: true
    insurerId?: true
    year?: true
    months?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UploadsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which uploads to aggregate.
     */
    where?: uploadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uploads to fetch.
     */
    orderBy?: uploadsOrderByWithRelationInput | uploadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: uploadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned uploads
    **/
    _count?: true | UploadsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UploadsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UploadsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadsMaxAggregateInputType
  }

  export type GetUploadsAggregateType<T extends UploadsAggregateArgs> = {
        [P in keyof T & keyof AggregateUploads]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUploads[P]>
      : GetScalarType<T[P], AggregateUploads[P]>
  }




  export type uploadsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: uploadsWhereInput
    orderBy?: uploadsOrderByWithAggregationInput | uploadsOrderByWithAggregationInput[]
    by: UploadsScalarFieldEnum[] | UploadsScalarFieldEnum
    having?: uploadsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadsCountAggregateInputType | true
    _avg?: UploadsAvgAggregateInputType
    _sum?: UploadsSumAggregateInputType
    _min?: UploadsMinAggregateInputType
    _max?: UploadsMaxAggregateInputType
  }

  export type UploadsGroupByOutputType = {
    id: number
    clientId: number
    insurerId: number
    year: string
    months: string | null
    type: string
    createdAt: Date
    updatedAt: Date
    _count: UploadsCountAggregateOutputType | null
    _avg: UploadsAvgAggregateOutputType | null
    _sum: UploadsSumAggregateOutputType | null
    _min: UploadsMinAggregateOutputType | null
    _max: UploadsMaxAggregateOutputType | null
  }

  type GetUploadsGroupByPayload<T extends uploadsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UploadsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadsGroupByOutputType[P]>
            : GetScalarType<T[P], UploadsGroupByOutputType[P]>
        }
      >
    >


  export type uploadsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    insurerId?: boolean
    year?: boolean
    months?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clients?: boolean | clientsDefaultArgs<ExtArgs>
    insurers?: boolean | insurersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploads"]>



  export type uploadsSelectScalar = {
    id?: boolean
    clientId?: boolean
    insurerId?: boolean
    year?: boolean
    months?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type uploadsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "insurerId" | "year" | "months" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["uploads"]>
  export type uploadsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | clientsDefaultArgs<ExtArgs>
    insurers?: boolean | insurersDefaultArgs<ExtArgs>
  }

  export type $uploadsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "uploads"
    objects: {
      clients: Prisma.$clientsPayload<ExtArgs>
      insurers: Prisma.$insurersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number
      insurerId: number
      year: string
      months: string | null
      type: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["uploads"]>
    composites: {}
  }

  type uploadsGetPayload<S extends boolean | null | undefined | uploadsDefaultArgs> = $Result.GetResult<Prisma.$uploadsPayload, S>

  type uploadsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<uploadsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UploadsCountAggregateInputType | true
    }

  export interface uploadsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['uploads'], meta: { name: 'uploads' } }
    /**
     * Find zero or one Uploads that matches the filter.
     * @param {uploadsFindUniqueArgs} args - Arguments to find a Uploads
     * @example
     * // Get one Uploads
     * const uploads = await prisma.uploads.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends uploadsFindUniqueArgs>(args: SelectSubset<T, uploadsFindUniqueArgs<ExtArgs>>): Prisma__uploadsClient<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Uploads that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {uploadsFindUniqueOrThrowArgs} args - Arguments to find a Uploads
     * @example
     * // Get one Uploads
     * const uploads = await prisma.uploads.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends uploadsFindUniqueOrThrowArgs>(args: SelectSubset<T, uploadsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__uploadsClient<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Uploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uploadsFindFirstArgs} args - Arguments to find a Uploads
     * @example
     * // Get one Uploads
     * const uploads = await prisma.uploads.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends uploadsFindFirstArgs>(args?: SelectSubset<T, uploadsFindFirstArgs<ExtArgs>>): Prisma__uploadsClient<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Uploads that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uploadsFindFirstOrThrowArgs} args - Arguments to find a Uploads
     * @example
     * // Get one Uploads
     * const uploads = await prisma.uploads.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends uploadsFindFirstOrThrowArgs>(args?: SelectSubset<T, uploadsFindFirstOrThrowArgs<ExtArgs>>): Prisma__uploadsClient<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Uploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uploadsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Uploads
     * const uploads = await prisma.uploads.findMany()
     * 
     * // Get first 10 Uploads
     * const uploads = await prisma.uploads.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploadsWithIdOnly = await prisma.uploads.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends uploadsFindManyArgs>(args?: SelectSubset<T, uploadsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Uploads.
     * @param {uploadsCreateArgs} args - Arguments to create a Uploads.
     * @example
     * // Create one Uploads
     * const Uploads = await prisma.uploads.create({
     *   data: {
     *     // ... data to create a Uploads
     *   }
     * })
     * 
     */
    create<T extends uploadsCreateArgs>(args: SelectSubset<T, uploadsCreateArgs<ExtArgs>>): Prisma__uploadsClient<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Uploads.
     * @param {uploadsCreateManyArgs} args - Arguments to create many Uploads.
     * @example
     * // Create many Uploads
     * const uploads = await prisma.uploads.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends uploadsCreateManyArgs>(args?: SelectSubset<T, uploadsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Uploads.
     * @param {uploadsDeleteArgs} args - Arguments to delete one Uploads.
     * @example
     * // Delete one Uploads
     * const Uploads = await prisma.uploads.delete({
     *   where: {
     *     // ... filter to delete one Uploads
     *   }
     * })
     * 
     */
    delete<T extends uploadsDeleteArgs>(args: SelectSubset<T, uploadsDeleteArgs<ExtArgs>>): Prisma__uploadsClient<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Uploads.
     * @param {uploadsUpdateArgs} args - Arguments to update one Uploads.
     * @example
     * // Update one Uploads
     * const uploads = await prisma.uploads.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends uploadsUpdateArgs>(args: SelectSubset<T, uploadsUpdateArgs<ExtArgs>>): Prisma__uploadsClient<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Uploads.
     * @param {uploadsDeleteManyArgs} args - Arguments to filter Uploads to delete.
     * @example
     * // Delete a few Uploads
     * const { count } = await prisma.uploads.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends uploadsDeleteManyArgs>(args?: SelectSubset<T, uploadsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Uploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uploadsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Uploads
     * const uploads = await prisma.uploads.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends uploadsUpdateManyArgs>(args: SelectSubset<T, uploadsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Uploads.
     * @param {uploadsUpsertArgs} args - Arguments to update or create a Uploads.
     * @example
     * // Update or create a Uploads
     * const uploads = await prisma.uploads.upsert({
     *   create: {
     *     // ... data to create a Uploads
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Uploads we want to update
     *   }
     * })
     */
    upsert<T extends uploadsUpsertArgs>(args: SelectSubset<T, uploadsUpsertArgs<ExtArgs>>): Prisma__uploadsClient<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Uploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uploadsCountArgs} args - Arguments to filter Uploads to count.
     * @example
     * // Count the number of Uploads
     * const count = await prisma.uploads.count({
     *   where: {
     *     // ... the filter for the Uploads we want to count
     *   }
     * })
    **/
    count<T extends uploadsCountArgs>(
      args?: Subset<T, uploadsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UploadsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Uploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UploadsAggregateArgs>(args: Subset<T, UploadsAggregateArgs>): Prisma.PrismaPromise<GetUploadsAggregateType<T>>

    /**
     * Group by Uploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uploadsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends uploadsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: uploadsGroupByArgs['orderBy'] }
        : { orderBy?: uploadsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, uploadsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the uploads model
   */
  readonly fields: uploadsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for uploads.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__uploadsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends clientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientsDefaultArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    insurers<T extends insurersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, insurersDefaultArgs<ExtArgs>>): Prisma__insurersClient<$Result.GetResult<Prisma.$insurersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the uploads model
   */ 
  interface uploadsFieldRefs {
    readonly id: FieldRef<"uploads", 'Int'>
    readonly clientId: FieldRef<"uploads", 'Int'>
    readonly insurerId: FieldRef<"uploads", 'Int'>
    readonly year: FieldRef<"uploads", 'String'>
    readonly months: FieldRef<"uploads", 'String'>
    readonly type: FieldRef<"uploads", 'String'>
    readonly createdAt: FieldRef<"uploads", 'DateTime'>
    readonly updatedAt: FieldRef<"uploads", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * uploads findUnique
   */
  export type uploadsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    /**
     * Filter, which uploads to fetch.
     */
    where: uploadsWhereUniqueInput
  }

  /**
   * uploads findUniqueOrThrow
   */
  export type uploadsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    /**
     * Filter, which uploads to fetch.
     */
    where: uploadsWhereUniqueInput
  }

  /**
   * uploads findFirst
   */
  export type uploadsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    /**
     * Filter, which uploads to fetch.
     */
    where?: uploadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uploads to fetch.
     */
    orderBy?: uploadsOrderByWithRelationInput | uploadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for uploads.
     */
    cursor?: uploadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of uploads.
     */
    distinct?: UploadsScalarFieldEnum | UploadsScalarFieldEnum[]
  }

  /**
   * uploads findFirstOrThrow
   */
  export type uploadsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    /**
     * Filter, which uploads to fetch.
     */
    where?: uploadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uploads to fetch.
     */
    orderBy?: uploadsOrderByWithRelationInput | uploadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for uploads.
     */
    cursor?: uploadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of uploads.
     */
    distinct?: UploadsScalarFieldEnum | UploadsScalarFieldEnum[]
  }

  /**
   * uploads findMany
   */
  export type uploadsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    /**
     * Filter, which uploads to fetch.
     */
    where?: uploadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uploads to fetch.
     */
    orderBy?: uploadsOrderByWithRelationInput | uploadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing uploads.
     */
    cursor?: uploadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uploads.
     */
    skip?: number
    distinct?: UploadsScalarFieldEnum | UploadsScalarFieldEnum[]
  }

  /**
   * uploads create
   */
  export type uploadsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    /**
     * The data needed to create a uploads.
     */
    data: XOR<uploadsCreateInput, uploadsUncheckedCreateInput>
  }

  /**
   * uploads createMany
   */
  export type uploadsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many uploads.
     */
    data: uploadsCreateManyInput | uploadsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * uploads update
   */
  export type uploadsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    /**
     * The data needed to update a uploads.
     */
    data: XOR<uploadsUpdateInput, uploadsUncheckedUpdateInput>
    /**
     * Choose, which uploads to update.
     */
    where: uploadsWhereUniqueInput
  }

  /**
   * uploads updateMany
   */
  export type uploadsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update uploads.
     */
    data: XOR<uploadsUpdateManyMutationInput, uploadsUncheckedUpdateManyInput>
    /**
     * Filter which uploads to update
     */
    where?: uploadsWhereInput
    /**
     * Limit how many uploads to update.
     */
    limit?: number
  }

  /**
   * uploads upsert
   */
  export type uploadsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    /**
     * The filter to search for the uploads to update in case it exists.
     */
    where: uploadsWhereUniqueInput
    /**
     * In case the uploads found by the `where` argument doesn't exist, create a new uploads with this data.
     */
    create: XOR<uploadsCreateInput, uploadsUncheckedCreateInput>
    /**
     * In case the uploads was found with the provided `where` argument, update it with this data.
     */
    update: XOR<uploadsUpdateInput, uploadsUncheckedUpdateInput>
  }

  /**
   * uploads delete
   */
  export type uploadsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    /**
     * Filter which uploads to delete.
     */
    where: uploadsWhereUniqueInput
  }

  /**
   * uploads deleteMany
   */
  export type uploadsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which uploads to delete
     */
    where?: uploadsWhereInput
    /**
     * Limit how many uploads to delete.
     */
    limit?: number
  }

  /**
   * uploads without action
   */
  export type uploadsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
  }


  /**
   * Model decks
   */

  export type AggregateDecks = {
    _count: DecksCountAggregateOutputType | null
    _avg: DecksAvgAggregateOutputType | null
    _sum: DecksSumAggregateOutputType | null
    _min: DecksMinAggregateOutputType | null
    _max: DecksMaxAggregateOutputType | null
  }

  export type DecksAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type DecksSumAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type DecksMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type DecksMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: number | null
  }

  export type DecksCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    clientId: number
    _all: number
  }


  export type DecksAvgAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type DecksSumAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type DecksMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type DecksMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
  }

  export type DecksCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    _all?: true
  }

  export type DecksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which decks to aggregate.
     */
    where?: decksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of decks to fetch.
     */
    orderBy?: decksOrderByWithRelationInput | decksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: decksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned decks
    **/
    _count?: true | DecksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DecksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DecksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DecksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DecksMaxAggregateInputType
  }

  export type GetDecksAggregateType<T extends DecksAggregateArgs> = {
        [P in keyof T & keyof AggregateDecks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDecks[P]>
      : GetScalarType<T[P], AggregateDecks[P]>
  }




  export type decksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: decksWhereInput
    orderBy?: decksOrderByWithAggregationInput | decksOrderByWithAggregationInput[]
    by: DecksScalarFieldEnum[] | DecksScalarFieldEnum
    having?: decksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DecksCountAggregateInputType | true
    _avg?: DecksAvgAggregateInputType
    _sum?: DecksSumAggregateInputType
    _min?: DecksMinAggregateInputType
    _max?: DecksMaxAggregateInputType
  }

  export type DecksGroupByOutputType = {
    id: number
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    clientId: number
    _count: DecksCountAggregateOutputType | null
    _avg: DecksAvgAggregateOutputType | null
    _sum: DecksSumAggregateOutputType | null
    _min: DecksMinAggregateOutputType | null
    _max: DecksMaxAggregateOutputType | null
  }

  type GetDecksGroupByPayload<T extends decksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DecksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DecksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DecksGroupByOutputType[P]>
            : GetScalarType<T[P], DecksGroupByOutputType[P]>
        }
      >
    >


  export type decksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    clients?: boolean | clientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decks"]>



  export type decksSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
  }

  export type decksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "clientId", ExtArgs["result"]["decks"]>
  export type decksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | clientsDefaultArgs<ExtArgs>
  }

  export type $decksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "decks"
    objects: {
      clients: Prisma.$clientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
      clientId: number
    }, ExtArgs["result"]["decks"]>
    composites: {}
  }

  type decksGetPayload<S extends boolean | null | undefined | decksDefaultArgs> = $Result.GetResult<Prisma.$decksPayload, S>

  type decksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<decksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DecksCountAggregateInputType | true
    }

  export interface decksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['decks'], meta: { name: 'decks' } }
    /**
     * Find zero or one Decks that matches the filter.
     * @param {decksFindUniqueArgs} args - Arguments to find a Decks
     * @example
     * // Get one Decks
     * const decks = await prisma.decks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends decksFindUniqueArgs>(args: SelectSubset<T, decksFindUniqueArgs<ExtArgs>>): Prisma__decksClient<$Result.GetResult<Prisma.$decksPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Decks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {decksFindUniqueOrThrowArgs} args - Arguments to find a Decks
     * @example
     * // Get one Decks
     * const decks = await prisma.decks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends decksFindUniqueOrThrowArgs>(args: SelectSubset<T, decksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__decksClient<$Result.GetResult<Prisma.$decksPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Decks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {decksFindFirstArgs} args - Arguments to find a Decks
     * @example
     * // Get one Decks
     * const decks = await prisma.decks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends decksFindFirstArgs>(args?: SelectSubset<T, decksFindFirstArgs<ExtArgs>>): Prisma__decksClient<$Result.GetResult<Prisma.$decksPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Decks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {decksFindFirstOrThrowArgs} args - Arguments to find a Decks
     * @example
     * // Get one Decks
     * const decks = await prisma.decks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends decksFindFirstOrThrowArgs>(args?: SelectSubset<T, decksFindFirstOrThrowArgs<ExtArgs>>): Prisma__decksClient<$Result.GetResult<Prisma.$decksPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Decks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {decksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Decks
     * const decks = await prisma.decks.findMany()
     * 
     * // Get first 10 Decks
     * const decks = await prisma.decks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const decksWithIdOnly = await prisma.decks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends decksFindManyArgs>(args?: SelectSubset<T, decksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$decksPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Decks.
     * @param {decksCreateArgs} args - Arguments to create a Decks.
     * @example
     * // Create one Decks
     * const Decks = await prisma.decks.create({
     *   data: {
     *     // ... data to create a Decks
     *   }
     * })
     * 
     */
    create<T extends decksCreateArgs>(args: SelectSubset<T, decksCreateArgs<ExtArgs>>): Prisma__decksClient<$Result.GetResult<Prisma.$decksPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Decks.
     * @param {decksCreateManyArgs} args - Arguments to create many Decks.
     * @example
     * // Create many Decks
     * const decks = await prisma.decks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends decksCreateManyArgs>(args?: SelectSubset<T, decksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Decks.
     * @param {decksDeleteArgs} args - Arguments to delete one Decks.
     * @example
     * // Delete one Decks
     * const Decks = await prisma.decks.delete({
     *   where: {
     *     // ... filter to delete one Decks
     *   }
     * })
     * 
     */
    delete<T extends decksDeleteArgs>(args: SelectSubset<T, decksDeleteArgs<ExtArgs>>): Prisma__decksClient<$Result.GetResult<Prisma.$decksPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Decks.
     * @param {decksUpdateArgs} args - Arguments to update one Decks.
     * @example
     * // Update one Decks
     * const decks = await prisma.decks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends decksUpdateArgs>(args: SelectSubset<T, decksUpdateArgs<ExtArgs>>): Prisma__decksClient<$Result.GetResult<Prisma.$decksPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Decks.
     * @param {decksDeleteManyArgs} args - Arguments to filter Decks to delete.
     * @example
     * // Delete a few Decks
     * const { count } = await prisma.decks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends decksDeleteManyArgs>(args?: SelectSubset<T, decksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {decksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Decks
     * const decks = await prisma.decks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends decksUpdateManyArgs>(args: SelectSubset<T, decksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Decks.
     * @param {decksUpsertArgs} args - Arguments to update or create a Decks.
     * @example
     * // Update or create a Decks
     * const decks = await prisma.decks.upsert({
     *   create: {
     *     // ... data to create a Decks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Decks we want to update
     *   }
     * })
     */
    upsert<T extends decksUpsertArgs>(args: SelectSubset<T, decksUpsertArgs<ExtArgs>>): Prisma__decksClient<$Result.GetResult<Prisma.$decksPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {decksCountArgs} args - Arguments to filter Decks to count.
     * @example
     * // Count the number of Decks
     * const count = await prisma.decks.count({
     *   where: {
     *     // ... the filter for the Decks we want to count
     *   }
     * })
    **/
    count<T extends decksCountArgs>(
      args?: Subset<T, decksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DecksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DecksAggregateArgs>(args: Subset<T, DecksAggregateArgs>): Prisma.PrismaPromise<GetDecksAggregateType<T>>

    /**
     * Group by Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {decksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends decksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: decksGroupByArgs['orderBy'] }
        : { orderBy?: decksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, decksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDecksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the decks model
   */
  readonly fields: decksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for decks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__decksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends clientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientsDefaultArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the decks model
   */ 
  interface decksFieldRefs {
    readonly id: FieldRef<"decks", 'Int'>
    readonly name: FieldRef<"decks", 'String'>
    readonly description: FieldRef<"decks", 'String'>
    readonly createdAt: FieldRef<"decks", 'DateTime'>
    readonly updatedAt: FieldRef<"decks", 'DateTime'>
    readonly clientId: FieldRef<"decks", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * decks findUnique
   */
  export type decksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decks
     */
    select?: decksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decks
     */
    omit?: decksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: decksInclude<ExtArgs> | null
    /**
     * Filter, which decks to fetch.
     */
    where: decksWhereUniqueInput
  }

  /**
   * decks findUniqueOrThrow
   */
  export type decksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decks
     */
    select?: decksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decks
     */
    omit?: decksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: decksInclude<ExtArgs> | null
    /**
     * Filter, which decks to fetch.
     */
    where: decksWhereUniqueInput
  }

  /**
   * decks findFirst
   */
  export type decksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decks
     */
    select?: decksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decks
     */
    omit?: decksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: decksInclude<ExtArgs> | null
    /**
     * Filter, which decks to fetch.
     */
    where?: decksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of decks to fetch.
     */
    orderBy?: decksOrderByWithRelationInput | decksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for decks.
     */
    cursor?: decksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of decks.
     */
    distinct?: DecksScalarFieldEnum | DecksScalarFieldEnum[]
  }

  /**
   * decks findFirstOrThrow
   */
  export type decksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decks
     */
    select?: decksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decks
     */
    omit?: decksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: decksInclude<ExtArgs> | null
    /**
     * Filter, which decks to fetch.
     */
    where?: decksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of decks to fetch.
     */
    orderBy?: decksOrderByWithRelationInput | decksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for decks.
     */
    cursor?: decksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of decks.
     */
    distinct?: DecksScalarFieldEnum | DecksScalarFieldEnum[]
  }

  /**
   * decks findMany
   */
  export type decksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decks
     */
    select?: decksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decks
     */
    omit?: decksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: decksInclude<ExtArgs> | null
    /**
     * Filter, which decks to fetch.
     */
    where?: decksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of decks to fetch.
     */
    orderBy?: decksOrderByWithRelationInput | decksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing decks.
     */
    cursor?: decksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` decks.
     */
    skip?: number
    distinct?: DecksScalarFieldEnum | DecksScalarFieldEnum[]
  }

  /**
   * decks create
   */
  export type decksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decks
     */
    select?: decksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decks
     */
    omit?: decksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: decksInclude<ExtArgs> | null
    /**
     * The data needed to create a decks.
     */
    data: XOR<decksCreateInput, decksUncheckedCreateInput>
  }

  /**
   * decks createMany
   */
  export type decksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many decks.
     */
    data: decksCreateManyInput | decksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * decks update
   */
  export type decksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decks
     */
    select?: decksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decks
     */
    omit?: decksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: decksInclude<ExtArgs> | null
    /**
     * The data needed to update a decks.
     */
    data: XOR<decksUpdateInput, decksUncheckedUpdateInput>
    /**
     * Choose, which decks to update.
     */
    where: decksWhereUniqueInput
  }

  /**
   * decks updateMany
   */
  export type decksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update decks.
     */
    data: XOR<decksUpdateManyMutationInput, decksUncheckedUpdateManyInput>
    /**
     * Filter which decks to update
     */
    where?: decksWhereInput
    /**
     * Limit how many decks to update.
     */
    limit?: number
  }

  /**
   * decks upsert
   */
  export type decksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decks
     */
    select?: decksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decks
     */
    omit?: decksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: decksInclude<ExtArgs> | null
    /**
     * The filter to search for the decks to update in case it exists.
     */
    where: decksWhereUniqueInput
    /**
     * In case the decks found by the `where` argument doesn't exist, create a new decks with this data.
     */
    create: XOR<decksCreateInput, decksUncheckedCreateInput>
    /**
     * In case the decks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<decksUpdateInput, decksUncheckedUpdateInput>
  }

  /**
   * decks delete
   */
  export type decksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decks
     */
    select?: decksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decks
     */
    omit?: decksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: decksInclude<ExtArgs> | null
    /**
     * Filter which decks to delete.
     */
    where: decksWhereUniqueInput
  }

  /**
   * decks deleteMany
   */
  export type decksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which decks to delete
     */
    where?: decksWhereInput
    /**
     * Limit how many decks to delete.
     */
    limit?: number
  }

  /**
   * decks without action
   */
  export type decksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the decks
     */
    select?: decksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the decks
     */
    omit?: decksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: decksInclude<ExtArgs> | null
  }


  /**
   * Model intellicareMasterlist
   */

  export type AggregateIntellicareMasterlist = {
    _count: IntellicareMasterlistCountAggregateOutputType | null
    _avg: IntellicareMasterlistAvgAggregateOutputType | null
    _sum: IntellicareMasterlistSumAggregateOutputType | null
    _min: IntellicareMasterlistMinAggregateOutputType | null
    _max: IntellicareMasterlistMaxAggregateOutputType | null
  }

  export type IntellicareMasterlistAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    PREEXIST: number | null
    LIMIT: number | null
    AGE: number | null
  }

  export type IntellicareMasterlistSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    PREEXIST: number | null
    LIMIT: number | null
    AGE: number | null
  }

  export type IntellicareMasterlistMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    PY: string | null
    ACCOUNT_NO: string | null
    STATUS: string | null
    MEMBER_TYPE: string | null
    RNB: string | null
    PREEXIST: number | null
    LIMIT: number | null
    BIRTHDATE: Date | null
    AGE: number | null
    RELATION: string | null
    EE_ID: string | null
    CARD_NO: string | null
    COMPANY: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntellicareMasterlistMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    PY: string | null
    ACCOUNT_NO: string | null
    STATUS: string | null
    MEMBER_TYPE: string | null
    RNB: string | null
    PREEXIST: number | null
    LIMIT: number | null
    BIRTHDATE: Date | null
    AGE: number | null
    RELATION: string | null
    EE_ID: string | null
    CARD_NO: string | null
    COMPANY: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntellicareMasterlistCountAggregateOutputType = {
    id: number
    clientId: number
    PY: number
    ACCOUNT_NO: number
    STATUS: number
    MEMBER_TYPE: number
    RNB: number
    PREEXIST: number
    LIMIT: number
    BIRTHDATE: number
    AGE: number
    RELATION: number
    EE_ID: number
    CARD_NO: number
    COMPANY: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IntellicareMasterlistAvgAggregateInputType = {
    id?: true
    clientId?: true
    PREEXIST?: true
    LIMIT?: true
    AGE?: true
  }

  export type IntellicareMasterlistSumAggregateInputType = {
    id?: true
    clientId?: true
    PREEXIST?: true
    LIMIT?: true
    AGE?: true
  }

  export type IntellicareMasterlistMinAggregateInputType = {
    id?: true
    clientId?: true
    PY?: true
    ACCOUNT_NO?: true
    STATUS?: true
    MEMBER_TYPE?: true
    RNB?: true
    PREEXIST?: true
    LIMIT?: true
    BIRTHDATE?: true
    AGE?: true
    RELATION?: true
    EE_ID?: true
    CARD_NO?: true
    COMPANY?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntellicareMasterlistMaxAggregateInputType = {
    id?: true
    clientId?: true
    PY?: true
    ACCOUNT_NO?: true
    STATUS?: true
    MEMBER_TYPE?: true
    RNB?: true
    PREEXIST?: true
    LIMIT?: true
    BIRTHDATE?: true
    AGE?: true
    RELATION?: true
    EE_ID?: true
    CARD_NO?: true
    COMPANY?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntellicareMasterlistCountAggregateInputType = {
    id?: true
    clientId?: true
    PY?: true
    ACCOUNT_NO?: true
    STATUS?: true
    MEMBER_TYPE?: true
    RNB?: true
    PREEXIST?: true
    LIMIT?: true
    BIRTHDATE?: true
    AGE?: true
    RELATION?: true
    EE_ID?: true
    CARD_NO?: true
    COMPANY?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IntellicareMasterlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which intellicareMasterlist to aggregate.
     */
    where?: intellicareMasterlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intellicareMasterlists to fetch.
     */
    orderBy?: intellicareMasterlistOrderByWithRelationInput | intellicareMasterlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: intellicareMasterlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intellicareMasterlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intellicareMasterlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned intellicareMasterlists
    **/
    _count?: true | IntellicareMasterlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IntellicareMasterlistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IntellicareMasterlistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntellicareMasterlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntellicareMasterlistMaxAggregateInputType
  }

  export type GetIntellicareMasterlistAggregateType<T extends IntellicareMasterlistAggregateArgs> = {
        [P in keyof T & keyof AggregateIntellicareMasterlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntellicareMasterlist[P]>
      : GetScalarType<T[P], AggregateIntellicareMasterlist[P]>
  }




  export type intellicareMasterlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: intellicareMasterlistWhereInput
    orderBy?: intellicareMasterlistOrderByWithAggregationInput | intellicareMasterlistOrderByWithAggregationInput[]
    by: IntellicareMasterlistScalarFieldEnum[] | IntellicareMasterlistScalarFieldEnum
    having?: intellicareMasterlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntellicareMasterlistCountAggregateInputType | true
    _avg?: IntellicareMasterlistAvgAggregateInputType
    _sum?: IntellicareMasterlistSumAggregateInputType
    _min?: IntellicareMasterlistMinAggregateInputType
    _max?: IntellicareMasterlistMaxAggregateInputType
  }

  export type IntellicareMasterlistGroupByOutputType = {
    id: number
    clientId: number
    PY: string | null
    ACCOUNT_NO: string | null
    STATUS: string | null
    MEMBER_TYPE: string | null
    RNB: string | null
    PREEXIST: number | null
    LIMIT: number | null
    BIRTHDATE: Date | null
    AGE: number | null
    RELATION: string | null
    EE_ID: string | null
    CARD_NO: string | null
    COMPANY: string | null
    createdAt: Date
    updatedAt: Date
    _count: IntellicareMasterlistCountAggregateOutputType | null
    _avg: IntellicareMasterlistAvgAggregateOutputType | null
    _sum: IntellicareMasterlistSumAggregateOutputType | null
    _min: IntellicareMasterlistMinAggregateOutputType | null
    _max: IntellicareMasterlistMaxAggregateOutputType | null
  }

  type GetIntellicareMasterlistGroupByPayload<T extends intellicareMasterlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntellicareMasterlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntellicareMasterlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntellicareMasterlistGroupByOutputType[P]>
            : GetScalarType<T[P], IntellicareMasterlistGroupByOutputType[P]>
        }
      >
    >


  export type intellicareMasterlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    PY?: boolean
    ACCOUNT_NO?: boolean
    STATUS?: boolean
    MEMBER_TYPE?: boolean
    RNB?: boolean
    PREEXIST?: boolean
    LIMIT?: boolean
    BIRTHDATE?: boolean
    AGE?: boolean
    RELATION?: boolean
    EE_ID?: boolean
    CARD_NO?: boolean
    COMPANY?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clients?: boolean | clientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intellicareMasterlist"]>



  export type intellicareMasterlistSelectScalar = {
    id?: boolean
    clientId?: boolean
    PY?: boolean
    ACCOUNT_NO?: boolean
    STATUS?: boolean
    MEMBER_TYPE?: boolean
    RNB?: boolean
    PREEXIST?: boolean
    LIMIT?: boolean
    BIRTHDATE?: boolean
    AGE?: boolean
    RELATION?: boolean
    EE_ID?: boolean
    CARD_NO?: boolean
    COMPANY?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type intellicareMasterlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "PY" | "ACCOUNT_NO" | "STATUS" | "MEMBER_TYPE" | "RNB" | "PREEXIST" | "LIMIT" | "BIRTHDATE" | "AGE" | "RELATION" | "EE_ID" | "CARD_NO" | "COMPANY" | "createdAt" | "updatedAt", ExtArgs["result"]["intellicareMasterlist"]>
  export type intellicareMasterlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | clientsDefaultArgs<ExtArgs>
  }

  export type $intellicareMasterlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "intellicareMasterlist"
    objects: {
      clients: Prisma.$clientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number
      PY: string | null
      ACCOUNT_NO: string | null
      STATUS: string | null
      MEMBER_TYPE: string | null
      RNB: string | null
      PREEXIST: number | null
      LIMIT: number | null
      BIRTHDATE: Date | null
      AGE: number | null
      RELATION: string | null
      EE_ID: string | null
      CARD_NO: string | null
      COMPANY: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["intellicareMasterlist"]>
    composites: {}
  }

  type intellicareMasterlistGetPayload<S extends boolean | null | undefined | intellicareMasterlistDefaultArgs> = $Result.GetResult<Prisma.$intellicareMasterlistPayload, S>

  type intellicareMasterlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<intellicareMasterlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntellicareMasterlistCountAggregateInputType | true
    }

  export interface intellicareMasterlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['intellicareMasterlist'], meta: { name: 'intellicareMasterlist' } }
    /**
     * Find zero or one IntellicareMasterlist that matches the filter.
     * @param {intellicareMasterlistFindUniqueArgs} args - Arguments to find a IntellicareMasterlist
     * @example
     * // Get one IntellicareMasterlist
     * const intellicareMasterlist = await prisma.intellicareMasterlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends intellicareMasterlistFindUniqueArgs>(args: SelectSubset<T, intellicareMasterlistFindUniqueArgs<ExtArgs>>): Prisma__intellicareMasterlistClient<$Result.GetResult<Prisma.$intellicareMasterlistPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one IntellicareMasterlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {intellicareMasterlistFindUniqueOrThrowArgs} args - Arguments to find a IntellicareMasterlist
     * @example
     * // Get one IntellicareMasterlist
     * const intellicareMasterlist = await prisma.intellicareMasterlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends intellicareMasterlistFindUniqueOrThrowArgs>(args: SelectSubset<T, intellicareMasterlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__intellicareMasterlistClient<$Result.GetResult<Prisma.$intellicareMasterlistPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first IntellicareMasterlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intellicareMasterlistFindFirstArgs} args - Arguments to find a IntellicareMasterlist
     * @example
     * // Get one IntellicareMasterlist
     * const intellicareMasterlist = await prisma.intellicareMasterlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends intellicareMasterlistFindFirstArgs>(args?: SelectSubset<T, intellicareMasterlistFindFirstArgs<ExtArgs>>): Prisma__intellicareMasterlistClient<$Result.GetResult<Prisma.$intellicareMasterlistPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first IntellicareMasterlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intellicareMasterlistFindFirstOrThrowArgs} args - Arguments to find a IntellicareMasterlist
     * @example
     * // Get one IntellicareMasterlist
     * const intellicareMasterlist = await prisma.intellicareMasterlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends intellicareMasterlistFindFirstOrThrowArgs>(args?: SelectSubset<T, intellicareMasterlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__intellicareMasterlistClient<$Result.GetResult<Prisma.$intellicareMasterlistPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more IntellicareMasterlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intellicareMasterlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IntellicareMasterlists
     * const intellicareMasterlists = await prisma.intellicareMasterlist.findMany()
     * 
     * // Get first 10 IntellicareMasterlists
     * const intellicareMasterlists = await prisma.intellicareMasterlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const intellicareMasterlistWithIdOnly = await prisma.intellicareMasterlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends intellicareMasterlistFindManyArgs>(args?: SelectSubset<T, intellicareMasterlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$intellicareMasterlistPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a IntellicareMasterlist.
     * @param {intellicareMasterlistCreateArgs} args - Arguments to create a IntellicareMasterlist.
     * @example
     * // Create one IntellicareMasterlist
     * const IntellicareMasterlist = await prisma.intellicareMasterlist.create({
     *   data: {
     *     // ... data to create a IntellicareMasterlist
     *   }
     * })
     * 
     */
    create<T extends intellicareMasterlistCreateArgs>(args: SelectSubset<T, intellicareMasterlistCreateArgs<ExtArgs>>): Prisma__intellicareMasterlistClient<$Result.GetResult<Prisma.$intellicareMasterlistPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many IntellicareMasterlists.
     * @param {intellicareMasterlistCreateManyArgs} args - Arguments to create many IntellicareMasterlists.
     * @example
     * // Create many IntellicareMasterlists
     * const intellicareMasterlist = await prisma.intellicareMasterlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends intellicareMasterlistCreateManyArgs>(args?: SelectSubset<T, intellicareMasterlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IntellicareMasterlist.
     * @param {intellicareMasterlistDeleteArgs} args - Arguments to delete one IntellicareMasterlist.
     * @example
     * // Delete one IntellicareMasterlist
     * const IntellicareMasterlist = await prisma.intellicareMasterlist.delete({
     *   where: {
     *     // ... filter to delete one IntellicareMasterlist
     *   }
     * })
     * 
     */
    delete<T extends intellicareMasterlistDeleteArgs>(args: SelectSubset<T, intellicareMasterlistDeleteArgs<ExtArgs>>): Prisma__intellicareMasterlistClient<$Result.GetResult<Prisma.$intellicareMasterlistPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one IntellicareMasterlist.
     * @param {intellicareMasterlistUpdateArgs} args - Arguments to update one IntellicareMasterlist.
     * @example
     * // Update one IntellicareMasterlist
     * const intellicareMasterlist = await prisma.intellicareMasterlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends intellicareMasterlistUpdateArgs>(args: SelectSubset<T, intellicareMasterlistUpdateArgs<ExtArgs>>): Prisma__intellicareMasterlistClient<$Result.GetResult<Prisma.$intellicareMasterlistPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more IntellicareMasterlists.
     * @param {intellicareMasterlistDeleteManyArgs} args - Arguments to filter IntellicareMasterlists to delete.
     * @example
     * // Delete a few IntellicareMasterlists
     * const { count } = await prisma.intellicareMasterlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends intellicareMasterlistDeleteManyArgs>(args?: SelectSubset<T, intellicareMasterlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntellicareMasterlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intellicareMasterlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IntellicareMasterlists
     * const intellicareMasterlist = await prisma.intellicareMasterlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends intellicareMasterlistUpdateManyArgs>(args: SelectSubset<T, intellicareMasterlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IntellicareMasterlist.
     * @param {intellicareMasterlistUpsertArgs} args - Arguments to update or create a IntellicareMasterlist.
     * @example
     * // Update or create a IntellicareMasterlist
     * const intellicareMasterlist = await prisma.intellicareMasterlist.upsert({
     *   create: {
     *     // ... data to create a IntellicareMasterlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IntellicareMasterlist we want to update
     *   }
     * })
     */
    upsert<T extends intellicareMasterlistUpsertArgs>(args: SelectSubset<T, intellicareMasterlistUpsertArgs<ExtArgs>>): Prisma__intellicareMasterlistClient<$Result.GetResult<Prisma.$intellicareMasterlistPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of IntellicareMasterlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intellicareMasterlistCountArgs} args - Arguments to filter IntellicareMasterlists to count.
     * @example
     * // Count the number of IntellicareMasterlists
     * const count = await prisma.intellicareMasterlist.count({
     *   where: {
     *     // ... the filter for the IntellicareMasterlists we want to count
     *   }
     * })
    **/
    count<T extends intellicareMasterlistCountArgs>(
      args?: Subset<T, intellicareMasterlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntellicareMasterlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IntellicareMasterlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntellicareMasterlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IntellicareMasterlistAggregateArgs>(args: Subset<T, IntellicareMasterlistAggregateArgs>): Prisma.PrismaPromise<GetIntellicareMasterlistAggregateType<T>>

    /**
     * Group by IntellicareMasterlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intellicareMasterlistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends intellicareMasterlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: intellicareMasterlistGroupByArgs['orderBy'] }
        : { orderBy?: intellicareMasterlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, intellicareMasterlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntellicareMasterlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the intellicareMasterlist model
   */
  readonly fields: intellicareMasterlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for intellicareMasterlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__intellicareMasterlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends clientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientsDefaultArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the intellicareMasterlist model
   */ 
  interface intellicareMasterlistFieldRefs {
    readonly id: FieldRef<"intellicareMasterlist", 'Int'>
    readonly clientId: FieldRef<"intellicareMasterlist", 'Int'>
    readonly PY: FieldRef<"intellicareMasterlist", 'String'>
    readonly ACCOUNT_NO: FieldRef<"intellicareMasterlist", 'String'>
    readonly STATUS: FieldRef<"intellicareMasterlist", 'String'>
    readonly MEMBER_TYPE: FieldRef<"intellicareMasterlist", 'String'>
    readonly RNB: FieldRef<"intellicareMasterlist", 'String'>
    readonly PREEXIST: FieldRef<"intellicareMasterlist", 'Float'>
    readonly LIMIT: FieldRef<"intellicareMasterlist", 'Float'>
    readonly BIRTHDATE: FieldRef<"intellicareMasterlist", 'DateTime'>
    readonly AGE: FieldRef<"intellicareMasterlist", 'Int'>
    readonly RELATION: FieldRef<"intellicareMasterlist", 'String'>
    readonly EE_ID: FieldRef<"intellicareMasterlist", 'String'>
    readonly CARD_NO: FieldRef<"intellicareMasterlist", 'String'>
    readonly COMPANY: FieldRef<"intellicareMasterlist", 'String'>
    readonly createdAt: FieldRef<"intellicareMasterlist", 'DateTime'>
    readonly updatedAt: FieldRef<"intellicareMasterlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * intellicareMasterlist findUnique
   */
  export type intellicareMasterlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicareMasterlist
     */
    select?: intellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicareMasterlist
     */
    omit?: intellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which intellicareMasterlist to fetch.
     */
    where: intellicareMasterlistWhereUniqueInput
  }

  /**
   * intellicareMasterlist findUniqueOrThrow
   */
  export type intellicareMasterlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicareMasterlist
     */
    select?: intellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicareMasterlist
     */
    omit?: intellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which intellicareMasterlist to fetch.
     */
    where: intellicareMasterlistWhereUniqueInput
  }

  /**
   * intellicareMasterlist findFirst
   */
  export type intellicareMasterlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicareMasterlist
     */
    select?: intellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicareMasterlist
     */
    omit?: intellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which intellicareMasterlist to fetch.
     */
    where?: intellicareMasterlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intellicareMasterlists to fetch.
     */
    orderBy?: intellicareMasterlistOrderByWithRelationInput | intellicareMasterlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for intellicareMasterlists.
     */
    cursor?: intellicareMasterlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intellicareMasterlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intellicareMasterlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of intellicareMasterlists.
     */
    distinct?: IntellicareMasterlistScalarFieldEnum | IntellicareMasterlistScalarFieldEnum[]
  }

  /**
   * intellicareMasterlist findFirstOrThrow
   */
  export type intellicareMasterlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicareMasterlist
     */
    select?: intellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicareMasterlist
     */
    omit?: intellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which intellicareMasterlist to fetch.
     */
    where?: intellicareMasterlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intellicareMasterlists to fetch.
     */
    orderBy?: intellicareMasterlistOrderByWithRelationInput | intellicareMasterlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for intellicareMasterlists.
     */
    cursor?: intellicareMasterlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intellicareMasterlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intellicareMasterlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of intellicareMasterlists.
     */
    distinct?: IntellicareMasterlistScalarFieldEnum | IntellicareMasterlistScalarFieldEnum[]
  }

  /**
   * intellicareMasterlist findMany
   */
  export type intellicareMasterlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicareMasterlist
     */
    select?: intellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicareMasterlist
     */
    omit?: intellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which intellicareMasterlists to fetch.
     */
    where?: intellicareMasterlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intellicareMasterlists to fetch.
     */
    orderBy?: intellicareMasterlistOrderByWithRelationInput | intellicareMasterlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing intellicareMasterlists.
     */
    cursor?: intellicareMasterlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intellicareMasterlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intellicareMasterlists.
     */
    skip?: number
    distinct?: IntellicareMasterlistScalarFieldEnum | IntellicareMasterlistScalarFieldEnum[]
  }

  /**
   * intellicareMasterlist create
   */
  export type intellicareMasterlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicareMasterlist
     */
    select?: intellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicareMasterlist
     */
    omit?: intellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareMasterlistInclude<ExtArgs> | null
    /**
     * The data needed to create a intellicareMasterlist.
     */
    data: XOR<intellicareMasterlistCreateInput, intellicareMasterlistUncheckedCreateInput>
  }

  /**
   * intellicareMasterlist createMany
   */
  export type intellicareMasterlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many intellicareMasterlists.
     */
    data: intellicareMasterlistCreateManyInput | intellicareMasterlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * intellicareMasterlist update
   */
  export type intellicareMasterlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicareMasterlist
     */
    select?: intellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicareMasterlist
     */
    omit?: intellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareMasterlistInclude<ExtArgs> | null
    /**
     * The data needed to update a intellicareMasterlist.
     */
    data: XOR<intellicareMasterlistUpdateInput, intellicareMasterlistUncheckedUpdateInput>
    /**
     * Choose, which intellicareMasterlist to update.
     */
    where: intellicareMasterlistWhereUniqueInput
  }

  /**
   * intellicareMasterlist updateMany
   */
  export type intellicareMasterlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update intellicareMasterlists.
     */
    data: XOR<intellicareMasterlistUpdateManyMutationInput, intellicareMasterlistUncheckedUpdateManyInput>
    /**
     * Filter which intellicareMasterlists to update
     */
    where?: intellicareMasterlistWhereInput
    /**
     * Limit how many intellicareMasterlists to update.
     */
    limit?: number
  }

  /**
   * intellicareMasterlist upsert
   */
  export type intellicareMasterlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicareMasterlist
     */
    select?: intellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicareMasterlist
     */
    omit?: intellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareMasterlistInclude<ExtArgs> | null
    /**
     * The filter to search for the intellicareMasterlist to update in case it exists.
     */
    where: intellicareMasterlistWhereUniqueInput
    /**
     * In case the intellicareMasterlist found by the `where` argument doesn't exist, create a new intellicareMasterlist with this data.
     */
    create: XOR<intellicareMasterlistCreateInput, intellicareMasterlistUncheckedCreateInput>
    /**
     * In case the intellicareMasterlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<intellicareMasterlistUpdateInput, intellicareMasterlistUncheckedUpdateInput>
  }

  /**
   * intellicareMasterlist delete
   */
  export type intellicareMasterlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicareMasterlist
     */
    select?: intellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicareMasterlist
     */
    omit?: intellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter which intellicareMasterlist to delete.
     */
    where: intellicareMasterlistWhereUniqueInput
  }

  /**
   * intellicareMasterlist deleteMany
   */
  export type intellicareMasterlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which intellicareMasterlists to delete
     */
    where?: intellicareMasterlistWhereInput
    /**
     * Limit how many intellicareMasterlists to delete.
     */
    limit?: number
  }

  /**
   * intellicareMasterlist without action
   */
  export type intellicareMasterlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicareMasterlist
     */
    select?: intellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicareMasterlist
     */
    omit?: intellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareMasterlistInclude<ExtArgs> | null
  }


  /**
   * Model maxicareMasterlist
   */

  export type AggregateMaxicareMasterlist = {
    _count: MaxicareMasterlistCountAggregateOutputType | null
    _avg: MaxicareMasterlistAvgAggregateOutputType | null
    _sum: MaxicareMasterlistSumAggregateOutputType | null
    _min: MaxicareMasterlistMinAggregateOutputType | null
    _max: MaxicareMasterlistMaxAggregateOutputType | null
  }

  export type MaxicareMasterlistAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    LIMIT: number | null
  }

  export type MaxicareMasterlistSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    LIMIT: number | null
  }

  export type MaxicareMasterlistMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    PY: string | null
    ACCOUNT_NO: string | null
    STATUS: string | null
    MEMBER_TYPE: string | null
    LIMIT: number | null
    RELATION: string | null
    EE_ID: string | null
    CARD_NO: string | null
    COMPANY: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaxicareMasterlistMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    PY: string | null
    ACCOUNT_NO: string | null
    STATUS: string | null
    MEMBER_TYPE: string | null
    LIMIT: number | null
    RELATION: string | null
    EE_ID: string | null
    CARD_NO: string | null
    COMPANY: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaxicareMasterlistCountAggregateOutputType = {
    id: number
    clientId: number
    PY: number
    ACCOUNT_NO: number
    STATUS: number
    MEMBER_TYPE: number
    LIMIT: number
    RELATION: number
    EE_ID: number
    CARD_NO: number
    COMPANY: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaxicareMasterlistAvgAggregateInputType = {
    id?: true
    clientId?: true
    LIMIT?: true
  }

  export type MaxicareMasterlistSumAggregateInputType = {
    id?: true
    clientId?: true
    LIMIT?: true
  }

  export type MaxicareMasterlistMinAggregateInputType = {
    id?: true
    clientId?: true
    PY?: true
    ACCOUNT_NO?: true
    STATUS?: true
    MEMBER_TYPE?: true
    LIMIT?: true
    RELATION?: true
    EE_ID?: true
    CARD_NO?: true
    COMPANY?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaxicareMasterlistMaxAggregateInputType = {
    id?: true
    clientId?: true
    PY?: true
    ACCOUNT_NO?: true
    STATUS?: true
    MEMBER_TYPE?: true
    LIMIT?: true
    RELATION?: true
    EE_ID?: true
    CARD_NO?: true
    COMPANY?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaxicareMasterlistCountAggregateInputType = {
    id?: true
    clientId?: true
    PY?: true
    ACCOUNT_NO?: true
    STATUS?: true
    MEMBER_TYPE?: true
    LIMIT?: true
    RELATION?: true
    EE_ID?: true
    CARD_NO?: true
    COMPANY?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaxicareMasterlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maxicareMasterlist to aggregate.
     */
    where?: maxicareMasterlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maxicareMasterlists to fetch.
     */
    orderBy?: maxicareMasterlistOrderByWithRelationInput | maxicareMasterlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: maxicareMasterlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maxicareMasterlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maxicareMasterlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned maxicareMasterlists
    **/
    _count?: true | MaxicareMasterlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaxicareMasterlistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaxicareMasterlistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaxicareMasterlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaxicareMasterlistMaxAggregateInputType
  }

  export type GetMaxicareMasterlistAggregateType<T extends MaxicareMasterlistAggregateArgs> = {
        [P in keyof T & keyof AggregateMaxicareMasterlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaxicareMasterlist[P]>
      : GetScalarType<T[P], AggregateMaxicareMasterlist[P]>
  }




  export type maxicareMasterlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: maxicareMasterlistWhereInput
    orderBy?: maxicareMasterlistOrderByWithAggregationInput | maxicareMasterlistOrderByWithAggregationInput[]
    by: MaxicareMasterlistScalarFieldEnum[] | MaxicareMasterlistScalarFieldEnum
    having?: maxicareMasterlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaxicareMasterlistCountAggregateInputType | true
    _avg?: MaxicareMasterlistAvgAggregateInputType
    _sum?: MaxicareMasterlistSumAggregateInputType
    _min?: MaxicareMasterlistMinAggregateInputType
    _max?: MaxicareMasterlistMaxAggregateInputType
  }

  export type MaxicareMasterlistGroupByOutputType = {
    id: number
    clientId: number
    PY: string | null
    ACCOUNT_NO: string | null
    STATUS: string | null
    MEMBER_TYPE: string | null
    LIMIT: number | null
    RELATION: string | null
    EE_ID: string | null
    CARD_NO: string | null
    COMPANY: string | null
    createdAt: Date
    updatedAt: Date
    _count: MaxicareMasterlistCountAggregateOutputType | null
    _avg: MaxicareMasterlistAvgAggregateOutputType | null
    _sum: MaxicareMasterlistSumAggregateOutputType | null
    _min: MaxicareMasterlistMinAggregateOutputType | null
    _max: MaxicareMasterlistMaxAggregateOutputType | null
  }

  type GetMaxicareMasterlistGroupByPayload<T extends maxicareMasterlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaxicareMasterlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaxicareMasterlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaxicareMasterlistGroupByOutputType[P]>
            : GetScalarType<T[P], MaxicareMasterlistGroupByOutputType[P]>
        }
      >
    >


  export type maxicareMasterlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    PY?: boolean
    ACCOUNT_NO?: boolean
    STATUS?: boolean
    MEMBER_TYPE?: boolean
    LIMIT?: boolean
    RELATION?: boolean
    EE_ID?: boolean
    CARD_NO?: boolean
    COMPANY?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clients?: boolean | clientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maxicareMasterlist"]>



  export type maxicareMasterlistSelectScalar = {
    id?: boolean
    clientId?: boolean
    PY?: boolean
    ACCOUNT_NO?: boolean
    STATUS?: boolean
    MEMBER_TYPE?: boolean
    LIMIT?: boolean
    RELATION?: boolean
    EE_ID?: boolean
    CARD_NO?: boolean
    COMPANY?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type maxicareMasterlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "PY" | "ACCOUNT_NO" | "STATUS" | "MEMBER_TYPE" | "LIMIT" | "RELATION" | "EE_ID" | "CARD_NO" | "COMPANY" | "createdAt" | "updatedAt", ExtArgs["result"]["maxicareMasterlist"]>
  export type maxicareMasterlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | clientsDefaultArgs<ExtArgs>
  }

  export type $maxicareMasterlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "maxicareMasterlist"
    objects: {
      clients: Prisma.$clientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number
      PY: string | null
      ACCOUNT_NO: string | null
      STATUS: string | null
      MEMBER_TYPE: string | null
      LIMIT: number | null
      RELATION: string | null
      EE_ID: string | null
      CARD_NO: string | null
      COMPANY: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["maxicareMasterlist"]>
    composites: {}
  }

  type maxicareMasterlistGetPayload<S extends boolean | null | undefined | maxicareMasterlistDefaultArgs> = $Result.GetResult<Prisma.$maxicareMasterlistPayload, S>

  type maxicareMasterlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<maxicareMasterlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaxicareMasterlistCountAggregateInputType | true
    }

  export interface maxicareMasterlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['maxicareMasterlist'], meta: { name: 'maxicareMasterlist' } }
    /**
     * Find zero or one MaxicareMasterlist that matches the filter.
     * @param {maxicareMasterlistFindUniqueArgs} args - Arguments to find a MaxicareMasterlist
     * @example
     * // Get one MaxicareMasterlist
     * const maxicareMasterlist = await prisma.maxicareMasterlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends maxicareMasterlistFindUniqueArgs>(args: SelectSubset<T, maxicareMasterlistFindUniqueArgs<ExtArgs>>): Prisma__maxicareMasterlistClient<$Result.GetResult<Prisma.$maxicareMasterlistPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one MaxicareMasterlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {maxicareMasterlistFindUniqueOrThrowArgs} args - Arguments to find a MaxicareMasterlist
     * @example
     * // Get one MaxicareMasterlist
     * const maxicareMasterlist = await prisma.maxicareMasterlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends maxicareMasterlistFindUniqueOrThrowArgs>(args: SelectSubset<T, maxicareMasterlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__maxicareMasterlistClient<$Result.GetResult<Prisma.$maxicareMasterlistPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first MaxicareMasterlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maxicareMasterlistFindFirstArgs} args - Arguments to find a MaxicareMasterlist
     * @example
     * // Get one MaxicareMasterlist
     * const maxicareMasterlist = await prisma.maxicareMasterlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends maxicareMasterlistFindFirstArgs>(args?: SelectSubset<T, maxicareMasterlistFindFirstArgs<ExtArgs>>): Prisma__maxicareMasterlistClient<$Result.GetResult<Prisma.$maxicareMasterlistPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first MaxicareMasterlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maxicareMasterlistFindFirstOrThrowArgs} args - Arguments to find a MaxicareMasterlist
     * @example
     * // Get one MaxicareMasterlist
     * const maxicareMasterlist = await prisma.maxicareMasterlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends maxicareMasterlistFindFirstOrThrowArgs>(args?: SelectSubset<T, maxicareMasterlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__maxicareMasterlistClient<$Result.GetResult<Prisma.$maxicareMasterlistPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more MaxicareMasterlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maxicareMasterlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaxicareMasterlists
     * const maxicareMasterlists = await prisma.maxicareMasterlist.findMany()
     * 
     * // Get first 10 MaxicareMasterlists
     * const maxicareMasterlists = await prisma.maxicareMasterlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maxicareMasterlistWithIdOnly = await prisma.maxicareMasterlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends maxicareMasterlistFindManyArgs>(args?: SelectSubset<T, maxicareMasterlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maxicareMasterlistPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a MaxicareMasterlist.
     * @param {maxicareMasterlistCreateArgs} args - Arguments to create a MaxicareMasterlist.
     * @example
     * // Create one MaxicareMasterlist
     * const MaxicareMasterlist = await prisma.maxicareMasterlist.create({
     *   data: {
     *     // ... data to create a MaxicareMasterlist
     *   }
     * })
     * 
     */
    create<T extends maxicareMasterlistCreateArgs>(args: SelectSubset<T, maxicareMasterlistCreateArgs<ExtArgs>>): Prisma__maxicareMasterlistClient<$Result.GetResult<Prisma.$maxicareMasterlistPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many MaxicareMasterlists.
     * @param {maxicareMasterlistCreateManyArgs} args - Arguments to create many MaxicareMasterlists.
     * @example
     * // Create many MaxicareMasterlists
     * const maxicareMasterlist = await prisma.maxicareMasterlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends maxicareMasterlistCreateManyArgs>(args?: SelectSubset<T, maxicareMasterlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MaxicareMasterlist.
     * @param {maxicareMasterlistDeleteArgs} args - Arguments to delete one MaxicareMasterlist.
     * @example
     * // Delete one MaxicareMasterlist
     * const MaxicareMasterlist = await prisma.maxicareMasterlist.delete({
     *   where: {
     *     // ... filter to delete one MaxicareMasterlist
     *   }
     * })
     * 
     */
    delete<T extends maxicareMasterlistDeleteArgs>(args: SelectSubset<T, maxicareMasterlistDeleteArgs<ExtArgs>>): Prisma__maxicareMasterlistClient<$Result.GetResult<Prisma.$maxicareMasterlistPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one MaxicareMasterlist.
     * @param {maxicareMasterlistUpdateArgs} args - Arguments to update one MaxicareMasterlist.
     * @example
     * // Update one MaxicareMasterlist
     * const maxicareMasterlist = await prisma.maxicareMasterlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends maxicareMasterlistUpdateArgs>(args: SelectSubset<T, maxicareMasterlistUpdateArgs<ExtArgs>>): Prisma__maxicareMasterlistClient<$Result.GetResult<Prisma.$maxicareMasterlistPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more MaxicareMasterlists.
     * @param {maxicareMasterlistDeleteManyArgs} args - Arguments to filter MaxicareMasterlists to delete.
     * @example
     * // Delete a few MaxicareMasterlists
     * const { count } = await prisma.maxicareMasterlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends maxicareMasterlistDeleteManyArgs>(args?: SelectSubset<T, maxicareMasterlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaxicareMasterlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maxicareMasterlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaxicareMasterlists
     * const maxicareMasterlist = await prisma.maxicareMasterlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends maxicareMasterlistUpdateManyArgs>(args: SelectSubset<T, maxicareMasterlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MaxicareMasterlist.
     * @param {maxicareMasterlistUpsertArgs} args - Arguments to update or create a MaxicareMasterlist.
     * @example
     * // Update or create a MaxicareMasterlist
     * const maxicareMasterlist = await prisma.maxicareMasterlist.upsert({
     *   create: {
     *     // ... data to create a MaxicareMasterlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaxicareMasterlist we want to update
     *   }
     * })
     */
    upsert<T extends maxicareMasterlistUpsertArgs>(args: SelectSubset<T, maxicareMasterlistUpsertArgs<ExtArgs>>): Prisma__maxicareMasterlistClient<$Result.GetResult<Prisma.$maxicareMasterlistPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of MaxicareMasterlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maxicareMasterlistCountArgs} args - Arguments to filter MaxicareMasterlists to count.
     * @example
     * // Count the number of MaxicareMasterlists
     * const count = await prisma.maxicareMasterlist.count({
     *   where: {
     *     // ... the filter for the MaxicareMasterlists we want to count
     *   }
     * })
    **/
    count<T extends maxicareMasterlistCountArgs>(
      args?: Subset<T, maxicareMasterlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaxicareMasterlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaxicareMasterlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaxicareMasterlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaxicareMasterlistAggregateArgs>(args: Subset<T, MaxicareMasterlistAggregateArgs>): Prisma.PrismaPromise<GetMaxicareMasterlistAggregateType<T>>

    /**
     * Group by MaxicareMasterlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maxicareMasterlistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends maxicareMasterlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: maxicareMasterlistGroupByArgs['orderBy'] }
        : { orderBy?: maxicareMasterlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, maxicareMasterlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaxicareMasterlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the maxicareMasterlist model
   */
  readonly fields: maxicareMasterlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for maxicareMasterlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__maxicareMasterlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends clientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientsDefaultArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the maxicareMasterlist model
   */ 
  interface maxicareMasterlistFieldRefs {
    readonly id: FieldRef<"maxicareMasterlist", 'Int'>
    readonly clientId: FieldRef<"maxicareMasterlist", 'Int'>
    readonly PY: FieldRef<"maxicareMasterlist", 'String'>
    readonly ACCOUNT_NO: FieldRef<"maxicareMasterlist", 'String'>
    readonly STATUS: FieldRef<"maxicareMasterlist", 'String'>
    readonly MEMBER_TYPE: FieldRef<"maxicareMasterlist", 'String'>
    readonly LIMIT: FieldRef<"maxicareMasterlist", 'Float'>
    readonly RELATION: FieldRef<"maxicareMasterlist", 'String'>
    readonly EE_ID: FieldRef<"maxicareMasterlist", 'String'>
    readonly CARD_NO: FieldRef<"maxicareMasterlist", 'String'>
    readonly COMPANY: FieldRef<"maxicareMasterlist", 'String'>
    readonly createdAt: FieldRef<"maxicareMasterlist", 'DateTime'>
    readonly updatedAt: FieldRef<"maxicareMasterlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * maxicareMasterlist findUnique
   */
  export type maxicareMasterlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicareMasterlist
     */
    select?: maxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicareMasterlist
     */
    omit?: maxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which maxicareMasterlist to fetch.
     */
    where: maxicareMasterlistWhereUniqueInput
  }

  /**
   * maxicareMasterlist findUniqueOrThrow
   */
  export type maxicareMasterlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicareMasterlist
     */
    select?: maxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicareMasterlist
     */
    omit?: maxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which maxicareMasterlist to fetch.
     */
    where: maxicareMasterlistWhereUniqueInput
  }

  /**
   * maxicareMasterlist findFirst
   */
  export type maxicareMasterlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicareMasterlist
     */
    select?: maxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicareMasterlist
     */
    omit?: maxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which maxicareMasterlist to fetch.
     */
    where?: maxicareMasterlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maxicareMasterlists to fetch.
     */
    orderBy?: maxicareMasterlistOrderByWithRelationInput | maxicareMasterlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maxicareMasterlists.
     */
    cursor?: maxicareMasterlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maxicareMasterlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maxicareMasterlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maxicareMasterlists.
     */
    distinct?: MaxicareMasterlistScalarFieldEnum | MaxicareMasterlistScalarFieldEnum[]
  }

  /**
   * maxicareMasterlist findFirstOrThrow
   */
  export type maxicareMasterlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicareMasterlist
     */
    select?: maxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicareMasterlist
     */
    omit?: maxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which maxicareMasterlist to fetch.
     */
    where?: maxicareMasterlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maxicareMasterlists to fetch.
     */
    orderBy?: maxicareMasterlistOrderByWithRelationInput | maxicareMasterlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maxicareMasterlists.
     */
    cursor?: maxicareMasterlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maxicareMasterlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maxicareMasterlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maxicareMasterlists.
     */
    distinct?: MaxicareMasterlistScalarFieldEnum | MaxicareMasterlistScalarFieldEnum[]
  }

  /**
   * maxicareMasterlist findMany
   */
  export type maxicareMasterlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicareMasterlist
     */
    select?: maxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicareMasterlist
     */
    omit?: maxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which maxicareMasterlists to fetch.
     */
    where?: maxicareMasterlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maxicareMasterlists to fetch.
     */
    orderBy?: maxicareMasterlistOrderByWithRelationInput | maxicareMasterlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing maxicareMasterlists.
     */
    cursor?: maxicareMasterlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maxicareMasterlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maxicareMasterlists.
     */
    skip?: number
    distinct?: MaxicareMasterlistScalarFieldEnum | MaxicareMasterlistScalarFieldEnum[]
  }

  /**
   * maxicareMasterlist create
   */
  export type maxicareMasterlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicareMasterlist
     */
    select?: maxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicareMasterlist
     */
    omit?: maxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareMasterlistInclude<ExtArgs> | null
    /**
     * The data needed to create a maxicareMasterlist.
     */
    data: XOR<maxicareMasterlistCreateInput, maxicareMasterlistUncheckedCreateInput>
  }

  /**
   * maxicareMasterlist createMany
   */
  export type maxicareMasterlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many maxicareMasterlists.
     */
    data: maxicareMasterlistCreateManyInput | maxicareMasterlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * maxicareMasterlist update
   */
  export type maxicareMasterlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicareMasterlist
     */
    select?: maxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicareMasterlist
     */
    omit?: maxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareMasterlistInclude<ExtArgs> | null
    /**
     * The data needed to update a maxicareMasterlist.
     */
    data: XOR<maxicareMasterlistUpdateInput, maxicareMasterlistUncheckedUpdateInput>
    /**
     * Choose, which maxicareMasterlist to update.
     */
    where: maxicareMasterlistWhereUniqueInput
  }

  /**
   * maxicareMasterlist updateMany
   */
  export type maxicareMasterlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update maxicareMasterlists.
     */
    data: XOR<maxicareMasterlistUpdateManyMutationInput, maxicareMasterlistUncheckedUpdateManyInput>
    /**
     * Filter which maxicareMasterlists to update
     */
    where?: maxicareMasterlistWhereInput
    /**
     * Limit how many maxicareMasterlists to update.
     */
    limit?: number
  }

  /**
   * maxicareMasterlist upsert
   */
  export type maxicareMasterlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicareMasterlist
     */
    select?: maxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicareMasterlist
     */
    omit?: maxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareMasterlistInclude<ExtArgs> | null
    /**
     * The filter to search for the maxicareMasterlist to update in case it exists.
     */
    where: maxicareMasterlistWhereUniqueInput
    /**
     * In case the maxicareMasterlist found by the `where` argument doesn't exist, create a new maxicareMasterlist with this data.
     */
    create: XOR<maxicareMasterlistCreateInput, maxicareMasterlistUncheckedCreateInput>
    /**
     * In case the maxicareMasterlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<maxicareMasterlistUpdateInput, maxicareMasterlistUncheckedUpdateInput>
  }

  /**
   * maxicareMasterlist delete
   */
  export type maxicareMasterlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicareMasterlist
     */
    select?: maxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicareMasterlist
     */
    omit?: maxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter which maxicareMasterlist to delete.
     */
    where: maxicareMasterlistWhereUniqueInput
  }

  /**
   * maxicareMasterlist deleteMany
   */
  export type maxicareMasterlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maxicareMasterlists to delete
     */
    where?: maxicareMasterlistWhereInput
    /**
     * Limit how many maxicareMasterlists to delete.
     */
    limit?: number
  }

  /**
   * maxicareMasterlist without action
   */
  export type maxicareMasterlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicareMasterlist
     */
    select?: maxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicareMasterlist
     */
    omit?: maxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareMasterlistInclude<ExtArgs> | null
  }


  /**
   * Model intellicare
   */

  export type AggregateIntellicare = {
    _count: IntellicareCountAggregateOutputType | null
    _avg: IntellicareAvgAggregateOutputType | null
    _sum: IntellicareSumAggregateOutputType | null
    _min: IntellicareMinAggregateOutputType | null
    _max: IntellicareMaxAggregateOutputType | null
  }

  export type IntellicareAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    Approved_Claim_Amount: number | null
    Maximum_Benefit_Limit: number | null
  }

  export type IntellicareSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    Approved_Claim_Amount: number | null
    Maximum_Benefit_Limit: number | null
  }

  export type IntellicareMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    PY: string | null
    Company: string | null
    Member_Account: string | null
    Member_Type: string | null
    ICD_10_Code: string | null
    Diagnosis: string | null
    Claim_Type: string | null
    Admission_Date: Date | null
    Provider_Name: string | null
    Provider_Type: string | null
    Approved_Claim_Amount: number | null
    Class_Plan_Level: string | null
    Maximum_Benefit_Limit: number | null
    Date_of_Birth: Date | null
    Relationship: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntellicareMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    PY: string | null
    Company: string | null
    Member_Account: string | null
    Member_Type: string | null
    ICD_10_Code: string | null
    Diagnosis: string | null
    Claim_Type: string | null
    Admission_Date: Date | null
    Provider_Name: string | null
    Provider_Type: string | null
    Approved_Claim_Amount: number | null
    Class_Plan_Level: string | null
    Maximum_Benefit_Limit: number | null
    Date_of_Birth: Date | null
    Relationship: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntellicareCountAggregateOutputType = {
    id: number
    clientId: number
    PY: number
    Company: number
    Member_Account: number
    Member_Type: number
    ICD_10_Code: number
    Diagnosis: number
    Claim_Type: number
    Admission_Date: number
    Provider_Name: number
    Provider_Type: number
    Approved_Claim_Amount: number
    Class_Plan_Level: number
    Maximum_Benefit_Limit: number
    Date_of_Birth: number
    Relationship: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IntellicareAvgAggregateInputType = {
    id?: true
    clientId?: true
    Approved_Claim_Amount?: true
    Maximum_Benefit_Limit?: true
  }

  export type IntellicareSumAggregateInputType = {
    id?: true
    clientId?: true
    Approved_Claim_Amount?: true
    Maximum_Benefit_Limit?: true
  }

  export type IntellicareMinAggregateInputType = {
    id?: true
    clientId?: true
    PY?: true
    Company?: true
    Member_Account?: true
    Member_Type?: true
    ICD_10_Code?: true
    Diagnosis?: true
    Claim_Type?: true
    Admission_Date?: true
    Provider_Name?: true
    Provider_Type?: true
    Approved_Claim_Amount?: true
    Class_Plan_Level?: true
    Maximum_Benefit_Limit?: true
    Date_of_Birth?: true
    Relationship?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntellicareMaxAggregateInputType = {
    id?: true
    clientId?: true
    PY?: true
    Company?: true
    Member_Account?: true
    Member_Type?: true
    ICD_10_Code?: true
    Diagnosis?: true
    Claim_Type?: true
    Admission_Date?: true
    Provider_Name?: true
    Provider_Type?: true
    Approved_Claim_Amount?: true
    Class_Plan_Level?: true
    Maximum_Benefit_Limit?: true
    Date_of_Birth?: true
    Relationship?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntellicareCountAggregateInputType = {
    id?: true
    clientId?: true
    PY?: true
    Company?: true
    Member_Account?: true
    Member_Type?: true
    ICD_10_Code?: true
    Diagnosis?: true
    Claim_Type?: true
    Admission_Date?: true
    Provider_Name?: true
    Provider_Type?: true
    Approved_Claim_Amount?: true
    Class_Plan_Level?: true
    Maximum_Benefit_Limit?: true
    Date_of_Birth?: true
    Relationship?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IntellicareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which intellicare to aggregate.
     */
    where?: intellicareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intellicares to fetch.
     */
    orderBy?: intellicareOrderByWithRelationInput | intellicareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: intellicareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intellicares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intellicares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned intellicares
    **/
    _count?: true | IntellicareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IntellicareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IntellicareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntellicareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntellicareMaxAggregateInputType
  }

  export type GetIntellicareAggregateType<T extends IntellicareAggregateArgs> = {
        [P in keyof T & keyof AggregateIntellicare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntellicare[P]>
      : GetScalarType<T[P], AggregateIntellicare[P]>
  }




  export type intellicareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: intellicareWhereInput
    orderBy?: intellicareOrderByWithAggregationInput | intellicareOrderByWithAggregationInput[]
    by: IntellicareScalarFieldEnum[] | IntellicareScalarFieldEnum
    having?: intellicareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntellicareCountAggregateInputType | true
    _avg?: IntellicareAvgAggregateInputType
    _sum?: IntellicareSumAggregateInputType
    _min?: IntellicareMinAggregateInputType
    _max?: IntellicareMaxAggregateInputType
  }

  export type IntellicareGroupByOutputType = {
    id: number
    clientId: number
    PY: string
    Company: string | null
    Member_Account: string | null
    Member_Type: string | null
    ICD_10_Code: string | null
    Diagnosis: string | null
    Claim_Type: string | null
    Admission_Date: Date | null
    Provider_Name: string | null
    Provider_Type: string | null
    Approved_Claim_Amount: number | null
    Class_Plan_Level: string | null
    Maximum_Benefit_Limit: number | null
    Date_of_Birth: Date | null
    Relationship: string | null
    createdAt: Date
    updatedAt: Date
    _count: IntellicareCountAggregateOutputType | null
    _avg: IntellicareAvgAggregateOutputType | null
    _sum: IntellicareSumAggregateOutputType | null
    _min: IntellicareMinAggregateOutputType | null
    _max: IntellicareMaxAggregateOutputType | null
  }

  type GetIntellicareGroupByPayload<T extends intellicareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntellicareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntellicareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntellicareGroupByOutputType[P]>
            : GetScalarType<T[P], IntellicareGroupByOutputType[P]>
        }
      >
    >


  export type intellicareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    PY?: boolean
    Company?: boolean
    Member_Account?: boolean
    Member_Type?: boolean
    ICD_10_Code?: boolean
    Diagnosis?: boolean
    Claim_Type?: boolean
    Admission_Date?: boolean
    Provider_Name?: boolean
    Provider_Type?: boolean
    Approved_Claim_Amount?: boolean
    Class_Plan_Level?: boolean
    Maximum_Benefit_Limit?: boolean
    Date_of_Birth?: boolean
    Relationship?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clients?: boolean | clientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intellicare"]>



  export type intellicareSelectScalar = {
    id?: boolean
    clientId?: boolean
    PY?: boolean
    Company?: boolean
    Member_Account?: boolean
    Member_Type?: boolean
    ICD_10_Code?: boolean
    Diagnosis?: boolean
    Claim_Type?: boolean
    Admission_Date?: boolean
    Provider_Name?: boolean
    Provider_Type?: boolean
    Approved_Claim_Amount?: boolean
    Class_Plan_Level?: boolean
    Maximum_Benefit_Limit?: boolean
    Date_of_Birth?: boolean
    Relationship?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type intellicareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "PY" | "Company" | "Member_Account" | "Member_Type" | "ICD_10_Code" | "Diagnosis" | "Claim_Type" | "Admission_Date" | "Provider_Name" | "Provider_Type" | "Approved_Claim_Amount" | "Class_Plan_Level" | "Maximum_Benefit_Limit" | "Date_of_Birth" | "Relationship" | "createdAt" | "updatedAt", ExtArgs["result"]["intellicare"]>
  export type intellicareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | clientsDefaultArgs<ExtArgs>
  }

  export type $intellicarePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "intellicare"
    objects: {
      clients: Prisma.$clientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number
      PY: string
      Company: string | null
      Member_Account: string | null
      Member_Type: string | null
      ICD_10_Code: string | null
      Diagnosis: string | null
      Claim_Type: string | null
      Admission_Date: Date | null
      Provider_Name: string | null
      Provider_Type: string | null
      Approved_Claim_Amount: number | null
      Class_Plan_Level: string | null
      Maximum_Benefit_Limit: number | null
      Date_of_Birth: Date | null
      Relationship: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["intellicare"]>
    composites: {}
  }

  type intellicareGetPayload<S extends boolean | null | undefined | intellicareDefaultArgs> = $Result.GetResult<Prisma.$intellicarePayload, S>

  type intellicareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<intellicareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntellicareCountAggregateInputType | true
    }

  export interface intellicareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['intellicare'], meta: { name: 'intellicare' } }
    /**
     * Find zero or one Intellicare that matches the filter.
     * @param {intellicareFindUniqueArgs} args - Arguments to find a Intellicare
     * @example
     * // Get one Intellicare
     * const intellicare = await prisma.intellicare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends intellicareFindUniqueArgs>(args: SelectSubset<T, intellicareFindUniqueArgs<ExtArgs>>): Prisma__intellicareClient<$Result.GetResult<Prisma.$intellicarePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Intellicare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {intellicareFindUniqueOrThrowArgs} args - Arguments to find a Intellicare
     * @example
     * // Get one Intellicare
     * const intellicare = await prisma.intellicare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends intellicareFindUniqueOrThrowArgs>(args: SelectSubset<T, intellicareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__intellicareClient<$Result.GetResult<Prisma.$intellicarePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Intellicare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intellicareFindFirstArgs} args - Arguments to find a Intellicare
     * @example
     * // Get one Intellicare
     * const intellicare = await prisma.intellicare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends intellicareFindFirstArgs>(args?: SelectSubset<T, intellicareFindFirstArgs<ExtArgs>>): Prisma__intellicareClient<$Result.GetResult<Prisma.$intellicarePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Intellicare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intellicareFindFirstOrThrowArgs} args - Arguments to find a Intellicare
     * @example
     * // Get one Intellicare
     * const intellicare = await prisma.intellicare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends intellicareFindFirstOrThrowArgs>(args?: SelectSubset<T, intellicareFindFirstOrThrowArgs<ExtArgs>>): Prisma__intellicareClient<$Result.GetResult<Prisma.$intellicarePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Intellicares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intellicareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Intellicares
     * const intellicares = await prisma.intellicare.findMany()
     * 
     * // Get first 10 Intellicares
     * const intellicares = await prisma.intellicare.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const intellicareWithIdOnly = await prisma.intellicare.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends intellicareFindManyArgs>(args?: SelectSubset<T, intellicareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$intellicarePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Intellicare.
     * @param {intellicareCreateArgs} args - Arguments to create a Intellicare.
     * @example
     * // Create one Intellicare
     * const Intellicare = await prisma.intellicare.create({
     *   data: {
     *     // ... data to create a Intellicare
     *   }
     * })
     * 
     */
    create<T extends intellicareCreateArgs>(args: SelectSubset<T, intellicareCreateArgs<ExtArgs>>): Prisma__intellicareClient<$Result.GetResult<Prisma.$intellicarePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Intellicares.
     * @param {intellicareCreateManyArgs} args - Arguments to create many Intellicares.
     * @example
     * // Create many Intellicares
     * const intellicare = await prisma.intellicare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends intellicareCreateManyArgs>(args?: SelectSubset<T, intellicareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Intellicare.
     * @param {intellicareDeleteArgs} args - Arguments to delete one Intellicare.
     * @example
     * // Delete one Intellicare
     * const Intellicare = await prisma.intellicare.delete({
     *   where: {
     *     // ... filter to delete one Intellicare
     *   }
     * })
     * 
     */
    delete<T extends intellicareDeleteArgs>(args: SelectSubset<T, intellicareDeleteArgs<ExtArgs>>): Prisma__intellicareClient<$Result.GetResult<Prisma.$intellicarePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Intellicare.
     * @param {intellicareUpdateArgs} args - Arguments to update one Intellicare.
     * @example
     * // Update one Intellicare
     * const intellicare = await prisma.intellicare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends intellicareUpdateArgs>(args: SelectSubset<T, intellicareUpdateArgs<ExtArgs>>): Prisma__intellicareClient<$Result.GetResult<Prisma.$intellicarePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Intellicares.
     * @param {intellicareDeleteManyArgs} args - Arguments to filter Intellicares to delete.
     * @example
     * // Delete a few Intellicares
     * const { count } = await prisma.intellicare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends intellicareDeleteManyArgs>(args?: SelectSubset<T, intellicareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Intellicares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intellicareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Intellicares
     * const intellicare = await prisma.intellicare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends intellicareUpdateManyArgs>(args: SelectSubset<T, intellicareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Intellicare.
     * @param {intellicareUpsertArgs} args - Arguments to update or create a Intellicare.
     * @example
     * // Update or create a Intellicare
     * const intellicare = await prisma.intellicare.upsert({
     *   create: {
     *     // ... data to create a Intellicare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Intellicare we want to update
     *   }
     * })
     */
    upsert<T extends intellicareUpsertArgs>(args: SelectSubset<T, intellicareUpsertArgs<ExtArgs>>): Prisma__intellicareClient<$Result.GetResult<Prisma.$intellicarePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Intellicares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intellicareCountArgs} args - Arguments to filter Intellicares to count.
     * @example
     * // Count the number of Intellicares
     * const count = await prisma.intellicare.count({
     *   where: {
     *     // ... the filter for the Intellicares we want to count
     *   }
     * })
    **/
    count<T extends intellicareCountArgs>(
      args?: Subset<T, intellicareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntellicareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Intellicare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntellicareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IntellicareAggregateArgs>(args: Subset<T, IntellicareAggregateArgs>): Prisma.PrismaPromise<GetIntellicareAggregateType<T>>

    /**
     * Group by Intellicare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intellicareGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends intellicareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: intellicareGroupByArgs['orderBy'] }
        : { orderBy?: intellicareGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, intellicareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntellicareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the intellicare model
   */
  readonly fields: intellicareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for intellicare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__intellicareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends clientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientsDefaultArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the intellicare model
   */ 
  interface intellicareFieldRefs {
    readonly id: FieldRef<"intellicare", 'Int'>
    readonly clientId: FieldRef<"intellicare", 'Int'>
    readonly PY: FieldRef<"intellicare", 'String'>
    readonly Company: FieldRef<"intellicare", 'String'>
    readonly Member_Account: FieldRef<"intellicare", 'String'>
    readonly Member_Type: FieldRef<"intellicare", 'String'>
    readonly ICD_10_Code: FieldRef<"intellicare", 'String'>
    readonly Diagnosis: FieldRef<"intellicare", 'String'>
    readonly Claim_Type: FieldRef<"intellicare", 'String'>
    readonly Admission_Date: FieldRef<"intellicare", 'DateTime'>
    readonly Provider_Name: FieldRef<"intellicare", 'String'>
    readonly Provider_Type: FieldRef<"intellicare", 'String'>
    readonly Approved_Claim_Amount: FieldRef<"intellicare", 'Float'>
    readonly Class_Plan_Level: FieldRef<"intellicare", 'String'>
    readonly Maximum_Benefit_Limit: FieldRef<"intellicare", 'Float'>
    readonly Date_of_Birth: FieldRef<"intellicare", 'DateTime'>
    readonly Relationship: FieldRef<"intellicare", 'String'>
    readonly createdAt: FieldRef<"intellicare", 'DateTime'>
    readonly updatedAt: FieldRef<"intellicare", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * intellicare findUnique
   */
  export type intellicareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicare
     */
    select?: intellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicare
     */
    omit?: intellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareInclude<ExtArgs> | null
    /**
     * Filter, which intellicare to fetch.
     */
    where: intellicareWhereUniqueInput
  }

  /**
   * intellicare findUniqueOrThrow
   */
  export type intellicareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicare
     */
    select?: intellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicare
     */
    omit?: intellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareInclude<ExtArgs> | null
    /**
     * Filter, which intellicare to fetch.
     */
    where: intellicareWhereUniqueInput
  }

  /**
   * intellicare findFirst
   */
  export type intellicareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicare
     */
    select?: intellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicare
     */
    omit?: intellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareInclude<ExtArgs> | null
    /**
     * Filter, which intellicare to fetch.
     */
    where?: intellicareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intellicares to fetch.
     */
    orderBy?: intellicareOrderByWithRelationInput | intellicareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for intellicares.
     */
    cursor?: intellicareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intellicares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intellicares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of intellicares.
     */
    distinct?: IntellicareScalarFieldEnum | IntellicareScalarFieldEnum[]
  }

  /**
   * intellicare findFirstOrThrow
   */
  export type intellicareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicare
     */
    select?: intellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicare
     */
    omit?: intellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareInclude<ExtArgs> | null
    /**
     * Filter, which intellicare to fetch.
     */
    where?: intellicareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intellicares to fetch.
     */
    orderBy?: intellicareOrderByWithRelationInput | intellicareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for intellicares.
     */
    cursor?: intellicareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intellicares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intellicares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of intellicares.
     */
    distinct?: IntellicareScalarFieldEnum | IntellicareScalarFieldEnum[]
  }

  /**
   * intellicare findMany
   */
  export type intellicareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicare
     */
    select?: intellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicare
     */
    omit?: intellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareInclude<ExtArgs> | null
    /**
     * Filter, which intellicares to fetch.
     */
    where?: intellicareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of intellicares to fetch.
     */
    orderBy?: intellicareOrderByWithRelationInput | intellicareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing intellicares.
     */
    cursor?: intellicareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` intellicares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` intellicares.
     */
    skip?: number
    distinct?: IntellicareScalarFieldEnum | IntellicareScalarFieldEnum[]
  }

  /**
   * intellicare create
   */
  export type intellicareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicare
     */
    select?: intellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicare
     */
    omit?: intellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareInclude<ExtArgs> | null
    /**
     * The data needed to create a intellicare.
     */
    data: XOR<intellicareCreateInput, intellicareUncheckedCreateInput>
  }

  /**
   * intellicare createMany
   */
  export type intellicareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many intellicares.
     */
    data: intellicareCreateManyInput | intellicareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * intellicare update
   */
  export type intellicareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicare
     */
    select?: intellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicare
     */
    omit?: intellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareInclude<ExtArgs> | null
    /**
     * The data needed to update a intellicare.
     */
    data: XOR<intellicareUpdateInput, intellicareUncheckedUpdateInput>
    /**
     * Choose, which intellicare to update.
     */
    where: intellicareWhereUniqueInput
  }

  /**
   * intellicare updateMany
   */
  export type intellicareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update intellicares.
     */
    data: XOR<intellicareUpdateManyMutationInput, intellicareUncheckedUpdateManyInput>
    /**
     * Filter which intellicares to update
     */
    where?: intellicareWhereInput
    /**
     * Limit how many intellicares to update.
     */
    limit?: number
  }

  /**
   * intellicare upsert
   */
  export type intellicareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicare
     */
    select?: intellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicare
     */
    omit?: intellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareInclude<ExtArgs> | null
    /**
     * The filter to search for the intellicare to update in case it exists.
     */
    where: intellicareWhereUniqueInput
    /**
     * In case the intellicare found by the `where` argument doesn't exist, create a new intellicare with this data.
     */
    create: XOR<intellicareCreateInput, intellicareUncheckedCreateInput>
    /**
     * In case the intellicare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<intellicareUpdateInput, intellicareUncheckedUpdateInput>
  }

  /**
   * intellicare delete
   */
  export type intellicareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicare
     */
    select?: intellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicare
     */
    omit?: intellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareInclude<ExtArgs> | null
    /**
     * Filter which intellicare to delete.
     */
    where: intellicareWhereUniqueInput
  }

  /**
   * intellicare deleteMany
   */
  export type intellicareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which intellicares to delete
     */
    where?: intellicareWhereInput
    /**
     * Limit how many intellicares to delete.
     */
    limit?: number
  }

  /**
   * intellicare without action
   */
  export type intellicareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intellicare
     */
    select?: intellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the intellicare
     */
    omit?: intellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: intellicareInclude<ExtArgs> | null
  }


  /**
   * Model maxicare
   */

  export type AggregateMaxicare = {
    _count: MaxicareCountAggregateOutputType | null
    _avg: MaxicareAvgAggregateOutputType | null
    _sum: MaxicareSumAggregateOutputType | null
    _min: MaxicareMinAggregateOutputType | null
    _max: MaxicareMaxAggregateOutputType | null
  }

  export type MaxicareAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    Approved_Claim_Amount: number | null
  }

  export type MaxicareSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    Approved_Claim_Amount: number | null
  }

  export type MaxicareMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    PY: string | null
    Company: string | null
    Member_Account: string | null
    Member_Type: string | null
    ICD_10_Code: string | null
    Diagnosis: string | null
    Claim_Type: string | null
    Admission_Date: Date | null
    Provider_Name: string | null
    Provider_Type: string | null
    Approved_Claim_Amount: number | null
    Relationship: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaxicareMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    PY: string | null
    Company: string | null
    Member_Account: string | null
    Member_Type: string | null
    ICD_10_Code: string | null
    Diagnosis: string | null
    Claim_Type: string | null
    Admission_Date: Date | null
    Provider_Name: string | null
    Provider_Type: string | null
    Approved_Claim_Amount: number | null
    Relationship: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaxicareCountAggregateOutputType = {
    id: number
    clientId: number
    PY: number
    Company: number
    Member_Account: number
    Member_Type: number
    ICD_10_Code: number
    Diagnosis: number
    Claim_Type: number
    Admission_Date: number
    Provider_Name: number
    Provider_Type: number
    Approved_Claim_Amount: number
    Relationship: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaxicareAvgAggregateInputType = {
    id?: true
    clientId?: true
    Approved_Claim_Amount?: true
  }

  export type MaxicareSumAggregateInputType = {
    id?: true
    clientId?: true
    Approved_Claim_Amount?: true
  }

  export type MaxicareMinAggregateInputType = {
    id?: true
    clientId?: true
    PY?: true
    Company?: true
    Member_Account?: true
    Member_Type?: true
    ICD_10_Code?: true
    Diagnosis?: true
    Claim_Type?: true
    Admission_Date?: true
    Provider_Name?: true
    Provider_Type?: true
    Approved_Claim_Amount?: true
    Relationship?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaxicareMaxAggregateInputType = {
    id?: true
    clientId?: true
    PY?: true
    Company?: true
    Member_Account?: true
    Member_Type?: true
    ICD_10_Code?: true
    Diagnosis?: true
    Claim_Type?: true
    Admission_Date?: true
    Provider_Name?: true
    Provider_Type?: true
    Approved_Claim_Amount?: true
    Relationship?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaxicareCountAggregateInputType = {
    id?: true
    clientId?: true
    PY?: true
    Company?: true
    Member_Account?: true
    Member_Type?: true
    ICD_10_Code?: true
    Diagnosis?: true
    Claim_Type?: true
    Admission_Date?: true
    Provider_Name?: true
    Provider_Type?: true
    Approved_Claim_Amount?: true
    Relationship?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaxicareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maxicare to aggregate.
     */
    where?: maxicareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maxicares to fetch.
     */
    orderBy?: maxicareOrderByWithRelationInput | maxicareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: maxicareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maxicares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maxicares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned maxicares
    **/
    _count?: true | MaxicareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaxicareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaxicareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaxicareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaxicareMaxAggregateInputType
  }

  export type GetMaxicareAggregateType<T extends MaxicareAggregateArgs> = {
        [P in keyof T & keyof AggregateMaxicare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaxicare[P]>
      : GetScalarType<T[P], AggregateMaxicare[P]>
  }




  export type maxicareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: maxicareWhereInput
    orderBy?: maxicareOrderByWithAggregationInput | maxicareOrderByWithAggregationInput[]
    by: MaxicareScalarFieldEnum[] | MaxicareScalarFieldEnum
    having?: maxicareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaxicareCountAggregateInputType | true
    _avg?: MaxicareAvgAggregateInputType
    _sum?: MaxicareSumAggregateInputType
    _min?: MaxicareMinAggregateInputType
    _max?: MaxicareMaxAggregateInputType
  }

  export type MaxicareGroupByOutputType = {
    id: number
    clientId: number
    PY: string
    Company: string | null
    Member_Account: string | null
    Member_Type: string | null
    ICD_10_Code: string | null
    Diagnosis: string | null
    Claim_Type: string | null
    Admission_Date: Date | null
    Provider_Name: string | null
    Provider_Type: string | null
    Approved_Claim_Amount: number | null
    Relationship: string | null
    createdAt: Date
    updatedAt: Date
    _count: MaxicareCountAggregateOutputType | null
    _avg: MaxicareAvgAggregateOutputType | null
    _sum: MaxicareSumAggregateOutputType | null
    _min: MaxicareMinAggregateOutputType | null
    _max: MaxicareMaxAggregateOutputType | null
  }

  type GetMaxicareGroupByPayload<T extends maxicareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaxicareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaxicareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaxicareGroupByOutputType[P]>
            : GetScalarType<T[P], MaxicareGroupByOutputType[P]>
        }
      >
    >


  export type maxicareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    PY?: boolean
    Company?: boolean
    Member_Account?: boolean
    Member_Type?: boolean
    ICD_10_Code?: boolean
    Diagnosis?: boolean
    Claim_Type?: boolean
    Admission_Date?: boolean
    Provider_Name?: boolean
    Provider_Type?: boolean
    Approved_Claim_Amount?: boolean
    Relationship?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clients?: boolean | clientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maxicare"]>



  export type maxicareSelectScalar = {
    id?: boolean
    clientId?: boolean
    PY?: boolean
    Company?: boolean
    Member_Account?: boolean
    Member_Type?: boolean
    ICD_10_Code?: boolean
    Diagnosis?: boolean
    Claim_Type?: boolean
    Admission_Date?: boolean
    Provider_Name?: boolean
    Provider_Type?: boolean
    Approved_Claim_Amount?: boolean
    Relationship?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type maxicareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "PY" | "Company" | "Member_Account" | "Member_Type" | "ICD_10_Code" | "Diagnosis" | "Claim_Type" | "Admission_Date" | "Provider_Name" | "Provider_Type" | "Approved_Claim_Amount" | "Relationship" | "createdAt" | "updatedAt", ExtArgs["result"]["maxicare"]>
  export type maxicareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | clientsDefaultArgs<ExtArgs>
  }

  export type $maxicarePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "maxicare"
    objects: {
      clients: Prisma.$clientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number
      PY: string
      Company: string | null
      Member_Account: string | null
      Member_Type: string | null
      ICD_10_Code: string | null
      Diagnosis: string | null
      Claim_Type: string | null
      Admission_Date: Date | null
      Provider_Name: string | null
      Provider_Type: string | null
      Approved_Claim_Amount: number | null
      Relationship: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["maxicare"]>
    composites: {}
  }

  type maxicareGetPayload<S extends boolean | null | undefined | maxicareDefaultArgs> = $Result.GetResult<Prisma.$maxicarePayload, S>

  type maxicareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<maxicareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaxicareCountAggregateInputType | true
    }

  export interface maxicareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['maxicare'], meta: { name: 'maxicare' } }
    /**
     * Find zero or one Maxicare that matches the filter.
     * @param {maxicareFindUniqueArgs} args - Arguments to find a Maxicare
     * @example
     * // Get one Maxicare
     * const maxicare = await prisma.maxicare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends maxicareFindUniqueArgs>(args: SelectSubset<T, maxicareFindUniqueArgs<ExtArgs>>): Prisma__maxicareClient<$Result.GetResult<Prisma.$maxicarePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Maxicare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {maxicareFindUniqueOrThrowArgs} args - Arguments to find a Maxicare
     * @example
     * // Get one Maxicare
     * const maxicare = await prisma.maxicare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends maxicareFindUniqueOrThrowArgs>(args: SelectSubset<T, maxicareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__maxicareClient<$Result.GetResult<Prisma.$maxicarePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Maxicare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maxicareFindFirstArgs} args - Arguments to find a Maxicare
     * @example
     * // Get one Maxicare
     * const maxicare = await prisma.maxicare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends maxicareFindFirstArgs>(args?: SelectSubset<T, maxicareFindFirstArgs<ExtArgs>>): Prisma__maxicareClient<$Result.GetResult<Prisma.$maxicarePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Maxicare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maxicareFindFirstOrThrowArgs} args - Arguments to find a Maxicare
     * @example
     * // Get one Maxicare
     * const maxicare = await prisma.maxicare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends maxicareFindFirstOrThrowArgs>(args?: SelectSubset<T, maxicareFindFirstOrThrowArgs<ExtArgs>>): Prisma__maxicareClient<$Result.GetResult<Prisma.$maxicarePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Maxicares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maxicareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maxicares
     * const maxicares = await prisma.maxicare.findMany()
     * 
     * // Get first 10 Maxicares
     * const maxicares = await prisma.maxicare.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maxicareWithIdOnly = await prisma.maxicare.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends maxicareFindManyArgs>(args?: SelectSubset<T, maxicareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$maxicarePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Maxicare.
     * @param {maxicareCreateArgs} args - Arguments to create a Maxicare.
     * @example
     * // Create one Maxicare
     * const Maxicare = await prisma.maxicare.create({
     *   data: {
     *     // ... data to create a Maxicare
     *   }
     * })
     * 
     */
    create<T extends maxicareCreateArgs>(args: SelectSubset<T, maxicareCreateArgs<ExtArgs>>): Prisma__maxicareClient<$Result.GetResult<Prisma.$maxicarePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Maxicares.
     * @param {maxicareCreateManyArgs} args - Arguments to create many Maxicares.
     * @example
     * // Create many Maxicares
     * const maxicare = await prisma.maxicare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends maxicareCreateManyArgs>(args?: SelectSubset<T, maxicareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Maxicare.
     * @param {maxicareDeleteArgs} args - Arguments to delete one Maxicare.
     * @example
     * // Delete one Maxicare
     * const Maxicare = await prisma.maxicare.delete({
     *   where: {
     *     // ... filter to delete one Maxicare
     *   }
     * })
     * 
     */
    delete<T extends maxicareDeleteArgs>(args: SelectSubset<T, maxicareDeleteArgs<ExtArgs>>): Prisma__maxicareClient<$Result.GetResult<Prisma.$maxicarePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Maxicare.
     * @param {maxicareUpdateArgs} args - Arguments to update one Maxicare.
     * @example
     * // Update one Maxicare
     * const maxicare = await prisma.maxicare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends maxicareUpdateArgs>(args: SelectSubset<T, maxicareUpdateArgs<ExtArgs>>): Prisma__maxicareClient<$Result.GetResult<Prisma.$maxicarePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Maxicares.
     * @param {maxicareDeleteManyArgs} args - Arguments to filter Maxicares to delete.
     * @example
     * // Delete a few Maxicares
     * const { count } = await prisma.maxicare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends maxicareDeleteManyArgs>(args?: SelectSubset<T, maxicareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maxicares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maxicareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maxicares
     * const maxicare = await prisma.maxicare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends maxicareUpdateManyArgs>(args: SelectSubset<T, maxicareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Maxicare.
     * @param {maxicareUpsertArgs} args - Arguments to update or create a Maxicare.
     * @example
     * // Update or create a Maxicare
     * const maxicare = await prisma.maxicare.upsert({
     *   create: {
     *     // ... data to create a Maxicare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maxicare we want to update
     *   }
     * })
     */
    upsert<T extends maxicareUpsertArgs>(args: SelectSubset<T, maxicareUpsertArgs<ExtArgs>>): Prisma__maxicareClient<$Result.GetResult<Prisma.$maxicarePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Maxicares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maxicareCountArgs} args - Arguments to filter Maxicares to count.
     * @example
     * // Count the number of Maxicares
     * const count = await prisma.maxicare.count({
     *   where: {
     *     // ... the filter for the Maxicares we want to count
     *   }
     * })
    **/
    count<T extends maxicareCountArgs>(
      args?: Subset<T, maxicareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaxicareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maxicare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaxicareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaxicareAggregateArgs>(args: Subset<T, MaxicareAggregateArgs>): Prisma.PrismaPromise<GetMaxicareAggregateType<T>>

    /**
     * Group by Maxicare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {maxicareGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends maxicareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: maxicareGroupByArgs['orderBy'] }
        : { orderBy?: maxicareGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, maxicareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaxicareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the maxicare model
   */
  readonly fields: maxicareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for maxicare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__maxicareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends clientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientsDefaultArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the maxicare model
   */ 
  interface maxicareFieldRefs {
    readonly id: FieldRef<"maxicare", 'Int'>
    readonly clientId: FieldRef<"maxicare", 'Int'>
    readonly PY: FieldRef<"maxicare", 'String'>
    readonly Company: FieldRef<"maxicare", 'String'>
    readonly Member_Account: FieldRef<"maxicare", 'String'>
    readonly Member_Type: FieldRef<"maxicare", 'String'>
    readonly ICD_10_Code: FieldRef<"maxicare", 'String'>
    readonly Diagnosis: FieldRef<"maxicare", 'String'>
    readonly Claim_Type: FieldRef<"maxicare", 'String'>
    readonly Admission_Date: FieldRef<"maxicare", 'DateTime'>
    readonly Provider_Name: FieldRef<"maxicare", 'String'>
    readonly Provider_Type: FieldRef<"maxicare", 'String'>
    readonly Approved_Claim_Amount: FieldRef<"maxicare", 'Float'>
    readonly Relationship: FieldRef<"maxicare", 'String'>
    readonly createdAt: FieldRef<"maxicare", 'DateTime'>
    readonly updatedAt: FieldRef<"maxicare", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * maxicare findUnique
   */
  export type maxicareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicare
     */
    select?: maxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicare
     */
    omit?: maxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareInclude<ExtArgs> | null
    /**
     * Filter, which maxicare to fetch.
     */
    where: maxicareWhereUniqueInput
  }

  /**
   * maxicare findUniqueOrThrow
   */
  export type maxicareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicare
     */
    select?: maxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicare
     */
    omit?: maxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareInclude<ExtArgs> | null
    /**
     * Filter, which maxicare to fetch.
     */
    where: maxicareWhereUniqueInput
  }

  /**
   * maxicare findFirst
   */
  export type maxicareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicare
     */
    select?: maxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicare
     */
    omit?: maxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareInclude<ExtArgs> | null
    /**
     * Filter, which maxicare to fetch.
     */
    where?: maxicareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maxicares to fetch.
     */
    orderBy?: maxicareOrderByWithRelationInput | maxicareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maxicares.
     */
    cursor?: maxicareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maxicares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maxicares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maxicares.
     */
    distinct?: MaxicareScalarFieldEnum | MaxicareScalarFieldEnum[]
  }

  /**
   * maxicare findFirstOrThrow
   */
  export type maxicareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicare
     */
    select?: maxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicare
     */
    omit?: maxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareInclude<ExtArgs> | null
    /**
     * Filter, which maxicare to fetch.
     */
    where?: maxicareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maxicares to fetch.
     */
    orderBy?: maxicareOrderByWithRelationInput | maxicareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for maxicares.
     */
    cursor?: maxicareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maxicares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maxicares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of maxicares.
     */
    distinct?: MaxicareScalarFieldEnum | MaxicareScalarFieldEnum[]
  }

  /**
   * maxicare findMany
   */
  export type maxicareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicare
     */
    select?: maxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicare
     */
    omit?: maxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareInclude<ExtArgs> | null
    /**
     * Filter, which maxicares to fetch.
     */
    where?: maxicareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of maxicares to fetch.
     */
    orderBy?: maxicareOrderByWithRelationInput | maxicareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing maxicares.
     */
    cursor?: maxicareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` maxicares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` maxicares.
     */
    skip?: number
    distinct?: MaxicareScalarFieldEnum | MaxicareScalarFieldEnum[]
  }

  /**
   * maxicare create
   */
  export type maxicareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicare
     */
    select?: maxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicare
     */
    omit?: maxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareInclude<ExtArgs> | null
    /**
     * The data needed to create a maxicare.
     */
    data: XOR<maxicareCreateInput, maxicareUncheckedCreateInput>
  }

  /**
   * maxicare createMany
   */
  export type maxicareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many maxicares.
     */
    data: maxicareCreateManyInput | maxicareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * maxicare update
   */
  export type maxicareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicare
     */
    select?: maxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicare
     */
    omit?: maxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareInclude<ExtArgs> | null
    /**
     * The data needed to update a maxicare.
     */
    data: XOR<maxicareUpdateInput, maxicareUncheckedUpdateInput>
    /**
     * Choose, which maxicare to update.
     */
    where: maxicareWhereUniqueInput
  }

  /**
   * maxicare updateMany
   */
  export type maxicareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update maxicares.
     */
    data: XOR<maxicareUpdateManyMutationInput, maxicareUncheckedUpdateManyInput>
    /**
     * Filter which maxicares to update
     */
    where?: maxicareWhereInput
    /**
     * Limit how many maxicares to update.
     */
    limit?: number
  }

  /**
   * maxicare upsert
   */
  export type maxicareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicare
     */
    select?: maxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicare
     */
    omit?: maxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareInclude<ExtArgs> | null
    /**
     * The filter to search for the maxicare to update in case it exists.
     */
    where: maxicareWhereUniqueInput
    /**
     * In case the maxicare found by the `where` argument doesn't exist, create a new maxicare with this data.
     */
    create: XOR<maxicareCreateInput, maxicareUncheckedCreateInput>
    /**
     * In case the maxicare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<maxicareUpdateInput, maxicareUncheckedUpdateInput>
  }

  /**
   * maxicare delete
   */
  export type maxicareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicare
     */
    select?: maxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicare
     */
    omit?: maxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareInclude<ExtArgs> | null
    /**
     * Filter which maxicare to delete.
     */
    where: maxicareWhereUniqueInput
  }

  /**
   * maxicare deleteMany
   */
  export type maxicareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which maxicares to delete
     */
    where?: maxicareWhereInput
    /**
     * Limit how many maxicares to delete.
     */
    limit?: number
  }

  /**
   * maxicare without action
   */
  export type maxicareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the maxicare
     */
    select?: maxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the maxicare
     */
    omit?: maxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: maxicareInclude<ExtArgs> | null
  }


  /**
   * Model customIllnesses
   */

  export type AggregateCustomIllnesses = {
    _count: CustomIllnessesCountAggregateOutputType | null
    _avg: CustomIllnessesAvgAggregateOutputType | null
    _sum: CustomIllnessesSumAggregateOutputType | null
    _min: CustomIllnessesMinAggregateOutputType | null
    _max: CustomIllnessesMaxAggregateOutputType | null
  }

  export type CustomIllnessesAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    claim_amount: number | null
    percentage_to_total_amount: Decimal | null
    claim_count: number | null
    percentage_to_total_count: Decimal | null
    average_cost_per_claim: number | null
  }

  export type CustomIllnessesSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    claim_amount: number | null
    percentage_to_total_amount: Decimal | null
    claim_count: number | null
    percentage_to_total_count: Decimal | null
    average_cost_per_claim: number | null
  }

  export type CustomIllnessesMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    py: string | null
    member_type: string | null
    icd_10_code: string | null
    diagnosis: string | null
    claim_amount: number | null
    percentage_to_total_amount: Decimal | null
    claim_count: number | null
    percentage_to_total_count: Decimal | null
    average_cost_per_claim: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomIllnessesMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    py: string | null
    member_type: string | null
    icd_10_code: string | null
    diagnosis: string | null
    claim_amount: number | null
    percentage_to_total_amount: Decimal | null
    claim_count: number | null
    percentage_to_total_count: Decimal | null
    average_cost_per_claim: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomIllnessesCountAggregateOutputType = {
    id: number
    clientId: number
    py: number
    member_type: number
    icd_10_code: number
    diagnosis: number
    claim_amount: number
    percentage_to_total_amount: number
    claim_count: number
    percentage_to_total_count: number
    average_cost_per_claim: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomIllnessesAvgAggregateInputType = {
    id?: true
    clientId?: true
    claim_amount?: true
    percentage_to_total_amount?: true
    claim_count?: true
    percentage_to_total_count?: true
    average_cost_per_claim?: true
  }

  export type CustomIllnessesSumAggregateInputType = {
    id?: true
    clientId?: true
    claim_amount?: true
    percentage_to_total_amount?: true
    claim_count?: true
    percentage_to_total_count?: true
    average_cost_per_claim?: true
  }

  export type CustomIllnessesMinAggregateInputType = {
    id?: true
    clientId?: true
    py?: true
    member_type?: true
    icd_10_code?: true
    diagnosis?: true
    claim_amount?: true
    percentage_to_total_amount?: true
    claim_count?: true
    percentage_to_total_count?: true
    average_cost_per_claim?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomIllnessesMaxAggregateInputType = {
    id?: true
    clientId?: true
    py?: true
    member_type?: true
    icd_10_code?: true
    diagnosis?: true
    claim_amount?: true
    percentage_to_total_amount?: true
    claim_count?: true
    percentage_to_total_count?: true
    average_cost_per_claim?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomIllnessesCountAggregateInputType = {
    id?: true
    clientId?: true
    py?: true
    member_type?: true
    icd_10_code?: true
    diagnosis?: true
    claim_amount?: true
    percentage_to_total_amount?: true
    claim_count?: true
    percentage_to_total_count?: true
    average_cost_per_claim?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomIllnessesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customIllnesses to aggregate.
     */
    where?: customIllnessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customIllnesses to fetch.
     */
    orderBy?: customIllnessesOrderByWithRelationInput | customIllnessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customIllnessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customIllnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customIllnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customIllnesses
    **/
    _count?: true | CustomIllnessesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomIllnessesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomIllnessesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomIllnessesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomIllnessesMaxAggregateInputType
  }

  export type GetCustomIllnessesAggregateType<T extends CustomIllnessesAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomIllnesses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomIllnesses[P]>
      : GetScalarType<T[P], AggregateCustomIllnesses[P]>
  }




  export type customIllnessesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customIllnessesWhereInput
    orderBy?: customIllnessesOrderByWithAggregationInput | customIllnessesOrderByWithAggregationInput[]
    by: CustomIllnessesScalarFieldEnum[] | CustomIllnessesScalarFieldEnum
    having?: customIllnessesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomIllnessesCountAggregateInputType | true
    _avg?: CustomIllnessesAvgAggregateInputType
    _sum?: CustomIllnessesSumAggregateInputType
    _min?: CustomIllnessesMinAggregateInputType
    _max?: CustomIllnessesMaxAggregateInputType
  }

  export type CustomIllnessesGroupByOutputType = {
    id: number
    clientId: number
    py: string | null
    member_type: string | null
    icd_10_code: string | null
    diagnosis: string | null
    claim_amount: number | null
    percentage_to_total_amount: Decimal | null
    claim_count: number | null
    percentage_to_total_count: Decimal | null
    average_cost_per_claim: number | null
    createdAt: Date
    updatedAt: Date
    _count: CustomIllnessesCountAggregateOutputType | null
    _avg: CustomIllnessesAvgAggregateOutputType | null
    _sum: CustomIllnessesSumAggregateOutputType | null
    _min: CustomIllnessesMinAggregateOutputType | null
    _max: CustomIllnessesMaxAggregateOutputType | null
  }

  type GetCustomIllnessesGroupByPayload<T extends customIllnessesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomIllnessesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomIllnessesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomIllnessesGroupByOutputType[P]>
            : GetScalarType<T[P], CustomIllnessesGroupByOutputType[P]>
        }
      >
    >


  export type customIllnessesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    py?: boolean
    member_type?: boolean
    icd_10_code?: boolean
    diagnosis?: boolean
    claim_amount?: boolean
    percentage_to_total_amount?: boolean
    claim_count?: boolean
    percentage_to_total_count?: boolean
    average_cost_per_claim?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clients?: boolean | clientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customIllnesses"]>



  export type customIllnessesSelectScalar = {
    id?: boolean
    clientId?: boolean
    py?: boolean
    member_type?: boolean
    icd_10_code?: boolean
    diagnosis?: boolean
    claim_amount?: boolean
    percentage_to_total_amount?: boolean
    claim_count?: boolean
    percentage_to_total_count?: boolean
    average_cost_per_claim?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type customIllnessesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "py" | "member_type" | "icd_10_code" | "diagnosis" | "claim_amount" | "percentage_to_total_amount" | "claim_count" | "percentage_to_total_count" | "average_cost_per_claim" | "createdAt" | "updatedAt", ExtArgs["result"]["customIllnesses"]>
  export type customIllnessesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | clientsDefaultArgs<ExtArgs>
  }

  export type $customIllnessesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customIllnesses"
    objects: {
      clients: Prisma.$clientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number
      py: string | null
      member_type: string | null
      icd_10_code: string | null
      diagnosis: string | null
      claim_amount: number | null
      percentage_to_total_amount: Prisma.Decimal | null
      claim_count: number | null
      percentage_to_total_count: Prisma.Decimal | null
      average_cost_per_claim: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customIllnesses"]>
    composites: {}
  }

  type customIllnessesGetPayload<S extends boolean | null | undefined | customIllnessesDefaultArgs> = $Result.GetResult<Prisma.$customIllnessesPayload, S>

  type customIllnessesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customIllnessesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomIllnessesCountAggregateInputType | true
    }

  export interface customIllnessesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customIllnesses'], meta: { name: 'customIllnesses' } }
    /**
     * Find zero or one CustomIllnesses that matches the filter.
     * @param {customIllnessesFindUniqueArgs} args - Arguments to find a CustomIllnesses
     * @example
     * // Get one CustomIllnesses
     * const customIllnesses = await prisma.customIllnesses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customIllnessesFindUniqueArgs>(args: SelectSubset<T, customIllnessesFindUniqueArgs<ExtArgs>>): Prisma__customIllnessesClient<$Result.GetResult<Prisma.$customIllnessesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CustomIllnesses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customIllnessesFindUniqueOrThrowArgs} args - Arguments to find a CustomIllnesses
     * @example
     * // Get one CustomIllnesses
     * const customIllnesses = await prisma.customIllnesses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customIllnessesFindUniqueOrThrowArgs>(args: SelectSubset<T, customIllnessesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customIllnessesClient<$Result.GetResult<Prisma.$customIllnessesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CustomIllnesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customIllnessesFindFirstArgs} args - Arguments to find a CustomIllnesses
     * @example
     * // Get one CustomIllnesses
     * const customIllnesses = await prisma.customIllnesses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customIllnessesFindFirstArgs>(args?: SelectSubset<T, customIllnessesFindFirstArgs<ExtArgs>>): Prisma__customIllnessesClient<$Result.GetResult<Prisma.$customIllnessesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CustomIllnesses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customIllnessesFindFirstOrThrowArgs} args - Arguments to find a CustomIllnesses
     * @example
     * // Get one CustomIllnesses
     * const customIllnesses = await prisma.customIllnesses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customIllnessesFindFirstOrThrowArgs>(args?: SelectSubset<T, customIllnessesFindFirstOrThrowArgs<ExtArgs>>): Prisma__customIllnessesClient<$Result.GetResult<Prisma.$customIllnessesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CustomIllnesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customIllnessesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomIllnesses
     * const customIllnesses = await prisma.customIllnesses.findMany()
     * 
     * // Get first 10 CustomIllnesses
     * const customIllnesses = await prisma.customIllnesses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customIllnessesWithIdOnly = await prisma.customIllnesses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends customIllnessesFindManyArgs>(args?: SelectSubset<T, customIllnessesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customIllnessesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CustomIllnesses.
     * @param {customIllnessesCreateArgs} args - Arguments to create a CustomIllnesses.
     * @example
     * // Create one CustomIllnesses
     * const CustomIllnesses = await prisma.customIllnesses.create({
     *   data: {
     *     // ... data to create a CustomIllnesses
     *   }
     * })
     * 
     */
    create<T extends customIllnessesCreateArgs>(args: SelectSubset<T, customIllnessesCreateArgs<ExtArgs>>): Prisma__customIllnessesClient<$Result.GetResult<Prisma.$customIllnessesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CustomIllnesses.
     * @param {customIllnessesCreateManyArgs} args - Arguments to create many CustomIllnesses.
     * @example
     * // Create many CustomIllnesses
     * const customIllnesses = await prisma.customIllnesses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customIllnessesCreateManyArgs>(args?: SelectSubset<T, customIllnessesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CustomIllnesses.
     * @param {customIllnessesDeleteArgs} args - Arguments to delete one CustomIllnesses.
     * @example
     * // Delete one CustomIllnesses
     * const CustomIllnesses = await prisma.customIllnesses.delete({
     *   where: {
     *     // ... filter to delete one CustomIllnesses
     *   }
     * })
     * 
     */
    delete<T extends customIllnessesDeleteArgs>(args: SelectSubset<T, customIllnessesDeleteArgs<ExtArgs>>): Prisma__customIllnessesClient<$Result.GetResult<Prisma.$customIllnessesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CustomIllnesses.
     * @param {customIllnessesUpdateArgs} args - Arguments to update one CustomIllnesses.
     * @example
     * // Update one CustomIllnesses
     * const customIllnesses = await prisma.customIllnesses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customIllnessesUpdateArgs>(args: SelectSubset<T, customIllnessesUpdateArgs<ExtArgs>>): Prisma__customIllnessesClient<$Result.GetResult<Prisma.$customIllnessesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CustomIllnesses.
     * @param {customIllnessesDeleteManyArgs} args - Arguments to filter CustomIllnesses to delete.
     * @example
     * // Delete a few CustomIllnesses
     * const { count } = await prisma.customIllnesses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customIllnessesDeleteManyArgs>(args?: SelectSubset<T, customIllnessesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomIllnesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customIllnessesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomIllnesses
     * const customIllnesses = await prisma.customIllnesses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customIllnessesUpdateManyArgs>(args: SelectSubset<T, customIllnessesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomIllnesses.
     * @param {customIllnessesUpsertArgs} args - Arguments to update or create a CustomIllnesses.
     * @example
     * // Update or create a CustomIllnesses
     * const customIllnesses = await prisma.customIllnesses.upsert({
     *   create: {
     *     // ... data to create a CustomIllnesses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomIllnesses we want to update
     *   }
     * })
     */
    upsert<T extends customIllnessesUpsertArgs>(args: SelectSubset<T, customIllnessesUpsertArgs<ExtArgs>>): Prisma__customIllnessesClient<$Result.GetResult<Prisma.$customIllnessesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CustomIllnesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customIllnessesCountArgs} args - Arguments to filter CustomIllnesses to count.
     * @example
     * // Count the number of CustomIllnesses
     * const count = await prisma.customIllnesses.count({
     *   where: {
     *     // ... the filter for the CustomIllnesses we want to count
     *   }
     * })
    **/
    count<T extends customIllnessesCountArgs>(
      args?: Subset<T, customIllnessesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomIllnessesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomIllnesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomIllnessesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomIllnessesAggregateArgs>(args: Subset<T, CustomIllnessesAggregateArgs>): Prisma.PrismaPromise<GetCustomIllnessesAggregateType<T>>

    /**
     * Group by CustomIllnesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customIllnessesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends customIllnessesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customIllnessesGroupByArgs['orderBy'] }
        : { orderBy?: customIllnessesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, customIllnessesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomIllnessesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customIllnesses model
   */
  readonly fields: customIllnessesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customIllnesses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customIllnessesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends clientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientsDefaultArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the customIllnesses model
   */ 
  interface customIllnessesFieldRefs {
    readonly id: FieldRef<"customIllnesses", 'Int'>
    readonly clientId: FieldRef<"customIllnesses", 'Int'>
    readonly py: FieldRef<"customIllnesses", 'String'>
    readonly member_type: FieldRef<"customIllnesses", 'String'>
    readonly icd_10_code: FieldRef<"customIllnesses", 'String'>
    readonly diagnosis: FieldRef<"customIllnesses", 'String'>
    readonly claim_amount: FieldRef<"customIllnesses", 'Int'>
    readonly percentage_to_total_amount: FieldRef<"customIllnesses", 'Decimal'>
    readonly claim_count: FieldRef<"customIllnesses", 'Int'>
    readonly percentage_to_total_count: FieldRef<"customIllnesses", 'Decimal'>
    readonly average_cost_per_claim: FieldRef<"customIllnesses", 'Int'>
    readonly createdAt: FieldRef<"customIllnesses", 'DateTime'>
    readonly updatedAt: FieldRef<"customIllnesses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * customIllnesses findUnique
   */
  export type customIllnessesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customIllnesses
     */
    select?: customIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customIllnesses
     */
    omit?: customIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customIllnessesInclude<ExtArgs> | null
    /**
     * Filter, which customIllnesses to fetch.
     */
    where: customIllnessesWhereUniqueInput
  }

  /**
   * customIllnesses findUniqueOrThrow
   */
  export type customIllnessesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customIllnesses
     */
    select?: customIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customIllnesses
     */
    omit?: customIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customIllnessesInclude<ExtArgs> | null
    /**
     * Filter, which customIllnesses to fetch.
     */
    where: customIllnessesWhereUniqueInput
  }

  /**
   * customIllnesses findFirst
   */
  export type customIllnessesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customIllnesses
     */
    select?: customIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customIllnesses
     */
    omit?: customIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customIllnessesInclude<ExtArgs> | null
    /**
     * Filter, which customIllnesses to fetch.
     */
    where?: customIllnessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customIllnesses to fetch.
     */
    orderBy?: customIllnessesOrderByWithRelationInput | customIllnessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customIllnesses.
     */
    cursor?: customIllnessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customIllnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customIllnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customIllnesses.
     */
    distinct?: CustomIllnessesScalarFieldEnum | CustomIllnessesScalarFieldEnum[]
  }

  /**
   * customIllnesses findFirstOrThrow
   */
  export type customIllnessesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customIllnesses
     */
    select?: customIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customIllnesses
     */
    omit?: customIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customIllnessesInclude<ExtArgs> | null
    /**
     * Filter, which customIllnesses to fetch.
     */
    where?: customIllnessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customIllnesses to fetch.
     */
    orderBy?: customIllnessesOrderByWithRelationInput | customIllnessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customIllnesses.
     */
    cursor?: customIllnessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customIllnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customIllnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customIllnesses.
     */
    distinct?: CustomIllnessesScalarFieldEnum | CustomIllnessesScalarFieldEnum[]
  }

  /**
   * customIllnesses findMany
   */
  export type customIllnessesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customIllnesses
     */
    select?: customIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customIllnesses
     */
    omit?: customIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customIllnessesInclude<ExtArgs> | null
    /**
     * Filter, which customIllnesses to fetch.
     */
    where?: customIllnessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customIllnesses to fetch.
     */
    orderBy?: customIllnessesOrderByWithRelationInput | customIllnessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customIllnesses.
     */
    cursor?: customIllnessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customIllnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customIllnesses.
     */
    skip?: number
    distinct?: CustomIllnessesScalarFieldEnum | CustomIllnessesScalarFieldEnum[]
  }

  /**
   * customIllnesses create
   */
  export type customIllnessesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customIllnesses
     */
    select?: customIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customIllnesses
     */
    omit?: customIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customIllnessesInclude<ExtArgs> | null
    /**
     * The data needed to create a customIllnesses.
     */
    data: XOR<customIllnessesCreateInput, customIllnessesUncheckedCreateInput>
  }

  /**
   * customIllnesses createMany
   */
  export type customIllnessesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customIllnesses.
     */
    data: customIllnessesCreateManyInput | customIllnessesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customIllnesses update
   */
  export type customIllnessesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customIllnesses
     */
    select?: customIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customIllnesses
     */
    omit?: customIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customIllnessesInclude<ExtArgs> | null
    /**
     * The data needed to update a customIllnesses.
     */
    data: XOR<customIllnessesUpdateInput, customIllnessesUncheckedUpdateInput>
    /**
     * Choose, which customIllnesses to update.
     */
    where: customIllnessesWhereUniqueInput
  }

  /**
   * customIllnesses updateMany
   */
  export type customIllnessesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customIllnesses.
     */
    data: XOR<customIllnessesUpdateManyMutationInput, customIllnessesUncheckedUpdateManyInput>
    /**
     * Filter which customIllnesses to update
     */
    where?: customIllnessesWhereInput
    /**
     * Limit how many customIllnesses to update.
     */
    limit?: number
  }

  /**
   * customIllnesses upsert
   */
  export type customIllnessesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customIllnesses
     */
    select?: customIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customIllnesses
     */
    omit?: customIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customIllnessesInclude<ExtArgs> | null
    /**
     * The filter to search for the customIllnesses to update in case it exists.
     */
    where: customIllnessesWhereUniqueInput
    /**
     * In case the customIllnesses found by the `where` argument doesn't exist, create a new customIllnesses with this data.
     */
    create: XOR<customIllnessesCreateInput, customIllnessesUncheckedCreateInput>
    /**
     * In case the customIllnesses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customIllnessesUpdateInput, customIllnessesUncheckedUpdateInput>
  }

  /**
   * customIllnesses delete
   */
  export type customIllnessesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customIllnesses
     */
    select?: customIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customIllnesses
     */
    omit?: customIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customIllnessesInclude<ExtArgs> | null
    /**
     * Filter which customIllnesses to delete.
     */
    where: customIllnessesWhereUniqueInput
  }

  /**
   * customIllnesses deleteMany
   */
  export type customIllnessesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customIllnesses to delete
     */
    where?: customIllnessesWhereInput
    /**
     * Limit how many customIllnesses to delete.
     */
    limit?: number
  }

  /**
   * customIllnesses without action
   */
  export type customIllnessesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customIllnesses
     */
    select?: customIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customIllnesses
     */
    omit?: customIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customIllnessesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    admin: 'admin',
    canUpload: 'canUpload',
    canCreate: 'canCreate',
    canViewDeck: 'canViewDeck',
    canUploadDeck: 'canUploadDeck',
    canAdd: 'canAdd',
    canRemove: 'canRemove',
    canEdit: 'canEdit',
    superAdmin: 'superAdmin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InsurersScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type InsurersScalarFieldEnum = (typeof InsurersScalarFieldEnum)[keyof typeof InsurersScalarFieldEnum]


  export const ClientsScalarFieldEnum: {
    id: 'id',
    client_name: 'client_name',
    description: 'description',
    insurer_id: 'insurer_id'
  };

  export type ClientsScalarFieldEnum = (typeof ClientsScalarFieldEnum)[keyof typeof ClientsScalarFieldEnum]


  export const UploadsScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    insurerId: 'insurerId',
    year: 'year',
    months: 'months',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UploadsScalarFieldEnum = (typeof UploadsScalarFieldEnum)[keyof typeof UploadsScalarFieldEnum]


  export const DecksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clientId: 'clientId'
  };

  export type DecksScalarFieldEnum = (typeof DecksScalarFieldEnum)[keyof typeof DecksScalarFieldEnum]


  export const IntellicareMasterlistScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    PY: 'PY',
    ACCOUNT_NO: 'ACCOUNT_NO',
    STATUS: 'STATUS',
    MEMBER_TYPE: 'MEMBER_TYPE',
    RNB: 'RNB',
    PREEXIST: 'PREEXIST',
    LIMIT: 'LIMIT',
    BIRTHDATE: 'BIRTHDATE',
    AGE: 'AGE',
    RELATION: 'RELATION',
    EE_ID: 'EE_ID',
    CARD_NO: 'CARD_NO',
    COMPANY: 'COMPANY',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IntellicareMasterlistScalarFieldEnum = (typeof IntellicareMasterlistScalarFieldEnum)[keyof typeof IntellicareMasterlistScalarFieldEnum]


  export const MaxicareMasterlistScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    PY: 'PY',
    ACCOUNT_NO: 'ACCOUNT_NO',
    STATUS: 'STATUS',
    MEMBER_TYPE: 'MEMBER_TYPE',
    LIMIT: 'LIMIT',
    RELATION: 'RELATION',
    EE_ID: 'EE_ID',
    CARD_NO: 'CARD_NO',
    COMPANY: 'COMPANY',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaxicareMasterlistScalarFieldEnum = (typeof MaxicareMasterlistScalarFieldEnum)[keyof typeof MaxicareMasterlistScalarFieldEnum]


  export const IntellicareScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    PY: 'PY',
    Company: 'Company',
    Member_Account: 'Member_Account',
    Member_Type: 'Member_Type',
    ICD_10_Code: 'ICD_10_Code',
    Diagnosis: 'Diagnosis',
    Claim_Type: 'Claim_Type',
    Admission_Date: 'Admission_Date',
    Provider_Name: 'Provider_Name',
    Provider_Type: 'Provider_Type',
    Approved_Claim_Amount: 'Approved_Claim_Amount',
    Class_Plan_Level: 'Class_Plan_Level',
    Maximum_Benefit_Limit: 'Maximum_Benefit_Limit',
    Date_of_Birth: 'Date_of_Birth',
    Relationship: 'Relationship',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IntellicareScalarFieldEnum = (typeof IntellicareScalarFieldEnum)[keyof typeof IntellicareScalarFieldEnum]


  export const MaxicareScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    PY: 'PY',
    Company: 'Company',
    Member_Account: 'Member_Account',
    Member_Type: 'Member_Type',
    ICD_10_Code: 'ICD_10_Code',
    Diagnosis: 'Diagnosis',
    Claim_Type: 'Claim_Type',
    Admission_Date: 'Admission_Date',
    Provider_Name: 'Provider_Name',
    Provider_Type: 'Provider_Type',
    Approved_Claim_Amount: 'Approved_Claim_Amount',
    Relationship: 'Relationship',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaxicareScalarFieldEnum = (typeof MaxicareScalarFieldEnum)[keyof typeof MaxicareScalarFieldEnum]


  export const CustomIllnessesScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    py: 'py',
    member_type: 'member_type',
    icd_10_code: 'icd_10_code',
    diagnosis: 'diagnosis',
    claim_amount: 'claim_amount',
    percentage_to_total_amount: 'percentage_to_total_amount',
    claim_count: 'claim_count',
    percentage_to_total_count: 'percentage_to_total_count',
    average_cost_per_claim: 'average_cost_per_claim',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomIllnessesScalarFieldEnum = (typeof CustomIllnessesScalarFieldEnum)[keyof typeof CustomIllnessesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const userOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const insurersOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type insurersOrderByRelevanceFieldEnum = (typeof insurersOrderByRelevanceFieldEnum)[keyof typeof insurersOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const clientsOrderByRelevanceFieldEnum: {
    client_name: 'client_name',
    description: 'description'
  };

  export type clientsOrderByRelevanceFieldEnum = (typeof clientsOrderByRelevanceFieldEnum)[keyof typeof clientsOrderByRelevanceFieldEnum]


  export const uploadsOrderByRelevanceFieldEnum: {
    year: 'year',
    months: 'months',
    type: 'type'
  };

  export type uploadsOrderByRelevanceFieldEnum = (typeof uploadsOrderByRelevanceFieldEnum)[keyof typeof uploadsOrderByRelevanceFieldEnum]


  export const decksOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type decksOrderByRelevanceFieldEnum = (typeof decksOrderByRelevanceFieldEnum)[keyof typeof decksOrderByRelevanceFieldEnum]


  export const intellicareMasterlistOrderByRelevanceFieldEnum: {
    PY: 'PY',
    ACCOUNT_NO: 'ACCOUNT_NO',
    STATUS: 'STATUS',
    MEMBER_TYPE: 'MEMBER_TYPE',
    RNB: 'RNB',
    RELATION: 'RELATION',
    EE_ID: 'EE_ID',
    CARD_NO: 'CARD_NO',
    COMPANY: 'COMPANY'
  };

  export type intellicareMasterlistOrderByRelevanceFieldEnum = (typeof intellicareMasterlistOrderByRelevanceFieldEnum)[keyof typeof intellicareMasterlistOrderByRelevanceFieldEnum]


  export const maxicareMasterlistOrderByRelevanceFieldEnum: {
    PY: 'PY',
    ACCOUNT_NO: 'ACCOUNT_NO',
    STATUS: 'STATUS',
    MEMBER_TYPE: 'MEMBER_TYPE',
    RELATION: 'RELATION',
    EE_ID: 'EE_ID',
    CARD_NO: 'CARD_NO',
    COMPANY: 'COMPANY'
  };

  export type maxicareMasterlistOrderByRelevanceFieldEnum = (typeof maxicareMasterlistOrderByRelevanceFieldEnum)[keyof typeof maxicareMasterlistOrderByRelevanceFieldEnum]


  export const intellicareOrderByRelevanceFieldEnum: {
    PY: 'PY',
    Company: 'Company',
    Member_Account: 'Member_Account',
    Member_Type: 'Member_Type',
    ICD_10_Code: 'ICD_10_Code',
    Diagnosis: 'Diagnosis',
    Claim_Type: 'Claim_Type',
    Provider_Name: 'Provider_Name',
    Provider_Type: 'Provider_Type',
    Class_Plan_Level: 'Class_Plan_Level',
    Relationship: 'Relationship'
  };

  export type intellicareOrderByRelevanceFieldEnum = (typeof intellicareOrderByRelevanceFieldEnum)[keyof typeof intellicareOrderByRelevanceFieldEnum]


  export const maxicareOrderByRelevanceFieldEnum: {
    PY: 'PY',
    Company: 'Company',
    Member_Account: 'Member_Account',
    Member_Type: 'Member_Type',
    ICD_10_Code: 'ICD_10_Code',
    Diagnosis: 'Diagnosis',
    Claim_Type: 'Claim_Type',
    Provider_Name: 'Provider_Name',
    Provider_Type: 'Provider_Type',
    Relationship: 'Relationship'
  };

  export type maxicareOrderByRelevanceFieldEnum = (typeof maxicareOrderByRelevanceFieldEnum)[keyof typeof maxicareOrderByRelevanceFieldEnum]


  export const customIllnessesOrderByRelevanceFieldEnum: {
    py: 'py',
    member_type: 'member_type',
    icd_10_code: 'icd_10_code',
    diagnosis: 'diagnosis'
  };

  export type customIllnessesOrderByRelevanceFieldEnum = (typeof customIllnessesOrderByRelevanceFieldEnum)[keyof typeof customIllnessesOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    admin?: BoolFilter<"user"> | boolean
    canUpload?: BoolFilter<"user"> | boolean
    canCreate?: BoolFilter<"user"> | boolean
    canViewDeck?: BoolFilter<"user"> | boolean
    canUploadDeck?: BoolFilter<"user"> | boolean
    canAdd?: BoolFilter<"user"> | boolean
    canRemove?: BoolFilter<"user"> | boolean
    canEdit?: BoolFilter<"user"> | boolean
    superAdmin?: BoolFilter<"user"> | boolean
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    admin?: SortOrder
    canUpload?: SortOrder
    canCreate?: SortOrder
    canViewDeck?: SortOrder
    canUploadDeck?: SortOrder
    canAdd?: SortOrder
    canRemove?: SortOrder
    canEdit?: SortOrder
    superAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    admin?: BoolFilter<"user"> | boolean
    canUpload?: BoolFilter<"user"> | boolean
    canCreate?: BoolFilter<"user"> | boolean
    canViewDeck?: BoolFilter<"user"> | boolean
    canUploadDeck?: BoolFilter<"user"> | boolean
    canAdd?: BoolFilter<"user"> | boolean
    canRemove?: BoolFilter<"user"> | boolean
    canEdit?: BoolFilter<"user"> | boolean
    superAdmin?: BoolFilter<"user"> | boolean
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    admin?: SortOrder
    canUpload?: SortOrder
    canCreate?: SortOrder
    canViewDeck?: SortOrder
    canUploadDeck?: SortOrder
    canAdd?: SortOrder
    canRemove?: SortOrder
    canEdit?: SortOrder
    superAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    admin?: BoolWithAggregatesFilter<"user"> | boolean
    canUpload?: BoolWithAggregatesFilter<"user"> | boolean
    canCreate?: BoolWithAggregatesFilter<"user"> | boolean
    canViewDeck?: BoolWithAggregatesFilter<"user"> | boolean
    canUploadDeck?: BoolWithAggregatesFilter<"user"> | boolean
    canAdd?: BoolWithAggregatesFilter<"user"> | boolean
    canRemove?: BoolWithAggregatesFilter<"user"> | boolean
    canEdit?: BoolWithAggregatesFilter<"user"> | boolean
    superAdmin?: BoolWithAggregatesFilter<"user"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type insurersWhereInput = {
    AND?: insurersWhereInput | insurersWhereInput[]
    OR?: insurersWhereInput[]
    NOT?: insurersWhereInput | insurersWhereInput[]
    id?: IntFilter<"insurers"> | number
    name?: StringFilter<"insurers"> | string
    clients?: ClientsListRelationFilter
    uploads?: UploadsListRelationFilter
  }

  export type insurersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    clients?: clientsOrderByRelationAggregateInput
    uploads?: uploadsOrderByRelationAggregateInput
    _relevance?: insurersOrderByRelevanceInput
  }

  export type insurersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: insurersWhereInput | insurersWhereInput[]
    OR?: insurersWhereInput[]
    NOT?: insurersWhereInput | insurersWhereInput[]
    clients?: ClientsListRelationFilter
    uploads?: UploadsListRelationFilter
  }, "id" | "name">

  export type insurersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: insurersCountOrderByAggregateInput
    _avg?: insurersAvgOrderByAggregateInput
    _max?: insurersMaxOrderByAggregateInput
    _min?: insurersMinOrderByAggregateInput
    _sum?: insurersSumOrderByAggregateInput
  }

  export type insurersScalarWhereWithAggregatesInput = {
    AND?: insurersScalarWhereWithAggregatesInput | insurersScalarWhereWithAggregatesInput[]
    OR?: insurersScalarWhereWithAggregatesInput[]
    NOT?: insurersScalarWhereWithAggregatesInput | insurersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"insurers"> | number
    name?: StringWithAggregatesFilter<"insurers"> | string
  }

  export type clientsWhereInput = {
    AND?: clientsWhereInput | clientsWhereInput[]
    OR?: clientsWhereInput[]
    NOT?: clientsWhereInput | clientsWhereInput[]
    id?: IntFilter<"clients"> | number
    client_name?: StringFilter<"clients"> | string
    description?: StringNullableFilter<"clients"> | string | null
    insurer_id?: IntNullableFilter<"clients"> | number | null
    insurer?: XOR<InsurersNullableScalarRelationFilter, insurersWhereInput> | null
    uploads?: UploadsListRelationFilter
    decks?: DecksListRelationFilter
    intellicareMasterlist?: IntellicareMasterlistListRelationFilter
    maxicareMasterlist?: MaxicareMasterlistListRelationFilter
    intellicare?: IntellicareListRelationFilter
    maxicare?: MaxicareListRelationFilter
    customIllnesses?: CustomIllnessesListRelationFilter
  }

  export type clientsOrderByWithRelationInput = {
    id?: SortOrder
    client_name?: SortOrder
    description?: SortOrderInput | SortOrder
    insurer_id?: SortOrderInput | SortOrder
    insurer?: insurersOrderByWithRelationInput
    uploads?: uploadsOrderByRelationAggregateInput
    decks?: decksOrderByRelationAggregateInput
    intellicareMasterlist?: intellicareMasterlistOrderByRelationAggregateInput
    maxicareMasterlist?: maxicareMasterlistOrderByRelationAggregateInput
    intellicare?: intellicareOrderByRelationAggregateInput
    maxicare?: maxicareOrderByRelationAggregateInput
    customIllnesses?: customIllnessesOrderByRelationAggregateInput
    _relevance?: clientsOrderByRelevanceInput
  }

  export type clientsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: clientsWhereInput | clientsWhereInput[]
    OR?: clientsWhereInput[]
    NOT?: clientsWhereInput | clientsWhereInput[]
    client_name?: StringFilter<"clients"> | string
    description?: StringNullableFilter<"clients"> | string | null
    insurer_id?: IntNullableFilter<"clients"> | number | null
    insurer?: XOR<InsurersNullableScalarRelationFilter, insurersWhereInput> | null
    uploads?: UploadsListRelationFilter
    decks?: DecksListRelationFilter
    intellicareMasterlist?: IntellicareMasterlistListRelationFilter
    maxicareMasterlist?: MaxicareMasterlistListRelationFilter
    intellicare?: IntellicareListRelationFilter
    maxicare?: MaxicareListRelationFilter
    customIllnesses?: CustomIllnessesListRelationFilter
  }, "id">

  export type clientsOrderByWithAggregationInput = {
    id?: SortOrder
    client_name?: SortOrder
    description?: SortOrderInput | SortOrder
    insurer_id?: SortOrderInput | SortOrder
    _count?: clientsCountOrderByAggregateInput
    _avg?: clientsAvgOrderByAggregateInput
    _max?: clientsMaxOrderByAggregateInput
    _min?: clientsMinOrderByAggregateInput
    _sum?: clientsSumOrderByAggregateInput
  }

  export type clientsScalarWhereWithAggregatesInput = {
    AND?: clientsScalarWhereWithAggregatesInput | clientsScalarWhereWithAggregatesInput[]
    OR?: clientsScalarWhereWithAggregatesInput[]
    NOT?: clientsScalarWhereWithAggregatesInput | clientsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"clients"> | number
    client_name?: StringWithAggregatesFilter<"clients"> | string
    description?: StringNullableWithAggregatesFilter<"clients"> | string | null
    insurer_id?: IntNullableWithAggregatesFilter<"clients"> | number | null
  }

  export type uploadsWhereInput = {
    AND?: uploadsWhereInput | uploadsWhereInput[]
    OR?: uploadsWhereInput[]
    NOT?: uploadsWhereInput | uploadsWhereInput[]
    id?: IntFilter<"uploads"> | number
    clientId?: IntFilter<"uploads"> | number
    insurerId?: IntFilter<"uploads"> | number
    year?: StringFilter<"uploads"> | string
    months?: StringNullableFilter<"uploads"> | string | null
    type?: StringFilter<"uploads"> | string
    createdAt?: DateTimeFilter<"uploads"> | Date | string
    updatedAt?: DateTimeFilter<"uploads"> | Date | string
    clients?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
    insurers?: XOR<InsurersScalarRelationFilter, insurersWhereInput>
  }

  export type uploadsOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    insurerId?: SortOrder
    year?: SortOrder
    months?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clients?: clientsOrderByWithRelationInput
    insurers?: insurersOrderByWithRelationInput
    _relevance?: uploadsOrderByRelevanceInput
  }

  export type uploadsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: uploadsWhereInput | uploadsWhereInput[]
    OR?: uploadsWhereInput[]
    NOT?: uploadsWhereInput | uploadsWhereInput[]
    clientId?: IntFilter<"uploads"> | number
    insurerId?: IntFilter<"uploads"> | number
    year?: StringFilter<"uploads"> | string
    months?: StringNullableFilter<"uploads"> | string | null
    type?: StringFilter<"uploads"> | string
    createdAt?: DateTimeFilter<"uploads"> | Date | string
    updatedAt?: DateTimeFilter<"uploads"> | Date | string
    clients?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
    insurers?: XOR<InsurersScalarRelationFilter, insurersWhereInput>
  }, "id">

  export type uploadsOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    insurerId?: SortOrder
    year?: SortOrder
    months?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: uploadsCountOrderByAggregateInput
    _avg?: uploadsAvgOrderByAggregateInput
    _max?: uploadsMaxOrderByAggregateInput
    _min?: uploadsMinOrderByAggregateInput
    _sum?: uploadsSumOrderByAggregateInput
  }

  export type uploadsScalarWhereWithAggregatesInput = {
    AND?: uploadsScalarWhereWithAggregatesInput | uploadsScalarWhereWithAggregatesInput[]
    OR?: uploadsScalarWhereWithAggregatesInput[]
    NOT?: uploadsScalarWhereWithAggregatesInput | uploadsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"uploads"> | number
    clientId?: IntWithAggregatesFilter<"uploads"> | number
    insurerId?: IntWithAggregatesFilter<"uploads"> | number
    year?: StringWithAggregatesFilter<"uploads"> | string
    months?: StringNullableWithAggregatesFilter<"uploads"> | string | null
    type?: StringWithAggregatesFilter<"uploads"> | string
    createdAt?: DateTimeWithAggregatesFilter<"uploads"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"uploads"> | Date | string
  }

  export type decksWhereInput = {
    AND?: decksWhereInput | decksWhereInput[]
    OR?: decksWhereInput[]
    NOT?: decksWhereInput | decksWhereInput[]
    id?: IntFilter<"decks"> | number
    name?: StringFilter<"decks"> | string
    description?: StringFilter<"decks"> | string
    createdAt?: DateTimeFilter<"decks"> | Date | string
    updatedAt?: DateTimeFilter<"decks"> | Date | string
    clientId?: IntFilter<"decks"> | number
    clients?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
  }

  export type decksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    clients?: clientsOrderByWithRelationInput
    _relevance?: decksOrderByRelevanceInput
  }

  export type decksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: decksWhereInput | decksWhereInput[]
    OR?: decksWhereInput[]
    NOT?: decksWhereInput | decksWhereInput[]
    name?: StringFilter<"decks"> | string
    description?: StringFilter<"decks"> | string
    createdAt?: DateTimeFilter<"decks"> | Date | string
    updatedAt?: DateTimeFilter<"decks"> | Date | string
    clientId?: IntFilter<"decks"> | number
    clients?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
  }, "id">

  export type decksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    _count?: decksCountOrderByAggregateInput
    _avg?: decksAvgOrderByAggregateInput
    _max?: decksMaxOrderByAggregateInput
    _min?: decksMinOrderByAggregateInput
    _sum?: decksSumOrderByAggregateInput
  }

  export type decksScalarWhereWithAggregatesInput = {
    AND?: decksScalarWhereWithAggregatesInput | decksScalarWhereWithAggregatesInput[]
    OR?: decksScalarWhereWithAggregatesInput[]
    NOT?: decksScalarWhereWithAggregatesInput | decksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"decks"> | number
    name?: StringWithAggregatesFilter<"decks"> | string
    description?: StringWithAggregatesFilter<"decks"> | string
    createdAt?: DateTimeWithAggregatesFilter<"decks"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"decks"> | Date | string
    clientId?: IntWithAggregatesFilter<"decks"> | number
  }

  export type intellicareMasterlistWhereInput = {
    AND?: intellicareMasterlistWhereInput | intellicareMasterlistWhereInput[]
    OR?: intellicareMasterlistWhereInput[]
    NOT?: intellicareMasterlistWhereInput | intellicareMasterlistWhereInput[]
    id?: IntFilter<"intellicareMasterlist"> | number
    clientId?: IntFilter<"intellicareMasterlist"> | number
    PY?: StringNullableFilter<"intellicareMasterlist"> | string | null
    ACCOUNT_NO?: StringNullableFilter<"intellicareMasterlist"> | string | null
    STATUS?: StringNullableFilter<"intellicareMasterlist"> | string | null
    MEMBER_TYPE?: StringNullableFilter<"intellicareMasterlist"> | string | null
    RNB?: StringNullableFilter<"intellicareMasterlist"> | string | null
    PREEXIST?: FloatNullableFilter<"intellicareMasterlist"> | number | null
    LIMIT?: FloatNullableFilter<"intellicareMasterlist"> | number | null
    BIRTHDATE?: DateTimeNullableFilter<"intellicareMasterlist"> | Date | string | null
    AGE?: IntNullableFilter<"intellicareMasterlist"> | number | null
    RELATION?: StringNullableFilter<"intellicareMasterlist"> | string | null
    EE_ID?: StringNullableFilter<"intellicareMasterlist"> | string | null
    CARD_NO?: StringNullableFilter<"intellicareMasterlist"> | string | null
    COMPANY?: StringNullableFilter<"intellicareMasterlist"> | string | null
    createdAt?: DateTimeFilter<"intellicareMasterlist"> | Date | string
    updatedAt?: DateTimeFilter<"intellicareMasterlist"> | Date | string
    clients?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
  }

  export type intellicareMasterlistOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrderInput | SortOrder
    ACCOUNT_NO?: SortOrderInput | SortOrder
    STATUS?: SortOrderInput | SortOrder
    MEMBER_TYPE?: SortOrderInput | SortOrder
    RNB?: SortOrderInput | SortOrder
    PREEXIST?: SortOrderInput | SortOrder
    LIMIT?: SortOrderInput | SortOrder
    BIRTHDATE?: SortOrderInput | SortOrder
    AGE?: SortOrderInput | SortOrder
    RELATION?: SortOrderInput | SortOrder
    EE_ID?: SortOrderInput | SortOrder
    CARD_NO?: SortOrderInput | SortOrder
    COMPANY?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clients?: clientsOrderByWithRelationInput
    _relevance?: intellicareMasterlistOrderByRelevanceInput
  }

  export type intellicareMasterlistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: intellicareMasterlistWhereInput | intellicareMasterlistWhereInput[]
    OR?: intellicareMasterlistWhereInput[]
    NOT?: intellicareMasterlistWhereInput | intellicareMasterlistWhereInput[]
    clientId?: IntFilter<"intellicareMasterlist"> | number
    PY?: StringNullableFilter<"intellicareMasterlist"> | string | null
    ACCOUNT_NO?: StringNullableFilter<"intellicareMasterlist"> | string | null
    STATUS?: StringNullableFilter<"intellicareMasterlist"> | string | null
    MEMBER_TYPE?: StringNullableFilter<"intellicareMasterlist"> | string | null
    RNB?: StringNullableFilter<"intellicareMasterlist"> | string | null
    PREEXIST?: FloatNullableFilter<"intellicareMasterlist"> | number | null
    LIMIT?: FloatNullableFilter<"intellicareMasterlist"> | number | null
    BIRTHDATE?: DateTimeNullableFilter<"intellicareMasterlist"> | Date | string | null
    AGE?: IntNullableFilter<"intellicareMasterlist"> | number | null
    RELATION?: StringNullableFilter<"intellicareMasterlist"> | string | null
    EE_ID?: StringNullableFilter<"intellicareMasterlist"> | string | null
    CARD_NO?: StringNullableFilter<"intellicareMasterlist"> | string | null
    COMPANY?: StringNullableFilter<"intellicareMasterlist"> | string | null
    createdAt?: DateTimeFilter<"intellicareMasterlist"> | Date | string
    updatedAt?: DateTimeFilter<"intellicareMasterlist"> | Date | string
    clients?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
  }, "id">

  export type intellicareMasterlistOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrderInput | SortOrder
    ACCOUNT_NO?: SortOrderInput | SortOrder
    STATUS?: SortOrderInput | SortOrder
    MEMBER_TYPE?: SortOrderInput | SortOrder
    RNB?: SortOrderInput | SortOrder
    PREEXIST?: SortOrderInput | SortOrder
    LIMIT?: SortOrderInput | SortOrder
    BIRTHDATE?: SortOrderInput | SortOrder
    AGE?: SortOrderInput | SortOrder
    RELATION?: SortOrderInput | SortOrder
    EE_ID?: SortOrderInput | SortOrder
    CARD_NO?: SortOrderInput | SortOrder
    COMPANY?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: intellicareMasterlistCountOrderByAggregateInput
    _avg?: intellicareMasterlistAvgOrderByAggregateInput
    _max?: intellicareMasterlistMaxOrderByAggregateInput
    _min?: intellicareMasterlistMinOrderByAggregateInput
    _sum?: intellicareMasterlistSumOrderByAggregateInput
  }

  export type intellicareMasterlistScalarWhereWithAggregatesInput = {
    AND?: intellicareMasterlistScalarWhereWithAggregatesInput | intellicareMasterlistScalarWhereWithAggregatesInput[]
    OR?: intellicareMasterlistScalarWhereWithAggregatesInput[]
    NOT?: intellicareMasterlistScalarWhereWithAggregatesInput | intellicareMasterlistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"intellicareMasterlist"> | number
    clientId?: IntWithAggregatesFilter<"intellicareMasterlist"> | number
    PY?: StringNullableWithAggregatesFilter<"intellicareMasterlist"> | string | null
    ACCOUNT_NO?: StringNullableWithAggregatesFilter<"intellicareMasterlist"> | string | null
    STATUS?: StringNullableWithAggregatesFilter<"intellicareMasterlist"> | string | null
    MEMBER_TYPE?: StringNullableWithAggregatesFilter<"intellicareMasterlist"> | string | null
    RNB?: StringNullableWithAggregatesFilter<"intellicareMasterlist"> | string | null
    PREEXIST?: FloatNullableWithAggregatesFilter<"intellicareMasterlist"> | number | null
    LIMIT?: FloatNullableWithAggregatesFilter<"intellicareMasterlist"> | number | null
    BIRTHDATE?: DateTimeNullableWithAggregatesFilter<"intellicareMasterlist"> | Date | string | null
    AGE?: IntNullableWithAggregatesFilter<"intellicareMasterlist"> | number | null
    RELATION?: StringNullableWithAggregatesFilter<"intellicareMasterlist"> | string | null
    EE_ID?: StringNullableWithAggregatesFilter<"intellicareMasterlist"> | string | null
    CARD_NO?: StringNullableWithAggregatesFilter<"intellicareMasterlist"> | string | null
    COMPANY?: StringNullableWithAggregatesFilter<"intellicareMasterlist"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"intellicareMasterlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"intellicareMasterlist"> | Date | string
  }

  export type maxicareMasterlistWhereInput = {
    AND?: maxicareMasterlistWhereInput | maxicareMasterlistWhereInput[]
    OR?: maxicareMasterlistWhereInput[]
    NOT?: maxicareMasterlistWhereInput | maxicareMasterlistWhereInput[]
    id?: IntFilter<"maxicareMasterlist"> | number
    clientId?: IntFilter<"maxicareMasterlist"> | number
    PY?: StringNullableFilter<"maxicareMasterlist"> | string | null
    ACCOUNT_NO?: StringNullableFilter<"maxicareMasterlist"> | string | null
    STATUS?: StringNullableFilter<"maxicareMasterlist"> | string | null
    MEMBER_TYPE?: StringNullableFilter<"maxicareMasterlist"> | string | null
    LIMIT?: FloatNullableFilter<"maxicareMasterlist"> | number | null
    RELATION?: StringNullableFilter<"maxicareMasterlist"> | string | null
    EE_ID?: StringNullableFilter<"maxicareMasterlist"> | string | null
    CARD_NO?: StringNullableFilter<"maxicareMasterlist"> | string | null
    COMPANY?: StringNullableFilter<"maxicareMasterlist"> | string | null
    createdAt?: DateTimeFilter<"maxicareMasterlist"> | Date | string
    updatedAt?: DateTimeFilter<"maxicareMasterlist"> | Date | string
    clients?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
  }

  export type maxicareMasterlistOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrderInput | SortOrder
    ACCOUNT_NO?: SortOrderInput | SortOrder
    STATUS?: SortOrderInput | SortOrder
    MEMBER_TYPE?: SortOrderInput | SortOrder
    LIMIT?: SortOrderInput | SortOrder
    RELATION?: SortOrderInput | SortOrder
    EE_ID?: SortOrderInput | SortOrder
    CARD_NO?: SortOrderInput | SortOrder
    COMPANY?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clients?: clientsOrderByWithRelationInput
    _relevance?: maxicareMasterlistOrderByRelevanceInput
  }

  export type maxicareMasterlistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: maxicareMasterlistWhereInput | maxicareMasterlistWhereInput[]
    OR?: maxicareMasterlistWhereInput[]
    NOT?: maxicareMasterlistWhereInput | maxicareMasterlistWhereInput[]
    clientId?: IntFilter<"maxicareMasterlist"> | number
    PY?: StringNullableFilter<"maxicareMasterlist"> | string | null
    ACCOUNT_NO?: StringNullableFilter<"maxicareMasterlist"> | string | null
    STATUS?: StringNullableFilter<"maxicareMasterlist"> | string | null
    MEMBER_TYPE?: StringNullableFilter<"maxicareMasterlist"> | string | null
    LIMIT?: FloatNullableFilter<"maxicareMasterlist"> | number | null
    RELATION?: StringNullableFilter<"maxicareMasterlist"> | string | null
    EE_ID?: StringNullableFilter<"maxicareMasterlist"> | string | null
    CARD_NO?: StringNullableFilter<"maxicareMasterlist"> | string | null
    COMPANY?: StringNullableFilter<"maxicareMasterlist"> | string | null
    createdAt?: DateTimeFilter<"maxicareMasterlist"> | Date | string
    updatedAt?: DateTimeFilter<"maxicareMasterlist"> | Date | string
    clients?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
  }, "id">

  export type maxicareMasterlistOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrderInput | SortOrder
    ACCOUNT_NO?: SortOrderInput | SortOrder
    STATUS?: SortOrderInput | SortOrder
    MEMBER_TYPE?: SortOrderInput | SortOrder
    LIMIT?: SortOrderInput | SortOrder
    RELATION?: SortOrderInput | SortOrder
    EE_ID?: SortOrderInput | SortOrder
    CARD_NO?: SortOrderInput | SortOrder
    COMPANY?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: maxicareMasterlistCountOrderByAggregateInput
    _avg?: maxicareMasterlistAvgOrderByAggregateInput
    _max?: maxicareMasterlistMaxOrderByAggregateInput
    _min?: maxicareMasterlistMinOrderByAggregateInput
    _sum?: maxicareMasterlistSumOrderByAggregateInput
  }

  export type maxicareMasterlistScalarWhereWithAggregatesInput = {
    AND?: maxicareMasterlistScalarWhereWithAggregatesInput | maxicareMasterlistScalarWhereWithAggregatesInput[]
    OR?: maxicareMasterlistScalarWhereWithAggregatesInput[]
    NOT?: maxicareMasterlistScalarWhereWithAggregatesInput | maxicareMasterlistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"maxicareMasterlist"> | number
    clientId?: IntWithAggregatesFilter<"maxicareMasterlist"> | number
    PY?: StringNullableWithAggregatesFilter<"maxicareMasterlist"> | string | null
    ACCOUNT_NO?: StringNullableWithAggregatesFilter<"maxicareMasterlist"> | string | null
    STATUS?: StringNullableWithAggregatesFilter<"maxicareMasterlist"> | string | null
    MEMBER_TYPE?: StringNullableWithAggregatesFilter<"maxicareMasterlist"> | string | null
    LIMIT?: FloatNullableWithAggregatesFilter<"maxicareMasterlist"> | number | null
    RELATION?: StringNullableWithAggregatesFilter<"maxicareMasterlist"> | string | null
    EE_ID?: StringNullableWithAggregatesFilter<"maxicareMasterlist"> | string | null
    CARD_NO?: StringNullableWithAggregatesFilter<"maxicareMasterlist"> | string | null
    COMPANY?: StringNullableWithAggregatesFilter<"maxicareMasterlist"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"maxicareMasterlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"maxicareMasterlist"> | Date | string
  }

  export type intellicareWhereInput = {
    AND?: intellicareWhereInput | intellicareWhereInput[]
    OR?: intellicareWhereInput[]
    NOT?: intellicareWhereInput | intellicareWhereInput[]
    id?: IntFilter<"intellicare"> | number
    clientId?: IntFilter<"intellicare"> | number
    PY?: StringFilter<"intellicare"> | string
    Company?: StringNullableFilter<"intellicare"> | string | null
    Member_Account?: StringNullableFilter<"intellicare"> | string | null
    Member_Type?: StringNullableFilter<"intellicare"> | string | null
    ICD_10_Code?: StringNullableFilter<"intellicare"> | string | null
    Diagnosis?: StringNullableFilter<"intellicare"> | string | null
    Claim_Type?: StringNullableFilter<"intellicare"> | string | null
    Admission_Date?: DateTimeNullableFilter<"intellicare"> | Date | string | null
    Provider_Name?: StringNullableFilter<"intellicare"> | string | null
    Provider_Type?: StringNullableFilter<"intellicare"> | string | null
    Approved_Claim_Amount?: FloatNullableFilter<"intellicare"> | number | null
    Class_Plan_Level?: StringNullableFilter<"intellicare"> | string | null
    Maximum_Benefit_Limit?: FloatNullableFilter<"intellicare"> | number | null
    Date_of_Birth?: DateTimeNullableFilter<"intellicare"> | Date | string | null
    Relationship?: StringNullableFilter<"intellicare"> | string | null
    createdAt?: DateTimeFilter<"intellicare"> | Date | string
    updatedAt?: DateTimeFilter<"intellicare"> | Date | string
    clients?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
  }

  export type intellicareOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrder
    Company?: SortOrderInput | SortOrder
    Member_Account?: SortOrderInput | SortOrder
    Member_Type?: SortOrderInput | SortOrder
    ICD_10_Code?: SortOrderInput | SortOrder
    Diagnosis?: SortOrderInput | SortOrder
    Claim_Type?: SortOrderInput | SortOrder
    Admission_Date?: SortOrderInput | SortOrder
    Provider_Name?: SortOrderInput | SortOrder
    Provider_Type?: SortOrderInput | SortOrder
    Approved_Claim_Amount?: SortOrderInput | SortOrder
    Class_Plan_Level?: SortOrderInput | SortOrder
    Maximum_Benefit_Limit?: SortOrderInput | SortOrder
    Date_of_Birth?: SortOrderInput | SortOrder
    Relationship?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clients?: clientsOrderByWithRelationInput
    _relevance?: intellicareOrderByRelevanceInput
  }

  export type intellicareWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: intellicareWhereInput | intellicareWhereInput[]
    OR?: intellicareWhereInput[]
    NOT?: intellicareWhereInput | intellicareWhereInput[]
    clientId?: IntFilter<"intellicare"> | number
    PY?: StringFilter<"intellicare"> | string
    Company?: StringNullableFilter<"intellicare"> | string | null
    Member_Account?: StringNullableFilter<"intellicare"> | string | null
    Member_Type?: StringNullableFilter<"intellicare"> | string | null
    ICD_10_Code?: StringNullableFilter<"intellicare"> | string | null
    Diagnosis?: StringNullableFilter<"intellicare"> | string | null
    Claim_Type?: StringNullableFilter<"intellicare"> | string | null
    Admission_Date?: DateTimeNullableFilter<"intellicare"> | Date | string | null
    Provider_Name?: StringNullableFilter<"intellicare"> | string | null
    Provider_Type?: StringNullableFilter<"intellicare"> | string | null
    Approved_Claim_Amount?: FloatNullableFilter<"intellicare"> | number | null
    Class_Plan_Level?: StringNullableFilter<"intellicare"> | string | null
    Maximum_Benefit_Limit?: FloatNullableFilter<"intellicare"> | number | null
    Date_of_Birth?: DateTimeNullableFilter<"intellicare"> | Date | string | null
    Relationship?: StringNullableFilter<"intellicare"> | string | null
    createdAt?: DateTimeFilter<"intellicare"> | Date | string
    updatedAt?: DateTimeFilter<"intellicare"> | Date | string
    clients?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
  }, "id">

  export type intellicareOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrder
    Company?: SortOrderInput | SortOrder
    Member_Account?: SortOrderInput | SortOrder
    Member_Type?: SortOrderInput | SortOrder
    ICD_10_Code?: SortOrderInput | SortOrder
    Diagnosis?: SortOrderInput | SortOrder
    Claim_Type?: SortOrderInput | SortOrder
    Admission_Date?: SortOrderInput | SortOrder
    Provider_Name?: SortOrderInput | SortOrder
    Provider_Type?: SortOrderInput | SortOrder
    Approved_Claim_Amount?: SortOrderInput | SortOrder
    Class_Plan_Level?: SortOrderInput | SortOrder
    Maximum_Benefit_Limit?: SortOrderInput | SortOrder
    Date_of_Birth?: SortOrderInput | SortOrder
    Relationship?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: intellicareCountOrderByAggregateInput
    _avg?: intellicareAvgOrderByAggregateInput
    _max?: intellicareMaxOrderByAggregateInput
    _min?: intellicareMinOrderByAggregateInput
    _sum?: intellicareSumOrderByAggregateInput
  }

  export type intellicareScalarWhereWithAggregatesInput = {
    AND?: intellicareScalarWhereWithAggregatesInput | intellicareScalarWhereWithAggregatesInput[]
    OR?: intellicareScalarWhereWithAggregatesInput[]
    NOT?: intellicareScalarWhereWithAggregatesInput | intellicareScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"intellicare"> | number
    clientId?: IntWithAggregatesFilter<"intellicare"> | number
    PY?: StringWithAggregatesFilter<"intellicare"> | string
    Company?: StringNullableWithAggregatesFilter<"intellicare"> | string | null
    Member_Account?: StringNullableWithAggregatesFilter<"intellicare"> | string | null
    Member_Type?: StringNullableWithAggregatesFilter<"intellicare"> | string | null
    ICD_10_Code?: StringNullableWithAggregatesFilter<"intellicare"> | string | null
    Diagnosis?: StringNullableWithAggregatesFilter<"intellicare"> | string | null
    Claim_Type?: StringNullableWithAggregatesFilter<"intellicare"> | string | null
    Admission_Date?: DateTimeNullableWithAggregatesFilter<"intellicare"> | Date | string | null
    Provider_Name?: StringNullableWithAggregatesFilter<"intellicare"> | string | null
    Provider_Type?: StringNullableWithAggregatesFilter<"intellicare"> | string | null
    Approved_Claim_Amount?: FloatNullableWithAggregatesFilter<"intellicare"> | number | null
    Class_Plan_Level?: StringNullableWithAggregatesFilter<"intellicare"> | string | null
    Maximum_Benefit_Limit?: FloatNullableWithAggregatesFilter<"intellicare"> | number | null
    Date_of_Birth?: DateTimeNullableWithAggregatesFilter<"intellicare"> | Date | string | null
    Relationship?: StringNullableWithAggregatesFilter<"intellicare"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"intellicare"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"intellicare"> | Date | string
  }

  export type maxicareWhereInput = {
    AND?: maxicareWhereInput | maxicareWhereInput[]
    OR?: maxicareWhereInput[]
    NOT?: maxicareWhereInput | maxicareWhereInput[]
    id?: IntFilter<"maxicare"> | number
    clientId?: IntFilter<"maxicare"> | number
    PY?: StringFilter<"maxicare"> | string
    Company?: StringNullableFilter<"maxicare"> | string | null
    Member_Account?: StringNullableFilter<"maxicare"> | string | null
    Member_Type?: StringNullableFilter<"maxicare"> | string | null
    ICD_10_Code?: StringNullableFilter<"maxicare"> | string | null
    Diagnosis?: StringNullableFilter<"maxicare"> | string | null
    Claim_Type?: StringNullableFilter<"maxicare"> | string | null
    Admission_Date?: DateTimeNullableFilter<"maxicare"> | Date | string | null
    Provider_Name?: StringNullableFilter<"maxicare"> | string | null
    Provider_Type?: StringNullableFilter<"maxicare"> | string | null
    Approved_Claim_Amount?: FloatNullableFilter<"maxicare"> | number | null
    Relationship?: StringNullableFilter<"maxicare"> | string | null
    createdAt?: DateTimeFilter<"maxicare"> | Date | string
    updatedAt?: DateTimeFilter<"maxicare"> | Date | string
    clients?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
  }

  export type maxicareOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrder
    Company?: SortOrderInput | SortOrder
    Member_Account?: SortOrderInput | SortOrder
    Member_Type?: SortOrderInput | SortOrder
    ICD_10_Code?: SortOrderInput | SortOrder
    Diagnosis?: SortOrderInput | SortOrder
    Claim_Type?: SortOrderInput | SortOrder
    Admission_Date?: SortOrderInput | SortOrder
    Provider_Name?: SortOrderInput | SortOrder
    Provider_Type?: SortOrderInput | SortOrder
    Approved_Claim_Amount?: SortOrderInput | SortOrder
    Relationship?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clients?: clientsOrderByWithRelationInput
    _relevance?: maxicareOrderByRelevanceInput
  }

  export type maxicareWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: maxicareWhereInput | maxicareWhereInput[]
    OR?: maxicareWhereInput[]
    NOT?: maxicareWhereInput | maxicareWhereInput[]
    clientId?: IntFilter<"maxicare"> | number
    PY?: StringFilter<"maxicare"> | string
    Company?: StringNullableFilter<"maxicare"> | string | null
    Member_Account?: StringNullableFilter<"maxicare"> | string | null
    Member_Type?: StringNullableFilter<"maxicare"> | string | null
    ICD_10_Code?: StringNullableFilter<"maxicare"> | string | null
    Diagnosis?: StringNullableFilter<"maxicare"> | string | null
    Claim_Type?: StringNullableFilter<"maxicare"> | string | null
    Admission_Date?: DateTimeNullableFilter<"maxicare"> | Date | string | null
    Provider_Name?: StringNullableFilter<"maxicare"> | string | null
    Provider_Type?: StringNullableFilter<"maxicare"> | string | null
    Approved_Claim_Amount?: FloatNullableFilter<"maxicare"> | number | null
    Relationship?: StringNullableFilter<"maxicare"> | string | null
    createdAt?: DateTimeFilter<"maxicare"> | Date | string
    updatedAt?: DateTimeFilter<"maxicare"> | Date | string
    clients?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
  }, "id">

  export type maxicareOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrder
    Company?: SortOrderInput | SortOrder
    Member_Account?: SortOrderInput | SortOrder
    Member_Type?: SortOrderInput | SortOrder
    ICD_10_Code?: SortOrderInput | SortOrder
    Diagnosis?: SortOrderInput | SortOrder
    Claim_Type?: SortOrderInput | SortOrder
    Admission_Date?: SortOrderInput | SortOrder
    Provider_Name?: SortOrderInput | SortOrder
    Provider_Type?: SortOrderInput | SortOrder
    Approved_Claim_Amount?: SortOrderInput | SortOrder
    Relationship?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: maxicareCountOrderByAggregateInput
    _avg?: maxicareAvgOrderByAggregateInput
    _max?: maxicareMaxOrderByAggregateInput
    _min?: maxicareMinOrderByAggregateInput
    _sum?: maxicareSumOrderByAggregateInput
  }

  export type maxicareScalarWhereWithAggregatesInput = {
    AND?: maxicareScalarWhereWithAggregatesInput | maxicareScalarWhereWithAggregatesInput[]
    OR?: maxicareScalarWhereWithAggregatesInput[]
    NOT?: maxicareScalarWhereWithAggregatesInput | maxicareScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"maxicare"> | number
    clientId?: IntWithAggregatesFilter<"maxicare"> | number
    PY?: StringWithAggregatesFilter<"maxicare"> | string
    Company?: StringNullableWithAggregatesFilter<"maxicare"> | string | null
    Member_Account?: StringNullableWithAggregatesFilter<"maxicare"> | string | null
    Member_Type?: StringNullableWithAggregatesFilter<"maxicare"> | string | null
    ICD_10_Code?: StringNullableWithAggregatesFilter<"maxicare"> | string | null
    Diagnosis?: StringNullableWithAggregatesFilter<"maxicare"> | string | null
    Claim_Type?: StringNullableWithAggregatesFilter<"maxicare"> | string | null
    Admission_Date?: DateTimeNullableWithAggregatesFilter<"maxicare"> | Date | string | null
    Provider_Name?: StringNullableWithAggregatesFilter<"maxicare"> | string | null
    Provider_Type?: StringNullableWithAggregatesFilter<"maxicare"> | string | null
    Approved_Claim_Amount?: FloatNullableWithAggregatesFilter<"maxicare"> | number | null
    Relationship?: StringNullableWithAggregatesFilter<"maxicare"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"maxicare"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"maxicare"> | Date | string
  }

  export type customIllnessesWhereInput = {
    AND?: customIllnessesWhereInput | customIllnessesWhereInput[]
    OR?: customIllnessesWhereInput[]
    NOT?: customIllnessesWhereInput | customIllnessesWhereInput[]
    id?: IntFilter<"customIllnesses"> | number
    clientId?: IntFilter<"customIllnesses"> | number
    py?: StringNullableFilter<"customIllnesses"> | string | null
    member_type?: StringNullableFilter<"customIllnesses"> | string | null
    icd_10_code?: StringNullableFilter<"customIllnesses"> | string | null
    diagnosis?: StringNullableFilter<"customIllnesses"> | string | null
    claim_amount?: IntNullableFilter<"customIllnesses"> | number | null
    percentage_to_total_amount?: DecimalNullableFilter<"customIllnesses"> | Decimal | DecimalJsLike | number | string | null
    claim_count?: IntNullableFilter<"customIllnesses"> | number | null
    percentage_to_total_count?: DecimalNullableFilter<"customIllnesses"> | Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: IntNullableFilter<"customIllnesses"> | number | null
    createdAt?: DateTimeFilter<"customIllnesses"> | Date | string
    updatedAt?: DateTimeFilter<"customIllnesses"> | Date | string
    clients?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
  }

  export type customIllnessesOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    py?: SortOrderInput | SortOrder
    member_type?: SortOrderInput | SortOrder
    icd_10_code?: SortOrderInput | SortOrder
    diagnosis?: SortOrderInput | SortOrder
    claim_amount?: SortOrderInput | SortOrder
    percentage_to_total_amount?: SortOrderInput | SortOrder
    claim_count?: SortOrderInput | SortOrder
    percentage_to_total_count?: SortOrderInput | SortOrder
    average_cost_per_claim?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clients?: clientsOrderByWithRelationInput
    _relevance?: customIllnessesOrderByRelevanceInput
  }

  export type customIllnessesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: customIllnessesWhereInput | customIllnessesWhereInput[]
    OR?: customIllnessesWhereInput[]
    NOT?: customIllnessesWhereInput | customIllnessesWhereInput[]
    clientId?: IntFilter<"customIllnesses"> | number
    py?: StringNullableFilter<"customIllnesses"> | string | null
    member_type?: StringNullableFilter<"customIllnesses"> | string | null
    icd_10_code?: StringNullableFilter<"customIllnesses"> | string | null
    diagnosis?: StringNullableFilter<"customIllnesses"> | string | null
    claim_amount?: IntNullableFilter<"customIllnesses"> | number | null
    percentage_to_total_amount?: DecimalNullableFilter<"customIllnesses"> | Decimal | DecimalJsLike | number | string | null
    claim_count?: IntNullableFilter<"customIllnesses"> | number | null
    percentage_to_total_count?: DecimalNullableFilter<"customIllnesses"> | Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: IntNullableFilter<"customIllnesses"> | number | null
    createdAt?: DateTimeFilter<"customIllnesses"> | Date | string
    updatedAt?: DateTimeFilter<"customIllnesses"> | Date | string
    clients?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
  }, "id">

  export type customIllnessesOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    py?: SortOrderInput | SortOrder
    member_type?: SortOrderInput | SortOrder
    icd_10_code?: SortOrderInput | SortOrder
    diagnosis?: SortOrderInput | SortOrder
    claim_amount?: SortOrderInput | SortOrder
    percentage_to_total_amount?: SortOrderInput | SortOrder
    claim_count?: SortOrderInput | SortOrder
    percentage_to_total_count?: SortOrderInput | SortOrder
    average_cost_per_claim?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: customIllnessesCountOrderByAggregateInput
    _avg?: customIllnessesAvgOrderByAggregateInput
    _max?: customIllnessesMaxOrderByAggregateInput
    _min?: customIllnessesMinOrderByAggregateInput
    _sum?: customIllnessesSumOrderByAggregateInput
  }

  export type customIllnessesScalarWhereWithAggregatesInput = {
    AND?: customIllnessesScalarWhereWithAggregatesInput | customIllnessesScalarWhereWithAggregatesInput[]
    OR?: customIllnessesScalarWhereWithAggregatesInput[]
    NOT?: customIllnessesScalarWhereWithAggregatesInput | customIllnessesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"customIllnesses"> | number
    clientId?: IntWithAggregatesFilter<"customIllnesses"> | number
    py?: StringNullableWithAggregatesFilter<"customIllnesses"> | string | null
    member_type?: StringNullableWithAggregatesFilter<"customIllnesses"> | string | null
    icd_10_code?: StringNullableWithAggregatesFilter<"customIllnesses"> | string | null
    diagnosis?: StringNullableWithAggregatesFilter<"customIllnesses"> | string | null
    claim_amount?: IntNullableWithAggregatesFilter<"customIllnesses"> | number | null
    percentage_to_total_amount?: DecimalNullableWithAggregatesFilter<"customIllnesses"> | Decimal | DecimalJsLike | number | string | null
    claim_count?: IntNullableWithAggregatesFilter<"customIllnesses"> | number | null
    percentage_to_total_count?: DecimalNullableWithAggregatesFilter<"customIllnesses"> | Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: IntNullableWithAggregatesFilter<"customIllnesses"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"customIllnesses"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"customIllnesses"> | Date | string
  }

  export type userCreateInput = {
    name: string
    email: string
    password: string
    admin?: boolean
    canUpload?: boolean
    canCreate?: boolean
    canViewDeck?: boolean
    canUploadDeck?: boolean
    canAdd?: boolean
    canRemove?: boolean
    canEdit?: boolean
    superAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    admin?: boolean
    canUpload?: boolean
    canCreate?: boolean
    canViewDeck?: boolean
    canUploadDeck?: boolean
    canAdd?: boolean
    canRemove?: boolean
    canEdit?: boolean
    superAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    canUpload?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canViewDeck?: BoolFieldUpdateOperationsInput | boolean
    canUploadDeck?: BoolFieldUpdateOperationsInput | boolean
    canAdd?: BoolFieldUpdateOperationsInput | boolean
    canRemove?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    superAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    canUpload?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canViewDeck?: BoolFieldUpdateOperationsInput | boolean
    canUploadDeck?: BoolFieldUpdateOperationsInput | boolean
    canAdd?: BoolFieldUpdateOperationsInput | boolean
    canRemove?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    superAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    admin?: boolean
    canUpload?: boolean
    canCreate?: boolean
    canViewDeck?: boolean
    canUploadDeck?: boolean
    canAdd?: boolean
    canRemove?: boolean
    canEdit?: boolean
    superAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    canUpload?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canViewDeck?: BoolFieldUpdateOperationsInput | boolean
    canUploadDeck?: BoolFieldUpdateOperationsInput | boolean
    canAdd?: BoolFieldUpdateOperationsInput | boolean
    canRemove?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    superAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    admin?: BoolFieldUpdateOperationsInput | boolean
    canUpload?: BoolFieldUpdateOperationsInput | boolean
    canCreate?: BoolFieldUpdateOperationsInput | boolean
    canViewDeck?: BoolFieldUpdateOperationsInput | boolean
    canUploadDeck?: BoolFieldUpdateOperationsInput | boolean
    canAdd?: BoolFieldUpdateOperationsInput | boolean
    canRemove?: BoolFieldUpdateOperationsInput | boolean
    canEdit?: BoolFieldUpdateOperationsInput | boolean
    superAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type insurersCreateInput = {
    name: string
    clients?: clientsCreateNestedManyWithoutInsurerInput
    uploads?: uploadsCreateNestedManyWithoutInsurersInput
  }

  export type insurersUncheckedCreateInput = {
    id?: number
    name: string
    clients?: clientsUncheckedCreateNestedManyWithoutInsurerInput
    uploads?: uploadsUncheckedCreateNestedManyWithoutInsurersInput
  }

  export type insurersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    clients?: clientsUpdateManyWithoutInsurerNestedInput
    uploads?: uploadsUpdateManyWithoutInsurersNestedInput
  }

  export type insurersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    clients?: clientsUncheckedUpdateManyWithoutInsurerNestedInput
    uploads?: uploadsUncheckedUpdateManyWithoutInsurersNestedInput
  }

  export type insurersCreateManyInput = {
    id?: number
    name: string
  }

  export type insurersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type insurersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type clientsCreateInput = {
    client_name: string
    description?: string | null
    insurer?: insurersCreateNestedOneWithoutClientsInput
    uploads?: uploadsCreateNestedManyWithoutClientsInput
    decks?: decksCreateNestedManyWithoutClientsInput
    intellicareMasterlist?: intellicareMasterlistCreateNestedManyWithoutClientsInput
    maxicareMasterlist?: maxicareMasterlistCreateNestedManyWithoutClientsInput
    intellicare?: intellicareCreateNestedManyWithoutClientsInput
    maxicare?: maxicareCreateNestedManyWithoutClientsInput
    customIllnesses?: customIllnessesCreateNestedManyWithoutClientsInput
  }

  export type clientsUncheckedCreateInput = {
    id?: number
    client_name: string
    description?: string | null
    insurer_id?: number | null
    uploads?: uploadsUncheckedCreateNestedManyWithoutClientsInput
    decks?: decksUncheckedCreateNestedManyWithoutClientsInput
    intellicareMasterlist?: intellicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    maxicareMasterlist?: maxicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    intellicare?: intellicareUncheckedCreateNestedManyWithoutClientsInput
    maxicare?: maxicareUncheckedCreateNestedManyWithoutClientsInput
    customIllnesses?: customIllnessesUncheckedCreateNestedManyWithoutClientsInput
  }

  export type clientsUpdateInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer?: insurersUpdateOneWithoutClientsNestedInput
    uploads?: uploadsUpdateManyWithoutClientsNestedInput
    decks?: decksUpdateManyWithoutClientsNestedInput
    intellicareMasterlist?: intellicareMasterlistUpdateManyWithoutClientsNestedInput
    maxicareMasterlist?: maxicareMasterlistUpdateManyWithoutClientsNestedInput
    intellicare?: intellicareUpdateManyWithoutClientsNestedInput
    maxicare?: maxicareUpdateManyWithoutClientsNestedInput
    customIllnesses?: customIllnessesUpdateManyWithoutClientsNestedInput
  }

  export type clientsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer_id?: NullableIntFieldUpdateOperationsInput | number | null
    uploads?: uploadsUncheckedUpdateManyWithoutClientsNestedInput
    decks?: decksUncheckedUpdateManyWithoutClientsNestedInput
    intellicareMasterlist?: intellicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    maxicareMasterlist?: maxicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    intellicare?: intellicareUncheckedUpdateManyWithoutClientsNestedInput
    maxicare?: maxicareUncheckedUpdateManyWithoutClientsNestedInput
    customIllnesses?: customIllnessesUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type clientsCreateManyInput = {
    id?: number
    client_name: string
    description?: string | null
    insurer_id?: number | null
  }

  export type clientsUpdateManyMutationInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clientsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type uploadsCreateInput = {
    year: string
    months?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clients: clientsCreateNestedOneWithoutUploadsInput
    insurers: insurersCreateNestedOneWithoutUploadsInput
  }

  export type uploadsUncheckedCreateInput = {
    id?: number
    clientId: number
    insurerId: number
    year: string
    months?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type uploadsUpdateInput = {
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: clientsUpdateOneRequiredWithoutUploadsNestedInput
    insurers?: insurersUpdateOneRequiredWithoutUploadsNestedInput
  }

  export type uploadsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    insurerId?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type uploadsCreateManyInput = {
    id?: number
    clientId: number
    insurerId: number
    year: string
    months?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type uploadsUpdateManyMutationInput = {
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type uploadsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    insurerId?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type decksCreateInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clients: clientsCreateNestedOneWithoutDecksInput
  }

  export type decksUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type decksUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: clientsUpdateOneRequiredWithoutDecksNestedInput
  }

  export type decksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type decksCreateManyInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type decksUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type decksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type intellicareMasterlistCreateInput = {
    PY?: string | null
    ACCOUNT_NO?: string | null
    STATUS?: string | null
    MEMBER_TYPE?: string | null
    RNB?: string | null
    PREEXIST?: number | null
    LIMIT?: number | null
    BIRTHDATE?: Date | string | null
    AGE?: number | null
    RELATION?: string | null
    EE_ID?: string | null
    CARD_NO?: string | null
    COMPANY?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clients: clientsCreateNestedOneWithoutIntellicareMasterlistInput
  }

  export type intellicareMasterlistUncheckedCreateInput = {
    id?: number
    clientId: number
    PY?: string | null
    ACCOUNT_NO?: string | null
    STATUS?: string | null
    MEMBER_TYPE?: string | null
    RNB?: string | null
    PREEXIST?: number | null
    LIMIT?: number | null
    BIRTHDATE?: Date | string | null
    AGE?: number | null
    RELATION?: string | null
    EE_ID?: string | null
    CARD_NO?: string | null
    COMPANY?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type intellicareMasterlistUpdateInput = {
    PY?: NullableStringFieldUpdateOperationsInput | string | null
    ACCOUNT_NO?: NullableStringFieldUpdateOperationsInput | string | null
    STATUS?: NullableStringFieldUpdateOperationsInput | string | null
    MEMBER_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    RNB?: NullableStringFieldUpdateOperationsInput | string | null
    PREEXIST?: NullableFloatFieldUpdateOperationsInput | number | null
    LIMIT?: NullableFloatFieldUpdateOperationsInput | number | null
    BIRTHDATE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AGE?: NullableIntFieldUpdateOperationsInput | number | null
    RELATION?: NullableStringFieldUpdateOperationsInput | string | null
    EE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    CARD_NO?: NullableStringFieldUpdateOperationsInput | string | null
    COMPANY?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: clientsUpdateOneRequiredWithoutIntellicareMasterlistNestedInput
  }

  export type intellicareMasterlistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    PY?: NullableStringFieldUpdateOperationsInput | string | null
    ACCOUNT_NO?: NullableStringFieldUpdateOperationsInput | string | null
    STATUS?: NullableStringFieldUpdateOperationsInput | string | null
    MEMBER_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    RNB?: NullableStringFieldUpdateOperationsInput | string | null
    PREEXIST?: NullableFloatFieldUpdateOperationsInput | number | null
    LIMIT?: NullableFloatFieldUpdateOperationsInput | number | null
    BIRTHDATE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AGE?: NullableIntFieldUpdateOperationsInput | number | null
    RELATION?: NullableStringFieldUpdateOperationsInput | string | null
    EE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    CARD_NO?: NullableStringFieldUpdateOperationsInput | string | null
    COMPANY?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type intellicareMasterlistCreateManyInput = {
    id?: number
    clientId: number
    PY?: string | null
    ACCOUNT_NO?: string | null
    STATUS?: string | null
    MEMBER_TYPE?: string | null
    RNB?: string | null
    PREEXIST?: number | null
    LIMIT?: number | null
    BIRTHDATE?: Date | string | null
    AGE?: number | null
    RELATION?: string | null
    EE_ID?: string | null
    CARD_NO?: string | null
    COMPANY?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type intellicareMasterlistUpdateManyMutationInput = {
    PY?: NullableStringFieldUpdateOperationsInput | string | null
    ACCOUNT_NO?: NullableStringFieldUpdateOperationsInput | string | null
    STATUS?: NullableStringFieldUpdateOperationsInput | string | null
    MEMBER_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    RNB?: NullableStringFieldUpdateOperationsInput | string | null
    PREEXIST?: NullableFloatFieldUpdateOperationsInput | number | null
    LIMIT?: NullableFloatFieldUpdateOperationsInput | number | null
    BIRTHDATE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AGE?: NullableIntFieldUpdateOperationsInput | number | null
    RELATION?: NullableStringFieldUpdateOperationsInput | string | null
    EE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    CARD_NO?: NullableStringFieldUpdateOperationsInput | string | null
    COMPANY?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type intellicareMasterlistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    PY?: NullableStringFieldUpdateOperationsInput | string | null
    ACCOUNT_NO?: NullableStringFieldUpdateOperationsInput | string | null
    STATUS?: NullableStringFieldUpdateOperationsInput | string | null
    MEMBER_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    RNB?: NullableStringFieldUpdateOperationsInput | string | null
    PREEXIST?: NullableFloatFieldUpdateOperationsInput | number | null
    LIMIT?: NullableFloatFieldUpdateOperationsInput | number | null
    BIRTHDATE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AGE?: NullableIntFieldUpdateOperationsInput | number | null
    RELATION?: NullableStringFieldUpdateOperationsInput | string | null
    EE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    CARD_NO?: NullableStringFieldUpdateOperationsInput | string | null
    COMPANY?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maxicareMasterlistCreateInput = {
    PY?: string | null
    ACCOUNT_NO?: string | null
    STATUS?: string | null
    MEMBER_TYPE?: string | null
    LIMIT?: number | null
    RELATION?: string | null
    EE_ID?: string | null
    CARD_NO?: string | null
    COMPANY?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clients: clientsCreateNestedOneWithoutMaxicareMasterlistInput
  }

  export type maxicareMasterlistUncheckedCreateInput = {
    id?: number
    clientId: number
    PY?: string | null
    ACCOUNT_NO?: string | null
    STATUS?: string | null
    MEMBER_TYPE?: string | null
    LIMIT?: number | null
    RELATION?: string | null
    EE_ID?: string | null
    CARD_NO?: string | null
    COMPANY?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type maxicareMasterlistUpdateInput = {
    PY?: NullableStringFieldUpdateOperationsInput | string | null
    ACCOUNT_NO?: NullableStringFieldUpdateOperationsInput | string | null
    STATUS?: NullableStringFieldUpdateOperationsInput | string | null
    MEMBER_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    LIMIT?: NullableFloatFieldUpdateOperationsInput | number | null
    RELATION?: NullableStringFieldUpdateOperationsInput | string | null
    EE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    CARD_NO?: NullableStringFieldUpdateOperationsInput | string | null
    COMPANY?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: clientsUpdateOneRequiredWithoutMaxicareMasterlistNestedInput
  }

  export type maxicareMasterlistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    PY?: NullableStringFieldUpdateOperationsInput | string | null
    ACCOUNT_NO?: NullableStringFieldUpdateOperationsInput | string | null
    STATUS?: NullableStringFieldUpdateOperationsInput | string | null
    MEMBER_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    LIMIT?: NullableFloatFieldUpdateOperationsInput | number | null
    RELATION?: NullableStringFieldUpdateOperationsInput | string | null
    EE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    CARD_NO?: NullableStringFieldUpdateOperationsInput | string | null
    COMPANY?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maxicareMasterlistCreateManyInput = {
    id?: number
    clientId: number
    PY?: string | null
    ACCOUNT_NO?: string | null
    STATUS?: string | null
    MEMBER_TYPE?: string | null
    LIMIT?: number | null
    RELATION?: string | null
    EE_ID?: string | null
    CARD_NO?: string | null
    COMPANY?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type maxicareMasterlistUpdateManyMutationInput = {
    PY?: NullableStringFieldUpdateOperationsInput | string | null
    ACCOUNT_NO?: NullableStringFieldUpdateOperationsInput | string | null
    STATUS?: NullableStringFieldUpdateOperationsInput | string | null
    MEMBER_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    LIMIT?: NullableFloatFieldUpdateOperationsInput | number | null
    RELATION?: NullableStringFieldUpdateOperationsInput | string | null
    EE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    CARD_NO?: NullableStringFieldUpdateOperationsInput | string | null
    COMPANY?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maxicareMasterlistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    PY?: NullableStringFieldUpdateOperationsInput | string | null
    ACCOUNT_NO?: NullableStringFieldUpdateOperationsInput | string | null
    STATUS?: NullableStringFieldUpdateOperationsInput | string | null
    MEMBER_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    LIMIT?: NullableFloatFieldUpdateOperationsInput | number | null
    RELATION?: NullableStringFieldUpdateOperationsInput | string | null
    EE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    CARD_NO?: NullableStringFieldUpdateOperationsInput | string | null
    COMPANY?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type intellicareCreateInput = {
    PY: string
    Company?: string | null
    Member_Account?: string | null
    Member_Type?: string | null
    ICD_10_Code?: string | null
    Diagnosis?: string | null
    Claim_Type?: string | null
    Admission_Date?: Date | string | null
    Provider_Name?: string | null
    Provider_Type?: string | null
    Approved_Claim_Amount?: number | null
    Class_Plan_Level?: string | null
    Maximum_Benefit_Limit?: number | null
    Date_of_Birth?: Date | string | null
    Relationship?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clients: clientsCreateNestedOneWithoutIntellicareInput
  }

  export type intellicareUncheckedCreateInput = {
    id?: number
    clientId: number
    PY: string
    Company?: string | null
    Member_Account?: string | null
    Member_Type?: string | null
    ICD_10_Code?: string | null
    Diagnosis?: string | null
    Claim_Type?: string | null
    Admission_Date?: Date | string | null
    Provider_Name?: string | null
    Provider_Type?: string | null
    Approved_Claim_Amount?: number | null
    Class_Plan_Level?: string | null
    Maximum_Benefit_Limit?: number | null
    Date_of_Birth?: Date | string | null
    Relationship?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type intellicareUpdateInput = {
    PY?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Account?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Type?: NullableStringFieldUpdateOperationsInput | string | null
    ICD_10_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    Claim_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Admission_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Provider_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Provider_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Approved_Claim_Amount?: NullableFloatFieldUpdateOperationsInput | number | null
    Class_Plan_Level?: NullableStringFieldUpdateOperationsInput | string | null
    Maximum_Benefit_Limit?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_of_Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: clientsUpdateOneRequiredWithoutIntellicareNestedInput
  }

  export type intellicareUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    PY?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Account?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Type?: NullableStringFieldUpdateOperationsInput | string | null
    ICD_10_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    Claim_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Admission_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Provider_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Provider_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Approved_Claim_Amount?: NullableFloatFieldUpdateOperationsInput | number | null
    Class_Plan_Level?: NullableStringFieldUpdateOperationsInput | string | null
    Maximum_Benefit_Limit?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_of_Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type intellicareCreateManyInput = {
    id?: number
    clientId: number
    PY: string
    Company?: string | null
    Member_Account?: string | null
    Member_Type?: string | null
    ICD_10_Code?: string | null
    Diagnosis?: string | null
    Claim_Type?: string | null
    Admission_Date?: Date | string | null
    Provider_Name?: string | null
    Provider_Type?: string | null
    Approved_Claim_Amount?: number | null
    Class_Plan_Level?: string | null
    Maximum_Benefit_Limit?: number | null
    Date_of_Birth?: Date | string | null
    Relationship?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type intellicareUpdateManyMutationInput = {
    PY?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Account?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Type?: NullableStringFieldUpdateOperationsInput | string | null
    ICD_10_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    Claim_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Admission_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Provider_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Provider_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Approved_Claim_Amount?: NullableFloatFieldUpdateOperationsInput | number | null
    Class_Plan_Level?: NullableStringFieldUpdateOperationsInput | string | null
    Maximum_Benefit_Limit?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_of_Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type intellicareUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    PY?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Account?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Type?: NullableStringFieldUpdateOperationsInput | string | null
    ICD_10_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    Claim_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Admission_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Provider_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Provider_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Approved_Claim_Amount?: NullableFloatFieldUpdateOperationsInput | number | null
    Class_Plan_Level?: NullableStringFieldUpdateOperationsInput | string | null
    Maximum_Benefit_Limit?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_of_Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maxicareCreateInput = {
    PY: string
    Company?: string | null
    Member_Account?: string | null
    Member_Type?: string | null
    ICD_10_Code?: string | null
    Diagnosis?: string | null
    Claim_Type?: string | null
    Admission_Date?: Date | string | null
    Provider_Name?: string | null
    Provider_Type?: string | null
    Approved_Claim_Amount?: number | null
    Relationship?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clients: clientsCreateNestedOneWithoutMaxicareInput
  }

  export type maxicareUncheckedCreateInput = {
    id?: number
    clientId: number
    PY: string
    Company?: string | null
    Member_Account?: string | null
    Member_Type?: string | null
    ICD_10_Code?: string | null
    Diagnosis?: string | null
    Claim_Type?: string | null
    Admission_Date?: Date | string | null
    Provider_Name?: string | null
    Provider_Type?: string | null
    Approved_Claim_Amount?: number | null
    Relationship?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type maxicareUpdateInput = {
    PY?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Account?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Type?: NullableStringFieldUpdateOperationsInput | string | null
    ICD_10_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    Claim_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Admission_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Provider_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Provider_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Approved_Claim_Amount?: NullableFloatFieldUpdateOperationsInput | number | null
    Relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: clientsUpdateOneRequiredWithoutMaxicareNestedInput
  }

  export type maxicareUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    PY?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Account?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Type?: NullableStringFieldUpdateOperationsInput | string | null
    ICD_10_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    Claim_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Admission_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Provider_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Provider_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Approved_Claim_Amount?: NullableFloatFieldUpdateOperationsInput | number | null
    Relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maxicareCreateManyInput = {
    id?: number
    clientId: number
    PY: string
    Company?: string | null
    Member_Account?: string | null
    Member_Type?: string | null
    ICD_10_Code?: string | null
    Diagnosis?: string | null
    Claim_Type?: string | null
    Admission_Date?: Date | string | null
    Provider_Name?: string | null
    Provider_Type?: string | null
    Approved_Claim_Amount?: number | null
    Relationship?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type maxicareUpdateManyMutationInput = {
    PY?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Account?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Type?: NullableStringFieldUpdateOperationsInput | string | null
    ICD_10_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    Claim_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Admission_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Provider_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Provider_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Approved_Claim_Amount?: NullableFloatFieldUpdateOperationsInput | number | null
    Relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maxicareUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    PY?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Account?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Type?: NullableStringFieldUpdateOperationsInput | string | null
    ICD_10_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    Claim_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Admission_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Provider_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Provider_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Approved_Claim_Amount?: NullableFloatFieldUpdateOperationsInput | number | null
    Relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customIllnessesCreateInput = {
    py?: string | null
    member_type?: string | null
    icd_10_code?: string | null
    diagnosis?: string | null
    claim_amount?: number | null
    percentage_to_total_amount?: Decimal | DecimalJsLike | number | string | null
    claim_count?: number | null
    percentage_to_total_count?: Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clients: clientsCreateNestedOneWithoutCustomIllnessesInput
  }

  export type customIllnessesUncheckedCreateInput = {
    id?: number
    clientId: number
    py?: string | null
    member_type?: string | null
    icd_10_code?: string | null
    diagnosis?: string | null
    claim_amount?: number | null
    percentage_to_total_amount?: Decimal | DecimalJsLike | number | string | null
    claim_count?: number | null
    percentage_to_total_count?: Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type customIllnessesUpdateInput = {
    py?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    icd_10_code?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    claim_amount?: NullableIntFieldUpdateOperationsInput | number | null
    percentage_to_total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    claim_count?: NullableIntFieldUpdateOperationsInput | number | null
    percentage_to_total_count?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: clientsUpdateOneRequiredWithoutCustomIllnessesNestedInput
  }

  export type customIllnessesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    py?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    icd_10_code?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    claim_amount?: NullableIntFieldUpdateOperationsInput | number | null
    percentage_to_total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    claim_count?: NullableIntFieldUpdateOperationsInput | number | null
    percentage_to_total_count?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customIllnessesCreateManyInput = {
    id?: number
    clientId: number
    py?: string | null
    member_type?: string | null
    icd_10_code?: string | null
    diagnosis?: string | null
    claim_amount?: number | null
    percentage_to_total_amount?: Decimal | DecimalJsLike | number | string | null
    claim_count?: number | null
    percentage_to_total_count?: Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type customIllnessesUpdateManyMutationInput = {
    py?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    icd_10_code?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    claim_amount?: NullableIntFieldUpdateOperationsInput | number | null
    percentage_to_total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    claim_count?: NullableIntFieldUpdateOperationsInput | number | null
    percentage_to_total_count?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customIllnessesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    py?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    icd_10_code?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    claim_amount?: NullableIntFieldUpdateOperationsInput | number | null
    percentage_to_total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    claim_count?: NullableIntFieldUpdateOperationsInput | number | null
    percentage_to_total_count?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    admin?: SortOrder
    canUpload?: SortOrder
    canCreate?: SortOrder
    canViewDeck?: SortOrder
    canUploadDeck?: SortOrder
    canAdd?: SortOrder
    canRemove?: SortOrder
    canEdit?: SortOrder
    superAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    admin?: SortOrder
    canUpload?: SortOrder
    canCreate?: SortOrder
    canViewDeck?: SortOrder
    canUploadDeck?: SortOrder
    canAdd?: SortOrder
    canRemove?: SortOrder
    canEdit?: SortOrder
    superAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    admin?: SortOrder
    canUpload?: SortOrder
    canCreate?: SortOrder
    canViewDeck?: SortOrder
    canUploadDeck?: SortOrder
    canAdd?: SortOrder
    canRemove?: SortOrder
    canEdit?: SortOrder
    superAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ClientsListRelationFilter = {
    every?: clientsWhereInput
    some?: clientsWhereInput
    none?: clientsWhereInput
  }

  export type UploadsListRelationFilter = {
    every?: uploadsWhereInput
    some?: uploadsWhereInput
    none?: uploadsWhereInput
  }

  export type clientsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type uploadsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type insurersOrderByRelevanceInput = {
    fields: insurersOrderByRelevanceFieldEnum | insurersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type insurersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type insurersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type insurersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type insurersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type insurersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type InsurersNullableScalarRelationFilter = {
    is?: insurersWhereInput | null
    isNot?: insurersWhereInput | null
  }

  export type DecksListRelationFilter = {
    every?: decksWhereInput
    some?: decksWhereInput
    none?: decksWhereInput
  }

  export type IntellicareMasterlistListRelationFilter = {
    every?: intellicareMasterlistWhereInput
    some?: intellicareMasterlistWhereInput
    none?: intellicareMasterlistWhereInput
  }

  export type MaxicareMasterlistListRelationFilter = {
    every?: maxicareMasterlistWhereInput
    some?: maxicareMasterlistWhereInput
    none?: maxicareMasterlistWhereInput
  }

  export type IntellicareListRelationFilter = {
    every?: intellicareWhereInput
    some?: intellicareWhereInput
    none?: intellicareWhereInput
  }

  export type MaxicareListRelationFilter = {
    every?: maxicareWhereInput
    some?: maxicareWhereInput
    none?: maxicareWhereInput
  }

  export type CustomIllnessesListRelationFilter = {
    every?: customIllnessesWhereInput
    some?: customIllnessesWhereInput
    none?: customIllnessesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type decksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type intellicareMasterlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type maxicareMasterlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type intellicareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type maxicareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customIllnessesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientsOrderByRelevanceInput = {
    fields: clientsOrderByRelevanceFieldEnum | clientsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type clientsCountOrderByAggregateInput = {
    id?: SortOrder
    client_name?: SortOrder
    description?: SortOrder
    insurer_id?: SortOrder
  }

  export type clientsAvgOrderByAggregateInput = {
    id?: SortOrder
    insurer_id?: SortOrder
  }

  export type clientsMaxOrderByAggregateInput = {
    id?: SortOrder
    client_name?: SortOrder
    description?: SortOrder
    insurer_id?: SortOrder
  }

  export type clientsMinOrderByAggregateInput = {
    id?: SortOrder
    client_name?: SortOrder
    description?: SortOrder
    insurer_id?: SortOrder
  }

  export type clientsSumOrderByAggregateInput = {
    id?: SortOrder
    insurer_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ClientsScalarRelationFilter = {
    is?: clientsWhereInput
    isNot?: clientsWhereInput
  }

  export type InsurersScalarRelationFilter = {
    is?: insurersWhereInput
    isNot?: insurersWhereInput
  }

  export type uploadsOrderByRelevanceInput = {
    fields: uploadsOrderByRelevanceFieldEnum | uploadsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type uploadsCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    insurerId?: SortOrder
    year?: SortOrder
    months?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type uploadsAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    insurerId?: SortOrder
  }

  export type uploadsMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    insurerId?: SortOrder
    year?: SortOrder
    months?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type uploadsMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    insurerId?: SortOrder
    year?: SortOrder
    months?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type uploadsSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    insurerId?: SortOrder
  }

  export type decksOrderByRelevanceInput = {
    fields: decksOrderByRelevanceFieldEnum | decksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type decksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type decksAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type decksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type decksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type decksSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type intellicareMasterlistOrderByRelevanceInput = {
    fields: intellicareMasterlistOrderByRelevanceFieldEnum | intellicareMasterlistOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type intellicareMasterlistCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrder
    ACCOUNT_NO?: SortOrder
    STATUS?: SortOrder
    MEMBER_TYPE?: SortOrder
    RNB?: SortOrder
    PREEXIST?: SortOrder
    LIMIT?: SortOrder
    BIRTHDATE?: SortOrder
    AGE?: SortOrder
    RELATION?: SortOrder
    EE_ID?: SortOrder
    CARD_NO?: SortOrder
    COMPANY?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type intellicareMasterlistAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    PREEXIST?: SortOrder
    LIMIT?: SortOrder
    AGE?: SortOrder
  }

  export type intellicareMasterlistMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrder
    ACCOUNT_NO?: SortOrder
    STATUS?: SortOrder
    MEMBER_TYPE?: SortOrder
    RNB?: SortOrder
    PREEXIST?: SortOrder
    LIMIT?: SortOrder
    BIRTHDATE?: SortOrder
    AGE?: SortOrder
    RELATION?: SortOrder
    EE_ID?: SortOrder
    CARD_NO?: SortOrder
    COMPANY?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type intellicareMasterlistMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrder
    ACCOUNT_NO?: SortOrder
    STATUS?: SortOrder
    MEMBER_TYPE?: SortOrder
    RNB?: SortOrder
    PREEXIST?: SortOrder
    LIMIT?: SortOrder
    BIRTHDATE?: SortOrder
    AGE?: SortOrder
    RELATION?: SortOrder
    EE_ID?: SortOrder
    CARD_NO?: SortOrder
    COMPANY?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type intellicareMasterlistSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    PREEXIST?: SortOrder
    LIMIT?: SortOrder
    AGE?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type maxicareMasterlistOrderByRelevanceInput = {
    fields: maxicareMasterlistOrderByRelevanceFieldEnum | maxicareMasterlistOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type maxicareMasterlistCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrder
    ACCOUNT_NO?: SortOrder
    STATUS?: SortOrder
    MEMBER_TYPE?: SortOrder
    LIMIT?: SortOrder
    RELATION?: SortOrder
    EE_ID?: SortOrder
    CARD_NO?: SortOrder
    COMPANY?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type maxicareMasterlistAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    LIMIT?: SortOrder
  }

  export type maxicareMasterlistMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrder
    ACCOUNT_NO?: SortOrder
    STATUS?: SortOrder
    MEMBER_TYPE?: SortOrder
    LIMIT?: SortOrder
    RELATION?: SortOrder
    EE_ID?: SortOrder
    CARD_NO?: SortOrder
    COMPANY?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type maxicareMasterlistMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrder
    ACCOUNT_NO?: SortOrder
    STATUS?: SortOrder
    MEMBER_TYPE?: SortOrder
    LIMIT?: SortOrder
    RELATION?: SortOrder
    EE_ID?: SortOrder
    CARD_NO?: SortOrder
    COMPANY?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type maxicareMasterlistSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    LIMIT?: SortOrder
  }

  export type intellicareOrderByRelevanceInput = {
    fields: intellicareOrderByRelevanceFieldEnum | intellicareOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type intellicareCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrder
    Company?: SortOrder
    Member_Account?: SortOrder
    Member_Type?: SortOrder
    ICD_10_Code?: SortOrder
    Diagnosis?: SortOrder
    Claim_Type?: SortOrder
    Admission_Date?: SortOrder
    Provider_Name?: SortOrder
    Provider_Type?: SortOrder
    Approved_Claim_Amount?: SortOrder
    Class_Plan_Level?: SortOrder
    Maximum_Benefit_Limit?: SortOrder
    Date_of_Birth?: SortOrder
    Relationship?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type intellicareAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    Approved_Claim_Amount?: SortOrder
    Maximum_Benefit_Limit?: SortOrder
  }

  export type intellicareMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrder
    Company?: SortOrder
    Member_Account?: SortOrder
    Member_Type?: SortOrder
    ICD_10_Code?: SortOrder
    Diagnosis?: SortOrder
    Claim_Type?: SortOrder
    Admission_Date?: SortOrder
    Provider_Name?: SortOrder
    Provider_Type?: SortOrder
    Approved_Claim_Amount?: SortOrder
    Class_Plan_Level?: SortOrder
    Maximum_Benefit_Limit?: SortOrder
    Date_of_Birth?: SortOrder
    Relationship?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type intellicareMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrder
    Company?: SortOrder
    Member_Account?: SortOrder
    Member_Type?: SortOrder
    ICD_10_Code?: SortOrder
    Diagnosis?: SortOrder
    Claim_Type?: SortOrder
    Admission_Date?: SortOrder
    Provider_Name?: SortOrder
    Provider_Type?: SortOrder
    Approved_Claim_Amount?: SortOrder
    Class_Plan_Level?: SortOrder
    Maximum_Benefit_Limit?: SortOrder
    Date_of_Birth?: SortOrder
    Relationship?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type intellicareSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    Approved_Claim_Amount?: SortOrder
    Maximum_Benefit_Limit?: SortOrder
  }

  export type maxicareOrderByRelevanceInput = {
    fields: maxicareOrderByRelevanceFieldEnum | maxicareOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type maxicareCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrder
    Company?: SortOrder
    Member_Account?: SortOrder
    Member_Type?: SortOrder
    ICD_10_Code?: SortOrder
    Diagnosis?: SortOrder
    Claim_Type?: SortOrder
    Admission_Date?: SortOrder
    Provider_Name?: SortOrder
    Provider_Type?: SortOrder
    Approved_Claim_Amount?: SortOrder
    Relationship?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type maxicareAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    Approved_Claim_Amount?: SortOrder
  }

  export type maxicareMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrder
    Company?: SortOrder
    Member_Account?: SortOrder
    Member_Type?: SortOrder
    ICD_10_Code?: SortOrder
    Diagnosis?: SortOrder
    Claim_Type?: SortOrder
    Admission_Date?: SortOrder
    Provider_Name?: SortOrder
    Provider_Type?: SortOrder
    Approved_Claim_Amount?: SortOrder
    Relationship?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type maxicareMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    PY?: SortOrder
    Company?: SortOrder
    Member_Account?: SortOrder
    Member_Type?: SortOrder
    ICD_10_Code?: SortOrder
    Diagnosis?: SortOrder
    Claim_Type?: SortOrder
    Admission_Date?: SortOrder
    Provider_Name?: SortOrder
    Provider_Type?: SortOrder
    Approved_Claim_Amount?: SortOrder
    Relationship?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type maxicareSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    Approved_Claim_Amount?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type customIllnessesOrderByRelevanceInput = {
    fields: customIllnessesOrderByRelevanceFieldEnum | customIllnessesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type customIllnessesCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    py?: SortOrder
    member_type?: SortOrder
    icd_10_code?: SortOrder
    diagnosis?: SortOrder
    claim_amount?: SortOrder
    percentage_to_total_amount?: SortOrder
    claim_count?: SortOrder
    percentage_to_total_count?: SortOrder
    average_cost_per_claim?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type customIllnessesAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    claim_amount?: SortOrder
    percentage_to_total_amount?: SortOrder
    claim_count?: SortOrder
    percentage_to_total_count?: SortOrder
    average_cost_per_claim?: SortOrder
  }

  export type customIllnessesMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    py?: SortOrder
    member_type?: SortOrder
    icd_10_code?: SortOrder
    diagnosis?: SortOrder
    claim_amount?: SortOrder
    percentage_to_total_amount?: SortOrder
    claim_count?: SortOrder
    percentage_to_total_count?: SortOrder
    average_cost_per_claim?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type customIllnessesMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    py?: SortOrder
    member_type?: SortOrder
    icd_10_code?: SortOrder
    diagnosis?: SortOrder
    claim_amount?: SortOrder
    percentage_to_total_amount?: SortOrder
    claim_count?: SortOrder
    percentage_to_total_count?: SortOrder
    average_cost_per_claim?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type customIllnessesSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    claim_amount?: SortOrder
    percentage_to_total_amount?: SortOrder
    claim_count?: SortOrder
    percentage_to_total_count?: SortOrder
    average_cost_per_claim?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type clientsCreateNestedManyWithoutInsurerInput = {
    create?: XOR<clientsCreateWithoutInsurerInput, clientsUncheckedCreateWithoutInsurerInput> | clientsCreateWithoutInsurerInput[] | clientsUncheckedCreateWithoutInsurerInput[]
    connectOrCreate?: clientsCreateOrConnectWithoutInsurerInput | clientsCreateOrConnectWithoutInsurerInput[]
    createMany?: clientsCreateManyInsurerInputEnvelope
    connect?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
  }

  export type uploadsCreateNestedManyWithoutInsurersInput = {
    create?: XOR<uploadsCreateWithoutInsurersInput, uploadsUncheckedCreateWithoutInsurersInput> | uploadsCreateWithoutInsurersInput[] | uploadsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: uploadsCreateOrConnectWithoutInsurersInput | uploadsCreateOrConnectWithoutInsurersInput[]
    createMany?: uploadsCreateManyInsurersInputEnvelope
    connect?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
  }

  export type clientsUncheckedCreateNestedManyWithoutInsurerInput = {
    create?: XOR<clientsCreateWithoutInsurerInput, clientsUncheckedCreateWithoutInsurerInput> | clientsCreateWithoutInsurerInput[] | clientsUncheckedCreateWithoutInsurerInput[]
    connectOrCreate?: clientsCreateOrConnectWithoutInsurerInput | clientsCreateOrConnectWithoutInsurerInput[]
    createMany?: clientsCreateManyInsurerInputEnvelope
    connect?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
  }

  export type uploadsUncheckedCreateNestedManyWithoutInsurersInput = {
    create?: XOR<uploadsCreateWithoutInsurersInput, uploadsUncheckedCreateWithoutInsurersInput> | uploadsCreateWithoutInsurersInput[] | uploadsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: uploadsCreateOrConnectWithoutInsurersInput | uploadsCreateOrConnectWithoutInsurersInput[]
    createMany?: uploadsCreateManyInsurersInputEnvelope
    connect?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
  }

  export type clientsUpdateManyWithoutInsurerNestedInput = {
    create?: XOR<clientsCreateWithoutInsurerInput, clientsUncheckedCreateWithoutInsurerInput> | clientsCreateWithoutInsurerInput[] | clientsUncheckedCreateWithoutInsurerInput[]
    connectOrCreate?: clientsCreateOrConnectWithoutInsurerInput | clientsCreateOrConnectWithoutInsurerInput[]
    upsert?: clientsUpsertWithWhereUniqueWithoutInsurerInput | clientsUpsertWithWhereUniqueWithoutInsurerInput[]
    createMany?: clientsCreateManyInsurerInputEnvelope
    set?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
    disconnect?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
    delete?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
    connect?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
    update?: clientsUpdateWithWhereUniqueWithoutInsurerInput | clientsUpdateWithWhereUniqueWithoutInsurerInput[]
    updateMany?: clientsUpdateManyWithWhereWithoutInsurerInput | clientsUpdateManyWithWhereWithoutInsurerInput[]
    deleteMany?: clientsScalarWhereInput | clientsScalarWhereInput[]
  }

  export type uploadsUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<uploadsCreateWithoutInsurersInput, uploadsUncheckedCreateWithoutInsurersInput> | uploadsCreateWithoutInsurersInput[] | uploadsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: uploadsCreateOrConnectWithoutInsurersInput | uploadsCreateOrConnectWithoutInsurersInput[]
    upsert?: uploadsUpsertWithWhereUniqueWithoutInsurersInput | uploadsUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: uploadsCreateManyInsurersInputEnvelope
    set?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    disconnect?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    delete?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    connect?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    update?: uploadsUpdateWithWhereUniqueWithoutInsurersInput | uploadsUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: uploadsUpdateManyWithWhereWithoutInsurersInput | uploadsUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: uploadsScalarWhereInput | uploadsScalarWhereInput[]
  }

  export type clientsUncheckedUpdateManyWithoutInsurerNestedInput = {
    create?: XOR<clientsCreateWithoutInsurerInput, clientsUncheckedCreateWithoutInsurerInput> | clientsCreateWithoutInsurerInput[] | clientsUncheckedCreateWithoutInsurerInput[]
    connectOrCreate?: clientsCreateOrConnectWithoutInsurerInput | clientsCreateOrConnectWithoutInsurerInput[]
    upsert?: clientsUpsertWithWhereUniqueWithoutInsurerInput | clientsUpsertWithWhereUniqueWithoutInsurerInput[]
    createMany?: clientsCreateManyInsurerInputEnvelope
    set?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
    disconnect?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
    delete?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
    connect?: clientsWhereUniqueInput | clientsWhereUniqueInput[]
    update?: clientsUpdateWithWhereUniqueWithoutInsurerInput | clientsUpdateWithWhereUniqueWithoutInsurerInput[]
    updateMany?: clientsUpdateManyWithWhereWithoutInsurerInput | clientsUpdateManyWithWhereWithoutInsurerInput[]
    deleteMany?: clientsScalarWhereInput | clientsScalarWhereInput[]
  }

  export type uploadsUncheckedUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<uploadsCreateWithoutInsurersInput, uploadsUncheckedCreateWithoutInsurersInput> | uploadsCreateWithoutInsurersInput[] | uploadsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: uploadsCreateOrConnectWithoutInsurersInput | uploadsCreateOrConnectWithoutInsurersInput[]
    upsert?: uploadsUpsertWithWhereUniqueWithoutInsurersInput | uploadsUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: uploadsCreateManyInsurersInputEnvelope
    set?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    disconnect?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    delete?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    connect?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    update?: uploadsUpdateWithWhereUniqueWithoutInsurersInput | uploadsUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: uploadsUpdateManyWithWhereWithoutInsurersInput | uploadsUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: uploadsScalarWhereInput | uploadsScalarWhereInput[]
  }

  export type insurersCreateNestedOneWithoutClientsInput = {
    create?: XOR<insurersCreateWithoutClientsInput, insurersUncheckedCreateWithoutClientsInput>
    connectOrCreate?: insurersCreateOrConnectWithoutClientsInput
    connect?: insurersWhereUniqueInput
  }

  export type uploadsCreateNestedManyWithoutClientsInput = {
    create?: XOR<uploadsCreateWithoutClientsInput, uploadsUncheckedCreateWithoutClientsInput> | uploadsCreateWithoutClientsInput[] | uploadsUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: uploadsCreateOrConnectWithoutClientsInput | uploadsCreateOrConnectWithoutClientsInput[]
    createMany?: uploadsCreateManyClientsInputEnvelope
    connect?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
  }

  export type decksCreateNestedManyWithoutClientsInput = {
    create?: XOR<decksCreateWithoutClientsInput, decksUncheckedCreateWithoutClientsInput> | decksCreateWithoutClientsInput[] | decksUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: decksCreateOrConnectWithoutClientsInput | decksCreateOrConnectWithoutClientsInput[]
    createMany?: decksCreateManyClientsInputEnvelope
    connect?: decksWhereUniqueInput | decksWhereUniqueInput[]
  }

  export type intellicareMasterlistCreateNestedManyWithoutClientsInput = {
    create?: XOR<intellicareMasterlistCreateWithoutClientsInput, intellicareMasterlistUncheckedCreateWithoutClientsInput> | intellicareMasterlistCreateWithoutClientsInput[] | intellicareMasterlistUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: intellicareMasterlistCreateOrConnectWithoutClientsInput | intellicareMasterlistCreateOrConnectWithoutClientsInput[]
    createMany?: intellicareMasterlistCreateManyClientsInputEnvelope
    connect?: intellicareMasterlistWhereUniqueInput | intellicareMasterlistWhereUniqueInput[]
  }

  export type maxicareMasterlistCreateNestedManyWithoutClientsInput = {
    create?: XOR<maxicareMasterlistCreateWithoutClientsInput, maxicareMasterlistUncheckedCreateWithoutClientsInput> | maxicareMasterlistCreateWithoutClientsInput[] | maxicareMasterlistUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: maxicareMasterlistCreateOrConnectWithoutClientsInput | maxicareMasterlistCreateOrConnectWithoutClientsInput[]
    createMany?: maxicareMasterlistCreateManyClientsInputEnvelope
    connect?: maxicareMasterlistWhereUniqueInput | maxicareMasterlistWhereUniqueInput[]
  }

  export type intellicareCreateNestedManyWithoutClientsInput = {
    create?: XOR<intellicareCreateWithoutClientsInput, intellicareUncheckedCreateWithoutClientsInput> | intellicareCreateWithoutClientsInput[] | intellicareUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: intellicareCreateOrConnectWithoutClientsInput | intellicareCreateOrConnectWithoutClientsInput[]
    createMany?: intellicareCreateManyClientsInputEnvelope
    connect?: intellicareWhereUniqueInput | intellicareWhereUniqueInput[]
  }

  export type maxicareCreateNestedManyWithoutClientsInput = {
    create?: XOR<maxicareCreateWithoutClientsInput, maxicareUncheckedCreateWithoutClientsInput> | maxicareCreateWithoutClientsInput[] | maxicareUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: maxicareCreateOrConnectWithoutClientsInput | maxicareCreateOrConnectWithoutClientsInput[]
    createMany?: maxicareCreateManyClientsInputEnvelope
    connect?: maxicareWhereUniqueInput | maxicareWhereUniqueInput[]
  }

  export type customIllnessesCreateNestedManyWithoutClientsInput = {
    create?: XOR<customIllnessesCreateWithoutClientsInput, customIllnessesUncheckedCreateWithoutClientsInput> | customIllnessesCreateWithoutClientsInput[] | customIllnessesUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: customIllnessesCreateOrConnectWithoutClientsInput | customIllnessesCreateOrConnectWithoutClientsInput[]
    createMany?: customIllnessesCreateManyClientsInputEnvelope
    connect?: customIllnessesWhereUniqueInput | customIllnessesWhereUniqueInput[]
  }

  export type uploadsUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<uploadsCreateWithoutClientsInput, uploadsUncheckedCreateWithoutClientsInput> | uploadsCreateWithoutClientsInput[] | uploadsUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: uploadsCreateOrConnectWithoutClientsInput | uploadsCreateOrConnectWithoutClientsInput[]
    createMany?: uploadsCreateManyClientsInputEnvelope
    connect?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
  }

  export type decksUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<decksCreateWithoutClientsInput, decksUncheckedCreateWithoutClientsInput> | decksCreateWithoutClientsInput[] | decksUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: decksCreateOrConnectWithoutClientsInput | decksCreateOrConnectWithoutClientsInput[]
    createMany?: decksCreateManyClientsInputEnvelope
    connect?: decksWhereUniqueInput | decksWhereUniqueInput[]
  }

  export type intellicareMasterlistUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<intellicareMasterlistCreateWithoutClientsInput, intellicareMasterlistUncheckedCreateWithoutClientsInput> | intellicareMasterlistCreateWithoutClientsInput[] | intellicareMasterlistUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: intellicareMasterlistCreateOrConnectWithoutClientsInput | intellicareMasterlistCreateOrConnectWithoutClientsInput[]
    createMany?: intellicareMasterlistCreateManyClientsInputEnvelope
    connect?: intellicareMasterlistWhereUniqueInput | intellicareMasterlistWhereUniqueInput[]
  }

  export type maxicareMasterlistUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<maxicareMasterlistCreateWithoutClientsInput, maxicareMasterlistUncheckedCreateWithoutClientsInput> | maxicareMasterlistCreateWithoutClientsInput[] | maxicareMasterlistUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: maxicareMasterlistCreateOrConnectWithoutClientsInput | maxicareMasterlistCreateOrConnectWithoutClientsInput[]
    createMany?: maxicareMasterlistCreateManyClientsInputEnvelope
    connect?: maxicareMasterlistWhereUniqueInput | maxicareMasterlistWhereUniqueInput[]
  }

  export type intellicareUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<intellicareCreateWithoutClientsInput, intellicareUncheckedCreateWithoutClientsInput> | intellicareCreateWithoutClientsInput[] | intellicareUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: intellicareCreateOrConnectWithoutClientsInput | intellicareCreateOrConnectWithoutClientsInput[]
    createMany?: intellicareCreateManyClientsInputEnvelope
    connect?: intellicareWhereUniqueInput | intellicareWhereUniqueInput[]
  }

  export type maxicareUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<maxicareCreateWithoutClientsInput, maxicareUncheckedCreateWithoutClientsInput> | maxicareCreateWithoutClientsInput[] | maxicareUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: maxicareCreateOrConnectWithoutClientsInput | maxicareCreateOrConnectWithoutClientsInput[]
    createMany?: maxicareCreateManyClientsInputEnvelope
    connect?: maxicareWhereUniqueInput | maxicareWhereUniqueInput[]
  }

  export type customIllnessesUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<customIllnessesCreateWithoutClientsInput, customIllnessesUncheckedCreateWithoutClientsInput> | customIllnessesCreateWithoutClientsInput[] | customIllnessesUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: customIllnessesCreateOrConnectWithoutClientsInput | customIllnessesCreateOrConnectWithoutClientsInput[]
    createMany?: customIllnessesCreateManyClientsInputEnvelope
    connect?: customIllnessesWhereUniqueInput | customIllnessesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type insurersUpdateOneWithoutClientsNestedInput = {
    create?: XOR<insurersCreateWithoutClientsInput, insurersUncheckedCreateWithoutClientsInput>
    connectOrCreate?: insurersCreateOrConnectWithoutClientsInput
    upsert?: insurersUpsertWithoutClientsInput
    disconnect?: insurersWhereInput | boolean
    delete?: insurersWhereInput | boolean
    connect?: insurersWhereUniqueInput
    update?: XOR<XOR<insurersUpdateToOneWithWhereWithoutClientsInput, insurersUpdateWithoutClientsInput>, insurersUncheckedUpdateWithoutClientsInput>
  }

  export type uploadsUpdateManyWithoutClientsNestedInput = {
    create?: XOR<uploadsCreateWithoutClientsInput, uploadsUncheckedCreateWithoutClientsInput> | uploadsCreateWithoutClientsInput[] | uploadsUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: uploadsCreateOrConnectWithoutClientsInput | uploadsCreateOrConnectWithoutClientsInput[]
    upsert?: uploadsUpsertWithWhereUniqueWithoutClientsInput | uploadsUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: uploadsCreateManyClientsInputEnvelope
    set?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    disconnect?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    delete?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    connect?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    update?: uploadsUpdateWithWhereUniqueWithoutClientsInput | uploadsUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: uploadsUpdateManyWithWhereWithoutClientsInput | uploadsUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: uploadsScalarWhereInput | uploadsScalarWhereInput[]
  }

  export type decksUpdateManyWithoutClientsNestedInput = {
    create?: XOR<decksCreateWithoutClientsInput, decksUncheckedCreateWithoutClientsInput> | decksCreateWithoutClientsInput[] | decksUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: decksCreateOrConnectWithoutClientsInput | decksCreateOrConnectWithoutClientsInput[]
    upsert?: decksUpsertWithWhereUniqueWithoutClientsInput | decksUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: decksCreateManyClientsInputEnvelope
    set?: decksWhereUniqueInput | decksWhereUniqueInput[]
    disconnect?: decksWhereUniqueInput | decksWhereUniqueInput[]
    delete?: decksWhereUniqueInput | decksWhereUniqueInput[]
    connect?: decksWhereUniqueInput | decksWhereUniqueInput[]
    update?: decksUpdateWithWhereUniqueWithoutClientsInput | decksUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: decksUpdateManyWithWhereWithoutClientsInput | decksUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: decksScalarWhereInput | decksScalarWhereInput[]
  }

  export type intellicareMasterlistUpdateManyWithoutClientsNestedInput = {
    create?: XOR<intellicareMasterlistCreateWithoutClientsInput, intellicareMasterlistUncheckedCreateWithoutClientsInput> | intellicareMasterlistCreateWithoutClientsInput[] | intellicareMasterlistUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: intellicareMasterlistCreateOrConnectWithoutClientsInput | intellicareMasterlistCreateOrConnectWithoutClientsInput[]
    upsert?: intellicareMasterlistUpsertWithWhereUniqueWithoutClientsInput | intellicareMasterlistUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: intellicareMasterlistCreateManyClientsInputEnvelope
    set?: intellicareMasterlistWhereUniqueInput | intellicareMasterlistWhereUniqueInput[]
    disconnect?: intellicareMasterlistWhereUniqueInput | intellicareMasterlistWhereUniqueInput[]
    delete?: intellicareMasterlistWhereUniqueInput | intellicareMasterlistWhereUniqueInput[]
    connect?: intellicareMasterlistWhereUniqueInput | intellicareMasterlistWhereUniqueInput[]
    update?: intellicareMasterlistUpdateWithWhereUniqueWithoutClientsInput | intellicareMasterlistUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: intellicareMasterlistUpdateManyWithWhereWithoutClientsInput | intellicareMasterlistUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: intellicareMasterlistScalarWhereInput | intellicareMasterlistScalarWhereInput[]
  }

  export type maxicareMasterlistUpdateManyWithoutClientsNestedInput = {
    create?: XOR<maxicareMasterlistCreateWithoutClientsInput, maxicareMasterlistUncheckedCreateWithoutClientsInput> | maxicareMasterlistCreateWithoutClientsInput[] | maxicareMasterlistUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: maxicareMasterlistCreateOrConnectWithoutClientsInput | maxicareMasterlistCreateOrConnectWithoutClientsInput[]
    upsert?: maxicareMasterlistUpsertWithWhereUniqueWithoutClientsInput | maxicareMasterlistUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: maxicareMasterlistCreateManyClientsInputEnvelope
    set?: maxicareMasterlistWhereUniqueInput | maxicareMasterlistWhereUniqueInput[]
    disconnect?: maxicareMasterlistWhereUniqueInput | maxicareMasterlistWhereUniqueInput[]
    delete?: maxicareMasterlistWhereUniqueInput | maxicareMasterlistWhereUniqueInput[]
    connect?: maxicareMasterlistWhereUniqueInput | maxicareMasterlistWhereUniqueInput[]
    update?: maxicareMasterlistUpdateWithWhereUniqueWithoutClientsInput | maxicareMasterlistUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: maxicareMasterlistUpdateManyWithWhereWithoutClientsInput | maxicareMasterlistUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: maxicareMasterlistScalarWhereInput | maxicareMasterlistScalarWhereInput[]
  }

  export type intellicareUpdateManyWithoutClientsNestedInput = {
    create?: XOR<intellicareCreateWithoutClientsInput, intellicareUncheckedCreateWithoutClientsInput> | intellicareCreateWithoutClientsInput[] | intellicareUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: intellicareCreateOrConnectWithoutClientsInput | intellicareCreateOrConnectWithoutClientsInput[]
    upsert?: intellicareUpsertWithWhereUniqueWithoutClientsInput | intellicareUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: intellicareCreateManyClientsInputEnvelope
    set?: intellicareWhereUniqueInput | intellicareWhereUniqueInput[]
    disconnect?: intellicareWhereUniqueInput | intellicareWhereUniqueInput[]
    delete?: intellicareWhereUniqueInput | intellicareWhereUniqueInput[]
    connect?: intellicareWhereUniqueInput | intellicareWhereUniqueInput[]
    update?: intellicareUpdateWithWhereUniqueWithoutClientsInput | intellicareUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: intellicareUpdateManyWithWhereWithoutClientsInput | intellicareUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: intellicareScalarWhereInput | intellicareScalarWhereInput[]
  }

  export type maxicareUpdateManyWithoutClientsNestedInput = {
    create?: XOR<maxicareCreateWithoutClientsInput, maxicareUncheckedCreateWithoutClientsInput> | maxicareCreateWithoutClientsInput[] | maxicareUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: maxicareCreateOrConnectWithoutClientsInput | maxicareCreateOrConnectWithoutClientsInput[]
    upsert?: maxicareUpsertWithWhereUniqueWithoutClientsInput | maxicareUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: maxicareCreateManyClientsInputEnvelope
    set?: maxicareWhereUniqueInput | maxicareWhereUniqueInput[]
    disconnect?: maxicareWhereUniqueInput | maxicareWhereUniqueInput[]
    delete?: maxicareWhereUniqueInput | maxicareWhereUniqueInput[]
    connect?: maxicareWhereUniqueInput | maxicareWhereUniqueInput[]
    update?: maxicareUpdateWithWhereUniqueWithoutClientsInput | maxicareUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: maxicareUpdateManyWithWhereWithoutClientsInput | maxicareUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: maxicareScalarWhereInput | maxicareScalarWhereInput[]
  }

  export type customIllnessesUpdateManyWithoutClientsNestedInput = {
    create?: XOR<customIllnessesCreateWithoutClientsInput, customIllnessesUncheckedCreateWithoutClientsInput> | customIllnessesCreateWithoutClientsInput[] | customIllnessesUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: customIllnessesCreateOrConnectWithoutClientsInput | customIllnessesCreateOrConnectWithoutClientsInput[]
    upsert?: customIllnessesUpsertWithWhereUniqueWithoutClientsInput | customIllnessesUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: customIllnessesCreateManyClientsInputEnvelope
    set?: customIllnessesWhereUniqueInput | customIllnessesWhereUniqueInput[]
    disconnect?: customIllnessesWhereUniqueInput | customIllnessesWhereUniqueInput[]
    delete?: customIllnessesWhereUniqueInput | customIllnessesWhereUniqueInput[]
    connect?: customIllnessesWhereUniqueInput | customIllnessesWhereUniqueInput[]
    update?: customIllnessesUpdateWithWhereUniqueWithoutClientsInput | customIllnessesUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: customIllnessesUpdateManyWithWhereWithoutClientsInput | customIllnessesUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: customIllnessesScalarWhereInput | customIllnessesScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type uploadsUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<uploadsCreateWithoutClientsInput, uploadsUncheckedCreateWithoutClientsInput> | uploadsCreateWithoutClientsInput[] | uploadsUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: uploadsCreateOrConnectWithoutClientsInput | uploadsCreateOrConnectWithoutClientsInput[]
    upsert?: uploadsUpsertWithWhereUniqueWithoutClientsInput | uploadsUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: uploadsCreateManyClientsInputEnvelope
    set?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    disconnect?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    delete?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    connect?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    update?: uploadsUpdateWithWhereUniqueWithoutClientsInput | uploadsUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: uploadsUpdateManyWithWhereWithoutClientsInput | uploadsUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: uploadsScalarWhereInput | uploadsScalarWhereInput[]
  }

  export type decksUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<decksCreateWithoutClientsInput, decksUncheckedCreateWithoutClientsInput> | decksCreateWithoutClientsInput[] | decksUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: decksCreateOrConnectWithoutClientsInput | decksCreateOrConnectWithoutClientsInput[]
    upsert?: decksUpsertWithWhereUniqueWithoutClientsInput | decksUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: decksCreateManyClientsInputEnvelope
    set?: decksWhereUniqueInput | decksWhereUniqueInput[]
    disconnect?: decksWhereUniqueInput | decksWhereUniqueInput[]
    delete?: decksWhereUniqueInput | decksWhereUniqueInput[]
    connect?: decksWhereUniqueInput | decksWhereUniqueInput[]
    update?: decksUpdateWithWhereUniqueWithoutClientsInput | decksUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: decksUpdateManyWithWhereWithoutClientsInput | decksUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: decksScalarWhereInput | decksScalarWhereInput[]
  }

  export type intellicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<intellicareMasterlistCreateWithoutClientsInput, intellicareMasterlistUncheckedCreateWithoutClientsInput> | intellicareMasterlistCreateWithoutClientsInput[] | intellicareMasterlistUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: intellicareMasterlistCreateOrConnectWithoutClientsInput | intellicareMasterlistCreateOrConnectWithoutClientsInput[]
    upsert?: intellicareMasterlistUpsertWithWhereUniqueWithoutClientsInput | intellicareMasterlistUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: intellicareMasterlistCreateManyClientsInputEnvelope
    set?: intellicareMasterlistWhereUniqueInput | intellicareMasterlistWhereUniqueInput[]
    disconnect?: intellicareMasterlistWhereUniqueInput | intellicareMasterlistWhereUniqueInput[]
    delete?: intellicareMasterlistWhereUniqueInput | intellicareMasterlistWhereUniqueInput[]
    connect?: intellicareMasterlistWhereUniqueInput | intellicareMasterlistWhereUniqueInput[]
    update?: intellicareMasterlistUpdateWithWhereUniqueWithoutClientsInput | intellicareMasterlistUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: intellicareMasterlistUpdateManyWithWhereWithoutClientsInput | intellicareMasterlistUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: intellicareMasterlistScalarWhereInput | intellicareMasterlistScalarWhereInput[]
  }

  export type maxicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<maxicareMasterlistCreateWithoutClientsInput, maxicareMasterlistUncheckedCreateWithoutClientsInput> | maxicareMasterlistCreateWithoutClientsInput[] | maxicareMasterlistUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: maxicareMasterlistCreateOrConnectWithoutClientsInput | maxicareMasterlistCreateOrConnectWithoutClientsInput[]
    upsert?: maxicareMasterlistUpsertWithWhereUniqueWithoutClientsInput | maxicareMasterlistUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: maxicareMasterlistCreateManyClientsInputEnvelope
    set?: maxicareMasterlistWhereUniqueInput | maxicareMasterlistWhereUniqueInput[]
    disconnect?: maxicareMasterlistWhereUniqueInput | maxicareMasterlistWhereUniqueInput[]
    delete?: maxicareMasterlistWhereUniqueInput | maxicareMasterlistWhereUniqueInput[]
    connect?: maxicareMasterlistWhereUniqueInput | maxicareMasterlistWhereUniqueInput[]
    update?: maxicareMasterlistUpdateWithWhereUniqueWithoutClientsInput | maxicareMasterlistUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: maxicareMasterlistUpdateManyWithWhereWithoutClientsInput | maxicareMasterlistUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: maxicareMasterlistScalarWhereInput | maxicareMasterlistScalarWhereInput[]
  }

  export type intellicareUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<intellicareCreateWithoutClientsInput, intellicareUncheckedCreateWithoutClientsInput> | intellicareCreateWithoutClientsInput[] | intellicareUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: intellicareCreateOrConnectWithoutClientsInput | intellicareCreateOrConnectWithoutClientsInput[]
    upsert?: intellicareUpsertWithWhereUniqueWithoutClientsInput | intellicareUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: intellicareCreateManyClientsInputEnvelope
    set?: intellicareWhereUniqueInput | intellicareWhereUniqueInput[]
    disconnect?: intellicareWhereUniqueInput | intellicareWhereUniqueInput[]
    delete?: intellicareWhereUniqueInput | intellicareWhereUniqueInput[]
    connect?: intellicareWhereUniqueInput | intellicareWhereUniqueInput[]
    update?: intellicareUpdateWithWhereUniqueWithoutClientsInput | intellicareUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: intellicareUpdateManyWithWhereWithoutClientsInput | intellicareUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: intellicareScalarWhereInput | intellicareScalarWhereInput[]
  }

  export type maxicareUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<maxicareCreateWithoutClientsInput, maxicareUncheckedCreateWithoutClientsInput> | maxicareCreateWithoutClientsInput[] | maxicareUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: maxicareCreateOrConnectWithoutClientsInput | maxicareCreateOrConnectWithoutClientsInput[]
    upsert?: maxicareUpsertWithWhereUniqueWithoutClientsInput | maxicareUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: maxicareCreateManyClientsInputEnvelope
    set?: maxicareWhereUniqueInput | maxicareWhereUniqueInput[]
    disconnect?: maxicareWhereUniqueInput | maxicareWhereUniqueInput[]
    delete?: maxicareWhereUniqueInput | maxicareWhereUniqueInput[]
    connect?: maxicareWhereUniqueInput | maxicareWhereUniqueInput[]
    update?: maxicareUpdateWithWhereUniqueWithoutClientsInput | maxicareUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: maxicareUpdateManyWithWhereWithoutClientsInput | maxicareUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: maxicareScalarWhereInput | maxicareScalarWhereInput[]
  }

  export type customIllnessesUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<customIllnessesCreateWithoutClientsInput, customIllnessesUncheckedCreateWithoutClientsInput> | customIllnessesCreateWithoutClientsInput[] | customIllnessesUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: customIllnessesCreateOrConnectWithoutClientsInput | customIllnessesCreateOrConnectWithoutClientsInput[]
    upsert?: customIllnessesUpsertWithWhereUniqueWithoutClientsInput | customIllnessesUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: customIllnessesCreateManyClientsInputEnvelope
    set?: customIllnessesWhereUniqueInput | customIllnessesWhereUniqueInput[]
    disconnect?: customIllnessesWhereUniqueInput | customIllnessesWhereUniqueInput[]
    delete?: customIllnessesWhereUniqueInput | customIllnessesWhereUniqueInput[]
    connect?: customIllnessesWhereUniqueInput | customIllnessesWhereUniqueInput[]
    update?: customIllnessesUpdateWithWhereUniqueWithoutClientsInput | customIllnessesUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: customIllnessesUpdateManyWithWhereWithoutClientsInput | customIllnessesUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: customIllnessesScalarWhereInput | customIllnessesScalarWhereInput[]
  }

  export type clientsCreateNestedOneWithoutUploadsInput = {
    create?: XOR<clientsCreateWithoutUploadsInput, clientsUncheckedCreateWithoutUploadsInput>
    connectOrCreate?: clientsCreateOrConnectWithoutUploadsInput
    connect?: clientsWhereUniqueInput
  }

  export type insurersCreateNestedOneWithoutUploadsInput = {
    create?: XOR<insurersCreateWithoutUploadsInput, insurersUncheckedCreateWithoutUploadsInput>
    connectOrCreate?: insurersCreateOrConnectWithoutUploadsInput
    connect?: insurersWhereUniqueInput
  }

  export type clientsUpdateOneRequiredWithoutUploadsNestedInput = {
    create?: XOR<clientsCreateWithoutUploadsInput, clientsUncheckedCreateWithoutUploadsInput>
    connectOrCreate?: clientsCreateOrConnectWithoutUploadsInput
    upsert?: clientsUpsertWithoutUploadsInput
    connect?: clientsWhereUniqueInput
    update?: XOR<XOR<clientsUpdateToOneWithWhereWithoutUploadsInput, clientsUpdateWithoutUploadsInput>, clientsUncheckedUpdateWithoutUploadsInput>
  }

  export type insurersUpdateOneRequiredWithoutUploadsNestedInput = {
    create?: XOR<insurersCreateWithoutUploadsInput, insurersUncheckedCreateWithoutUploadsInput>
    connectOrCreate?: insurersCreateOrConnectWithoutUploadsInput
    upsert?: insurersUpsertWithoutUploadsInput
    connect?: insurersWhereUniqueInput
    update?: XOR<XOR<insurersUpdateToOneWithWhereWithoutUploadsInput, insurersUpdateWithoutUploadsInput>, insurersUncheckedUpdateWithoutUploadsInput>
  }

  export type clientsCreateNestedOneWithoutDecksInput = {
    create?: XOR<clientsCreateWithoutDecksInput, clientsUncheckedCreateWithoutDecksInput>
    connectOrCreate?: clientsCreateOrConnectWithoutDecksInput
    connect?: clientsWhereUniqueInput
  }

  export type clientsUpdateOneRequiredWithoutDecksNestedInput = {
    create?: XOR<clientsCreateWithoutDecksInput, clientsUncheckedCreateWithoutDecksInput>
    connectOrCreate?: clientsCreateOrConnectWithoutDecksInput
    upsert?: clientsUpsertWithoutDecksInput
    connect?: clientsWhereUniqueInput
    update?: XOR<XOR<clientsUpdateToOneWithWhereWithoutDecksInput, clientsUpdateWithoutDecksInput>, clientsUncheckedUpdateWithoutDecksInput>
  }

  export type clientsCreateNestedOneWithoutIntellicareMasterlistInput = {
    create?: XOR<clientsCreateWithoutIntellicareMasterlistInput, clientsUncheckedCreateWithoutIntellicareMasterlistInput>
    connectOrCreate?: clientsCreateOrConnectWithoutIntellicareMasterlistInput
    connect?: clientsWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type clientsUpdateOneRequiredWithoutIntellicareMasterlistNestedInput = {
    create?: XOR<clientsCreateWithoutIntellicareMasterlistInput, clientsUncheckedCreateWithoutIntellicareMasterlistInput>
    connectOrCreate?: clientsCreateOrConnectWithoutIntellicareMasterlistInput
    upsert?: clientsUpsertWithoutIntellicareMasterlistInput
    connect?: clientsWhereUniqueInput
    update?: XOR<XOR<clientsUpdateToOneWithWhereWithoutIntellicareMasterlistInput, clientsUpdateWithoutIntellicareMasterlistInput>, clientsUncheckedUpdateWithoutIntellicareMasterlistInput>
  }

  export type clientsCreateNestedOneWithoutMaxicareMasterlistInput = {
    create?: XOR<clientsCreateWithoutMaxicareMasterlistInput, clientsUncheckedCreateWithoutMaxicareMasterlistInput>
    connectOrCreate?: clientsCreateOrConnectWithoutMaxicareMasterlistInput
    connect?: clientsWhereUniqueInput
  }

  export type clientsUpdateOneRequiredWithoutMaxicareMasterlistNestedInput = {
    create?: XOR<clientsCreateWithoutMaxicareMasterlistInput, clientsUncheckedCreateWithoutMaxicareMasterlistInput>
    connectOrCreate?: clientsCreateOrConnectWithoutMaxicareMasterlistInput
    upsert?: clientsUpsertWithoutMaxicareMasterlistInput
    connect?: clientsWhereUniqueInput
    update?: XOR<XOR<clientsUpdateToOneWithWhereWithoutMaxicareMasterlistInput, clientsUpdateWithoutMaxicareMasterlistInput>, clientsUncheckedUpdateWithoutMaxicareMasterlistInput>
  }

  export type clientsCreateNestedOneWithoutIntellicareInput = {
    create?: XOR<clientsCreateWithoutIntellicareInput, clientsUncheckedCreateWithoutIntellicareInput>
    connectOrCreate?: clientsCreateOrConnectWithoutIntellicareInput
    connect?: clientsWhereUniqueInput
  }

  export type clientsUpdateOneRequiredWithoutIntellicareNestedInput = {
    create?: XOR<clientsCreateWithoutIntellicareInput, clientsUncheckedCreateWithoutIntellicareInput>
    connectOrCreate?: clientsCreateOrConnectWithoutIntellicareInput
    upsert?: clientsUpsertWithoutIntellicareInput
    connect?: clientsWhereUniqueInput
    update?: XOR<XOR<clientsUpdateToOneWithWhereWithoutIntellicareInput, clientsUpdateWithoutIntellicareInput>, clientsUncheckedUpdateWithoutIntellicareInput>
  }

  export type clientsCreateNestedOneWithoutMaxicareInput = {
    create?: XOR<clientsCreateWithoutMaxicareInput, clientsUncheckedCreateWithoutMaxicareInput>
    connectOrCreate?: clientsCreateOrConnectWithoutMaxicareInput
    connect?: clientsWhereUniqueInput
  }

  export type clientsUpdateOneRequiredWithoutMaxicareNestedInput = {
    create?: XOR<clientsCreateWithoutMaxicareInput, clientsUncheckedCreateWithoutMaxicareInput>
    connectOrCreate?: clientsCreateOrConnectWithoutMaxicareInput
    upsert?: clientsUpsertWithoutMaxicareInput
    connect?: clientsWhereUniqueInput
    update?: XOR<XOR<clientsUpdateToOneWithWhereWithoutMaxicareInput, clientsUpdateWithoutMaxicareInput>, clientsUncheckedUpdateWithoutMaxicareInput>
  }

  export type clientsCreateNestedOneWithoutCustomIllnessesInput = {
    create?: XOR<clientsCreateWithoutCustomIllnessesInput, clientsUncheckedCreateWithoutCustomIllnessesInput>
    connectOrCreate?: clientsCreateOrConnectWithoutCustomIllnessesInput
    connect?: clientsWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type clientsUpdateOneRequiredWithoutCustomIllnessesNestedInput = {
    create?: XOR<clientsCreateWithoutCustomIllnessesInput, clientsUncheckedCreateWithoutCustomIllnessesInput>
    connectOrCreate?: clientsCreateOrConnectWithoutCustomIllnessesInput
    upsert?: clientsUpsertWithoutCustomIllnessesInput
    connect?: clientsWhereUniqueInput
    update?: XOR<XOR<clientsUpdateToOneWithWhereWithoutCustomIllnessesInput, clientsUpdateWithoutCustomIllnessesInput>, clientsUncheckedUpdateWithoutCustomIllnessesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type clientsCreateWithoutInsurerInput = {
    client_name: string
    description?: string | null
    uploads?: uploadsCreateNestedManyWithoutClientsInput
    decks?: decksCreateNestedManyWithoutClientsInput
    intellicareMasterlist?: intellicareMasterlistCreateNestedManyWithoutClientsInput
    maxicareMasterlist?: maxicareMasterlistCreateNestedManyWithoutClientsInput
    intellicare?: intellicareCreateNestedManyWithoutClientsInput
    maxicare?: maxicareCreateNestedManyWithoutClientsInput
    customIllnesses?: customIllnessesCreateNestedManyWithoutClientsInput
  }

  export type clientsUncheckedCreateWithoutInsurerInput = {
    id?: number
    client_name: string
    description?: string | null
    uploads?: uploadsUncheckedCreateNestedManyWithoutClientsInput
    decks?: decksUncheckedCreateNestedManyWithoutClientsInput
    intellicareMasterlist?: intellicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    maxicareMasterlist?: maxicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    intellicare?: intellicareUncheckedCreateNestedManyWithoutClientsInput
    maxicare?: maxicareUncheckedCreateNestedManyWithoutClientsInput
    customIllnesses?: customIllnessesUncheckedCreateNestedManyWithoutClientsInput
  }

  export type clientsCreateOrConnectWithoutInsurerInput = {
    where: clientsWhereUniqueInput
    create: XOR<clientsCreateWithoutInsurerInput, clientsUncheckedCreateWithoutInsurerInput>
  }

  export type clientsCreateManyInsurerInputEnvelope = {
    data: clientsCreateManyInsurerInput | clientsCreateManyInsurerInput[]
    skipDuplicates?: boolean
  }

  export type uploadsCreateWithoutInsurersInput = {
    year: string
    months?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clients: clientsCreateNestedOneWithoutUploadsInput
  }

  export type uploadsUncheckedCreateWithoutInsurersInput = {
    id?: number
    clientId: number
    year: string
    months?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type uploadsCreateOrConnectWithoutInsurersInput = {
    where: uploadsWhereUniqueInput
    create: XOR<uploadsCreateWithoutInsurersInput, uploadsUncheckedCreateWithoutInsurersInput>
  }

  export type uploadsCreateManyInsurersInputEnvelope = {
    data: uploadsCreateManyInsurersInput | uploadsCreateManyInsurersInput[]
    skipDuplicates?: boolean
  }

  export type clientsUpsertWithWhereUniqueWithoutInsurerInput = {
    where: clientsWhereUniqueInput
    update: XOR<clientsUpdateWithoutInsurerInput, clientsUncheckedUpdateWithoutInsurerInput>
    create: XOR<clientsCreateWithoutInsurerInput, clientsUncheckedCreateWithoutInsurerInput>
  }

  export type clientsUpdateWithWhereUniqueWithoutInsurerInput = {
    where: clientsWhereUniqueInput
    data: XOR<clientsUpdateWithoutInsurerInput, clientsUncheckedUpdateWithoutInsurerInput>
  }

  export type clientsUpdateManyWithWhereWithoutInsurerInput = {
    where: clientsScalarWhereInput
    data: XOR<clientsUpdateManyMutationInput, clientsUncheckedUpdateManyWithoutInsurerInput>
  }

  export type clientsScalarWhereInput = {
    AND?: clientsScalarWhereInput | clientsScalarWhereInput[]
    OR?: clientsScalarWhereInput[]
    NOT?: clientsScalarWhereInput | clientsScalarWhereInput[]
    id?: IntFilter<"clients"> | number
    client_name?: StringFilter<"clients"> | string
    description?: StringNullableFilter<"clients"> | string | null
    insurer_id?: IntNullableFilter<"clients"> | number | null
  }

  export type uploadsUpsertWithWhereUniqueWithoutInsurersInput = {
    where: uploadsWhereUniqueInput
    update: XOR<uploadsUpdateWithoutInsurersInput, uploadsUncheckedUpdateWithoutInsurersInput>
    create: XOR<uploadsCreateWithoutInsurersInput, uploadsUncheckedCreateWithoutInsurersInput>
  }

  export type uploadsUpdateWithWhereUniqueWithoutInsurersInput = {
    where: uploadsWhereUniqueInput
    data: XOR<uploadsUpdateWithoutInsurersInput, uploadsUncheckedUpdateWithoutInsurersInput>
  }

  export type uploadsUpdateManyWithWhereWithoutInsurersInput = {
    where: uploadsScalarWhereInput
    data: XOR<uploadsUpdateManyMutationInput, uploadsUncheckedUpdateManyWithoutInsurersInput>
  }

  export type uploadsScalarWhereInput = {
    AND?: uploadsScalarWhereInput | uploadsScalarWhereInput[]
    OR?: uploadsScalarWhereInput[]
    NOT?: uploadsScalarWhereInput | uploadsScalarWhereInput[]
    id?: IntFilter<"uploads"> | number
    clientId?: IntFilter<"uploads"> | number
    insurerId?: IntFilter<"uploads"> | number
    year?: StringFilter<"uploads"> | string
    months?: StringNullableFilter<"uploads"> | string | null
    type?: StringFilter<"uploads"> | string
    createdAt?: DateTimeFilter<"uploads"> | Date | string
    updatedAt?: DateTimeFilter<"uploads"> | Date | string
  }

  export type insurersCreateWithoutClientsInput = {
    name: string
    uploads?: uploadsCreateNestedManyWithoutInsurersInput
  }

  export type insurersUncheckedCreateWithoutClientsInput = {
    id?: number
    name: string
    uploads?: uploadsUncheckedCreateNestedManyWithoutInsurersInput
  }

  export type insurersCreateOrConnectWithoutClientsInput = {
    where: insurersWhereUniqueInput
    create: XOR<insurersCreateWithoutClientsInput, insurersUncheckedCreateWithoutClientsInput>
  }

  export type uploadsCreateWithoutClientsInput = {
    year: string
    months?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    insurers: insurersCreateNestedOneWithoutUploadsInput
  }

  export type uploadsUncheckedCreateWithoutClientsInput = {
    id?: number
    insurerId: number
    year: string
    months?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type uploadsCreateOrConnectWithoutClientsInput = {
    where: uploadsWhereUniqueInput
    create: XOR<uploadsCreateWithoutClientsInput, uploadsUncheckedCreateWithoutClientsInput>
  }

  export type uploadsCreateManyClientsInputEnvelope = {
    data: uploadsCreateManyClientsInput | uploadsCreateManyClientsInput[]
    skipDuplicates?: boolean
  }

  export type decksCreateWithoutClientsInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type decksUncheckedCreateWithoutClientsInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type decksCreateOrConnectWithoutClientsInput = {
    where: decksWhereUniqueInput
    create: XOR<decksCreateWithoutClientsInput, decksUncheckedCreateWithoutClientsInput>
  }

  export type decksCreateManyClientsInputEnvelope = {
    data: decksCreateManyClientsInput | decksCreateManyClientsInput[]
    skipDuplicates?: boolean
  }

  export type intellicareMasterlistCreateWithoutClientsInput = {
    PY?: string | null
    ACCOUNT_NO?: string | null
    STATUS?: string | null
    MEMBER_TYPE?: string | null
    RNB?: string | null
    PREEXIST?: number | null
    LIMIT?: number | null
    BIRTHDATE?: Date | string | null
    AGE?: number | null
    RELATION?: string | null
    EE_ID?: string | null
    CARD_NO?: string | null
    COMPANY?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type intellicareMasterlistUncheckedCreateWithoutClientsInput = {
    id?: number
    PY?: string | null
    ACCOUNT_NO?: string | null
    STATUS?: string | null
    MEMBER_TYPE?: string | null
    RNB?: string | null
    PREEXIST?: number | null
    LIMIT?: number | null
    BIRTHDATE?: Date | string | null
    AGE?: number | null
    RELATION?: string | null
    EE_ID?: string | null
    CARD_NO?: string | null
    COMPANY?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type intellicareMasterlistCreateOrConnectWithoutClientsInput = {
    where: intellicareMasterlistWhereUniqueInput
    create: XOR<intellicareMasterlistCreateWithoutClientsInput, intellicareMasterlistUncheckedCreateWithoutClientsInput>
  }

  export type intellicareMasterlistCreateManyClientsInputEnvelope = {
    data: intellicareMasterlistCreateManyClientsInput | intellicareMasterlistCreateManyClientsInput[]
    skipDuplicates?: boolean
  }

  export type maxicareMasterlistCreateWithoutClientsInput = {
    PY?: string | null
    ACCOUNT_NO?: string | null
    STATUS?: string | null
    MEMBER_TYPE?: string | null
    LIMIT?: number | null
    RELATION?: string | null
    EE_ID?: string | null
    CARD_NO?: string | null
    COMPANY?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type maxicareMasterlistUncheckedCreateWithoutClientsInput = {
    id?: number
    PY?: string | null
    ACCOUNT_NO?: string | null
    STATUS?: string | null
    MEMBER_TYPE?: string | null
    LIMIT?: number | null
    RELATION?: string | null
    EE_ID?: string | null
    CARD_NO?: string | null
    COMPANY?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type maxicareMasterlistCreateOrConnectWithoutClientsInput = {
    where: maxicareMasterlistWhereUniqueInput
    create: XOR<maxicareMasterlistCreateWithoutClientsInput, maxicareMasterlistUncheckedCreateWithoutClientsInput>
  }

  export type maxicareMasterlistCreateManyClientsInputEnvelope = {
    data: maxicareMasterlistCreateManyClientsInput | maxicareMasterlistCreateManyClientsInput[]
    skipDuplicates?: boolean
  }

  export type intellicareCreateWithoutClientsInput = {
    PY: string
    Company?: string | null
    Member_Account?: string | null
    Member_Type?: string | null
    ICD_10_Code?: string | null
    Diagnosis?: string | null
    Claim_Type?: string | null
    Admission_Date?: Date | string | null
    Provider_Name?: string | null
    Provider_Type?: string | null
    Approved_Claim_Amount?: number | null
    Class_Plan_Level?: string | null
    Maximum_Benefit_Limit?: number | null
    Date_of_Birth?: Date | string | null
    Relationship?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type intellicareUncheckedCreateWithoutClientsInput = {
    id?: number
    PY: string
    Company?: string | null
    Member_Account?: string | null
    Member_Type?: string | null
    ICD_10_Code?: string | null
    Diagnosis?: string | null
    Claim_Type?: string | null
    Admission_Date?: Date | string | null
    Provider_Name?: string | null
    Provider_Type?: string | null
    Approved_Claim_Amount?: number | null
    Class_Plan_Level?: string | null
    Maximum_Benefit_Limit?: number | null
    Date_of_Birth?: Date | string | null
    Relationship?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type intellicareCreateOrConnectWithoutClientsInput = {
    where: intellicareWhereUniqueInput
    create: XOR<intellicareCreateWithoutClientsInput, intellicareUncheckedCreateWithoutClientsInput>
  }

  export type intellicareCreateManyClientsInputEnvelope = {
    data: intellicareCreateManyClientsInput | intellicareCreateManyClientsInput[]
    skipDuplicates?: boolean
  }

  export type maxicareCreateWithoutClientsInput = {
    PY: string
    Company?: string | null
    Member_Account?: string | null
    Member_Type?: string | null
    ICD_10_Code?: string | null
    Diagnosis?: string | null
    Claim_Type?: string | null
    Admission_Date?: Date | string | null
    Provider_Name?: string | null
    Provider_Type?: string | null
    Approved_Claim_Amount?: number | null
    Relationship?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type maxicareUncheckedCreateWithoutClientsInput = {
    id?: number
    PY: string
    Company?: string | null
    Member_Account?: string | null
    Member_Type?: string | null
    ICD_10_Code?: string | null
    Diagnosis?: string | null
    Claim_Type?: string | null
    Admission_Date?: Date | string | null
    Provider_Name?: string | null
    Provider_Type?: string | null
    Approved_Claim_Amount?: number | null
    Relationship?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type maxicareCreateOrConnectWithoutClientsInput = {
    where: maxicareWhereUniqueInput
    create: XOR<maxicareCreateWithoutClientsInput, maxicareUncheckedCreateWithoutClientsInput>
  }

  export type maxicareCreateManyClientsInputEnvelope = {
    data: maxicareCreateManyClientsInput | maxicareCreateManyClientsInput[]
    skipDuplicates?: boolean
  }

  export type customIllnessesCreateWithoutClientsInput = {
    py?: string | null
    member_type?: string | null
    icd_10_code?: string | null
    diagnosis?: string | null
    claim_amount?: number | null
    percentage_to_total_amount?: Decimal | DecimalJsLike | number | string | null
    claim_count?: number | null
    percentage_to_total_count?: Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type customIllnessesUncheckedCreateWithoutClientsInput = {
    id?: number
    py?: string | null
    member_type?: string | null
    icd_10_code?: string | null
    diagnosis?: string | null
    claim_amount?: number | null
    percentage_to_total_amount?: Decimal | DecimalJsLike | number | string | null
    claim_count?: number | null
    percentage_to_total_count?: Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type customIllnessesCreateOrConnectWithoutClientsInput = {
    where: customIllnessesWhereUniqueInput
    create: XOR<customIllnessesCreateWithoutClientsInput, customIllnessesUncheckedCreateWithoutClientsInput>
  }

  export type customIllnessesCreateManyClientsInputEnvelope = {
    data: customIllnessesCreateManyClientsInput | customIllnessesCreateManyClientsInput[]
    skipDuplicates?: boolean
  }

  export type insurersUpsertWithoutClientsInput = {
    update: XOR<insurersUpdateWithoutClientsInput, insurersUncheckedUpdateWithoutClientsInput>
    create: XOR<insurersCreateWithoutClientsInput, insurersUncheckedCreateWithoutClientsInput>
    where?: insurersWhereInput
  }

  export type insurersUpdateToOneWithWhereWithoutClientsInput = {
    where?: insurersWhereInput
    data: XOR<insurersUpdateWithoutClientsInput, insurersUncheckedUpdateWithoutClientsInput>
  }

  export type insurersUpdateWithoutClientsInput = {
    name?: StringFieldUpdateOperationsInput | string
    uploads?: uploadsUpdateManyWithoutInsurersNestedInput
  }

  export type insurersUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    uploads?: uploadsUncheckedUpdateManyWithoutInsurersNestedInput
  }

  export type uploadsUpsertWithWhereUniqueWithoutClientsInput = {
    where: uploadsWhereUniqueInput
    update: XOR<uploadsUpdateWithoutClientsInput, uploadsUncheckedUpdateWithoutClientsInput>
    create: XOR<uploadsCreateWithoutClientsInput, uploadsUncheckedCreateWithoutClientsInput>
  }

  export type uploadsUpdateWithWhereUniqueWithoutClientsInput = {
    where: uploadsWhereUniqueInput
    data: XOR<uploadsUpdateWithoutClientsInput, uploadsUncheckedUpdateWithoutClientsInput>
  }

  export type uploadsUpdateManyWithWhereWithoutClientsInput = {
    where: uploadsScalarWhereInput
    data: XOR<uploadsUpdateManyMutationInput, uploadsUncheckedUpdateManyWithoutClientsInput>
  }

  export type decksUpsertWithWhereUniqueWithoutClientsInput = {
    where: decksWhereUniqueInput
    update: XOR<decksUpdateWithoutClientsInput, decksUncheckedUpdateWithoutClientsInput>
    create: XOR<decksCreateWithoutClientsInput, decksUncheckedCreateWithoutClientsInput>
  }

  export type decksUpdateWithWhereUniqueWithoutClientsInput = {
    where: decksWhereUniqueInput
    data: XOR<decksUpdateWithoutClientsInput, decksUncheckedUpdateWithoutClientsInput>
  }

  export type decksUpdateManyWithWhereWithoutClientsInput = {
    where: decksScalarWhereInput
    data: XOR<decksUpdateManyMutationInput, decksUncheckedUpdateManyWithoutClientsInput>
  }

  export type decksScalarWhereInput = {
    AND?: decksScalarWhereInput | decksScalarWhereInput[]
    OR?: decksScalarWhereInput[]
    NOT?: decksScalarWhereInput | decksScalarWhereInput[]
    id?: IntFilter<"decks"> | number
    name?: StringFilter<"decks"> | string
    description?: StringFilter<"decks"> | string
    createdAt?: DateTimeFilter<"decks"> | Date | string
    updatedAt?: DateTimeFilter<"decks"> | Date | string
    clientId?: IntFilter<"decks"> | number
  }

  export type intellicareMasterlistUpsertWithWhereUniqueWithoutClientsInput = {
    where: intellicareMasterlistWhereUniqueInput
    update: XOR<intellicareMasterlistUpdateWithoutClientsInput, intellicareMasterlistUncheckedUpdateWithoutClientsInput>
    create: XOR<intellicareMasterlistCreateWithoutClientsInput, intellicareMasterlistUncheckedCreateWithoutClientsInput>
  }

  export type intellicareMasterlistUpdateWithWhereUniqueWithoutClientsInput = {
    where: intellicareMasterlistWhereUniqueInput
    data: XOR<intellicareMasterlistUpdateWithoutClientsInput, intellicareMasterlistUncheckedUpdateWithoutClientsInput>
  }

  export type intellicareMasterlistUpdateManyWithWhereWithoutClientsInput = {
    where: intellicareMasterlistScalarWhereInput
    data: XOR<intellicareMasterlistUpdateManyMutationInput, intellicareMasterlistUncheckedUpdateManyWithoutClientsInput>
  }

  export type intellicareMasterlistScalarWhereInput = {
    AND?: intellicareMasterlistScalarWhereInput | intellicareMasterlistScalarWhereInput[]
    OR?: intellicareMasterlistScalarWhereInput[]
    NOT?: intellicareMasterlistScalarWhereInput | intellicareMasterlistScalarWhereInput[]
    id?: IntFilter<"intellicareMasterlist"> | number
    clientId?: IntFilter<"intellicareMasterlist"> | number
    PY?: StringNullableFilter<"intellicareMasterlist"> | string | null
    ACCOUNT_NO?: StringNullableFilter<"intellicareMasterlist"> | string | null
    STATUS?: StringNullableFilter<"intellicareMasterlist"> | string | null
    MEMBER_TYPE?: StringNullableFilter<"intellicareMasterlist"> | string | null
    RNB?: StringNullableFilter<"intellicareMasterlist"> | string | null
    PREEXIST?: FloatNullableFilter<"intellicareMasterlist"> | number | null
    LIMIT?: FloatNullableFilter<"intellicareMasterlist"> | number | null
    BIRTHDATE?: DateTimeNullableFilter<"intellicareMasterlist"> | Date | string | null
    AGE?: IntNullableFilter<"intellicareMasterlist"> | number | null
    RELATION?: StringNullableFilter<"intellicareMasterlist"> | string | null
    EE_ID?: StringNullableFilter<"intellicareMasterlist"> | string | null
    CARD_NO?: StringNullableFilter<"intellicareMasterlist"> | string | null
    COMPANY?: StringNullableFilter<"intellicareMasterlist"> | string | null
    createdAt?: DateTimeFilter<"intellicareMasterlist"> | Date | string
    updatedAt?: DateTimeFilter<"intellicareMasterlist"> | Date | string
  }

  export type maxicareMasterlistUpsertWithWhereUniqueWithoutClientsInput = {
    where: maxicareMasterlistWhereUniqueInput
    update: XOR<maxicareMasterlistUpdateWithoutClientsInput, maxicareMasterlistUncheckedUpdateWithoutClientsInput>
    create: XOR<maxicareMasterlistCreateWithoutClientsInput, maxicareMasterlistUncheckedCreateWithoutClientsInput>
  }

  export type maxicareMasterlistUpdateWithWhereUniqueWithoutClientsInput = {
    where: maxicareMasterlistWhereUniqueInput
    data: XOR<maxicareMasterlistUpdateWithoutClientsInput, maxicareMasterlistUncheckedUpdateWithoutClientsInput>
  }

  export type maxicareMasterlistUpdateManyWithWhereWithoutClientsInput = {
    where: maxicareMasterlistScalarWhereInput
    data: XOR<maxicareMasterlistUpdateManyMutationInput, maxicareMasterlistUncheckedUpdateManyWithoutClientsInput>
  }

  export type maxicareMasterlistScalarWhereInput = {
    AND?: maxicareMasterlistScalarWhereInput | maxicareMasterlistScalarWhereInput[]
    OR?: maxicareMasterlistScalarWhereInput[]
    NOT?: maxicareMasterlistScalarWhereInput | maxicareMasterlistScalarWhereInput[]
    id?: IntFilter<"maxicareMasterlist"> | number
    clientId?: IntFilter<"maxicareMasterlist"> | number
    PY?: StringNullableFilter<"maxicareMasterlist"> | string | null
    ACCOUNT_NO?: StringNullableFilter<"maxicareMasterlist"> | string | null
    STATUS?: StringNullableFilter<"maxicareMasterlist"> | string | null
    MEMBER_TYPE?: StringNullableFilter<"maxicareMasterlist"> | string | null
    LIMIT?: FloatNullableFilter<"maxicareMasterlist"> | number | null
    RELATION?: StringNullableFilter<"maxicareMasterlist"> | string | null
    EE_ID?: StringNullableFilter<"maxicareMasterlist"> | string | null
    CARD_NO?: StringNullableFilter<"maxicareMasterlist"> | string | null
    COMPANY?: StringNullableFilter<"maxicareMasterlist"> | string | null
    createdAt?: DateTimeFilter<"maxicareMasterlist"> | Date | string
    updatedAt?: DateTimeFilter<"maxicareMasterlist"> | Date | string
  }

  export type intellicareUpsertWithWhereUniqueWithoutClientsInput = {
    where: intellicareWhereUniqueInput
    update: XOR<intellicareUpdateWithoutClientsInput, intellicareUncheckedUpdateWithoutClientsInput>
    create: XOR<intellicareCreateWithoutClientsInput, intellicareUncheckedCreateWithoutClientsInput>
  }

  export type intellicareUpdateWithWhereUniqueWithoutClientsInput = {
    where: intellicareWhereUniqueInput
    data: XOR<intellicareUpdateWithoutClientsInput, intellicareUncheckedUpdateWithoutClientsInput>
  }

  export type intellicareUpdateManyWithWhereWithoutClientsInput = {
    where: intellicareScalarWhereInput
    data: XOR<intellicareUpdateManyMutationInput, intellicareUncheckedUpdateManyWithoutClientsInput>
  }

  export type intellicareScalarWhereInput = {
    AND?: intellicareScalarWhereInput | intellicareScalarWhereInput[]
    OR?: intellicareScalarWhereInput[]
    NOT?: intellicareScalarWhereInput | intellicareScalarWhereInput[]
    id?: IntFilter<"intellicare"> | number
    clientId?: IntFilter<"intellicare"> | number
    PY?: StringFilter<"intellicare"> | string
    Company?: StringNullableFilter<"intellicare"> | string | null
    Member_Account?: StringNullableFilter<"intellicare"> | string | null
    Member_Type?: StringNullableFilter<"intellicare"> | string | null
    ICD_10_Code?: StringNullableFilter<"intellicare"> | string | null
    Diagnosis?: StringNullableFilter<"intellicare"> | string | null
    Claim_Type?: StringNullableFilter<"intellicare"> | string | null
    Admission_Date?: DateTimeNullableFilter<"intellicare"> | Date | string | null
    Provider_Name?: StringNullableFilter<"intellicare"> | string | null
    Provider_Type?: StringNullableFilter<"intellicare"> | string | null
    Approved_Claim_Amount?: FloatNullableFilter<"intellicare"> | number | null
    Class_Plan_Level?: StringNullableFilter<"intellicare"> | string | null
    Maximum_Benefit_Limit?: FloatNullableFilter<"intellicare"> | number | null
    Date_of_Birth?: DateTimeNullableFilter<"intellicare"> | Date | string | null
    Relationship?: StringNullableFilter<"intellicare"> | string | null
    createdAt?: DateTimeFilter<"intellicare"> | Date | string
    updatedAt?: DateTimeFilter<"intellicare"> | Date | string
  }

  export type maxicareUpsertWithWhereUniqueWithoutClientsInput = {
    where: maxicareWhereUniqueInput
    update: XOR<maxicareUpdateWithoutClientsInput, maxicareUncheckedUpdateWithoutClientsInput>
    create: XOR<maxicareCreateWithoutClientsInput, maxicareUncheckedCreateWithoutClientsInput>
  }

  export type maxicareUpdateWithWhereUniqueWithoutClientsInput = {
    where: maxicareWhereUniqueInput
    data: XOR<maxicareUpdateWithoutClientsInput, maxicareUncheckedUpdateWithoutClientsInput>
  }

  export type maxicareUpdateManyWithWhereWithoutClientsInput = {
    where: maxicareScalarWhereInput
    data: XOR<maxicareUpdateManyMutationInput, maxicareUncheckedUpdateManyWithoutClientsInput>
  }

  export type maxicareScalarWhereInput = {
    AND?: maxicareScalarWhereInput | maxicareScalarWhereInput[]
    OR?: maxicareScalarWhereInput[]
    NOT?: maxicareScalarWhereInput | maxicareScalarWhereInput[]
    id?: IntFilter<"maxicare"> | number
    clientId?: IntFilter<"maxicare"> | number
    PY?: StringFilter<"maxicare"> | string
    Company?: StringNullableFilter<"maxicare"> | string | null
    Member_Account?: StringNullableFilter<"maxicare"> | string | null
    Member_Type?: StringNullableFilter<"maxicare"> | string | null
    ICD_10_Code?: StringNullableFilter<"maxicare"> | string | null
    Diagnosis?: StringNullableFilter<"maxicare"> | string | null
    Claim_Type?: StringNullableFilter<"maxicare"> | string | null
    Admission_Date?: DateTimeNullableFilter<"maxicare"> | Date | string | null
    Provider_Name?: StringNullableFilter<"maxicare"> | string | null
    Provider_Type?: StringNullableFilter<"maxicare"> | string | null
    Approved_Claim_Amount?: FloatNullableFilter<"maxicare"> | number | null
    Relationship?: StringNullableFilter<"maxicare"> | string | null
    createdAt?: DateTimeFilter<"maxicare"> | Date | string
    updatedAt?: DateTimeFilter<"maxicare"> | Date | string
  }

  export type customIllnessesUpsertWithWhereUniqueWithoutClientsInput = {
    where: customIllnessesWhereUniqueInput
    update: XOR<customIllnessesUpdateWithoutClientsInput, customIllnessesUncheckedUpdateWithoutClientsInput>
    create: XOR<customIllnessesCreateWithoutClientsInput, customIllnessesUncheckedCreateWithoutClientsInput>
  }

  export type customIllnessesUpdateWithWhereUniqueWithoutClientsInput = {
    where: customIllnessesWhereUniqueInput
    data: XOR<customIllnessesUpdateWithoutClientsInput, customIllnessesUncheckedUpdateWithoutClientsInput>
  }

  export type customIllnessesUpdateManyWithWhereWithoutClientsInput = {
    where: customIllnessesScalarWhereInput
    data: XOR<customIllnessesUpdateManyMutationInput, customIllnessesUncheckedUpdateManyWithoutClientsInput>
  }

  export type customIllnessesScalarWhereInput = {
    AND?: customIllnessesScalarWhereInput | customIllnessesScalarWhereInput[]
    OR?: customIllnessesScalarWhereInput[]
    NOT?: customIllnessesScalarWhereInput | customIllnessesScalarWhereInput[]
    id?: IntFilter<"customIllnesses"> | number
    clientId?: IntFilter<"customIllnesses"> | number
    py?: StringNullableFilter<"customIllnesses"> | string | null
    member_type?: StringNullableFilter<"customIllnesses"> | string | null
    icd_10_code?: StringNullableFilter<"customIllnesses"> | string | null
    diagnosis?: StringNullableFilter<"customIllnesses"> | string | null
    claim_amount?: IntNullableFilter<"customIllnesses"> | number | null
    percentage_to_total_amount?: DecimalNullableFilter<"customIllnesses"> | Decimal | DecimalJsLike | number | string | null
    claim_count?: IntNullableFilter<"customIllnesses"> | number | null
    percentage_to_total_count?: DecimalNullableFilter<"customIllnesses"> | Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: IntNullableFilter<"customIllnesses"> | number | null
    createdAt?: DateTimeFilter<"customIllnesses"> | Date | string
    updatedAt?: DateTimeFilter<"customIllnesses"> | Date | string
  }

  export type clientsCreateWithoutUploadsInput = {
    client_name: string
    description?: string | null
    insurer?: insurersCreateNestedOneWithoutClientsInput
    decks?: decksCreateNestedManyWithoutClientsInput
    intellicareMasterlist?: intellicareMasterlistCreateNestedManyWithoutClientsInput
    maxicareMasterlist?: maxicareMasterlistCreateNestedManyWithoutClientsInput
    intellicare?: intellicareCreateNestedManyWithoutClientsInput
    maxicare?: maxicareCreateNestedManyWithoutClientsInput
    customIllnesses?: customIllnessesCreateNestedManyWithoutClientsInput
  }

  export type clientsUncheckedCreateWithoutUploadsInput = {
    id?: number
    client_name: string
    description?: string | null
    insurer_id?: number | null
    decks?: decksUncheckedCreateNestedManyWithoutClientsInput
    intellicareMasterlist?: intellicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    maxicareMasterlist?: maxicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    intellicare?: intellicareUncheckedCreateNestedManyWithoutClientsInput
    maxicare?: maxicareUncheckedCreateNestedManyWithoutClientsInput
    customIllnesses?: customIllnessesUncheckedCreateNestedManyWithoutClientsInput
  }

  export type clientsCreateOrConnectWithoutUploadsInput = {
    where: clientsWhereUniqueInput
    create: XOR<clientsCreateWithoutUploadsInput, clientsUncheckedCreateWithoutUploadsInput>
  }

  export type insurersCreateWithoutUploadsInput = {
    name: string
    clients?: clientsCreateNestedManyWithoutInsurerInput
  }

  export type insurersUncheckedCreateWithoutUploadsInput = {
    id?: number
    name: string
    clients?: clientsUncheckedCreateNestedManyWithoutInsurerInput
  }

  export type insurersCreateOrConnectWithoutUploadsInput = {
    where: insurersWhereUniqueInput
    create: XOR<insurersCreateWithoutUploadsInput, insurersUncheckedCreateWithoutUploadsInput>
  }

  export type clientsUpsertWithoutUploadsInput = {
    update: XOR<clientsUpdateWithoutUploadsInput, clientsUncheckedUpdateWithoutUploadsInput>
    create: XOR<clientsCreateWithoutUploadsInput, clientsUncheckedCreateWithoutUploadsInput>
    where?: clientsWhereInput
  }

  export type clientsUpdateToOneWithWhereWithoutUploadsInput = {
    where?: clientsWhereInput
    data: XOR<clientsUpdateWithoutUploadsInput, clientsUncheckedUpdateWithoutUploadsInput>
  }

  export type clientsUpdateWithoutUploadsInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer?: insurersUpdateOneWithoutClientsNestedInput
    decks?: decksUpdateManyWithoutClientsNestedInput
    intellicareMasterlist?: intellicareMasterlistUpdateManyWithoutClientsNestedInput
    maxicareMasterlist?: maxicareMasterlistUpdateManyWithoutClientsNestedInput
    intellicare?: intellicareUpdateManyWithoutClientsNestedInput
    maxicare?: maxicareUpdateManyWithoutClientsNestedInput
    customIllnesses?: customIllnessesUpdateManyWithoutClientsNestedInput
  }

  export type clientsUncheckedUpdateWithoutUploadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer_id?: NullableIntFieldUpdateOperationsInput | number | null
    decks?: decksUncheckedUpdateManyWithoutClientsNestedInput
    intellicareMasterlist?: intellicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    maxicareMasterlist?: maxicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    intellicare?: intellicareUncheckedUpdateManyWithoutClientsNestedInput
    maxicare?: maxicareUncheckedUpdateManyWithoutClientsNestedInput
    customIllnesses?: customIllnessesUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type insurersUpsertWithoutUploadsInput = {
    update: XOR<insurersUpdateWithoutUploadsInput, insurersUncheckedUpdateWithoutUploadsInput>
    create: XOR<insurersCreateWithoutUploadsInput, insurersUncheckedCreateWithoutUploadsInput>
    where?: insurersWhereInput
  }

  export type insurersUpdateToOneWithWhereWithoutUploadsInput = {
    where?: insurersWhereInput
    data: XOR<insurersUpdateWithoutUploadsInput, insurersUncheckedUpdateWithoutUploadsInput>
  }

  export type insurersUpdateWithoutUploadsInput = {
    name?: StringFieldUpdateOperationsInput | string
    clients?: clientsUpdateManyWithoutInsurerNestedInput
  }

  export type insurersUncheckedUpdateWithoutUploadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    clients?: clientsUncheckedUpdateManyWithoutInsurerNestedInput
  }

  export type clientsCreateWithoutDecksInput = {
    client_name: string
    description?: string | null
    insurer?: insurersCreateNestedOneWithoutClientsInput
    uploads?: uploadsCreateNestedManyWithoutClientsInput
    intellicareMasterlist?: intellicareMasterlistCreateNestedManyWithoutClientsInput
    maxicareMasterlist?: maxicareMasterlistCreateNestedManyWithoutClientsInput
    intellicare?: intellicareCreateNestedManyWithoutClientsInput
    maxicare?: maxicareCreateNestedManyWithoutClientsInput
    customIllnesses?: customIllnessesCreateNestedManyWithoutClientsInput
  }

  export type clientsUncheckedCreateWithoutDecksInput = {
    id?: number
    client_name: string
    description?: string | null
    insurer_id?: number | null
    uploads?: uploadsUncheckedCreateNestedManyWithoutClientsInput
    intellicareMasterlist?: intellicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    maxicareMasterlist?: maxicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    intellicare?: intellicareUncheckedCreateNestedManyWithoutClientsInput
    maxicare?: maxicareUncheckedCreateNestedManyWithoutClientsInput
    customIllnesses?: customIllnessesUncheckedCreateNestedManyWithoutClientsInput
  }

  export type clientsCreateOrConnectWithoutDecksInput = {
    where: clientsWhereUniqueInput
    create: XOR<clientsCreateWithoutDecksInput, clientsUncheckedCreateWithoutDecksInput>
  }

  export type clientsUpsertWithoutDecksInput = {
    update: XOR<clientsUpdateWithoutDecksInput, clientsUncheckedUpdateWithoutDecksInput>
    create: XOR<clientsCreateWithoutDecksInput, clientsUncheckedCreateWithoutDecksInput>
    where?: clientsWhereInput
  }

  export type clientsUpdateToOneWithWhereWithoutDecksInput = {
    where?: clientsWhereInput
    data: XOR<clientsUpdateWithoutDecksInput, clientsUncheckedUpdateWithoutDecksInput>
  }

  export type clientsUpdateWithoutDecksInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer?: insurersUpdateOneWithoutClientsNestedInput
    uploads?: uploadsUpdateManyWithoutClientsNestedInput
    intellicareMasterlist?: intellicareMasterlistUpdateManyWithoutClientsNestedInput
    maxicareMasterlist?: maxicareMasterlistUpdateManyWithoutClientsNestedInput
    intellicare?: intellicareUpdateManyWithoutClientsNestedInput
    maxicare?: maxicareUpdateManyWithoutClientsNestedInput
    customIllnesses?: customIllnessesUpdateManyWithoutClientsNestedInput
  }

  export type clientsUncheckedUpdateWithoutDecksInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer_id?: NullableIntFieldUpdateOperationsInput | number | null
    uploads?: uploadsUncheckedUpdateManyWithoutClientsNestedInput
    intellicareMasterlist?: intellicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    maxicareMasterlist?: maxicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    intellicare?: intellicareUncheckedUpdateManyWithoutClientsNestedInput
    maxicare?: maxicareUncheckedUpdateManyWithoutClientsNestedInput
    customIllnesses?: customIllnessesUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type clientsCreateWithoutIntellicareMasterlistInput = {
    client_name: string
    description?: string | null
    insurer?: insurersCreateNestedOneWithoutClientsInput
    uploads?: uploadsCreateNestedManyWithoutClientsInput
    decks?: decksCreateNestedManyWithoutClientsInput
    maxicareMasterlist?: maxicareMasterlistCreateNestedManyWithoutClientsInput
    intellicare?: intellicareCreateNestedManyWithoutClientsInput
    maxicare?: maxicareCreateNestedManyWithoutClientsInput
    customIllnesses?: customIllnessesCreateNestedManyWithoutClientsInput
  }

  export type clientsUncheckedCreateWithoutIntellicareMasterlistInput = {
    id?: number
    client_name: string
    description?: string | null
    insurer_id?: number | null
    uploads?: uploadsUncheckedCreateNestedManyWithoutClientsInput
    decks?: decksUncheckedCreateNestedManyWithoutClientsInput
    maxicareMasterlist?: maxicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    intellicare?: intellicareUncheckedCreateNestedManyWithoutClientsInput
    maxicare?: maxicareUncheckedCreateNestedManyWithoutClientsInput
    customIllnesses?: customIllnessesUncheckedCreateNestedManyWithoutClientsInput
  }

  export type clientsCreateOrConnectWithoutIntellicareMasterlistInput = {
    where: clientsWhereUniqueInput
    create: XOR<clientsCreateWithoutIntellicareMasterlistInput, clientsUncheckedCreateWithoutIntellicareMasterlistInput>
  }

  export type clientsUpsertWithoutIntellicareMasterlistInput = {
    update: XOR<clientsUpdateWithoutIntellicareMasterlistInput, clientsUncheckedUpdateWithoutIntellicareMasterlistInput>
    create: XOR<clientsCreateWithoutIntellicareMasterlistInput, clientsUncheckedCreateWithoutIntellicareMasterlistInput>
    where?: clientsWhereInput
  }

  export type clientsUpdateToOneWithWhereWithoutIntellicareMasterlistInput = {
    where?: clientsWhereInput
    data: XOR<clientsUpdateWithoutIntellicareMasterlistInput, clientsUncheckedUpdateWithoutIntellicareMasterlistInput>
  }

  export type clientsUpdateWithoutIntellicareMasterlistInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer?: insurersUpdateOneWithoutClientsNestedInput
    uploads?: uploadsUpdateManyWithoutClientsNestedInput
    decks?: decksUpdateManyWithoutClientsNestedInput
    maxicareMasterlist?: maxicareMasterlistUpdateManyWithoutClientsNestedInput
    intellicare?: intellicareUpdateManyWithoutClientsNestedInput
    maxicare?: maxicareUpdateManyWithoutClientsNestedInput
    customIllnesses?: customIllnessesUpdateManyWithoutClientsNestedInput
  }

  export type clientsUncheckedUpdateWithoutIntellicareMasterlistInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer_id?: NullableIntFieldUpdateOperationsInput | number | null
    uploads?: uploadsUncheckedUpdateManyWithoutClientsNestedInput
    decks?: decksUncheckedUpdateManyWithoutClientsNestedInput
    maxicareMasterlist?: maxicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    intellicare?: intellicareUncheckedUpdateManyWithoutClientsNestedInput
    maxicare?: maxicareUncheckedUpdateManyWithoutClientsNestedInput
    customIllnesses?: customIllnessesUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type clientsCreateWithoutMaxicareMasterlistInput = {
    client_name: string
    description?: string | null
    insurer?: insurersCreateNestedOneWithoutClientsInput
    uploads?: uploadsCreateNestedManyWithoutClientsInput
    decks?: decksCreateNestedManyWithoutClientsInput
    intellicareMasterlist?: intellicareMasterlistCreateNestedManyWithoutClientsInput
    intellicare?: intellicareCreateNestedManyWithoutClientsInput
    maxicare?: maxicareCreateNestedManyWithoutClientsInput
    customIllnesses?: customIllnessesCreateNestedManyWithoutClientsInput
  }

  export type clientsUncheckedCreateWithoutMaxicareMasterlistInput = {
    id?: number
    client_name: string
    description?: string | null
    insurer_id?: number | null
    uploads?: uploadsUncheckedCreateNestedManyWithoutClientsInput
    decks?: decksUncheckedCreateNestedManyWithoutClientsInput
    intellicareMasterlist?: intellicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    intellicare?: intellicareUncheckedCreateNestedManyWithoutClientsInput
    maxicare?: maxicareUncheckedCreateNestedManyWithoutClientsInput
    customIllnesses?: customIllnessesUncheckedCreateNestedManyWithoutClientsInput
  }

  export type clientsCreateOrConnectWithoutMaxicareMasterlistInput = {
    where: clientsWhereUniqueInput
    create: XOR<clientsCreateWithoutMaxicareMasterlistInput, clientsUncheckedCreateWithoutMaxicareMasterlistInput>
  }

  export type clientsUpsertWithoutMaxicareMasterlistInput = {
    update: XOR<clientsUpdateWithoutMaxicareMasterlistInput, clientsUncheckedUpdateWithoutMaxicareMasterlistInput>
    create: XOR<clientsCreateWithoutMaxicareMasterlistInput, clientsUncheckedCreateWithoutMaxicareMasterlistInput>
    where?: clientsWhereInput
  }

  export type clientsUpdateToOneWithWhereWithoutMaxicareMasterlistInput = {
    where?: clientsWhereInput
    data: XOR<clientsUpdateWithoutMaxicareMasterlistInput, clientsUncheckedUpdateWithoutMaxicareMasterlistInput>
  }

  export type clientsUpdateWithoutMaxicareMasterlistInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer?: insurersUpdateOneWithoutClientsNestedInput
    uploads?: uploadsUpdateManyWithoutClientsNestedInput
    decks?: decksUpdateManyWithoutClientsNestedInput
    intellicareMasterlist?: intellicareMasterlistUpdateManyWithoutClientsNestedInput
    intellicare?: intellicareUpdateManyWithoutClientsNestedInput
    maxicare?: maxicareUpdateManyWithoutClientsNestedInput
    customIllnesses?: customIllnessesUpdateManyWithoutClientsNestedInput
  }

  export type clientsUncheckedUpdateWithoutMaxicareMasterlistInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer_id?: NullableIntFieldUpdateOperationsInput | number | null
    uploads?: uploadsUncheckedUpdateManyWithoutClientsNestedInput
    decks?: decksUncheckedUpdateManyWithoutClientsNestedInput
    intellicareMasterlist?: intellicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    intellicare?: intellicareUncheckedUpdateManyWithoutClientsNestedInput
    maxicare?: maxicareUncheckedUpdateManyWithoutClientsNestedInput
    customIllnesses?: customIllnessesUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type clientsCreateWithoutIntellicareInput = {
    client_name: string
    description?: string | null
    insurer?: insurersCreateNestedOneWithoutClientsInput
    uploads?: uploadsCreateNestedManyWithoutClientsInput
    decks?: decksCreateNestedManyWithoutClientsInput
    intellicareMasterlist?: intellicareMasterlistCreateNestedManyWithoutClientsInput
    maxicareMasterlist?: maxicareMasterlistCreateNestedManyWithoutClientsInput
    maxicare?: maxicareCreateNestedManyWithoutClientsInput
    customIllnesses?: customIllnessesCreateNestedManyWithoutClientsInput
  }

  export type clientsUncheckedCreateWithoutIntellicareInput = {
    id?: number
    client_name: string
    description?: string | null
    insurer_id?: number | null
    uploads?: uploadsUncheckedCreateNestedManyWithoutClientsInput
    decks?: decksUncheckedCreateNestedManyWithoutClientsInput
    intellicareMasterlist?: intellicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    maxicareMasterlist?: maxicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    maxicare?: maxicareUncheckedCreateNestedManyWithoutClientsInput
    customIllnesses?: customIllnessesUncheckedCreateNestedManyWithoutClientsInput
  }

  export type clientsCreateOrConnectWithoutIntellicareInput = {
    where: clientsWhereUniqueInput
    create: XOR<clientsCreateWithoutIntellicareInput, clientsUncheckedCreateWithoutIntellicareInput>
  }

  export type clientsUpsertWithoutIntellicareInput = {
    update: XOR<clientsUpdateWithoutIntellicareInput, clientsUncheckedUpdateWithoutIntellicareInput>
    create: XOR<clientsCreateWithoutIntellicareInput, clientsUncheckedCreateWithoutIntellicareInput>
    where?: clientsWhereInput
  }

  export type clientsUpdateToOneWithWhereWithoutIntellicareInput = {
    where?: clientsWhereInput
    data: XOR<clientsUpdateWithoutIntellicareInput, clientsUncheckedUpdateWithoutIntellicareInput>
  }

  export type clientsUpdateWithoutIntellicareInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer?: insurersUpdateOneWithoutClientsNestedInput
    uploads?: uploadsUpdateManyWithoutClientsNestedInput
    decks?: decksUpdateManyWithoutClientsNestedInput
    intellicareMasterlist?: intellicareMasterlistUpdateManyWithoutClientsNestedInput
    maxicareMasterlist?: maxicareMasterlistUpdateManyWithoutClientsNestedInput
    maxicare?: maxicareUpdateManyWithoutClientsNestedInput
    customIllnesses?: customIllnessesUpdateManyWithoutClientsNestedInput
  }

  export type clientsUncheckedUpdateWithoutIntellicareInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer_id?: NullableIntFieldUpdateOperationsInput | number | null
    uploads?: uploadsUncheckedUpdateManyWithoutClientsNestedInput
    decks?: decksUncheckedUpdateManyWithoutClientsNestedInput
    intellicareMasterlist?: intellicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    maxicareMasterlist?: maxicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    maxicare?: maxicareUncheckedUpdateManyWithoutClientsNestedInput
    customIllnesses?: customIllnessesUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type clientsCreateWithoutMaxicareInput = {
    client_name: string
    description?: string | null
    insurer?: insurersCreateNestedOneWithoutClientsInput
    uploads?: uploadsCreateNestedManyWithoutClientsInput
    decks?: decksCreateNestedManyWithoutClientsInput
    intellicareMasterlist?: intellicareMasterlistCreateNestedManyWithoutClientsInput
    maxicareMasterlist?: maxicareMasterlistCreateNestedManyWithoutClientsInput
    intellicare?: intellicareCreateNestedManyWithoutClientsInput
    customIllnesses?: customIllnessesCreateNestedManyWithoutClientsInput
  }

  export type clientsUncheckedCreateWithoutMaxicareInput = {
    id?: number
    client_name: string
    description?: string | null
    insurer_id?: number | null
    uploads?: uploadsUncheckedCreateNestedManyWithoutClientsInput
    decks?: decksUncheckedCreateNestedManyWithoutClientsInput
    intellicareMasterlist?: intellicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    maxicareMasterlist?: maxicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    intellicare?: intellicareUncheckedCreateNestedManyWithoutClientsInput
    customIllnesses?: customIllnessesUncheckedCreateNestedManyWithoutClientsInput
  }

  export type clientsCreateOrConnectWithoutMaxicareInput = {
    where: clientsWhereUniqueInput
    create: XOR<clientsCreateWithoutMaxicareInput, clientsUncheckedCreateWithoutMaxicareInput>
  }

  export type clientsUpsertWithoutMaxicareInput = {
    update: XOR<clientsUpdateWithoutMaxicareInput, clientsUncheckedUpdateWithoutMaxicareInput>
    create: XOR<clientsCreateWithoutMaxicareInput, clientsUncheckedCreateWithoutMaxicareInput>
    where?: clientsWhereInput
  }

  export type clientsUpdateToOneWithWhereWithoutMaxicareInput = {
    where?: clientsWhereInput
    data: XOR<clientsUpdateWithoutMaxicareInput, clientsUncheckedUpdateWithoutMaxicareInput>
  }

  export type clientsUpdateWithoutMaxicareInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer?: insurersUpdateOneWithoutClientsNestedInput
    uploads?: uploadsUpdateManyWithoutClientsNestedInput
    decks?: decksUpdateManyWithoutClientsNestedInput
    intellicareMasterlist?: intellicareMasterlistUpdateManyWithoutClientsNestedInput
    maxicareMasterlist?: maxicareMasterlistUpdateManyWithoutClientsNestedInput
    intellicare?: intellicareUpdateManyWithoutClientsNestedInput
    customIllnesses?: customIllnessesUpdateManyWithoutClientsNestedInput
  }

  export type clientsUncheckedUpdateWithoutMaxicareInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer_id?: NullableIntFieldUpdateOperationsInput | number | null
    uploads?: uploadsUncheckedUpdateManyWithoutClientsNestedInput
    decks?: decksUncheckedUpdateManyWithoutClientsNestedInput
    intellicareMasterlist?: intellicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    maxicareMasterlist?: maxicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    intellicare?: intellicareUncheckedUpdateManyWithoutClientsNestedInput
    customIllnesses?: customIllnessesUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type clientsCreateWithoutCustomIllnessesInput = {
    client_name: string
    description?: string | null
    insurer?: insurersCreateNestedOneWithoutClientsInput
    uploads?: uploadsCreateNestedManyWithoutClientsInput
    decks?: decksCreateNestedManyWithoutClientsInput
    intellicareMasterlist?: intellicareMasterlistCreateNestedManyWithoutClientsInput
    maxicareMasterlist?: maxicareMasterlistCreateNestedManyWithoutClientsInput
    intellicare?: intellicareCreateNestedManyWithoutClientsInput
    maxicare?: maxicareCreateNestedManyWithoutClientsInput
  }

  export type clientsUncheckedCreateWithoutCustomIllnessesInput = {
    id?: number
    client_name: string
    description?: string | null
    insurer_id?: number | null
    uploads?: uploadsUncheckedCreateNestedManyWithoutClientsInput
    decks?: decksUncheckedCreateNestedManyWithoutClientsInput
    intellicareMasterlist?: intellicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    maxicareMasterlist?: maxicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    intellicare?: intellicareUncheckedCreateNestedManyWithoutClientsInput
    maxicare?: maxicareUncheckedCreateNestedManyWithoutClientsInput
  }

  export type clientsCreateOrConnectWithoutCustomIllnessesInput = {
    where: clientsWhereUniqueInput
    create: XOR<clientsCreateWithoutCustomIllnessesInput, clientsUncheckedCreateWithoutCustomIllnessesInput>
  }

  export type clientsUpsertWithoutCustomIllnessesInput = {
    update: XOR<clientsUpdateWithoutCustomIllnessesInput, clientsUncheckedUpdateWithoutCustomIllnessesInput>
    create: XOR<clientsCreateWithoutCustomIllnessesInput, clientsUncheckedCreateWithoutCustomIllnessesInput>
    where?: clientsWhereInput
  }

  export type clientsUpdateToOneWithWhereWithoutCustomIllnessesInput = {
    where?: clientsWhereInput
    data: XOR<clientsUpdateWithoutCustomIllnessesInput, clientsUncheckedUpdateWithoutCustomIllnessesInput>
  }

  export type clientsUpdateWithoutCustomIllnessesInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer?: insurersUpdateOneWithoutClientsNestedInput
    uploads?: uploadsUpdateManyWithoutClientsNestedInput
    decks?: decksUpdateManyWithoutClientsNestedInput
    intellicareMasterlist?: intellicareMasterlistUpdateManyWithoutClientsNestedInput
    maxicareMasterlist?: maxicareMasterlistUpdateManyWithoutClientsNestedInput
    intellicare?: intellicareUpdateManyWithoutClientsNestedInput
    maxicare?: maxicareUpdateManyWithoutClientsNestedInput
  }

  export type clientsUncheckedUpdateWithoutCustomIllnessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer_id?: NullableIntFieldUpdateOperationsInput | number | null
    uploads?: uploadsUncheckedUpdateManyWithoutClientsNestedInput
    decks?: decksUncheckedUpdateManyWithoutClientsNestedInput
    intellicareMasterlist?: intellicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    maxicareMasterlist?: maxicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    intellicare?: intellicareUncheckedUpdateManyWithoutClientsNestedInput
    maxicare?: maxicareUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type clientsCreateManyInsurerInput = {
    id?: number
    client_name: string
    description?: string | null
  }

  export type uploadsCreateManyInsurersInput = {
    id?: number
    clientId: number
    year: string
    months?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type clientsUpdateWithoutInsurerInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    uploads?: uploadsUpdateManyWithoutClientsNestedInput
    decks?: decksUpdateManyWithoutClientsNestedInput
    intellicareMasterlist?: intellicareMasterlistUpdateManyWithoutClientsNestedInput
    maxicareMasterlist?: maxicareMasterlistUpdateManyWithoutClientsNestedInput
    intellicare?: intellicareUpdateManyWithoutClientsNestedInput
    maxicare?: maxicareUpdateManyWithoutClientsNestedInput
    customIllnesses?: customIllnessesUpdateManyWithoutClientsNestedInput
  }

  export type clientsUncheckedUpdateWithoutInsurerInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    uploads?: uploadsUncheckedUpdateManyWithoutClientsNestedInput
    decks?: decksUncheckedUpdateManyWithoutClientsNestedInput
    intellicareMasterlist?: intellicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    maxicareMasterlist?: maxicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    intellicare?: intellicareUncheckedUpdateManyWithoutClientsNestedInput
    maxicare?: maxicareUncheckedUpdateManyWithoutClientsNestedInput
    customIllnesses?: customIllnessesUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type clientsUncheckedUpdateManyWithoutInsurerInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type uploadsUpdateWithoutInsurersInput = {
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: clientsUpdateOneRequiredWithoutUploadsNestedInput
  }

  export type uploadsUncheckedUpdateWithoutInsurersInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type uploadsUncheckedUpdateManyWithoutInsurersInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type uploadsCreateManyClientsInput = {
    id?: number
    insurerId: number
    year: string
    months?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type decksCreateManyClientsInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type intellicareMasterlistCreateManyClientsInput = {
    id?: number
    PY?: string | null
    ACCOUNT_NO?: string | null
    STATUS?: string | null
    MEMBER_TYPE?: string | null
    RNB?: string | null
    PREEXIST?: number | null
    LIMIT?: number | null
    BIRTHDATE?: Date | string | null
    AGE?: number | null
    RELATION?: string | null
    EE_ID?: string | null
    CARD_NO?: string | null
    COMPANY?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type maxicareMasterlistCreateManyClientsInput = {
    id?: number
    PY?: string | null
    ACCOUNT_NO?: string | null
    STATUS?: string | null
    MEMBER_TYPE?: string | null
    LIMIT?: number | null
    RELATION?: string | null
    EE_ID?: string | null
    CARD_NO?: string | null
    COMPANY?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type intellicareCreateManyClientsInput = {
    id?: number
    PY: string
    Company?: string | null
    Member_Account?: string | null
    Member_Type?: string | null
    ICD_10_Code?: string | null
    Diagnosis?: string | null
    Claim_Type?: string | null
    Admission_Date?: Date | string | null
    Provider_Name?: string | null
    Provider_Type?: string | null
    Approved_Claim_Amount?: number | null
    Class_Plan_Level?: string | null
    Maximum_Benefit_Limit?: number | null
    Date_of_Birth?: Date | string | null
    Relationship?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type maxicareCreateManyClientsInput = {
    id?: number
    PY: string
    Company?: string | null
    Member_Account?: string | null
    Member_Type?: string | null
    ICD_10_Code?: string | null
    Diagnosis?: string | null
    Claim_Type?: string | null
    Admission_Date?: Date | string | null
    Provider_Name?: string | null
    Provider_Type?: string | null
    Approved_Claim_Amount?: number | null
    Relationship?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type customIllnessesCreateManyClientsInput = {
    id?: number
    py?: string | null
    member_type?: string | null
    icd_10_code?: string | null
    diagnosis?: string | null
    claim_amount?: number | null
    percentage_to_total_amount?: Decimal | DecimalJsLike | number | string | null
    claim_count?: number | null
    percentage_to_total_count?: Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type uploadsUpdateWithoutClientsInput = {
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    insurers?: insurersUpdateOneRequiredWithoutUploadsNestedInput
  }

  export type uploadsUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    insurerId?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type uploadsUncheckedUpdateManyWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    insurerId?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type decksUpdateWithoutClientsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type decksUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type decksUncheckedUpdateManyWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type intellicareMasterlistUpdateWithoutClientsInput = {
    PY?: NullableStringFieldUpdateOperationsInput | string | null
    ACCOUNT_NO?: NullableStringFieldUpdateOperationsInput | string | null
    STATUS?: NullableStringFieldUpdateOperationsInput | string | null
    MEMBER_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    RNB?: NullableStringFieldUpdateOperationsInput | string | null
    PREEXIST?: NullableFloatFieldUpdateOperationsInput | number | null
    LIMIT?: NullableFloatFieldUpdateOperationsInput | number | null
    BIRTHDATE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AGE?: NullableIntFieldUpdateOperationsInput | number | null
    RELATION?: NullableStringFieldUpdateOperationsInput | string | null
    EE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    CARD_NO?: NullableStringFieldUpdateOperationsInput | string | null
    COMPANY?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type intellicareMasterlistUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    PY?: NullableStringFieldUpdateOperationsInput | string | null
    ACCOUNT_NO?: NullableStringFieldUpdateOperationsInput | string | null
    STATUS?: NullableStringFieldUpdateOperationsInput | string | null
    MEMBER_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    RNB?: NullableStringFieldUpdateOperationsInput | string | null
    PREEXIST?: NullableFloatFieldUpdateOperationsInput | number | null
    LIMIT?: NullableFloatFieldUpdateOperationsInput | number | null
    BIRTHDATE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AGE?: NullableIntFieldUpdateOperationsInput | number | null
    RELATION?: NullableStringFieldUpdateOperationsInput | string | null
    EE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    CARD_NO?: NullableStringFieldUpdateOperationsInput | string | null
    COMPANY?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type intellicareMasterlistUncheckedUpdateManyWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    PY?: NullableStringFieldUpdateOperationsInput | string | null
    ACCOUNT_NO?: NullableStringFieldUpdateOperationsInput | string | null
    STATUS?: NullableStringFieldUpdateOperationsInput | string | null
    MEMBER_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    RNB?: NullableStringFieldUpdateOperationsInput | string | null
    PREEXIST?: NullableFloatFieldUpdateOperationsInput | number | null
    LIMIT?: NullableFloatFieldUpdateOperationsInput | number | null
    BIRTHDATE?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AGE?: NullableIntFieldUpdateOperationsInput | number | null
    RELATION?: NullableStringFieldUpdateOperationsInput | string | null
    EE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    CARD_NO?: NullableStringFieldUpdateOperationsInput | string | null
    COMPANY?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maxicareMasterlistUpdateWithoutClientsInput = {
    PY?: NullableStringFieldUpdateOperationsInput | string | null
    ACCOUNT_NO?: NullableStringFieldUpdateOperationsInput | string | null
    STATUS?: NullableStringFieldUpdateOperationsInput | string | null
    MEMBER_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    LIMIT?: NullableFloatFieldUpdateOperationsInput | number | null
    RELATION?: NullableStringFieldUpdateOperationsInput | string | null
    EE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    CARD_NO?: NullableStringFieldUpdateOperationsInput | string | null
    COMPANY?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maxicareMasterlistUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    PY?: NullableStringFieldUpdateOperationsInput | string | null
    ACCOUNT_NO?: NullableStringFieldUpdateOperationsInput | string | null
    STATUS?: NullableStringFieldUpdateOperationsInput | string | null
    MEMBER_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    LIMIT?: NullableFloatFieldUpdateOperationsInput | number | null
    RELATION?: NullableStringFieldUpdateOperationsInput | string | null
    EE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    CARD_NO?: NullableStringFieldUpdateOperationsInput | string | null
    COMPANY?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maxicareMasterlistUncheckedUpdateManyWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    PY?: NullableStringFieldUpdateOperationsInput | string | null
    ACCOUNT_NO?: NullableStringFieldUpdateOperationsInput | string | null
    STATUS?: NullableStringFieldUpdateOperationsInput | string | null
    MEMBER_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    LIMIT?: NullableFloatFieldUpdateOperationsInput | number | null
    RELATION?: NullableStringFieldUpdateOperationsInput | string | null
    EE_ID?: NullableStringFieldUpdateOperationsInput | string | null
    CARD_NO?: NullableStringFieldUpdateOperationsInput | string | null
    COMPANY?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type intellicareUpdateWithoutClientsInput = {
    PY?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Account?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Type?: NullableStringFieldUpdateOperationsInput | string | null
    ICD_10_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    Claim_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Admission_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Provider_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Provider_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Approved_Claim_Amount?: NullableFloatFieldUpdateOperationsInput | number | null
    Class_Plan_Level?: NullableStringFieldUpdateOperationsInput | string | null
    Maximum_Benefit_Limit?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_of_Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type intellicareUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    PY?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Account?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Type?: NullableStringFieldUpdateOperationsInput | string | null
    ICD_10_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    Claim_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Admission_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Provider_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Provider_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Approved_Claim_Amount?: NullableFloatFieldUpdateOperationsInput | number | null
    Class_Plan_Level?: NullableStringFieldUpdateOperationsInput | string | null
    Maximum_Benefit_Limit?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_of_Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type intellicareUncheckedUpdateManyWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    PY?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Account?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Type?: NullableStringFieldUpdateOperationsInput | string | null
    ICD_10_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    Claim_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Admission_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Provider_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Provider_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Approved_Claim_Amount?: NullableFloatFieldUpdateOperationsInput | number | null
    Class_Plan_Level?: NullableStringFieldUpdateOperationsInput | string | null
    Maximum_Benefit_Limit?: NullableFloatFieldUpdateOperationsInput | number | null
    Date_of_Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maxicareUpdateWithoutClientsInput = {
    PY?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Account?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Type?: NullableStringFieldUpdateOperationsInput | string | null
    ICD_10_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    Claim_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Admission_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Provider_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Provider_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Approved_Claim_Amount?: NullableFloatFieldUpdateOperationsInput | number | null
    Relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maxicareUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    PY?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Account?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Type?: NullableStringFieldUpdateOperationsInput | string | null
    ICD_10_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    Claim_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Admission_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Provider_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Provider_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Approved_Claim_Amount?: NullableFloatFieldUpdateOperationsInput | number | null
    Relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type maxicareUncheckedUpdateManyWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    PY?: StringFieldUpdateOperationsInput | string
    Company?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Account?: NullableStringFieldUpdateOperationsInput | string | null
    Member_Type?: NullableStringFieldUpdateOperationsInput | string | null
    ICD_10_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    Claim_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Admission_Date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Provider_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Provider_Type?: NullableStringFieldUpdateOperationsInput | string | null
    Approved_Claim_Amount?: NullableFloatFieldUpdateOperationsInput | number | null
    Relationship?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customIllnessesUpdateWithoutClientsInput = {
    py?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    icd_10_code?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    claim_amount?: NullableIntFieldUpdateOperationsInput | number | null
    percentage_to_total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    claim_count?: NullableIntFieldUpdateOperationsInput | number | null
    percentage_to_total_count?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customIllnessesUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    py?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    icd_10_code?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    claim_amount?: NullableIntFieldUpdateOperationsInput | number | null
    percentage_to_total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    claim_count?: NullableIntFieldUpdateOperationsInput | number | null
    percentage_to_total_count?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customIllnessesUncheckedUpdateManyWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    py?: NullableStringFieldUpdateOperationsInput | string | null
    member_type?: NullableStringFieldUpdateOperationsInput | string | null
    icd_10_code?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    claim_amount?: NullableIntFieldUpdateOperationsInput | number | null
    percentage_to_total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    claim_count?: NullableIntFieldUpdateOperationsInput | number | null
    percentage_to_total_count?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}