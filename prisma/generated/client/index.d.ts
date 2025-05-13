
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Insurers
 * 
 */
export type Insurers = $Result.DefaultSelection<Prisma.$InsurersPayload>
/**
 * Model Clients
 * 
 */
export type Clients = $Result.DefaultSelection<Prisma.$ClientsPayload>
/**
 * Model Uploads
 * 
 */
export type Uploads = $Result.DefaultSelection<Prisma.$UploadsPayload>
/**
 * Model Decks
 * 
 */
export type Decks = $Result.DefaultSelection<Prisma.$DecksPayload>
/**
 * Model IntellicareMasterlist
 * 
 */
export type IntellicareMasterlist = $Result.DefaultSelection<Prisma.$IntellicareMasterlistPayload>
/**
 * Model MaxicareMasterlist
 * 
 */
export type MaxicareMasterlist = $Result.DefaultSelection<Prisma.$MaxicareMasterlistPayload>
/**
 * Model Intellicare
 * 
 */
export type Intellicare = $Result.DefaultSelection<Prisma.$IntellicarePayload>
/**
 * Model Maxicare
 * 
 */
export type Maxicare = $Result.DefaultSelection<Prisma.$MaxicarePayload>
/**
 * Model CustomIllnesses
 * 
 */
export type CustomIllnesses = $Result.DefaultSelection<Prisma.$CustomIllnessesPayload>

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.insurers`: Exposes CRUD operations for the **Insurers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Insurers
    * const insurers = await prisma.insurers.findMany()
    * ```
    */
  get insurers(): Prisma.InsurersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clients`: Exposes CRUD operations for the **Clients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.clients.findMany()
    * ```
    */
  get clients(): Prisma.ClientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uploads`: Exposes CRUD operations for the **Uploads** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Uploads
    * const uploads = await prisma.uploads.findMany()
    * ```
    */
  get uploads(): Prisma.UploadsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.decks`: Exposes CRUD operations for the **Decks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Decks
    * const decks = await prisma.decks.findMany()
    * ```
    */
  get decks(): Prisma.DecksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.intellicareMasterlist`: Exposes CRUD operations for the **IntellicareMasterlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntellicareMasterlists
    * const intellicareMasterlists = await prisma.intellicareMasterlist.findMany()
    * ```
    */
  get intellicareMasterlist(): Prisma.IntellicareMasterlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maxicareMasterlist`: Exposes CRUD operations for the **MaxicareMasterlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaxicareMasterlists
    * const maxicareMasterlists = await prisma.maxicareMasterlist.findMany()
    * ```
    */
  get maxicareMasterlist(): Prisma.MaxicareMasterlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.intellicare`: Exposes CRUD operations for the **Intellicare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Intellicares
    * const intellicares = await prisma.intellicare.findMany()
    * ```
    */
  get intellicare(): Prisma.IntellicareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maxicare`: Exposes CRUD operations for the **Maxicare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maxicares
    * const maxicares = await prisma.maxicare.findMany()
    * ```
    */
  get maxicare(): Prisma.MaxicareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customIllnesses`: Exposes CRUD operations for the **CustomIllnesses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomIllnesses
    * const customIllnesses = await prisma.customIllnesses.findMany()
    * ```
    */
  get customIllnesses(): Prisma.CustomIllnessesDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Insurers: 'Insurers',
    Clients: 'Clients',
    Uploads: 'Uploads',
    Decks: 'Decks',
    IntellicareMasterlist: 'IntellicareMasterlist',
    MaxicareMasterlist: 'MaxicareMasterlist',
    Intellicare: 'Intellicare',
    Maxicare: 'Maxicare',
    CustomIllnesses: 'CustomIllnesses'
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
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Insurers: {
        payload: Prisma.$InsurersPayload<ExtArgs>
        fields: Prisma.InsurersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InsurersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InsurersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurersPayload>
          }
          findFirst: {
            args: Prisma.InsurersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InsurersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurersPayload>
          }
          findMany: {
            args: Prisma.InsurersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurersPayload>[]
          }
          create: {
            args: Prisma.InsurersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurersPayload>
          }
          createMany: {
            args: Prisma.InsurersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InsurersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurersPayload>
          }
          update: {
            args: Prisma.InsurersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurersPayload>
          }
          deleteMany: {
            args: Prisma.InsurersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InsurersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InsurersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsurersPayload>
          }
          aggregate: {
            args: Prisma.InsurersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsurers>
          }
          groupBy: {
            args: Prisma.InsurersGroupByArgs<ExtArgs>
            result: $Utils.Optional<InsurersGroupByOutputType>[]
          }
          count: {
            args: Prisma.InsurersCountArgs<ExtArgs>
            result: $Utils.Optional<InsurersCountAggregateOutputType> | number
          }
        }
      }
      Clients: {
        payload: Prisma.$ClientsPayload<ExtArgs>
        fields: Prisma.ClientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          findFirst: {
            args: Prisma.ClientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          findMany: {
            args: Prisma.ClientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>[]
          }
          create: {
            args: Prisma.ClientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          createMany: {
            args: Prisma.ClientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          update: {
            args: Prisma.ClientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          deleteMany: {
            args: Prisma.ClientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          aggregate: {
            args: Prisma.ClientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClients>
          }
          groupBy: {
            args: Prisma.ClientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientsCountArgs<ExtArgs>
            result: $Utils.Optional<ClientsCountAggregateOutputType> | number
          }
        }
      }
      Uploads: {
        payload: Prisma.$UploadsPayload<ExtArgs>
        fields: Prisma.UploadsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UploadsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UploadsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadsPayload>
          }
          findFirst: {
            args: Prisma.UploadsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UploadsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadsPayload>
          }
          findMany: {
            args: Prisma.UploadsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadsPayload>[]
          }
          create: {
            args: Prisma.UploadsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadsPayload>
          }
          createMany: {
            args: Prisma.UploadsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UploadsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadsPayload>
          }
          update: {
            args: Prisma.UploadsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadsPayload>
          }
          deleteMany: {
            args: Prisma.UploadsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UploadsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UploadsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadsPayload>
          }
          aggregate: {
            args: Prisma.UploadsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUploads>
          }
          groupBy: {
            args: Prisma.UploadsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UploadsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UploadsCountArgs<ExtArgs>
            result: $Utils.Optional<UploadsCountAggregateOutputType> | number
          }
        }
      }
      Decks: {
        payload: Prisma.$DecksPayload<ExtArgs>
        fields: Prisma.DecksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DecksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DecksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload>
          }
          findFirst: {
            args: Prisma.DecksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DecksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload>
          }
          findMany: {
            args: Prisma.DecksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload>[]
          }
          create: {
            args: Prisma.DecksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload>
          }
          createMany: {
            args: Prisma.DecksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DecksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload>
          }
          update: {
            args: Prisma.DecksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload>
          }
          deleteMany: {
            args: Prisma.DecksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DecksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DecksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecksPayload>
          }
          aggregate: {
            args: Prisma.DecksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDecks>
          }
          groupBy: {
            args: Prisma.DecksGroupByArgs<ExtArgs>
            result: $Utils.Optional<DecksGroupByOutputType>[]
          }
          count: {
            args: Prisma.DecksCountArgs<ExtArgs>
            result: $Utils.Optional<DecksCountAggregateOutputType> | number
          }
        }
      }
      IntellicareMasterlist: {
        payload: Prisma.$IntellicareMasterlistPayload<ExtArgs>
        fields: Prisma.IntellicareMasterlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntellicareMasterlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntellicareMasterlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntellicareMasterlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntellicareMasterlistPayload>
          }
          findFirst: {
            args: Prisma.IntellicareMasterlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntellicareMasterlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntellicareMasterlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntellicareMasterlistPayload>
          }
          findMany: {
            args: Prisma.IntellicareMasterlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntellicareMasterlistPayload>[]
          }
          create: {
            args: Prisma.IntellicareMasterlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntellicareMasterlistPayload>
          }
          createMany: {
            args: Prisma.IntellicareMasterlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IntellicareMasterlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntellicareMasterlistPayload>
          }
          update: {
            args: Prisma.IntellicareMasterlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntellicareMasterlistPayload>
          }
          deleteMany: {
            args: Prisma.IntellicareMasterlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntellicareMasterlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IntellicareMasterlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntellicareMasterlistPayload>
          }
          aggregate: {
            args: Prisma.IntellicareMasterlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntellicareMasterlist>
          }
          groupBy: {
            args: Prisma.IntellicareMasterlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntellicareMasterlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntellicareMasterlistCountArgs<ExtArgs>
            result: $Utils.Optional<IntellicareMasterlistCountAggregateOutputType> | number
          }
        }
      }
      MaxicareMasterlist: {
        payload: Prisma.$MaxicareMasterlistPayload<ExtArgs>
        fields: Prisma.MaxicareMasterlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaxicareMasterlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaxicareMasterlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaxicareMasterlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaxicareMasterlistPayload>
          }
          findFirst: {
            args: Prisma.MaxicareMasterlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaxicareMasterlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaxicareMasterlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaxicareMasterlistPayload>
          }
          findMany: {
            args: Prisma.MaxicareMasterlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaxicareMasterlistPayload>[]
          }
          create: {
            args: Prisma.MaxicareMasterlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaxicareMasterlistPayload>
          }
          createMany: {
            args: Prisma.MaxicareMasterlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MaxicareMasterlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaxicareMasterlistPayload>
          }
          update: {
            args: Prisma.MaxicareMasterlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaxicareMasterlistPayload>
          }
          deleteMany: {
            args: Prisma.MaxicareMasterlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaxicareMasterlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaxicareMasterlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaxicareMasterlistPayload>
          }
          aggregate: {
            args: Prisma.MaxicareMasterlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaxicareMasterlist>
          }
          groupBy: {
            args: Prisma.MaxicareMasterlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaxicareMasterlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaxicareMasterlistCountArgs<ExtArgs>
            result: $Utils.Optional<MaxicareMasterlistCountAggregateOutputType> | number
          }
        }
      }
      Intellicare: {
        payload: Prisma.$IntellicarePayload<ExtArgs>
        fields: Prisma.IntellicareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntellicareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntellicarePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntellicareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntellicarePayload>
          }
          findFirst: {
            args: Prisma.IntellicareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntellicarePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntellicareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntellicarePayload>
          }
          findMany: {
            args: Prisma.IntellicareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntellicarePayload>[]
          }
          create: {
            args: Prisma.IntellicareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntellicarePayload>
          }
          createMany: {
            args: Prisma.IntellicareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IntellicareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntellicarePayload>
          }
          update: {
            args: Prisma.IntellicareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntellicarePayload>
          }
          deleteMany: {
            args: Prisma.IntellicareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntellicareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IntellicareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntellicarePayload>
          }
          aggregate: {
            args: Prisma.IntellicareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntellicare>
          }
          groupBy: {
            args: Prisma.IntellicareGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntellicareGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntellicareCountArgs<ExtArgs>
            result: $Utils.Optional<IntellicareCountAggregateOutputType> | number
          }
        }
      }
      Maxicare: {
        payload: Prisma.$MaxicarePayload<ExtArgs>
        fields: Prisma.MaxicareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaxicareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaxicarePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaxicareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaxicarePayload>
          }
          findFirst: {
            args: Prisma.MaxicareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaxicarePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaxicareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaxicarePayload>
          }
          findMany: {
            args: Prisma.MaxicareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaxicarePayload>[]
          }
          create: {
            args: Prisma.MaxicareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaxicarePayload>
          }
          createMany: {
            args: Prisma.MaxicareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MaxicareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaxicarePayload>
          }
          update: {
            args: Prisma.MaxicareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaxicarePayload>
          }
          deleteMany: {
            args: Prisma.MaxicareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaxicareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaxicareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaxicarePayload>
          }
          aggregate: {
            args: Prisma.MaxicareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaxicare>
          }
          groupBy: {
            args: Prisma.MaxicareGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaxicareGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaxicareCountArgs<ExtArgs>
            result: $Utils.Optional<MaxicareCountAggregateOutputType> | number
          }
        }
      }
      CustomIllnesses: {
        payload: Prisma.$CustomIllnessesPayload<ExtArgs>
        fields: Prisma.CustomIllnessesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomIllnessesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIllnessesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomIllnessesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIllnessesPayload>
          }
          findFirst: {
            args: Prisma.CustomIllnessesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIllnessesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomIllnessesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIllnessesPayload>
          }
          findMany: {
            args: Prisma.CustomIllnessesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIllnessesPayload>[]
          }
          create: {
            args: Prisma.CustomIllnessesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIllnessesPayload>
          }
          createMany: {
            args: Prisma.CustomIllnessesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomIllnessesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIllnessesPayload>
          }
          update: {
            args: Prisma.CustomIllnessesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIllnessesPayload>
          }
          deleteMany: {
            args: Prisma.CustomIllnessesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomIllnessesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomIllnessesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomIllnessesPayload>
          }
          aggregate: {
            args: Prisma.CustomIllnessesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomIllnesses>
          }
          groupBy: {
            args: Prisma.CustomIllnessesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomIllnessesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomIllnessesCountArgs<ExtArgs>
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
    user?: UserOmit
    insurers?: InsurersOmit
    clients?: ClientsOmit
    uploads?: UploadsOmit
    decks?: DecksOmit
    intellicareMasterlist?: IntellicareMasterlistOmit
    maxicareMasterlist?: MaxicareMasterlistOmit
    intellicare?: IntellicareOmit
    maxicare?: MaxicareOmit
    customIllnesses?: CustomIllnessesOmit
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
    Clients: number
    Uploads: number
  }

  export type InsurersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clients?: boolean | InsurersCountOutputTypeCountClientsArgs
    Uploads?: boolean | InsurersCountOutputTypeCountUploadsArgs
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
    where?: ClientsWhereInput
  }

  /**
   * InsurersCountOutputType without action
   */
  export type InsurersCountOutputTypeCountUploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadsWhereInput
  }


  /**
   * Count Type ClientsCountOutputType
   */

  export type ClientsCountOutputType = {
    Uploads: number
    Decks: number
    IntellicareMasterlist: number
    MaxicareMasterlist: number
    Intellicare: number
    Maxicare: number
    CustomIllnesses: number
  }

  export type ClientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Uploads?: boolean | ClientsCountOutputTypeCountUploadsArgs
    Decks?: boolean | ClientsCountOutputTypeCountDecksArgs
    IntellicareMasterlist?: boolean | ClientsCountOutputTypeCountIntellicareMasterlistArgs
    MaxicareMasterlist?: boolean | ClientsCountOutputTypeCountMaxicareMasterlistArgs
    Intellicare?: boolean | ClientsCountOutputTypeCountIntellicareArgs
    Maxicare?: boolean | ClientsCountOutputTypeCountMaxicareArgs
    CustomIllnesses?: boolean | ClientsCountOutputTypeCountCustomIllnessesArgs
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
    where?: UploadsWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountDecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecksWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountIntellicareMasterlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntellicareMasterlistWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountMaxicareMasterlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaxicareMasterlistWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountIntellicareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntellicareWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountMaxicareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaxicareWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountCustomIllnessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomIllnessesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
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
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
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

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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



  export type UserSelectScalar = {
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

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "admin" | "canUpload" | "canCreate" | "canViewDeck" | "canUploadDeck" | "canAdd" | "canRemove" | "canEdit" | "superAdmin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
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

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly admin: FieldRef<"User", 'Boolean'>
    readonly canUpload: FieldRef<"User", 'Boolean'>
    readonly canCreate: FieldRef<"User", 'Boolean'>
    readonly canViewDeck: FieldRef<"User", 'Boolean'>
    readonly canUploadDeck: FieldRef<"User", 'Boolean'>
    readonly canAdd: FieldRef<"User", 'Boolean'>
    readonly canRemove: FieldRef<"User", 'Boolean'>
    readonly canEdit: FieldRef<"User", 'Boolean'>
    readonly superAdmin: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Insurers
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
     * Filter which Insurers to aggregate.
     */
    where?: InsurersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insurers to fetch.
     */
    orderBy?: InsurersOrderByWithRelationInput | InsurersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InsurersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insurers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Insurers
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




  export type InsurersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsurersWhereInput
    orderBy?: InsurersOrderByWithAggregationInput | InsurersOrderByWithAggregationInput[]
    by: InsurersScalarFieldEnum[] | InsurersScalarFieldEnum
    having?: InsurersScalarWhereWithAggregatesInput
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

  type GetInsurersGroupByPayload<T extends InsurersGroupByArgs> = Prisma.PrismaPromise<
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


  export type InsurersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Clients?: boolean | Insurers$ClientsArgs<ExtArgs>
    Uploads?: boolean | Insurers$UploadsArgs<ExtArgs>
    _count?: boolean | InsurersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insurers"]>



  export type InsurersSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type InsurersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["insurers"]>
  export type InsurersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clients?: boolean | Insurers$ClientsArgs<ExtArgs>
    Uploads?: boolean | Insurers$UploadsArgs<ExtArgs>
    _count?: boolean | InsurersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InsurersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Insurers"
    objects: {
      Clients: Prisma.$ClientsPayload<ExtArgs>[]
      Uploads: Prisma.$UploadsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["insurers"]>
    composites: {}
  }

  type InsurersGetPayload<S extends boolean | null | undefined | InsurersDefaultArgs> = $Result.GetResult<Prisma.$InsurersPayload, S>

  type InsurersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InsurersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InsurersCountAggregateInputType | true
    }

  export interface InsurersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Insurers'], meta: { name: 'Insurers' } }
    /**
     * Find zero or one Insurers that matches the filter.
     * @param {InsurersFindUniqueArgs} args - Arguments to find a Insurers
     * @example
     * // Get one Insurers
     * const insurers = await prisma.insurers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InsurersFindUniqueArgs>(args: SelectSubset<T, InsurersFindUniqueArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Insurers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InsurersFindUniqueOrThrowArgs} args - Arguments to find a Insurers
     * @example
     * // Get one Insurers
     * const insurers = await prisma.insurers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InsurersFindUniqueOrThrowArgs>(args: SelectSubset<T, InsurersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Insurers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsurersFindFirstArgs} args - Arguments to find a Insurers
     * @example
     * // Get one Insurers
     * const insurers = await prisma.insurers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InsurersFindFirstArgs>(args?: SelectSubset<T, InsurersFindFirstArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Insurers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsurersFindFirstOrThrowArgs} args - Arguments to find a Insurers
     * @example
     * // Get one Insurers
     * const insurers = await prisma.insurers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InsurersFindFirstOrThrowArgs>(args?: SelectSubset<T, InsurersFindFirstOrThrowArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Insurers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsurersFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends InsurersFindManyArgs>(args?: SelectSubset<T, InsurersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Insurers.
     * @param {InsurersCreateArgs} args - Arguments to create a Insurers.
     * @example
     * // Create one Insurers
     * const Insurers = await prisma.insurers.create({
     *   data: {
     *     // ... data to create a Insurers
     *   }
     * })
     * 
     */
    create<T extends InsurersCreateArgs>(args: SelectSubset<T, InsurersCreateArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Insurers.
     * @param {InsurersCreateManyArgs} args - Arguments to create many Insurers.
     * @example
     * // Create many Insurers
     * const insurers = await prisma.insurers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InsurersCreateManyArgs>(args?: SelectSubset<T, InsurersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Insurers.
     * @param {InsurersDeleteArgs} args - Arguments to delete one Insurers.
     * @example
     * // Delete one Insurers
     * const Insurers = await prisma.insurers.delete({
     *   where: {
     *     // ... filter to delete one Insurers
     *   }
     * })
     * 
     */
    delete<T extends InsurersDeleteArgs>(args: SelectSubset<T, InsurersDeleteArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Insurers.
     * @param {InsurersUpdateArgs} args - Arguments to update one Insurers.
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
    update<T extends InsurersUpdateArgs>(args: SelectSubset<T, InsurersUpdateArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Insurers.
     * @param {InsurersDeleteManyArgs} args - Arguments to filter Insurers to delete.
     * @example
     * // Delete a few Insurers
     * const { count } = await prisma.insurers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InsurersDeleteManyArgs>(args?: SelectSubset<T, InsurersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insurers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsurersUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends InsurersUpdateManyArgs>(args: SelectSubset<T, InsurersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Insurers.
     * @param {InsurersUpsertArgs} args - Arguments to update or create a Insurers.
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
    upsert<T extends InsurersUpsertArgs>(args: SelectSubset<T, InsurersUpsertArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Insurers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsurersCountArgs} args - Arguments to filter Insurers to count.
     * @example
     * // Count the number of Insurers
     * const count = await prisma.insurers.count({
     *   where: {
     *     // ... the filter for the Insurers we want to count
     *   }
     * })
    **/
    count<T extends InsurersCountArgs>(
      args?: Subset<T, InsurersCountArgs>,
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
     * @param {InsurersGroupByArgs} args - Group by arguments.
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
      T extends InsurersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InsurersGroupByArgs['orderBy'] }
        : { orderBy?: InsurersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InsurersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsurersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Insurers model
   */
  readonly fields: InsurersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Insurers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InsurersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Clients<T extends Insurers$ClientsArgs<ExtArgs> = {}>(args?: Subset<T, Insurers$ClientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Uploads<T extends Insurers$UploadsArgs<ExtArgs> = {}>(args?: Subset<T, Insurers$UploadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Insurers model
   */ 
  interface InsurersFieldRefs {
    readonly id: FieldRef<"Insurers", 'Int'>
    readonly name: FieldRef<"Insurers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Insurers findUnique
   */
  export type InsurersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurers
     */
    omit?: InsurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    /**
     * Filter, which Insurers to fetch.
     */
    where: InsurersWhereUniqueInput
  }

  /**
   * Insurers findUniqueOrThrow
   */
  export type InsurersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurers
     */
    omit?: InsurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    /**
     * Filter, which Insurers to fetch.
     */
    where: InsurersWhereUniqueInput
  }

  /**
   * Insurers findFirst
   */
  export type InsurersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurers
     */
    omit?: InsurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    /**
     * Filter, which Insurers to fetch.
     */
    where?: InsurersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insurers to fetch.
     */
    orderBy?: InsurersOrderByWithRelationInput | InsurersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insurers.
     */
    cursor?: InsurersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insurers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insurers.
     */
    distinct?: InsurersScalarFieldEnum | InsurersScalarFieldEnum[]
  }

  /**
   * Insurers findFirstOrThrow
   */
  export type InsurersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurers
     */
    omit?: InsurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    /**
     * Filter, which Insurers to fetch.
     */
    where?: InsurersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insurers to fetch.
     */
    orderBy?: InsurersOrderByWithRelationInput | InsurersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insurers.
     */
    cursor?: InsurersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insurers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insurers.
     */
    distinct?: InsurersScalarFieldEnum | InsurersScalarFieldEnum[]
  }

  /**
   * Insurers findMany
   */
  export type InsurersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurers
     */
    omit?: InsurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    /**
     * Filter, which Insurers to fetch.
     */
    where?: InsurersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insurers to fetch.
     */
    orderBy?: InsurersOrderByWithRelationInput | InsurersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Insurers.
     */
    cursor?: InsurersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insurers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insurers.
     */
    skip?: number
    distinct?: InsurersScalarFieldEnum | InsurersScalarFieldEnum[]
  }

  /**
   * Insurers create
   */
  export type InsurersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurers
     */
    omit?: InsurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    /**
     * The data needed to create a Insurers.
     */
    data: XOR<InsurersCreateInput, InsurersUncheckedCreateInput>
  }

  /**
   * Insurers createMany
   */
  export type InsurersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Insurers.
     */
    data: InsurersCreateManyInput | InsurersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Insurers update
   */
  export type InsurersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurers
     */
    omit?: InsurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    /**
     * The data needed to update a Insurers.
     */
    data: XOR<InsurersUpdateInput, InsurersUncheckedUpdateInput>
    /**
     * Choose, which Insurers to update.
     */
    where: InsurersWhereUniqueInput
  }

  /**
   * Insurers updateMany
   */
  export type InsurersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Insurers.
     */
    data: XOR<InsurersUpdateManyMutationInput, InsurersUncheckedUpdateManyInput>
    /**
     * Filter which Insurers to update
     */
    where?: InsurersWhereInput
    /**
     * Limit how many Insurers to update.
     */
    limit?: number
  }

  /**
   * Insurers upsert
   */
  export type InsurersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurers
     */
    omit?: InsurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    /**
     * The filter to search for the Insurers to update in case it exists.
     */
    where: InsurersWhereUniqueInput
    /**
     * In case the Insurers found by the `where` argument doesn't exist, create a new Insurers with this data.
     */
    create: XOR<InsurersCreateInput, InsurersUncheckedCreateInput>
    /**
     * In case the Insurers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InsurersUpdateInput, InsurersUncheckedUpdateInput>
  }

  /**
   * Insurers delete
   */
  export type InsurersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurers
     */
    omit?: InsurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    /**
     * Filter which Insurers to delete.
     */
    where: InsurersWhereUniqueInput
  }

  /**
   * Insurers deleteMany
   */
  export type InsurersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insurers to delete
     */
    where?: InsurersWhereInput
    /**
     * Limit how many Insurers to delete.
     */
    limit?: number
  }

  /**
   * Insurers.Clients
   */
  export type Insurers$ClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    where?: ClientsWhereInput
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    cursor?: ClientsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Insurers.Uploads
   */
  export type Insurers$UploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uploads
     */
    select?: UploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uploads
     */
    omit?: UploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadsInclude<ExtArgs> | null
    where?: UploadsWhereInput
    orderBy?: UploadsOrderByWithRelationInput | UploadsOrderByWithRelationInput[]
    cursor?: UploadsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UploadsScalarFieldEnum | UploadsScalarFieldEnum[]
  }

  /**
   * Insurers without action
   */
  export type InsurersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurers
     */
    omit?: InsurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
  }


  /**
   * Model Clients
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
     * Filter which Clients to aggregate.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
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




  export type ClientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientsWhereInput
    orderBy?: ClientsOrderByWithAggregationInput | ClientsOrderByWithAggregationInput[]
    by: ClientsScalarFieldEnum[] | ClientsScalarFieldEnum
    having?: ClientsScalarWhereWithAggregatesInput
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

  type GetClientsGroupByPayload<T extends ClientsGroupByArgs> = Prisma.PrismaPromise<
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


  export type ClientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_name?: boolean
    description?: boolean
    insurer_id?: boolean
    insurer?: boolean | Clients$insurerArgs<ExtArgs>
    Uploads?: boolean | Clients$UploadsArgs<ExtArgs>
    Decks?: boolean | Clients$DecksArgs<ExtArgs>
    IntellicareMasterlist?: boolean | Clients$IntellicareMasterlistArgs<ExtArgs>
    MaxicareMasterlist?: boolean | Clients$MaxicareMasterlistArgs<ExtArgs>
    Intellicare?: boolean | Clients$IntellicareArgs<ExtArgs>
    Maxicare?: boolean | Clients$MaxicareArgs<ExtArgs>
    CustomIllnesses?: boolean | Clients$CustomIllnessesArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clients"]>



  export type ClientsSelectScalar = {
    id?: boolean
    client_name?: boolean
    description?: boolean
    insurer_id?: boolean
  }

  export type ClientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "client_name" | "description" | "insurer_id", ExtArgs["result"]["clients"]>
  export type ClientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insurer?: boolean | Clients$insurerArgs<ExtArgs>
    Uploads?: boolean | Clients$UploadsArgs<ExtArgs>
    Decks?: boolean | Clients$DecksArgs<ExtArgs>
    IntellicareMasterlist?: boolean | Clients$IntellicareMasterlistArgs<ExtArgs>
    MaxicareMasterlist?: boolean | Clients$MaxicareMasterlistArgs<ExtArgs>
    Intellicare?: boolean | Clients$IntellicareArgs<ExtArgs>
    Maxicare?: boolean | Clients$MaxicareArgs<ExtArgs>
    CustomIllnesses?: boolean | Clients$CustomIllnessesArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clients"
    objects: {
      insurer: Prisma.$InsurersPayload<ExtArgs> | null
      Uploads: Prisma.$UploadsPayload<ExtArgs>[]
      Decks: Prisma.$DecksPayload<ExtArgs>[]
      IntellicareMasterlist: Prisma.$IntellicareMasterlistPayload<ExtArgs>[]
      MaxicareMasterlist: Prisma.$MaxicareMasterlistPayload<ExtArgs>[]
      Intellicare: Prisma.$IntellicarePayload<ExtArgs>[]
      Maxicare: Prisma.$MaxicarePayload<ExtArgs>[]
      CustomIllnesses: Prisma.$CustomIllnessesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      client_name: string
      description: string | null
      insurer_id: number | null
    }, ExtArgs["result"]["clients"]>
    composites: {}
  }

  type ClientsGetPayload<S extends boolean | null | undefined | ClientsDefaultArgs> = $Result.GetResult<Prisma.$ClientsPayload, S>

  type ClientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientsCountAggregateInputType | true
    }

  export interface ClientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clients'], meta: { name: 'Clients' } }
    /**
     * Find zero or one Clients that matches the filter.
     * @param {ClientsFindUniqueArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientsFindUniqueArgs>(args: SelectSubset<T, ClientsFindUniqueArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Clients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientsFindUniqueOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientsFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindFirstArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientsFindFirstArgs>(args?: SelectSubset<T, ClientsFindFirstArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Clients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindFirstOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientsFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends ClientsFindManyArgs>(args?: SelectSubset<T, ClientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Clients.
     * @param {ClientsCreateArgs} args - Arguments to create a Clients.
     * @example
     * // Create one Clients
     * const Clients = await prisma.clients.create({
     *   data: {
     *     // ... data to create a Clients
     *   }
     * })
     * 
     */
    create<T extends ClientsCreateArgs>(args: SelectSubset<T, ClientsCreateArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Clients.
     * @param {ClientsCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientsCreateManyArgs>(args?: SelectSubset<T, ClientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clients.
     * @param {ClientsDeleteArgs} args - Arguments to delete one Clients.
     * @example
     * // Delete one Clients
     * const Clients = await prisma.clients.delete({
     *   where: {
     *     // ... filter to delete one Clients
     *   }
     * })
     * 
     */
    delete<T extends ClientsDeleteArgs>(args: SelectSubset<T, ClientsDeleteArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Clients.
     * @param {ClientsUpdateArgs} args - Arguments to update one Clients.
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
    update<T extends ClientsUpdateArgs>(args: SelectSubset<T, ClientsUpdateArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientsDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.clients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientsDeleteManyArgs>(args?: SelectSubset<T, ClientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends ClientsUpdateManyArgs>(args: SelectSubset<T, ClientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clients.
     * @param {ClientsUpsertArgs} args - Arguments to update or create a Clients.
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
    upsert<T extends ClientsUpsertArgs>(args: SelectSubset<T, ClientsUpsertArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.clients.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientsCountArgs>(
      args?: Subset<T, ClientsCountArgs>,
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
     * @param {ClientsGroupByArgs} args - Group by arguments.
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
      T extends ClientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientsGroupByArgs['orderBy'] }
        : { orderBy?: ClientsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clients model
   */
  readonly fields: ClientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insurer<T extends Clients$insurerArgs<ExtArgs> = {}>(args?: Subset<T, Clients$insurerArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    Uploads<T extends Clients$UploadsArgs<ExtArgs> = {}>(args?: Subset<T, Clients$UploadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Decks<T extends Clients$DecksArgs<ExtArgs> = {}>(args?: Subset<T, Clients$DecksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    IntellicareMasterlist<T extends Clients$IntellicareMasterlistArgs<ExtArgs> = {}>(args?: Subset<T, Clients$IntellicareMasterlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntellicareMasterlistPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    MaxicareMasterlist<T extends Clients$MaxicareMasterlistArgs<ExtArgs> = {}>(args?: Subset<T, Clients$MaxicareMasterlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaxicareMasterlistPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Intellicare<T extends Clients$IntellicareArgs<ExtArgs> = {}>(args?: Subset<T, Clients$IntellicareArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntellicarePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Maxicare<T extends Clients$MaxicareArgs<ExtArgs> = {}>(args?: Subset<T, Clients$MaxicareArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaxicarePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    CustomIllnesses<T extends Clients$CustomIllnessesArgs<ExtArgs> = {}>(args?: Subset<T, Clients$CustomIllnessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomIllnessesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Clients model
   */ 
  interface ClientsFieldRefs {
    readonly id: FieldRef<"Clients", 'Int'>
    readonly client_name: FieldRef<"Clients", 'String'>
    readonly description: FieldRef<"Clients", 'String'>
    readonly insurer_id: FieldRef<"Clients", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Clients findUnique
   */
  export type ClientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients findUniqueOrThrow
   */
  export type ClientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients findFirst
   */
  export type ClientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients findFirstOrThrow
   */
  export type ClientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients findMany
   */
  export type ClientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * Clients create
   */
  export type ClientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The data needed to create a Clients.
     */
    data: XOR<ClientsCreateInput, ClientsUncheckedCreateInput>
  }

  /**
   * Clients createMany
   */
  export type ClientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientsCreateManyInput | ClientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clients update
   */
  export type ClientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The data needed to update a Clients.
     */
    data: XOR<ClientsUpdateInput, ClientsUncheckedUpdateInput>
    /**
     * Choose, which Clients to update.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients updateMany
   */
  export type ClientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientsUpdateManyMutationInput, ClientsUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientsWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Clients upsert
   */
  export type ClientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The filter to search for the Clients to update in case it exists.
     */
    where: ClientsWhereUniqueInput
    /**
     * In case the Clients found by the `where` argument doesn't exist, create a new Clients with this data.
     */
    create: XOR<ClientsCreateInput, ClientsUncheckedCreateInput>
    /**
     * In case the Clients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientsUpdateInput, ClientsUncheckedUpdateInput>
  }

  /**
   * Clients delete
   */
  export type ClientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter which Clients to delete.
     */
    where: ClientsWhereUniqueInput
  }

  /**
   * Clients deleteMany
   */
  export type ClientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientsWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Clients.insurer
   */
  export type Clients$insurerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insurers
     */
    select?: InsurersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insurers
     */
    omit?: InsurersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsurersInclude<ExtArgs> | null
    where?: InsurersWhereInput
  }

  /**
   * Clients.Uploads
   */
  export type Clients$UploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uploads
     */
    select?: UploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uploads
     */
    omit?: UploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadsInclude<ExtArgs> | null
    where?: UploadsWhereInput
    orderBy?: UploadsOrderByWithRelationInput | UploadsOrderByWithRelationInput[]
    cursor?: UploadsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UploadsScalarFieldEnum | UploadsScalarFieldEnum[]
  }

  /**
   * Clients.Decks
   */
  export type Clients$DecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    where?: DecksWhereInput
    orderBy?: DecksOrderByWithRelationInput | DecksOrderByWithRelationInput[]
    cursor?: DecksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DecksScalarFieldEnum | DecksScalarFieldEnum[]
  }

  /**
   * Clients.IntellicareMasterlist
   */
  export type Clients$IntellicareMasterlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntellicareMasterlist
     */
    select?: IntellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntellicareMasterlist
     */
    omit?: IntellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareMasterlistInclude<ExtArgs> | null
    where?: IntellicareMasterlistWhereInput
    orderBy?: IntellicareMasterlistOrderByWithRelationInput | IntellicareMasterlistOrderByWithRelationInput[]
    cursor?: IntellicareMasterlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntellicareMasterlistScalarFieldEnum | IntellicareMasterlistScalarFieldEnum[]
  }

  /**
   * Clients.MaxicareMasterlist
   */
  export type Clients$MaxicareMasterlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaxicareMasterlist
     */
    select?: MaxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaxicareMasterlist
     */
    omit?: MaxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareMasterlistInclude<ExtArgs> | null
    where?: MaxicareMasterlistWhereInput
    orderBy?: MaxicareMasterlistOrderByWithRelationInput | MaxicareMasterlistOrderByWithRelationInput[]
    cursor?: MaxicareMasterlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaxicareMasterlistScalarFieldEnum | MaxicareMasterlistScalarFieldEnum[]
  }

  /**
   * Clients.Intellicare
   */
  export type Clients$IntellicareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intellicare
     */
    select?: IntellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intellicare
     */
    omit?: IntellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareInclude<ExtArgs> | null
    where?: IntellicareWhereInput
    orderBy?: IntellicareOrderByWithRelationInput | IntellicareOrderByWithRelationInput[]
    cursor?: IntellicareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntellicareScalarFieldEnum | IntellicareScalarFieldEnum[]
  }

  /**
   * Clients.Maxicare
   */
  export type Clients$MaxicareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maxicare
     */
    select?: MaxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maxicare
     */
    omit?: MaxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareInclude<ExtArgs> | null
    where?: MaxicareWhereInput
    orderBy?: MaxicareOrderByWithRelationInput | MaxicareOrderByWithRelationInput[]
    cursor?: MaxicareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaxicareScalarFieldEnum | MaxicareScalarFieldEnum[]
  }

  /**
   * Clients.CustomIllnesses
   */
  export type Clients$CustomIllnessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIllnesses
     */
    select?: CustomIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIllnesses
     */
    omit?: CustomIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomIllnessesInclude<ExtArgs> | null
    where?: CustomIllnessesWhereInput
    orderBy?: CustomIllnessesOrderByWithRelationInput | CustomIllnessesOrderByWithRelationInput[]
    cursor?: CustomIllnessesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomIllnessesScalarFieldEnum | CustomIllnessesScalarFieldEnum[]
  }

  /**
   * Clients without action
   */
  export type ClientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clients
     */
    omit?: ClientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientsInclude<ExtArgs> | null
  }


  /**
   * Model Uploads
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
     * Filter which Uploads to aggregate.
     */
    where?: UploadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uploads to fetch.
     */
    orderBy?: UploadsOrderByWithRelationInput | UploadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UploadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Uploads
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




  export type UploadsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadsWhereInput
    orderBy?: UploadsOrderByWithAggregationInput | UploadsOrderByWithAggregationInput[]
    by: UploadsScalarFieldEnum[] | UploadsScalarFieldEnum
    having?: UploadsScalarWhereWithAggregatesInput
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

  type GetUploadsGroupByPayload<T extends UploadsGroupByArgs> = Prisma.PrismaPromise<
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


  export type UploadsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    insurerId?: boolean
    year?: boolean
    months?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Clients?: boolean | ClientsDefaultArgs<ExtArgs>
    Insurers?: boolean | InsurersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploads"]>



  export type UploadsSelectScalar = {
    id?: boolean
    clientId?: boolean
    insurerId?: boolean
    year?: boolean
    months?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UploadsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "insurerId" | "year" | "months" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["uploads"]>
  export type UploadsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clients?: boolean | ClientsDefaultArgs<ExtArgs>
    Insurers?: boolean | InsurersDefaultArgs<ExtArgs>
  }

  export type $UploadsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Uploads"
    objects: {
      Clients: Prisma.$ClientsPayload<ExtArgs>
      Insurers: Prisma.$InsurersPayload<ExtArgs>
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

  type UploadsGetPayload<S extends boolean | null | undefined | UploadsDefaultArgs> = $Result.GetResult<Prisma.$UploadsPayload, S>

  type UploadsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UploadsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UploadsCountAggregateInputType | true
    }

  export interface UploadsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Uploads'], meta: { name: 'Uploads' } }
    /**
     * Find zero or one Uploads that matches the filter.
     * @param {UploadsFindUniqueArgs} args - Arguments to find a Uploads
     * @example
     * // Get one Uploads
     * const uploads = await prisma.uploads.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UploadsFindUniqueArgs>(args: SelectSubset<T, UploadsFindUniqueArgs<ExtArgs>>): Prisma__UploadsClient<$Result.GetResult<Prisma.$UploadsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Uploads that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UploadsFindUniqueOrThrowArgs} args - Arguments to find a Uploads
     * @example
     * // Get one Uploads
     * const uploads = await prisma.uploads.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UploadsFindUniqueOrThrowArgs>(args: SelectSubset<T, UploadsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UploadsClient<$Result.GetResult<Prisma.$UploadsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Uploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadsFindFirstArgs} args - Arguments to find a Uploads
     * @example
     * // Get one Uploads
     * const uploads = await prisma.uploads.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UploadsFindFirstArgs>(args?: SelectSubset<T, UploadsFindFirstArgs<ExtArgs>>): Prisma__UploadsClient<$Result.GetResult<Prisma.$UploadsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Uploads that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadsFindFirstOrThrowArgs} args - Arguments to find a Uploads
     * @example
     * // Get one Uploads
     * const uploads = await prisma.uploads.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UploadsFindFirstOrThrowArgs>(args?: SelectSubset<T, UploadsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UploadsClient<$Result.GetResult<Prisma.$UploadsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Uploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadsFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UploadsFindManyArgs>(args?: SelectSubset<T, UploadsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Uploads.
     * @param {UploadsCreateArgs} args - Arguments to create a Uploads.
     * @example
     * // Create one Uploads
     * const Uploads = await prisma.uploads.create({
     *   data: {
     *     // ... data to create a Uploads
     *   }
     * })
     * 
     */
    create<T extends UploadsCreateArgs>(args: SelectSubset<T, UploadsCreateArgs<ExtArgs>>): Prisma__UploadsClient<$Result.GetResult<Prisma.$UploadsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Uploads.
     * @param {UploadsCreateManyArgs} args - Arguments to create many Uploads.
     * @example
     * // Create many Uploads
     * const uploads = await prisma.uploads.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UploadsCreateManyArgs>(args?: SelectSubset<T, UploadsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Uploads.
     * @param {UploadsDeleteArgs} args - Arguments to delete one Uploads.
     * @example
     * // Delete one Uploads
     * const Uploads = await prisma.uploads.delete({
     *   where: {
     *     // ... filter to delete one Uploads
     *   }
     * })
     * 
     */
    delete<T extends UploadsDeleteArgs>(args: SelectSubset<T, UploadsDeleteArgs<ExtArgs>>): Prisma__UploadsClient<$Result.GetResult<Prisma.$UploadsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Uploads.
     * @param {UploadsUpdateArgs} args - Arguments to update one Uploads.
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
    update<T extends UploadsUpdateArgs>(args: SelectSubset<T, UploadsUpdateArgs<ExtArgs>>): Prisma__UploadsClient<$Result.GetResult<Prisma.$UploadsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Uploads.
     * @param {UploadsDeleteManyArgs} args - Arguments to filter Uploads to delete.
     * @example
     * // Delete a few Uploads
     * const { count } = await prisma.uploads.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UploadsDeleteManyArgs>(args?: SelectSubset<T, UploadsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Uploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadsUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UploadsUpdateManyArgs>(args: SelectSubset<T, UploadsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Uploads.
     * @param {UploadsUpsertArgs} args - Arguments to update or create a Uploads.
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
    upsert<T extends UploadsUpsertArgs>(args: SelectSubset<T, UploadsUpsertArgs<ExtArgs>>): Prisma__UploadsClient<$Result.GetResult<Prisma.$UploadsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Uploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadsCountArgs} args - Arguments to filter Uploads to count.
     * @example
     * // Count the number of Uploads
     * const count = await prisma.uploads.count({
     *   where: {
     *     // ... the filter for the Uploads we want to count
     *   }
     * })
    **/
    count<T extends UploadsCountArgs>(
      args?: Subset<T, UploadsCountArgs>,
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
     * @param {UploadsGroupByArgs} args - Group by arguments.
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
      T extends UploadsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UploadsGroupByArgs['orderBy'] }
        : { orderBy?: UploadsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UploadsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Uploads model
   */
  readonly fields: UploadsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Uploads.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UploadsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Clients<T extends ClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientsDefaultArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Insurers<T extends InsurersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InsurersDefaultArgs<ExtArgs>>): Prisma__InsurersClient<$Result.GetResult<Prisma.$InsurersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Uploads model
   */ 
  interface UploadsFieldRefs {
    readonly id: FieldRef<"Uploads", 'Int'>
    readonly clientId: FieldRef<"Uploads", 'Int'>
    readonly insurerId: FieldRef<"Uploads", 'Int'>
    readonly year: FieldRef<"Uploads", 'String'>
    readonly months: FieldRef<"Uploads", 'String'>
    readonly type: FieldRef<"Uploads", 'String'>
    readonly createdAt: FieldRef<"Uploads", 'DateTime'>
    readonly updatedAt: FieldRef<"Uploads", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Uploads findUnique
   */
  export type UploadsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uploads
     */
    select?: UploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uploads
     */
    omit?: UploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadsInclude<ExtArgs> | null
    /**
     * Filter, which Uploads to fetch.
     */
    where: UploadsWhereUniqueInput
  }

  /**
   * Uploads findUniqueOrThrow
   */
  export type UploadsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uploads
     */
    select?: UploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uploads
     */
    omit?: UploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadsInclude<ExtArgs> | null
    /**
     * Filter, which Uploads to fetch.
     */
    where: UploadsWhereUniqueInput
  }

  /**
   * Uploads findFirst
   */
  export type UploadsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uploads
     */
    select?: UploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uploads
     */
    omit?: UploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadsInclude<ExtArgs> | null
    /**
     * Filter, which Uploads to fetch.
     */
    where?: UploadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uploads to fetch.
     */
    orderBy?: UploadsOrderByWithRelationInput | UploadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Uploads.
     */
    cursor?: UploadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Uploads.
     */
    distinct?: UploadsScalarFieldEnum | UploadsScalarFieldEnum[]
  }

  /**
   * Uploads findFirstOrThrow
   */
  export type UploadsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uploads
     */
    select?: UploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uploads
     */
    omit?: UploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadsInclude<ExtArgs> | null
    /**
     * Filter, which Uploads to fetch.
     */
    where?: UploadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uploads to fetch.
     */
    orderBy?: UploadsOrderByWithRelationInput | UploadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Uploads.
     */
    cursor?: UploadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Uploads.
     */
    distinct?: UploadsScalarFieldEnum | UploadsScalarFieldEnum[]
  }

  /**
   * Uploads findMany
   */
  export type UploadsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uploads
     */
    select?: UploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uploads
     */
    omit?: UploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadsInclude<ExtArgs> | null
    /**
     * Filter, which Uploads to fetch.
     */
    where?: UploadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Uploads to fetch.
     */
    orderBy?: UploadsOrderByWithRelationInput | UploadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Uploads.
     */
    cursor?: UploadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Uploads.
     */
    skip?: number
    distinct?: UploadsScalarFieldEnum | UploadsScalarFieldEnum[]
  }

  /**
   * Uploads create
   */
  export type UploadsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uploads
     */
    select?: UploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uploads
     */
    omit?: UploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadsInclude<ExtArgs> | null
    /**
     * The data needed to create a Uploads.
     */
    data: XOR<UploadsCreateInput, UploadsUncheckedCreateInput>
  }

  /**
   * Uploads createMany
   */
  export type UploadsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Uploads.
     */
    data: UploadsCreateManyInput | UploadsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Uploads update
   */
  export type UploadsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uploads
     */
    select?: UploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uploads
     */
    omit?: UploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadsInclude<ExtArgs> | null
    /**
     * The data needed to update a Uploads.
     */
    data: XOR<UploadsUpdateInput, UploadsUncheckedUpdateInput>
    /**
     * Choose, which Uploads to update.
     */
    where: UploadsWhereUniqueInput
  }

  /**
   * Uploads updateMany
   */
  export type UploadsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Uploads.
     */
    data: XOR<UploadsUpdateManyMutationInput, UploadsUncheckedUpdateManyInput>
    /**
     * Filter which Uploads to update
     */
    where?: UploadsWhereInput
    /**
     * Limit how many Uploads to update.
     */
    limit?: number
  }

  /**
   * Uploads upsert
   */
  export type UploadsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uploads
     */
    select?: UploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uploads
     */
    omit?: UploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadsInclude<ExtArgs> | null
    /**
     * The filter to search for the Uploads to update in case it exists.
     */
    where: UploadsWhereUniqueInput
    /**
     * In case the Uploads found by the `where` argument doesn't exist, create a new Uploads with this data.
     */
    create: XOR<UploadsCreateInput, UploadsUncheckedCreateInput>
    /**
     * In case the Uploads was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UploadsUpdateInput, UploadsUncheckedUpdateInput>
  }

  /**
   * Uploads delete
   */
  export type UploadsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uploads
     */
    select?: UploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uploads
     */
    omit?: UploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadsInclude<ExtArgs> | null
    /**
     * Filter which Uploads to delete.
     */
    where: UploadsWhereUniqueInput
  }

  /**
   * Uploads deleteMany
   */
  export type UploadsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Uploads to delete
     */
    where?: UploadsWhereInput
    /**
     * Limit how many Uploads to delete.
     */
    limit?: number
  }

  /**
   * Uploads without action
   */
  export type UploadsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Uploads
     */
    select?: UploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Uploads
     */
    omit?: UploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadsInclude<ExtArgs> | null
  }


  /**
   * Model Decks
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
     * Filter which Decks to aggregate.
     */
    where?: DecksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DecksOrderByWithRelationInput | DecksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DecksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Decks
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




  export type DecksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecksWhereInput
    orderBy?: DecksOrderByWithAggregationInput | DecksOrderByWithAggregationInput[]
    by: DecksScalarFieldEnum[] | DecksScalarFieldEnum
    having?: DecksScalarWhereWithAggregatesInput
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

  type GetDecksGroupByPayload<T extends DecksGroupByArgs> = Prisma.PrismaPromise<
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


  export type DecksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    Clients?: boolean | ClientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decks"]>



  export type DecksSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
  }

  export type DecksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "clientId", ExtArgs["result"]["decks"]>
  export type DecksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clients?: boolean | ClientsDefaultArgs<ExtArgs>
  }

  export type $DecksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Decks"
    objects: {
      Clients: Prisma.$ClientsPayload<ExtArgs>
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

  type DecksGetPayload<S extends boolean | null | undefined | DecksDefaultArgs> = $Result.GetResult<Prisma.$DecksPayload, S>

  type DecksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DecksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DecksCountAggregateInputType | true
    }

  export interface DecksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Decks'], meta: { name: 'Decks' } }
    /**
     * Find zero or one Decks that matches the filter.
     * @param {DecksFindUniqueArgs} args - Arguments to find a Decks
     * @example
     * // Get one Decks
     * const decks = await prisma.decks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DecksFindUniqueArgs>(args: SelectSubset<T, DecksFindUniqueArgs<ExtArgs>>): Prisma__DecksClient<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Decks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DecksFindUniqueOrThrowArgs} args - Arguments to find a Decks
     * @example
     * // Get one Decks
     * const decks = await prisma.decks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DecksFindUniqueOrThrowArgs>(args: SelectSubset<T, DecksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DecksClient<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Decks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksFindFirstArgs} args - Arguments to find a Decks
     * @example
     * // Get one Decks
     * const decks = await prisma.decks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DecksFindFirstArgs>(args?: SelectSubset<T, DecksFindFirstArgs<ExtArgs>>): Prisma__DecksClient<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Decks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksFindFirstOrThrowArgs} args - Arguments to find a Decks
     * @example
     * // Get one Decks
     * const decks = await prisma.decks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DecksFindFirstOrThrowArgs>(args?: SelectSubset<T, DecksFindFirstOrThrowArgs<ExtArgs>>): Prisma__DecksClient<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Decks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends DecksFindManyArgs>(args?: SelectSubset<T, DecksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Decks.
     * @param {DecksCreateArgs} args - Arguments to create a Decks.
     * @example
     * // Create one Decks
     * const Decks = await prisma.decks.create({
     *   data: {
     *     // ... data to create a Decks
     *   }
     * })
     * 
     */
    create<T extends DecksCreateArgs>(args: SelectSubset<T, DecksCreateArgs<ExtArgs>>): Prisma__DecksClient<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Decks.
     * @param {DecksCreateManyArgs} args - Arguments to create many Decks.
     * @example
     * // Create many Decks
     * const decks = await prisma.decks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DecksCreateManyArgs>(args?: SelectSubset<T, DecksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Decks.
     * @param {DecksDeleteArgs} args - Arguments to delete one Decks.
     * @example
     * // Delete one Decks
     * const Decks = await prisma.decks.delete({
     *   where: {
     *     // ... filter to delete one Decks
     *   }
     * })
     * 
     */
    delete<T extends DecksDeleteArgs>(args: SelectSubset<T, DecksDeleteArgs<ExtArgs>>): Prisma__DecksClient<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Decks.
     * @param {DecksUpdateArgs} args - Arguments to update one Decks.
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
    update<T extends DecksUpdateArgs>(args: SelectSubset<T, DecksUpdateArgs<ExtArgs>>): Prisma__DecksClient<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Decks.
     * @param {DecksDeleteManyArgs} args - Arguments to filter Decks to delete.
     * @example
     * // Delete a few Decks
     * const { count } = await prisma.decks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DecksDeleteManyArgs>(args?: SelectSubset<T, DecksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends DecksUpdateManyArgs>(args: SelectSubset<T, DecksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Decks.
     * @param {DecksUpsertArgs} args - Arguments to update or create a Decks.
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
    upsert<T extends DecksUpsertArgs>(args: SelectSubset<T, DecksUpsertArgs<ExtArgs>>): Prisma__DecksClient<$Result.GetResult<Prisma.$DecksPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Decks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecksCountArgs} args - Arguments to filter Decks to count.
     * @example
     * // Count the number of Decks
     * const count = await prisma.decks.count({
     *   where: {
     *     // ... the filter for the Decks we want to count
     *   }
     * })
    **/
    count<T extends DecksCountArgs>(
      args?: Subset<T, DecksCountArgs>,
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
     * @param {DecksGroupByArgs} args - Group by arguments.
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
      T extends DecksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DecksGroupByArgs['orderBy'] }
        : { orderBy?: DecksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DecksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDecksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Decks model
   */
  readonly fields: DecksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Decks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DecksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Clients<T extends ClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientsDefaultArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Decks model
   */ 
  interface DecksFieldRefs {
    readonly id: FieldRef<"Decks", 'Int'>
    readonly name: FieldRef<"Decks", 'String'>
    readonly description: FieldRef<"Decks", 'String'>
    readonly createdAt: FieldRef<"Decks", 'DateTime'>
    readonly updatedAt: FieldRef<"Decks", 'DateTime'>
    readonly clientId: FieldRef<"Decks", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Decks findUnique
   */
  export type DecksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    /**
     * Filter, which Decks to fetch.
     */
    where: DecksWhereUniqueInput
  }

  /**
   * Decks findUniqueOrThrow
   */
  export type DecksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    /**
     * Filter, which Decks to fetch.
     */
    where: DecksWhereUniqueInput
  }

  /**
   * Decks findFirst
   */
  export type DecksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    /**
     * Filter, which Decks to fetch.
     */
    where?: DecksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DecksOrderByWithRelationInput | DecksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     */
    cursor?: DecksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     */
    distinct?: DecksScalarFieldEnum | DecksScalarFieldEnum[]
  }

  /**
   * Decks findFirstOrThrow
   */
  export type DecksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    /**
     * Filter, which Decks to fetch.
     */
    where?: DecksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DecksOrderByWithRelationInput | DecksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decks.
     */
    cursor?: DecksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decks.
     */
    distinct?: DecksScalarFieldEnum | DecksScalarFieldEnum[]
  }

  /**
   * Decks findMany
   */
  export type DecksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    /**
     * Filter, which Decks to fetch.
     */
    where?: DecksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decks to fetch.
     */
    orderBy?: DecksOrderByWithRelationInput | DecksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Decks.
     */
    cursor?: DecksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decks.
     */
    skip?: number
    distinct?: DecksScalarFieldEnum | DecksScalarFieldEnum[]
  }

  /**
   * Decks create
   */
  export type DecksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    /**
     * The data needed to create a Decks.
     */
    data: XOR<DecksCreateInput, DecksUncheckedCreateInput>
  }

  /**
   * Decks createMany
   */
  export type DecksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Decks.
     */
    data: DecksCreateManyInput | DecksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Decks update
   */
  export type DecksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    /**
     * The data needed to update a Decks.
     */
    data: XOR<DecksUpdateInput, DecksUncheckedUpdateInput>
    /**
     * Choose, which Decks to update.
     */
    where: DecksWhereUniqueInput
  }

  /**
   * Decks updateMany
   */
  export type DecksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Decks.
     */
    data: XOR<DecksUpdateManyMutationInput, DecksUncheckedUpdateManyInput>
    /**
     * Filter which Decks to update
     */
    where?: DecksWhereInput
    /**
     * Limit how many Decks to update.
     */
    limit?: number
  }

  /**
   * Decks upsert
   */
  export type DecksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    /**
     * The filter to search for the Decks to update in case it exists.
     */
    where: DecksWhereUniqueInput
    /**
     * In case the Decks found by the `where` argument doesn't exist, create a new Decks with this data.
     */
    create: XOR<DecksCreateInput, DecksUncheckedCreateInput>
    /**
     * In case the Decks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DecksUpdateInput, DecksUncheckedUpdateInput>
  }

  /**
   * Decks delete
   */
  export type DecksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
    /**
     * Filter which Decks to delete.
     */
    where: DecksWhereUniqueInput
  }

  /**
   * Decks deleteMany
   */
  export type DecksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Decks to delete
     */
    where?: DecksWhereInput
    /**
     * Limit how many Decks to delete.
     */
    limit?: number
  }

  /**
   * Decks without action
   */
  export type DecksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decks
     */
    select?: DecksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decks
     */
    omit?: DecksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecksInclude<ExtArgs> | null
  }


  /**
   * Model IntellicareMasterlist
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
     * Filter which IntellicareMasterlist to aggregate.
     */
    where?: IntellicareMasterlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntellicareMasterlists to fetch.
     */
    orderBy?: IntellicareMasterlistOrderByWithRelationInput | IntellicareMasterlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntellicareMasterlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntellicareMasterlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntellicareMasterlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IntellicareMasterlists
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




  export type IntellicareMasterlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntellicareMasterlistWhereInput
    orderBy?: IntellicareMasterlistOrderByWithAggregationInput | IntellicareMasterlistOrderByWithAggregationInput[]
    by: IntellicareMasterlistScalarFieldEnum[] | IntellicareMasterlistScalarFieldEnum
    having?: IntellicareMasterlistScalarWhereWithAggregatesInput
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

  type GetIntellicareMasterlistGroupByPayload<T extends IntellicareMasterlistGroupByArgs> = Prisma.PrismaPromise<
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


  export type IntellicareMasterlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    Clients?: boolean | ClientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intellicareMasterlist"]>



  export type IntellicareMasterlistSelectScalar = {
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

  export type IntellicareMasterlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "PY" | "ACCOUNT_NO" | "STATUS" | "MEMBER_TYPE" | "RNB" | "PREEXIST" | "LIMIT" | "BIRTHDATE" | "AGE" | "RELATION" | "EE_ID" | "CARD_NO" | "COMPANY" | "createdAt" | "updatedAt", ExtArgs["result"]["intellicareMasterlist"]>
  export type IntellicareMasterlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clients?: boolean | ClientsDefaultArgs<ExtArgs>
  }

  export type $IntellicareMasterlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IntellicareMasterlist"
    objects: {
      Clients: Prisma.$ClientsPayload<ExtArgs>
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

  type IntellicareMasterlistGetPayload<S extends boolean | null | undefined | IntellicareMasterlistDefaultArgs> = $Result.GetResult<Prisma.$IntellicareMasterlistPayload, S>

  type IntellicareMasterlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntellicareMasterlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntellicareMasterlistCountAggregateInputType | true
    }

  export interface IntellicareMasterlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IntellicareMasterlist'], meta: { name: 'IntellicareMasterlist' } }
    /**
     * Find zero or one IntellicareMasterlist that matches the filter.
     * @param {IntellicareMasterlistFindUniqueArgs} args - Arguments to find a IntellicareMasterlist
     * @example
     * // Get one IntellicareMasterlist
     * const intellicareMasterlist = await prisma.intellicareMasterlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntellicareMasterlistFindUniqueArgs>(args: SelectSubset<T, IntellicareMasterlistFindUniqueArgs<ExtArgs>>): Prisma__IntellicareMasterlistClient<$Result.GetResult<Prisma.$IntellicareMasterlistPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one IntellicareMasterlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntellicareMasterlistFindUniqueOrThrowArgs} args - Arguments to find a IntellicareMasterlist
     * @example
     * // Get one IntellicareMasterlist
     * const intellicareMasterlist = await prisma.intellicareMasterlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntellicareMasterlistFindUniqueOrThrowArgs>(args: SelectSubset<T, IntellicareMasterlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntellicareMasterlistClient<$Result.GetResult<Prisma.$IntellicareMasterlistPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first IntellicareMasterlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntellicareMasterlistFindFirstArgs} args - Arguments to find a IntellicareMasterlist
     * @example
     * // Get one IntellicareMasterlist
     * const intellicareMasterlist = await prisma.intellicareMasterlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntellicareMasterlistFindFirstArgs>(args?: SelectSubset<T, IntellicareMasterlistFindFirstArgs<ExtArgs>>): Prisma__IntellicareMasterlistClient<$Result.GetResult<Prisma.$IntellicareMasterlistPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first IntellicareMasterlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntellicareMasterlistFindFirstOrThrowArgs} args - Arguments to find a IntellicareMasterlist
     * @example
     * // Get one IntellicareMasterlist
     * const intellicareMasterlist = await prisma.intellicareMasterlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntellicareMasterlistFindFirstOrThrowArgs>(args?: SelectSubset<T, IntellicareMasterlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntellicareMasterlistClient<$Result.GetResult<Prisma.$IntellicareMasterlistPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more IntellicareMasterlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntellicareMasterlistFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends IntellicareMasterlistFindManyArgs>(args?: SelectSubset<T, IntellicareMasterlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntellicareMasterlistPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a IntellicareMasterlist.
     * @param {IntellicareMasterlistCreateArgs} args - Arguments to create a IntellicareMasterlist.
     * @example
     * // Create one IntellicareMasterlist
     * const IntellicareMasterlist = await prisma.intellicareMasterlist.create({
     *   data: {
     *     // ... data to create a IntellicareMasterlist
     *   }
     * })
     * 
     */
    create<T extends IntellicareMasterlistCreateArgs>(args: SelectSubset<T, IntellicareMasterlistCreateArgs<ExtArgs>>): Prisma__IntellicareMasterlistClient<$Result.GetResult<Prisma.$IntellicareMasterlistPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many IntellicareMasterlists.
     * @param {IntellicareMasterlistCreateManyArgs} args - Arguments to create many IntellicareMasterlists.
     * @example
     * // Create many IntellicareMasterlists
     * const intellicareMasterlist = await prisma.intellicareMasterlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntellicareMasterlistCreateManyArgs>(args?: SelectSubset<T, IntellicareMasterlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IntellicareMasterlist.
     * @param {IntellicareMasterlistDeleteArgs} args - Arguments to delete one IntellicareMasterlist.
     * @example
     * // Delete one IntellicareMasterlist
     * const IntellicareMasterlist = await prisma.intellicareMasterlist.delete({
     *   where: {
     *     // ... filter to delete one IntellicareMasterlist
     *   }
     * })
     * 
     */
    delete<T extends IntellicareMasterlistDeleteArgs>(args: SelectSubset<T, IntellicareMasterlistDeleteArgs<ExtArgs>>): Prisma__IntellicareMasterlistClient<$Result.GetResult<Prisma.$IntellicareMasterlistPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one IntellicareMasterlist.
     * @param {IntellicareMasterlistUpdateArgs} args - Arguments to update one IntellicareMasterlist.
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
    update<T extends IntellicareMasterlistUpdateArgs>(args: SelectSubset<T, IntellicareMasterlistUpdateArgs<ExtArgs>>): Prisma__IntellicareMasterlistClient<$Result.GetResult<Prisma.$IntellicareMasterlistPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more IntellicareMasterlists.
     * @param {IntellicareMasterlistDeleteManyArgs} args - Arguments to filter IntellicareMasterlists to delete.
     * @example
     * // Delete a few IntellicareMasterlists
     * const { count } = await prisma.intellicareMasterlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntellicareMasterlistDeleteManyArgs>(args?: SelectSubset<T, IntellicareMasterlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntellicareMasterlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntellicareMasterlistUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends IntellicareMasterlistUpdateManyArgs>(args: SelectSubset<T, IntellicareMasterlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IntellicareMasterlist.
     * @param {IntellicareMasterlistUpsertArgs} args - Arguments to update or create a IntellicareMasterlist.
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
    upsert<T extends IntellicareMasterlistUpsertArgs>(args: SelectSubset<T, IntellicareMasterlistUpsertArgs<ExtArgs>>): Prisma__IntellicareMasterlistClient<$Result.GetResult<Prisma.$IntellicareMasterlistPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of IntellicareMasterlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntellicareMasterlistCountArgs} args - Arguments to filter IntellicareMasterlists to count.
     * @example
     * // Count the number of IntellicareMasterlists
     * const count = await prisma.intellicareMasterlist.count({
     *   where: {
     *     // ... the filter for the IntellicareMasterlists we want to count
     *   }
     * })
    **/
    count<T extends IntellicareMasterlistCountArgs>(
      args?: Subset<T, IntellicareMasterlistCountArgs>,
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
     * @param {IntellicareMasterlistGroupByArgs} args - Group by arguments.
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
      T extends IntellicareMasterlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntellicareMasterlistGroupByArgs['orderBy'] }
        : { orderBy?: IntellicareMasterlistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IntellicareMasterlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntellicareMasterlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IntellicareMasterlist model
   */
  readonly fields: IntellicareMasterlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IntellicareMasterlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntellicareMasterlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Clients<T extends ClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientsDefaultArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the IntellicareMasterlist model
   */ 
  interface IntellicareMasterlistFieldRefs {
    readonly id: FieldRef<"IntellicareMasterlist", 'Int'>
    readonly clientId: FieldRef<"IntellicareMasterlist", 'Int'>
    readonly PY: FieldRef<"IntellicareMasterlist", 'String'>
    readonly ACCOUNT_NO: FieldRef<"IntellicareMasterlist", 'String'>
    readonly STATUS: FieldRef<"IntellicareMasterlist", 'String'>
    readonly MEMBER_TYPE: FieldRef<"IntellicareMasterlist", 'String'>
    readonly RNB: FieldRef<"IntellicareMasterlist", 'String'>
    readonly PREEXIST: FieldRef<"IntellicareMasterlist", 'Float'>
    readonly LIMIT: FieldRef<"IntellicareMasterlist", 'Float'>
    readonly BIRTHDATE: FieldRef<"IntellicareMasterlist", 'DateTime'>
    readonly AGE: FieldRef<"IntellicareMasterlist", 'Int'>
    readonly RELATION: FieldRef<"IntellicareMasterlist", 'String'>
    readonly EE_ID: FieldRef<"IntellicareMasterlist", 'String'>
    readonly CARD_NO: FieldRef<"IntellicareMasterlist", 'String'>
    readonly COMPANY: FieldRef<"IntellicareMasterlist", 'String'>
    readonly createdAt: FieldRef<"IntellicareMasterlist", 'DateTime'>
    readonly updatedAt: FieldRef<"IntellicareMasterlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IntellicareMasterlist findUnique
   */
  export type IntellicareMasterlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntellicareMasterlist
     */
    select?: IntellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntellicareMasterlist
     */
    omit?: IntellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which IntellicareMasterlist to fetch.
     */
    where: IntellicareMasterlistWhereUniqueInput
  }

  /**
   * IntellicareMasterlist findUniqueOrThrow
   */
  export type IntellicareMasterlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntellicareMasterlist
     */
    select?: IntellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntellicareMasterlist
     */
    omit?: IntellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which IntellicareMasterlist to fetch.
     */
    where: IntellicareMasterlistWhereUniqueInput
  }

  /**
   * IntellicareMasterlist findFirst
   */
  export type IntellicareMasterlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntellicareMasterlist
     */
    select?: IntellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntellicareMasterlist
     */
    omit?: IntellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which IntellicareMasterlist to fetch.
     */
    where?: IntellicareMasterlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntellicareMasterlists to fetch.
     */
    orderBy?: IntellicareMasterlistOrderByWithRelationInput | IntellicareMasterlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntellicareMasterlists.
     */
    cursor?: IntellicareMasterlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntellicareMasterlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntellicareMasterlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntellicareMasterlists.
     */
    distinct?: IntellicareMasterlistScalarFieldEnum | IntellicareMasterlistScalarFieldEnum[]
  }

  /**
   * IntellicareMasterlist findFirstOrThrow
   */
  export type IntellicareMasterlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntellicareMasterlist
     */
    select?: IntellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntellicareMasterlist
     */
    omit?: IntellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which IntellicareMasterlist to fetch.
     */
    where?: IntellicareMasterlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntellicareMasterlists to fetch.
     */
    orderBy?: IntellicareMasterlistOrderByWithRelationInput | IntellicareMasterlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntellicareMasterlists.
     */
    cursor?: IntellicareMasterlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntellicareMasterlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntellicareMasterlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntellicareMasterlists.
     */
    distinct?: IntellicareMasterlistScalarFieldEnum | IntellicareMasterlistScalarFieldEnum[]
  }

  /**
   * IntellicareMasterlist findMany
   */
  export type IntellicareMasterlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntellicareMasterlist
     */
    select?: IntellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntellicareMasterlist
     */
    omit?: IntellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which IntellicareMasterlists to fetch.
     */
    where?: IntellicareMasterlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntellicareMasterlists to fetch.
     */
    orderBy?: IntellicareMasterlistOrderByWithRelationInput | IntellicareMasterlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IntellicareMasterlists.
     */
    cursor?: IntellicareMasterlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntellicareMasterlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntellicareMasterlists.
     */
    skip?: number
    distinct?: IntellicareMasterlistScalarFieldEnum | IntellicareMasterlistScalarFieldEnum[]
  }

  /**
   * IntellicareMasterlist create
   */
  export type IntellicareMasterlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntellicareMasterlist
     */
    select?: IntellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntellicareMasterlist
     */
    omit?: IntellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareMasterlistInclude<ExtArgs> | null
    /**
     * The data needed to create a IntellicareMasterlist.
     */
    data: XOR<IntellicareMasterlistCreateInput, IntellicareMasterlistUncheckedCreateInput>
  }

  /**
   * IntellicareMasterlist createMany
   */
  export type IntellicareMasterlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IntellicareMasterlists.
     */
    data: IntellicareMasterlistCreateManyInput | IntellicareMasterlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IntellicareMasterlist update
   */
  export type IntellicareMasterlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntellicareMasterlist
     */
    select?: IntellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntellicareMasterlist
     */
    omit?: IntellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareMasterlistInclude<ExtArgs> | null
    /**
     * The data needed to update a IntellicareMasterlist.
     */
    data: XOR<IntellicareMasterlistUpdateInput, IntellicareMasterlistUncheckedUpdateInput>
    /**
     * Choose, which IntellicareMasterlist to update.
     */
    where: IntellicareMasterlistWhereUniqueInput
  }

  /**
   * IntellicareMasterlist updateMany
   */
  export type IntellicareMasterlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IntellicareMasterlists.
     */
    data: XOR<IntellicareMasterlistUpdateManyMutationInput, IntellicareMasterlistUncheckedUpdateManyInput>
    /**
     * Filter which IntellicareMasterlists to update
     */
    where?: IntellicareMasterlistWhereInput
    /**
     * Limit how many IntellicareMasterlists to update.
     */
    limit?: number
  }

  /**
   * IntellicareMasterlist upsert
   */
  export type IntellicareMasterlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntellicareMasterlist
     */
    select?: IntellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntellicareMasterlist
     */
    omit?: IntellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareMasterlistInclude<ExtArgs> | null
    /**
     * The filter to search for the IntellicareMasterlist to update in case it exists.
     */
    where: IntellicareMasterlistWhereUniqueInput
    /**
     * In case the IntellicareMasterlist found by the `where` argument doesn't exist, create a new IntellicareMasterlist with this data.
     */
    create: XOR<IntellicareMasterlistCreateInput, IntellicareMasterlistUncheckedCreateInput>
    /**
     * In case the IntellicareMasterlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntellicareMasterlistUpdateInput, IntellicareMasterlistUncheckedUpdateInput>
  }

  /**
   * IntellicareMasterlist delete
   */
  export type IntellicareMasterlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntellicareMasterlist
     */
    select?: IntellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntellicareMasterlist
     */
    omit?: IntellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter which IntellicareMasterlist to delete.
     */
    where: IntellicareMasterlistWhereUniqueInput
  }

  /**
   * IntellicareMasterlist deleteMany
   */
  export type IntellicareMasterlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntellicareMasterlists to delete
     */
    where?: IntellicareMasterlistWhereInput
    /**
     * Limit how many IntellicareMasterlists to delete.
     */
    limit?: number
  }

  /**
   * IntellicareMasterlist without action
   */
  export type IntellicareMasterlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntellicareMasterlist
     */
    select?: IntellicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntellicareMasterlist
     */
    omit?: IntellicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareMasterlistInclude<ExtArgs> | null
  }


  /**
   * Model MaxicareMasterlist
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
     * Filter which MaxicareMasterlist to aggregate.
     */
    where?: MaxicareMasterlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaxicareMasterlists to fetch.
     */
    orderBy?: MaxicareMasterlistOrderByWithRelationInput | MaxicareMasterlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaxicareMasterlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaxicareMasterlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaxicareMasterlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaxicareMasterlists
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




  export type MaxicareMasterlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaxicareMasterlistWhereInput
    orderBy?: MaxicareMasterlistOrderByWithAggregationInput | MaxicareMasterlistOrderByWithAggregationInput[]
    by: MaxicareMasterlistScalarFieldEnum[] | MaxicareMasterlistScalarFieldEnum
    having?: MaxicareMasterlistScalarWhereWithAggregatesInput
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

  type GetMaxicareMasterlistGroupByPayload<T extends MaxicareMasterlistGroupByArgs> = Prisma.PrismaPromise<
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


  export type MaxicareMasterlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    Clients?: boolean | ClientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maxicareMasterlist"]>



  export type MaxicareMasterlistSelectScalar = {
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

  export type MaxicareMasterlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "PY" | "ACCOUNT_NO" | "STATUS" | "MEMBER_TYPE" | "LIMIT" | "RELATION" | "EE_ID" | "CARD_NO" | "COMPANY" | "createdAt" | "updatedAt", ExtArgs["result"]["maxicareMasterlist"]>
  export type MaxicareMasterlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clients?: boolean | ClientsDefaultArgs<ExtArgs>
  }

  export type $MaxicareMasterlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaxicareMasterlist"
    objects: {
      Clients: Prisma.$ClientsPayload<ExtArgs>
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

  type MaxicareMasterlistGetPayload<S extends boolean | null | undefined | MaxicareMasterlistDefaultArgs> = $Result.GetResult<Prisma.$MaxicareMasterlistPayload, S>

  type MaxicareMasterlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaxicareMasterlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaxicareMasterlistCountAggregateInputType | true
    }

  export interface MaxicareMasterlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaxicareMasterlist'], meta: { name: 'MaxicareMasterlist' } }
    /**
     * Find zero or one MaxicareMasterlist that matches the filter.
     * @param {MaxicareMasterlistFindUniqueArgs} args - Arguments to find a MaxicareMasterlist
     * @example
     * // Get one MaxicareMasterlist
     * const maxicareMasterlist = await prisma.maxicareMasterlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaxicareMasterlistFindUniqueArgs>(args: SelectSubset<T, MaxicareMasterlistFindUniqueArgs<ExtArgs>>): Prisma__MaxicareMasterlistClient<$Result.GetResult<Prisma.$MaxicareMasterlistPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one MaxicareMasterlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaxicareMasterlistFindUniqueOrThrowArgs} args - Arguments to find a MaxicareMasterlist
     * @example
     * // Get one MaxicareMasterlist
     * const maxicareMasterlist = await prisma.maxicareMasterlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaxicareMasterlistFindUniqueOrThrowArgs>(args: SelectSubset<T, MaxicareMasterlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaxicareMasterlistClient<$Result.GetResult<Prisma.$MaxicareMasterlistPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first MaxicareMasterlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaxicareMasterlistFindFirstArgs} args - Arguments to find a MaxicareMasterlist
     * @example
     * // Get one MaxicareMasterlist
     * const maxicareMasterlist = await prisma.maxicareMasterlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaxicareMasterlistFindFirstArgs>(args?: SelectSubset<T, MaxicareMasterlistFindFirstArgs<ExtArgs>>): Prisma__MaxicareMasterlistClient<$Result.GetResult<Prisma.$MaxicareMasterlistPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first MaxicareMasterlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaxicareMasterlistFindFirstOrThrowArgs} args - Arguments to find a MaxicareMasterlist
     * @example
     * // Get one MaxicareMasterlist
     * const maxicareMasterlist = await prisma.maxicareMasterlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaxicareMasterlistFindFirstOrThrowArgs>(args?: SelectSubset<T, MaxicareMasterlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaxicareMasterlistClient<$Result.GetResult<Prisma.$MaxicareMasterlistPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more MaxicareMasterlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaxicareMasterlistFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends MaxicareMasterlistFindManyArgs>(args?: SelectSubset<T, MaxicareMasterlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaxicareMasterlistPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a MaxicareMasterlist.
     * @param {MaxicareMasterlistCreateArgs} args - Arguments to create a MaxicareMasterlist.
     * @example
     * // Create one MaxicareMasterlist
     * const MaxicareMasterlist = await prisma.maxicareMasterlist.create({
     *   data: {
     *     // ... data to create a MaxicareMasterlist
     *   }
     * })
     * 
     */
    create<T extends MaxicareMasterlistCreateArgs>(args: SelectSubset<T, MaxicareMasterlistCreateArgs<ExtArgs>>): Prisma__MaxicareMasterlistClient<$Result.GetResult<Prisma.$MaxicareMasterlistPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many MaxicareMasterlists.
     * @param {MaxicareMasterlistCreateManyArgs} args - Arguments to create many MaxicareMasterlists.
     * @example
     * // Create many MaxicareMasterlists
     * const maxicareMasterlist = await prisma.maxicareMasterlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaxicareMasterlistCreateManyArgs>(args?: SelectSubset<T, MaxicareMasterlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MaxicareMasterlist.
     * @param {MaxicareMasterlistDeleteArgs} args - Arguments to delete one MaxicareMasterlist.
     * @example
     * // Delete one MaxicareMasterlist
     * const MaxicareMasterlist = await prisma.maxicareMasterlist.delete({
     *   where: {
     *     // ... filter to delete one MaxicareMasterlist
     *   }
     * })
     * 
     */
    delete<T extends MaxicareMasterlistDeleteArgs>(args: SelectSubset<T, MaxicareMasterlistDeleteArgs<ExtArgs>>): Prisma__MaxicareMasterlistClient<$Result.GetResult<Prisma.$MaxicareMasterlistPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one MaxicareMasterlist.
     * @param {MaxicareMasterlistUpdateArgs} args - Arguments to update one MaxicareMasterlist.
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
    update<T extends MaxicareMasterlistUpdateArgs>(args: SelectSubset<T, MaxicareMasterlistUpdateArgs<ExtArgs>>): Prisma__MaxicareMasterlistClient<$Result.GetResult<Prisma.$MaxicareMasterlistPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more MaxicareMasterlists.
     * @param {MaxicareMasterlistDeleteManyArgs} args - Arguments to filter MaxicareMasterlists to delete.
     * @example
     * // Delete a few MaxicareMasterlists
     * const { count } = await prisma.maxicareMasterlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaxicareMasterlistDeleteManyArgs>(args?: SelectSubset<T, MaxicareMasterlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaxicareMasterlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaxicareMasterlistUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends MaxicareMasterlistUpdateManyArgs>(args: SelectSubset<T, MaxicareMasterlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MaxicareMasterlist.
     * @param {MaxicareMasterlistUpsertArgs} args - Arguments to update or create a MaxicareMasterlist.
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
    upsert<T extends MaxicareMasterlistUpsertArgs>(args: SelectSubset<T, MaxicareMasterlistUpsertArgs<ExtArgs>>): Prisma__MaxicareMasterlistClient<$Result.GetResult<Prisma.$MaxicareMasterlistPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of MaxicareMasterlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaxicareMasterlistCountArgs} args - Arguments to filter MaxicareMasterlists to count.
     * @example
     * // Count the number of MaxicareMasterlists
     * const count = await prisma.maxicareMasterlist.count({
     *   where: {
     *     // ... the filter for the MaxicareMasterlists we want to count
     *   }
     * })
    **/
    count<T extends MaxicareMasterlistCountArgs>(
      args?: Subset<T, MaxicareMasterlistCountArgs>,
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
     * @param {MaxicareMasterlistGroupByArgs} args - Group by arguments.
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
      T extends MaxicareMasterlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaxicareMasterlistGroupByArgs['orderBy'] }
        : { orderBy?: MaxicareMasterlistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaxicareMasterlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaxicareMasterlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaxicareMasterlist model
   */
  readonly fields: MaxicareMasterlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaxicareMasterlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaxicareMasterlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Clients<T extends ClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientsDefaultArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the MaxicareMasterlist model
   */ 
  interface MaxicareMasterlistFieldRefs {
    readonly id: FieldRef<"MaxicareMasterlist", 'Int'>
    readonly clientId: FieldRef<"MaxicareMasterlist", 'Int'>
    readonly PY: FieldRef<"MaxicareMasterlist", 'String'>
    readonly ACCOUNT_NO: FieldRef<"MaxicareMasterlist", 'String'>
    readonly STATUS: FieldRef<"MaxicareMasterlist", 'String'>
    readonly MEMBER_TYPE: FieldRef<"MaxicareMasterlist", 'String'>
    readonly LIMIT: FieldRef<"MaxicareMasterlist", 'Float'>
    readonly RELATION: FieldRef<"MaxicareMasterlist", 'String'>
    readonly EE_ID: FieldRef<"MaxicareMasterlist", 'String'>
    readonly CARD_NO: FieldRef<"MaxicareMasterlist", 'String'>
    readonly COMPANY: FieldRef<"MaxicareMasterlist", 'String'>
    readonly createdAt: FieldRef<"MaxicareMasterlist", 'DateTime'>
    readonly updatedAt: FieldRef<"MaxicareMasterlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaxicareMasterlist findUnique
   */
  export type MaxicareMasterlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaxicareMasterlist
     */
    select?: MaxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaxicareMasterlist
     */
    omit?: MaxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which MaxicareMasterlist to fetch.
     */
    where: MaxicareMasterlistWhereUniqueInput
  }

  /**
   * MaxicareMasterlist findUniqueOrThrow
   */
  export type MaxicareMasterlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaxicareMasterlist
     */
    select?: MaxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaxicareMasterlist
     */
    omit?: MaxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which MaxicareMasterlist to fetch.
     */
    where: MaxicareMasterlistWhereUniqueInput
  }

  /**
   * MaxicareMasterlist findFirst
   */
  export type MaxicareMasterlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaxicareMasterlist
     */
    select?: MaxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaxicareMasterlist
     */
    omit?: MaxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which MaxicareMasterlist to fetch.
     */
    where?: MaxicareMasterlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaxicareMasterlists to fetch.
     */
    orderBy?: MaxicareMasterlistOrderByWithRelationInput | MaxicareMasterlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaxicareMasterlists.
     */
    cursor?: MaxicareMasterlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaxicareMasterlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaxicareMasterlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaxicareMasterlists.
     */
    distinct?: MaxicareMasterlistScalarFieldEnum | MaxicareMasterlistScalarFieldEnum[]
  }

  /**
   * MaxicareMasterlist findFirstOrThrow
   */
  export type MaxicareMasterlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaxicareMasterlist
     */
    select?: MaxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaxicareMasterlist
     */
    omit?: MaxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which MaxicareMasterlist to fetch.
     */
    where?: MaxicareMasterlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaxicareMasterlists to fetch.
     */
    orderBy?: MaxicareMasterlistOrderByWithRelationInput | MaxicareMasterlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaxicareMasterlists.
     */
    cursor?: MaxicareMasterlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaxicareMasterlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaxicareMasterlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaxicareMasterlists.
     */
    distinct?: MaxicareMasterlistScalarFieldEnum | MaxicareMasterlistScalarFieldEnum[]
  }

  /**
   * MaxicareMasterlist findMany
   */
  export type MaxicareMasterlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaxicareMasterlist
     */
    select?: MaxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaxicareMasterlist
     */
    omit?: MaxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter, which MaxicareMasterlists to fetch.
     */
    where?: MaxicareMasterlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaxicareMasterlists to fetch.
     */
    orderBy?: MaxicareMasterlistOrderByWithRelationInput | MaxicareMasterlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaxicareMasterlists.
     */
    cursor?: MaxicareMasterlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaxicareMasterlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaxicareMasterlists.
     */
    skip?: number
    distinct?: MaxicareMasterlistScalarFieldEnum | MaxicareMasterlistScalarFieldEnum[]
  }

  /**
   * MaxicareMasterlist create
   */
  export type MaxicareMasterlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaxicareMasterlist
     */
    select?: MaxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaxicareMasterlist
     */
    omit?: MaxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareMasterlistInclude<ExtArgs> | null
    /**
     * The data needed to create a MaxicareMasterlist.
     */
    data: XOR<MaxicareMasterlistCreateInput, MaxicareMasterlistUncheckedCreateInput>
  }

  /**
   * MaxicareMasterlist createMany
   */
  export type MaxicareMasterlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaxicareMasterlists.
     */
    data: MaxicareMasterlistCreateManyInput | MaxicareMasterlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaxicareMasterlist update
   */
  export type MaxicareMasterlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaxicareMasterlist
     */
    select?: MaxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaxicareMasterlist
     */
    omit?: MaxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareMasterlistInclude<ExtArgs> | null
    /**
     * The data needed to update a MaxicareMasterlist.
     */
    data: XOR<MaxicareMasterlistUpdateInput, MaxicareMasterlistUncheckedUpdateInput>
    /**
     * Choose, which MaxicareMasterlist to update.
     */
    where: MaxicareMasterlistWhereUniqueInput
  }

  /**
   * MaxicareMasterlist updateMany
   */
  export type MaxicareMasterlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaxicareMasterlists.
     */
    data: XOR<MaxicareMasterlistUpdateManyMutationInput, MaxicareMasterlistUncheckedUpdateManyInput>
    /**
     * Filter which MaxicareMasterlists to update
     */
    where?: MaxicareMasterlistWhereInput
    /**
     * Limit how many MaxicareMasterlists to update.
     */
    limit?: number
  }

  /**
   * MaxicareMasterlist upsert
   */
  export type MaxicareMasterlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaxicareMasterlist
     */
    select?: MaxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaxicareMasterlist
     */
    omit?: MaxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareMasterlistInclude<ExtArgs> | null
    /**
     * The filter to search for the MaxicareMasterlist to update in case it exists.
     */
    where: MaxicareMasterlistWhereUniqueInput
    /**
     * In case the MaxicareMasterlist found by the `where` argument doesn't exist, create a new MaxicareMasterlist with this data.
     */
    create: XOR<MaxicareMasterlistCreateInput, MaxicareMasterlistUncheckedCreateInput>
    /**
     * In case the MaxicareMasterlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaxicareMasterlistUpdateInput, MaxicareMasterlistUncheckedUpdateInput>
  }

  /**
   * MaxicareMasterlist delete
   */
  export type MaxicareMasterlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaxicareMasterlist
     */
    select?: MaxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaxicareMasterlist
     */
    omit?: MaxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareMasterlistInclude<ExtArgs> | null
    /**
     * Filter which MaxicareMasterlist to delete.
     */
    where: MaxicareMasterlistWhereUniqueInput
  }

  /**
   * MaxicareMasterlist deleteMany
   */
  export type MaxicareMasterlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaxicareMasterlists to delete
     */
    where?: MaxicareMasterlistWhereInput
    /**
     * Limit how many MaxicareMasterlists to delete.
     */
    limit?: number
  }

  /**
   * MaxicareMasterlist without action
   */
  export type MaxicareMasterlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaxicareMasterlist
     */
    select?: MaxicareMasterlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaxicareMasterlist
     */
    omit?: MaxicareMasterlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareMasterlistInclude<ExtArgs> | null
  }


  /**
   * Model Intellicare
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
     * Filter which Intellicare to aggregate.
     */
    where?: IntellicareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intellicares to fetch.
     */
    orderBy?: IntellicareOrderByWithRelationInput | IntellicareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntellicareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intellicares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intellicares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Intellicares
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




  export type IntellicareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntellicareWhereInput
    orderBy?: IntellicareOrderByWithAggregationInput | IntellicareOrderByWithAggregationInput[]
    by: IntellicareScalarFieldEnum[] | IntellicareScalarFieldEnum
    having?: IntellicareScalarWhereWithAggregatesInput
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

  type GetIntellicareGroupByPayload<T extends IntellicareGroupByArgs> = Prisma.PrismaPromise<
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


  export type IntellicareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    Clients?: boolean | ClientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intellicare"]>



  export type IntellicareSelectScalar = {
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

  export type IntellicareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "PY" | "Company" | "Member_Account" | "Member_Type" | "ICD_10_Code" | "Diagnosis" | "Claim_Type" | "Admission_Date" | "Provider_Name" | "Provider_Type" | "Approved_Claim_Amount" | "Class_Plan_Level" | "Maximum_Benefit_Limit" | "Date_of_Birth" | "Relationship" | "createdAt" | "updatedAt", ExtArgs["result"]["intellicare"]>
  export type IntellicareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clients?: boolean | ClientsDefaultArgs<ExtArgs>
  }

  export type $IntellicarePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Intellicare"
    objects: {
      Clients: Prisma.$ClientsPayload<ExtArgs>
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

  type IntellicareGetPayload<S extends boolean | null | undefined | IntellicareDefaultArgs> = $Result.GetResult<Prisma.$IntellicarePayload, S>

  type IntellicareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntellicareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntellicareCountAggregateInputType | true
    }

  export interface IntellicareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Intellicare'], meta: { name: 'Intellicare' } }
    /**
     * Find zero or one Intellicare that matches the filter.
     * @param {IntellicareFindUniqueArgs} args - Arguments to find a Intellicare
     * @example
     * // Get one Intellicare
     * const intellicare = await prisma.intellicare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntellicareFindUniqueArgs>(args: SelectSubset<T, IntellicareFindUniqueArgs<ExtArgs>>): Prisma__IntellicareClient<$Result.GetResult<Prisma.$IntellicarePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Intellicare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntellicareFindUniqueOrThrowArgs} args - Arguments to find a Intellicare
     * @example
     * // Get one Intellicare
     * const intellicare = await prisma.intellicare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntellicareFindUniqueOrThrowArgs>(args: SelectSubset<T, IntellicareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntellicareClient<$Result.GetResult<Prisma.$IntellicarePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Intellicare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntellicareFindFirstArgs} args - Arguments to find a Intellicare
     * @example
     * // Get one Intellicare
     * const intellicare = await prisma.intellicare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntellicareFindFirstArgs>(args?: SelectSubset<T, IntellicareFindFirstArgs<ExtArgs>>): Prisma__IntellicareClient<$Result.GetResult<Prisma.$IntellicarePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Intellicare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntellicareFindFirstOrThrowArgs} args - Arguments to find a Intellicare
     * @example
     * // Get one Intellicare
     * const intellicare = await prisma.intellicare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntellicareFindFirstOrThrowArgs>(args?: SelectSubset<T, IntellicareFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntellicareClient<$Result.GetResult<Prisma.$IntellicarePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Intellicares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntellicareFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends IntellicareFindManyArgs>(args?: SelectSubset<T, IntellicareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntellicarePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Intellicare.
     * @param {IntellicareCreateArgs} args - Arguments to create a Intellicare.
     * @example
     * // Create one Intellicare
     * const Intellicare = await prisma.intellicare.create({
     *   data: {
     *     // ... data to create a Intellicare
     *   }
     * })
     * 
     */
    create<T extends IntellicareCreateArgs>(args: SelectSubset<T, IntellicareCreateArgs<ExtArgs>>): Prisma__IntellicareClient<$Result.GetResult<Prisma.$IntellicarePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Intellicares.
     * @param {IntellicareCreateManyArgs} args - Arguments to create many Intellicares.
     * @example
     * // Create many Intellicares
     * const intellicare = await prisma.intellicare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntellicareCreateManyArgs>(args?: SelectSubset<T, IntellicareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Intellicare.
     * @param {IntellicareDeleteArgs} args - Arguments to delete one Intellicare.
     * @example
     * // Delete one Intellicare
     * const Intellicare = await prisma.intellicare.delete({
     *   where: {
     *     // ... filter to delete one Intellicare
     *   }
     * })
     * 
     */
    delete<T extends IntellicareDeleteArgs>(args: SelectSubset<T, IntellicareDeleteArgs<ExtArgs>>): Prisma__IntellicareClient<$Result.GetResult<Prisma.$IntellicarePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Intellicare.
     * @param {IntellicareUpdateArgs} args - Arguments to update one Intellicare.
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
    update<T extends IntellicareUpdateArgs>(args: SelectSubset<T, IntellicareUpdateArgs<ExtArgs>>): Prisma__IntellicareClient<$Result.GetResult<Prisma.$IntellicarePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Intellicares.
     * @param {IntellicareDeleteManyArgs} args - Arguments to filter Intellicares to delete.
     * @example
     * // Delete a few Intellicares
     * const { count } = await prisma.intellicare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntellicareDeleteManyArgs>(args?: SelectSubset<T, IntellicareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Intellicares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntellicareUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends IntellicareUpdateManyArgs>(args: SelectSubset<T, IntellicareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Intellicare.
     * @param {IntellicareUpsertArgs} args - Arguments to update or create a Intellicare.
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
    upsert<T extends IntellicareUpsertArgs>(args: SelectSubset<T, IntellicareUpsertArgs<ExtArgs>>): Prisma__IntellicareClient<$Result.GetResult<Prisma.$IntellicarePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Intellicares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntellicareCountArgs} args - Arguments to filter Intellicares to count.
     * @example
     * // Count the number of Intellicares
     * const count = await prisma.intellicare.count({
     *   where: {
     *     // ... the filter for the Intellicares we want to count
     *   }
     * })
    **/
    count<T extends IntellicareCountArgs>(
      args?: Subset<T, IntellicareCountArgs>,
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
     * @param {IntellicareGroupByArgs} args - Group by arguments.
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
      T extends IntellicareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntellicareGroupByArgs['orderBy'] }
        : { orderBy?: IntellicareGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IntellicareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntellicareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Intellicare model
   */
  readonly fields: IntellicareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Intellicare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntellicareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Clients<T extends ClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientsDefaultArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Intellicare model
   */ 
  interface IntellicareFieldRefs {
    readonly id: FieldRef<"Intellicare", 'Int'>
    readonly clientId: FieldRef<"Intellicare", 'Int'>
    readonly PY: FieldRef<"Intellicare", 'String'>
    readonly Company: FieldRef<"Intellicare", 'String'>
    readonly Member_Account: FieldRef<"Intellicare", 'String'>
    readonly Member_Type: FieldRef<"Intellicare", 'String'>
    readonly ICD_10_Code: FieldRef<"Intellicare", 'String'>
    readonly Diagnosis: FieldRef<"Intellicare", 'String'>
    readonly Claim_Type: FieldRef<"Intellicare", 'String'>
    readonly Admission_Date: FieldRef<"Intellicare", 'DateTime'>
    readonly Provider_Name: FieldRef<"Intellicare", 'String'>
    readonly Provider_Type: FieldRef<"Intellicare", 'String'>
    readonly Approved_Claim_Amount: FieldRef<"Intellicare", 'Float'>
    readonly Class_Plan_Level: FieldRef<"Intellicare", 'String'>
    readonly Maximum_Benefit_Limit: FieldRef<"Intellicare", 'Float'>
    readonly Date_of_Birth: FieldRef<"Intellicare", 'DateTime'>
    readonly Relationship: FieldRef<"Intellicare", 'String'>
    readonly createdAt: FieldRef<"Intellicare", 'DateTime'>
    readonly updatedAt: FieldRef<"Intellicare", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Intellicare findUnique
   */
  export type IntellicareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intellicare
     */
    select?: IntellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intellicare
     */
    omit?: IntellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareInclude<ExtArgs> | null
    /**
     * Filter, which Intellicare to fetch.
     */
    where: IntellicareWhereUniqueInput
  }

  /**
   * Intellicare findUniqueOrThrow
   */
  export type IntellicareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intellicare
     */
    select?: IntellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intellicare
     */
    omit?: IntellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareInclude<ExtArgs> | null
    /**
     * Filter, which Intellicare to fetch.
     */
    where: IntellicareWhereUniqueInput
  }

  /**
   * Intellicare findFirst
   */
  export type IntellicareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intellicare
     */
    select?: IntellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intellicare
     */
    omit?: IntellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareInclude<ExtArgs> | null
    /**
     * Filter, which Intellicare to fetch.
     */
    where?: IntellicareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intellicares to fetch.
     */
    orderBy?: IntellicareOrderByWithRelationInput | IntellicareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Intellicares.
     */
    cursor?: IntellicareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intellicares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intellicares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Intellicares.
     */
    distinct?: IntellicareScalarFieldEnum | IntellicareScalarFieldEnum[]
  }

  /**
   * Intellicare findFirstOrThrow
   */
  export type IntellicareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intellicare
     */
    select?: IntellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intellicare
     */
    omit?: IntellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareInclude<ExtArgs> | null
    /**
     * Filter, which Intellicare to fetch.
     */
    where?: IntellicareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intellicares to fetch.
     */
    orderBy?: IntellicareOrderByWithRelationInput | IntellicareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Intellicares.
     */
    cursor?: IntellicareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intellicares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intellicares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Intellicares.
     */
    distinct?: IntellicareScalarFieldEnum | IntellicareScalarFieldEnum[]
  }

  /**
   * Intellicare findMany
   */
  export type IntellicareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intellicare
     */
    select?: IntellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intellicare
     */
    omit?: IntellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareInclude<ExtArgs> | null
    /**
     * Filter, which Intellicares to fetch.
     */
    where?: IntellicareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Intellicares to fetch.
     */
    orderBy?: IntellicareOrderByWithRelationInput | IntellicareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Intellicares.
     */
    cursor?: IntellicareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Intellicares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Intellicares.
     */
    skip?: number
    distinct?: IntellicareScalarFieldEnum | IntellicareScalarFieldEnum[]
  }

  /**
   * Intellicare create
   */
  export type IntellicareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intellicare
     */
    select?: IntellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intellicare
     */
    omit?: IntellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareInclude<ExtArgs> | null
    /**
     * The data needed to create a Intellicare.
     */
    data: XOR<IntellicareCreateInput, IntellicareUncheckedCreateInput>
  }

  /**
   * Intellicare createMany
   */
  export type IntellicareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Intellicares.
     */
    data: IntellicareCreateManyInput | IntellicareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Intellicare update
   */
  export type IntellicareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intellicare
     */
    select?: IntellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intellicare
     */
    omit?: IntellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareInclude<ExtArgs> | null
    /**
     * The data needed to update a Intellicare.
     */
    data: XOR<IntellicareUpdateInput, IntellicareUncheckedUpdateInput>
    /**
     * Choose, which Intellicare to update.
     */
    where: IntellicareWhereUniqueInput
  }

  /**
   * Intellicare updateMany
   */
  export type IntellicareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Intellicares.
     */
    data: XOR<IntellicareUpdateManyMutationInput, IntellicareUncheckedUpdateManyInput>
    /**
     * Filter which Intellicares to update
     */
    where?: IntellicareWhereInput
    /**
     * Limit how many Intellicares to update.
     */
    limit?: number
  }

  /**
   * Intellicare upsert
   */
  export type IntellicareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intellicare
     */
    select?: IntellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intellicare
     */
    omit?: IntellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareInclude<ExtArgs> | null
    /**
     * The filter to search for the Intellicare to update in case it exists.
     */
    where: IntellicareWhereUniqueInput
    /**
     * In case the Intellicare found by the `where` argument doesn't exist, create a new Intellicare with this data.
     */
    create: XOR<IntellicareCreateInput, IntellicareUncheckedCreateInput>
    /**
     * In case the Intellicare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntellicareUpdateInput, IntellicareUncheckedUpdateInput>
  }

  /**
   * Intellicare delete
   */
  export type IntellicareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intellicare
     */
    select?: IntellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intellicare
     */
    omit?: IntellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareInclude<ExtArgs> | null
    /**
     * Filter which Intellicare to delete.
     */
    where: IntellicareWhereUniqueInput
  }

  /**
   * Intellicare deleteMany
   */
  export type IntellicareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Intellicares to delete
     */
    where?: IntellicareWhereInput
    /**
     * Limit how many Intellicares to delete.
     */
    limit?: number
  }

  /**
   * Intellicare without action
   */
  export type IntellicareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intellicare
     */
    select?: IntellicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Intellicare
     */
    omit?: IntellicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntellicareInclude<ExtArgs> | null
  }


  /**
   * Model Maxicare
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
     * Filter which Maxicare to aggregate.
     */
    where?: MaxicareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maxicares to fetch.
     */
    orderBy?: MaxicareOrderByWithRelationInput | MaxicareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaxicareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maxicares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maxicares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maxicares
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




  export type MaxicareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaxicareWhereInput
    orderBy?: MaxicareOrderByWithAggregationInput | MaxicareOrderByWithAggregationInput[]
    by: MaxicareScalarFieldEnum[] | MaxicareScalarFieldEnum
    having?: MaxicareScalarWhereWithAggregatesInput
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

  type GetMaxicareGroupByPayload<T extends MaxicareGroupByArgs> = Prisma.PrismaPromise<
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


  export type MaxicareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    Clients?: boolean | ClientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maxicare"]>



  export type MaxicareSelectScalar = {
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

  export type MaxicareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "PY" | "Company" | "Member_Account" | "Member_Type" | "ICD_10_Code" | "Diagnosis" | "Claim_Type" | "Admission_Date" | "Provider_Name" | "Provider_Type" | "Approved_Claim_Amount" | "Relationship" | "createdAt" | "updatedAt", ExtArgs["result"]["maxicare"]>
  export type MaxicareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clients?: boolean | ClientsDefaultArgs<ExtArgs>
  }

  export type $MaxicarePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Maxicare"
    objects: {
      Clients: Prisma.$ClientsPayload<ExtArgs>
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

  type MaxicareGetPayload<S extends boolean | null | undefined | MaxicareDefaultArgs> = $Result.GetResult<Prisma.$MaxicarePayload, S>

  type MaxicareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaxicareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaxicareCountAggregateInputType | true
    }

  export interface MaxicareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Maxicare'], meta: { name: 'Maxicare' } }
    /**
     * Find zero or one Maxicare that matches the filter.
     * @param {MaxicareFindUniqueArgs} args - Arguments to find a Maxicare
     * @example
     * // Get one Maxicare
     * const maxicare = await prisma.maxicare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaxicareFindUniqueArgs>(args: SelectSubset<T, MaxicareFindUniqueArgs<ExtArgs>>): Prisma__MaxicareClient<$Result.GetResult<Prisma.$MaxicarePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Maxicare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaxicareFindUniqueOrThrowArgs} args - Arguments to find a Maxicare
     * @example
     * // Get one Maxicare
     * const maxicare = await prisma.maxicare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaxicareFindUniqueOrThrowArgs>(args: SelectSubset<T, MaxicareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaxicareClient<$Result.GetResult<Prisma.$MaxicarePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Maxicare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaxicareFindFirstArgs} args - Arguments to find a Maxicare
     * @example
     * // Get one Maxicare
     * const maxicare = await prisma.maxicare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaxicareFindFirstArgs>(args?: SelectSubset<T, MaxicareFindFirstArgs<ExtArgs>>): Prisma__MaxicareClient<$Result.GetResult<Prisma.$MaxicarePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Maxicare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaxicareFindFirstOrThrowArgs} args - Arguments to find a Maxicare
     * @example
     * // Get one Maxicare
     * const maxicare = await prisma.maxicare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaxicareFindFirstOrThrowArgs>(args?: SelectSubset<T, MaxicareFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaxicareClient<$Result.GetResult<Prisma.$MaxicarePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Maxicares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaxicareFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends MaxicareFindManyArgs>(args?: SelectSubset<T, MaxicareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaxicarePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Maxicare.
     * @param {MaxicareCreateArgs} args - Arguments to create a Maxicare.
     * @example
     * // Create one Maxicare
     * const Maxicare = await prisma.maxicare.create({
     *   data: {
     *     // ... data to create a Maxicare
     *   }
     * })
     * 
     */
    create<T extends MaxicareCreateArgs>(args: SelectSubset<T, MaxicareCreateArgs<ExtArgs>>): Prisma__MaxicareClient<$Result.GetResult<Prisma.$MaxicarePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Maxicares.
     * @param {MaxicareCreateManyArgs} args - Arguments to create many Maxicares.
     * @example
     * // Create many Maxicares
     * const maxicare = await prisma.maxicare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaxicareCreateManyArgs>(args?: SelectSubset<T, MaxicareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Maxicare.
     * @param {MaxicareDeleteArgs} args - Arguments to delete one Maxicare.
     * @example
     * // Delete one Maxicare
     * const Maxicare = await prisma.maxicare.delete({
     *   where: {
     *     // ... filter to delete one Maxicare
     *   }
     * })
     * 
     */
    delete<T extends MaxicareDeleteArgs>(args: SelectSubset<T, MaxicareDeleteArgs<ExtArgs>>): Prisma__MaxicareClient<$Result.GetResult<Prisma.$MaxicarePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Maxicare.
     * @param {MaxicareUpdateArgs} args - Arguments to update one Maxicare.
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
    update<T extends MaxicareUpdateArgs>(args: SelectSubset<T, MaxicareUpdateArgs<ExtArgs>>): Prisma__MaxicareClient<$Result.GetResult<Prisma.$MaxicarePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Maxicares.
     * @param {MaxicareDeleteManyArgs} args - Arguments to filter Maxicares to delete.
     * @example
     * // Delete a few Maxicares
     * const { count } = await prisma.maxicare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaxicareDeleteManyArgs>(args?: SelectSubset<T, MaxicareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maxicares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaxicareUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends MaxicareUpdateManyArgs>(args: SelectSubset<T, MaxicareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Maxicare.
     * @param {MaxicareUpsertArgs} args - Arguments to update or create a Maxicare.
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
    upsert<T extends MaxicareUpsertArgs>(args: SelectSubset<T, MaxicareUpsertArgs<ExtArgs>>): Prisma__MaxicareClient<$Result.GetResult<Prisma.$MaxicarePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Maxicares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaxicareCountArgs} args - Arguments to filter Maxicares to count.
     * @example
     * // Count the number of Maxicares
     * const count = await prisma.maxicare.count({
     *   where: {
     *     // ... the filter for the Maxicares we want to count
     *   }
     * })
    **/
    count<T extends MaxicareCountArgs>(
      args?: Subset<T, MaxicareCountArgs>,
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
     * @param {MaxicareGroupByArgs} args - Group by arguments.
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
      T extends MaxicareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaxicareGroupByArgs['orderBy'] }
        : { orderBy?: MaxicareGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaxicareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaxicareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Maxicare model
   */
  readonly fields: MaxicareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Maxicare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaxicareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Clients<T extends ClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientsDefaultArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Maxicare model
   */ 
  interface MaxicareFieldRefs {
    readonly id: FieldRef<"Maxicare", 'Int'>
    readonly clientId: FieldRef<"Maxicare", 'Int'>
    readonly PY: FieldRef<"Maxicare", 'String'>
    readonly Company: FieldRef<"Maxicare", 'String'>
    readonly Member_Account: FieldRef<"Maxicare", 'String'>
    readonly Member_Type: FieldRef<"Maxicare", 'String'>
    readonly ICD_10_Code: FieldRef<"Maxicare", 'String'>
    readonly Diagnosis: FieldRef<"Maxicare", 'String'>
    readonly Claim_Type: FieldRef<"Maxicare", 'String'>
    readonly Admission_Date: FieldRef<"Maxicare", 'DateTime'>
    readonly Provider_Name: FieldRef<"Maxicare", 'String'>
    readonly Provider_Type: FieldRef<"Maxicare", 'String'>
    readonly Approved_Claim_Amount: FieldRef<"Maxicare", 'Float'>
    readonly Relationship: FieldRef<"Maxicare", 'String'>
    readonly createdAt: FieldRef<"Maxicare", 'DateTime'>
    readonly updatedAt: FieldRef<"Maxicare", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Maxicare findUnique
   */
  export type MaxicareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maxicare
     */
    select?: MaxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maxicare
     */
    omit?: MaxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareInclude<ExtArgs> | null
    /**
     * Filter, which Maxicare to fetch.
     */
    where: MaxicareWhereUniqueInput
  }

  /**
   * Maxicare findUniqueOrThrow
   */
  export type MaxicareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maxicare
     */
    select?: MaxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maxicare
     */
    omit?: MaxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareInclude<ExtArgs> | null
    /**
     * Filter, which Maxicare to fetch.
     */
    where: MaxicareWhereUniqueInput
  }

  /**
   * Maxicare findFirst
   */
  export type MaxicareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maxicare
     */
    select?: MaxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maxicare
     */
    omit?: MaxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareInclude<ExtArgs> | null
    /**
     * Filter, which Maxicare to fetch.
     */
    where?: MaxicareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maxicares to fetch.
     */
    orderBy?: MaxicareOrderByWithRelationInput | MaxicareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maxicares.
     */
    cursor?: MaxicareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maxicares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maxicares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maxicares.
     */
    distinct?: MaxicareScalarFieldEnum | MaxicareScalarFieldEnum[]
  }

  /**
   * Maxicare findFirstOrThrow
   */
  export type MaxicareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maxicare
     */
    select?: MaxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maxicare
     */
    omit?: MaxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareInclude<ExtArgs> | null
    /**
     * Filter, which Maxicare to fetch.
     */
    where?: MaxicareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maxicares to fetch.
     */
    orderBy?: MaxicareOrderByWithRelationInput | MaxicareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maxicares.
     */
    cursor?: MaxicareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maxicares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maxicares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maxicares.
     */
    distinct?: MaxicareScalarFieldEnum | MaxicareScalarFieldEnum[]
  }

  /**
   * Maxicare findMany
   */
  export type MaxicareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maxicare
     */
    select?: MaxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maxicare
     */
    omit?: MaxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareInclude<ExtArgs> | null
    /**
     * Filter, which Maxicares to fetch.
     */
    where?: MaxicareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maxicares to fetch.
     */
    orderBy?: MaxicareOrderByWithRelationInput | MaxicareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maxicares.
     */
    cursor?: MaxicareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maxicares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maxicares.
     */
    skip?: number
    distinct?: MaxicareScalarFieldEnum | MaxicareScalarFieldEnum[]
  }

  /**
   * Maxicare create
   */
  export type MaxicareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maxicare
     */
    select?: MaxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maxicare
     */
    omit?: MaxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareInclude<ExtArgs> | null
    /**
     * The data needed to create a Maxicare.
     */
    data: XOR<MaxicareCreateInput, MaxicareUncheckedCreateInput>
  }

  /**
   * Maxicare createMany
   */
  export type MaxicareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maxicares.
     */
    data: MaxicareCreateManyInput | MaxicareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Maxicare update
   */
  export type MaxicareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maxicare
     */
    select?: MaxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maxicare
     */
    omit?: MaxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareInclude<ExtArgs> | null
    /**
     * The data needed to update a Maxicare.
     */
    data: XOR<MaxicareUpdateInput, MaxicareUncheckedUpdateInput>
    /**
     * Choose, which Maxicare to update.
     */
    where: MaxicareWhereUniqueInput
  }

  /**
   * Maxicare updateMany
   */
  export type MaxicareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maxicares.
     */
    data: XOR<MaxicareUpdateManyMutationInput, MaxicareUncheckedUpdateManyInput>
    /**
     * Filter which Maxicares to update
     */
    where?: MaxicareWhereInput
    /**
     * Limit how many Maxicares to update.
     */
    limit?: number
  }

  /**
   * Maxicare upsert
   */
  export type MaxicareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maxicare
     */
    select?: MaxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maxicare
     */
    omit?: MaxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareInclude<ExtArgs> | null
    /**
     * The filter to search for the Maxicare to update in case it exists.
     */
    where: MaxicareWhereUniqueInput
    /**
     * In case the Maxicare found by the `where` argument doesn't exist, create a new Maxicare with this data.
     */
    create: XOR<MaxicareCreateInput, MaxicareUncheckedCreateInput>
    /**
     * In case the Maxicare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaxicareUpdateInput, MaxicareUncheckedUpdateInput>
  }

  /**
   * Maxicare delete
   */
  export type MaxicareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maxicare
     */
    select?: MaxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maxicare
     */
    omit?: MaxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareInclude<ExtArgs> | null
    /**
     * Filter which Maxicare to delete.
     */
    where: MaxicareWhereUniqueInput
  }

  /**
   * Maxicare deleteMany
   */
  export type MaxicareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maxicares to delete
     */
    where?: MaxicareWhereInput
    /**
     * Limit how many Maxicares to delete.
     */
    limit?: number
  }

  /**
   * Maxicare without action
   */
  export type MaxicareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maxicare
     */
    select?: MaxicareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maxicare
     */
    omit?: MaxicareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaxicareInclude<ExtArgs> | null
  }


  /**
   * Model CustomIllnesses
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
     * Filter which CustomIllnesses to aggregate.
     */
    where?: CustomIllnessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomIllnesses to fetch.
     */
    orderBy?: CustomIllnessesOrderByWithRelationInput | CustomIllnessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomIllnessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomIllnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomIllnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomIllnesses
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




  export type CustomIllnessesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomIllnessesWhereInput
    orderBy?: CustomIllnessesOrderByWithAggregationInput | CustomIllnessesOrderByWithAggregationInput[]
    by: CustomIllnessesScalarFieldEnum[] | CustomIllnessesScalarFieldEnum
    having?: CustomIllnessesScalarWhereWithAggregatesInput
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

  type GetCustomIllnessesGroupByPayload<T extends CustomIllnessesGroupByArgs> = Prisma.PrismaPromise<
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


  export type CustomIllnessesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    Clients?: boolean | ClientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customIllnesses"]>



  export type CustomIllnessesSelectScalar = {
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

  export type CustomIllnessesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "py" | "member_type" | "icd_10_code" | "diagnosis" | "claim_amount" | "percentage_to_total_amount" | "claim_count" | "percentage_to_total_count" | "average_cost_per_claim" | "createdAt" | "updatedAt", ExtArgs["result"]["customIllnesses"]>
  export type CustomIllnessesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Clients?: boolean | ClientsDefaultArgs<ExtArgs>
  }

  export type $CustomIllnessesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomIllnesses"
    objects: {
      Clients: Prisma.$ClientsPayload<ExtArgs>
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

  type CustomIllnessesGetPayload<S extends boolean | null | undefined | CustomIllnessesDefaultArgs> = $Result.GetResult<Prisma.$CustomIllnessesPayload, S>

  type CustomIllnessesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomIllnessesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomIllnessesCountAggregateInputType | true
    }

  export interface CustomIllnessesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomIllnesses'], meta: { name: 'CustomIllnesses' } }
    /**
     * Find zero or one CustomIllnesses that matches the filter.
     * @param {CustomIllnessesFindUniqueArgs} args - Arguments to find a CustomIllnesses
     * @example
     * // Get one CustomIllnesses
     * const customIllnesses = await prisma.customIllnesses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomIllnessesFindUniqueArgs>(args: SelectSubset<T, CustomIllnessesFindUniqueArgs<ExtArgs>>): Prisma__CustomIllnessesClient<$Result.GetResult<Prisma.$CustomIllnessesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CustomIllnesses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomIllnessesFindUniqueOrThrowArgs} args - Arguments to find a CustomIllnesses
     * @example
     * // Get one CustomIllnesses
     * const customIllnesses = await prisma.customIllnesses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomIllnessesFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomIllnessesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomIllnessesClient<$Result.GetResult<Prisma.$CustomIllnessesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CustomIllnesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomIllnessesFindFirstArgs} args - Arguments to find a CustomIllnesses
     * @example
     * // Get one CustomIllnesses
     * const customIllnesses = await prisma.customIllnesses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomIllnessesFindFirstArgs>(args?: SelectSubset<T, CustomIllnessesFindFirstArgs<ExtArgs>>): Prisma__CustomIllnessesClient<$Result.GetResult<Prisma.$CustomIllnessesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CustomIllnesses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomIllnessesFindFirstOrThrowArgs} args - Arguments to find a CustomIllnesses
     * @example
     * // Get one CustomIllnesses
     * const customIllnesses = await prisma.customIllnesses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomIllnessesFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomIllnessesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomIllnessesClient<$Result.GetResult<Prisma.$CustomIllnessesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CustomIllnesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomIllnessesFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends CustomIllnessesFindManyArgs>(args?: SelectSubset<T, CustomIllnessesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomIllnessesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CustomIllnesses.
     * @param {CustomIllnessesCreateArgs} args - Arguments to create a CustomIllnesses.
     * @example
     * // Create one CustomIllnesses
     * const CustomIllnesses = await prisma.customIllnesses.create({
     *   data: {
     *     // ... data to create a CustomIllnesses
     *   }
     * })
     * 
     */
    create<T extends CustomIllnessesCreateArgs>(args: SelectSubset<T, CustomIllnessesCreateArgs<ExtArgs>>): Prisma__CustomIllnessesClient<$Result.GetResult<Prisma.$CustomIllnessesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CustomIllnesses.
     * @param {CustomIllnessesCreateManyArgs} args - Arguments to create many CustomIllnesses.
     * @example
     * // Create many CustomIllnesses
     * const customIllnesses = await prisma.customIllnesses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomIllnessesCreateManyArgs>(args?: SelectSubset<T, CustomIllnessesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CustomIllnesses.
     * @param {CustomIllnessesDeleteArgs} args - Arguments to delete one CustomIllnesses.
     * @example
     * // Delete one CustomIllnesses
     * const CustomIllnesses = await prisma.customIllnesses.delete({
     *   where: {
     *     // ... filter to delete one CustomIllnesses
     *   }
     * })
     * 
     */
    delete<T extends CustomIllnessesDeleteArgs>(args: SelectSubset<T, CustomIllnessesDeleteArgs<ExtArgs>>): Prisma__CustomIllnessesClient<$Result.GetResult<Prisma.$CustomIllnessesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CustomIllnesses.
     * @param {CustomIllnessesUpdateArgs} args - Arguments to update one CustomIllnesses.
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
    update<T extends CustomIllnessesUpdateArgs>(args: SelectSubset<T, CustomIllnessesUpdateArgs<ExtArgs>>): Prisma__CustomIllnessesClient<$Result.GetResult<Prisma.$CustomIllnessesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CustomIllnesses.
     * @param {CustomIllnessesDeleteManyArgs} args - Arguments to filter CustomIllnesses to delete.
     * @example
     * // Delete a few CustomIllnesses
     * const { count } = await prisma.customIllnesses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomIllnessesDeleteManyArgs>(args?: SelectSubset<T, CustomIllnessesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomIllnesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomIllnessesUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends CustomIllnessesUpdateManyArgs>(args: SelectSubset<T, CustomIllnessesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomIllnesses.
     * @param {CustomIllnessesUpsertArgs} args - Arguments to update or create a CustomIllnesses.
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
    upsert<T extends CustomIllnessesUpsertArgs>(args: SelectSubset<T, CustomIllnessesUpsertArgs<ExtArgs>>): Prisma__CustomIllnessesClient<$Result.GetResult<Prisma.$CustomIllnessesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CustomIllnesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomIllnessesCountArgs} args - Arguments to filter CustomIllnesses to count.
     * @example
     * // Count the number of CustomIllnesses
     * const count = await prisma.customIllnesses.count({
     *   where: {
     *     // ... the filter for the CustomIllnesses we want to count
     *   }
     * })
    **/
    count<T extends CustomIllnessesCountArgs>(
      args?: Subset<T, CustomIllnessesCountArgs>,
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
     * @param {CustomIllnessesGroupByArgs} args - Group by arguments.
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
      T extends CustomIllnessesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomIllnessesGroupByArgs['orderBy'] }
        : { orderBy?: CustomIllnessesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomIllnessesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomIllnessesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomIllnesses model
   */
  readonly fields: CustomIllnessesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomIllnesses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomIllnessesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Clients<T extends ClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientsDefaultArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the CustomIllnesses model
   */ 
  interface CustomIllnessesFieldRefs {
    readonly id: FieldRef<"CustomIllnesses", 'Int'>
    readonly clientId: FieldRef<"CustomIllnesses", 'Int'>
    readonly py: FieldRef<"CustomIllnesses", 'String'>
    readonly member_type: FieldRef<"CustomIllnesses", 'String'>
    readonly icd_10_code: FieldRef<"CustomIllnesses", 'String'>
    readonly diagnosis: FieldRef<"CustomIllnesses", 'String'>
    readonly claim_amount: FieldRef<"CustomIllnesses", 'Int'>
    readonly percentage_to_total_amount: FieldRef<"CustomIllnesses", 'Decimal'>
    readonly claim_count: FieldRef<"CustomIllnesses", 'Int'>
    readonly percentage_to_total_count: FieldRef<"CustomIllnesses", 'Decimal'>
    readonly average_cost_per_claim: FieldRef<"CustomIllnesses", 'Int'>
    readonly createdAt: FieldRef<"CustomIllnesses", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomIllnesses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomIllnesses findUnique
   */
  export type CustomIllnessesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIllnesses
     */
    select?: CustomIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIllnesses
     */
    omit?: CustomIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomIllnessesInclude<ExtArgs> | null
    /**
     * Filter, which CustomIllnesses to fetch.
     */
    where: CustomIllnessesWhereUniqueInput
  }

  /**
   * CustomIllnesses findUniqueOrThrow
   */
  export type CustomIllnessesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIllnesses
     */
    select?: CustomIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIllnesses
     */
    omit?: CustomIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomIllnessesInclude<ExtArgs> | null
    /**
     * Filter, which CustomIllnesses to fetch.
     */
    where: CustomIllnessesWhereUniqueInput
  }

  /**
   * CustomIllnesses findFirst
   */
  export type CustomIllnessesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIllnesses
     */
    select?: CustomIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIllnesses
     */
    omit?: CustomIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomIllnessesInclude<ExtArgs> | null
    /**
     * Filter, which CustomIllnesses to fetch.
     */
    where?: CustomIllnessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomIllnesses to fetch.
     */
    orderBy?: CustomIllnessesOrderByWithRelationInput | CustomIllnessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomIllnesses.
     */
    cursor?: CustomIllnessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomIllnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomIllnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomIllnesses.
     */
    distinct?: CustomIllnessesScalarFieldEnum | CustomIllnessesScalarFieldEnum[]
  }

  /**
   * CustomIllnesses findFirstOrThrow
   */
  export type CustomIllnessesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIllnesses
     */
    select?: CustomIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIllnesses
     */
    omit?: CustomIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomIllnessesInclude<ExtArgs> | null
    /**
     * Filter, which CustomIllnesses to fetch.
     */
    where?: CustomIllnessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomIllnesses to fetch.
     */
    orderBy?: CustomIllnessesOrderByWithRelationInput | CustomIllnessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomIllnesses.
     */
    cursor?: CustomIllnessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomIllnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomIllnesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomIllnesses.
     */
    distinct?: CustomIllnessesScalarFieldEnum | CustomIllnessesScalarFieldEnum[]
  }

  /**
   * CustomIllnesses findMany
   */
  export type CustomIllnessesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIllnesses
     */
    select?: CustomIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIllnesses
     */
    omit?: CustomIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomIllnessesInclude<ExtArgs> | null
    /**
     * Filter, which CustomIllnesses to fetch.
     */
    where?: CustomIllnessesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomIllnesses to fetch.
     */
    orderBy?: CustomIllnessesOrderByWithRelationInput | CustomIllnessesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomIllnesses.
     */
    cursor?: CustomIllnessesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomIllnesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomIllnesses.
     */
    skip?: number
    distinct?: CustomIllnessesScalarFieldEnum | CustomIllnessesScalarFieldEnum[]
  }

  /**
   * CustomIllnesses create
   */
  export type CustomIllnessesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIllnesses
     */
    select?: CustomIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIllnesses
     */
    omit?: CustomIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomIllnessesInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomIllnesses.
     */
    data: XOR<CustomIllnessesCreateInput, CustomIllnessesUncheckedCreateInput>
  }

  /**
   * CustomIllnesses createMany
   */
  export type CustomIllnessesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomIllnesses.
     */
    data: CustomIllnessesCreateManyInput | CustomIllnessesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomIllnesses update
   */
  export type CustomIllnessesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIllnesses
     */
    select?: CustomIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIllnesses
     */
    omit?: CustomIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomIllnessesInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomIllnesses.
     */
    data: XOR<CustomIllnessesUpdateInput, CustomIllnessesUncheckedUpdateInput>
    /**
     * Choose, which CustomIllnesses to update.
     */
    where: CustomIllnessesWhereUniqueInput
  }

  /**
   * CustomIllnesses updateMany
   */
  export type CustomIllnessesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomIllnesses.
     */
    data: XOR<CustomIllnessesUpdateManyMutationInput, CustomIllnessesUncheckedUpdateManyInput>
    /**
     * Filter which CustomIllnesses to update
     */
    where?: CustomIllnessesWhereInput
    /**
     * Limit how many CustomIllnesses to update.
     */
    limit?: number
  }

  /**
   * CustomIllnesses upsert
   */
  export type CustomIllnessesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIllnesses
     */
    select?: CustomIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIllnesses
     */
    omit?: CustomIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomIllnessesInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomIllnesses to update in case it exists.
     */
    where: CustomIllnessesWhereUniqueInput
    /**
     * In case the CustomIllnesses found by the `where` argument doesn't exist, create a new CustomIllnesses with this data.
     */
    create: XOR<CustomIllnessesCreateInput, CustomIllnessesUncheckedCreateInput>
    /**
     * In case the CustomIllnesses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomIllnessesUpdateInput, CustomIllnessesUncheckedUpdateInput>
  }

  /**
   * CustomIllnesses delete
   */
  export type CustomIllnessesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIllnesses
     */
    select?: CustomIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIllnesses
     */
    omit?: CustomIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomIllnessesInclude<ExtArgs> | null
    /**
     * Filter which CustomIllnesses to delete.
     */
    where: CustomIllnessesWhereUniqueInput
  }

  /**
   * CustomIllnesses deleteMany
   */
  export type CustomIllnessesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomIllnesses to delete
     */
    where?: CustomIllnessesWhereInput
    /**
     * Limit how many CustomIllnesses to delete.
     */
    limit?: number
  }

  /**
   * CustomIllnesses without action
   */
  export type CustomIllnessesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomIllnesses
     */
    select?: CustomIllnessesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomIllnesses
     */
    omit?: CustomIllnessesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomIllnessesInclude<ExtArgs> | null
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


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const InsurersOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type InsurersOrderByRelevanceFieldEnum = (typeof InsurersOrderByRelevanceFieldEnum)[keyof typeof InsurersOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ClientsOrderByRelevanceFieldEnum: {
    client_name: 'client_name',
    description: 'description'
  };

  export type ClientsOrderByRelevanceFieldEnum = (typeof ClientsOrderByRelevanceFieldEnum)[keyof typeof ClientsOrderByRelevanceFieldEnum]


  export const UploadsOrderByRelevanceFieldEnum: {
    year: 'year',
    months: 'months',
    type: 'type'
  };

  export type UploadsOrderByRelevanceFieldEnum = (typeof UploadsOrderByRelevanceFieldEnum)[keyof typeof UploadsOrderByRelevanceFieldEnum]


  export const DecksOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type DecksOrderByRelevanceFieldEnum = (typeof DecksOrderByRelevanceFieldEnum)[keyof typeof DecksOrderByRelevanceFieldEnum]


  export const IntellicareMasterlistOrderByRelevanceFieldEnum: {
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

  export type IntellicareMasterlistOrderByRelevanceFieldEnum = (typeof IntellicareMasterlistOrderByRelevanceFieldEnum)[keyof typeof IntellicareMasterlistOrderByRelevanceFieldEnum]


  export const MaxicareMasterlistOrderByRelevanceFieldEnum: {
    PY: 'PY',
    ACCOUNT_NO: 'ACCOUNT_NO',
    STATUS: 'STATUS',
    MEMBER_TYPE: 'MEMBER_TYPE',
    RELATION: 'RELATION',
    EE_ID: 'EE_ID',
    CARD_NO: 'CARD_NO',
    COMPANY: 'COMPANY'
  };

  export type MaxicareMasterlistOrderByRelevanceFieldEnum = (typeof MaxicareMasterlistOrderByRelevanceFieldEnum)[keyof typeof MaxicareMasterlistOrderByRelevanceFieldEnum]


  export const IntellicareOrderByRelevanceFieldEnum: {
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

  export type IntellicareOrderByRelevanceFieldEnum = (typeof IntellicareOrderByRelevanceFieldEnum)[keyof typeof IntellicareOrderByRelevanceFieldEnum]


  export const MaxicareOrderByRelevanceFieldEnum: {
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

  export type MaxicareOrderByRelevanceFieldEnum = (typeof MaxicareOrderByRelevanceFieldEnum)[keyof typeof MaxicareOrderByRelevanceFieldEnum]


  export const CustomIllnessesOrderByRelevanceFieldEnum: {
    py: 'py',
    member_type: 'member_type',
    icd_10_code: 'icd_10_code',
    diagnosis: 'diagnosis'
  };

  export type CustomIllnessesOrderByRelevanceFieldEnum = (typeof CustomIllnessesOrderByRelevanceFieldEnum)[keyof typeof CustomIllnessesOrderByRelevanceFieldEnum]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    admin?: BoolFilter<"User"> | boolean
    canUpload?: BoolFilter<"User"> | boolean
    canCreate?: BoolFilter<"User"> | boolean
    canViewDeck?: BoolFilter<"User"> | boolean
    canUploadDeck?: BoolFilter<"User"> | boolean
    canAdd?: BoolFilter<"User"> | boolean
    canRemove?: BoolFilter<"User"> | boolean
    canEdit?: BoolFilter<"User"> | boolean
    superAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
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
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    admin?: BoolFilter<"User"> | boolean
    canUpload?: BoolFilter<"User"> | boolean
    canCreate?: BoolFilter<"User"> | boolean
    canViewDeck?: BoolFilter<"User"> | boolean
    canUploadDeck?: BoolFilter<"User"> | boolean
    canAdd?: BoolFilter<"User"> | boolean
    canRemove?: BoolFilter<"User"> | boolean
    canEdit?: BoolFilter<"User"> | boolean
    superAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
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
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    admin?: BoolWithAggregatesFilter<"User"> | boolean
    canUpload?: BoolWithAggregatesFilter<"User"> | boolean
    canCreate?: BoolWithAggregatesFilter<"User"> | boolean
    canViewDeck?: BoolWithAggregatesFilter<"User"> | boolean
    canUploadDeck?: BoolWithAggregatesFilter<"User"> | boolean
    canAdd?: BoolWithAggregatesFilter<"User"> | boolean
    canRemove?: BoolWithAggregatesFilter<"User"> | boolean
    canEdit?: BoolWithAggregatesFilter<"User"> | boolean
    superAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type InsurersWhereInput = {
    AND?: InsurersWhereInput | InsurersWhereInput[]
    OR?: InsurersWhereInput[]
    NOT?: InsurersWhereInput | InsurersWhereInput[]
    id?: IntFilter<"Insurers"> | number
    name?: StringFilter<"Insurers"> | string
    Clients?: ClientsListRelationFilter
    Uploads?: UploadsListRelationFilter
  }

  export type InsurersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Clients?: ClientsOrderByRelationAggregateInput
    Uploads?: UploadsOrderByRelationAggregateInput
    _relevance?: InsurersOrderByRelevanceInput
  }

  export type InsurersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: InsurersWhereInput | InsurersWhereInput[]
    OR?: InsurersWhereInput[]
    NOT?: InsurersWhereInput | InsurersWhereInput[]
    Clients?: ClientsListRelationFilter
    Uploads?: UploadsListRelationFilter
  }, "id" | "name">

  export type InsurersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: InsurersCountOrderByAggregateInput
    _avg?: InsurersAvgOrderByAggregateInput
    _max?: InsurersMaxOrderByAggregateInput
    _min?: InsurersMinOrderByAggregateInput
    _sum?: InsurersSumOrderByAggregateInput
  }

  export type InsurersScalarWhereWithAggregatesInput = {
    AND?: InsurersScalarWhereWithAggregatesInput | InsurersScalarWhereWithAggregatesInput[]
    OR?: InsurersScalarWhereWithAggregatesInput[]
    NOT?: InsurersScalarWhereWithAggregatesInput | InsurersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Insurers"> | number
    name?: StringWithAggregatesFilter<"Insurers"> | string
  }

  export type ClientsWhereInput = {
    AND?: ClientsWhereInput | ClientsWhereInput[]
    OR?: ClientsWhereInput[]
    NOT?: ClientsWhereInput | ClientsWhereInput[]
    id?: IntFilter<"Clients"> | number
    client_name?: StringFilter<"Clients"> | string
    description?: StringNullableFilter<"Clients"> | string | null
    insurer_id?: IntNullableFilter<"Clients"> | number | null
    insurer?: XOR<InsurersNullableScalarRelationFilter, InsurersWhereInput> | null
    Uploads?: UploadsListRelationFilter
    Decks?: DecksListRelationFilter
    IntellicareMasterlist?: IntellicareMasterlistListRelationFilter
    MaxicareMasterlist?: MaxicareMasterlistListRelationFilter
    Intellicare?: IntellicareListRelationFilter
    Maxicare?: MaxicareListRelationFilter
    CustomIllnesses?: CustomIllnessesListRelationFilter
  }

  export type ClientsOrderByWithRelationInput = {
    id?: SortOrder
    client_name?: SortOrder
    description?: SortOrderInput | SortOrder
    insurer_id?: SortOrderInput | SortOrder
    insurer?: InsurersOrderByWithRelationInput
    Uploads?: UploadsOrderByRelationAggregateInput
    Decks?: DecksOrderByRelationAggregateInput
    IntellicareMasterlist?: IntellicareMasterlistOrderByRelationAggregateInput
    MaxicareMasterlist?: MaxicareMasterlistOrderByRelationAggregateInput
    Intellicare?: IntellicareOrderByRelationAggregateInput
    Maxicare?: MaxicareOrderByRelationAggregateInput
    CustomIllnesses?: CustomIllnessesOrderByRelationAggregateInput
    _relevance?: ClientsOrderByRelevanceInput
  }

  export type ClientsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClientsWhereInput | ClientsWhereInput[]
    OR?: ClientsWhereInput[]
    NOT?: ClientsWhereInput | ClientsWhereInput[]
    client_name?: StringFilter<"Clients"> | string
    description?: StringNullableFilter<"Clients"> | string | null
    insurer_id?: IntNullableFilter<"Clients"> | number | null
    insurer?: XOR<InsurersNullableScalarRelationFilter, InsurersWhereInput> | null
    Uploads?: UploadsListRelationFilter
    Decks?: DecksListRelationFilter
    IntellicareMasterlist?: IntellicareMasterlistListRelationFilter
    MaxicareMasterlist?: MaxicareMasterlistListRelationFilter
    Intellicare?: IntellicareListRelationFilter
    Maxicare?: MaxicareListRelationFilter
    CustomIllnesses?: CustomIllnessesListRelationFilter
  }, "id">

  export type ClientsOrderByWithAggregationInput = {
    id?: SortOrder
    client_name?: SortOrder
    description?: SortOrderInput | SortOrder
    insurer_id?: SortOrderInput | SortOrder
    _count?: ClientsCountOrderByAggregateInput
    _avg?: ClientsAvgOrderByAggregateInput
    _max?: ClientsMaxOrderByAggregateInput
    _min?: ClientsMinOrderByAggregateInput
    _sum?: ClientsSumOrderByAggregateInput
  }

  export type ClientsScalarWhereWithAggregatesInput = {
    AND?: ClientsScalarWhereWithAggregatesInput | ClientsScalarWhereWithAggregatesInput[]
    OR?: ClientsScalarWhereWithAggregatesInput[]
    NOT?: ClientsScalarWhereWithAggregatesInput | ClientsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Clients"> | number
    client_name?: StringWithAggregatesFilter<"Clients"> | string
    description?: StringNullableWithAggregatesFilter<"Clients"> | string | null
    insurer_id?: IntNullableWithAggregatesFilter<"Clients"> | number | null
  }

  export type UploadsWhereInput = {
    AND?: UploadsWhereInput | UploadsWhereInput[]
    OR?: UploadsWhereInput[]
    NOT?: UploadsWhereInput | UploadsWhereInput[]
    id?: IntFilter<"Uploads"> | number
    clientId?: IntFilter<"Uploads"> | number
    insurerId?: IntFilter<"Uploads"> | number
    year?: StringFilter<"Uploads"> | string
    months?: StringNullableFilter<"Uploads"> | string | null
    type?: StringFilter<"Uploads"> | string
    createdAt?: DateTimeFilter<"Uploads"> | Date | string
    updatedAt?: DateTimeFilter<"Uploads"> | Date | string
    Clients?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
    Insurers?: XOR<InsurersScalarRelationFilter, InsurersWhereInput>
  }

  export type UploadsOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    insurerId?: SortOrder
    year?: SortOrder
    months?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Clients?: ClientsOrderByWithRelationInput
    Insurers?: InsurersOrderByWithRelationInput
    _relevance?: UploadsOrderByRelevanceInput
  }

  export type UploadsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UploadsWhereInput | UploadsWhereInput[]
    OR?: UploadsWhereInput[]
    NOT?: UploadsWhereInput | UploadsWhereInput[]
    clientId?: IntFilter<"Uploads"> | number
    insurerId?: IntFilter<"Uploads"> | number
    year?: StringFilter<"Uploads"> | string
    months?: StringNullableFilter<"Uploads"> | string | null
    type?: StringFilter<"Uploads"> | string
    createdAt?: DateTimeFilter<"Uploads"> | Date | string
    updatedAt?: DateTimeFilter<"Uploads"> | Date | string
    Clients?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
    Insurers?: XOR<InsurersScalarRelationFilter, InsurersWhereInput>
  }, "id">

  export type UploadsOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    insurerId?: SortOrder
    year?: SortOrder
    months?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UploadsCountOrderByAggregateInput
    _avg?: UploadsAvgOrderByAggregateInput
    _max?: UploadsMaxOrderByAggregateInput
    _min?: UploadsMinOrderByAggregateInput
    _sum?: UploadsSumOrderByAggregateInput
  }

  export type UploadsScalarWhereWithAggregatesInput = {
    AND?: UploadsScalarWhereWithAggregatesInput | UploadsScalarWhereWithAggregatesInput[]
    OR?: UploadsScalarWhereWithAggregatesInput[]
    NOT?: UploadsScalarWhereWithAggregatesInput | UploadsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Uploads"> | number
    clientId?: IntWithAggregatesFilter<"Uploads"> | number
    insurerId?: IntWithAggregatesFilter<"Uploads"> | number
    year?: StringWithAggregatesFilter<"Uploads"> | string
    months?: StringNullableWithAggregatesFilter<"Uploads"> | string | null
    type?: StringWithAggregatesFilter<"Uploads"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Uploads"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Uploads"> | Date | string
  }

  export type DecksWhereInput = {
    AND?: DecksWhereInput | DecksWhereInput[]
    OR?: DecksWhereInput[]
    NOT?: DecksWhereInput | DecksWhereInput[]
    id?: IntFilter<"Decks"> | number
    name?: StringFilter<"Decks"> | string
    description?: StringFilter<"Decks"> | string
    createdAt?: DateTimeFilter<"Decks"> | Date | string
    updatedAt?: DateTimeFilter<"Decks"> | Date | string
    clientId?: IntFilter<"Decks"> | number
    Clients?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }

  export type DecksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    Clients?: ClientsOrderByWithRelationInput
    _relevance?: DecksOrderByRelevanceInput
  }

  export type DecksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DecksWhereInput | DecksWhereInput[]
    OR?: DecksWhereInput[]
    NOT?: DecksWhereInput | DecksWhereInput[]
    name?: StringFilter<"Decks"> | string
    description?: StringFilter<"Decks"> | string
    createdAt?: DateTimeFilter<"Decks"> | Date | string
    updatedAt?: DateTimeFilter<"Decks"> | Date | string
    clientId?: IntFilter<"Decks"> | number
    Clients?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }, "id">

  export type DecksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    _count?: DecksCountOrderByAggregateInput
    _avg?: DecksAvgOrderByAggregateInput
    _max?: DecksMaxOrderByAggregateInput
    _min?: DecksMinOrderByAggregateInput
    _sum?: DecksSumOrderByAggregateInput
  }

  export type DecksScalarWhereWithAggregatesInput = {
    AND?: DecksScalarWhereWithAggregatesInput | DecksScalarWhereWithAggregatesInput[]
    OR?: DecksScalarWhereWithAggregatesInput[]
    NOT?: DecksScalarWhereWithAggregatesInput | DecksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Decks"> | number
    name?: StringWithAggregatesFilter<"Decks"> | string
    description?: StringWithAggregatesFilter<"Decks"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Decks"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Decks"> | Date | string
    clientId?: IntWithAggregatesFilter<"Decks"> | number
  }

  export type IntellicareMasterlistWhereInput = {
    AND?: IntellicareMasterlistWhereInput | IntellicareMasterlistWhereInput[]
    OR?: IntellicareMasterlistWhereInput[]
    NOT?: IntellicareMasterlistWhereInput | IntellicareMasterlistWhereInput[]
    id?: IntFilter<"IntellicareMasterlist"> | number
    clientId?: IntFilter<"IntellicareMasterlist"> | number
    PY?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    ACCOUNT_NO?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    STATUS?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    MEMBER_TYPE?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    RNB?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    PREEXIST?: FloatNullableFilter<"IntellicareMasterlist"> | number | null
    LIMIT?: FloatNullableFilter<"IntellicareMasterlist"> | number | null
    BIRTHDATE?: DateTimeNullableFilter<"IntellicareMasterlist"> | Date | string | null
    AGE?: IntNullableFilter<"IntellicareMasterlist"> | number | null
    RELATION?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    EE_ID?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    CARD_NO?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    COMPANY?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    createdAt?: DateTimeFilter<"IntellicareMasterlist"> | Date | string
    updatedAt?: DateTimeFilter<"IntellicareMasterlist"> | Date | string
    Clients?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }

  export type IntellicareMasterlistOrderByWithRelationInput = {
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
    Clients?: ClientsOrderByWithRelationInput
    _relevance?: IntellicareMasterlistOrderByRelevanceInput
  }

  export type IntellicareMasterlistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IntellicareMasterlistWhereInput | IntellicareMasterlistWhereInput[]
    OR?: IntellicareMasterlistWhereInput[]
    NOT?: IntellicareMasterlistWhereInput | IntellicareMasterlistWhereInput[]
    clientId?: IntFilter<"IntellicareMasterlist"> | number
    PY?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    ACCOUNT_NO?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    STATUS?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    MEMBER_TYPE?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    RNB?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    PREEXIST?: FloatNullableFilter<"IntellicareMasterlist"> | number | null
    LIMIT?: FloatNullableFilter<"IntellicareMasterlist"> | number | null
    BIRTHDATE?: DateTimeNullableFilter<"IntellicareMasterlist"> | Date | string | null
    AGE?: IntNullableFilter<"IntellicareMasterlist"> | number | null
    RELATION?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    EE_ID?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    CARD_NO?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    COMPANY?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    createdAt?: DateTimeFilter<"IntellicareMasterlist"> | Date | string
    updatedAt?: DateTimeFilter<"IntellicareMasterlist"> | Date | string
    Clients?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }, "id">

  export type IntellicareMasterlistOrderByWithAggregationInput = {
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
    _count?: IntellicareMasterlistCountOrderByAggregateInput
    _avg?: IntellicareMasterlistAvgOrderByAggregateInput
    _max?: IntellicareMasterlistMaxOrderByAggregateInput
    _min?: IntellicareMasterlistMinOrderByAggregateInput
    _sum?: IntellicareMasterlistSumOrderByAggregateInput
  }

  export type IntellicareMasterlistScalarWhereWithAggregatesInput = {
    AND?: IntellicareMasterlistScalarWhereWithAggregatesInput | IntellicareMasterlistScalarWhereWithAggregatesInput[]
    OR?: IntellicareMasterlistScalarWhereWithAggregatesInput[]
    NOT?: IntellicareMasterlistScalarWhereWithAggregatesInput | IntellicareMasterlistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IntellicareMasterlist"> | number
    clientId?: IntWithAggregatesFilter<"IntellicareMasterlist"> | number
    PY?: StringNullableWithAggregatesFilter<"IntellicareMasterlist"> | string | null
    ACCOUNT_NO?: StringNullableWithAggregatesFilter<"IntellicareMasterlist"> | string | null
    STATUS?: StringNullableWithAggregatesFilter<"IntellicareMasterlist"> | string | null
    MEMBER_TYPE?: StringNullableWithAggregatesFilter<"IntellicareMasterlist"> | string | null
    RNB?: StringNullableWithAggregatesFilter<"IntellicareMasterlist"> | string | null
    PREEXIST?: FloatNullableWithAggregatesFilter<"IntellicareMasterlist"> | number | null
    LIMIT?: FloatNullableWithAggregatesFilter<"IntellicareMasterlist"> | number | null
    BIRTHDATE?: DateTimeNullableWithAggregatesFilter<"IntellicareMasterlist"> | Date | string | null
    AGE?: IntNullableWithAggregatesFilter<"IntellicareMasterlist"> | number | null
    RELATION?: StringNullableWithAggregatesFilter<"IntellicareMasterlist"> | string | null
    EE_ID?: StringNullableWithAggregatesFilter<"IntellicareMasterlist"> | string | null
    CARD_NO?: StringNullableWithAggregatesFilter<"IntellicareMasterlist"> | string | null
    COMPANY?: StringNullableWithAggregatesFilter<"IntellicareMasterlist"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IntellicareMasterlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IntellicareMasterlist"> | Date | string
  }

  export type MaxicareMasterlistWhereInput = {
    AND?: MaxicareMasterlistWhereInput | MaxicareMasterlistWhereInput[]
    OR?: MaxicareMasterlistWhereInput[]
    NOT?: MaxicareMasterlistWhereInput | MaxicareMasterlistWhereInput[]
    id?: IntFilter<"MaxicareMasterlist"> | number
    clientId?: IntFilter<"MaxicareMasterlist"> | number
    PY?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    ACCOUNT_NO?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    STATUS?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    MEMBER_TYPE?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    LIMIT?: FloatNullableFilter<"MaxicareMasterlist"> | number | null
    RELATION?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    EE_ID?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    CARD_NO?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    COMPANY?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    createdAt?: DateTimeFilter<"MaxicareMasterlist"> | Date | string
    updatedAt?: DateTimeFilter<"MaxicareMasterlist"> | Date | string
    Clients?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }

  export type MaxicareMasterlistOrderByWithRelationInput = {
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
    Clients?: ClientsOrderByWithRelationInput
    _relevance?: MaxicareMasterlistOrderByRelevanceInput
  }

  export type MaxicareMasterlistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaxicareMasterlistWhereInput | MaxicareMasterlistWhereInput[]
    OR?: MaxicareMasterlistWhereInput[]
    NOT?: MaxicareMasterlistWhereInput | MaxicareMasterlistWhereInput[]
    clientId?: IntFilter<"MaxicareMasterlist"> | number
    PY?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    ACCOUNT_NO?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    STATUS?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    MEMBER_TYPE?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    LIMIT?: FloatNullableFilter<"MaxicareMasterlist"> | number | null
    RELATION?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    EE_ID?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    CARD_NO?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    COMPANY?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    createdAt?: DateTimeFilter<"MaxicareMasterlist"> | Date | string
    updatedAt?: DateTimeFilter<"MaxicareMasterlist"> | Date | string
    Clients?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }, "id">

  export type MaxicareMasterlistOrderByWithAggregationInput = {
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
    _count?: MaxicareMasterlistCountOrderByAggregateInput
    _avg?: MaxicareMasterlistAvgOrderByAggregateInput
    _max?: MaxicareMasterlistMaxOrderByAggregateInput
    _min?: MaxicareMasterlistMinOrderByAggregateInput
    _sum?: MaxicareMasterlistSumOrderByAggregateInput
  }

  export type MaxicareMasterlistScalarWhereWithAggregatesInput = {
    AND?: MaxicareMasterlistScalarWhereWithAggregatesInput | MaxicareMasterlistScalarWhereWithAggregatesInput[]
    OR?: MaxicareMasterlistScalarWhereWithAggregatesInput[]
    NOT?: MaxicareMasterlistScalarWhereWithAggregatesInput | MaxicareMasterlistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MaxicareMasterlist"> | number
    clientId?: IntWithAggregatesFilter<"MaxicareMasterlist"> | number
    PY?: StringNullableWithAggregatesFilter<"MaxicareMasterlist"> | string | null
    ACCOUNT_NO?: StringNullableWithAggregatesFilter<"MaxicareMasterlist"> | string | null
    STATUS?: StringNullableWithAggregatesFilter<"MaxicareMasterlist"> | string | null
    MEMBER_TYPE?: StringNullableWithAggregatesFilter<"MaxicareMasterlist"> | string | null
    LIMIT?: FloatNullableWithAggregatesFilter<"MaxicareMasterlist"> | number | null
    RELATION?: StringNullableWithAggregatesFilter<"MaxicareMasterlist"> | string | null
    EE_ID?: StringNullableWithAggregatesFilter<"MaxicareMasterlist"> | string | null
    CARD_NO?: StringNullableWithAggregatesFilter<"MaxicareMasterlist"> | string | null
    COMPANY?: StringNullableWithAggregatesFilter<"MaxicareMasterlist"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MaxicareMasterlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MaxicareMasterlist"> | Date | string
  }

  export type IntellicareWhereInput = {
    AND?: IntellicareWhereInput | IntellicareWhereInput[]
    OR?: IntellicareWhereInput[]
    NOT?: IntellicareWhereInput | IntellicareWhereInput[]
    id?: IntFilter<"Intellicare"> | number
    clientId?: IntFilter<"Intellicare"> | number
    PY?: StringFilter<"Intellicare"> | string
    Company?: StringNullableFilter<"Intellicare"> | string | null
    Member_Account?: StringNullableFilter<"Intellicare"> | string | null
    Member_Type?: StringNullableFilter<"Intellicare"> | string | null
    ICD_10_Code?: StringNullableFilter<"Intellicare"> | string | null
    Diagnosis?: StringNullableFilter<"Intellicare"> | string | null
    Claim_Type?: StringNullableFilter<"Intellicare"> | string | null
    Admission_Date?: DateTimeNullableFilter<"Intellicare"> | Date | string | null
    Provider_Name?: StringNullableFilter<"Intellicare"> | string | null
    Provider_Type?: StringNullableFilter<"Intellicare"> | string | null
    Approved_Claim_Amount?: FloatNullableFilter<"Intellicare"> | number | null
    Class_Plan_Level?: StringNullableFilter<"Intellicare"> | string | null
    Maximum_Benefit_Limit?: FloatNullableFilter<"Intellicare"> | number | null
    Date_of_Birth?: DateTimeNullableFilter<"Intellicare"> | Date | string | null
    Relationship?: StringNullableFilter<"Intellicare"> | string | null
    createdAt?: DateTimeFilter<"Intellicare"> | Date | string
    updatedAt?: DateTimeFilter<"Intellicare"> | Date | string
    Clients?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }

  export type IntellicareOrderByWithRelationInput = {
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
    Clients?: ClientsOrderByWithRelationInput
    _relevance?: IntellicareOrderByRelevanceInput
  }

  export type IntellicareWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IntellicareWhereInput | IntellicareWhereInput[]
    OR?: IntellicareWhereInput[]
    NOT?: IntellicareWhereInput | IntellicareWhereInput[]
    clientId?: IntFilter<"Intellicare"> | number
    PY?: StringFilter<"Intellicare"> | string
    Company?: StringNullableFilter<"Intellicare"> | string | null
    Member_Account?: StringNullableFilter<"Intellicare"> | string | null
    Member_Type?: StringNullableFilter<"Intellicare"> | string | null
    ICD_10_Code?: StringNullableFilter<"Intellicare"> | string | null
    Diagnosis?: StringNullableFilter<"Intellicare"> | string | null
    Claim_Type?: StringNullableFilter<"Intellicare"> | string | null
    Admission_Date?: DateTimeNullableFilter<"Intellicare"> | Date | string | null
    Provider_Name?: StringNullableFilter<"Intellicare"> | string | null
    Provider_Type?: StringNullableFilter<"Intellicare"> | string | null
    Approved_Claim_Amount?: FloatNullableFilter<"Intellicare"> | number | null
    Class_Plan_Level?: StringNullableFilter<"Intellicare"> | string | null
    Maximum_Benefit_Limit?: FloatNullableFilter<"Intellicare"> | number | null
    Date_of_Birth?: DateTimeNullableFilter<"Intellicare"> | Date | string | null
    Relationship?: StringNullableFilter<"Intellicare"> | string | null
    createdAt?: DateTimeFilter<"Intellicare"> | Date | string
    updatedAt?: DateTimeFilter<"Intellicare"> | Date | string
    Clients?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }, "id">

  export type IntellicareOrderByWithAggregationInput = {
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
    _count?: IntellicareCountOrderByAggregateInput
    _avg?: IntellicareAvgOrderByAggregateInput
    _max?: IntellicareMaxOrderByAggregateInput
    _min?: IntellicareMinOrderByAggregateInput
    _sum?: IntellicareSumOrderByAggregateInput
  }

  export type IntellicareScalarWhereWithAggregatesInput = {
    AND?: IntellicareScalarWhereWithAggregatesInput | IntellicareScalarWhereWithAggregatesInput[]
    OR?: IntellicareScalarWhereWithAggregatesInput[]
    NOT?: IntellicareScalarWhereWithAggregatesInput | IntellicareScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Intellicare"> | number
    clientId?: IntWithAggregatesFilter<"Intellicare"> | number
    PY?: StringWithAggregatesFilter<"Intellicare"> | string
    Company?: StringNullableWithAggregatesFilter<"Intellicare"> | string | null
    Member_Account?: StringNullableWithAggregatesFilter<"Intellicare"> | string | null
    Member_Type?: StringNullableWithAggregatesFilter<"Intellicare"> | string | null
    ICD_10_Code?: StringNullableWithAggregatesFilter<"Intellicare"> | string | null
    Diagnosis?: StringNullableWithAggregatesFilter<"Intellicare"> | string | null
    Claim_Type?: StringNullableWithAggregatesFilter<"Intellicare"> | string | null
    Admission_Date?: DateTimeNullableWithAggregatesFilter<"Intellicare"> | Date | string | null
    Provider_Name?: StringNullableWithAggregatesFilter<"Intellicare"> | string | null
    Provider_Type?: StringNullableWithAggregatesFilter<"Intellicare"> | string | null
    Approved_Claim_Amount?: FloatNullableWithAggregatesFilter<"Intellicare"> | number | null
    Class_Plan_Level?: StringNullableWithAggregatesFilter<"Intellicare"> | string | null
    Maximum_Benefit_Limit?: FloatNullableWithAggregatesFilter<"Intellicare"> | number | null
    Date_of_Birth?: DateTimeNullableWithAggregatesFilter<"Intellicare"> | Date | string | null
    Relationship?: StringNullableWithAggregatesFilter<"Intellicare"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Intellicare"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Intellicare"> | Date | string
  }

  export type MaxicareWhereInput = {
    AND?: MaxicareWhereInput | MaxicareWhereInput[]
    OR?: MaxicareWhereInput[]
    NOT?: MaxicareWhereInput | MaxicareWhereInput[]
    id?: IntFilter<"Maxicare"> | number
    clientId?: IntFilter<"Maxicare"> | number
    PY?: StringFilter<"Maxicare"> | string
    Company?: StringNullableFilter<"Maxicare"> | string | null
    Member_Account?: StringNullableFilter<"Maxicare"> | string | null
    Member_Type?: StringNullableFilter<"Maxicare"> | string | null
    ICD_10_Code?: StringNullableFilter<"Maxicare"> | string | null
    Diagnosis?: StringNullableFilter<"Maxicare"> | string | null
    Claim_Type?: StringNullableFilter<"Maxicare"> | string | null
    Admission_Date?: DateTimeNullableFilter<"Maxicare"> | Date | string | null
    Provider_Name?: StringNullableFilter<"Maxicare"> | string | null
    Provider_Type?: StringNullableFilter<"Maxicare"> | string | null
    Approved_Claim_Amount?: FloatNullableFilter<"Maxicare"> | number | null
    Relationship?: StringNullableFilter<"Maxicare"> | string | null
    createdAt?: DateTimeFilter<"Maxicare"> | Date | string
    updatedAt?: DateTimeFilter<"Maxicare"> | Date | string
    Clients?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }

  export type MaxicareOrderByWithRelationInput = {
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
    Clients?: ClientsOrderByWithRelationInput
    _relevance?: MaxicareOrderByRelevanceInput
  }

  export type MaxicareWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaxicareWhereInput | MaxicareWhereInput[]
    OR?: MaxicareWhereInput[]
    NOT?: MaxicareWhereInput | MaxicareWhereInput[]
    clientId?: IntFilter<"Maxicare"> | number
    PY?: StringFilter<"Maxicare"> | string
    Company?: StringNullableFilter<"Maxicare"> | string | null
    Member_Account?: StringNullableFilter<"Maxicare"> | string | null
    Member_Type?: StringNullableFilter<"Maxicare"> | string | null
    ICD_10_Code?: StringNullableFilter<"Maxicare"> | string | null
    Diagnosis?: StringNullableFilter<"Maxicare"> | string | null
    Claim_Type?: StringNullableFilter<"Maxicare"> | string | null
    Admission_Date?: DateTimeNullableFilter<"Maxicare"> | Date | string | null
    Provider_Name?: StringNullableFilter<"Maxicare"> | string | null
    Provider_Type?: StringNullableFilter<"Maxicare"> | string | null
    Approved_Claim_Amount?: FloatNullableFilter<"Maxicare"> | number | null
    Relationship?: StringNullableFilter<"Maxicare"> | string | null
    createdAt?: DateTimeFilter<"Maxicare"> | Date | string
    updatedAt?: DateTimeFilter<"Maxicare"> | Date | string
    Clients?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }, "id">

  export type MaxicareOrderByWithAggregationInput = {
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
    _count?: MaxicareCountOrderByAggregateInput
    _avg?: MaxicareAvgOrderByAggregateInput
    _max?: MaxicareMaxOrderByAggregateInput
    _min?: MaxicareMinOrderByAggregateInput
    _sum?: MaxicareSumOrderByAggregateInput
  }

  export type MaxicareScalarWhereWithAggregatesInput = {
    AND?: MaxicareScalarWhereWithAggregatesInput | MaxicareScalarWhereWithAggregatesInput[]
    OR?: MaxicareScalarWhereWithAggregatesInput[]
    NOT?: MaxicareScalarWhereWithAggregatesInput | MaxicareScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Maxicare"> | number
    clientId?: IntWithAggregatesFilter<"Maxicare"> | number
    PY?: StringWithAggregatesFilter<"Maxicare"> | string
    Company?: StringNullableWithAggregatesFilter<"Maxicare"> | string | null
    Member_Account?: StringNullableWithAggregatesFilter<"Maxicare"> | string | null
    Member_Type?: StringNullableWithAggregatesFilter<"Maxicare"> | string | null
    ICD_10_Code?: StringNullableWithAggregatesFilter<"Maxicare"> | string | null
    Diagnosis?: StringNullableWithAggregatesFilter<"Maxicare"> | string | null
    Claim_Type?: StringNullableWithAggregatesFilter<"Maxicare"> | string | null
    Admission_Date?: DateTimeNullableWithAggregatesFilter<"Maxicare"> | Date | string | null
    Provider_Name?: StringNullableWithAggregatesFilter<"Maxicare"> | string | null
    Provider_Type?: StringNullableWithAggregatesFilter<"Maxicare"> | string | null
    Approved_Claim_Amount?: FloatNullableWithAggregatesFilter<"Maxicare"> | number | null
    Relationship?: StringNullableWithAggregatesFilter<"Maxicare"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Maxicare"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Maxicare"> | Date | string
  }

  export type CustomIllnessesWhereInput = {
    AND?: CustomIllnessesWhereInput | CustomIllnessesWhereInput[]
    OR?: CustomIllnessesWhereInput[]
    NOT?: CustomIllnessesWhereInput | CustomIllnessesWhereInput[]
    id?: IntFilter<"CustomIllnesses"> | number
    clientId?: IntFilter<"CustomIllnesses"> | number
    py?: StringNullableFilter<"CustomIllnesses"> | string | null
    member_type?: StringNullableFilter<"CustomIllnesses"> | string | null
    icd_10_code?: StringNullableFilter<"CustomIllnesses"> | string | null
    diagnosis?: StringNullableFilter<"CustomIllnesses"> | string | null
    claim_amount?: IntNullableFilter<"CustomIllnesses"> | number | null
    percentage_to_total_amount?: DecimalNullableFilter<"CustomIllnesses"> | Decimal | DecimalJsLike | number | string | null
    claim_count?: IntNullableFilter<"CustomIllnesses"> | number | null
    percentage_to_total_count?: DecimalNullableFilter<"CustomIllnesses"> | Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: IntNullableFilter<"CustomIllnesses"> | number | null
    createdAt?: DateTimeFilter<"CustomIllnesses"> | Date | string
    updatedAt?: DateTimeFilter<"CustomIllnesses"> | Date | string
    Clients?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }

  export type CustomIllnessesOrderByWithRelationInput = {
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
    Clients?: ClientsOrderByWithRelationInput
    _relevance?: CustomIllnessesOrderByRelevanceInput
  }

  export type CustomIllnessesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustomIllnessesWhereInput | CustomIllnessesWhereInput[]
    OR?: CustomIllnessesWhereInput[]
    NOT?: CustomIllnessesWhereInput | CustomIllnessesWhereInput[]
    clientId?: IntFilter<"CustomIllnesses"> | number
    py?: StringNullableFilter<"CustomIllnesses"> | string | null
    member_type?: StringNullableFilter<"CustomIllnesses"> | string | null
    icd_10_code?: StringNullableFilter<"CustomIllnesses"> | string | null
    diagnosis?: StringNullableFilter<"CustomIllnesses"> | string | null
    claim_amount?: IntNullableFilter<"CustomIllnesses"> | number | null
    percentage_to_total_amount?: DecimalNullableFilter<"CustomIllnesses"> | Decimal | DecimalJsLike | number | string | null
    claim_count?: IntNullableFilter<"CustomIllnesses"> | number | null
    percentage_to_total_count?: DecimalNullableFilter<"CustomIllnesses"> | Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: IntNullableFilter<"CustomIllnesses"> | number | null
    createdAt?: DateTimeFilter<"CustomIllnesses"> | Date | string
    updatedAt?: DateTimeFilter<"CustomIllnesses"> | Date | string
    Clients?: XOR<ClientsScalarRelationFilter, ClientsWhereInput>
  }, "id">

  export type CustomIllnessesOrderByWithAggregationInput = {
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
    _count?: CustomIllnessesCountOrderByAggregateInput
    _avg?: CustomIllnessesAvgOrderByAggregateInput
    _max?: CustomIllnessesMaxOrderByAggregateInput
    _min?: CustomIllnessesMinOrderByAggregateInput
    _sum?: CustomIllnessesSumOrderByAggregateInput
  }

  export type CustomIllnessesScalarWhereWithAggregatesInput = {
    AND?: CustomIllnessesScalarWhereWithAggregatesInput | CustomIllnessesScalarWhereWithAggregatesInput[]
    OR?: CustomIllnessesScalarWhereWithAggregatesInput[]
    NOT?: CustomIllnessesScalarWhereWithAggregatesInput | CustomIllnessesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CustomIllnesses"> | number
    clientId?: IntWithAggregatesFilter<"CustomIllnesses"> | number
    py?: StringNullableWithAggregatesFilter<"CustomIllnesses"> | string | null
    member_type?: StringNullableWithAggregatesFilter<"CustomIllnesses"> | string | null
    icd_10_code?: StringNullableWithAggregatesFilter<"CustomIllnesses"> | string | null
    diagnosis?: StringNullableWithAggregatesFilter<"CustomIllnesses"> | string | null
    claim_amount?: IntNullableWithAggregatesFilter<"CustomIllnesses"> | number | null
    percentage_to_total_amount?: DecimalNullableWithAggregatesFilter<"CustomIllnesses"> | Decimal | DecimalJsLike | number | string | null
    claim_count?: IntNullableWithAggregatesFilter<"CustomIllnesses"> | number | null
    percentage_to_total_count?: DecimalNullableWithAggregatesFilter<"CustomIllnesses"> | Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: IntNullableWithAggregatesFilter<"CustomIllnesses"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"CustomIllnesses"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomIllnesses"> | Date | string
  }

  export type UserCreateInput = {
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

  export type UserUncheckedCreateInput = {
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

  export type UserUpdateInput = {
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

  export type UserUncheckedUpdateInput = {
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

  export type UserCreateManyInput = {
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

  export type UserUpdateManyMutationInput = {
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

  export type UserUncheckedUpdateManyInput = {
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

  export type InsurersCreateInput = {
    name: string
    Clients?: ClientsCreateNestedManyWithoutInsurerInput
    Uploads?: UploadsCreateNestedManyWithoutInsurersInput
  }

  export type InsurersUncheckedCreateInput = {
    id?: number
    name: string
    Clients?: ClientsUncheckedCreateNestedManyWithoutInsurerInput
    Uploads?: UploadsUncheckedCreateNestedManyWithoutInsurersInput
  }

  export type InsurersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Clients?: ClientsUpdateManyWithoutInsurerNestedInput
    Uploads?: UploadsUpdateManyWithoutInsurersNestedInput
  }

  export type InsurersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Clients?: ClientsUncheckedUpdateManyWithoutInsurerNestedInput
    Uploads?: UploadsUncheckedUpdateManyWithoutInsurersNestedInput
  }

  export type InsurersCreateManyInput = {
    id?: number
    name: string
  }

  export type InsurersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InsurersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClientsCreateInput = {
    client_name: string
    description?: string | null
    insurer?: InsurersCreateNestedOneWithoutClientsInput
    Uploads?: UploadsCreateNestedManyWithoutClientsInput
    Decks?: DecksCreateNestedManyWithoutClientsInput
    IntellicareMasterlist?: IntellicareMasterlistCreateNestedManyWithoutClientsInput
    MaxicareMasterlist?: MaxicareMasterlistCreateNestedManyWithoutClientsInput
    Intellicare?: IntellicareCreateNestedManyWithoutClientsInput
    Maxicare?: MaxicareCreateNestedManyWithoutClientsInput
    CustomIllnesses?: CustomIllnessesCreateNestedManyWithoutClientsInput
  }

  export type ClientsUncheckedCreateInput = {
    id?: number
    client_name: string
    description?: string | null
    insurer_id?: number | null
    Uploads?: UploadsUncheckedCreateNestedManyWithoutClientsInput
    Decks?: DecksUncheckedCreateNestedManyWithoutClientsInput
    IntellicareMasterlist?: IntellicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    MaxicareMasterlist?: MaxicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    Intellicare?: IntellicareUncheckedCreateNestedManyWithoutClientsInput
    Maxicare?: MaxicareUncheckedCreateNestedManyWithoutClientsInput
    CustomIllnesses?: CustomIllnessesUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientsUpdateInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer?: InsurersUpdateOneWithoutClientsNestedInput
    Uploads?: UploadsUpdateManyWithoutClientsNestedInput
    Decks?: DecksUpdateManyWithoutClientsNestedInput
    IntellicareMasterlist?: IntellicareMasterlistUpdateManyWithoutClientsNestedInput
    MaxicareMasterlist?: MaxicareMasterlistUpdateManyWithoutClientsNestedInput
    Intellicare?: IntellicareUpdateManyWithoutClientsNestedInput
    Maxicare?: MaxicareUpdateManyWithoutClientsNestedInput
    CustomIllnesses?: CustomIllnessesUpdateManyWithoutClientsNestedInput
  }

  export type ClientsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer_id?: NullableIntFieldUpdateOperationsInput | number | null
    Uploads?: UploadsUncheckedUpdateManyWithoutClientsNestedInput
    Decks?: DecksUncheckedUpdateManyWithoutClientsNestedInput
    IntellicareMasterlist?: IntellicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    MaxicareMasterlist?: MaxicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    Intellicare?: IntellicareUncheckedUpdateManyWithoutClientsNestedInput
    Maxicare?: MaxicareUncheckedUpdateManyWithoutClientsNestedInput
    CustomIllnesses?: CustomIllnessesUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type ClientsCreateManyInput = {
    id?: number
    client_name: string
    description?: string | null
    insurer_id?: number | null
  }

  export type ClientsUpdateManyMutationInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UploadsCreateInput = {
    year: string
    months?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Clients: ClientsCreateNestedOneWithoutUploadsInput
    Insurers: InsurersCreateNestedOneWithoutUploadsInput
  }

  export type UploadsUncheckedCreateInput = {
    id?: number
    clientId: number
    insurerId: number
    year: string
    months?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UploadsUpdateInput = {
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Clients?: ClientsUpdateOneRequiredWithoutUploadsNestedInput
    Insurers?: InsurersUpdateOneRequiredWithoutUploadsNestedInput
  }

  export type UploadsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    insurerId?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadsCreateManyInput = {
    id?: number
    clientId: number
    insurerId: number
    year: string
    months?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UploadsUpdateManyMutationInput = {
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    insurerId?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecksCreateInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Clients: ClientsCreateNestedOneWithoutDecksInput
  }

  export type DecksUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type DecksUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Clients?: ClientsUpdateOneRequiredWithoutDecksNestedInput
  }

  export type DecksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type DecksCreateManyInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: number
  }

  export type DecksUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type IntellicareMasterlistCreateInput = {
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
    Clients: ClientsCreateNestedOneWithoutIntellicareMasterlistInput
  }

  export type IntellicareMasterlistUncheckedCreateInput = {
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

  export type IntellicareMasterlistUpdateInput = {
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
    Clients?: ClientsUpdateOneRequiredWithoutIntellicareMasterlistNestedInput
  }

  export type IntellicareMasterlistUncheckedUpdateInput = {
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

  export type IntellicareMasterlistCreateManyInput = {
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

  export type IntellicareMasterlistUpdateManyMutationInput = {
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

  export type IntellicareMasterlistUncheckedUpdateManyInput = {
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

  export type MaxicareMasterlistCreateInput = {
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
    Clients: ClientsCreateNestedOneWithoutMaxicareMasterlistInput
  }

  export type MaxicareMasterlistUncheckedCreateInput = {
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

  export type MaxicareMasterlistUpdateInput = {
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
    Clients?: ClientsUpdateOneRequiredWithoutMaxicareMasterlistNestedInput
  }

  export type MaxicareMasterlistUncheckedUpdateInput = {
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

  export type MaxicareMasterlistCreateManyInput = {
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

  export type MaxicareMasterlistUpdateManyMutationInput = {
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

  export type MaxicareMasterlistUncheckedUpdateManyInput = {
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

  export type IntellicareCreateInput = {
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
    Clients: ClientsCreateNestedOneWithoutIntellicareInput
  }

  export type IntellicareUncheckedCreateInput = {
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

  export type IntellicareUpdateInput = {
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
    Clients?: ClientsUpdateOneRequiredWithoutIntellicareNestedInput
  }

  export type IntellicareUncheckedUpdateInput = {
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

  export type IntellicareCreateManyInput = {
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

  export type IntellicareUpdateManyMutationInput = {
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

  export type IntellicareUncheckedUpdateManyInput = {
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

  export type MaxicareCreateInput = {
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
    Clients: ClientsCreateNestedOneWithoutMaxicareInput
  }

  export type MaxicareUncheckedCreateInput = {
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

  export type MaxicareUpdateInput = {
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
    Clients?: ClientsUpdateOneRequiredWithoutMaxicareNestedInput
  }

  export type MaxicareUncheckedUpdateInput = {
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

  export type MaxicareCreateManyInput = {
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

  export type MaxicareUpdateManyMutationInput = {
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

  export type MaxicareUncheckedUpdateManyInput = {
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

  export type CustomIllnessesCreateInput = {
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
    Clients: ClientsCreateNestedOneWithoutCustomIllnessesInput
  }

  export type CustomIllnessesUncheckedCreateInput = {
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

  export type CustomIllnessesUpdateInput = {
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
    Clients?: ClientsUpdateOneRequiredWithoutCustomIllnessesNestedInput
  }

  export type CustomIllnessesUncheckedUpdateInput = {
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

  export type CustomIllnessesCreateManyInput = {
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

  export type CustomIllnessesUpdateManyMutationInput = {
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

  export type CustomIllnessesUncheckedUpdateManyInput = {
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

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
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

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
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

  export type UserMinOrderByAggregateInput = {
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

  export type UserSumOrderByAggregateInput = {
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
    every?: ClientsWhereInput
    some?: ClientsWhereInput
    none?: ClientsWhereInput
  }

  export type UploadsListRelationFilter = {
    every?: UploadsWhereInput
    some?: UploadsWhereInput
    none?: UploadsWhereInput
  }

  export type ClientsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UploadsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InsurersOrderByRelevanceInput = {
    fields: InsurersOrderByRelevanceFieldEnum | InsurersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InsurersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InsurersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InsurersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InsurersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type InsurersSumOrderByAggregateInput = {
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
    is?: InsurersWhereInput | null
    isNot?: InsurersWhereInput | null
  }

  export type DecksListRelationFilter = {
    every?: DecksWhereInput
    some?: DecksWhereInput
    none?: DecksWhereInput
  }

  export type IntellicareMasterlistListRelationFilter = {
    every?: IntellicareMasterlistWhereInput
    some?: IntellicareMasterlistWhereInput
    none?: IntellicareMasterlistWhereInput
  }

  export type MaxicareMasterlistListRelationFilter = {
    every?: MaxicareMasterlistWhereInput
    some?: MaxicareMasterlistWhereInput
    none?: MaxicareMasterlistWhereInput
  }

  export type IntellicareListRelationFilter = {
    every?: IntellicareWhereInput
    some?: IntellicareWhereInput
    none?: IntellicareWhereInput
  }

  export type MaxicareListRelationFilter = {
    every?: MaxicareWhereInput
    some?: MaxicareWhereInput
    none?: MaxicareWhereInput
  }

  export type CustomIllnessesListRelationFilter = {
    every?: CustomIllnessesWhereInput
    some?: CustomIllnessesWhereInput
    none?: CustomIllnessesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DecksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IntellicareMasterlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaxicareMasterlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IntellicareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaxicareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomIllnessesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientsOrderByRelevanceInput = {
    fields: ClientsOrderByRelevanceFieldEnum | ClientsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClientsCountOrderByAggregateInput = {
    id?: SortOrder
    client_name?: SortOrder
    description?: SortOrder
    insurer_id?: SortOrder
  }

  export type ClientsAvgOrderByAggregateInput = {
    id?: SortOrder
    insurer_id?: SortOrder
  }

  export type ClientsMaxOrderByAggregateInput = {
    id?: SortOrder
    client_name?: SortOrder
    description?: SortOrder
    insurer_id?: SortOrder
  }

  export type ClientsMinOrderByAggregateInput = {
    id?: SortOrder
    client_name?: SortOrder
    description?: SortOrder
    insurer_id?: SortOrder
  }

  export type ClientsSumOrderByAggregateInput = {
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
    is?: ClientsWhereInput
    isNot?: ClientsWhereInput
  }

  export type InsurersScalarRelationFilter = {
    is?: InsurersWhereInput
    isNot?: InsurersWhereInput
  }

  export type UploadsOrderByRelevanceInput = {
    fields: UploadsOrderByRelevanceFieldEnum | UploadsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UploadsCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    insurerId?: SortOrder
    year?: SortOrder
    months?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UploadsAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    insurerId?: SortOrder
  }

  export type UploadsMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    insurerId?: SortOrder
    year?: SortOrder
    months?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UploadsMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    insurerId?: SortOrder
    year?: SortOrder
    months?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UploadsSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    insurerId?: SortOrder
  }

  export type DecksOrderByRelevanceInput = {
    fields: DecksOrderByRelevanceFieldEnum | DecksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DecksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type DecksAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type DecksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type DecksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
  }

  export type DecksSumOrderByAggregateInput = {
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

  export type IntellicareMasterlistOrderByRelevanceInput = {
    fields: IntellicareMasterlistOrderByRelevanceFieldEnum | IntellicareMasterlistOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IntellicareMasterlistCountOrderByAggregateInput = {
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

  export type IntellicareMasterlistAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    PREEXIST?: SortOrder
    LIMIT?: SortOrder
    AGE?: SortOrder
  }

  export type IntellicareMasterlistMaxOrderByAggregateInput = {
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

  export type IntellicareMasterlistMinOrderByAggregateInput = {
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

  export type IntellicareMasterlistSumOrderByAggregateInput = {
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

  export type MaxicareMasterlistOrderByRelevanceInput = {
    fields: MaxicareMasterlistOrderByRelevanceFieldEnum | MaxicareMasterlistOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MaxicareMasterlistCountOrderByAggregateInput = {
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

  export type MaxicareMasterlistAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    LIMIT?: SortOrder
  }

  export type MaxicareMasterlistMaxOrderByAggregateInput = {
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

  export type MaxicareMasterlistMinOrderByAggregateInput = {
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

  export type MaxicareMasterlistSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    LIMIT?: SortOrder
  }

  export type IntellicareOrderByRelevanceInput = {
    fields: IntellicareOrderByRelevanceFieldEnum | IntellicareOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IntellicareCountOrderByAggregateInput = {
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

  export type IntellicareAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    Approved_Claim_Amount?: SortOrder
    Maximum_Benefit_Limit?: SortOrder
  }

  export type IntellicareMaxOrderByAggregateInput = {
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

  export type IntellicareMinOrderByAggregateInput = {
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

  export type IntellicareSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    Approved_Claim_Amount?: SortOrder
    Maximum_Benefit_Limit?: SortOrder
  }

  export type MaxicareOrderByRelevanceInput = {
    fields: MaxicareOrderByRelevanceFieldEnum | MaxicareOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MaxicareCountOrderByAggregateInput = {
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

  export type MaxicareAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    Approved_Claim_Amount?: SortOrder
  }

  export type MaxicareMaxOrderByAggregateInput = {
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

  export type MaxicareMinOrderByAggregateInput = {
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

  export type MaxicareSumOrderByAggregateInput = {
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

  export type CustomIllnessesOrderByRelevanceInput = {
    fields: CustomIllnessesOrderByRelevanceFieldEnum | CustomIllnessesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomIllnessesCountOrderByAggregateInput = {
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

  export type CustomIllnessesAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    claim_amount?: SortOrder
    percentage_to_total_amount?: SortOrder
    claim_count?: SortOrder
    percentage_to_total_count?: SortOrder
    average_cost_per_claim?: SortOrder
  }

  export type CustomIllnessesMaxOrderByAggregateInput = {
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

  export type CustomIllnessesMinOrderByAggregateInput = {
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

  export type CustomIllnessesSumOrderByAggregateInput = {
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

  export type ClientsCreateNestedManyWithoutInsurerInput = {
    create?: XOR<ClientsCreateWithoutInsurerInput, ClientsUncheckedCreateWithoutInsurerInput> | ClientsCreateWithoutInsurerInput[] | ClientsUncheckedCreateWithoutInsurerInput[]
    connectOrCreate?: ClientsCreateOrConnectWithoutInsurerInput | ClientsCreateOrConnectWithoutInsurerInput[]
    createMany?: ClientsCreateManyInsurerInputEnvelope
    connect?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
  }

  export type UploadsCreateNestedManyWithoutInsurersInput = {
    create?: XOR<UploadsCreateWithoutInsurersInput, UploadsUncheckedCreateWithoutInsurersInput> | UploadsCreateWithoutInsurersInput[] | UploadsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: UploadsCreateOrConnectWithoutInsurersInput | UploadsCreateOrConnectWithoutInsurersInput[]
    createMany?: UploadsCreateManyInsurersInputEnvelope
    connect?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
  }

  export type ClientsUncheckedCreateNestedManyWithoutInsurerInput = {
    create?: XOR<ClientsCreateWithoutInsurerInput, ClientsUncheckedCreateWithoutInsurerInput> | ClientsCreateWithoutInsurerInput[] | ClientsUncheckedCreateWithoutInsurerInput[]
    connectOrCreate?: ClientsCreateOrConnectWithoutInsurerInput | ClientsCreateOrConnectWithoutInsurerInput[]
    createMany?: ClientsCreateManyInsurerInputEnvelope
    connect?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
  }

  export type UploadsUncheckedCreateNestedManyWithoutInsurersInput = {
    create?: XOR<UploadsCreateWithoutInsurersInput, UploadsUncheckedCreateWithoutInsurersInput> | UploadsCreateWithoutInsurersInput[] | UploadsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: UploadsCreateOrConnectWithoutInsurersInput | UploadsCreateOrConnectWithoutInsurersInput[]
    createMany?: UploadsCreateManyInsurersInputEnvelope
    connect?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
  }

  export type ClientsUpdateManyWithoutInsurerNestedInput = {
    create?: XOR<ClientsCreateWithoutInsurerInput, ClientsUncheckedCreateWithoutInsurerInput> | ClientsCreateWithoutInsurerInput[] | ClientsUncheckedCreateWithoutInsurerInput[]
    connectOrCreate?: ClientsCreateOrConnectWithoutInsurerInput | ClientsCreateOrConnectWithoutInsurerInput[]
    upsert?: ClientsUpsertWithWhereUniqueWithoutInsurerInput | ClientsUpsertWithWhereUniqueWithoutInsurerInput[]
    createMany?: ClientsCreateManyInsurerInputEnvelope
    set?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    disconnect?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    delete?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    connect?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    update?: ClientsUpdateWithWhereUniqueWithoutInsurerInput | ClientsUpdateWithWhereUniqueWithoutInsurerInput[]
    updateMany?: ClientsUpdateManyWithWhereWithoutInsurerInput | ClientsUpdateManyWithWhereWithoutInsurerInput[]
    deleteMany?: ClientsScalarWhereInput | ClientsScalarWhereInput[]
  }

  export type UploadsUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<UploadsCreateWithoutInsurersInput, UploadsUncheckedCreateWithoutInsurersInput> | UploadsCreateWithoutInsurersInput[] | UploadsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: UploadsCreateOrConnectWithoutInsurersInput | UploadsCreateOrConnectWithoutInsurersInput[]
    upsert?: UploadsUpsertWithWhereUniqueWithoutInsurersInput | UploadsUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: UploadsCreateManyInsurersInputEnvelope
    set?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
    disconnect?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
    delete?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
    connect?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
    update?: UploadsUpdateWithWhereUniqueWithoutInsurersInput | UploadsUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: UploadsUpdateManyWithWhereWithoutInsurersInput | UploadsUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: UploadsScalarWhereInput | UploadsScalarWhereInput[]
  }

  export type ClientsUncheckedUpdateManyWithoutInsurerNestedInput = {
    create?: XOR<ClientsCreateWithoutInsurerInput, ClientsUncheckedCreateWithoutInsurerInput> | ClientsCreateWithoutInsurerInput[] | ClientsUncheckedCreateWithoutInsurerInput[]
    connectOrCreate?: ClientsCreateOrConnectWithoutInsurerInput | ClientsCreateOrConnectWithoutInsurerInput[]
    upsert?: ClientsUpsertWithWhereUniqueWithoutInsurerInput | ClientsUpsertWithWhereUniqueWithoutInsurerInput[]
    createMany?: ClientsCreateManyInsurerInputEnvelope
    set?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    disconnect?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    delete?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    connect?: ClientsWhereUniqueInput | ClientsWhereUniqueInput[]
    update?: ClientsUpdateWithWhereUniqueWithoutInsurerInput | ClientsUpdateWithWhereUniqueWithoutInsurerInput[]
    updateMany?: ClientsUpdateManyWithWhereWithoutInsurerInput | ClientsUpdateManyWithWhereWithoutInsurerInput[]
    deleteMany?: ClientsScalarWhereInput | ClientsScalarWhereInput[]
  }

  export type UploadsUncheckedUpdateManyWithoutInsurersNestedInput = {
    create?: XOR<UploadsCreateWithoutInsurersInput, UploadsUncheckedCreateWithoutInsurersInput> | UploadsCreateWithoutInsurersInput[] | UploadsUncheckedCreateWithoutInsurersInput[]
    connectOrCreate?: UploadsCreateOrConnectWithoutInsurersInput | UploadsCreateOrConnectWithoutInsurersInput[]
    upsert?: UploadsUpsertWithWhereUniqueWithoutInsurersInput | UploadsUpsertWithWhereUniqueWithoutInsurersInput[]
    createMany?: UploadsCreateManyInsurersInputEnvelope
    set?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
    disconnect?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
    delete?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
    connect?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
    update?: UploadsUpdateWithWhereUniqueWithoutInsurersInput | UploadsUpdateWithWhereUniqueWithoutInsurersInput[]
    updateMany?: UploadsUpdateManyWithWhereWithoutInsurersInput | UploadsUpdateManyWithWhereWithoutInsurersInput[]
    deleteMany?: UploadsScalarWhereInput | UploadsScalarWhereInput[]
  }

  export type InsurersCreateNestedOneWithoutClientsInput = {
    create?: XOR<InsurersCreateWithoutClientsInput, InsurersUncheckedCreateWithoutClientsInput>
    connectOrCreate?: InsurersCreateOrConnectWithoutClientsInput
    connect?: InsurersWhereUniqueInput
  }

  export type UploadsCreateNestedManyWithoutClientsInput = {
    create?: XOR<UploadsCreateWithoutClientsInput, UploadsUncheckedCreateWithoutClientsInput> | UploadsCreateWithoutClientsInput[] | UploadsUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: UploadsCreateOrConnectWithoutClientsInput | UploadsCreateOrConnectWithoutClientsInput[]
    createMany?: UploadsCreateManyClientsInputEnvelope
    connect?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
  }

  export type DecksCreateNestedManyWithoutClientsInput = {
    create?: XOR<DecksCreateWithoutClientsInput, DecksUncheckedCreateWithoutClientsInput> | DecksCreateWithoutClientsInput[] | DecksUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: DecksCreateOrConnectWithoutClientsInput | DecksCreateOrConnectWithoutClientsInput[]
    createMany?: DecksCreateManyClientsInputEnvelope
    connect?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
  }

  export type IntellicareMasterlistCreateNestedManyWithoutClientsInput = {
    create?: XOR<IntellicareMasterlistCreateWithoutClientsInput, IntellicareMasterlistUncheckedCreateWithoutClientsInput> | IntellicareMasterlistCreateWithoutClientsInput[] | IntellicareMasterlistUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: IntellicareMasterlistCreateOrConnectWithoutClientsInput | IntellicareMasterlistCreateOrConnectWithoutClientsInput[]
    createMany?: IntellicareMasterlistCreateManyClientsInputEnvelope
    connect?: IntellicareMasterlistWhereUniqueInput | IntellicareMasterlistWhereUniqueInput[]
  }

  export type MaxicareMasterlistCreateNestedManyWithoutClientsInput = {
    create?: XOR<MaxicareMasterlistCreateWithoutClientsInput, MaxicareMasterlistUncheckedCreateWithoutClientsInput> | MaxicareMasterlistCreateWithoutClientsInput[] | MaxicareMasterlistUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: MaxicareMasterlistCreateOrConnectWithoutClientsInput | MaxicareMasterlistCreateOrConnectWithoutClientsInput[]
    createMany?: MaxicareMasterlistCreateManyClientsInputEnvelope
    connect?: MaxicareMasterlistWhereUniqueInput | MaxicareMasterlistWhereUniqueInput[]
  }

  export type IntellicareCreateNestedManyWithoutClientsInput = {
    create?: XOR<IntellicareCreateWithoutClientsInput, IntellicareUncheckedCreateWithoutClientsInput> | IntellicareCreateWithoutClientsInput[] | IntellicareUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: IntellicareCreateOrConnectWithoutClientsInput | IntellicareCreateOrConnectWithoutClientsInput[]
    createMany?: IntellicareCreateManyClientsInputEnvelope
    connect?: IntellicareWhereUniqueInput | IntellicareWhereUniqueInput[]
  }

  export type MaxicareCreateNestedManyWithoutClientsInput = {
    create?: XOR<MaxicareCreateWithoutClientsInput, MaxicareUncheckedCreateWithoutClientsInput> | MaxicareCreateWithoutClientsInput[] | MaxicareUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: MaxicareCreateOrConnectWithoutClientsInput | MaxicareCreateOrConnectWithoutClientsInput[]
    createMany?: MaxicareCreateManyClientsInputEnvelope
    connect?: MaxicareWhereUniqueInput | MaxicareWhereUniqueInput[]
  }

  export type CustomIllnessesCreateNestedManyWithoutClientsInput = {
    create?: XOR<CustomIllnessesCreateWithoutClientsInput, CustomIllnessesUncheckedCreateWithoutClientsInput> | CustomIllnessesCreateWithoutClientsInput[] | CustomIllnessesUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: CustomIllnessesCreateOrConnectWithoutClientsInput | CustomIllnessesCreateOrConnectWithoutClientsInput[]
    createMany?: CustomIllnessesCreateManyClientsInputEnvelope
    connect?: CustomIllnessesWhereUniqueInput | CustomIllnessesWhereUniqueInput[]
  }

  export type UploadsUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<UploadsCreateWithoutClientsInput, UploadsUncheckedCreateWithoutClientsInput> | UploadsCreateWithoutClientsInput[] | UploadsUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: UploadsCreateOrConnectWithoutClientsInput | UploadsCreateOrConnectWithoutClientsInput[]
    createMany?: UploadsCreateManyClientsInputEnvelope
    connect?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
  }

  export type DecksUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<DecksCreateWithoutClientsInput, DecksUncheckedCreateWithoutClientsInput> | DecksCreateWithoutClientsInput[] | DecksUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: DecksCreateOrConnectWithoutClientsInput | DecksCreateOrConnectWithoutClientsInput[]
    createMany?: DecksCreateManyClientsInputEnvelope
    connect?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
  }

  export type IntellicareMasterlistUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<IntellicareMasterlistCreateWithoutClientsInput, IntellicareMasterlistUncheckedCreateWithoutClientsInput> | IntellicareMasterlistCreateWithoutClientsInput[] | IntellicareMasterlistUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: IntellicareMasterlistCreateOrConnectWithoutClientsInput | IntellicareMasterlistCreateOrConnectWithoutClientsInput[]
    createMany?: IntellicareMasterlistCreateManyClientsInputEnvelope
    connect?: IntellicareMasterlistWhereUniqueInput | IntellicareMasterlistWhereUniqueInput[]
  }

  export type MaxicareMasterlistUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<MaxicareMasterlistCreateWithoutClientsInput, MaxicareMasterlistUncheckedCreateWithoutClientsInput> | MaxicareMasterlistCreateWithoutClientsInput[] | MaxicareMasterlistUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: MaxicareMasterlistCreateOrConnectWithoutClientsInput | MaxicareMasterlistCreateOrConnectWithoutClientsInput[]
    createMany?: MaxicareMasterlistCreateManyClientsInputEnvelope
    connect?: MaxicareMasterlistWhereUniqueInput | MaxicareMasterlistWhereUniqueInput[]
  }

  export type IntellicareUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<IntellicareCreateWithoutClientsInput, IntellicareUncheckedCreateWithoutClientsInput> | IntellicareCreateWithoutClientsInput[] | IntellicareUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: IntellicareCreateOrConnectWithoutClientsInput | IntellicareCreateOrConnectWithoutClientsInput[]
    createMany?: IntellicareCreateManyClientsInputEnvelope
    connect?: IntellicareWhereUniqueInput | IntellicareWhereUniqueInput[]
  }

  export type MaxicareUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<MaxicareCreateWithoutClientsInput, MaxicareUncheckedCreateWithoutClientsInput> | MaxicareCreateWithoutClientsInput[] | MaxicareUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: MaxicareCreateOrConnectWithoutClientsInput | MaxicareCreateOrConnectWithoutClientsInput[]
    createMany?: MaxicareCreateManyClientsInputEnvelope
    connect?: MaxicareWhereUniqueInput | MaxicareWhereUniqueInput[]
  }

  export type CustomIllnessesUncheckedCreateNestedManyWithoutClientsInput = {
    create?: XOR<CustomIllnessesCreateWithoutClientsInput, CustomIllnessesUncheckedCreateWithoutClientsInput> | CustomIllnessesCreateWithoutClientsInput[] | CustomIllnessesUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: CustomIllnessesCreateOrConnectWithoutClientsInput | CustomIllnessesCreateOrConnectWithoutClientsInput[]
    createMany?: CustomIllnessesCreateManyClientsInputEnvelope
    connect?: CustomIllnessesWhereUniqueInput | CustomIllnessesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type InsurersUpdateOneWithoutClientsNestedInput = {
    create?: XOR<InsurersCreateWithoutClientsInput, InsurersUncheckedCreateWithoutClientsInput>
    connectOrCreate?: InsurersCreateOrConnectWithoutClientsInput
    upsert?: InsurersUpsertWithoutClientsInput
    disconnect?: InsurersWhereInput | boolean
    delete?: InsurersWhereInput | boolean
    connect?: InsurersWhereUniqueInput
    update?: XOR<XOR<InsurersUpdateToOneWithWhereWithoutClientsInput, InsurersUpdateWithoutClientsInput>, InsurersUncheckedUpdateWithoutClientsInput>
  }

  export type UploadsUpdateManyWithoutClientsNestedInput = {
    create?: XOR<UploadsCreateWithoutClientsInput, UploadsUncheckedCreateWithoutClientsInput> | UploadsCreateWithoutClientsInput[] | UploadsUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: UploadsCreateOrConnectWithoutClientsInput | UploadsCreateOrConnectWithoutClientsInput[]
    upsert?: UploadsUpsertWithWhereUniqueWithoutClientsInput | UploadsUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: UploadsCreateManyClientsInputEnvelope
    set?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
    disconnect?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
    delete?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
    connect?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
    update?: UploadsUpdateWithWhereUniqueWithoutClientsInput | UploadsUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: UploadsUpdateManyWithWhereWithoutClientsInput | UploadsUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: UploadsScalarWhereInput | UploadsScalarWhereInput[]
  }

  export type DecksUpdateManyWithoutClientsNestedInput = {
    create?: XOR<DecksCreateWithoutClientsInput, DecksUncheckedCreateWithoutClientsInput> | DecksCreateWithoutClientsInput[] | DecksUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: DecksCreateOrConnectWithoutClientsInput | DecksCreateOrConnectWithoutClientsInput[]
    upsert?: DecksUpsertWithWhereUniqueWithoutClientsInput | DecksUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: DecksCreateManyClientsInputEnvelope
    set?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
    disconnect?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
    delete?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
    connect?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
    update?: DecksUpdateWithWhereUniqueWithoutClientsInput | DecksUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: DecksUpdateManyWithWhereWithoutClientsInput | DecksUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: DecksScalarWhereInput | DecksScalarWhereInput[]
  }

  export type IntellicareMasterlistUpdateManyWithoutClientsNestedInput = {
    create?: XOR<IntellicareMasterlistCreateWithoutClientsInput, IntellicareMasterlistUncheckedCreateWithoutClientsInput> | IntellicareMasterlistCreateWithoutClientsInput[] | IntellicareMasterlistUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: IntellicareMasterlistCreateOrConnectWithoutClientsInput | IntellicareMasterlistCreateOrConnectWithoutClientsInput[]
    upsert?: IntellicareMasterlistUpsertWithWhereUniqueWithoutClientsInput | IntellicareMasterlistUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: IntellicareMasterlistCreateManyClientsInputEnvelope
    set?: IntellicareMasterlistWhereUniqueInput | IntellicareMasterlistWhereUniqueInput[]
    disconnect?: IntellicareMasterlistWhereUniqueInput | IntellicareMasterlistWhereUniqueInput[]
    delete?: IntellicareMasterlistWhereUniqueInput | IntellicareMasterlistWhereUniqueInput[]
    connect?: IntellicareMasterlistWhereUniqueInput | IntellicareMasterlistWhereUniqueInput[]
    update?: IntellicareMasterlistUpdateWithWhereUniqueWithoutClientsInput | IntellicareMasterlistUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: IntellicareMasterlistUpdateManyWithWhereWithoutClientsInput | IntellicareMasterlistUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: IntellicareMasterlistScalarWhereInput | IntellicareMasterlistScalarWhereInput[]
  }

  export type MaxicareMasterlistUpdateManyWithoutClientsNestedInput = {
    create?: XOR<MaxicareMasterlistCreateWithoutClientsInput, MaxicareMasterlistUncheckedCreateWithoutClientsInput> | MaxicareMasterlistCreateWithoutClientsInput[] | MaxicareMasterlistUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: MaxicareMasterlistCreateOrConnectWithoutClientsInput | MaxicareMasterlistCreateOrConnectWithoutClientsInput[]
    upsert?: MaxicareMasterlistUpsertWithWhereUniqueWithoutClientsInput | MaxicareMasterlistUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: MaxicareMasterlistCreateManyClientsInputEnvelope
    set?: MaxicareMasterlistWhereUniqueInput | MaxicareMasterlistWhereUniqueInput[]
    disconnect?: MaxicareMasterlistWhereUniqueInput | MaxicareMasterlistWhereUniqueInput[]
    delete?: MaxicareMasterlistWhereUniqueInput | MaxicareMasterlistWhereUniqueInput[]
    connect?: MaxicareMasterlistWhereUniqueInput | MaxicareMasterlistWhereUniqueInput[]
    update?: MaxicareMasterlistUpdateWithWhereUniqueWithoutClientsInput | MaxicareMasterlistUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: MaxicareMasterlistUpdateManyWithWhereWithoutClientsInput | MaxicareMasterlistUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: MaxicareMasterlistScalarWhereInput | MaxicareMasterlistScalarWhereInput[]
  }

  export type IntellicareUpdateManyWithoutClientsNestedInput = {
    create?: XOR<IntellicareCreateWithoutClientsInput, IntellicareUncheckedCreateWithoutClientsInput> | IntellicareCreateWithoutClientsInput[] | IntellicareUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: IntellicareCreateOrConnectWithoutClientsInput | IntellicareCreateOrConnectWithoutClientsInput[]
    upsert?: IntellicareUpsertWithWhereUniqueWithoutClientsInput | IntellicareUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: IntellicareCreateManyClientsInputEnvelope
    set?: IntellicareWhereUniqueInput | IntellicareWhereUniqueInput[]
    disconnect?: IntellicareWhereUniqueInput | IntellicareWhereUniqueInput[]
    delete?: IntellicareWhereUniqueInput | IntellicareWhereUniqueInput[]
    connect?: IntellicareWhereUniqueInput | IntellicareWhereUniqueInput[]
    update?: IntellicareUpdateWithWhereUniqueWithoutClientsInput | IntellicareUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: IntellicareUpdateManyWithWhereWithoutClientsInput | IntellicareUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: IntellicareScalarWhereInput | IntellicareScalarWhereInput[]
  }

  export type MaxicareUpdateManyWithoutClientsNestedInput = {
    create?: XOR<MaxicareCreateWithoutClientsInput, MaxicareUncheckedCreateWithoutClientsInput> | MaxicareCreateWithoutClientsInput[] | MaxicareUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: MaxicareCreateOrConnectWithoutClientsInput | MaxicareCreateOrConnectWithoutClientsInput[]
    upsert?: MaxicareUpsertWithWhereUniqueWithoutClientsInput | MaxicareUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: MaxicareCreateManyClientsInputEnvelope
    set?: MaxicareWhereUniqueInput | MaxicareWhereUniqueInput[]
    disconnect?: MaxicareWhereUniqueInput | MaxicareWhereUniqueInput[]
    delete?: MaxicareWhereUniqueInput | MaxicareWhereUniqueInput[]
    connect?: MaxicareWhereUniqueInput | MaxicareWhereUniqueInput[]
    update?: MaxicareUpdateWithWhereUniqueWithoutClientsInput | MaxicareUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: MaxicareUpdateManyWithWhereWithoutClientsInput | MaxicareUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: MaxicareScalarWhereInput | MaxicareScalarWhereInput[]
  }

  export type CustomIllnessesUpdateManyWithoutClientsNestedInput = {
    create?: XOR<CustomIllnessesCreateWithoutClientsInput, CustomIllnessesUncheckedCreateWithoutClientsInput> | CustomIllnessesCreateWithoutClientsInput[] | CustomIllnessesUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: CustomIllnessesCreateOrConnectWithoutClientsInput | CustomIllnessesCreateOrConnectWithoutClientsInput[]
    upsert?: CustomIllnessesUpsertWithWhereUniqueWithoutClientsInput | CustomIllnessesUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: CustomIllnessesCreateManyClientsInputEnvelope
    set?: CustomIllnessesWhereUniqueInput | CustomIllnessesWhereUniqueInput[]
    disconnect?: CustomIllnessesWhereUniqueInput | CustomIllnessesWhereUniqueInput[]
    delete?: CustomIllnessesWhereUniqueInput | CustomIllnessesWhereUniqueInput[]
    connect?: CustomIllnessesWhereUniqueInput | CustomIllnessesWhereUniqueInput[]
    update?: CustomIllnessesUpdateWithWhereUniqueWithoutClientsInput | CustomIllnessesUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: CustomIllnessesUpdateManyWithWhereWithoutClientsInput | CustomIllnessesUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: CustomIllnessesScalarWhereInput | CustomIllnessesScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UploadsUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<UploadsCreateWithoutClientsInput, UploadsUncheckedCreateWithoutClientsInput> | UploadsCreateWithoutClientsInput[] | UploadsUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: UploadsCreateOrConnectWithoutClientsInput | UploadsCreateOrConnectWithoutClientsInput[]
    upsert?: UploadsUpsertWithWhereUniqueWithoutClientsInput | UploadsUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: UploadsCreateManyClientsInputEnvelope
    set?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
    disconnect?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
    delete?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
    connect?: UploadsWhereUniqueInput | UploadsWhereUniqueInput[]
    update?: UploadsUpdateWithWhereUniqueWithoutClientsInput | UploadsUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: UploadsUpdateManyWithWhereWithoutClientsInput | UploadsUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: UploadsScalarWhereInput | UploadsScalarWhereInput[]
  }

  export type DecksUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<DecksCreateWithoutClientsInput, DecksUncheckedCreateWithoutClientsInput> | DecksCreateWithoutClientsInput[] | DecksUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: DecksCreateOrConnectWithoutClientsInput | DecksCreateOrConnectWithoutClientsInput[]
    upsert?: DecksUpsertWithWhereUniqueWithoutClientsInput | DecksUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: DecksCreateManyClientsInputEnvelope
    set?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
    disconnect?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
    delete?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
    connect?: DecksWhereUniqueInput | DecksWhereUniqueInput[]
    update?: DecksUpdateWithWhereUniqueWithoutClientsInput | DecksUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: DecksUpdateManyWithWhereWithoutClientsInput | DecksUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: DecksScalarWhereInput | DecksScalarWhereInput[]
  }

  export type IntellicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<IntellicareMasterlistCreateWithoutClientsInput, IntellicareMasterlistUncheckedCreateWithoutClientsInput> | IntellicareMasterlistCreateWithoutClientsInput[] | IntellicareMasterlistUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: IntellicareMasterlistCreateOrConnectWithoutClientsInput | IntellicareMasterlistCreateOrConnectWithoutClientsInput[]
    upsert?: IntellicareMasterlistUpsertWithWhereUniqueWithoutClientsInput | IntellicareMasterlistUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: IntellicareMasterlistCreateManyClientsInputEnvelope
    set?: IntellicareMasterlistWhereUniqueInput | IntellicareMasterlistWhereUniqueInput[]
    disconnect?: IntellicareMasterlistWhereUniqueInput | IntellicareMasterlistWhereUniqueInput[]
    delete?: IntellicareMasterlistWhereUniqueInput | IntellicareMasterlistWhereUniqueInput[]
    connect?: IntellicareMasterlistWhereUniqueInput | IntellicareMasterlistWhereUniqueInput[]
    update?: IntellicareMasterlistUpdateWithWhereUniqueWithoutClientsInput | IntellicareMasterlistUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: IntellicareMasterlistUpdateManyWithWhereWithoutClientsInput | IntellicareMasterlistUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: IntellicareMasterlistScalarWhereInput | IntellicareMasterlistScalarWhereInput[]
  }

  export type MaxicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<MaxicareMasterlistCreateWithoutClientsInput, MaxicareMasterlistUncheckedCreateWithoutClientsInput> | MaxicareMasterlistCreateWithoutClientsInput[] | MaxicareMasterlistUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: MaxicareMasterlistCreateOrConnectWithoutClientsInput | MaxicareMasterlistCreateOrConnectWithoutClientsInput[]
    upsert?: MaxicareMasterlistUpsertWithWhereUniqueWithoutClientsInput | MaxicareMasterlistUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: MaxicareMasterlistCreateManyClientsInputEnvelope
    set?: MaxicareMasterlistWhereUniqueInput | MaxicareMasterlistWhereUniqueInput[]
    disconnect?: MaxicareMasterlistWhereUniqueInput | MaxicareMasterlistWhereUniqueInput[]
    delete?: MaxicareMasterlistWhereUniqueInput | MaxicareMasterlistWhereUniqueInput[]
    connect?: MaxicareMasterlistWhereUniqueInput | MaxicareMasterlistWhereUniqueInput[]
    update?: MaxicareMasterlistUpdateWithWhereUniqueWithoutClientsInput | MaxicareMasterlistUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: MaxicareMasterlistUpdateManyWithWhereWithoutClientsInput | MaxicareMasterlistUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: MaxicareMasterlistScalarWhereInput | MaxicareMasterlistScalarWhereInput[]
  }

  export type IntellicareUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<IntellicareCreateWithoutClientsInput, IntellicareUncheckedCreateWithoutClientsInput> | IntellicareCreateWithoutClientsInput[] | IntellicareUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: IntellicareCreateOrConnectWithoutClientsInput | IntellicareCreateOrConnectWithoutClientsInput[]
    upsert?: IntellicareUpsertWithWhereUniqueWithoutClientsInput | IntellicareUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: IntellicareCreateManyClientsInputEnvelope
    set?: IntellicareWhereUniqueInput | IntellicareWhereUniqueInput[]
    disconnect?: IntellicareWhereUniqueInput | IntellicareWhereUniqueInput[]
    delete?: IntellicareWhereUniqueInput | IntellicareWhereUniqueInput[]
    connect?: IntellicareWhereUniqueInput | IntellicareWhereUniqueInput[]
    update?: IntellicareUpdateWithWhereUniqueWithoutClientsInput | IntellicareUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: IntellicareUpdateManyWithWhereWithoutClientsInput | IntellicareUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: IntellicareScalarWhereInput | IntellicareScalarWhereInput[]
  }

  export type MaxicareUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<MaxicareCreateWithoutClientsInput, MaxicareUncheckedCreateWithoutClientsInput> | MaxicareCreateWithoutClientsInput[] | MaxicareUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: MaxicareCreateOrConnectWithoutClientsInput | MaxicareCreateOrConnectWithoutClientsInput[]
    upsert?: MaxicareUpsertWithWhereUniqueWithoutClientsInput | MaxicareUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: MaxicareCreateManyClientsInputEnvelope
    set?: MaxicareWhereUniqueInput | MaxicareWhereUniqueInput[]
    disconnect?: MaxicareWhereUniqueInput | MaxicareWhereUniqueInput[]
    delete?: MaxicareWhereUniqueInput | MaxicareWhereUniqueInput[]
    connect?: MaxicareWhereUniqueInput | MaxicareWhereUniqueInput[]
    update?: MaxicareUpdateWithWhereUniqueWithoutClientsInput | MaxicareUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: MaxicareUpdateManyWithWhereWithoutClientsInput | MaxicareUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: MaxicareScalarWhereInput | MaxicareScalarWhereInput[]
  }

  export type CustomIllnessesUncheckedUpdateManyWithoutClientsNestedInput = {
    create?: XOR<CustomIllnessesCreateWithoutClientsInput, CustomIllnessesUncheckedCreateWithoutClientsInput> | CustomIllnessesCreateWithoutClientsInput[] | CustomIllnessesUncheckedCreateWithoutClientsInput[]
    connectOrCreate?: CustomIllnessesCreateOrConnectWithoutClientsInput | CustomIllnessesCreateOrConnectWithoutClientsInput[]
    upsert?: CustomIllnessesUpsertWithWhereUniqueWithoutClientsInput | CustomIllnessesUpsertWithWhereUniqueWithoutClientsInput[]
    createMany?: CustomIllnessesCreateManyClientsInputEnvelope
    set?: CustomIllnessesWhereUniqueInput | CustomIllnessesWhereUniqueInput[]
    disconnect?: CustomIllnessesWhereUniqueInput | CustomIllnessesWhereUniqueInput[]
    delete?: CustomIllnessesWhereUniqueInput | CustomIllnessesWhereUniqueInput[]
    connect?: CustomIllnessesWhereUniqueInput | CustomIllnessesWhereUniqueInput[]
    update?: CustomIllnessesUpdateWithWhereUniqueWithoutClientsInput | CustomIllnessesUpdateWithWhereUniqueWithoutClientsInput[]
    updateMany?: CustomIllnessesUpdateManyWithWhereWithoutClientsInput | CustomIllnessesUpdateManyWithWhereWithoutClientsInput[]
    deleteMany?: CustomIllnessesScalarWhereInput | CustomIllnessesScalarWhereInput[]
  }

  export type ClientsCreateNestedOneWithoutUploadsInput = {
    create?: XOR<ClientsCreateWithoutUploadsInput, ClientsUncheckedCreateWithoutUploadsInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutUploadsInput
    connect?: ClientsWhereUniqueInput
  }

  export type InsurersCreateNestedOneWithoutUploadsInput = {
    create?: XOR<InsurersCreateWithoutUploadsInput, InsurersUncheckedCreateWithoutUploadsInput>
    connectOrCreate?: InsurersCreateOrConnectWithoutUploadsInput
    connect?: InsurersWhereUniqueInput
  }

  export type ClientsUpdateOneRequiredWithoutUploadsNestedInput = {
    create?: XOR<ClientsCreateWithoutUploadsInput, ClientsUncheckedCreateWithoutUploadsInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutUploadsInput
    upsert?: ClientsUpsertWithoutUploadsInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutUploadsInput, ClientsUpdateWithoutUploadsInput>, ClientsUncheckedUpdateWithoutUploadsInput>
  }

  export type InsurersUpdateOneRequiredWithoutUploadsNestedInput = {
    create?: XOR<InsurersCreateWithoutUploadsInput, InsurersUncheckedCreateWithoutUploadsInput>
    connectOrCreate?: InsurersCreateOrConnectWithoutUploadsInput
    upsert?: InsurersUpsertWithoutUploadsInput
    connect?: InsurersWhereUniqueInput
    update?: XOR<XOR<InsurersUpdateToOneWithWhereWithoutUploadsInput, InsurersUpdateWithoutUploadsInput>, InsurersUncheckedUpdateWithoutUploadsInput>
  }

  export type ClientsCreateNestedOneWithoutDecksInput = {
    create?: XOR<ClientsCreateWithoutDecksInput, ClientsUncheckedCreateWithoutDecksInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutDecksInput
    connect?: ClientsWhereUniqueInput
  }

  export type ClientsUpdateOneRequiredWithoutDecksNestedInput = {
    create?: XOR<ClientsCreateWithoutDecksInput, ClientsUncheckedCreateWithoutDecksInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutDecksInput
    upsert?: ClientsUpsertWithoutDecksInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutDecksInput, ClientsUpdateWithoutDecksInput>, ClientsUncheckedUpdateWithoutDecksInput>
  }

  export type ClientsCreateNestedOneWithoutIntellicareMasterlistInput = {
    create?: XOR<ClientsCreateWithoutIntellicareMasterlistInput, ClientsUncheckedCreateWithoutIntellicareMasterlistInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutIntellicareMasterlistInput
    connect?: ClientsWhereUniqueInput
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

  export type ClientsUpdateOneRequiredWithoutIntellicareMasterlistNestedInput = {
    create?: XOR<ClientsCreateWithoutIntellicareMasterlistInput, ClientsUncheckedCreateWithoutIntellicareMasterlistInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutIntellicareMasterlistInput
    upsert?: ClientsUpsertWithoutIntellicareMasterlistInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutIntellicareMasterlistInput, ClientsUpdateWithoutIntellicareMasterlistInput>, ClientsUncheckedUpdateWithoutIntellicareMasterlistInput>
  }

  export type ClientsCreateNestedOneWithoutMaxicareMasterlistInput = {
    create?: XOR<ClientsCreateWithoutMaxicareMasterlistInput, ClientsUncheckedCreateWithoutMaxicareMasterlistInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutMaxicareMasterlistInput
    connect?: ClientsWhereUniqueInput
  }

  export type ClientsUpdateOneRequiredWithoutMaxicareMasterlistNestedInput = {
    create?: XOR<ClientsCreateWithoutMaxicareMasterlistInput, ClientsUncheckedCreateWithoutMaxicareMasterlistInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutMaxicareMasterlistInput
    upsert?: ClientsUpsertWithoutMaxicareMasterlistInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutMaxicareMasterlistInput, ClientsUpdateWithoutMaxicareMasterlistInput>, ClientsUncheckedUpdateWithoutMaxicareMasterlistInput>
  }

  export type ClientsCreateNestedOneWithoutIntellicareInput = {
    create?: XOR<ClientsCreateWithoutIntellicareInput, ClientsUncheckedCreateWithoutIntellicareInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutIntellicareInput
    connect?: ClientsWhereUniqueInput
  }

  export type ClientsUpdateOneRequiredWithoutIntellicareNestedInput = {
    create?: XOR<ClientsCreateWithoutIntellicareInput, ClientsUncheckedCreateWithoutIntellicareInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutIntellicareInput
    upsert?: ClientsUpsertWithoutIntellicareInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutIntellicareInput, ClientsUpdateWithoutIntellicareInput>, ClientsUncheckedUpdateWithoutIntellicareInput>
  }

  export type ClientsCreateNestedOneWithoutMaxicareInput = {
    create?: XOR<ClientsCreateWithoutMaxicareInput, ClientsUncheckedCreateWithoutMaxicareInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutMaxicareInput
    connect?: ClientsWhereUniqueInput
  }

  export type ClientsUpdateOneRequiredWithoutMaxicareNestedInput = {
    create?: XOR<ClientsCreateWithoutMaxicareInput, ClientsUncheckedCreateWithoutMaxicareInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutMaxicareInput
    upsert?: ClientsUpsertWithoutMaxicareInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutMaxicareInput, ClientsUpdateWithoutMaxicareInput>, ClientsUncheckedUpdateWithoutMaxicareInput>
  }

  export type ClientsCreateNestedOneWithoutCustomIllnessesInput = {
    create?: XOR<ClientsCreateWithoutCustomIllnessesInput, ClientsUncheckedCreateWithoutCustomIllnessesInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutCustomIllnessesInput
    connect?: ClientsWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ClientsUpdateOneRequiredWithoutCustomIllnessesNestedInput = {
    create?: XOR<ClientsCreateWithoutCustomIllnessesInput, ClientsUncheckedCreateWithoutCustomIllnessesInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutCustomIllnessesInput
    upsert?: ClientsUpsertWithoutCustomIllnessesInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutCustomIllnessesInput, ClientsUpdateWithoutCustomIllnessesInput>, ClientsUncheckedUpdateWithoutCustomIllnessesInput>
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

  export type ClientsCreateWithoutInsurerInput = {
    client_name: string
    description?: string | null
    Uploads?: UploadsCreateNestedManyWithoutClientsInput
    Decks?: DecksCreateNestedManyWithoutClientsInput
    IntellicareMasterlist?: IntellicareMasterlistCreateNestedManyWithoutClientsInput
    MaxicareMasterlist?: MaxicareMasterlistCreateNestedManyWithoutClientsInput
    Intellicare?: IntellicareCreateNestedManyWithoutClientsInput
    Maxicare?: MaxicareCreateNestedManyWithoutClientsInput
    CustomIllnesses?: CustomIllnessesCreateNestedManyWithoutClientsInput
  }

  export type ClientsUncheckedCreateWithoutInsurerInput = {
    id?: number
    client_name: string
    description?: string | null
    Uploads?: UploadsUncheckedCreateNestedManyWithoutClientsInput
    Decks?: DecksUncheckedCreateNestedManyWithoutClientsInput
    IntellicareMasterlist?: IntellicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    MaxicareMasterlist?: MaxicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    Intellicare?: IntellicareUncheckedCreateNestedManyWithoutClientsInput
    Maxicare?: MaxicareUncheckedCreateNestedManyWithoutClientsInput
    CustomIllnesses?: CustomIllnessesUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientsCreateOrConnectWithoutInsurerInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutInsurerInput, ClientsUncheckedCreateWithoutInsurerInput>
  }

  export type ClientsCreateManyInsurerInputEnvelope = {
    data: ClientsCreateManyInsurerInput | ClientsCreateManyInsurerInput[]
    skipDuplicates?: boolean
  }

  export type UploadsCreateWithoutInsurersInput = {
    year: string
    months?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Clients: ClientsCreateNestedOneWithoutUploadsInput
  }

  export type UploadsUncheckedCreateWithoutInsurersInput = {
    id?: number
    clientId: number
    year: string
    months?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UploadsCreateOrConnectWithoutInsurersInput = {
    where: UploadsWhereUniqueInput
    create: XOR<UploadsCreateWithoutInsurersInput, UploadsUncheckedCreateWithoutInsurersInput>
  }

  export type UploadsCreateManyInsurersInputEnvelope = {
    data: UploadsCreateManyInsurersInput | UploadsCreateManyInsurersInput[]
    skipDuplicates?: boolean
  }

  export type ClientsUpsertWithWhereUniqueWithoutInsurerInput = {
    where: ClientsWhereUniqueInput
    update: XOR<ClientsUpdateWithoutInsurerInput, ClientsUncheckedUpdateWithoutInsurerInput>
    create: XOR<ClientsCreateWithoutInsurerInput, ClientsUncheckedCreateWithoutInsurerInput>
  }

  export type ClientsUpdateWithWhereUniqueWithoutInsurerInput = {
    where: ClientsWhereUniqueInput
    data: XOR<ClientsUpdateWithoutInsurerInput, ClientsUncheckedUpdateWithoutInsurerInput>
  }

  export type ClientsUpdateManyWithWhereWithoutInsurerInput = {
    where: ClientsScalarWhereInput
    data: XOR<ClientsUpdateManyMutationInput, ClientsUncheckedUpdateManyWithoutInsurerInput>
  }

  export type ClientsScalarWhereInput = {
    AND?: ClientsScalarWhereInput | ClientsScalarWhereInput[]
    OR?: ClientsScalarWhereInput[]
    NOT?: ClientsScalarWhereInput | ClientsScalarWhereInput[]
    id?: IntFilter<"Clients"> | number
    client_name?: StringFilter<"Clients"> | string
    description?: StringNullableFilter<"Clients"> | string | null
    insurer_id?: IntNullableFilter<"Clients"> | number | null
  }

  export type UploadsUpsertWithWhereUniqueWithoutInsurersInput = {
    where: UploadsWhereUniqueInput
    update: XOR<UploadsUpdateWithoutInsurersInput, UploadsUncheckedUpdateWithoutInsurersInput>
    create: XOR<UploadsCreateWithoutInsurersInput, UploadsUncheckedCreateWithoutInsurersInput>
  }

  export type UploadsUpdateWithWhereUniqueWithoutInsurersInput = {
    where: UploadsWhereUniqueInput
    data: XOR<UploadsUpdateWithoutInsurersInput, UploadsUncheckedUpdateWithoutInsurersInput>
  }

  export type UploadsUpdateManyWithWhereWithoutInsurersInput = {
    where: UploadsScalarWhereInput
    data: XOR<UploadsUpdateManyMutationInput, UploadsUncheckedUpdateManyWithoutInsurersInput>
  }

  export type UploadsScalarWhereInput = {
    AND?: UploadsScalarWhereInput | UploadsScalarWhereInput[]
    OR?: UploadsScalarWhereInput[]
    NOT?: UploadsScalarWhereInput | UploadsScalarWhereInput[]
    id?: IntFilter<"Uploads"> | number
    clientId?: IntFilter<"Uploads"> | number
    insurerId?: IntFilter<"Uploads"> | number
    year?: StringFilter<"Uploads"> | string
    months?: StringNullableFilter<"Uploads"> | string | null
    type?: StringFilter<"Uploads"> | string
    createdAt?: DateTimeFilter<"Uploads"> | Date | string
    updatedAt?: DateTimeFilter<"Uploads"> | Date | string
  }

  export type InsurersCreateWithoutClientsInput = {
    name: string
    Uploads?: UploadsCreateNestedManyWithoutInsurersInput
  }

  export type InsurersUncheckedCreateWithoutClientsInput = {
    id?: number
    name: string
    Uploads?: UploadsUncheckedCreateNestedManyWithoutInsurersInput
  }

  export type InsurersCreateOrConnectWithoutClientsInput = {
    where: InsurersWhereUniqueInput
    create: XOR<InsurersCreateWithoutClientsInput, InsurersUncheckedCreateWithoutClientsInput>
  }

  export type UploadsCreateWithoutClientsInput = {
    year: string
    months?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Insurers: InsurersCreateNestedOneWithoutUploadsInput
  }

  export type UploadsUncheckedCreateWithoutClientsInput = {
    id?: number
    insurerId: number
    year: string
    months?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UploadsCreateOrConnectWithoutClientsInput = {
    where: UploadsWhereUniqueInput
    create: XOR<UploadsCreateWithoutClientsInput, UploadsUncheckedCreateWithoutClientsInput>
  }

  export type UploadsCreateManyClientsInputEnvelope = {
    data: UploadsCreateManyClientsInput | UploadsCreateManyClientsInput[]
    skipDuplicates?: boolean
  }

  export type DecksCreateWithoutClientsInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DecksUncheckedCreateWithoutClientsInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DecksCreateOrConnectWithoutClientsInput = {
    where: DecksWhereUniqueInput
    create: XOR<DecksCreateWithoutClientsInput, DecksUncheckedCreateWithoutClientsInput>
  }

  export type DecksCreateManyClientsInputEnvelope = {
    data: DecksCreateManyClientsInput | DecksCreateManyClientsInput[]
    skipDuplicates?: boolean
  }

  export type IntellicareMasterlistCreateWithoutClientsInput = {
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

  export type IntellicareMasterlistUncheckedCreateWithoutClientsInput = {
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

  export type IntellicareMasterlistCreateOrConnectWithoutClientsInput = {
    where: IntellicareMasterlistWhereUniqueInput
    create: XOR<IntellicareMasterlistCreateWithoutClientsInput, IntellicareMasterlistUncheckedCreateWithoutClientsInput>
  }

  export type IntellicareMasterlistCreateManyClientsInputEnvelope = {
    data: IntellicareMasterlistCreateManyClientsInput | IntellicareMasterlistCreateManyClientsInput[]
    skipDuplicates?: boolean
  }

  export type MaxicareMasterlistCreateWithoutClientsInput = {
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

  export type MaxicareMasterlistUncheckedCreateWithoutClientsInput = {
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

  export type MaxicareMasterlistCreateOrConnectWithoutClientsInput = {
    where: MaxicareMasterlistWhereUniqueInput
    create: XOR<MaxicareMasterlistCreateWithoutClientsInput, MaxicareMasterlistUncheckedCreateWithoutClientsInput>
  }

  export type MaxicareMasterlistCreateManyClientsInputEnvelope = {
    data: MaxicareMasterlistCreateManyClientsInput | MaxicareMasterlistCreateManyClientsInput[]
    skipDuplicates?: boolean
  }

  export type IntellicareCreateWithoutClientsInput = {
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

  export type IntellicareUncheckedCreateWithoutClientsInput = {
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

  export type IntellicareCreateOrConnectWithoutClientsInput = {
    where: IntellicareWhereUniqueInput
    create: XOR<IntellicareCreateWithoutClientsInput, IntellicareUncheckedCreateWithoutClientsInput>
  }

  export type IntellicareCreateManyClientsInputEnvelope = {
    data: IntellicareCreateManyClientsInput | IntellicareCreateManyClientsInput[]
    skipDuplicates?: boolean
  }

  export type MaxicareCreateWithoutClientsInput = {
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

  export type MaxicareUncheckedCreateWithoutClientsInput = {
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

  export type MaxicareCreateOrConnectWithoutClientsInput = {
    where: MaxicareWhereUniqueInput
    create: XOR<MaxicareCreateWithoutClientsInput, MaxicareUncheckedCreateWithoutClientsInput>
  }

  export type MaxicareCreateManyClientsInputEnvelope = {
    data: MaxicareCreateManyClientsInput | MaxicareCreateManyClientsInput[]
    skipDuplicates?: boolean
  }

  export type CustomIllnessesCreateWithoutClientsInput = {
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

  export type CustomIllnessesUncheckedCreateWithoutClientsInput = {
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

  export type CustomIllnessesCreateOrConnectWithoutClientsInput = {
    where: CustomIllnessesWhereUniqueInput
    create: XOR<CustomIllnessesCreateWithoutClientsInput, CustomIllnessesUncheckedCreateWithoutClientsInput>
  }

  export type CustomIllnessesCreateManyClientsInputEnvelope = {
    data: CustomIllnessesCreateManyClientsInput | CustomIllnessesCreateManyClientsInput[]
    skipDuplicates?: boolean
  }

  export type InsurersUpsertWithoutClientsInput = {
    update: XOR<InsurersUpdateWithoutClientsInput, InsurersUncheckedUpdateWithoutClientsInput>
    create: XOR<InsurersCreateWithoutClientsInput, InsurersUncheckedCreateWithoutClientsInput>
    where?: InsurersWhereInput
  }

  export type InsurersUpdateToOneWithWhereWithoutClientsInput = {
    where?: InsurersWhereInput
    data: XOR<InsurersUpdateWithoutClientsInput, InsurersUncheckedUpdateWithoutClientsInput>
  }

  export type InsurersUpdateWithoutClientsInput = {
    name?: StringFieldUpdateOperationsInput | string
    Uploads?: UploadsUpdateManyWithoutInsurersNestedInput
  }

  export type InsurersUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Uploads?: UploadsUncheckedUpdateManyWithoutInsurersNestedInput
  }

  export type UploadsUpsertWithWhereUniqueWithoutClientsInput = {
    where: UploadsWhereUniqueInput
    update: XOR<UploadsUpdateWithoutClientsInput, UploadsUncheckedUpdateWithoutClientsInput>
    create: XOR<UploadsCreateWithoutClientsInput, UploadsUncheckedCreateWithoutClientsInput>
  }

  export type UploadsUpdateWithWhereUniqueWithoutClientsInput = {
    where: UploadsWhereUniqueInput
    data: XOR<UploadsUpdateWithoutClientsInput, UploadsUncheckedUpdateWithoutClientsInput>
  }

  export type UploadsUpdateManyWithWhereWithoutClientsInput = {
    where: UploadsScalarWhereInput
    data: XOR<UploadsUpdateManyMutationInput, UploadsUncheckedUpdateManyWithoutClientsInput>
  }

  export type DecksUpsertWithWhereUniqueWithoutClientsInput = {
    where: DecksWhereUniqueInput
    update: XOR<DecksUpdateWithoutClientsInput, DecksUncheckedUpdateWithoutClientsInput>
    create: XOR<DecksCreateWithoutClientsInput, DecksUncheckedCreateWithoutClientsInput>
  }

  export type DecksUpdateWithWhereUniqueWithoutClientsInput = {
    where: DecksWhereUniqueInput
    data: XOR<DecksUpdateWithoutClientsInput, DecksUncheckedUpdateWithoutClientsInput>
  }

  export type DecksUpdateManyWithWhereWithoutClientsInput = {
    where: DecksScalarWhereInput
    data: XOR<DecksUpdateManyMutationInput, DecksUncheckedUpdateManyWithoutClientsInput>
  }

  export type DecksScalarWhereInput = {
    AND?: DecksScalarWhereInput | DecksScalarWhereInput[]
    OR?: DecksScalarWhereInput[]
    NOT?: DecksScalarWhereInput | DecksScalarWhereInput[]
    id?: IntFilter<"Decks"> | number
    name?: StringFilter<"Decks"> | string
    description?: StringFilter<"Decks"> | string
    createdAt?: DateTimeFilter<"Decks"> | Date | string
    updatedAt?: DateTimeFilter<"Decks"> | Date | string
    clientId?: IntFilter<"Decks"> | number
  }

  export type IntellicareMasterlistUpsertWithWhereUniqueWithoutClientsInput = {
    where: IntellicareMasterlistWhereUniqueInput
    update: XOR<IntellicareMasterlistUpdateWithoutClientsInput, IntellicareMasterlistUncheckedUpdateWithoutClientsInput>
    create: XOR<IntellicareMasterlistCreateWithoutClientsInput, IntellicareMasterlistUncheckedCreateWithoutClientsInput>
  }

  export type IntellicareMasterlistUpdateWithWhereUniqueWithoutClientsInput = {
    where: IntellicareMasterlistWhereUniqueInput
    data: XOR<IntellicareMasterlistUpdateWithoutClientsInput, IntellicareMasterlistUncheckedUpdateWithoutClientsInput>
  }

  export type IntellicareMasterlistUpdateManyWithWhereWithoutClientsInput = {
    where: IntellicareMasterlistScalarWhereInput
    data: XOR<IntellicareMasterlistUpdateManyMutationInput, IntellicareMasterlistUncheckedUpdateManyWithoutClientsInput>
  }

  export type IntellicareMasterlistScalarWhereInput = {
    AND?: IntellicareMasterlistScalarWhereInput | IntellicareMasterlistScalarWhereInput[]
    OR?: IntellicareMasterlistScalarWhereInput[]
    NOT?: IntellicareMasterlistScalarWhereInput | IntellicareMasterlistScalarWhereInput[]
    id?: IntFilter<"IntellicareMasterlist"> | number
    clientId?: IntFilter<"IntellicareMasterlist"> | number
    PY?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    ACCOUNT_NO?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    STATUS?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    MEMBER_TYPE?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    RNB?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    PREEXIST?: FloatNullableFilter<"IntellicareMasterlist"> | number | null
    LIMIT?: FloatNullableFilter<"IntellicareMasterlist"> | number | null
    BIRTHDATE?: DateTimeNullableFilter<"IntellicareMasterlist"> | Date | string | null
    AGE?: IntNullableFilter<"IntellicareMasterlist"> | number | null
    RELATION?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    EE_ID?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    CARD_NO?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    COMPANY?: StringNullableFilter<"IntellicareMasterlist"> | string | null
    createdAt?: DateTimeFilter<"IntellicareMasterlist"> | Date | string
    updatedAt?: DateTimeFilter<"IntellicareMasterlist"> | Date | string
  }

  export type MaxicareMasterlistUpsertWithWhereUniqueWithoutClientsInput = {
    where: MaxicareMasterlistWhereUniqueInput
    update: XOR<MaxicareMasterlistUpdateWithoutClientsInput, MaxicareMasterlistUncheckedUpdateWithoutClientsInput>
    create: XOR<MaxicareMasterlistCreateWithoutClientsInput, MaxicareMasterlistUncheckedCreateWithoutClientsInput>
  }

  export type MaxicareMasterlistUpdateWithWhereUniqueWithoutClientsInput = {
    where: MaxicareMasterlistWhereUniqueInput
    data: XOR<MaxicareMasterlistUpdateWithoutClientsInput, MaxicareMasterlistUncheckedUpdateWithoutClientsInput>
  }

  export type MaxicareMasterlistUpdateManyWithWhereWithoutClientsInput = {
    where: MaxicareMasterlistScalarWhereInput
    data: XOR<MaxicareMasterlistUpdateManyMutationInput, MaxicareMasterlistUncheckedUpdateManyWithoutClientsInput>
  }

  export type MaxicareMasterlistScalarWhereInput = {
    AND?: MaxicareMasterlistScalarWhereInput | MaxicareMasterlistScalarWhereInput[]
    OR?: MaxicareMasterlistScalarWhereInput[]
    NOT?: MaxicareMasterlistScalarWhereInput | MaxicareMasterlistScalarWhereInput[]
    id?: IntFilter<"MaxicareMasterlist"> | number
    clientId?: IntFilter<"MaxicareMasterlist"> | number
    PY?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    ACCOUNT_NO?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    STATUS?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    MEMBER_TYPE?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    LIMIT?: FloatNullableFilter<"MaxicareMasterlist"> | number | null
    RELATION?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    EE_ID?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    CARD_NO?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    COMPANY?: StringNullableFilter<"MaxicareMasterlist"> | string | null
    createdAt?: DateTimeFilter<"MaxicareMasterlist"> | Date | string
    updatedAt?: DateTimeFilter<"MaxicareMasterlist"> | Date | string
  }

  export type IntellicareUpsertWithWhereUniqueWithoutClientsInput = {
    where: IntellicareWhereUniqueInput
    update: XOR<IntellicareUpdateWithoutClientsInput, IntellicareUncheckedUpdateWithoutClientsInput>
    create: XOR<IntellicareCreateWithoutClientsInput, IntellicareUncheckedCreateWithoutClientsInput>
  }

  export type IntellicareUpdateWithWhereUniqueWithoutClientsInput = {
    where: IntellicareWhereUniqueInput
    data: XOR<IntellicareUpdateWithoutClientsInput, IntellicareUncheckedUpdateWithoutClientsInput>
  }

  export type IntellicareUpdateManyWithWhereWithoutClientsInput = {
    where: IntellicareScalarWhereInput
    data: XOR<IntellicareUpdateManyMutationInput, IntellicareUncheckedUpdateManyWithoutClientsInput>
  }

  export type IntellicareScalarWhereInput = {
    AND?: IntellicareScalarWhereInput | IntellicareScalarWhereInput[]
    OR?: IntellicareScalarWhereInput[]
    NOT?: IntellicareScalarWhereInput | IntellicareScalarWhereInput[]
    id?: IntFilter<"Intellicare"> | number
    clientId?: IntFilter<"Intellicare"> | number
    PY?: StringFilter<"Intellicare"> | string
    Company?: StringNullableFilter<"Intellicare"> | string | null
    Member_Account?: StringNullableFilter<"Intellicare"> | string | null
    Member_Type?: StringNullableFilter<"Intellicare"> | string | null
    ICD_10_Code?: StringNullableFilter<"Intellicare"> | string | null
    Diagnosis?: StringNullableFilter<"Intellicare"> | string | null
    Claim_Type?: StringNullableFilter<"Intellicare"> | string | null
    Admission_Date?: DateTimeNullableFilter<"Intellicare"> | Date | string | null
    Provider_Name?: StringNullableFilter<"Intellicare"> | string | null
    Provider_Type?: StringNullableFilter<"Intellicare"> | string | null
    Approved_Claim_Amount?: FloatNullableFilter<"Intellicare"> | number | null
    Class_Plan_Level?: StringNullableFilter<"Intellicare"> | string | null
    Maximum_Benefit_Limit?: FloatNullableFilter<"Intellicare"> | number | null
    Date_of_Birth?: DateTimeNullableFilter<"Intellicare"> | Date | string | null
    Relationship?: StringNullableFilter<"Intellicare"> | string | null
    createdAt?: DateTimeFilter<"Intellicare"> | Date | string
    updatedAt?: DateTimeFilter<"Intellicare"> | Date | string
  }

  export type MaxicareUpsertWithWhereUniqueWithoutClientsInput = {
    where: MaxicareWhereUniqueInput
    update: XOR<MaxicareUpdateWithoutClientsInput, MaxicareUncheckedUpdateWithoutClientsInput>
    create: XOR<MaxicareCreateWithoutClientsInput, MaxicareUncheckedCreateWithoutClientsInput>
  }

  export type MaxicareUpdateWithWhereUniqueWithoutClientsInput = {
    where: MaxicareWhereUniqueInput
    data: XOR<MaxicareUpdateWithoutClientsInput, MaxicareUncheckedUpdateWithoutClientsInput>
  }

  export type MaxicareUpdateManyWithWhereWithoutClientsInput = {
    where: MaxicareScalarWhereInput
    data: XOR<MaxicareUpdateManyMutationInput, MaxicareUncheckedUpdateManyWithoutClientsInput>
  }

  export type MaxicareScalarWhereInput = {
    AND?: MaxicareScalarWhereInput | MaxicareScalarWhereInput[]
    OR?: MaxicareScalarWhereInput[]
    NOT?: MaxicareScalarWhereInput | MaxicareScalarWhereInput[]
    id?: IntFilter<"Maxicare"> | number
    clientId?: IntFilter<"Maxicare"> | number
    PY?: StringFilter<"Maxicare"> | string
    Company?: StringNullableFilter<"Maxicare"> | string | null
    Member_Account?: StringNullableFilter<"Maxicare"> | string | null
    Member_Type?: StringNullableFilter<"Maxicare"> | string | null
    ICD_10_Code?: StringNullableFilter<"Maxicare"> | string | null
    Diagnosis?: StringNullableFilter<"Maxicare"> | string | null
    Claim_Type?: StringNullableFilter<"Maxicare"> | string | null
    Admission_Date?: DateTimeNullableFilter<"Maxicare"> | Date | string | null
    Provider_Name?: StringNullableFilter<"Maxicare"> | string | null
    Provider_Type?: StringNullableFilter<"Maxicare"> | string | null
    Approved_Claim_Amount?: FloatNullableFilter<"Maxicare"> | number | null
    Relationship?: StringNullableFilter<"Maxicare"> | string | null
    createdAt?: DateTimeFilter<"Maxicare"> | Date | string
    updatedAt?: DateTimeFilter<"Maxicare"> | Date | string
  }

  export type CustomIllnessesUpsertWithWhereUniqueWithoutClientsInput = {
    where: CustomIllnessesWhereUniqueInput
    update: XOR<CustomIllnessesUpdateWithoutClientsInput, CustomIllnessesUncheckedUpdateWithoutClientsInput>
    create: XOR<CustomIllnessesCreateWithoutClientsInput, CustomIllnessesUncheckedCreateWithoutClientsInput>
  }

  export type CustomIllnessesUpdateWithWhereUniqueWithoutClientsInput = {
    where: CustomIllnessesWhereUniqueInput
    data: XOR<CustomIllnessesUpdateWithoutClientsInput, CustomIllnessesUncheckedUpdateWithoutClientsInput>
  }

  export type CustomIllnessesUpdateManyWithWhereWithoutClientsInput = {
    where: CustomIllnessesScalarWhereInput
    data: XOR<CustomIllnessesUpdateManyMutationInput, CustomIllnessesUncheckedUpdateManyWithoutClientsInput>
  }

  export type CustomIllnessesScalarWhereInput = {
    AND?: CustomIllnessesScalarWhereInput | CustomIllnessesScalarWhereInput[]
    OR?: CustomIllnessesScalarWhereInput[]
    NOT?: CustomIllnessesScalarWhereInput | CustomIllnessesScalarWhereInput[]
    id?: IntFilter<"CustomIllnesses"> | number
    clientId?: IntFilter<"CustomIllnesses"> | number
    py?: StringNullableFilter<"CustomIllnesses"> | string | null
    member_type?: StringNullableFilter<"CustomIllnesses"> | string | null
    icd_10_code?: StringNullableFilter<"CustomIllnesses"> | string | null
    diagnosis?: StringNullableFilter<"CustomIllnesses"> | string | null
    claim_amount?: IntNullableFilter<"CustomIllnesses"> | number | null
    percentage_to_total_amount?: DecimalNullableFilter<"CustomIllnesses"> | Decimal | DecimalJsLike | number | string | null
    claim_count?: IntNullableFilter<"CustomIllnesses"> | number | null
    percentage_to_total_count?: DecimalNullableFilter<"CustomIllnesses"> | Decimal | DecimalJsLike | number | string | null
    average_cost_per_claim?: IntNullableFilter<"CustomIllnesses"> | number | null
    createdAt?: DateTimeFilter<"CustomIllnesses"> | Date | string
    updatedAt?: DateTimeFilter<"CustomIllnesses"> | Date | string
  }

  export type ClientsCreateWithoutUploadsInput = {
    client_name: string
    description?: string | null
    insurer?: InsurersCreateNestedOneWithoutClientsInput
    Decks?: DecksCreateNestedManyWithoutClientsInput
    IntellicareMasterlist?: IntellicareMasterlistCreateNestedManyWithoutClientsInput
    MaxicareMasterlist?: MaxicareMasterlistCreateNestedManyWithoutClientsInput
    Intellicare?: IntellicareCreateNestedManyWithoutClientsInput
    Maxicare?: MaxicareCreateNestedManyWithoutClientsInput
    CustomIllnesses?: CustomIllnessesCreateNestedManyWithoutClientsInput
  }

  export type ClientsUncheckedCreateWithoutUploadsInput = {
    id?: number
    client_name: string
    description?: string | null
    insurer_id?: number | null
    Decks?: DecksUncheckedCreateNestedManyWithoutClientsInput
    IntellicareMasterlist?: IntellicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    MaxicareMasterlist?: MaxicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    Intellicare?: IntellicareUncheckedCreateNestedManyWithoutClientsInput
    Maxicare?: MaxicareUncheckedCreateNestedManyWithoutClientsInput
    CustomIllnesses?: CustomIllnessesUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientsCreateOrConnectWithoutUploadsInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutUploadsInput, ClientsUncheckedCreateWithoutUploadsInput>
  }

  export type InsurersCreateWithoutUploadsInput = {
    name: string
    Clients?: ClientsCreateNestedManyWithoutInsurerInput
  }

  export type InsurersUncheckedCreateWithoutUploadsInput = {
    id?: number
    name: string
    Clients?: ClientsUncheckedCreateNestedManyWithoutInsurerInput
  }

  export type InsurersCreateOrConnectWithoutUploadsInput = {
    where: InsurersWhereUniqueInput
    create: XOR<InsurersCreateWithoutUploadsInput, InsurersUncheckedCreateWithoutUploadsInput>
  }

  export type ClientsUpsertWithoutUploadsInput = {
    update: XOR<ClientsUpdateWithoutUploadsInput, ClientsUncheckedUpdateWithoutUploadsInput>
    create: XOR<ClientsCreateWithoutUploadsInput, ClientsUncheckedCreateWithoutUploadsInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutUploadsInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutUploadsInput, ClientsUncheckedUpdateWithoutUploadsInput>
  }

  export type ClientsUpdateWithoutUploadsInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer?: InsurersUpdateOneWithoutClientsNestedInput
    Decks?: DecksUpdateManyWithoutClientsNestedInput
    IntellicareMasterlist?: IntellicareMasterlistUpdateManyWithoutClientsNestedInput
    MaxicareMasterlist?: MaxicareMasterlistUpdateManyWithoutClientsNestedInput
    Intellicare?: IntellicareUpdateManyWithoutClientsNestedInput
    Maxicare?: MaxicareUpdateManyWithoutClientsNestedInput
    CustomIllnesses?: CustomIllnessesUpdateManyWithoutClientsNestedInput
  }

  export type ClientsUncheckedUpdateWithoutUploadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer_id?: NullableIntFieldUpdateOperationsInput | number | null
    Decks?: DecksUncheckedUpdateManyWithoutClientsNestedInput
    IntellicareMasterlist?: IntellicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    MaxicareMasterlist?: MaxicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    Intellicare?: IntellicareUncheckedUpdateManyWithoutClientsNestedInput
    Maxicare?: MaxicareUncheckedUpdateManyWithoutClientsNestedInput
    CustomIllnesses?: CustomIllnessesUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type InsurersUpsertWithoutUploadsInput = {
    update: XOR<InsurersUpdateWithoutUploadsInput, InsurersUncheckedUpdateWithoutUploadsInput>
    create: XOR<InsurersCreateWithoutUploadsInput, InsurersUncheckedCreateWithoutUploadsInput>
    where?: InsurersWhereInput
  }

  export type InsurersUpdateToOneWithWhereWithoutUploadsInput = {
    where?: InsurersWhereInput
    data: XOR<InsurersUpdateWithoutUploadsInput, InsurersUncheckedUpdateWithoutUploadsInput>
  }

  export type InsurersUpdateWithoutUploadsInput = {
    name?: StringFieldUpdateOperationsInput | string
    Clients?: ClientsUpdateManyWithoutInsurerNestedInput
  }

  export type InsurersUncheckedUpdateWithoutUploadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Clients?: ClientsUncheckedUpdateManyWithoutInsurerNestedInput
  }

  export type ClientsCreateWithoutDecksInput = {
    client_name: string
    description?: string | null
    insurer?: InsurersCreateNestedOneWithoutClientsInput
    Uploads?: UploadsCreateNestedManyWithoutClientsInput
    IntellicareMasterlist?: IntellicareMasterlistCreateNestedManyWithoutClientsInput
    MaxicareMasterlist?: MaxicareMasterlistCreateNestedManyWithoutClientsInput
    Intellicare?: IntellicareCreateNestedManyWithoutClientsInput
    Maxicare?: MaxicareCreateNestedManyWithoutClientsInput
    CustomIllnesses?: CustomIllnessesCreateNestedManyWithoutClientsInput
  }

  export type ClientsUncheckedCreateWithoutDecksInput = {
    id?: number
    client_name: string
    description?: string | null
    insurer_id?: number | null
    Uploads?: UploadsUncheckedCreateNestedManyWithoutClientsInput
    IntellicareMasterlist?: IntellicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    MaxicareMasterlist?: MaxicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    Intellicare?: IntellicareUncheckedCreateNestedManyWithoutClientsInput
    Maxicare?: MaxicareUncheckedCreateNestedManyWithoutClientsInput
    CustomIllnesses?: CustomIllnessesUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientsCreateOrConnectWithoutDecksInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutDecksInput, ClientsUncheckedCreateWithoutDecksInput>
  }

  export type ClientsUpsertWithoutDecksInput = {
    update: XOR<ClientsUpdateWithoutDecksInput, ClientsUncheckedUpdateWithoutDecksInput>
    create: XOR<ClientsCreateWithoutDecksInput, ClientsUncheckedCreateWithoutDecksInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutDecksInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutDecksInput, ClientsUncheckedUpdateWithoutDecksInput>
  }

  export type ClientsUpdateWithoutDecksInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer?: InsurersUpdateOneWithoutClientsNestedInput
    Uploads?: UploadsUpdateManyWithoutClientsNestedInput
    IntellicareMasterlist?: IntellicareMasterlistUpdateManyWithoutClientsNestedInput
    MaxicareMasterlist?: MaxicareMasterlistUpdateManyWithoutClientsNestedInput
    Intellicare?: IntellicareUpdateManyWithoutClientsNestedInput
    Maxicare?: MaxicareUpdateManyWithoutClientsNestedInput
    CustomIllnesses?: CustomIllnessesUpdateManyWithoutClientsNestedInput
  }

  export type ClientsUncheckedUpdateWithoutDecksInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer_id?: NullableIntFieldUpdateOperationsInput | number | null
    Uploads?: UploadsUncheckedUpdateManyWithoutClientsNestedInput
    IntellicareMasterlist?: IntellicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    MaxicareMasterlist?: MaxicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    Intellicare?: IntellicareUncheckedUpdateManyWithoutClientsNestedInput
    Maxicare?: MaxicareUncheckedUpdateManyWithoutClientsNestedInput
    CustomIllnesses?: CustomIllnessesUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type ClientsCreateWithoutIntellicareMasterlistInput = {
    client_name: string
    description?: string | null
    insurer?: InsurersCreateNestedOneWithoutClientsInput
    Uploads?: UploadsCreateNestedManyWithoutClientsInput
    Decks?: DecksCreateNestedManyWithoutClientsInput
    MaxicareMasterlist?: MaxicareMasterlistCreateNestedManyWithoutClientsInput
    Intellicare?: IntellicareCreateNestedManyWithoutClientsInput
    Maxicare?: MaxicareCreateNestedManyWithoutClientsInput
    CustomIllnesses?: CustomIllnessesCreateNestedManyWithoutClientsInput
  }

  export type ClientsUncheckedCreateWithoutIntellicareMasterlistInput = {
    id?: number
    client_name: string
    description?: string | null
    insurer_id?: number | null
    Uploads?: UploadsUncheckedCreateNestedManyWithoutClientsInput
    Decks?: DecksUncheckedCreateNestedManyWithoutClientsInput
    MaxicareMasterlist?: MaxicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    Intellicare?: IntellicareUncheckedCreateNestedManyWithoutClientsInput
    Maxicare?: MaxicareUncheckedCreateNestedManyWithoutClientsInput
    CustomIllnesses?: CustomIllnessesUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientsCreateOrConnectWithoutIntellicareMasterlistInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutIntellicareMasterlistInput, ClientsUncheckedCreateWithoutIntellicareMasterlistInput>
  }

  export type ClientsUpsertWithoutIntellicareMasterlistInput = {
    update: XOR<ClientsUpdateWithoutIntellicareMasterlistInput, ClientsUncheckedUpdateWithoutIntellicareMasterlistInput>
    create: XOR<ClientsCreateWithoutIntellicareMasterlistInput, ClientsUncheckedCreateWithoutIntellicareMasterlistInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutIntellicareMasterlistInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutIntellicareMasterlistInput, ClientsUncheckedUpdateWithoutIntellicareMasterlistInput>
  }

  export type ClientsUpdateWithoutIntellicareMasterlistInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer?: InsurersUpdateOneWithoutClientsNestedInput
    Uploads?: UploadsUpdateManyWithoutClientsNestedInput
    Decks?: DecksUpdateManyWithoutClientsNestedInput
    MaxicareMasterlist?: MaxicareMasterlistUpdateManyWithoutClientsNestedInput
    Intellicare?: IntellicareUpdateManyWithoutClientsNestedInput
    Maxicare?: MaxicareUpdateManyWithoutClientsNestedInput
    CustomIllnesses?: CustomIllnessesUpdateManyWithoutClientsNestedInput
  }

  export type ClientsUncheckedUpdateWithoutIntellicareMasterlistInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer_id?: NullableIntFieldUpdateOperationsInput | number | null
    Uploads?: UploadsUncheckedUpdateManyWithoutClientsNestedInput
    Decks?: DecksUncheckedUpdateManyWithoutClientsNestedInput
    MaxicareMasterlist?: MaxicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    Intellicare?: IntellicareUncheckedUpdateManyWithoutClientsNestedInput
    Maxicare?: MaxicareUncheckedUpdateManyWithoutClientsNestedInput
    CustomIllnesses?: CustomIllnessesUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type ClientsCreateWithoutMaxicareMasterlistInput = {
    client_name: string
    description?: string | null
    insurer?: InsurersCreateNestedOneWithoutClientsInput
    Uploads?: UploadsCreateNestedManyWithoutClientsInput
    Decks?: DecksCreateNestedManyWithoutClientsInput
    IntellicareMasterlist?: IntellicareMasterlistCreateNestedManyWithoutClientsInput
    Intellicare?: IntellicareCreateNestedManyWithoutClientsInput
    Maxicare?: MaxicareCreateNestedManyWithoutClientsInput
    CustomIllnesses?: CustomIllnessesCreateNestedManyWithoutClientsInput
  }

  export type ClientsUncheckedCreateWithoutMaxicareMasterlistInput = {
    id?: number
    client_name: string
    description?: string | null
    insurer_id?: number | null
    Uploads?: UploadsUncheckedCreateNestedManyWithoutClientsInput
    Decks?: DecksUncheckedCreateNestedManyWithoutClientsInput
    IntellicareMasterlist?: IntellicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    Intellicare?: IntellicareUncheckedCreateNestedManyWithoutClientsInput
    Maxicare?: MaxicareUncheckedCreateNestedManyWithoutClientsInput
    CustomIllnesses?: CustomIllnessesUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientsCreateOrConnectWithoutMaxicareMasterlistInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutMaxicareMasterlistInput, ClientsUncheckedCreateWithoutMaxicareMasterlistInput>
  }

  export type ClientsUpsertWithoutMaxicareMasterlistInput = {
    update: XOR<ClientsUpdateWithoutMaxicareMasterlistInput, ClientsUncheckedUpdateWithoutMaxicareMasterlistInput>
    create: XOR<ClientsCreateWithoutMaxicareMasterlistInput, ClientsUncheckedCreateWithoutMaxicareMasterlistInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutMaxicareMasterlistInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutMaxicareMasterlistInput, ClientsUncheckedUpdateWithoutMaxicareMasterlistInput>
  }

  export type ClientsUpdateWithoutMaxicareMasterlistInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer?: InsurersUpdateOneWithoutClientsNestedInput
    Uploads?: UploadsUpdateManyWithoutClientsNestedInput
    Decks?: DecksUpdateManyWithoutClientsNestedInput
    IntellicareMasterlist?: IntellicareMasterlistUpdateManyWithoutClientsNestedInput
    Intellicare?: IntellicareUpdateManyWithoutClientsNestedInput
    Maxicare?: MaxicareUpdateManyWithoutClientsNestedInput
    CustomIllnesses?: CustomIllnessesUpdateManyWithoutClientsNestedInput
  }

  export type ClientsUncheckedUpdateWithoutMaxicareMasterlistInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer_id?: NullableIntFieldUpdateOperationsInput | number | null
    Uploads?: UploadsUncheckedUpdateManyWithoutClientsNestedInput
    Decks?: DecksUncheckedUpdateManyWithoutClientsNestedInput
    IntellicareMasterlist?: IntellicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    Intellicare?: IntellicareUncheckedUpdateManyWithoutClientsNestedInput
    Maxicare?: MaxicareUncheckedUpdateManyWithoutClientsNestedInput
    CustomIllnesses?: CustomIllnessesUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type ClientsCreateWithoutIntellicareInput = {
    client_name: string
    description?: string | null
    insurer?: InsurersCreateNestedOneWithoutClientsInput
    Uploads?: UploadsCreateNestedManyWithoutClientsInput
    Decks?: DecksCreateNestedManyWithoutClientsInput
    IntellicareMasterlist?: IntellicareMasterlistCreateNestedManyWithoutClientsInput
    MaxicareMasterlist?: MaxicareMasterlistCreateNestedManyWithoutClientsInput
    Maxicare?: MaxicareCreateNestedManyWithoutClientsInput
    CustomIllnesses?: CustomIllnessesCreateNestedManyWithoutClientsInput
  }

  export type ClientsUncheckedCreateWithoutIntellicareInput = {
    id?: number
    client_name: string
    description?: string | null
    insurer_id?: number | null
    Uploads?: UploadsUncheckedCreateNestedManyWithoutClientsInput
    Decks?: DecksUncheckedCreateNestedManyWithoutClientsInput
    IntellicareMasterlist?: IntellicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    MaxicareMasterlist?: MaxicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    Maxicare?: MaxicareUncheckedCreateNestedManyWithoutClientsInput
    CustomIllnesses?: CustomIllnessesUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientsCreateOrConnectWithoutIntellicareInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutIntellicareInput, ClientsUncheckedCreateWithoutIntellicareInput>
  }

  export type ClientsUpsertWithoutIntellicareInput = {
    update: XOR<ClientsUpdateWithoutIntellicareInput, ClientsUncheckedUpdateWithoutIntellicareInput>
    create: XOR<ClientsCreateWithoutIntellicareInput, ClientsUncheckedCreateWithoutIntellicareInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutIntellicareInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutIntellicareInput, ClientsUncheckedUpdateWithoutIntellicareInput>
  }

  export type ClientsUpdateWithoutIntellicareInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer?: InsurersUpdateOneWithoutClientsNestedInput
    Uploads?: UploadsUpdateManyWithoutClientsNestedInput
    Decks?: DecksUpdateManyWithoutClientsNestedInput
    IntellicareMasterlist?: IntellicareMasterlistUpdateManyWithoutClientsNestedInput
    MaxicareMasterlist?: MaxicareMasterlistUpdateManyWithoutClientsNestedInput
    Maxicare?: MaxicareUpdateManyWithoutClientsNestedInput
    CustomIllnesses?: CustomIllnessesUpdateManyWithoutClientsNestedInput
  }

  export type ClientsUncheckedUpdateWithoutIntellicareInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer_id?: NullableIntFieldUpdateOperationsInput | number | null
    Uploads?: UploadsUncheckedUpdateManyWithoutClientsNestedInput
    Decks?: DecksUncheckedUpdateManyWithoutClientsNestedInput
    IntellicareMasterlist?: IntellicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    MaxicareMasterlist?: MaxicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    Maxicare?: MaxicareUncheckedUpdateManyWithoutClientsNestedInput
    CustomIllnesses?: CustomIllnessesUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type ClientsCreateWithoutMaxicareInput = {
    client_name: string
    description?: string | null
    insurer?: InsurersCreateNestedOneWithoutClientsInput
    Uploads?: UploadsCreateNestedManyWithoutClientsInput
    Decks?: DecksCreateNestedManyWithoutClientsInput
    IntellicareMasterlist?: IntellicareMasterlistCreateNestedManyWithoutClientsInput
    MaxicareMasterlist?: MaxicareMasterlistCreateNestedManyWithoutClientsInput
    Intellicare?: IntellicareCreateNestedManyWithoutClientsInput
    CustomIllnesses?: CustomIllnessesCreateNestedManyWithoutClientsInput
  }

  export type ClientsUncheckedCreateWithoutMaxicareInput = {
    id?: number
    client_name: string
    description?: string | null
    insurer_id?: number | null
    Uploads?: UploadsUncheckedCreateNestedManyWithoutClientsInput
    Decks?: DecksUncheckedCreateNestedManyWithoutClientsInput
    IntellicareMasterlist?: IntellicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    MaxicareMasterlist?: MaxicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    Intellicare?: IntellicareUncheckedCreateNestedManyWithoutClientsInput
    CustomIllnesses?: CustomIllnessesUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientsCreateOrConnectWithoutMaxicareInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutMaxicareInput, ClientsUncheckedCreateWithoutMaxicareInput>
  }

  export type ClientsUpsertWithoutMaxicareInput = {
    update: XOR<ClientsUpdateWithoutMaxicareInput, ClientsUncheckedUpdateWithoutMaxicareInput>
    create: XOR<ClientsCreateWithoutMaxicareInput, ClientsUncheckedCreateWithoutMaxicareInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutMaxicareInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutMaxicareInput, ClientsUncheckedUpdateWithoutMaxicareInput>
  }

  export type ClientsUpdateWithoutMaxicareInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer?: InsurersUpdateOneWithoutClientsNestedInput
    Uploads?: UploadsUpdateManyWithoutClientsNestedInput
    Decks?: DecksUpdateManyWithoutClientsNestedInput
    IntellicareMasterlist?: IntellicareMasterlistUpdateManyWithoutClientsNestedInput
    MaxicareMasterlist?: MaxicareMasterlistUpdateManyWithoutClientsNestedInput
    Intellicare?: IntellicareUpdateManyWithoutClientsNestedInput
    CustomIllnesses?: CustomIllnessesUpdateManyWithoutClientsNestedInput
  }

  export type ClientsUncheckedUpdateWithoutMaxicareInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer_id?: NullableIntFieldUpdateOperationsInput | number | null
    Uploads?: UploadsUncheckedUpdateManyWithoutClientsNestedInput
    Decks?: DecksUncheckedUpdateManyWithoutClientsNestedInput
    IntellicareMasterlist?: IntellicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    MaxicareMasterlist?: MaxicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    Intellicare?: IntellicareUncheckedUpdateManyWithoutClientsNestedInput
    CustomIllnesses?: CustomIllnessesUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type ClientsCreateWithoutCustomIllnessesInput = {
    client_name: string
    description?: string | null
    insurer?: InsurersCreateNestedOneWithoutClientsInput
    Uploads?: UploadsCreateNestedManyWithoutClientsInput
    Decks?: DecksCreateNestedManyWithoutClientsInput
    IntellicareMasterlist?: IntellicareMasterlistCreateNestedManyWithoutClientsInput
    MaxicareMasterlist?: MaxicareMasterlistCreateNestedManyWithoutClientsInput
    Intellicare?: IntellicareCreateNestedManyWithoutClientsInput
    Maxicare?: MaxicareCreateNestedManyWithoutClientsInput
  }

  export type ClientsUncheckedCreateWithoutCustomIllnessesInput = {
    id?: number
    client_name: string
    description?: string | null
    insurer_id?: number | null
    Uploads?: UploadsUncheckedCreateNestedManyWithoutClientsInput
    Decks?: DecksUncheckedCreateNestedManyWithoutClientsInput
    IntellicareMasterlist?: IntellicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    MaxicareMasterlist?: MaxicareMasterlistUncheckedCreateNestedManyWithoutClientsInput
    Intellicare?: IntellicareUncheckedCreateNestedManyWithoutClientsInput
    Maxicare?: MaxicareUncheckedCreateNestedManyWithoutClientsInput
  }

  export type ClientsCreateOrConnectWithoutCustomIllnessesInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutCustomIllnessesInput, ClientsUncheckedCreateWithoutCustomIllnessesInput>
  }

  export type ClientsUpsertWithoutCustomIllnessesInput = {
    update: XOR<ClientsUpdateWithoutCustomIllnessesInput, ClientsUncheckedUpdateWithoutCustomIllnessesInput>
    create: XOR<ClientsCreateWithoutCustomIllnessesInput, ClientsUncheckedCreateWithoutCustomIllnessesInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutCustomIllnessesInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutCustomIllnessesInput, ClientsUncheckedUpdateWithoutCustomIllnessesInput>
  }

  export type ClientsUpdateWithoutCustomIllnessesInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer?: InsurersUpdateOneWithoutClientsNestedInput
    Uploads?: UploadsUpdateManyWithoutClientsNestedInput
    Decks?: DecksUpdateManyWithoutClientsNestedInput
    IntellicareMasterlist?: IntellicareMasterlistUpdateManyWithoutClientsNestedInput
    MaxicareMasterlist?: MaxicareMasterlistUpdateManyWithoutClientsNestedInput
    Intellicare?: IntellicareUpdateManyWithoutClientsNestedInput
    Maxicare?: MaxicareUpdateManyWithoutClientsNestedInput
  }

  export type ClientsUncheckedUpdateWithoutCustomIllnessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    insurer_id?: NullableIntFieldUpdateOperationsInput | number | null
    Uploads?: UploadsUncheckedUpdateManyWithoutClientsNestedInput
    Decks?: DecksUncheckedUpdateManyWithoutClientsNestedInput
    IntellicareMasterlist?: IntellicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    MaxicareMasterlist?: MaxicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    Intellicare?: IntellicareUncheckedUpdateManyWithoutClientsNestedInput
    Maxicare?: MaxicareUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type ClientsCreateManyInsurerInput = {
    id?: number
    client_name: string
    description?: string | null
  }

  export type UploadsCreateManyInsurersInput = {
    id?: number
    clientId: number
    year: string
    months?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientsUpdateWithoutInsurerInput = {
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Uploads?: UploadsUpdateManyWithoutClientsNestedInput
    Decks?: DecksUpdateManyWithoutClientsNestedInput
    IntellicareMasterlist?: IntellicareMasterlistUpdateManyWithoutClientsNestedInput
    MaxicareMasterlist?: MaxicareMasterlistUpdateManyWithoutClientsNestedInput
    Intellicare?: IntellicareUpdateManyWithoutClientsNestedInput
    Maxicare?: MaxicareUpdateManyWithoutClientsNestedInput
    CustomIllnesses?: CustomIllnessesUpdateManyWithoutClientsNestedInput
  }

  export type ClientsUncheckedUpdateWithoutInsurerInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Uploads?: UploadsUncheckedUpdateManyWithoutClientsNestedInput
    Decks?: DecksUncheckedUpdateManyWithoutClientsNestedInput
    IntellicareMasterlist?: IntellicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    MaxicareMasterlist?: MaxicareMasterlistUncheckedUpdateManyWithoutClientsNestedInput
    Intellicare?: IntellicareUncheckedUpdateManyWithoutClientsNestedInput
    Maxicare?: MaxicareUncheckedUpdateManyWithoutClientsNestedInput
    CustomIllnesses?: CustomIllnessesUncheckedUpdateManyWithoutClientsNestedInput
  }

  export type ClientsUncheckedUpdateManyWithoutInsurerInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UploadsUpdateWithoutInsurersInput = {
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Clients?: ClientsUpdateOneRequiredWithoutUploadsNestedInput
  }

  export type UploadsUncheckedUpdateWithoutInsurersInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadsUncheckedUpdateManyWithoutInsurersInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadsCreateManyClientsInput = {
    id?: number
    insurerId: number
    year: string
    months?: string | null
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DecksCreateManyClientsInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntellicareMasterlistCreateManyClientsInput = {
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

  export type MaxicareMasterlistCreateManyClientsInput = {
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

  export type IntellicareCreateManyClientsInput = {
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

  export type MaxicareCreateManyClientsInput = {
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

  export type CustomIllnessesCreateManyClientsInput = {
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

  export type UploadsUpdateWithoutClientsInput = {
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Insurers?: InsurersUpdateOneRequiredWithoutUploadsNestedInput
  }

  export type UploadsUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    insurerId?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadsUncheckedUpdateManyWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    insurerId?: IntFieldUpdateOperationsInput | number
    year?: StringFieldUpdateOperationsInput | string
    months?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecksUpdateWithoutClientsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecksUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecksUncheckedUpdateManyWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntellicareMasterlistUpdateWithoutClientsInput = {
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

  export type IntellicareMasterlistUncheckedUpdateWithoutClientsInput = {
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

  export type IntellicareMasterlistUncheckedUpdateManyWithoutClientsInput = {
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

  export type MaxicareMasterlistUpdateWithoutClientsInput = {
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

  export type MaxicareMasterlistUncheckedUpdateWithoutClientsInput = {
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

  export type MaxicareMasterlistUncheckedUpdateManyWithoutClientsInput = {
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

  export type IntellicareUpdateWithoutClientsInput = {
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

  export type IntellicareUncheckedUpdateWithoutClientsInput = {
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

  export type IntellicareUncheckedUpdateManyWithoutClientsInput = {
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

  export type MaxicareUpdateWithoutClientsInput = {
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

  export type MaxicareUncheckedUpdateWithoutClientsInput = {
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

  export type MaxicareUncheckedUpdateManyWithoutClientsInput = {
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

  export type CustomIllnessesUpdateWithoutClientsInput = {
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

  export type CustomIllnessesUncheckedUpdateWithoutClientsInput = {
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

  export type CustomIllnessesUncheckedUpdateManyWithoutClientsInput = {
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