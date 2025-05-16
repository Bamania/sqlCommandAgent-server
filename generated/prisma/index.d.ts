
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
 * Model CustInfo
 * 
 */
export type CustInfo = $Result.DefaultSelection<Prisma.$CustInfoPayload>
/**
 * Model Prd
 * 
 */
export type Prd = $Result.DefaultSelection<Prisma.$PrdPayload>
/**
 * Model TrHd
 * 
 */
export type TrHd = $Result.DefaultSelection<Prisma.$TrHdPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CustInfos
 * const custInfos = await prisma.custInfo.findMany()
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
   * // Fetch zero or more CustInfos
   * const custInfos = await prisma.custInfo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.custInfo`: Exposes CRUD operations for the **CustInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustInfos
    * const custInfos = await prisma.custInfo.findMany()
    * ```
    */
  get custInfo(): Prisma.CustInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prd`: Exposes CRUD operations for the **Prd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prds
    * const prds = await prisma.prd.findMany()
    * ```
    */
  get prd(): Prisma.PrdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trHd`: Exposes CRUD operations for the **TrHd** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrHds
    * const trHds = await prisma.trHd.findMany()
    * ```
    */
  get trHd(): Prisma.TrHdDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    CustInfo: 'CustInfo',
    Prd: 'Prd',
    TrHd: 'TrHd'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "custInfo" | "prd" | "trHd"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CustInfo: {
        payload: Prisma.$CustInfoPayload<ExtArgs>
        fields: Prisma.CustInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustInfoPayload>
          }
          findFirst: {
            args: Prisma.CustInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustInfoPayload>
          }
          findMany: {
            args: Prisma.CustInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustInfoPayload>[]
          }
          create: {
            args: Prisma.CustInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustInfoPayload>
          }
          createMany: {
            args: Prisma.CustInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustInfoPayload>[]
          }
          delete: {
            args: Prisma.CustInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustInfoPayload>
          }
          update: {
            args: Prisma.CustInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustInfoPayload>
          }
          deleteMany: {
            args: Prisma.CustInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustInfoPayload>[]
          }
          upsert: {
            args: Prisma.CustInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustInfoPayload>
          }
          aggregate: {
            args: Prisma.CustInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustInfo>
          }
          groupBy: {
            args: Prisma.CustInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustInfoCountArgs<ExtArgs>
            result: $Utils.Optional<CustInfoCountAggregateOutputType> | number
          }
        }
      }
      Prd: {
        payload: Prisma.$PrdPayload<ExtArgs>
        fields: Prisma.PrdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrdPayload>
          }
          findFirst: {
            args: Prisma.PrdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrdPayload>
          }
          findMany: {
            args: Prisma.PrdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrdPayload>[]
          }
          create: {
            args: Prisma.PrdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrdPayload>
          }
          createMany: {
            args: Prisma.PrdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrdPayload>[]
          }
          delete: {
            args: Prisma.PrdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrdPayload>
          }
          update: {
            args: Prisma.PrdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrdPayload>
          }
          deleteMany: {
            args: Prisma.PrdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrdPayload>[]
          }
          upsert: {
            args: Prisma.PrdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrdPayload>
          }
          aggregate: {
            args: Prisma.PrdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrd>
          }
          groupBy: {
            args: Prisma.PrdGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrdGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrdCountArgs<ExtArgs>
            result: $Utils.Optional<PrdCountAggregateOutputType> | number
          }
        }
      }
      TrHd: {
        payload: Prisma.$TrHdPayload<ExtArgs>
        fields: Prisma.TrHdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrHdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrHdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrHdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrHdPayload>
          }
          findFirst: {
            args: Prisma.TrHdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrHdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrHdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrHdPayload>
          }
          findMany: {
            args: Prisma.TrHdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrHdPayload>[]
          }
          create: {
            args: Prisma.TrHdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrHdPayload>
          }
          createMany: {
            args: Prisma.TrHdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrHdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrHdPayload>[]
          }
          delete: {
            args: Prisma.TrHdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrHdPayload>
          }
          update: {
            args: Prisma.TrHdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrHdPayload>
          }
          deleteMany: {
            args: Prisma.TrHdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrHdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrHdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrHdPayload>[]
          }
          upsert: {
            args: Prisma.TrHdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrHdPayload>
          }
          aggregate: {
            args: Prisma.TrHdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrHd>
          }
          groupBy: {
            args: Prisma.TrHdGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrHdGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrHdCountArgs<ExtArgs>
            result: $Utils.Optional<TrHdCountAggregateOutputType> | number
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
    custInfo?: CustInfoOmit
    prd?: PrdOmit
    trHd?: TrHdOmit
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
   * Count Type CustInfoCountOutputType
   */

  export type CustInfoCountOutputType = {
    trHd: number
  }

  export type CustInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trHd?: boolean | CustInfoCountOutputTypeCountTrHdArgs
  }

  // Custom InputTypes
  /**
   * CustInfoCountOutputType without action
   */
  export type CustInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustInfoCountOutputType
     */
    select?: CustInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustInfoCountOutputType without action
   */
  export type CustInfoCountOutputTypeCountTrHdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrHdWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CustInfo
   */

  export type AggregateCustInfo = {
    _count: CustInfoCountAggregateOutputType | null
    _avg: CustInfoAvgAggregateOutputType | null
    _sum: CustInfoSumAggregateOutputType | null
    _min: CustInfoMinAggregateOutputType | null
    _max: CustInfoMaxAggregateOutputType | null
  }

  export type CustInfoAvgAggregateOutputType = {
    cid: number | null
  }

  export type CustInfoSumAggregateOutputType = {
    cid: number | null
  }

  export type CustInfoMinAggregateOutputType = {
    cid: number | null
    nm: string | null
    em: string | null
    rgn: string | null
    sgmt: string | null
    jn_dt: Date | null
    act: boolean | null
  }

  export type CustInfoMaxAggregateOutputType = {
    cid: number | null
    nm: string | null
    em: string | null
    rgn: string | null
    sgmt: string | null
    jn_dt: Date | null
    act: boolean | null
  }

  export type CustInfoCountAggregateOutputType = {
    cid: number
    nm: number
    em: number
    rgn: number
    sgmt: number
    jn_dt: number
    act: number
    _all: number
  }


  export type CustInfoAvgAggregateInputType = {
    cid?: true
  }

  export type CustInfoSumAggregateInputType = {
    cid?: true
  }

  export type CustInfoMinAggregateInputType = {
    cid?: true
    nm?: true
    em?: true
    rgn?: true
    sgmt?: true
    jn_dt?: true
    act?: true
  }

  export type CustInfoMaxAggregateInputType = {
    cid?: true
    nm?: true
    em?: true
    rgn?: true
    sgmt?: true
    jn_dt?: true
    act?: true
  }

  export type CustInfoCountAggregateInputType = {
    cid?: true
    nm?: true
    em?: true
    rgn?: true
    sgmt?: true
    jn_dt?: true
    act?: true
    _all?: true
  }

  export type CustInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustInfo to aggregate.
     */
    where?: CustInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustInfos to fetch.
     */
    orderBy?: CustInfoOrderByWithRelationInput | CustInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustInfos
    **/
    _count?: true | CustInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustInfoMaxAggregateInputType
  }

  export type GetCustInfoAggregateType<T extends CustInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateCustInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustInfo[P]>
      : GetScalarType<T[P], AggregateCustInfo[P]>
  }




  export type CustInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustInfoWhereInput
    orderBy?: CustInfoOrderByWithAggregationInput | CustInfoOrderByWithAggregationInput[]
    by: CustInfoScalarFieldEnum[] | CustInfoScalarFieldEnum
    having?: CustInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustInfoCountAggregateInputType | true
    _avg?: CustInfoAvgAggregateInputType
    _sum?: CustInfoSumAggregateInputType
    _min?: CustInfoMinAggregateInputType
    _max?: CustInfoMaxAggregateInputType
  }

  export type CustInfoGroupByOutputType = {
    cid: number
    nm: string
    em: string
    rgn: string | null
    sgmt: string
    jn_dt: Date
    act: boolean
    _count: CustInfoCountAggregateOutputType | null
    _avg: CustInfoAvgAggregateOutputType | null
    _sum: CustInfoSumAggregateOutputType | null
    _min: CustInfoMinAggregateOutputType | null
    _max: CustInfoMaxAggregateOutputType | null
  }

  type GetCustInfoGroupByPayload<T extends CustInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustInfoGroupByOutputType[P]>
            : GetScalarType<T[P], CustInfoGroupByOutputType[P]>
        }
      >
    >


  export type CustInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cid?: boolean
    nm?: boolean
    em?: boolean
    rgn?: boolean
    sgmt?: boolean
    jn_dt?: boolean
    act?: boolean
    trHd?: boolean | CustInfo$trHdArgs<ExtArgs>
    _count?: boolean | CustInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["custInfo"]>

  export type CustInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cid?: boolean
    nm?: boolean
    em?: boolean
    rgn?: boolean
    sgmt?: boolean
    jn_dt?: boolean
    act?: boolean
  }, ExtArgs["result"]["custInfo"]>

  export type CustInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cid?: boolean
    nm?: boolean
    em?: boolean
    rgn?: boolean
    sgmt?: boolean
    jn_dt?: boolean
    act?: boolean
  }, ExtArgs["result"]["custInfo"]>

  export type CustInfoSelectScalar = {
    cid?: boolean
    nm?: boolean
    em?: boolean
    rgn?: boolean
    sgmt?: boolean
    jn_dt?: boolean
    act?: boolean
  }

  export type CustInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cid" | "nm" | "em" | "rgn" | "sgmt" | "jn_dt" | "act", ExtArgs["result"]["custInfo"]>
  export type CustInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trHd?: boolean | CustInfo$trHdArgs<ExtArgs>
    _count?: boolean | CustInfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustInfo"
    objects: {
      trHd: Prisma.$TrHdPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cid: number
      nm: string
      em: string
      rgn: string | null
      sgmt: string
      jn_dt: Date
      act: boolean
    }, ExtArgs["result"]["custInfo"]>
    composites: {}
  }

  type CustInfoGetPayload<S extends boolean | null | undefined | CustInfoDefaultArgs> = $Result.GetResult<Prisma.$CustInfoPayload, S>

  type CustInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustInfoCountAggregateInputType | true
    }

  export interface CustInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustInfo'], meta: { name: 'CustInfo' } }
    /**
     * Find zero or one CustInfo that matches the filter.
     * @param {CustInfoFindUniqueArgs} args - Arguments to find a CustInfo
     * @example
     * // Get one CustInfo
     * const custInfo = await prisma.custInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustInfoFindUniqueArgs>(args: SelectSubset<T, CustInfoFindUniqueArgs<ExtArgs>>): Prisma__CustInfoClient<$Result.GetResult<Prisma.$CustInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustInfoFindUniqueOrThrowArgs} args - Arguments to find a CustInfo
     * @example
     * // Get one CustInfo
     * const custInfo = await prisma.custInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, CustInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustInfoClient<$Result.GetResult<Prisma.$CustInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustInfoFindFirstArgs} args - Arguments to find a CustInfo
     * @example
     * // Get one CustInfo
     * const custInfo = await prisma.custInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustInfoFindFirstArgs>(args?: SelectSubset<T, CustInfoFindFirstArgs<ExtArgs>>): Prisma__CustInfoClient<$Result.GetResult<Prisma.$CustInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustInfoFindFirstOrThrowArgs} args - Arguments to find a CustInfo
     * @example
     * // Get one CustInfo
     * const custInfo = await prisma.custInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, CustInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustInfoClient<$Result.GetResult<Prisma.$CustInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustInfos
     * const custInfos = await prisma.custInfo.findMany()
     * 
     * // Get first 10 CustInfos
     * const custInfos = await prisma.custInfo.findMany({ take: 10 })
     * 
     * // Only select the `cid`
     * const custInfoWithCidOnly = await prisma.custInfo.findMany({ select: { cid: true } })
     * 
     */
    findMany<T extends CustInfoFindManyArgs>(args?: SelectSubset<T, CustInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustInfo.
     * @param {CustInfoCreateArgs} args - Arguments to create a CustInfo.
     * @example
     * // Create one CustInfo
     * const CustInfo = await prisma.custInfo.create({
     *   data: {
     *     // ... data to create a CustInfo
     *   }
     * })
     * 
     */
    create<T extends CustInfoCreateArgs>(args: SelectSubset<T, CustInfoCreateArgs<ExtArgs>>): Prisma__CustInfoClient<$Result.GetResult<Prisma.$CustInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustInfos.
     * @param {CustInfoCreateManyArgs} args - Arguments to create many CustInfos.
     * @example
     * // Create many CustInfos
     * const custInfo = await prisma.custInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustInfoCreateManyArgs>(args?: SelectSubset<T, CustInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustInfos and returns the data saved in the database.
     * @param {CustInfoCreateManyAndReturnArgs} args - Arguments to create many CustInfos.
     * @example
     * // Create many CustInfos
     * const custInfo = await prisma.custInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustInfos and only return the `cid`
     * const custInfoWithCidOnly = await prisma.custInfo.createManyAndReturn({
     *   select: { cid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, CustInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustInfo.
     * @param {CustInfoDeleteArgs} args - Arguments to delete one CustInfo.
     * @example
     * // Delete one CustInfo
     * const CustInfo = await prisma.custInfo.delete({
     *   where: {
     *     // ... filter to delete one CustInfo
     *   }
     * })
     * 
     */
    delete<T extends CustInfoDeleteArgs>(args: SelectSubset<T, CustInfoDeleteArgs<ExtArgs>>): Prisma__CustInfoClient<$Result.GetResult<Prisma.$CustInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustInfo.
     * @param {CustInfoUpdateArgs} args - Arguments to update one CustInfo.
     * @example
     * // Update one CustInfo
     * const custInfo = await prisma.custInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustInfoUpdateArgs>(args: SelectSubset<T, CustInfoUpdateArgs<ExtArgs>>): Prisma__CustInfoClient<$Result.GetResult<Prisma.$CustInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustInfos.
     * @param {CustInfoDeleteManyArgs} args - Arguments to filter CustInfos to delete.
     * @example
     * // Delete a few CustInfos
     * const { count } = await prisma.custInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustInfoDeleteManyArgs>(args?: SelectSubset<T, CustInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustInfos
     * const custInfo = await prisma.custInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustInfoUpdateManyArgs>(args: SelectSubset<T, CustInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustInfos and returns the data updated in the database.
     * @param {CustInfoUpdateManyAndReturnArgs} args - Arguments to update many CustInfos.
     * @example
     * // Update many CustInfos
     * const custInfo = await prisma.custInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustInfos and only return the `cid`
     * const custInfoWithCidOnly = await prisma.custInfo.updateManyAndReturn({
     *   select: { cid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, CustInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustInfo.
     * @param {CustInfoUpsertArgs} args - Arguments to update or create a CustInfo.
     * @example
     * // Update or create a CustInfo
     * const custInfo = await prisma.custInfo.upsert({
     *   create: {
     *     // ... data to create a CustInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustInfo we want to update
     *   }
     * })
     */
    upsert<T extends CustInfoUpsertArgs>(args: SelectSubset<T, CustInfoUpsertArgs<ExtArgs>>): Prisma__CustInfoClient<$Result.GetResult<Prisma.$CustInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustInfoCountArgs} args - Arguments to filter CustInfos to count.
     * @example
     * // Count the number of CustInfos
     * const count = await prisma.custInfo.count({
     *   where: {
     *     // ... the filter for the CustInfos we want to count
     *   }
     * })
    **/
    count<T extends CustInfoCountArgs>(
      args?: Subset<T, CustInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustInfoAggregateArgs>(args: Subset<T, CustInfoAggregateArgs>): Prisma.PrismaPromise<GetCustInfoAggregateType<T>>

    /**
     * Group by CustInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustInfoGroupByArgs} args - Group by arguments.
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
      T extends CustInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustInfoGroupByArgs['orderBy'] }
        : { orderBy?: CustInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustInfo model
   */
  readonly fields: CustInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trHd<T extends CustInfo$trHdArgs<ExtArgs> = {}>(args?: Subset<T, CustInfo$trHdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrHdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CustInfo model
   */
  interface CustInfoFieldRefs {
    readonly cid: FieldRef<"CustInfo", 'Int'>
    readonly nm: FieldRef<"CustInfo", 'String'>
    readonly em: FieldRef<"CustInfo", 'String'>
    readonly rgn: FieldRef<"CustInfo", 'String'>
    readonly sgmt: FieldRef<"CustInfo", 'String'>
    readonly jn_dt: FieldRef<"CustInfo", 'DateTime'>
    readonly act: FieldRef<"CustInfo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CustInfo findUnique
   */
  export type CustInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustInfo
     */
    select?: CustInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustInfo
     */
    omit?: CustInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustInfoInclude<ExtArgs> | null
    /**
     * Filter, which CustInfo to fetch.
     */
    where: CustInfoWhereUniqueInput
  }

  /**
   * CustInfo findUniqueOrThrow
   */
  export type CustInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustInfo
     */
    select?: CustInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustInfo
     */
    omit?: CustInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustInfoInclude<ExtArgs> | null
    /**
     * Filter, which CustInfo to fetch.
     */
    where: CustInfoWhereUniqueInput
  }

  /**
   * CustInfo findFirst
   */
  export type CustInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustInfo
     */
    select?: CustInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustInfo
     */
    omit?: CustInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustInfoInclude<ExtArgs> | null
    /**
     * Filter, which CustInfo to fetch.
     */
    where?: CustInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustInfos to fetch.
     */
    orderBy?: CustInfoOrderByWithRelationInput | CustInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustInfos.
     */
    cursor?: CustInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustInfos.
     */
    distinct?: CustInfoScalarFieldEnum | CustInfoScalarFieldEnum[]
  }

  /**
   * CustInfo findFirstOrThrow
   */
  export type CustInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustInfo
     */
    select?: CustInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustInfo
     */
    omit?: CustInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustInfoInclude<ExtArgs> | null
    /**
     * Filter, which CustInfo to fetch.
     */
    where?: CustInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustInfos to fetch.
     */
    orderBy?: CustInfoOrderByWithRelationInput | CustInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustInfos.
     */
    cursor?: CustInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustInfos.
     */
    distinct?: CustInfoScalarFieldEnum | CustInfoScalarFieldEnum[]
  }

  /**
   * CustInfo findMany
   */
  export type CustInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustInfo
     */
    select?: CustInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustInfo
     */
    omit?: CustInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustInfoInclude<ExtArgs> | null
    /**
     * Filter, which CustInfos to fetch.
     */
    where?: CustInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustInfos to fetch.
     */
    orderBy?: CustInfoOrderByWithRelationInput | CustInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustInfos.
     */
    cursor?: CustInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustInfos.
     */
    skip?: number
    distinct?: CustInfoScalarFieldEnum | CustInfoScalarFieldEnum[]
  }

  /**
   * CustInfo create
   */
  export type CustInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustInfo
     */
    select?: CustInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustInfo
     */
    omit?: CustInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a CustInfo.
     */
    data: XOR<CustInfoCreateInput, CustInfoUncheckedCreateInput>
  }

  /**
   * CustInfo createMany
   */
  export type CustInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustInfos.
     */
    data: CustInfoCreateManyInput | CustInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustInfo createManyAndReturn
   */
  export type CustInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustInfo
     */
    select?: CustInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustInfo
     */
    omit?: CustInfoOmit<ExtArgs> | null
    /**
     * The data used to create many CustInfos.
     */
    data: CustInfoCreateManyInput | CustInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustInfo update
   */
  export type CustInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustInfo
     */
    select?: CustInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustInfo
     */
    omit?: CustInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a CustInfo.
     */
    data: XOR<CustInfoUpdateInput, CustInfoUncheckedUpdateInput>
    /**
     * Choose, which CustInfo to update.
     */
    where: CustInfoWhereUniqueInput
  }

  /**
   * CustInfo updateMany
   */
  export type CustInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustInfos.
     */
    data: XOR<CustInfoUpdateManyMutationInput, CustInfoUncheckedUpdateManyInput>
    /**
     * Filter which CustInfos to update
     */
    where?: CustInfoWhereInput
    /**
     * Limit how many CustInfos to update.
     */
    limit?: number
  }

  /**
   * CustInfo updateManyAndReturn
   */
  export type CustInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustInfo
     */
    select?: CustInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustInfo
     */
    omit?: CustInfoOmit<ExtArgs> | null
    /**
     * The data used to update CustInfos.
     */
    data: XOR<CustInfoUpdateManyMutationInput, CustInfoUncheckedUpdateManyInput>
    /**
     * Filter which CustInfos to update
     */
    where?: CustInfoWhereInput
    /**
     * Limit how many CustInfos to update.
     */
    limit?: number
  }

  /**
   * CustInfo upsert
   */
  export type CustInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustInfo
     */
    select?: CustInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustInfo
     */
    omit?: CustInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the CustInfo to update in case it exists.
     */
    where: CustInfoWhereUniqueInput
    /**
     * In case the CustInfo found by the `where` argument doesn't exist, create a new CustInfo with this data.
     */
    create: XOR<CustInfoCreateInput, CustInfoUncheckedCreateInput>
    /**
     * In case the CustInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustInfoUpdateInput, CustInfoUncheckedUpdateInput>
  }

  /**
   * CustInfo delete
   */
  export type CustInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustInfo
     */
    select?: CustInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustInfo
     */
    omit?: CustInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustInfoInclude<ExtArgs> | null
    /**
     * Filter which CustInfo to delete.
     */
    where: CustInfoWhereUniqueInput
  }

  /**
   * CustInfo deleteMany
   */
  export type CustInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustInfos to delete
     */
    where?: CustInfoWhereInput
    /**
     * Limit how many CustInfos to delete.
     */
    limit?: number
  }

  /**
   * CustInfo.trHd
   */
  export type CustInfo$trHdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrHd
     */
    select?: TrHdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrHd
     */
    omit?: TrHdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrHdInclude<ExtArgs> | null
    where?: TrHdWhereInput
    orderBy?: TrHdOrderByWithRelationInput | TrHdOrderByWithRelationInput[]
    cursor?: TrHdWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrHdScalarFieldEnum | TrHdScalarFieldEnum[]
  }

  /**
   * CustInfo without action
   */
  export type CustInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustInfo
     */
    select?: CustInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustInfo
     */
    omit?: CustInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustInfoInclude<ExtArgs> | null
  }


  /**
   * Model Prd
   */

  export type AggregatePrd = {
    _count: PrdCountAggregateOutputType | null
    _avg: PrdAvgAggregateOutputType | null
    _sum: PrdSumAggregateOutputType | null
    _min: PrdMinAggregateOutputType | null
    _max: PrdMaxAggregateOutputType | null
  }

  export type PrdAvgAggregateOutputType = {
    pid: number | null
    c_p: Decimal | null
    r_p: Decimal | null
    stk: number | null
  }

  export type PrdSumAggregateOutputType = {
    pid: number | null
    c_p: Decimal | null
    r_p: Decimal | null
    stk: number | null
  }

  export type PrdMinAggregateOutputType = {
    pid: number | null
    ttl: string | null
    ctgr: string | null
    c_p: Decimal | null
    r_p: Decimal | null
    stk: number | null
    act: boolean | null
  }

  export type PrdMaxAggregateOutputType = {
    pid: number | null
    ttl: string | null
    ctgr: string | null
    c_p: Decimal | null
    r_p: Decimal | null
    stk: number | null
    act: boolean | null
  }

  export type PrdCountAggregateOutputType = {
    pid: number
    ttl: number
    ctgr: number
    c_p: number
    r_p: number
    stk: number
    act: number
    _all: number
  }


  export type PrdAvgAggregateInputType = {
    pid?: true
    c_p?: true
    r_p?: true
    stk?: true
  }

  export type PrdSumAggregateInputType = {
    pid?: true
    c_p?: true
    r_p?: true
    stk?: true
  }

  export type PrdMinAggregateInputType = {
    pid?: true
    ttl?: true
    ctgr?: true
    c_p?: true
    r_p?: true
    stk?: true
    act?: true
  }

  export type PrdMaxAggregateInputType = {
    pid?: true
    ttl?: true
    ctgr?: true
    c_p?: true
    r_p?: true
    stk?: true
    act?: true
  }

  export type PrdCountAggregateInputType = {
    pid?: true
    ttl?: true
    ctgr?: true
    c_p?: true
    r_p?: true
    stk?: true
    act?: true
    _all?: true
  }

  export type PrdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prd to aggregate.
     */
    where?: PrdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prds to fetch.
     */
    orderBy?: PrdOrderByWithRelationInput | PrdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prds
    **/
    _count?: true | PrdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrdMaxAggregateInputType
  }

  export type GetPrdAggregateType<T extends PrdAggregateArgs> = {
        [P in keyof T & keyof AggregatePrd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrd[P]>
      : GetScalarType<T[P], AggregatePrd[P]>
  }




  export type PrdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrdWhereInput
    orderBy?: PrdOrderByWithAggregationInput | PrdOrderByWithAggregationInput[]
    by: PrdScalarFieldEnum[] | PrdScalarFieldEnum
    having?: PrdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrdCountAggregateInputType | true
    _avg?: PrdAvgAggregateInputType
    _sum?: PrdSumAggregateInputType
    _min?: PrdMinAggregateInputType
    _max?: PrdMaxAggregateInputType
  }

  export type PrdGroupByOutputType = {
    pid: number
    ttl: string
    ctgr: string
    c_p: Decimal
    r_p: Decimal
    stk: number
    act: boolean
    _count: PrdCountAggregateOutputType | null
    _avg: PrdAvgAggregateOutputType | null
    _sum: PrdSumAggregateOutputType | null
    _min: PrdMinAggregateOutputType | null
    _max: PrdMaxAggregateOutputType | null
  }

  type GetPrdGroupByPayload<T extends PrdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrdGroupByOutputType[P]>
            : GetScalarType<T[P], PrdGroupByOutputType[P]>
        }
      >
    >


  export type PrdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pid?: boolean
    ttl?: boolean
    ctgr?: boolean
    c_p?: boolean
    r_p?: boolean
    stk?: boolean
    act?: boolean
  }, ExtArgs["result"]["prd"]>

  export type PrdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pid?: boolean
    ttl?: boolean
    ctgr?: boolean
    c_p?: boolean
    r_p?: boolean
    stk?: boolean
    act?: boolean
  }, ExtArgs["result"]["prd"]>

  export type PrdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pid?: boolean
    ttl?: boolean
    ctgr?: boolean
    c_p?: boolean
    r_p?: boolean
    stk?: boolean
    act?: boolean
  }, ExtArgs["result"]["prd"]>

  export type PrdSelectScalar = {
    pid?: boolean
    ttl?: boolean
    ctgr?: boolean
    c_p?: boolean
    r_p?: boolean
    stk?: boolean
    act?: boolean
  }

  export type PrdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pid" | "ttl" | "ctgr" | "c_p" | "r_p" | "stk" | "act", ExtArgs["result"]["prd"]>

  export type $PrdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prd"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      pid: number
      ttl: string
      ctgr: string
      c_p: Prisma.Decimal
      r_p: Prisma.Decimal
      stk: number
      act: boolean
    }, ExtArgs["result"]["prd"]>
    composites: {}
  }

  type PrdGetPayload<S extends boolean | null | undefined | PrdDefaultArgs> = $Result.GetResult<Prisma.$PrdPayload, S>

  type PrdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrdCountAggregateInputType | true
    }

  export interface PrdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prd'], meta: { name: 'Prd' } }
    /**
     * Find zero or one Prd that matches the filter.
     * @param {PrdFindUniqueArgs} args - Arguments to find a Prd
     * @example
     * // Get one Prd
     * const prd = await prisma.prd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrdFindUniqueArgs>(args: SelectSubset<T, PrdFindUniqueArgs<ExtArgs>>): Prisma__PrdClient<$Result.GetResult<Prisma.$PrdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prd that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrdFindUniqueOrThrowArgs} args - Arguments to find a Prd
     * @example
     * // Get one Prd
     * const prd = await prisma.prd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrdFindUniqueOrThrowArgs>(args: SelectSubset<T, PrdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrdClient<$Result.GetResult<Prisma.$PrdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrdFindFirstArgs} args - Arguments to find a Prd
     * @example
     * // Get one Prd
     * const prd = await prisma.prd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrdFindFirstArgs>(args?: SelectSubset<T, PrdFindFirstArgs<ExtArgs>>): Prisma__PrdClient<$Result.GetResult<Prisma.$PrdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrdFindFirstOrThrowArgs} args - Arguments to find a Prd
     * @example
     * // Get one Prd
     * const prd = await prisma.prd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrdFindFirstOrThrowArgs>(args?: SelectSubset<T, PrdFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrdClient<$Result.GetResult<Prisma.$PrdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prds
     * const prds = await prisma.prd.findMany()
     * 
     * // Get first 10 Prds
     * const prds = await prisma.prd.findMany({ take: 10 })
     * 
     * // Only select the `pid`
     * const prdWithPidOnly = await prisma.prd.findMany({ select: { pid: true } })
     * 
     */
    findMany<T extends PrdFindManyArgs>(args?: SelectSubset<T, PrdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prd.
     * @param {PrdCreateArgs} args - Arguments to create a Prd.
     * @example
     * // Create one Prd
     * const Prd = await prisma.prd.create({
     *   data: {
     *     // ... data to create a Prd
     *   }
     * })
     * 
     */
    create<T extends PrdCreateArgs>(args: SelectSubset<T, PrdCreateArgs<ExtArgs>>): Prisma__PrdClient<$Result.GetResult<Prisma.$PrdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prds.
     * @param {PrdCreateManyArgs} args - Arguments to create many Prds.
     * @example
     * // Create many Prds
     * const prd = await prisma.prd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrdCreateManyArgs>(args?: SelectSubset<T, PrdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prds and returns the data saved in the database.
     * @param {PrdCreateManyAndReturnArgs} args - Arguments to create many Prds.
     * @example
     * // Create many Prds
     * const prd = await prisma.prd.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prds and only return the `pid`
     * const prdWithPidOnly = await prisma.prd.createManyAndReturn({
     *   select: { pid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrdCreateManyAndReturnArgs>(args?: SelectSubset<T, PrdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prd.
     * @param {PrdDeleteArgs} args - Arguments to delete one Prd.
     * @example
     * // Delete one Prd
     * const Prd = await prisma.prd.delete({
     *   where: {
     *     // ... filter to delete one Prd
     *   }
     * })
     * 
     */
    delete<T extends PrdDeleteArgs>(args: SelectSubset<T, PrdDeleteArgs<ExtArgs>>): Prisma__PrdClient<$Result.GetResult<Prisma.$PrdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prd.
     * @param {PrdUpdateArgs} args - Arguments to update one Prd.
     * @example
     * // Update one Prd
     * const prd = await prisma.prd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrdUpdateArgs>(args: SelectSubset<T, PrdUpdateArgs<ExtArgs>>): Prisma__PrdClient<$Result.GetResult<Prisma.$PrdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prds.
     * @param {PrdDeleteManyArgs} args - Arguments to filter Prds to delete.
     * @example
     * // Delete a few Prds
     * const { count } = await prisma.prd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrdDeleteManyArgs>(args?: SelectSubset<T, PrdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prds
     * const prd = await prisma.prd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrdUpdateManyArgs>(args: SelectSubset<T, PrdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prds and returns the data updated in the database.
     * @param {PrdUpdateManyAndReturnArgs} args - Arguments to update many Prds.
     * @example
     * // Update many Prds
     * const prd = await prisma.prd.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prds and only return the `pid`
     * const prdWithPidOnly = await prisma.prd.updateManyAndReturn({
     *   select: { pid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrdUpdateManyAndReturnArgs>(args: SelectSubset<T, PrdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prd.
     * @param {PrdUpsertArgs} args - Arguments to update or create a Prd.
     * @example
     * // Update or create a Prd
     * const prd = await prisma.prd.upsert({
     *   create: {
     *     // ... data to create a Prd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prd we want to update
     *   }
     * })
     */
    upsert<T extends PrdUpsertArgs>(args: SelectSubset<T, PrdUpsertArgs<ExtArgs>>): Prisma__PrdClient<$Result.GetResult<Prisma.$PrdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrdCountArgs} args - Arguments to filter Prds to count.
     * @example
     * // Count the number of Prds
     * const count = await prisma.prd.count({
     *   where: {
     *     // ... the filter for the Prds we want to count
     *   }
     * })
    **/
    count<T extends PrdCountArgs>(
      args?: Subset<T, PrdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrdAggregateArgs>(args: Subset<T, PrdAggregateArgs>): Prisma.PrismaPromise<GetPrdAggregateType<T>>

    /**
     * Group by Prd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrdGroupByArgs} args - Group by arguments.
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
      T extends PrdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrdGroupByArgs['orderBy'] }
        : { orderBy?: PrdGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prd model
   */
  readonly fields: PrdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Prd model
   */
  interface PrdFieldRefs {
    readonly pid: FieldRef<"Prd", 'Int'>
    readonly ttl: FieldRef<"Prd", 'String'>
    readonly ctgr: FieldRef<"Prd", 'String'>
    readonly c_p: FieldRef<"Prd", 'Decimal'>
    readonly r_p: FieldRef<"Prd", 'Decimal'>
    readonly stk: FieldRef<"Prd", 'Int'>
    readonly act: FieldRef<"Prd", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Prd findUnique
   */
  export type PrdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prd
     */
    select?: PrdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prd
     */
    omit?: PrdOmit<ExtArgs> | null
    /**
     * Filter, which Prd to fetch.
     */
    where: PrdWhereUniqueInput
  }

  /**
   * Prd findUniqueOrThrow
   */
  export type PrdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prd
     */
    select?: PrdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prd
     */
    omit?: PrdOmit<ExtArgs> | null
    /**
     * Filter, which Prd to fetch.
     */
    where: PrdWhereUniqueInput
  }

  /**
   * Prd findFirst
   */
  export type PrdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prd
     */
    select?: PrdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prd
     */
    omit?: PrdOmit<ExtArgs> | null
    /**
     * Filter, which Prd to fetch.
     */
    where?: PrdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prds to fetch.
     */
    orderBy?: PrdOrderByWithRelationInput | PrdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prds.
     */
    cursor?: PrdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prds.
     */
    distinct?: PrdScalarFieldEnum | PrdScalarFieldEnum[]
  }

  /**
   * Prd findFirstOrThrow
   */
  export type PrdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prd
     */
    select?: PrdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prd
     */
    omit?: PrdOmit<ExtArgs> | null
    /**
     * Filter, which Prd to fetch.
     */
    where?: PrdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prds to fetch.
     */
    orderBy?: PrdOrderByWithRelationInput | PrdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prds.
     */
    cursor?: PrdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prds.
     */
    distinct?: PrdScalarFieldEnum | PrdScalarFieldEnum[]
  }

  /**
   * Prd findMany
   */
  export type PrdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prd
     */
    select?: PrdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prd
     */
    omit?: PrdOmit<ExtArgs> | null
    /**
     * Filter, which Prds to fetch.
     */
    where?: PrdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prds to fetch.
     */
    orderBy?: PrdOrderByWithRelationInput | PrdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prds.
     */
    cursor?: PrdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prds.
     */
    skip?: number
    distinct?: PrdScalarFieldEnum | PrdScalarFieldEnum[]
  }

  /**
   * Prd create
   */
  export type PrdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prd
     */
    select?: PrdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prd
     */
    omit?: PrdOmit<ExtArgs> | null
    /**
     * The data needed to create a Prd.
     */
    data: XOR<PrdCreateInput, PrdUncheckedCreateInput>
  }

  /**
   * Prd createMany
   */
  export type PrdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prds.
     */
    data: PrdCreateManyInput | PrdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prd createManyAndReturn
   */
  export type PrdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prd
     */
    select?: PrdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prd
     */
    omit?: PrdOmit<ExtArgs> | null
    /**
     * The data used to create many Prds.
     */
    data: PrdCreateManyInput | PrdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prd update
   */
  export type PrdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prd
     */
    select?: PrdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prd
     */
    omit?: PrdOmit<ExtArgs> | null
    /**
     * The data needed to update a Prd.
     */
    data: XOR<PrdUpdateInput, PrdUncheckedUpdateInput>
    /**
     * Choose, which Prd to update.
     */
    where: PrdWhereUniqueInput
  }

  /**
   * Prd updateMany
   */
  export type PrdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prds.
     */
    data: XOR<PrdUpdateManyMutationInput, PrdUncheckedUpdateManyInput>
    /**
     * Filter which Prds to update
     */
    where?: PrdWhereInput
    /**
     * Limit how many Prds to update.
     */
    limit?: number
  }

  /**
   * Prd updateManyAndReturn
   */
  export type PrdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prd
     */
    select?: PrdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prd
     */
    omit?: PrdOmit<ExtArgs> | null
    /**
     * The data used to update Prds.
     */
    data: XOR<PrdUpdateManyMutationInput, PrdUncheckedUpdateManyInput>
    /**
     * Filter which Prds to update
     */
    where?: PrdWhereInput
    /**
     * Limit how many Prds to update.
     */
    limit?: number
  }

  /**
   * Prd upsert
   */
  export type PrdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prd
     */
    select?: PrdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prd
     */
    omit?: PrdOmit<ExtArgs> | null
    /**
     * The filter to search for the Prd to update in case it exists.
     */
    where: PrdWhereUniqueInput
    /**
     * In case the Prd found by the `where` argument doesn't exist, create a new Prd with this data.
     */
    create: XOR<PrdCreateInput, PrdUncheckedCreateInput>
    /**
     * In case the Prd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrdUpdateInput, PrdUncheckedUpdateInput>
  }

  /**
   * Prd delete
   */
  export type PrdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prd
     */
    select?: PrdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prd
     */
    omit?: PrdOmit<ExtArgs> | null
    /**
     * Filter which Prd to delete.
     */
    where: PrdWhereUniqueInput
  }

  /**
   * Prd deleteMany
   */
  export type PrdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prds to delete
     */
    where?: PrdWhereInput
    /**
     * Limit how many Prds to delete.
     */
    limit?: number
  }

  /**
   * Prd without action
   */
  export type PrdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prd
     */
    select?: PrdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prd
     */
    omit?: PrdOmit<ExtArgs> | null
  }


  /**
   * Model TrHd
   */

  export type AggregateTrHd = {
    _count: TrHdCountAggregateOutputType | null
    _avg: TrHdAvgAggregateOutputType | null
    _sum: TrHdSumAggregateOutputType | null
    _min: TrHdMinAggregateOutputType | null
    _max: TrHdMaxAggregateOutputType | null
  }

  export type TrHdAvgAggregateOutputType = {
    oid: number | null
    cid: number | null
    ttl: Decimal | null
  }

  export type TrHdSumAggregateOutputType = {
    oid: number | null
    cid: number | null
    ttl: Decimal | null
  }

  export type TrHdMinAggregateOutputType = {
    oid: number | null
    cid: number | null
    o_dt: Date | null
    sts: string | null
    ttl: Decimal | null
    py_mtd: string | null
  }

  export type TrHdMaxAggregateOutputType = {
    oid: number | null
    cid: number | null
    o_dt: Date | null
    sts: string | null
    ttl: Decimal | null
    py_mtd: string | null
  }

  export type TrHdCountAggregateOutputType = {
    oid: number
    cid: number
    o_dt: number
    sts: number
    ttl: number
    py_mtd: number
    _all: number
  }


  export type TrHdAvgAggregateInputType = {
    oid?: true
    cid?: true
    ttl?: true
  }

  export type TrHdSumAggregateInputType = {
    oid?: true
    cid?: true
    ttl?: true
  }

  export type TrHdMinAggregateInputType = {
    oid?: true
    cid?: true
    o_dt?: true
    sts?: true
    ttl?: true
    py_mtd?: true
  }

  export type TrHdMaxAggregateInputType = {
    oid?: true
    cid?: true
    o_dt?: true
    sts?: true
    ttl?: true
    py_mtd?: true
  }

  export type TrHdCountAggregateInputType = {
    oid?: true
    cid?: true
    o_dt?: true
    sts?: true
    ttl?: true
    py_mtd?: true
    _all?: true
  }

  export type TrHdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrHd to aggregate.
     */
    where?: TrHdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrHds to fetch.
     */
    orderBy?: TrHdOrderByWithRelationInput | TrHdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrHdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrHds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrHds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrHds
    **/
    _count?: true | TrHdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrHdAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrHdSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrHdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrHdMaxAggregateInputType
  }

  export type GetTrHdAggregateType<T extends TrHdAggregateArgs> = {
        [P in keyof T & keyof AggregateTrHd]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrHd[P]>
      : GetScalarType<T[P], AggregateTrHd[P]>
  }




  export type TrHdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrHdWhereInput
    orderBy?: TrHdOrderByWithAggregationInput | TrHdOrderByWithAggregationInput[]
    by: TrHdScalarFieldEnum[] | TrHdScalarFieldEnum
    having?: TrHdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrHdCountAggregateInputType | true
    _avg?: TrHdAvgAggregateInputType
    _sum?: TrHdSumAggregateInputType
    _min?: TrHdMinAggregateInputType
    _max?: TrHdMaxAggregateInputType
  }

  export type TrHdGroupByOutputType = {
    oid: number
    cid: number
    o_dt: Date
    sts: string
    ttl: Decimal
    py_mtd: string
    _count: TrHdCountAggregateOutputType | null
    _avg: TrHdAvgAggregateOutputType | null
    _sum: TrHdSumAggregateOutputType | null
    _min: TrHdMinAggregateOutputType | null
    _max: TrHdMaxAggregateOutputType | null
  }

  type GetTrHdGroupByPayload<T extends TrHdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrHdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrHdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrHdGroupByOutputType[P]>
            : GetScalarType<T[P], TrHdGroupByOutputType[P]>
        }
      >
    >


  export type TrHdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    oid?: boolean
    cid?: boolean
    o_dt?: boolean
    sts?: boolean
    ttl?: boolean
    py_mtd?: boolean
    customer?: boolean | CustInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trHd"]>

  export type TrHdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    oid?: boolean
    cid?: boolean
    o_dt?: boolean
    sts?: boolean
    ttl?: boolean
    py_mtd?: boolean
    customer?: boolean | CustInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trHd"]>

  export type TrHdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    oid?: boolean
    cid?: boolean
    o_dt?: boolean
    sts?: boolean
    ttl?: boolean
    py_mtd?: boolean
    customer?: boolean | CustInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trHd"]>

  export type TrHdSelectScalar = {
    oid?: boolean
    cid?: boolean
    o_dt?: boolean
    sts?: boolean
    ttl?: boolean
    py_mtd?: boolean
  }

  export type TrHdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"oid" | "cid" | "o_dt" | "sts" | "ttl" | "py_mtd", ExtArgs["result"]["trHd"]>
  export type TrHdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustInfoDefaultArgs<ExtArgs>
  }
  export type TrHdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustInfoDefaultArgs<ExtArgs>
  }
  export type TrHdIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustInfoDefaultArgs<ExtArgs>
  }

  export type $TrHdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrHd"
    objects: {
      customer: Prisma.$CustInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      oid: number
      cid: number
      o_dt: Date
      sts: string
      ttl: Prisma.Decimal
      py_mtd: string
    }, ExtArgs["result"]["trHd"]>
    composites: {}
  }

  type TrHdGetPayload<S extends boolean | null | undefined | TrHdDefaultArgs> = $Result.GetResult<Prisma.$TrHdPayload, S>

  type TrHdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrHdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrHdCountAggregateInputType | true
    }

  export interface TrHdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrHd'], meta: { name: 'TrHd' } }
    /**
     * Find zero or one TrHd that matches the filter.
     * @param {TrHdFindUniqueArgs} args - Arguments to find a TrHd
     * @example
     * // Get one TrHd
     * const trHd = await prisma.trHd.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrHdFindUniqueArgs>(args: SelectSubset<T, TrHdFindUniqueArgs<ExtArgs>>): Prisma__TrHdClient<$Result.GetResult<Prisma.$TrHdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrHd that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrHdFindUniqueOrThrowArgs} args - Arguments to find a TrHd
     * @example
     * // Get one TrHd
     * const trHd = await prisma.trHd.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrHdFindUniqueOrThrowArgs>(args: SelectSubset<T, TrHdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrHdClient<$Result.GetResult<Prisma.$TrHdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrHd that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrHdFindFirstArgs} args - Arguments to find a TrHd
     * @example
     * // Get one TrHd
     * const trHd = await prisma.trHd.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrHdFindFirstArgs>(args?: SelectSubset<T, TrHdFindFirstArgs<ExtArgs>>): Prisma__TrHdClient<$Result.GetResult<Prisma.$TrHdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrHd that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrHdFindFirstOrThrowArgs} args - Arguments to find a TrHd
     * @example
     * // Get one TrHd
     * const trHd = await prisma.trHd.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrHdFindFirstOrThrowArgs>(args?: SelectSubset<T, TrHdFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrHdClient<$Result.GetResult<Prisma.$TrHdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrHds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrHdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrHds
     * const trHds = await prisma.trHd.findMany()
     * 
     * // Get first 10 TrHds
     * const trHds = await prisma.trHd.findMany({ take: 10 })
     * 
     * // Only select the `oid`
     * const trHdWithOidOnly = await prisma.trHd.findMany({ select: { oid: true } })
     * 
     */
    findMany<T extends TrHdFindManyArgs>(args?: SelectSubset<T, TrHdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrHdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrHd.
     * @param {TrHdCreateArgs} args - Arguments to create a TrHd.
     * @example
     * // Create one TrHd
     * const TrHd = await prisma.trHd.create({
     *   data: {
     *     // ... data to create a TrHd
     *   }
     * })
     * 
     */
    create<T extends TrHdCreateArgs>(args: SelectSubset<T, TrHdCreateArgs<ExtArgs>>): Prisma__TrHdClient<$Result.GetResult<Prisma.$TrHdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrHds.
     * @param {TrHdCreateManyArgs} args - Arguments to create many TrHds.
     * @example
     * // Create many TrHds
     * const trHd = await prisma.trHd.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrHdCreateManyArgs>(args?: SelectSubset<T, TrHdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrHds and returns the data saved in the database.
     * @param {TrHdCreateManyAndReturnArgs} args - Arguments to create many TrHds.
     * @example
     * // Create many TrHds
     * const trHd = await prisma.trHd.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrHds and only return the `oid`
     * const trHdWithOidOnly = await prisma.trHd.createManyAndReturn({
     *   select: { oid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrHdCreateManyAndReturnArgs>(args?: SelectSubset<T, TrHdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrHdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrHd.
     * @param {TrHdDeleteArgs} args - Arguments to delete one TrHd.
     * @example
     * // Delete one TrHd
     * const TrHd = await prisma.trHd.delete({
     *   where: {
     *     // ... filter to delete one TrHd
     *   }
     * })
     * 
     */
    delete<T extends TrHdDeleteArgs>(args: SelectSubset<T, TrHdDeleteArgs<ExtArgs>>): Prisma__TrHdClient<$Result.GetResult<Prisma.$TrHdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrHd.
     * @param {TrHdUpdateArgs} args - Arguments to update one TrHd.
     * @example
     * // Update one TrHd
     * const trHd = await prisma.trHd.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrHdUpdateArgs>(args: SelectSubset<T, TrHdUpdateArgs<ExtArgs>>): Prisma__TrHdClient<$Result.GetResult<Prisma.$TrHdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrHds.
     * @param {TrHdDeleteManyArgs} args - Arguments to filter TrHds to delete.
     * @example
     * // Delete a few TrHds
     * const { count } = await prisma.trHd.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrHdDeleteManyArgs>(args?: SelectSubset<T, TrHdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrHds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrHdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrHds
     * const trHd = await prisma.trHd.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrHdUpdateManyArgs>(args: SelectSubset<T, TrHdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrHds and returns the data updated in the database.
     * @param {TrHdUpdateManyAndReturnArgs} args - Arguments to update many TrHds.
     * @example
     * // Update many TrHds
     * const trHd = await prisma.trHd.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrHds and only return the `oid`
     * const trHdWithOidOnly = await prisma.trHd.updateManyAndReturn({
     *   select: { oid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrHdUpdateManyAndReturnArgs>(args: SelectSubset<T, TrHdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrHdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrHd.
     * @param {TrHdUpsertArgs} args - Arguments to update or create a TrHd.
     * @example
     * // Update or create a TrHd
     * const trHd = await prisma.trHd.upsert({
     *   create: {
     *     // ... data to create a TrHd
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrHd we want to update
     *   }
     * })
     */
    upsert<T extends TrHdUpsertArgs>(args: SelectSubset<T, TrHdUpsertArgs<ExtArgs>>): Prisma__TrHdClient<$Result.GetResult<Prisma.$TrHdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrHds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrHdCountArgs} args - Arguments to filter TrHds to count.
     * @example
     * // Count the number of TrHds
     * const count = await prisma.trHd.count({
     *   where: {
     *     // ... the filter for the TrHds we want to count
     *   }
     * })
    **/
    count<T extends TrHdCountArgs>(
      args?: Subset<T, TrHdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrHdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrHd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrHdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrHdAggregateArgs>(args: Subset<T, TrHdAggregateArgs>): Prisma.PrismaPromise<GetTrHdAggregateType<T>>

    /**
     * Group by TrHd.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrHdGroupByArgs} args - Group by arguments.
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
      T extends TrHdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrHdGroupByArgs['orderBy'] }
        : { orderBy?: TrHdGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrHdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrHdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrHd model
   */
  readonly fields: TrHdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrHd.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrHdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustInfoDefaultArgs<ExtArgs>>): Prisma__CustInfoClient<$Result.GetResult<Prisma.$CustInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TrHd model
   */
  interface TrHdFieldRefs {
    readonly oid: FieldRef<"TrHd", 'Int'>
    readonly cid: FieldRef<"TrHd", 'Int'>
    readonly o_dt: FieldRef<"TrHd", 'DateTime'>
    readonly sts: FieldRef<"TrHd", 'String'>
    readonly ttl: FieldRef<"TrHd", 'Decimal'>
    readonly py_mtd: FieldRef<"TrHd", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TrHd findUnique
   */
  export type TrHdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrHd
     */
    select?: TrHdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrHd
     */
    omit?: TrHdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrHdInclude<ExtArgs> | null
    /**
     * Filter, which TrHd to fetch.
     */
    where: TrHdWhereUniqueInput
  }

  /**
   * TrHd findUniqueOrThrow
   */
  export type TrHdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrHd
     */
    select?: TrHdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrHd
     */
    omit?: TrHdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrHdInclude<ExtArgs> | null
    /**
     * Filter, which TrHd to fetch.
     */
    where: TrHdWhereUniqueInput
  }

  /**
   * TrHd findFirst
   */
  export type TrHdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrHd
     */
    select?: TrHdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrHd
     */
    omit?: TrHdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrHdInclude<ExtArgs> | null
    /**
     * Filter, which TrHd to fetch.
     */
    where?: TrHdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrHds to fetch.
     */
    orderBy?: TrHdOrderByWithRelationInput | TrHdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrHds.
     */
    cursor?: TrHdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrHds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrHds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrHds.
     */
    distinct?: TrHdScalarFieldEnum | TrHdScalarFieldEnum[]
  }

  /**
   * TrHd findFirstOrThrow
   */
  export type TrHdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrHd
     */
    select?: TrHdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrHd
     */
    omit?: TrHdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrHdInclude<ExtArgs> | null
    /**
     * Filter, which TrHd to fetch.
     */
    where?: TrHdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrHds to fetch.
     */
    orderBy?: TrHdOrderByWithRelationInput | TrHdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrHds.
     */
    cursor?: TrHdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrHds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrHds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrHds.
     */
    distinct?: TrHdScalarFieldEnum | TrHdScalarFieldEnum[]
  }

  /**
   * TrHd findMany
   */
  export type TrHdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrHd
     */
    select?: TrHdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrHd
     */
    omit?: TrHdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrHdInclude<ExtArgs> | null
    /**
     * Filter, which TrHds to fetch.
     */
    where?: TrHdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrHds to fetch.
     */
    orderBy?: TrHdOrderByWithRelationInput | TrHdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrHds.
     */
    cursor?: TrHdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrHds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrHds.
     */
    skip?: number
    distinct?: TrHdScalarFieldEnum | TrHdScalarFieldEnum[]
  }

  /**
   * TrHd create
   */
  export type TrHdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrHd
     */
    select?: TrHdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrHd
     */
    omit?: TrHdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrHdInclude<ExtArgs> | null
    /**
     * The data needed to create a TrHd.
     */
    data: XOR<TrHdCreateInput, TrHdUncheckedCreateInput>
  }

  /**
   * TrHd createMany
   */
  export type TrHdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrHds.
     */
    data: TrHdCreateManyInput | TrHdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrHd createManyAndReturn
   */
  export type TrHdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrHd
     */
    select?: TrHdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrHd
     */
    omit?: TrHdOmit<ExtArgs> | null
    /**
     * The data used to create many TrHds.
     */
    data: TrHdCreateManyInput | TrHdCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrHdIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrHd update
   */
  export type TrHdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrHd
     */
    select?: TrHdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrHd
     */
    omit?: TrHdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrHdInclude<ExtArgs> | null
    /**
     * The data needed to update a TrHd.
     */
    data: XOR<TrHdUpdateInput, TrHdUncheckedUpdateInput>
    /**
     * Choose, which TrHd to update.
     */
    where: TrHdWhereUniqueInput
  }

  /**
   * TrHd updateMany
   */
  export type TrHdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrHds.
     */
    data: XOR<TrHdUpdateManyMutationInput, TrHdUncheckedUpdateManyInput>
    /**
     * Filter which TrHds to update
     */
    where?: TrHdWhereInput
    /**
     * Limit how many TrHds to update.
     */
    limit?: number
  }

  /**
   * TrHd updateManyAndReturn
   */
  export type TrHdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrHd
     */
    select?: TrHdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrHd
     */
    omit?: TrHdOmit<ExtArgs> | null
    /**
     * The data used to update TrHds.
     */
    data: XOR<TrHdUpdateManyMutationInput, TrHdUncheckedUpdateManyInput>
    /**
     * Filter which TrHds to update
     */
    where?: TrHdWhereInput
    /**
     * Limit how many TrHds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrHdIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrHd upsert
   */
  export type TrHdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrHd
     */
    select?: TrHdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrHd
     */
    omit?: TrHdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrHdInclude<ExtArgs> | null
    /**
     * The filter to search for the TrHd to update in case it exists.
     */
    where: TrHdWhereUniqueInput
    /**
     * In case the TrHd found by the `where` argument doesn't exist, create a new TrHd with this data.
     */
    create: XOR<TrHdCreateInput, TrHdUncheckedCreateInput>
    /**
     * In case the TrHd was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrHdUpdateInput, TrHdUncheckedUpdateInput>
  }

  /**
   * TrHd delete
   */
  export type TrHdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrHd
     */
    select?: TrHdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrHd
     */
    omit?: TrHdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrHdInclude<ExtArgs> | null
    /**
     * Filter which TrHd to delete.
     */
    where: TrHdWhereUniqueInput
  }

  /**
   * TrHd deleteMany
   */
  export type TrHdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrHds to delete
     */
    where?: TrHdWhereInput
    /**
     * Limit how many TrHds to delete.
     */
    limit?: number
  }

  /**
   * TrHd without action
   */
  export type TrHdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrHd
     */
    select?: TrHdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrHd
     */
    omit?: TrHdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrHdInclude<ExtArgs> | null
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


  export const CustInfoScalarFieldEnum: {
    cid: 'cid',
    nm: 'nm',
    em: 'em',
    rgn: 'rgn',
    sgmt: 'sgmt',
    jn_dt: 'jn_dt',
    act: 'act'
  };

  export type CustInfoScalarFieldEnum = (typeof CustInfoScalarFieldEnum)[keyof typeof CustInfoScalarFieldEnum]


  export const PrdScalarFieldEnum: {
    pid: 'pid',
    ttl: 'ttl',
    ctgr: 'ctgr',
    c_p: 'c_p',
    r_p: 'r_p',
    stk: 'stk',
    act: 'act'
  };

  export type PrdScalarFieldEnum = (typeof PrdScalarFieldEnum)[keyof typeof PrdScalarFieldEnum]


  export const TrHdScalarFieldEnum: {
    oid: 'oid',
    cid: 'cid',
    o_dt: 'o_dt',
    sts: 'sts',
    ttl: 'ttl',
    py_mtd: 'py_mtd'
  };

  export type TrHdScalarFieldEnum = (typeof TrHdScalarFieldEnum)[keyof typeof TrHdScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CustInfoWhereInput = {
    AND?: CustInfoWhereInput | CustInfoWhereInput[]
    OR?: CustInfoWhereInput[]
    NOT?: CustInfoWhereInput | CustInfoWhereInput[]
    cid?: IntFilter<"CustInfo"> | number
    nm?: StringFilter<"CustInfo"> | string
    em?: StringFilter<"CustInfo"> | string
    rgn?: StringNullableFilter<"CustInfo"> | string | null
    sgmt?: StringFilter<"CustInfo"> | string
    jn_dt?: DateTimeFilter<"CustInfo"> | Date | string
    act?: BoolFilter<"CustInfo"> | boolean
    trHd?: TrHdListRelationFilter
  }

  export type CustInfoOrderByWithRelationInput = {
    cid?: SortOrder
    nm?: SortOrder
    em?: SortOrder
    rgn?: SortOrderInput | SortOrder
    sgmt?: SortOrder
    jn_dt?: SortOrder
    act?: SortOrder
    trHd?: TrHdOrderByRelationAggregateInput
  }

  export type CustInfoWhereUniqueInput = Prisma.AtLeast<{
    cid?: number
    AND?: CustInfoWhereInput | CustInfoWhereInput[]
    OR?: CustInfoWhereInput[]
    NOT?: CustInfoWhereInput | CustInfoWhereInput[]
    nm?: StringFilter<"CustInfo"> | string
    em?: StringFilter<"CustInfo"> | string
    rgn?: StringNullableFilter<"CustInfo"> | string | null
    sgmt?: StringFilter<"CustInfo"> | string
    jn_dt?: DateTimeFilter<"CustInfo"> | Date | string
    act?: BoolFilter<"CustInfo"> | boolean
    trHd?: TrHdListRelationFilter
  }, "cid">

  export type CustInfoOrderByWithAggregationInput = {
    cid?: SortOrder
    nm?: SortOrder
    em?: SortOrder
    rgn?: SortOrderInput | SortOrder
    sgmt?: SortOrder
    jn_dt?: SortOrder
    act?: SortOrder
    _count?: CustInfoCountOrderByAggregateInput
    _avg?: CustInfoAvgOrderByAggregateInput
    _max?: CustInfoMaxOrderByAggregateInput
    _min?: CustInfoMinOrderByAggregateInput
    _sum?: CustInfoSumOrderByAggregateInput
  }

  export type CustInfoScalarWhereWithAggregatesInput = {
    AND?: CustInfoScalarWhereWithAggregatesInput | CustInfoScalarWhereWithAggregatesInput[]
    OR?: CustInfoScalarWhereWithAggregatesInput[]
    NOT?: CustInfoScalarWhereWithAggregatesInput | CustInfoScalarWhereWithAggregatesInput[]
    cid?: IntWithAggregatesFilter<"CustInfo"> | number
    nm?: StringWithAggregatesFilter<"CustInfo"> | string
    em?: StringWithAggregatesFilter<"CustInfo"> | string
    rgn?: StringNullableWithAggregatesFilter<"CustInfo"> | string | null
    sgmt?: StringWithAggregatesFilter<"CustInfo"> | string
    jn_dt?: DateTimeWithAggregatesFilter<"CustInfo"> | Date | string
    act?: BoolWithAggregatesFilter<"CustInfo"> | boolean
  }

  export type PrdWhereInput = {
    AND?: PrdWhereInput | PrdWhereInput[]
    OR?: PrdWhereInput[]
    NOT?: PrdWhereInput | PrdWhereInput[]
    pid?: IntFilter<"Prd"> | number
    ttl?: StringFilter<"Prd"> | string
    ctgr?: StringFilter<"Prd"> | string
    c_p?: DecimalFilter<"Prd"> | Decimal | DecimalJsLike | number | string
    r_p?: DecimalFilter<"Prd"> | Decimal | DecimalJsLike | number | string
    stk?: IntFilter<"Prd"> | number
    act?: BoolFilter<"Prd"> | boolean
  }

  export type PrdOrderByWithRelationInput = {
    pid?: SortOrder
    ttl?: SortOrder
    ctgr?: SortOrder
    c_p?: SortOrder
    r_p?: SortOrder
    stk?: SortOrder
    act?: SortOrder
  }

  export type PrdWhereUniqueInput = Prisma.AtLeast<{
    pid?: number
    AND?: PrdWhereInput | PrdWhereInput[]
    OR?: PrdWhereInput[]
    NOT?: PrdWhereInput | PrdWhereInput[]
    ttl?: StringFilter<"Prd"> | string
    ctgr?: StringFilter<"Prd"> | string
    c_p?: DecimalFilter<"Prd"> | Decimal | DecimalJsLike | number | string
    r_p?: DecimalFilter<"Prd"> | Decimal | DecimalJsLike | number | string
    stk?: IntFilter<"Prd"> | number
    act?: BoolFilter<"Prd"> | boolean
  }, "pid">

  export type PrdOrderByWithAggregationInput = {
    pid?: SortOrder
    ttl?: SortOrder
    ctgr?: SortOrder
    c_p?: SortOrder
    r_p?: SortOrder
    stk?: SortOrder
    act?: SortOrder
    _count?: PrdCountOrderByAggregateInput
    _avg?: PrdAvgOrderByAggregateInput
    _max?: PrdMaxOrderByAggregateInput
    _min?: PrdMinOrderByAggregateInput
    _sum?: PrdSumOrderByAggregateInput
  }

  export type PrdScalarWhereWithAggregatesInput = {
    AND?: PrdScalarWhereWithAggregatesInput | PrdScalarWhereWithAggregatesInput[]
    OR?: PrdScalarWhereWithAggregatesInput[]
    NOT?: PrdScalarWhereWithAggregatesInput | PrdScalarWhereWithAggregatesInput[]
    pid?: IntWithAggregatesFilter<"Prd"> | number
    ttl?: StringWithAggregatesFilter<"Prd"> | string
    ctgr?: StringWithAggregatesFilter<"Prd"> | string
    c_p?: DecimalWithAggregatesFilter<"Prd"> | Decimal | DecimalJsLike | number | string
    r_p?: DecimalWithAggregatesFilter<"Prd"> | Decimal | DecimalJsLike | number | string
    stk?: IntWithAggregatesFilter<"Prd"> | number
    act?: BoolWithAggregatesFilter<"Prd"> | boolean
  }

  export type TrHdWhereInput = {
    AND?: TrHdWhereInput | TrHdWhereInput[]
    OR?: TrHdWhereInput[]
    NOT?: TrHdWhereInput | TrHdWhereInput[]
    oid?: IntFilter<"TrHd"> | number
    cid?: IntFilter<"TrHd"> | number
    o_dt?: DateTimeFilter<"TrHd"> | Date | string
    sts?: StringFilter<"TrHd"> | string
    ttl?: DecimalFilter<"TrHd"> | Decimal | DecimalJsLike | number | string
    py_mtd?: StringFilter<"TrHd"> | string
    customer?: XOR<CustInfoScalarRelationFilter, CustInfoWhereInput>
  }

  export type TrHdOrderByWithRelationInput = {
    oid?: SortOrder
    cid?: SortOrder
    o_dt?: SortOrder
    sts?: SortOrder
    ttl?: SortOrder
    py_mtd?: SortOrder
    customer?: CustInfoOrderByWithRelationInput
  }

  export type TrHdWhereUniqueInput = Prisma.AtLeast<{
    oid?: number
    AND?: TrHdWhereInput | TrHdWhereInput[]
    OR?: TrHdWhereInput[]
    NOT?: TrHdWhereInput | TrHdWhereInput[]
    cid?: IntFilter<"TrHd"> | number
    o_dt?: DateTimeFilter<"TrHd"> | Date | string
    sts?: StringFilter<"TrHd"> | string
    ttl?: DecimalFilter<"TrHd"> | Decimal | DecimalJsLike | number | string
    py_mtd?: StringFilter<"TrHd"> | string
    customer?: XOR<CustInfoScalarRelationFilter, CustInfoWhereInput>
  }, "oid">

  export type TrHdOrderByWithAggregationInput = {
    oid?: SortOrder
    cid?: SortOrder
    o_dt?: SortOrder
    sts?: SortOrder
    ttl?: SortOrder
    py_mtd?: SortOrder
    _count?: TrHdCountOrderByAggregateInput
    _avg?: TrHdAvgOrderByAggregateInput
    _max?: TrHdMaxOrderByAggregateInput
    _min?: TrHdMinOrderByAggregateInput
    _sum?: TrHdSumOrderByAggregateInput
  }

  export type TrHdScalarWhereWithAggregatesInput = {
    AND?: TrHdScalarWhereWithAggregatesInput | TrHdScalarWhereWithAggregatesInput[]
    OR?: TrHdScalarWhereWithAggregatesInput[]
    NOT?: TrHdScalarWhereWithAggregatesInput | TrHdScalarWhereWithAggregatesInput[]
    oid?: IntWithAggregatesFilter<"TrHd"> | number
    cid?: IntWithAggregatesFilter<"TrHd"> | number
    o_dt?: DateTimeWithAggregatesFilter<"TrHd"> | Date | string
    sts?: StringWithAggregatesFilter<"TrHd"> | string
    ttl?: DecimalWithAggregatesFilter<"TrHd"> | Decimal | DecimalJsLike | number | string
    py_mtd?: StringWithAggregatesFilter<"TrHd"> | string
  }

  export type CustInfoCreateInput = {
    nm: string
    em: string
    rgn?: string | null
    sgmt: string
    jn_dt: Date | string
    act?: boolean
    trHd?: TrHdCreateNestedManyWithoutCustomerInput
  }

  export type CustInfoUncheckedCreateInput = {
    cid?: number
    nm: string
    em: string
    rgn?: string | null
    sgmt: string
    jn_dt: Date | string
    act?: boolean
    trHd?: TrHdUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustInfoUpdateInput = {
    nm?: StringFieldUpdateOperationsInput | string
    em?: StringFieldUpdateOperationsInput | string
    rgn?: NullableStringFieldUpdateOperationsInput | string | null
    sgmt?: StringFieldUpdateOperationsInput | string
    jn_dt?: DateTimeFieldUpdateOperationsInput | Date | string
    act?: BoolFieldUpdateOperationsInput | boolean
    trHd?: TrHdUpdateManyWithoutCustomerNestedInput
  }

  export type CustInfoUncheckedUpdateInput = {
    cid?: IntFieldUpdateOperationsInput | number
    nm?: StringFieldUpdateOperationsInput | string
    em?: StringFieldUpdateOperationsInput | string
    rgn?: NullableStringFieldUpdateOperationsInput | string | null
    sgmt?: StringFieldUpdateOperationsInput | string
    jn_dt?: DateTimeFieldUpdateOperationsInput | Date | string
    act?: BoolFieldUpdateOperationsInput | boolean
    trHd?: TrHdUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustInfoCreateManyInput = {
    cid?: number
    nm: string
    em: string
    rgn?: string | null
    sgmt: string
    jn_dt: Date | string
    act?: boolean
  }

  export type CustInfoUpdateManyMutationInput = {
    nm?: StringFieldUpdateOperationsInput | string
    em?: StringFieldUpdateOperationsInput | string
    rgn?: NullableStringFieldUpdateOperationsInput | string | null
    sgmt?: StringFieldUpdateOperationsInput | string
    jn_dt?: DateTimeFieldUpdateOperationsInput | Date | string
    act?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustInfoUncheckedUpdateManyInput = {
    cid?: IntFieldUpdateOperationsInput | number
    nm?: StringFieldUpdateOperationsInput | string
    em?: StringFieldUpdateOperationsInput | string
    rgn?: NullableStringFieldUpdateOperationsInput | string | null
    sgmt?: StringFieldUpdateOperationsInput | string
    jn_dt?: DateTimeFieldUpdateOperationsInput | Date | string
    act?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PrdCreateInput = {
    ttl: string
    ctgr: string
    c_p: Decimal | DecimalJsLike | number | string
    r_p: Decimal | DecimalJsLike | number | string
    stk: number
    act?: boolean
  }

  export type PrdUncheckedCreateInput = {
    pid?: number
    ttl: string
    ctgr: string
    c_p: Decimal | DecimalJsLike | number | string
    r_p: Decimal | DecimalJsLike | number | string
    stk: number
    act?: boolean
  }

  export type PrdUpdateInput = {
    ttl?: StringFieldUpdateOperationsInput | string
    ctgr?: StringFieldUpdateOperationsInput | string
    c_p?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    r_p?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stk?: IntFieldUpdateOperationsInput | number
    act?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PrdUncheckedUpdateInput = {
    pid?: IntFieldUpdateOperationsInput | number
    ttl?: StringFieldUpdateOperationsInput | string
    ctgr?: StringFieldUpdateOperationsInput | string
    c_p?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    r_p?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stk?: IntFieldUpdateOperationsInput | number
    act?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PrdCreateManyInput = {
    pid?: number
    ttl: string
    ctgr: string
    c_p: Decimal | DecimalJsLike | number | string
    r_p: Decimal | DecimalJsLike | number | string
    stk: number
    act?: boolean
  }

  export type PrdUpdateManyMutationInput = {
    ttl?: StringFieldUpdateOperationsInput | string
    ctgr?: StringFieldUpdateOperationsInput | string
    c_p?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    r_p?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stk?: IntFieldUpdateOperationsInput | number
    act?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PrdUncheckedUpdateManyInput = {
    pid?: IntFieldUpdateOperationsInput | number
    ttl?: StringFieldUpdateOperationsInput | string
    ctgr?: StringFieldUpdateOperationsInput | string
    c_p?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    r_p?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stk?: IntFieldUpdateOperationsInput | number
    act?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrHdCreateInput = {
    o_dt: Date | string
    sts: string
    ttl: Decimal | DecimalJsLike | number | string
    py_mtd: string
    customer: CustInfoCreateNestedOneWithoutTrHdInput
  }

  export type TrHdUncheckedCreateInput = {
    oid?: number
    cid: number
    o_dt: Date | string
    sts: string
    ttl: Decimal | DecimalJsLike | number | string
    py_mtd: string
  }

  export type TrHdUpdateInput = {
    o_dt?: DateTimeFieldUpdateOperationsInput | Date | string
    sts?: StringFieldUpdateOperationsInput | string
    ttl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    py_mtd?: StringFieldUpdateOperationsInput | string
    customer?: CustInfoUpdateOneRequiredWithoutTrHdNestedInput
  }

  export type TrHdUncheckedUpdateInput = {
    oid?: IntFieldUpdateOperationsInput | number
    cid?: IntFieldUpdateOperationsInput | number
    o_dt?: DateTimeFieldUpdateOperationsInput | Date | string
    sts?: StringFieldUpdateOperationsInput | string
    ttl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    py_mtd?: StringFieldUpdateOperationsInput | string
  }

  export type TrHdCreateManyInput = {
    oid?: number
    cid: number
    o_dt: Date | string
    sts: string
    ttl: Decimal | DecimalJsLike | number | string
    py_mtd: string
  }

  export type TrHdUpdateManyMutationInput = {
    o_dt?: DateTimeFieldUpdateOperationsInput | Date | string
    sts?: StringFieldUpdateOperationsInput | string
    ttl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    py_mtd?: StringFieldUpdateOperationsInput | string
  }

  export type TrHdUncheckedUpdateManyInput = {
    oid?: IntFieldUpdateOperationsInput | number
    cid?: IntFieldUpdateOperationsInput | number
    o_dt?: DateTimeFieldUpdateOperationsInput | Date | string
    sts?: StringFieldUpdateOperationsInput | string
    ttl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    py_mtd?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TrHdListRelationFilter = {
    every?: TrHdWhereInput
    some?: TrHdWhereInput
    none?: TrHdWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TrHdOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustInfoCountOrderByAggregateInput = {
    cid?: SortOrder
    nm?: SortOrder
    em?: SortOrder
    rgn?: SortOrder
    sgmt?: SortOrder
    jn_dt?: SortOrder
    act?: SortOrder
  }

  export type CustInfoAvgOrderByAggregateInput = {
    cid?: SortOrder
  }

  export type CustInfoMaxOrderByAggregateInput = {
    cid?: SortOrder
    nm?: SortOrder
    em?: SortOrder
    rgn?: SortOrder
    sgmt?: SortOrder
    jn_dt?: SortOrder
    act?: SortOrder
  }

  export type CustInfoMinOrderByAggregateInput = {
    cid?: SortOrder
    nm?: SortOrder
    em?: SortOrder
    rgn?: SortOrder
    sgmt?: SortOrder
    jn_dt?: SortOrder
    act?: SortOrder
  }

  export type CustInfoSumOrderByAggregateInput = {
    cid?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PrdCountOrderByAggregateInput = {
    pid?: SortOrder
    ttl?: SortOrder
    ctgr?: SortOrder
    c_p?: SortOrder
    r_p?: SortOrder
    stk?: SortOrder
    act?: SortOrder
  }

  export type PrdAvgOrderByAggregateInput = {
    pid?: SortOrder
    c_p?: SortOrder
    r_p?: SortOrder
    stk?: SortOrder
  }

  export type PrdMaxOrderByAggregateInput = {
    pid?: SortOrder
    ttl?: SortOrder
    ctgr?: SortOrder
    c_p?: SortOrder
    r_p?: SortOrder
    stk?: SortOrder
    act?: SortOrder
  }

  export type PrdMinOrderByAggregateInput = {
    pid?: SortOrder
    ttl?: SortOrder
    ctgr?: SortOrder
    c_p?: SortOrder
    r_p?: SortOrder
    stk?: SortOrder
    act?: SortOrder
  }

  export type PrdSumOrderByAggregateInput = {
    pid?: SortOrder
    c_p?: SortOrder
    r_p?: SortOrder
    stk?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CustInfoScalarRelationFilter = {
    is?: CustInfoWhereInput
    isNot?: CustInfoWhereInput
  }

  export type TrHdCountOrderByAggregateInput = {
    oid?: SortOrder
    cid?: SortOrder
    o_dt?: SortOrder
    sts?: SortOrder
    ttl?: SortOrder
    py_mtd?: SortOrder
  }

  export type TrHdAvgOrderByAggregateInput = {
    oid?: SortOrder
    cid?: SortOrder
    ttl?: SortOrder
  }

  export type TrHdMaxOrderByAggregateInput = {
    oid?: SortOrder
    cid?: SortOrder
    o_dt?: SortOrder
    sts?: SortOrder
    ttl?: SortOrder
    py_mtd?: SortOrder
  }

  export type TrHdMinOrderByAggregateInput = {
    oid?: SortOrder
    cid?: SortOrder
    o_dt?: SortOrder
    sts?: SortOrder
    ttl?: SortOrder
    py_mtd?: SortOrder
  }

  export type TrHdSumOrderByAggregateInput = {
    oid?: SortOrder
    cid?: SortOrder
    ttl?: SortOrder
  }

  export type TrHdCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TrHdCreateWithoutCustomerInput, TrHdUncheckedCreateWithoutCustomerInput> | TrHdCreateWithoutCustomerInput[] | TrHdUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TrHdCreateOrConnectWithoutCustomerInput | TrHdCreateOrConnectWithoutCustomerInput[]
    createMany?: TrHdCreateManyCustomerInputEnvelope
    connect?: TrHdWhereUniqueInput | TrHdWhereUniqueInput[]
  }

  export type TrHdUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TrHdCreateWithoutCustomerInput, TrHdUncheckedCreateWithoutCustomerInput> | TrHdCreateWithoutCustomerInput[] | TrHdUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TrHdCreateOrConnectWithoutCustomerInput | TrHdCreateOrConnectWithoutCustomerInput[]
    createMany?: TrHdCreateManyCustomerInputEnvelope
    connect?: TrHdWhereUniqueInput | TrHdWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TrHdUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TrHdCreateWithoutCustomerInput, TrHdUncheckedCreateWithoutCustomerInput> | TrHdCreateWithoutCustomerInput[] | TrHdUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TrHdCreateOrConnectWithoutCustomerInput | TrHdCreateOrConnectWithoutCustomerInput[]
    upsert?: TrHdUpsertWithWhereUniqueWithoutCustomerInput | TrHdUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TrHdCreateManyCustomerInputEnvelope
    set?: TrHdWhereUniqueInput | TrHdWhereUniqueInput[]
    disconnect?: TrHdWhereUniqueInput | TrHdWhereUniqueInput[]
    delete?: TrHdWhereUniqueInput | TrHdWhereUniqueInput[]
    connect?: TrHdWhereUniqueInput | TrHdWhereUniqueInput[]
    update?: TrHdUpdateWithWhereUniqueWithoutCustomerInput | TrHdUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TrHdUpdateManyWithWhereWithoutCustomerInput | TrHdUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TrHdScalarWhereInput | TrHdScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TrHdUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TrHdCreateWithoutCustomerInput, TrHdUncheckedCreateWithoutCustomerInput> | TrHdCreateWithoutCustomerInput[] | TrHdUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TrHdCreateOrConnectWithoutCustomerInput | TrHdCreateOrConnectWithoutCustomerInput[]
    upsert?: TrHdUpsertWithWhereUniqueWithoutCustomerInput | TrHdUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TrHdCreateManyCustomerInputEnvelope
    set?: TrHdWhereUniqueInput | TrHdWhereUniqueInput[]
    disconnect?: TrHdWhereUniqueInput | TrHdWhereUniqueInput[]
    delete?: TrHdWhereUniqueInput | TrHdWhereUniqueInput[]
    connect?: TrHdWhereUniqueInput | TrHdWhereUniqueInput[]
    update?: TrHdUpdateWithWhereUniqueWithoutCustomerInput | TrHdUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TrHdUpdateManyWithWhereWithoutCustomerInput | TrHdUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TrHdScalarWhereInput | TrHdScalarWhereInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CustInfoCreateNestedOneWithoutTrHdInput = {
    create?: XOR<CustInfoCreateWithoutTrHdInput, CustInfoUncheckedCreateWithoutTrHdInput>
    connectOrCreate?: CustInfoCreateOrConnectWithoutTrHdInput
    connect?: CustInfoWhereUniqueInput
  }

  export type CustInfoUpdateOneRequiredWithoutTrHdNestedInput = {
    create?: XOR<CustInfoCreateWithoutTrHdInput, CustInfoUncheckedCreateWithoutTrHdInput>
    connectOrCreate?: CustInfoCreateOrConnectWithoutTrHdInput
    upsert?: CustInfoUpsertWithoutTrHdInput
    connect?: CustInfoWhereUniqueInput
    update?: XOR<XOR<CustInfoUpdateToOneWithWhereWithoutTrHdInput, CustInfoUpdateWithoutTrHdInput>, CustInfoUncheckedUpdateWithoutTrHdInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type TrHdCreateWithoutCustomerInput = {
    o_dt: Date | string
    sts: string
    ttl: Decimal | DecimalJsLike | number | string
    py_mtd: string
  }

  export type TrHdUncheckedCreateWithoutCustomerInput = {
    oid?: number
    o_dt: Date | string
    sts: string
    ttl: Decimal | DecimalJsLike | number | string
    py_mtd: string
  }

  export type TrHdCreateOrConnectWithoutCustomerInput = {
    where: TrHdWhereUniqueInput
    create: XOR<TrHdCreateWithoutCustomerInput, TrHdUncheckedCreateWithoutCustomerInput>
  }

  export type TrHdCreateManyCustomerInputEnvelope = {
    data: TrHdCreateManyCustomerInput | TrHdCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type TrHdUpsertWithWhereUniqueWithoutCustomerInput = {
    where: TrHdWhereUniqueInput
    update: XOR<TrHdUpdateWithoutCustomerInput, TrHdUncheckedUpdateWithoutCustomerInput>
    create: XOR<TrHdCreateWithoutCustomerInput, TrHdUncheckedCreateWithoutCustomerInput>
  }

  export type TrHdUpdateWithWhereUniqueWithoutCustomerInput = {
    where: TrHdWhereUniqueInput
    data: XOR<TrHdUpdateWithoutCustomerInput, TrHdUncheckedUpdateWithoutCustomerInput>
  }

  export type TrHdUpdateManyWithWhereWithoutCustomerInput = {
    where: TrHdScalarWhereInput
    data: XOR<TrHdUpdateManyMutationInput, TrHdUncheckedUpdateManyWithoutCustomerInput>
  }

  export type TrHdScalarWhereInput = {
    AND?: TrHdScalarWhereInput | TrHdScalarWhereInput[]
    OR?: TrHdScalarWhereInput[]
    NOT?: TrHdScalarWhereInput | TrHdScalarWhereInput[]
    oid?: IntFilter<"TrHd"> | number
    cid?: IntFilter<"TrHd"> | number
    o_dt?: DateTimeFilter<"TrHd"> | Date | string
    sts?: StringFilter<"TrHd"> | string
    ttl?: DecimalFilter<"TrHd"> | Decimal | DecimalJsLike | number | string
    py_mtd?: StringFilter<"TrHd"> | string
  }

  export type CustInfoCreateWithoutTrHdInput = {
    nm: string
    em: string
    rgn?: string | null
    sgmt: string
    jn_dt: Date | string
    act?: boolean
  }

  export type CustInfoUncheckedCreateWithoutTrHdInput = {
    cid?: number
    nm: string
    em: string
    rgn?: string | null
    sgmt: string
    jn_dt: Date | string
    act?: boolean
  }

  export type CustInfoCreateOrConnectWithoutTrHdInput = {
    where: CustInfoWhereUniqueInput
    create: XOR<CustInfoCreateWithoutTrHdInput, CustInfoUncheckedCreateWithoutTrHdInput>
  }

  export type CustInfoUpsertWithoutTrHdInput = {
    update: XOR<CustInfoUpdateWithoutTrHdInput, CustInfoUncheckedUpdateWithoutTrHdInput>
    create: XOR<CustInfoCreateWithoutTrHdInput, CustInfoUncheckedCreateWithoutTrHdInput>
    where?: CustInfoWhereInput
  }

  export type CustInfoUpdateToOneWithWhereWithoutTrHdInput = {
    where?: CustInfoWhereInput
    data: XOR<CustInfoUpdateWithoutTrHdInput, CustInfoUncheckedUpdateWithoutTrHdInput>
  }

  export type CustInfoUpdateWithoutTrHdInput = {
    nm?: StringFieldUpdateOperationsInput | string
    em?: StringFieldUpdateOperationsInput | string
    rgn?: NullableStringFieldUpdateOperationsInput | string | null
    sgmt?: StringFieldUpdateOperationsInput | string
    jn_dt?: DateTimeFieldUpdateOperationsInput | Date | string
    act?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustInfoUncheckedUpdateWithoutTrHdInput = {
    cid?: IntFieldUpdateOperationsInput | number
    nm?: StringFieldUpdateOperationsInput | string
    em?: StringFieldUpdateOperationsInput | string
    rgn?: NullableStringFieldUpdateOperationsInput | string | null
    sgmt?: StringFieldUpdateOperationsInput | string
    jn_dt?: DateTimeFieldUpdateOperationsInput | Date | string
    act?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrHdCreateManyCustomerInput = {
    oid?: number
    o_dt: Date | string
    sts: string
    ttl: Decimal | DecimalJsLike | number | string
    py_mtd: string
  }

  export type TrHdUpdateWithoutCustomerInput = {
    o_dt?: DateTimeFieldUpdateOperationsInput | Date | string
    sts?: StringFieldUpdateOperationsInput | string
    ttl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    py_mtd?: StringFieldUpdateOperationsInput | string
  }

  export type TrHdUncheckedUpdateWithoutCustomerInput = {
    oid?: IntFieldUpdateOperationsInput | number
    o_dt?: DateTimeFieldUpdateOperationsInput | Date | string
    sts?: StringFieldUpdateOperationsInput | string
    ttl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    py_mtd?: StringFieldUpdateOperationsInput | string
  }

  export type TrHdUncheckedUpdateManyWithoutCustomerInput = {
    oid?: IntFieldUpdateOperationsInput | number
    o_dt?: DateTimeFieldUpdateOperationsInput | Date | string
    sts?: StringFieldUpdateOperationsInput | string
    ttl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    py_mtd?: StringFieldUpdateOperationsInput | string
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