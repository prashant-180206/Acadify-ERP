
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
 * Model course
 * 
 */
export type course = $Result.DefaultSelection<Prisma.$coursePayload>
/**
 * Model department
 * 
 */
export type department = $Result.DefaultSelection<Prisma.$departmentPayload>
/**
 * Model students
 * 
 */
export type students = $Result.DefaultSelection<Prisma.$studentsPayload>
/**
 * Model teacher
 * 
 */
export type teacher = $Result.DefaultSelection<Prisma.$teacherPayload>
/**
 * Model teacher_course
 * 
 */
export type teacher_course = $Result.DefaultSelection<Prisma.$teacher_coursePayload>
/**
 * Model lecture
 * 
 */
export type lecture = $Result.DefaultSelection<Prisma.$lecturePayload>
/**
 * Model attendance
 * 
 */
export type attendance = $Result.DefaultSelection<Prisma.$attendancePayload>
/**
 * Model assignment_submission
 * 
 */
export type assignment_submission = $Result.DefaultSelection<Prisma.$assignment_submissionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const gender: {
  Male: 'Male',
  Female: 'Female',
  Other: 'Other'
};

export type gender = (typeof gender)[keyof typeof gender]


export const teacher_designation: {
  Lecturer: 'Lecturer',
  HOD: 'HOD'
};

export type teacher_designation = (typeof teacher_designation)[keyof typeof teacher_designation]

}

export type gender = $Enums.gender

export const gender: typeof $Enums.gender

export type teacher_designation = $Enums.teacher_designation

export const teacher_designation: typeof $Enums.teacher_designation

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Courses
 * const courses = await prisma.course.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Courses
   * const courses = await prisma.course.findMany()
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
   * `prisma.course`: Exposes CRUD operations for the **course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.courseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.departmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.students`: Exposes CRUD operations for the **students** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.students.findMany()
    * ```
    */
  get students(): Prisma.studentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.teacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher_course`: Exposes CRUD operations for the **teacher_course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teacher_courses
    * const teacher_courses = await prisma.teacher_course.findMany()
    * ```
    */
  get teacher_course(): Prisma.teacher_courseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lecture`: Exposes CRUD operations for the **lecture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lectures
    * const lectures = await prisma.lecture.findMany()
    * ```
    */
  get lecture(): Prisma.lectureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.attendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment_submission`: Exposes CRUD operations for the **assignment_submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignment_submissions
    * const assignment_submissions = await prisma.assignment_submission.findMany()
    * ```
    */
  get assignment_submission(): Prisma.assignment_submissionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    course: 'course',
    department: 'department',
    students: 'students',
    teacher: 'teacher',
    teacher_course: 'teacher_course',
    lecture: 'lecture',
    attendance: 'attendance',
    assignment_submission: 'assignment_submission'
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
      modelProps: "course" | "department" | "students" | "teacher" | "teacher_course" | "lecture" | "attendance" | "assignment_submission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      course: {
        payload: Prisma.$coursePayload<ExtArgs>
        fields: Prisma.courseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.courseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.courseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findFirst: {
            args: Prisma.courseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.courseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findMany: {
            args: Prisma.courseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          create: {
            args: Prisma.courseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          createMany: {
            args: Prisma.courseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.courseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          update: {
            args: Prisma.courseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          deleteMany: {
            args: Prisma.courseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.courseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.courseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.courseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.courseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      department: {
        payload: Prisma.$departmentPayload<ExtArgs>
        fields: Prisma.departmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.departmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.departmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          findFirst: {
            args: Prisma.departmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.departmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          findMany: {
            args: Prisma.departmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>[]
          }
          create: {
            args: Prisma.departmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          createMany: {
            args: Prisma.departmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.departmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          update: {
            args: Prisma.departmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          deleteMany: {
            args: Prisma.departmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.departmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.departmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.departmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.departmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      students: {
        payload: Prisma.$studentsPayload<ExtArgs>
        fields: Prisma.studentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          findFirst: {
            args: Prisma.studentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          findMany: {
            args: Prisma.studentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>[]
          }
          create: {
            args: Prisma.studentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          createMany: {
            args: Prisma.studentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.studentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          update: {
            args: Prisma.studentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          deleteMany: {
            args: Prisma.studentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.studentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentsPayload>
          }
          aggregate: {
            args: Prisma.StudentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudents>
          }
          groupBy: {
            args: Prisma.studentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentsCountArgs<ExtArgs>
            result: $Utils.Optional<StudentsCountAggregateOutputType> | number
          }
        }
      }
      teacher: {
        payload: Prisma.$teacherPayload<ExtArgs>
        fields: Prisma.teacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          findFirst: {
            args: Prisma.teacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          findMany: {
            args: Prisma.teacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>[]
          }
          create: {
            args: Prisma.teacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          createMany: {
            args: Prisma.teacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.teacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          update: {
            args: Prisma.teacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          deleteMany: {
            args: Prisma.teacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.teacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.teacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.teacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      teacher_course: {
        payload: Prisma.$teacher_coursePayload<ExtArgs>
        fields: Prisma.teacher_courseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teacher_courseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacher_coursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teacher_courseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacher_coursePayload>
          }
          findFirst: {
            args: Prisma.teacher_courseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacher_coursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teacher_courseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacher_coursePayload>
          }
          findMany: {
            args: Prisma.teacher_courseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacher_coursePayload>[]
          }
          create: {
            args: Prisma.teacher_courseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacher_coursePayload>
          }
          createMany: {
            args: Prisma.teacher_courseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.teacher_courseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacher_coursePayload>
          }
          update: {
            args: Prisma.teacher_courseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacher_coursePayload>
          }
          deleteMany: {
            args: Prisma.teacher_courseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teacher_courseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.teacher_courseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teacher_coursePayload>
          }
          aggregate: {
            args: Prisma.Teacher_courseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher_course>
          }
          groupBy: {
            args: Prisma.teacher_courseGroupByArgs<ExtArgs>
            result: $Utils.Optional<Teacher_courseGroupByOutputType>[]
          }
          count: {
            args: Prisma.teacher_courseCountArgs<ExtArgs>
            result: $Utils.Optional<Teacher_courseCountAggregateOutputType> | number
          }
        }
      }
      lecture: {
        payload: Prisma.$lecturePayload<ExtArgs>
        fields: Prisma.lectureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lectureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lectureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>
          }
          findFirst: {
            args: Prisma.lectureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lectureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>
          }
          findMany: {
            args: Prisma.lectureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>[]
          }
          create: {
            args: Prisma.lectureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>
          }
          createMany: {
            args: Prisma.lectureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.lectureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>
          }
          update: {
            args: Prisma.lectureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>
          }
          deleteMany: {
            args: Prisma.lectureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lectureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.lectureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>
          }
          aggregate: {
            args: Prisma.LectureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecture>
          }
          groupBy: {
            args: Prisma.lectureGroupByArgs<ExtArgs>
            result: $Utils.Optional<LectureGroupByOutputType>[]
          }
          count: {
            args: Prisma.lectureCountArgs<ExtArgs>
            result: $Utils.Optional<LectureCountAggregateOutputType> | number
          }
        }
      }
      attendance: {
        payload: Prisma.$attendancePayload<ExtArgs>
        fields: Prisma.attendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.attendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.attendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          findFirst: {
            args: Prisma.attendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.attendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          findMany: {
            args: Prisma.attendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>[]
          }
          create: {
            args: Prisma.attendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          createMany: {
            args: Prisma.attendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.attendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          update: {
            args: Prisma.attendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          deleteMany: {
            args: Prisma.attendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.attendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.attendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.attendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.attendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      assignment_submission: {
        payload: Prisma.$assignment_submissionPayload<ExtArgs>
        fields: Prisma.assignment_submissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.assignment_submissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignment_submissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.assignment_submissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignment_submissionPayload>
          }
          findFirst: {
            args: Prisma.assignment_submissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignment_submissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.assignment_submissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignment_submissionPayload>
          }
          findMany: {
            args: Prisma.assignment_submissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignment_submissionPayload>[]
          }
          create: {
            args: Prisma.assignment_submissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignment_submissionPayload>
          }
          createMany: {
            args: Prisma.assignment_submissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.assignment_submissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignment_submissionPayload>
          }
          update: {
            args: Prisma.assignment_submissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignment_submissionPayload>
          }
          deleteMany: {
            args: Prisma.assignment_submissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.assignment_submissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.assignment_submissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assignment_submissionPayload>
          }
          aggregate: {
            args: Prisma.Assignment_submissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment_submission>
          }
          groupBy: {
            args: Prisma.assignment_submissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Assignment_submissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.assignment_submissionCountArgs<ExtArgs>
            result: $Utils.Optional<Assignment_submissionCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    course?: courseOmit
    department?: departmentOmit
    students?: studentsOmit
    teacher?: teacherOmit
    teacher_course?: teacher_courseOmit
    lecture?: lectureOmit
    attendance?: attendanceOmit
    assignment_submission?: assignment_submissionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    teacher_courses: number
    lectures: number
    attendances: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher_courses?: boolean | CourseCountOutputTypeCountTeacher_coursesArgs
    lectures?: boolean | CourseCountOutputTypeCountLecturesArgs
    attendances?: boolean | CourseCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountTeacher_coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teacher_courseWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountLecturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lectureWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendanceWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    teacher_courses: number
    lectures: number
    attendances: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher_courses?: boolean | TeacherCountOutputTypeCountTeacher_coursesArgs
    lectures?: boolean | TeacherCountOutputTypeCountLecturesArgs
    attendances?: boolean | TeacherCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountTeacher_coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teacher_courseWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountLecturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lectureWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    course_id: number | null
    credits: number | null
    num_lectures: number | null
    department_id: number | null
    semester: number | null
  }

  export type CourseSumAggregateOutputType = {
    course_id: number | null
    credits: number | null
    num_lectures: number | null
    department_id: number | null
    semester: number | null
  }

  export type CourseMinAggregateOutputType = {
    course_id: number | null
    course_name: string | null
    credits: number | null
    num_lectures: number | null
    department_id: number | null
    semester: number | null
  }

  export type CourseMaxAggregateOutputType = {
    course_id: number | null
    course_name: string | null
    credits: number | null
    num_lectures: number | null
    department_id: number | null
    semester: number | null
  }

  export type CourseCountAggregateOutputType = {
    course_id: number
    course_name: number
    credits: number
    num_lectures: number
    department_id: number
    semester: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    course_id?: true
    credits?: true
    num_lectures?: true
    department_id?: true
    semester?: true
  }

  export type CourseSumAggregateInputType = {
    course_id?: true
    credits?: true
    num_lectures?: true
    department_id?: true
    semester?: true
  }

  export type CourseMinAggregateInputType = {
    course_id?: true
    course_name?: true
    credits?: true
    num_lectures?: true
    department_id?: true
    semester?: true
  }

  export type CourseMaxAggregateInputType = {
    course_id?: true
    course_name?: true
    credits?: true
    num_lectures?: true
    department_id?: true
    semester?: true
  }

  export type CourseCountAggregateInputType = {
    course_id?: true
    course_name?: true
    credits?: true
    num_lectures?: true
    department_id?: true
    semester?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course to aggregate.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type courseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput
    orderBy?: courseOrderByWithAggregationInput | courseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: courseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    course_id: number
    course_name: string | null
    credits: number | null
    num_lectures: number | null
    department_id: number | null
    semester: number | null
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends courseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type courseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    course_id?: boolean
    course_name?: boolean
    credits?: boolean
    num_lectures?: boolean
    department_id?: boolean
    semester?: boolean
    teacher_courses?: boolean | course$teacher_coursesArgs<ExtArgs>
    lectures?: boolean | course$lecturesArgs<ExtArgs>
    attendances?: boolean | course$attendancesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>



  export type courseSelectScalar = {
    course_id?: boolean
    course_name?: boolean
    credits?: boolean
    num_lectures?: boolean
    department_id?: boolean
    semester?: boolean
  }

  export type courseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"course_id" | "course_name" | "credits" | "num_lectures" | "department_id" | "semester", ExtArgs["result"]["course"]>
  export type courseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher_courses?: boolean | course$teacher_coursesArgs<ExtArgs>
    lectures?: boolean | course$lecturesArgs<ExtArgs>
    attendances?: boolean | course$attendancesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $coursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course"
    objects: {
      teacher_courses: Prisma.$teacher_coursePayload<ExtArgs>[]
      lectures: Prisma.$lecturePayload<ExtArgs>[]
      attendances: Prisma.$attendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      course_id: number
      course_name: string | null
      credits: number | null
      num_lectures: number | null
      department_id: number | null
      semester: number | null
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type courseGetPayload<S extends boolean | null | undefined | courseDefaultArgs> = $Result.GetResult<Prisma.$coursePayload, S>

  type courseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<courseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface courseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course'], meta: { name: 'course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {courseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends courseFindUniqueArgs>(args: SelectSubset<T, courseFindUniqueArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {courseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends courseFindUniqueOrThrowArgs>(args: SelectSubset<T, courseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends courseFindFirstArgs>(args?: SelectSubset<T, courseFindFirstArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends courseFindFirstOrThrowArgs>(args?: SelectSubset<T, courseFindFirstOrThrowArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `course_id`
     * const courseWithCourse_idOnly = await prisma.course.findMany({ select: { course_id: true } })
     * 
     */
    findMany<T extends courseFindManyArgs>(args?: SelectSubset<T, courseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {courseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends courseCreateArgs>(args: SelectSubset<T, courseCreateArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {courseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends courseCreateManyArgs>(args?: SelectSubset<T, courseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {courseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends courseDeleteArgs>(args: SelectSubset<T, courseDeleteArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {courseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends courseUpdateArgs>(args: SelectSubset<T, courseUpdateArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {courseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends courseDeleteManyArgs>(args?: SelectSubset<T, courseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends courseUpdateManyArgs>(args: SelectSubset<T, courseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {courseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends courseUpsertArgs>(args: SelectSubset<T, courseUpsertArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends courseCountArgs>(
      args?: Subset<T, courseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseGroupByArgs} args - Group by arguments.
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
      T extends courseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: courseGroupByArgs['orderBy'] }
        : { orderBy?: courseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, courseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course model
   */
  readonly fields: courseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__courseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher_courses<T extends course$teacher_coursesArgs<ExtArgs> = {}>(args?: Subset<T, course$teacher_coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacher_coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lectures<T extends course$lecturesArgs<ExtArgs> = {}>(args?: Subset<T, course$lecturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendances<T extends course$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, course$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the course model
   */
  interface courseFieldRefs {
    readonly course_id: FieldRef<"course", 'Int'>
    readonly course_name: FieldRef<"course", 'String'>
    readonly credits: FieldRef<"course", 'Int'>
    readonly num_lectures: FieldRef<"course", 'Int'>
    readonly department_id: FieldRef<"course", 'Int'>
    readonly semester: FieldRef<"course", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * course findUnique
   */
  export type courseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course findUniqueOrThrow
   */
  export type courseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course findFirst
   */
  export type courseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course findFirstOrThrow
   */
  export type courseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course findMany
   */
  export type courseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course create
   */
  export type courseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to create a course.
     */
    data: XOR<courseCreateInput, courseUncheckedCreateInput>
  }

  /**
   * course createMany
   */
  export type courseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course update
   */
  export type courseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to update a course.
     */
    data: XOR<courseUpdateInput, courseUncheckedUpdateInput>
    /**
     * Choose, which course to update.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course updateMany
   */
  export type courseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
  }

  /**
   * course upsert
   */
  export type courseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The filter to search for the course to update in case it exists.
     */
    where: courseWhereUniqueInput
    /**
     * In case the course found by the `where` argument doesn't exist, create a new course with this data.
     */
    create: XOR<courseCreateInput, courseUncheckedCreateInput>
    /**
     * In case the course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<courseUpdateInput, courseUncheckedUpdateInput>
  }

  /**
   * course delete
   */
  export type courseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter which course to delete.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course deleteMany
   */
  export type courseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to delete
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to delete.
     */
    limit?: number
  }

  /**
   * course.teacher_courses
   */
  export type course$teacher_coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_course
     */
    select?: teacher_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher_course
     */
    omit?: teacher_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_courseInclude<ExtArgs> | null
    where?: teacher_courseWhereInput
    orderBy?: teacher_courseOrderByWithRelationInput | teacher_courseOrderByWithRelationInput[]
    cursor?: teacher_courseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Teacher_courseScalarFieldEnum | Teacher_courseScalarFieldEnum[]
  }

  /**
   * course.lectures
   */
  export type course$lecturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    where?: lectureWhereInput
    orderBy?: lectureOrderByWithRelationInput | lectureOrderByWithRelationInput[]
    cursor?: lectureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * course.attendances
   */
  export type course$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    where?: attendanceWhereInput
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    cursor?: attendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * course without action
   */
  export type courseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
  }


  /**
   * Model department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    d_id: number | null
    HodId: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    d_id: number | null
    HodId: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    d_id: number | null
    name: string | null
    HodId: number | null
    Email: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    d_id: number | null
    name: string | null
    HodId: number | null
    Email: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    d_id: number
    name: number
    HodId: number
    Email: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    d_id?: true
    HodId?: true
  }

  export type DepartmentSumAggregateInputType = {
    d_id?: true
    HodId?: true
  }

  export type DepartmentMinAggregateInputType = {
    d_id?: true
    name?: true
    HodId?: true
    Email?: true
  }

  export type DepartmentMaxAggregateInputType = {
    d_id?: true
    name?: true
    HodId?: true
    Email?: true
  }

  export type DepartmentCountAggregateInputType = {
    d_id?: true
    name?: true
    HodId?: true
    Email?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which department to aggregate.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type departmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: departmentWhereInput
    orderBy?: departmentOrderByWithAggregationInput | departmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: departmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    d_id: number
    name: string
    HodId: number | null
    Email: string | null
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends departmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type departmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    d_id?: boolean
    name?: boolean
    HodId?: boolean
    Email?: boolean
  }, ExtArgs["result"]["department"]>



  export type departmentSelectScalar = {
    d_id?: boolean
    name?: boolean
    HodId?: boolean
    Email?: boolean
  }

  export type departmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"d_id" | "name" | "HodId" | "Email", ExtArgs["result"]["department"]>

  export type $departmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "department"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      d_id: number
      name: string
      HodId: number | null
      Email: string | null
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type departmentGetPayload<S extends boolean | null | undefined | departmentDefaultArgs> = $Result.GetResult<Prisma.$departmentPayload, S>

  type departmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<departmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface departmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['department'], meta: { name: 'department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {departmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends departmentFindUniqueArgs>(args: SelectSubset<T, departmentFindUniqueArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {departmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends departmentFindUniqueOrThrowArgs>(args: SelectSubset<T, departmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends departmentFindFirstArgs>(args?: SelectSubset<T, departmentFindFirstArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends departmentFindFirstOrThrowArgs>(args?: SelectSubset<T, departmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `d_id`
     * const departmentWithD_idOnly = await prisma.department.findMany({ select: { d_id: true } })
     * 
     */
    findMany<T extends departmentFindManyArgs>(args?: SelectSubset<T, departmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {departmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends departmentCreateArgs>(args: SelectSubset<T, departmentCreateArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {departmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends departmentCreateManyArgs>(args?: SelectSubset<T, departmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Department.
     * @param {departmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends departmentDeleteArgs>(args: SelectSubset<T, departmentDeleteArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {departmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends departmentUpdateArgs>(args: SelectSubset<T, departmentUpdateArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {departmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends departmentDeleteManyArgs>(args?: SelectSubset<T, departmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends departmentUpdateManyArgs>(args: SelectSubset<T, departmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Department.
     * @param {departmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends departmentUpsertArgs>(args: SelectSubset<T, departmentUpsertArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends departmentCountArgs>(
      args?: Subset<T, departmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentGroupByArgs} args - Group by arguments.
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
      T extends departmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: departmentGroupByArgs['orderBy'] }
        : { orderBy?: departmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, departmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the department model
   */
  readonly fields: departmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__departmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the department model
   */
  interface departmentFieldRefs {
    readonly d_id: FieldRef<"department", 'Int'>
    readonly name: FieldRef<"department", 'String'>
    readonly HodId: FieldRef<"department", 'Int'>
    readonly Email: FieldRef<"department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * department findUnique
   */
  export type departmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department findUniqueOrThrow
   */
  export type departmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department findFirst
   */
  export type departmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department findFirstOrThrow
   */
  export type departmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department findMany
   */
  export type departmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department create
   */
  export type departmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * The data needed to create a department.
     */
    data: XOR<departmentCreateInput, departmentUncheckedCreateInput>
  }

  /**
   * department createMany
   */
  export type departmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many departments.
     */
    data: departmentCreateManyInput | departmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * department update
   */
  export type departmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * The data needed to update a department.
     */
    data: XOR<departmentUpdateInput, departmentUncheckedUpdateInput>
    /**
     * Choose, which department to update.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department updateMany
   */
  export type departmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update departments.
     */
    data: XOR<departmentUpdateManyMutationInput, departmentUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentWhereInput
    /**
     * Limit how many departments to update.
     */
    limit?: number
  }

  /**
   * department upsert
   */
  export type departmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * The filter to search for the department to update in case it exists.
     */
    where: departmentWhereUniqueInput
    /**
     * In case the department found by the `where` argument doesn't exist, create a new department with this data.
     */
    create: XOR<departmentCreateInput, departmentUncheckedCreateInput>
    /**
     * In case the department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<departmentUpdateInput, departmentUncheckedUpdateInput>
  }

  /**
   * department delete
   */
  export type departmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Filter which department to delete.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department deleteMany
   */
  export type departmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departments to delete
     */
    where?: departmentWhereInput
    /**
     * Limit how many departments to delete.
     */
    limit?: number
  }

  /**
   * department without action
   */
  export type departmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
  }


  /**
   * Model students
   */

  export type AggregateStudents = {
    _count: StudentsCountAggregateOutputType | null
    _avg: StudentsAvgAggregateOutputType | null
    _sum: StudentsSumAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  export type StudentsAvgAggregateOutputType = {
    PRN_Number: number | null
    Department_id: number | null
    HSC_Score: number | null
    CET_Percentile: number | null
    Year: number | null
  }

  export type StudentsSumAggregateOutputType = {
    PRN_Number: number | null
    Department_id: number | null
    HSC_Score: number | null
    CET_Percentile: number | null
    Year: number | null
  }

  export type StudentsMinAggregateOutputType = {
    PRN_Number: number | null
    Password: string | null
    First_Name: string | null
    Middle_Name: string | null
    Last_Name: string | null
    Name: string | null
    Mothers_Name: string | null
    Email: string | null
    Gender: $Enums.gender | null
    Date_of_Birth: Date | null
    Date_of_Admission: Date | null
    Street_and_House: string | null
    City: string | null
    State: string | null
    PIN_Code: string | null
    Contact_Number: string | null
    Aadhar_Card_Number: string | null
    Department_id: number | null
    Class: string | null
    Roll_No: string | null
    HSC_Score: number | null
    CET_Percentile: number | null
    Semester: string | null
    Category: string | null
    Year: number | null
  }

  export type StudentsMaxAggregateOutputType = {
    PRN_Number: number | null
    Password: string | null
    First_Name: string | null
    Middle_Name: string | null
    Last_Name: string | null
    Name: string | null
    Mothers_Name: string | null
    Email: string | null
    Gender: $Enums.gender | null
    Date_of_Birth: Date | null
    Date_of_Admission: Date | null
    Street_and_House: string | null
    City: string | null
    State: string | null
    PIN_Code: string | null
    Contact_Number: string | null
    Aadhar_Card_Number: string | null
    Department_id: number | null
    Class: string | null
    Roll_No: string | null
    HSC_Score: number | null
    CET_Percentile: number | null
    Semester: string | null
    Category: string | null
    Year: number | null
  }

  export type StudentsCountAggregateOutputType = {
    PRN_Number: number
    Password: number
    First_Name: number
    Middle_Name: number
    Last_Name: number
    Name: number
    Mothers_Name: number
    Email: number
    Gender: number
    Date_of_Birth: number
    Date_of_Admission: number
    Street_and_House: number
    City: number
    State: number
    PIN_Code: number
    Contact_Number: number
    Aadhar_Card_Number: number
    Department_id: number
    Class: number
    Roll_No: number
    HSC_Score: number
    CET_Percentile: number
    Semester: number
    Category: number
    Year: number
    _all: number
  }


  export type StudentsAvgAggregateInputType = {
    PRN_Number?: true
    Department_id?: true
    HSC_Score?: true
    CET_Percentile?: true
    Year?: true
  }

  export type StudentsSumAggregateInputType = {
    PRN_Number?: true
    Department_id?: true
    HSC_Score?: true
    CET_Percentile?: true
    Year?: true
  }

  export type StudentsMinAggregateInputType = {
    PRN_Number?: true
    Password?: true
    First_Name?: true
    Middle_Name?: true
    Last_Name?: true
    Name?: true
    Mothers_Name?: true
    Email?: true
    Gender?: true
    Date_of_Birth?: true
    Date_of_Admission?: true
    Street_and_House?: true
    City?: true
    State?: true
    PIN_Code?: true
    Contact_Number?: true
    Aadhar_Card_Number?: true
    Department_id?: true
    Class?: true
    Roll_No?: true
    HSC_Score?: true
    CET_Percentile?: true
    Semester?: true
    Category?: true
    Year?: true
  }

  export type StudentsMaxAggregateInputType = {
    PRN_Number?: true
    Password?: true
    First_Name?: true
    Middle_Name?: true
    Last_Name?: true
    Name?: true
    Mothers_Name?: true
    Email?: true
    Gender?: true
    Date_of_Birth?: true
    Date_of_Admission?: true
    Street_and_House?: true
    City?: true
    State?: true
    PIN_Code?: true
    Contact_Number?: true
    Aadhar_Card_Number?: true
    Department_id?: true
    Class?: true
    Roll_No?: true
    HSC_Score?: true
    CET_Percentile?: true
    Semester?: true
    Category?: true
    Year?: true
  }

  export type StudentsCountAggregateInputType = {
    PRN_Number?: true
    Password?: true
    First_Name?: true
    Middle_Name?: true
    Last_Name?: true
    Name?: true
    Mothers_Name?: true
    Email?: true
    Gender?: true
    Date_of_Birth?: true
    Date_of_Admission?: true
    Street_and_House?: true
    City?: true
    State?: true
    PIN_Code?: true
    Contact_Number?: true
    Aadhar_Card_Number?: true
    Department_id?: true
    Class?: true
    Roll_No?: true
    HSC_Score?: true
    CET_Percentile?: true
    Semester?: true
    Category?: true
    Year?: true
    _all?: true
  }

  export type StudentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to aggregate.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentsMaxAggregateInputType
  }

  export type GetStudentsAggregateType<T extends StudentsAggregateArgs> = {
        [P in keyof T & keyof AggregateStudents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudents[P]>
      : GetScalarType<T[P], AggregateStudents[P]>
  }




  export type studentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentsWhereInput
    orderBy?: studentsOrderByWithAggregationInput | studentsOrderByWithAggregationInput[]
    by: StudentsScalarFieldEnum[] | StudentsScalarFieldEnum
    having?: studentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentsCountAggregateInputType | true
    _avg?: StudentsAvgAggregateInputType
    _sum?: StudentsSumAggregateInputType
    _min?: StudentsMinAggregateInputType
    _max?: StudentsMaxAggregateInputType
  }

  export type StudentsGroupByOutputType = {
    PRN_Number: number
    Password: string | null
    First_Name: string | null
    Middle_Name: string | null
    Last_Name: string | null
    Name: string | null
    Mothers_Name: string | null
    Email: string | null
    Gender: $Enums.gender | null
    Date_of_Birth: Date | null
    Date_of_Admission: Date | null
    Street_and_House: string | null
    City: string | null
    State: string | null
    PIN_Code: string | null
    Contact_Number: string | null
    Aadhar_Card_Number: string | null
    Department_id: number | null
    Class: string | null
    Roll_No: string | null
    HSC_Score: number | null
    CET_Percentile: number | null
    Semester: string | null
    Category: string | null
    Year: number | null
    _count: StudentsCountAggregateOutputType | null
    _avg: StudentsAvgAggregateOutputType | null
    _sum: StudentsSumAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  type GetStudentsGroupByPayload<T extends studentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentsGroupByOutputType[P]>
            : GetScalarType<T[P], StudentsGroupByOutputType[P]>
        }
      >
    >


  export type studentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PRN_Number?: boolean
    Password?: boolean
    First_Name?: boolean
    Middle_Name?: boolean
    Last_Name?: boolean
    Name?: boolean
    Mothers_Name?: boolean
    Email?: boolean
    Gender?: boolean
    Date_of_Birth?: boolean
    Date_of_Admission?: boolean
    Street_and_House?: boolean
    City?: boolean
    State?: boolean
    PIN_Code?: boolean
    Contact_Number?: boolean
    Aadhar_Card_Number?: boolean
    Department_id?: boolean
    Class?: boolean
    Roll_No?: boolean
    HSC_Score?: boolean
    CET_Percentile?: boolean
    Semester?: boolean
    Category?: boolean
    Year?: boolean
  }, ExtArgs["result"]["students"]>



  export type studentsSelectScalar = {
    PRN_Number?: boolean
    Password?: boolean
    First_Name?: boolean
    Middle_Name?: boolean
    Last_Name?: boolean
    Name?: boolean
    Mothers_Name?: boolean
    Email?: boolean
    Gender?: boolean
    Date_of_Birth?: boolean
    Date_of_Admission?: boolean
    Street_and_House?: boolean
    City?: boolean
    State?: boolean
    PIN_Code?: boolean
    Contact_Number?: boolean
    Aadhar_Card_Number?: boolean
    Department_id?: boolean
    Class?: boolean
    Roll_No?: boolean
    HSC_Score?: boolean
    CET_Percentile?: boolean
    Semester?: boolean
    Category?: boolean
    Year?: boolean
  }

  export type studentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PRN_Number" | "Password" | "First_Name" | "Middle_Name" | "Last_Name" | "Name" | "Mothers_Name" | "Email" | "Gender" | "Date_of_Birth" | "Date_of_Admission" | "Street_and_House" | "City" | "State" | "PIN_Code" | "Contact_Number" | "Aadhar_Card_Number" | "Department_id" | "Class" | "Roll_No" | "HSC_Score" | "CET_Percentile" | "Semester" | "Category" | "Year", ExtArgs["result"]["students"]>

  export type $studentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "students"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      PRN_Number: number
      Password: string | null
      First_Name: string | null
      Middle_Name: string | null
      Last_Name: string | null
      Name: string | null
      Mothers_Name: string | null
      Email: string | null
      Gender: $Enums.gender | null
      Date_of_Birth: Date | null
      Date_of_Admission: Date | null
      Street_and_House: string | null
      City: string | null
      State: string | null
      PIN_Code: string | null
      Contact_Number: string | null
      Aadhar_Card_Number: string | null
      Department_id: number | null
      Class: string | null
      Roll_No: string | null
      HSC_Score: number | null
      CET_Percentile: number | null
      Semester: string | null
      Category: string | null
      Year: number | null
    }, ExtArgs["result"]["students"]>
    composites: {}
  }

  type studentsGetPayload<S extends boolean | null | undefined | studentsDefaultArgs> = $Result.GetResult<Prisma.$studentsPayload, S>

  type studentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentsCountAggregateInputType | true
    }

  export interface studentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['students'], meta: { name: 'students' } }
    /**
     * Find zero or one Students that matches the filter.
     * @param {studentsFindUniqueArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentsFindUniqueArgs>(args: SelectSubset<T, studentsFindUniqueArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Students that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentsFindUniqueOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentsFindUniqueOrThrowArgs>(args: SelectSubset<T, studentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentsFindFirstArgs>(args?: SelectSubset<T, studentsFindFirstArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentsFindFirstOrThrowArgs>(args?: SelectSubset<T, studentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.students.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.students.findMany({ take: 10 })
     * 
     * // Only select the `PRN_Number`
     * const studentsWithPRN_NumberOnly = await prisma.students.findMany({ select: { PRN_Number: true } })
     * 
     */
    findMany<T extends studentsFindManyArgs>(args?: SelectSubset<T, studentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Students.
     * @param {studentsCreateArgs} args - Arguments to create a Students.
     * @example
     * // Create one Students
     * const Students = await prisma.students.create({
     *   data: {
     *     // ... data to create a Students
     *   }
     * })
     * 
     */
    create<T extends studentsCreateArgs>(args: SelectSubset<T, studentsCreateArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {studentsCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studentsCreateManyArgs>(args?: SelectSubset<T, studentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Students.
     * @param {studentsDeleteArgs} args - Arguments to delete one Students.
     * @example
     * // Delete one Students
     * const Students = await prisma.students.delete({
     *   where: {
     *     // ... filter to delete one Students
     *   }
     * })
     * 
     */
    delete<T extends studentsDeleteArgs>(args: SelectSubset<T, studentsDeleteArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Students.
     * @param {studentsUpdateArgs} args - Arguments to update one Students.
     * @example
     * // Update one Students
     * const students = await prisma.students.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studentsUpdateArgs>(args: SelectSubset<T, studentsUpdateArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {studentsDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.students.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studentsDeleteManyArgs>(args?: SelectSubset<T, studentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studentsUpdateManyArgs>(args: SelectSubset<T, studentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Students.
     * @param {studentsUpsertArgs} args - Arguments to update or create a Students.
     * @example
     * // Update or create a Students
     * const students = await prisma.students.upsert({
     *   create: {
     *     // ... data to create a Students
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Students we want to update
     *   }
     * })
     */
    upsert<T extends studentsUpsertArgs>(args: SelectSubset<T, studentsUpsertArgs<ExtArgs>>): Prisma__studentsClient<$Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.students.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentsCountArgs>(
      args?: Subset<T, studentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentsAggregateArgs>(args: Subset<T, StudentsAggregateArgs>): Prisma.PrismaPromise<GetStudentsAggregateType<T>>

    /**
     * Group by Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsGroupByArgs} args - Group by arguments.
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
      T extends studentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentsGroupByArgs['orderBy'] }
        : { orderBy?: studentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, studentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the students model
   */
  readonly fields: studentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for students.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the students model
   */
  interface studentsFieldRefs {
    readonly PRN_Number: FieldRef<"students", 'Int'>
    readonly Password: FieldRef<"students", 'String'>
    readonly First_Name: FieldRef<"students", 'String'>
    readonly Middle_Name: FieldRef<"students", 'String'>
    readonly Last_Name: FieldRef<"students", 'String'>
    readonly Name: FieldRef<"students", 'String'>
    readonly Mothers_Name: FieldRef<"students", 'String'>
    readonly Email: FieldRef<"students", 'String'>
    readonly Gender: FieldRef<"students", 'gender'>
    readonly Date_of_Birth: FieldRef<"students", 'DateTime'>
    readonly Date_of_Admission: FieldRef<"students", 'DateTime'>
    readonly Street_and_House: FieldRef<"students", 'String'>
    readonly City: FieldRef<"students", 'String'>
    readonly State: FieldRef<"students", 'String'>
    readonly PIN_Code: FieldRef<"students", 'String'>
    readonly Contact_Number: FieldRef<"students", 'String'>
    readonly Aadhar_Card_Number: FieldRef<"students", 'String'>
    readonly Department_id: FieldRef<"students", 'Int'>
    readonly Class: FieldRef<"students", 'String'>
    readonly Roll_No: FieldRef<"students", 'String'>
    readonly HSC_Score: FieldRef<"students", 'Float'>
    readonly CET_Percentile: FieldRef<"students", 'Float'>
    readonly Semester: FieldRef<"students", 'String'>
    readonly Category: FieldRef<"students", 'String'>
    readonly Year: FieldRef<"students", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * students findUnique
   */
  export type studentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students findUniqueOrThrow
   */
  export type studentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students findFirst
   */
  export type studentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * students findFirstOrThrow
   */
  export type studentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * students findMany
   */
  export type studentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentsOrderByWithRelationInput | studentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * students create
   */
  export type studentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * The data needed to create a students.
     */
    data: XOR<studentsCreateInput, studentsUncheckedCreateInput>
  }

  /**
   * students createMany
   */
  export type studentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentsCreateManyInput | studentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * students update
   */
  export type studentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * The data needed to update a students.
     */
    data: XOR<studentsUpdateInput, studentsUncheckedUpdateInput>
    /**
     * Choose, which students to update.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students updateMany
   */
  export type studentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentsUpdateManyMutationInput, studentsUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentsWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
  }

  /**
   * students upsert
   */
  export type studentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * The filter to search for the students to update in case it exists.
     */
    where: studentsWhereUniqueInput
    /**
     * In case the students found by the `where` argument doesn't exist, create a new students with this data.
     */
    create: XOR<studentsCreateInput, studentsUncheckedCreateInput>
    /**
     * In case the students was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentsUpdateInput, studentsUncheckedUpdateInput>
  }

  /**
   * students delete
   */
  export type studentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
    /**
     * Filter which students to delete.
     */
    where: studentsWhereUniqueInput
  }

  /**
   * students deleteMany
   */
  export type studentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentsWhereInput
    /**
     * Limit how many students to delete.
     */
    limit?: number
  }

  /**
   * students without action
   */
  export type studentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: studentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the students
     */
    omit?: studentsOmit<ExtArgs> | null
  }


  /**
   * Model teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    t_id: number | null
    department_id: number | null
    salary: number | null
  }

  export type TeacherSumAggregateOutputType = {
    t_id: number | null
    department_id: number | null
    salary: number | null
  }

  export type TeacherMinAggregateOutputType = {
    t_id: number | null
    gender: $Enums.gender | null
    qualification: string | null
    designation: $Enums.teacher_designation | null
    email: string | null
    password: string | null
    contact_number: string | null
    join_date: Date | null
    department_id: number | null
    name: string | null
    salary: number | null
  }

  export type TeacherMaxAggregateOutputType = {
    t_id: number | null
    gender: $Enums.gender | null
    qualification: string | null
    designation: $Enums.teacher_designation | null
    email: string | null
    password: string | null
    contact_number: string | null
    join_date: Date | null
    department_id: number | null
    name: string | null
    salary: number | null
  }

  export type TeacherCountAggregateOutputType = {
    t_id: number
    gender: number
    qualification: number
    designation: number
    email: number
    password: number
    contact_number: number
    join_date: number
    department_id: number
    name: number
    salary: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    t_id?: true
    department_id?: true
    salary?: true
  }

  export type TeacherSumAggregateInputType = {
    t_id?: true
    department_id?: true
    salary?: true
  }

  export type TeacherMinAggregateInputType = {
    t_id?: true
    gender?: true
    qualification?: true
    designation?: true
    email?: true
    password?: true
    contact_number?: true
    join_date?: true
    department_id?: true
    name?: true
    salary?: true
  }

  export type TeacherMaxAggregateInputType = {
    t_id?: true
    gender?: true
    qualification?: true
    designation?: true
    email?: true
    password?: true
    contact_number?: true
    join_date?: true
    department_id?: true
    name?: true
    salary?: true
  }

  export type TeacherCountAggregateInputType = {
    t_id?: true
    gender?: true
    qualification?: true
    designation?: true
    email?: true
    password?: true
    contact_number?: true
    join_date?: true
    department_id?: true
    name?: true
    salary?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teacher to aggregate.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type teacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teacherWhereInput
    orderBy?: teacherOrderByWithAggregationInput | teacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: teacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    t_id: number
    gender: $Enums.gender
    qualification: string
    designation: $Enums.teacher_designation
    email: string
    password: string
    contact_number: string | null
    join_date: Date
    department_id: number | null
    name: string | null
    salary: number | null
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends teacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type teacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    t_id?: boolean
    gender?: boolean
    qualification?: boolean
    designation?: boolean
    email?: boolean
    password?: boolean
    contact_number?: boolean
    join_date?: boolean
    department_id?: boolean
    name?: boolean
    salary?: boolean
    teacher_courses?: boolean | teacher$teacher_coursesArgs<ExtArgs>
    lectures?: boolean | teacher$lecturesArgs<ExtArgs>
    attendances?: boolean | teacher$attendancesArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>



  export type teacherSelectScalar = {
    t_id?: boolean
    gender?: boolean
    qualification?: boolean
    designation?: boolean
    email?: boolean
    password?: boolean
    contact_number?: boolean
    join_date?: boolean
    department_id?: boolean
    name?: boolean
    salary?: boolean
  }

  export type teacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"t_id" | "gender" | "qualification" | "designation" | "email" | "password" | "contact_number" | "join_date" | "department_id" | "name" | "salary", ExtArgs["result"]["teacher"]>
  export type teacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher_courses?: boolean | teacher$teacher_coursesArgs<ExtArgs>
    lectures?: boolean | teacher$lecturesArgs<ExtArgs>
    attendances?: boolean | teacher$attendancesArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $teacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teacher"
    objects: {
      teacher_courses: Prisma.$teacher_coursePayload<ExtArgs>[]
      lectures: Prisma.$lecturePayload<ExtArgs>[]
      attendances: Prisma.$attendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      t_id: number
      gender: $Enums.gender
      qualification: string
      designation: $Enums.teacher_designation
      email: string
      password: string
      contact_number: string | null
      join_date: Date
      department_id: number | null
      name: string | null
      salary: number | null
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type teacherGetPayload<S extends boolean | null | undefined | teacherDefaultArgs> = $Result.GetResult<Prisma.$teacherPayload, S>

  type teacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<teacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface teacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teacher'], meta: { name: 'teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {teacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teacherFindUniqueArgs>(args: SelectSubset<T, teacherFindUniqueArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teacherFindUniqueOrThrowArgs>(args: SelectSubset<T, teacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teacherFindFirstArgs>(args?: SelectSubset<T, teacherFindFirstArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teacherFindFirstOrThrowArgs>(args?: SelectSubset<T, teacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `t_id`
     * const teacherWithT_idOnly = await prisma.teacher.findMany({ select: { t_id: true } })
     * 
     */
    findMany<T extends teacherFindManyArgs>(args?: SelectSubset<T, teacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {teacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends teacherCreateArgs>(args: SelectSubset<T, teacherCreateArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {teacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teacherCreateManyArgs>(args?: SelectSubset<T, teacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Teacher.
     * @param {teacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends teacherDeleteArgs>(args: SelectSubset<T, teacherDeleteArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {teacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teacherUpdateArgs>(args: SelectSubset<T, teacherUpdateArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {teacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teacherDeleteManyArgs>(args?: SelectSubset<T, teacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teacherUpdateManyArgs>(args: SelectSubset<T, teacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teacher.
     * @param {teacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends teacherUpsertArgs>(args: SelectSubset<T, teacherUpsertArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends teacherCountArgs>(
      args?: Subset<T, teacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherGroupByArgs} args - Group by arguments.
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
      T extends teacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teacherGroupByArgs['orderBy'] }
        : { orderBy?: teacherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, teacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teacher model
   */
  readonly fields: teacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher_courses<T extends teacher$teacher_coursesArgs<ExtArgs> = {}>(args?: Subset<T, teacher$teacher_coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacher_coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lectures<T extends teacher$lecturesArgs<ExtArgs> = {}>(args?: Subset<T, teacher$lecturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendances<T extends teacher$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, teacher$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the teacher model
   */
  interface teacherFieldRefs {
    readonly t_id: FieldRef<"teacher", 'Int'>
    readonly gender: FieldRef<"teacher", 'gender'>
    readonly qualification: FieldRef<"teacher", 'String'>
    readonly designation: FieldRef<"teacher", 'teacher_designation'>
    readonly email: FieldRef<"teacher", 'String'>
    readonly password: FieldRef<"teacher", 'String'>
    readonly contact_number: FieldRef<"teacher", 'String'>
    readonly join_date: FieldRef<"teacher", 'DateTime'>
    readonly department_id: FieldRef<"teacher", 'Int'>
    readonly name: FieldRef<"teacher", 'String'>
    readonly salary: FieldRef<"teacher", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * teacher findUnique
   */
  export type teacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where: teacherWhereUniqueInput
  }

  /**
   * teacher findUniqueOrThrow
   */
  export type teacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where: teacherWhereUniqueInput
  }

  /**
   * teacher findFirst
   */
  export type teacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teachers.
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * teacher findFirstOrThrow
   */
  export type teacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teacher to fetch.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teachers.
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * teacher findMany
   */
  export type teacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter, which teachers to fetch.
     */
    where?: teacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teachers.
     */
    cursor?: teacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * teacher create
   */
  export type teacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * The data needed to create a teacher.
     */
    data: XOR<teacherCreateInput, teacherUncheckedCreateInput>
  }

  /**
   * teacher createMany
   */
  export type teacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teachers.
     */
    data: teacherCreateManyInput | teacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * teacher update
   */
  export type teacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * The data needed to update a teacher.
     */
    data: XOR<teacherUpdateInput, teacherUncheckedUpdateInput>
    /**
     * Choose, which teacher to update.
     */
    where: teacherWhereUniqueInput
  }

  /**
   * teacher updateMany
   */
  export type teacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teachers.
     */
    data: XOR<teacherUpdateManyMutationInput, teacherUncheckedUpdateManyInput>
    /**
     * Filter which teachers to update
     */
    where?: teacherWhereInput
    /**
     * Limit how many teachers to update.
     */
    limit?: number
  }

  /**
   * teacher upsert
   */
  export type teacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * The filter to search for the teacher to update in case it exists.
     */
    where: teacherWhereUniqueInput
    /**
     * In case the teacher found by the `where` argument doesn't exist, create a new teacher with this data.
     */
    create: XOR<teacherCreateInput, teacherUncheckedCreateInput>
    /**
     * In case the teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teacherUpdateInput, teacherUncheckedUpdateInput>
  }

  /**
   * teacher delete
   */
  export type teacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
    /**
     * Filter which teacher to delete.
     */
    where: teacherWhereUniqueInput
  }

  /**
   * teacher deleteMany
   */
  export type teacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teachers to delete
     */
    where?: teacherWhereInput
    /**
     * Limit how many teachers to delete.
     */
    limit?: number
  }

  /**
   * teacher.teacher_courses
   */
  export type teacher$teacher_coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_course
     */
    select?: teacher_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher_course
     */
    omit?: teacher_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_courseInclude<ExtArgs> | null
    where?: teacher_courseWhereInput
    orderBy?: teacher_courseOrderByWithRelationInput | teacher_courseOrderByWithRelationInput[]
    cursor?: teacher_courseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Teacher_courseScalarFieldEnum | Teacher_courseScalarFieldEnum[]
  }

  /**
   * teacher.lectures
   */
  export type teacher$lecturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    where?: lectureWhereInput
    orderBy?: lectureOrderByWithRelationInput | lectureOrderByWithRelationInput[]
    cursor?: lectureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * teacher.attendances
   */
  export type teacher$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    where?: attendanceWhereInput
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    cursor?: attendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * teacher without action
   */
  export type teacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher
     */
    omit?: teacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacherInclude<ExtArgs> | null
  }


  /**
   * Model teacher_course
   */

  export type AggregateTeacher_course = {
    _count: Teacher_courseCountAggregateOutputType | null
    _avg: Teacher_courseAvgAggregateOutputType | null
    _sum: Teacher_courseSumAggregateOutputType | null
    _min: Teacher_courseMinAggregateOutputType | null
    _max: Teacher_courseMaxAggregateOutputType | null
  }

  export type Teacher_courseAvgAggregateOutputType = {
    id: number | null
    teacher_id: number | null
    course_id: number | null
  }

  export type Teacher_courseSumAggregateOutputType = {
    id: number | null
    teacher_id: number | null
    course_id: number | null
  }

  export type Teacher_courseMinAggregateOutputType = {
    id: number | null
    teacher_id: number | null
    course_id: number | null
  }

  export type Teacher_courseMaxAggregateOutputType = {
    id: number | null
    teacher_id: number | null
    course_id: number | null
  }

  export type Teacher_courseCountAggregateOutputType = {
    id: number
    teacher_id: number
    course_id: number
    _all: number
  }


  export type Teacher_courseAvgAggregateInputType = {
    id?: true
    teacher_id?: true
    course_id?: true
  }

  export type Teacher_courseSumAggregateInputType = {
    id?: true
    teacher_id?: true
    course_id?: true
  }

  export type Teacher_courseMinAggregateInputType = {
    id?: true
    teacher_id?: true
    course_id?: true
  }

  export type Teacher_courseMaxAggregateInputType = {
    id?: true
    teacher_id?: true
    course_id?: true
  }

  export type Teacher_courseCountAggregateInputType = {
    id?: true
    teacher_id?: true
    course_id?: true
    _all?: true
  }

  export type Teacher_courseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teacher_course to aggregate.
     */
    where?: teacher_courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teacher_courses to fetch.
     */
    orderBy?: teacher_courseOrderByWithRelationInput | teacher_courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teacher_courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teacher_courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teacher_courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teacher_courses
    **/
    _count?: true | Teacher_courseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Teacher_courseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Teacher_courseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Teacher_courseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Teacher_courseMaxAggregateInputType
  }

  export type GetTeacher_courseAggregateType<T extends Teacher_courseAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher_course]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher_course[P]>
      : GetScalarType<T[P], AggregateTeacher_course[P]>
  }




  export type teacher_courseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teacher_courseWhereInput
    orderBy?: teacher_courseOrderByWithAggregationInput | teacher_courseOrderByWithAggregationInput[]
    by: Teacher_courseScalarFieldEnum[] | Teacher_courseScalarFieldEnum
    having?: teacher_courseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Teacher_courseCountAggregateInputType | true
    _avg?: Teacher_courseAvgAggregateInputType
    _sum?: Teacher_courseSumAggregateInputType
    _min?: Teacher_courseMinAggregateInputType
    _max?: Teacher_courseMaxAggregateInputType
  }

  export type Teacher_courseGroupByOutputType = {
    id: number
    teacher_id: number
    course_id: number
    _count: Teacher_courseCountAggregateOutputType | null
    _avg: Teacher_courseAvgAggregateOutputType | null
    _sum: Teacher_courseSumAggregateOutputType | null
    _min: Teacher_courseMinAggregateOutputType | null
    _max: Teacher_courseMaxAggregateOutputType | null
  }

  type GetTeacher_courseGroupByPayload<T extends teacher_courseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Teacher_courseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Teacher_courseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Teacher_courseGroupByOutputType[P]>
            : GetScalarType<T[P], Teacher_courseGroupByOutputType[P]>
        }
      >
    >


  export type teacher_courseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    course_id?: boolean
    teacher?: boolean | teacherDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher_course"]>



  export type teacher_courseSelectScalar = {
    id?: boolean
    teacher_id?: boolean
    course_id?: boolean
  }

  export type teacher_courseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacher_id" | "course_id", ExtArgs["result"]["teacher_course"]>
  export type teacher_courseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | teacherDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }

  export type $teacher_coursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teacher_course"
    objects: {
      teacher: Prisma.$teacherPayload<ExtArgs>
      course: Prisma.$coursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teacher_id: number
      course_id: number
    }, ExtArgs["result"]["teacher_course"]>
    composites: {}
  }

  type teacher_courseGetPayload<S extends boolean | null | undefined | teacher_courseDefaultArgs> = $Result.GetResult<Prisma.$teacher_coursePayload, S>

  type teacher_courseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<teacher_courseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Teacher_courseCountAggregateInputType | true
    }

  export interface teacher_courseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teacher_course'], meta: { name: 'teacher_course' } }
    /**
     * Find zero or one Teacher_course that matches the filter.
     * @param {teacher_courseFindUniqueArgs} args - Arguments to find a Teacher_course
     * @example
     * // Get one Teacher_course
     * const teacher_course = await prisma.teacher_course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teacher_courseFindUniqueArgs>(args: SelectSubset<T, teacher_courseFindUniqueArgs<ExtArgs>>): Prisma__teacher_courseClient<$Result.GetResult<Prisma.$teacher_coursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher_course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teacher_courseFindUniqueOrThrowArgs} args - Arguments to find a Teacher_course
     * @example
     * // Get one Teacher_course
     * const teacher_course = await prisma.teacher_course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teacher_courseFindUniqueOrThrowArgs>(args: SelectSubset<T, teacher_courseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teacher_courseClient<$Result.GetResult<Prisma.$teacher_coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher_course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacher_courseFindFirstArgs} args - Arguments to find a Teacher_course
     * @example
     * // Get one Teacher_course
     * const teacher_course = await prisma.teacher_course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teacher_courseFindFirstArgs>(args?: SelectSubset<T, teacher_courseFindFirstArgs<ExtArgs>>): Prisma__teacher_courseClient<$Result.GetResult<Prisma.$teacher_coursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher_course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacher_courseFindFirstOrThrowArgs} args - Arguments to find a Teacher_course
     * @example
     * // Get one Teacher_course
     * const teacher_course = await prisma.teacher_course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teacher_courseFindFirstOrThrowArgs>(args?: SelectSubset<T, teacher_courseFindFirstOrThrowArgs<ExtArgs>>): Prisma__teacher_courseClient<$Result.GetResult<Prisma.$teacher_coursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teacher_courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacher_courseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teacher_courses
     * const teacher_courses = await prisma.teacher_course.findMany()
     * 
     * // Get first 10 Teacher_courses
     * const teacher_courses = await prisma.teacher_course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacher_courseWithIdOnly = await prisma.teacher_course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends teacher_courseFindManyArgs>(args?: SelectSubset<T, teacher_courseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacher_coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher_course.
     * @param {teacher_courseCreateArgs} args - Arguments to create a Teacher_course.
     * @example
     * // Create one Teacher_course
     * const Teacher_course = await prisma.teacher_course.create({
     *   data: {
     *     // ... data to create a Teacher_course
     *   }
     * })
     * 
     */
    create<T extends teacher_courseCreateArgs>(args: SelectSubset<T, teacher_courseCreateArgs<ExtArgs>>): Prisma__teacher_courseClient<$Result.GetResult<Prisma.$teacher_coursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teacher_courses.
     * @param {teacher_courseCreateManyArgs} args - Arguments to create many Teacher_courses.
     * @example
     * // Create many Teacher_courses
     * const teacher_course = await prisma.teacher_course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teacher_courseCreateManyArgs>(args?: SelectSubset<T, teacher_courseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Teacher_course.
     * @param {teacher_courseDeleteArgs} args - Arguments to delete one Teacher_course.
     * @example
     * // Delete one Teacher_course
     * const Teacher_course = await prisma.teacher_course.delete({
     *   where: {
     *     // ... filter to delete one Teacher_course
     *   }
     * })
     * 
     */
    delete<T extends teacher_courseDeleteArgs>(args: SelectSubset<T, teacher_courseDeleteArgs<ExtArgs>>): Prisma__teacher_courseClient<$Result.GetResult<Prisma.$teacher_coursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher_course.
     * @param {teacher_courseUpdateArgs} args - Arguments to update one Teacher_course.
     * @example
     * // Update one Teacher_course
     * const teacher_course = await prisma.teacher_course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teacher_courseUpdateArgs>(args: SelectSubset<T, teacher_courseUpdateArgs<ExtArgs>>): Prisma__teacher_courseClient<$Result.GetResult<Prisma.$teacher_coursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teacher_courses.
     * @param {teacher_courseDeleteManyArgs} args - Arguments to filter Teacher_courses to delete.
     * @example
     * // Delete a few Teacher_courses
     * const { count } = await prisma.teacher_course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teacher_courseDeleteManyArgs>(args?: SelectSubset<T, teacher_courseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teacher_courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacher_courseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teacher_courses
     * const teacher_course = await prisma.teacher_course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teacher_courseUpdateManyArgs>(args: SelectSubset<T, teacher_courseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teacher_course.
     * @param {teacher_courseUpsertArgs} args - Arguments to update or create a Teacher_course.
     * @example
     * // Update or create a Teacher_course
     * const teacher_course = await prisma.teacher_course.upsert({
     *   create: {
     *     // ... data to create a Teacher_course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher_course we want to update
     *   }
     * })
     */
    upsert<T extends teacher_courseUpsertArgs>(args: SelectSubset<T, teacher_courseUpsertArgs<ExtArgs>>): Prisma__teacher_courseClient<$Result.GetResult<Prisma.$teacher_coursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teacher_courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacher_courseCountArgs} args - Arguments to filter Teacher_courses to count.
     * @example
     * // Count the number of Teacher_courses
     * const count = await prisma.teacher_course.count({
     *   where: {
     *     // ... the filter for the Teacher_courses we want to count
     *   }
     * })
    **/
    count<T extends teacher_courseCountArgs>(
      args?: Subset<T, teacher_courseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Teacher_courseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher_course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Teacher_courseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Teacher_courseAggregateArgs>(args: Subset<T, Teacher_courseAggregateArgs>): Prisma.PrismaPromise<GetTeacher_courseAggregateType<T>>

    /**
     * Group by Teacher_course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacher_courseGroupByArgs} args - Group by arguments.
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
      T extends teacher_courseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teacher_courseGroupByArgs['orderBy'] }
        : { orderBy?: teacher_courseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, teacher_courseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacher_courseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teacher_course model
   */
  readonly fields: teacher_courseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teacher_course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teacher_courseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends teacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teacherDefaultArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the teacher_course model
   */
  interface teacher_courseFieldRefs {
    readonly id: FieldRef<"teacher_course", 'Int'>
    readonly teacher_id: FieldRef<"teacher_course", 'Int'>
    readonly course_id: FieldRef<"teacher_course", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * teacher_course findUnique
   */
  export type teacher_courseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_course
     */
    select?: teacher_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher_course
     */
    omit?: teacher_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_courseInclude<ExtArgs> | null
    /**
     * Filter, which teacher_course to fetch.
     */
    where: teacher_courseWhereUniqueInput
  }

  /**
   * teacher_course findUniqueOrThrow
   */
  export type teacher_courseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_course
     */
    select?: teacher_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher_course
     */
    omit?: teacher_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_courseInclude<ExtArgs> | null
    /**
     * Filter, which teacher_course to fetch.
     */
    where: teacher_courseWhereUniqueInput
  }

  /**
   * teacher_course findFirst
   */
  export type teacher_courseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_course
     */
    select?: teacher_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher_course
     */
    omit?: teacher_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_courseInclude<ExtArgs> | null
    /**
     * Filter, which teacher_course to fetch.
     */
    where?: teacher_courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teacher_courses to fetch.
     */
    orderBy?: teacher_courseOrderByWithRelationInput | teacher_courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teacher_courses.
     */
    cursor?: teacher_courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teacher_courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teacher_courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teacher_courses.
     */
    distinct?: Teacher_courseScalarFieldEnum | Teacher_courseScalarFieldEnum[]
  }

  /**
   * teacher_course findFirstOrThrow
   */
  export type teacher_courseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_course
     */
    select?: teacher_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher_course
     */
    omit?: teacher_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_courseInclude<ExtArgs> | null
    /**
     * Filter, which teacher_course to fetch.
     */
    where?: teacher_courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teacher_courses to fetch.
     */
    orderBy?: teacher_courseOrderByWithRelationInput | teacher_courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teacher_courses.
     */
    cursor?: teacher_courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teacher_courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teacher_courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teacher_courses.
     */
    distinct?: Teacher_courseScalarFieldEnum | Teacher_courseScalarFieldEnum[]
  }

  /**
   * teacher_course findMany
   */
  export type teacher_courseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_course
     */
    select?: teacher_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher_course
     */
    omit?: teacher_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_courseInclude<ExtArgs> | null
    /**
     * Filter, which teacher_courses to fetch.
     */
    where?: teacher_courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teacher_courses to fetch.
     */
    orderBy?: teacher_courseOrderByWithRelationInput | teacher_courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teacher_courses.
     */
    cursor?: teacher_courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teacher_courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teacher_courses.
     */
    skip?: number
    distinct?: Teacher_courseScalarFieldEnum | Teacher_courseScalarFieldEnum[]
  }

  /**
   * teacher_course create
   */
  export type teacher_courseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_course
     */
    select?: teacher_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher_course
     */
    omit?: teacher_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_courseInclude<ExtArgs> | null
    /**
     * The data needed to create a teacher_course.
     */
    data: XOR<teacher_courseCreateInput, teacher_courseUncheckedCreateInput>
  }

  /**
   * teacher_course createMany
   */
  export type teacher_courseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teacher_courses.
     */
    data: teacher_courseCreateManyInput | teacher_courseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * teacher_course update
   */
  export type teacher_courseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_course
     */
    select?: teacher_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher_course
     */
    omit?: teacher_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_courseInclude<ExtArgs> | null
    /**
     * The data needed to update a teacher_course.
     */
    data: XOR<teacher_courseUpdateInput, teacher_courseUncheckedUpdateInput>
    /**
     * Choose, which teacher_course to update.
     */
    where: teacher_courseWhereUniqueInput
  }

  /**
   * teacher_course updateMany
   */
  export type teacher_courseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teacher_courses.
     */
    data: XOR<teacher_courseUpdateManyMutationInput, teacher_courseUncheckedUpdateManyInput>
    /**
     * Filter which teacher_courses to update
     */
    where?: teacher_courseWhereInput
    /**
     * Limit how many teacher_courses to update.
     */
    limit?: number
  }

  /**
   * teacher_course upsert
   */
  export type teacher_courseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_course
     */
    select?: teacher_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher_course
     */
    omit?: teacher_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_courseInclude<ExtArgs> | null
    /**
     * The filter to search for the teacher_course to update in case it exists.
     */
    where: teacher_courseWhereUniqueInput
    /**
     * In case the teacher_course found by the `where` argument doesn't exist, create a new teacher_course with this data.
     */
    create: XOR<teacher_courseCreateInput, teacher_courseUncheckedCreateInput>
    /**
     * In case the teacher_course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teacher_courseUpdateInput, teacher_courseUncheckedUpdateInput>
  }

  /**
   * teacher_course delete
   */
  export type teacher_courseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_course
     */
    select?: teacher_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher_course
     */
    omit?: teacher_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_courseInclude<ExtArgs> | null
    /**
     * Filter which teacher_course to delete.
     */
    where: teacher_courseWhereUniqueInput
  }

  /**
   * teacher_course deleteMany
   */
  export type teacher_courseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teacher_courses to delete
     */
    where?: teacher_courseWhereInput
    /**
     * Limit how many teacher_courses to delete.
     */
    limit?: number
  }

  /**
   * teacher_course without action
   */
  export type teacher_courseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_course
     */
    select?: teacher_courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teacher_course
     */
    omit?: teacher_courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teacher_courseInclude<ExtArgs> | null
  }


  /**
   * Model lecture
   */

  export type AggregateLecture = {
    _count: LectureCountAggregateOutputType | null
    _avg: LectureAvgAggregateOutputType | null
    _sum: LectureSumAggregateOutputType | null
    _min: LectureMinAggregateOutputType | null
    _max: LectureMaxAggregateOutputType | null
  }

  export type LectureAvgAggregateOutputType = {
    id: number | null
    course_id: number | null
    teacher_id: number | null
  }

  export type LectureSumAggregateOutputType = {
    id: number | null
    course_id: number | null
    teacher_id: number | null
  }

  export type LectureMinAggregateOutputType = {
    id: number | null
    course_id: number | null
    teacher_id: number | null
    lecture_date: Date | null
    topic: string | null
  }

  export type LectureMaxAggregateOutputType = {
    id: number | null
    course_id: number | null
    teacher_id: number | null
    lecture_date: Date | null
    topic: string | null
  }

  export type LectureCountAggregateOutputType = {
    id: number
    course_id: number
    teacher_id: number
    lecture_date: number
    topic: number
    _all: number
  }


  export type LectureAvgAggregateInputType = {
    id?: true
    course_id?: true
    teacher_id?: true
  }

  export type LectureSumAggregateInputType = {
    id?: true
    course_id?: true
    teacher_id?: true
  }

  export type LectureMinAggregateInputType = {
    id?: true
    course_id?: true
    teacher_id?: true
    lecture_date?: true
    topic?: true
  }

  export type LectureMaxAggregateInputType = {
    id?: true
    course_id?: true
    teacher_id?: true
    lecture_date?: true
    topic?: true
  }

  export type LectureCountAggregateInputType = {
    id?: true
    course_id?: true
    teacher_id?: true
    lecture_date?: true
    topic?: true
    _all?: true
  }

  export type LectureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lecture to aggregate.
     */
    where?: lectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lectures to fetch.
     */
    orderBy?: lectureOrderByWithRelationInput | lectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lectures
    **/
    _count?: true | LectureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LectureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LectureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LectureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LectureMaxAggregateInputType
  }

  export type GetLectureAggregateType<T extends LectureAggregateArgs> = {
        [P in keyof T & keyof AggregateLecture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecture[P]>
      : GetScalarType<T[P], AggregateLecture[P]>
  }




  export type lectureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lectureWhereInput
    orderBy?: lectureOrderByWithAggregationInput | lectureOrderByWithAggregationInput[]
    by: LectureScalarFieldEnum[] | LectureScalarFieldEnum
    having?: lectureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LectureCountAggregateInputType | true
    _avg?: LectureAvgAggregateInputType
    _sum?: LectureSumAggregateInputType
    _min?: LectureMinAggregateInputType
    _max?: LectureMaxAggregateInputType
  }

  export type LectureGroupByOutputType = {
    id: number
    course_id: number
    teacher_id: number
    lecture_date: Date
    topic: string | null
    _count: LectureCountAggregateOutputType | null
    _avg: LectureAvgAggregateOutputType | null
    _sum: LectureSumAggregateOutputType | null
    _min: LectureMinAggregateOutputType | null
    _max: LectureMaxAggregateOutputType | null
  }

  type GetLectureGroupByPayload<T extends lectureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LectureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LectureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LectureGroupByOutputType[P]>
            : GetScalarType<T[P], LectureGroupByOutputType[P]>
        }
      >
    >


  export type lectureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course_id?: boolean
    teacher_id?: boolean
    lecture_date?: boolean
    topic?: boolean
    course?: boolean | courseDefaultArgs<ExtArgs>
    teacher?: boolean | teacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecture"]>



  export type lectureSelectScalar = {
    id?: boolean
    course_id?: boolean
    teacher_id?: boolean
    lecture_date?: boolean
    topic?: boolean
  }

  export type lectureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "course_id" | "teacher_id" | "lecture_date" | "topic", ExtArgs["result"]["lecture"]>
  export type lectureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | courseDefaultArgs<ExtArgs>
    teacher?: boolean | teacherDefaultArgs<ExtArgs>
  }

  export type $lecturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lecture"
    objects: {
      course: Prisma.$coursePayload<ExtArgs>
      teacher: Prisma.$teacherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      course_id: number
      teacher_id: number
      lecture_date: Date
      topic: string | null
    }, ExtArgs["result"]["lecture"]>
    composites: {}
  }

  type lectureGetPayload<S extends boolean | null | undefined | lectureDefaultArgs> = $Result.GetResult<Prisma.$lecturePayload, S>

  type lectureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lectureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LectureCountAggregateInputType | true
    }

  export interface lectureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lecture'], meta: { name: 'lecture' } }
    /**
     * Find zero or one Lecture that matches the filter.
     * @param {lectureFindUniqueArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lectureFindUniqueArgs>(args: SelectSubset<T, lectureFindUniqueArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lecture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lectureFindUniqueOrThrowArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lectureFindUniqueOrThrowArgs>(args: SelectSubset<T, lectureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lectureFindFirstArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lectureFindFirstArgs>(args?: SelectSubset<T, lectureFindFirstArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lectureFindFirstOrThrowArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lectureFindFirstOrThrowArgs>(args?: SelectSubset<T, lectureFindFirstOrThrowArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lectures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lectureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lectures
     * const lectures = await prisma.lecture.findMany()
     * 
     * // Get first 10 Lectures
     * const lectures = await prisma.lecture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lectureWithIdOnly = await prisma.lecture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lectureFindManyArgs>(args?: SelectSubset<T, lectureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lecture.
     * @param {lectureCreateArgs} args - Arguments to create a Lecture.
     * @example
     * // Create one Lecture
     * const Lecture = await prisma.lecture.create({
     *   data: {
     *     // ... data to create a Lecture
     *   }
     * })
     * 
     */
    create<T extends lectureCreateArgs>(args: SelectSubset<T, lectureCreateArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lectures.
     * @param {lectureCreateManyArgs} args - Arguments to create many Lectures.
     * @example
     * // Create many Lectures
     * const lecture = await prisma.lecture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lectureCreateManyArgs>(args?: SelectSubset<T, lectureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lecture.
     * @param {lectureDeleteArgs} args - Arguments to delete one Lecture.
     * @example
     * // Delete one Lecture
     * const Lecture = await prisma.lecture.delete({
     *   where: {
     *     // ... filter to delete one Lecture
     *   }
     * })
     * 
     */
    delete<T extends lectureDeleteArgs>(args: SelectSubset<T, lectureDeleteArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lecture.
     * @param {lectureUpdateArgs} args - Arguments to update one Lecture.
     * @example
     * // Update one Lecture
     * const lecture = await prisma.lecture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lectureUpdateArgs>(args: SelectSubset<T, lectureUpdateArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lectures.
     * @param {lectureDeleteManyArgs} args - Arguments to filter Lectures to delete.
     * @example
     * // Delete a few Lectures
     * const { count } = await prisma.lecture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lectureDeleteManyArgs>(args?: SelectSubset<T, lectureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lectureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lectures
     * const lecture = await prisma.lecture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lectureUpdateManyArgs>(args: SelectSubset<T, lectureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lecture.
     * @param {lectureUpsertArgs} args - Arguments to update or create a Lecture.
     * @example
     * // Update or create a Lecture
     * const lecture = await prisma.lecture.upsert({
     *   create: {
     *     // ... data to create a Lecture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lecture we want to update
     *   }
     * })
     */
    upsert<T extends lectureUpsertArgs>(args: SelectSubset<T, lectureUpsertArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lectureCountArgs} args - Arguments to filter Lectures to count.
     * @example
     * // Count the number of Lectures
     * const count = await prisma.lecture.count({
     *   where: {
     *     // ... the filter for the Lectures we want to count
     *   }
     * })
    **/
    count<T extends lectureCountArgs>(
      args?: Subset<T, lectureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LectureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lecture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LectureAggregateArgs>(args: Subset<T, LectureAggregateArgs>): Prisma.PrismaPromise<GetLectureAggregateType<T>>

    /**
     * Group by Lecture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lectureGroupByArgs} args - Group by arguments.
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
      T extends lectureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lectureGroupByArgs['orderBy'] }
        : { orderBy?: lectureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, lectureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLectureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lecture model
   */
  readonly fields: lectureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lecture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lectureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends teacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teacherDefaultArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the lecture model
   */
  interface lectureFieldRefs {
    readonly id: FieldRef<"lecture", 'Int'>
    readonly course_id: FieldRef<"lecture", 'Int'>
    readonly teacher_id: FieldRef<"lecture", 'Int'>
    readonly lecture_date: FieldRef<"lecture", 'DateTime'>
    readonly topic: FieldRef<"lecture", 'String'>
  }
    

  // Custom InputTypes
  /**
   * lecture findUnique
   */
  export type lectureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * Filter, which lecture to fetch.
     */
    where: lectureWhereUniqueInput
  }

  /**
   * lecture findUniqueOrThrow
   */
  export type lectureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * Filter, which lecture to fetch.
     */
    where: lectureWhereUniqueInput
  }

  /**
   * lecture findFirst
   */
  export type lectureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * Filter, which lecture to fetch.
     */
    where?: lectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lectures to fetch.
     */
    orderBy?: lectureOrderByWithRelationInput | lectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lectures.
     */
    cursor?: lectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lectures.
     */
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * lecture findFirstOrThrow
   */
  export type lectureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * Filter, which lecture to fetch.
     */
    where?: lectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lectures to fetch.
     */
    orderBy?: lectureOrderByWithRelationInput | lectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lectures.
     */
    cursor?: lectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lectures.
     */
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * lecture findMany
   */
  export type lectureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * Filter, which lectures to fetch.
     */
    where?: lectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lectures to fetch.
     */
    orderBy?: lectureOrderByWithRelationInput | lectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lectures.
     */
    cursor?: lectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lectures.
     */
    skip?: number
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * lecture create
   */
  export type lectureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * The data needed to create a lecture.
     */
    data: XOR<lectureCreateInput, lectureUncheckedCreateInput>
  }

  /**
   * lecture createMany
   */
  export type lectureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lectures.
     */
    data: lectureCreateManyInput | lectureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lecture update
   */
  export type lectureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * The data needed to update a lecture.
     */
    data: XOR<lectureUpdateInput, lectureUncheckedUpdateInput>
    /**
     * Choose, which lecture to update.
     */
    where: lectureWhereUniqueInput
  }

  /**
   * lecture updateMany
   */
  export type lectureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lectures.
     */
    data: XOR<lectureUpdateManyMutationInput, lectureUncheckedUpdateManyInput>
    /**
     * Filter which lectures to update
     */
    where?: lectureWhereInput
    /**
     * Limit how many lectures to update.
     */
    limit?: number
  }

  /**
   * lecture upsert
   */
  export type lectureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * The filter to search for the lecture to update in case it exists.
     */
    where: lectureWhereUniqueInput
    /**
     * In case the lecture found by the `where` argument doesn't exist, create a new lecture with this data.
     */
    create: XOR<lectureCreateInput, lectureUncheckedCreateInput>
    /**
     * In case the lecture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lectureUpdateInput, lectureUncheckedUpdateInput>
  }

  /**
   * lecture delete
   */
  export type lectureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * Filter which lecture to delete.
     */
    where: lectureWhereUniqueInput
  }

  /**
   * lecture deleteMany
   */
  export type lectureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lectures to delete
     */
    where?: lectureWhereInput
    /**
     * Limit how many lectures to delete.
     */
    limit?: number
  }

  /**
   * lecture without action
   */
  export type lectureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
  }


  /**
   * Model attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    id: number | null
    course_id: number | null
    teacher_id: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    id: number | null
    course_id: number | null
    teacher_id: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: number | null
    course_id: number | null
    date: Date | null
    present: boolean | null
    teacher_id: number | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: number | null
    course_id: number | null
    date: Date | null
    present: boolean | null
    teacher_id: number | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    course_id: number
    date: number
    present: number
    teacher_id: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    id?: true
    course_id?: true
    teacher_id?: true
  }

  export type AttendanceSumAggregateInputType = {
    id?: true
    course_id?: true
    teacher_id?: true
  }

  export type AttendanceMinAggregateInputType = {
    id?: true
    course_id?: true
    date?: true
    present?: true
    teacher_id?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    course_id?: true
    date?: true
    present?: true
    teacher_id?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    course_id?: true
    date?: true
    present?: true
    teacher_id?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendance to aggregate.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type attendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendanceWhereInput
    orderBy?: attendanceOrderByWithAggregationInput | attendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: attendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: number
    course_id: number
    date: Date
    present: boolean
    teacher_id: number
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends attendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type attendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    course_id?: boolean
    date?: boolean
    present?: boolean
    teacher_id?: boolean
    course?: boolean | courseDefaultArgs<ExtArgs>
    teacher?: boolean | teacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>



  export type attendanceSelectScalar = {
    id?: boolean
    course_id?: boolean
    date?: boolean
    present?: boolean
    teacher_id?: boolean
  }

  export type attendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "course_id" | "date" | "present" | "teacher_id", ExtArgs["result"]["attendance"]>
  export type attendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | courseDefaultArgs<ExtArgs>
    teacher?: boolean | teacherDefaultArgs<ExtArgs>
  }

  export type $attendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "attendance"
    objects: {
      course: Prisma.$coursePayload<ExtArgs>
      teacher: Prisma.$teacherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      course_id: number
      date: Date
      present: boolean
      teacher_id: number
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type attendanceGetPayload<S extends boolean | null | undefined | attendanceDefaultArgs> = $Result.GetResult<Prisma.$attendancePayload, S>

  type attendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<attendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface attendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['attendance'], meta: { name: 'attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {attendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends attendanceFindUniqueArgs>(args: SelectSubset<T, attendanceFindUniqueArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {attendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends attendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, attendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends attendanceFindFirstArgs>(args?: SelectSubset<T, attendanceFindFirstArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends attendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, attendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends attendanceFindManyArgs>(args?: SelectSubset<T, attendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {attendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends attendanceCreateArgs>(args: SelectSubset<T, attendanceCreateArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {attendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends attendanceCreateManyArgs>(args?: SelectSubset<T, attendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attendance.
     * @param {attendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends attendanceDeleteArgs>(args: SelectSubset<T, attendanceDeleteArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {attendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends attendanceUpdateArgs>(args: SelectSubset<T, attendanceUpdateArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {attendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends attendanceDeleteManyArgs>(args?: SelectSubset<T, attendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends attendanceUpdateManyArgs>(args: SelectSubset<T, attendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {attendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends attendanceUpsertArgs>(args: SelectSubset<T, attendanceUpsertArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends attendanceCountArgs>(
      args?: Subset<T, attendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceGroupByArgs} args - Group by arguments.
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
      T extends attendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: attendanceGroupByArgs['orderBy'] }
        : { orderBy?: attendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, attendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the attendance model
   */
  readonly fields: attendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__attendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends teacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teacherDefaultArgs<ExtArgs>>): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the attendance model
   */
  interface attendanceFieldRefs {
    readonly id: FieldRef<"attendance", 'Int'>
    readonly course_id: FieldRef<"attendance", 'Int'>
    readonly date: FieldRef<"attendance", 'DateTime'>
    readonly present: FieldRef<"attendance", 'Boolean'>
    readonly teacher_id: FieldRef<"attendance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * attendance findUnique
   */
  export type attendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance findUniqueOrThrow
   */
  export type attendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance findFirst
   */
  export type attendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendances.
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * attendance findFirstOrThrow
   */
  export type attendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendances.
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * attendance findMany
   */
  export type attendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendances to fetch.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing attendances.
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * attendance create
   */
  export type attendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a attendance.
     */
    data: XOR<attendanceCreateInput, attendanceUncheckedCreateInput>
  }

  /**
   * attendance createMany
   */
  export type attendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many attendances.
     */
    data: attendanceCreateManyInput | attendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * attendance update
   */
  export type attendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a attendance.
     */
    data: XOR<attendanceUpdateInput, attendanceUncheckedUpdateInput>
    /**
     * Choose, which attendance to update.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance updateMany
   */
  export type attendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update attendances.
     */
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyInput>
    /**
     * Filter which attendances to update
     */
    where?: attendanceWhereInput
    /**
     * Limit how many attendances to update.
     */
    limit?: number
  }

  /**
   * attendance upsert
   */
  export type attendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the attendance to update in case it exists.
     */
    where: attendanceWhereUniqueInput
    /**
     * In case the attendance found by the `where` argument doesn't exist, create a new attendance with this data.
     */
    create: XOR<attendanceCreateInput, attendanceUncheckedCreateInput>
    /**
     * In case the attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attendanceUpdateInput, attendanceUncheckedUpdateInput>
  }

  /**
   * attendance delete
   */
  export type attendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter which attendance to delete.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance deleteMany
   */
  export type attendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendances to delete
     */
    where?: attendanceWhereInput
    /**
     * Limit how many attendances to delete.
     */
    limit?: number
  }

  /**
   * attendance without action
   */
  export type attendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
  }


  /**
   * Model assignment_submission
   */

  export type AggregateAssignment_submission = {
    _count: Assignment_submissionCountAggregateOutputType | null
    _avg: Assignment_submissionAvgAggregateOutputType | null
    _sum: Assignment_submissionSumAggregateOutputType | null
    _min: Assignment_submissionMinAggregateOutputType | null
    _max: Assignment_submissionMaxAggregateOutputType | null
  }

  export type Assignment_submissionAvgAggregateOutputType = {
    submission_id: number | null
    assignment_id: number | null
  }

  export type Assignment_submissionSumAggregateOutputType = {
    submission_id: number | null
    assignment_id: number | null
  }

  export type Assignment_submissionMinAggregateOutputType = {
    submission_id: number | null
    assignment_id: number | null
    student_course_code: string | null
    submissionDate: Date | null
    status: string | null
    grade: string | null
    remarks: string | null
  }

  export type Assignment_submissionMaxAggregateOutputType = {
    submission_id: number | null
    assignment_id: number | null
    student_course_code: string | null
    submissionDate: Date | null
    status: string | null
    grade: string | null
    remarks: string | null
  }

  export type Assignment_submissionCountAggregateOutputType = {
    submission_id: number
    assignment_id: number
    student_course_code: number
    submissionDate: number
    status: number
    grade: number
    remarks: number
    _all: number
  }


  export type Assignment_submissionAvgAggregateInputType = {
    submission_id?: true
    assignment_id?: true
  }

  export type Assignment_submissionSumAggregateInputType = {
    submission_id?: true
    assignment_id?: true
  }

  export type Assignment_submissionMinAggregateInputType = {
    submission_id?: true
    assignment_id?: true
    student_course_code?: true
    submissionDate?: true
    status?: true
    grade?: true
    remarks?: true
  }

  export type Assignment_submissionMaxAggregateInputType = {
    submission_id?: true
    assignment_id?: true
    student_course_code?: true
    submissionDate?: true
    status?: true
    grade?: true
    remarks?: true
  }

  export type Assignment_submissionCountAggregateInputType = {
    submission_id?: true
    assignment_id?: true
    student_course_code?: true
    submissionDate?: true
    status?: true
    grade?: true
    remarks?: true
    _all?: true
  }

  export type Assignment_submissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assignment_submission to aggregate.
     */
    where?: assignment_submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignment_submissions to fetch.
     */
    orderBy?: assignment_submissionOrderByWithRelationInput | assignment_submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: assignment_submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignment_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignment_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned assignment_submissions
    **/
    _count?: true | Assignment_submissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Assignment_submissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Assignment_submissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Assignment_submissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Assignment_submissionMaxAggregateInputType
  }

  export type GetAssignment_submissionAggregateType<T extends Assignment_submissionAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment_submission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment_submission[P]>
      : GetScalarType<T[P], AggregateAssignment_submission[P]>
  }




  export type assignment_submissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assignment_submissionWhereInput
    orderBy?: assignment_submissionOrderByWithAggregationInput | assignment_submissionOrderByWithAggregationInput[]
    by: Assignment_submissionScalarFieldEnum[] | Assignment_submissionScalarFieldEnum
    having?: assignment_submissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Assignment_submissionCountAggregateInputType | true
    _avg?: Assignment_submissionAvgAggregateInputType
    _sum?: Assignment_submissionSumAggregateInputType
    _min?: Assignment_submissionMinAggregateInputType
    _max?: Assignment_submissionMaxAggregateInputType
  }

  export type Assignment_submissionGroupByOutputType = {
    submission_id: number
    assignment_id: number
    student_course_code: string
    submissionDate: Date | null
    status: string
    grade: string | null
    remarks: string | null
    _count: Assignment_submissionCountAggregateOutputType | null
    _avg: Assignment_submissionAvgAggregateOutputType | null
    _sum: Assignment_submissionSumAggregateOutputType | null
    _min: Assignment_submissionMinAggregateOutputType | null
    _max: Assignment_submissionMaxAggregateOutputType | null
  }

  type GetAssignment_submissionGroupByPayload<T extends assignment_submissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Assignment_submissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Assignment_submissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Assignment_submissionGroupByOutputType[P]>
            : GetScalarType<T[P], Assignment_submissionGroupByOutputType[P]>
        }
      >
    >


  export type assignment_submissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    submission_id?: boolean
    assignment_id?: boolean
    student_course_code?: boolean
    submissionDate?: boolean
    status?: boolean
    grade?: boolean
    remarks?: boolean
  }, ExtArgs["result"]["assignment_submission"]>



  export type assignment_submissionSelectScalar = {
    submission_id?: boolean
    assignment_id?: boolean
    student_course_code?: boolean
    submissionDate?: boolean
    status?: boolean
    grade?: boolean
    remarks?: boolean
  }

  export type assignment_submissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"submission_id" | "assignment_id" | "student_course_code" | "submissionDate" | "status" | "grade" | "remarks", ExtArgs["result"]["assignment_submission"]>

  export type $assignment_submissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "assignment_submission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      submission_id: number
      assignment_id: number
      student_course_code: string
      submissionDate: Date | null
      status: string
      grade: string | null
      remarks: string | null
    }, ExtArgs["result"]["assignment_submission"]>
    composites: {}
  }

  type assignment_submissionGetPayload<S extends boolean | null | undefined | assignment_submissionDefaultArgs> = $Result.GetResult<Prisma.$assignment_submissionPayload, S>

  type assignment_submissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<assignment_submissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Assignment_submissionCountAggregateInputType | true
    }

  export interface assignment_submissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['assignment_submission'], meta: { name: 'assignment_submission' } }
    /**
     * Find zero or one Assignment_submission that matches the filter.
     * @param {assignment_submissionFindUniqueArgs} args - Arguments to find a Assignment_submission
     * @example
     * // Get one Assignment_submission
     * const assignment_submission = await prisma.assignment_submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends assignment_submissionFindUniqueArgs>(args: SelectSubset<T, assignment_submissionFindUniqueArgs<ExtArgs>>): Prisma__assignment_submissionClient<$Result.GetResult<Prisma.$assignment_submissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment_submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {assignment_submissionFindUniqueOrThrowArgs} args - Arguments to find a Assignment_submission
     * @example
     * // Get one Assignment_submission
     * const assignment_submission = await prisma.assignment_submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends assignment_submissionFindUniqueOrThrowArgs>(args: SelectSubset<T, assignment_submissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__assignment_submissionClient<$Result.GetResult<Prisma.$assignment_submissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment_submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignment_submissionFindFirstArgs} args - Arguments to find a Assignment_submission
     * @example
     * // Get one Assignment_submission
     * const assignment_submission = await prisma.assignment_submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends assignment_submissionFindFirstArgs>(args?: SelectSubset<T, assignment_submissionFindFirstArgs<ExtArgs>>): Prisma__assignment_submissionClient<$Result.GetResult<Prisma.$assignment_submissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment_submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignment_submissionFindFirstOrThrowArgs} args - Arguments to find a Assignment_submission
     * @example
     * // Get one Assignment_submission
     * const assignment_submission = await prisma.assignment_submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends assignment_submissionFindFirstOrThrowArgs>(args?: SelectSubset<T, assignment_submissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__assignment_submissionClient<$Result.GetResult<Prisma.$assignment_submissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignment_submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignment_submissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignment_submissions
     * const assignment_submissions = await prisma.assignment_submission.findMany()
     * 
     * // Get first 10 Assignment_submissions
     * const assignment_submissions = await prisma.assignment_submission.findMany({ take: 10 })
     * 
     * // Only select the `submission_id`
     * const assignment_submissionWithSubmission_idOnly = await prisma.assignment_submission.findMany({ select: { submission_id: true } })
     * 
     */
    findMany<T extends assignment_submissionFindManyArgs>(args?: SelectSubset<T, assignment_submissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assignment_submissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment_submission.
     * @param {assignment_submissionCreateArgs} args - Arguments to create a Assignment_submission.
     * @example
     * // Create one Assignment_submission
     * const Assignment_submission = await prisma.assignment_submission.create({
     *   data: {
     *     // ... data to create a Assignment_submission
     *   }
     * })
     * 
     */
    create<T extends assignment_submissionCreateArgs>(args: SelectSubset<T, assignment_submissionCreateArgs<ExtArgs>>): Prisma__assignment_submissionClient<$Result.GetResult<Prisma.$assignment_submissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignment_submissions.
     * @param {assignment_submissionCreateManyArgs} args - Arguments to create many Assignment_submissions.
     * @example
     * // Create many Assignment_submissions
     * const assignment_submission = await prisma.assignment_submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends assignment_submissionCreateManyArgs>(args?: SelectSubset<T, assignment_submissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Assignment_submission.
     * @param {assignment_submissionDeleteArgs} args - Arguments to delete one Assignment_submission.
     * @example
     * // Delete one Assignment_submission
     * const Assignment_submission = await prisma.assignment_submission.delete({
     *   where: {
     *     // ... filter to delete one Assignment_submission
     *   }
     * })
     * 
     */
    delete<T extends assignment_submissionDeleteArgs>(args: SelectSubset<T, assignment_submissionDeleteArgs<ExtArgs>>): Prisma__assignment_submissionClient<$Result.GetResult<Prisma.$assignment_submissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment_submission.
     * @param {assignment_submissionUpdateArgs} args - Arguments to update one Assignment_submission.
     * @example
     * // Update one Assignment_submission
     * const assignment_submission = await prisma.assignment_submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends assignment_submissionUpdateArgs>(args: SelectSubset<T, assignment_submissionUpdateArgs<ExtArgs>>): Prisma__assignment_submissionClient<$Result.GetResult<Prisma.$assignment_submissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignment_submissions.
     * @param {assignment_submissionDeleteManyArgs} args - Arguments to filter Assignment_submissions to delete.
     * @example
     * // Delete a few Assignment_submissions
     * const { count } = await prisma.assignment_submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends assignment_submissionDeleteManyArgs>(args?: SelectSubset<T, assignment_submissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignment_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignment_submissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignment_submissions
     * const assignment_submission = await prisma.assignment_submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends assignment_submissionUpdateManyArgs>(args: SelectSubset<T, assignment_submissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Assignment_submission.
     * @param {assignment_submissionUpsertArgs} args - Arguments to update or create a Assignment_submission.
     * @example
     * // Update or create a Assignment_submission
     * const assignment_submission = await prisma.assignment_submission.upsert({
     *   create: {
     *     // ... data to create a Assignment_submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment_submission we want to update
     *   }
     * })
     */
    upsert<T extends assignment_submissionUpsertArgs>(args: SelectSubset<T, assignment_submissionUpsertArgs<ExtArgs>>): Prisma__assignment_submissionClient<$Result.GetResult<Prisma.$assignment_submissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignment_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignment_submissionCountArgs} args - Arguments to filter Assignment_submissions to count.
     * @example
     * // Count the number of Assignment_submissions
     * const count = await prisma.assignment_submission.count({
     *   where: {
     *     // ... the filter for the Assignment_submissions we want to count
     *   }
     * })
    **/
    count<T extends assignment_submissionCountArgs>(
      args?: Subset<T, assignment_submissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Assignment_submissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment_submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Assignment_submissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Assignment_submissionAggregateArgs>(args: Subset<T, Assignment_submissionAggregateArgs>): Prisma.PrismaPromise<GetAssignment_submissionAggregateType<T>>

    /**
     * Group by Assignment_submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assignment_submissionGroupByArgs} args - Group by arguments.
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
      T extends assignment_submissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: assignment_submissionGroupByArgs['orderBy'] }
        : { orderBy?: assignment_submissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, assignment_submissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignment_submissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the assignment_submission model
   */
  readonly fields: assignment_submissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for assignment_submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__assignment_submissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the assignment_submission model
   */
  interface assignment_submissionFieldRefs {
    readonly submission_id: FieldRef<"assignment_submission", 'Int'>
    readonly assignment_id: FieldRef<"assignment_submission", 'Int'>
    readonly student_course_code: FieldRef<"assignment_submission", 'String'>
    readonly submissionDate: FieldRef<"assignment_submission", 'DateTime'>
    readonly status: FieldRef<"assignment_submission", 'String'>
    readonly grade: FieldRef<"assignment_submission", 'String'>
    readonly remarks: FieldRef<"assignment_submission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * assignment_submission findUnique
   */
  export type assignment_submissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment_submission
     */
    select?: assignment_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment_submission
     */
    omit?: assignment_submissionOmit<ExtArgs> | null
    /**
     * Filter, which assignment_submission to fetch.
     */
    where: assignment_submissionWhereUniqueInput
  }

  /**
   * assignment_submission findUniqueOrThrow
   */
  export type assignment_submissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment_submission
     */
    select?: assignment_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment_submission
     */
    omit?: assignment_submissionOmit<ExtArgs> | null
    /**
     * Filter, which assignment_submission to fetch.
     */
    where: assignment_submissionWhereUniqueInput
  }

  /**
   * assignment_submission findFirst
   */
  export type assignment_submissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment_submission
     */
    select?: assignment_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment_submission
     */
    omit?: assignment_submissionOmit<ExtArgs> | null
    /**
     * Filter, which assignment_submission to fetch.
     */
    where?: assignment_submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignment_submissions to fetch.
     */
    orderBy?: assignment_submissionOrderByWithRelationInput | assignment_submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for assignment_submissions.
     */
    cursor?: assignment_submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignment_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignment_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of assignment_submissions.
     */
    distinct?: Assignment_submissionScalarFieldEnum | Assignment_submissionScalarFieldEnum[]
  }

  /**
   * assignment_submission findFirstOrThrow
   */
  export type assignment_submissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment_submission
     */
    select?: assignment_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment_submission
     */
    omit?: assignment_submissionOmit<ExtArgs> | null
    /**
     * Filter, which assignment_submission to fetch.
     */
    where?: assignment_submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignment_submissions to fetch.
     */
    orderBy?: assignment_submissionOrderByWithRelationInput | assignment_submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for assignment_submissions.
     */
    cursor?: assignment_submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignment_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignment_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of assignment_submissions.
     */
    distinct?: Assignment_submissionScalarFieldEnum | Assignment_submissionScalarFieldEnum[]
  }

  /**
   * assignment_submission findMany
   */
  export type assignment_submissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment_submission
     */
    select?: assignment_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment_submission
     */
    omit?: assignment_submissionOmit<ExtArgs> | null
    /**
     * Filter, which assignment_submissions to fetch.
     */
    where?: assignment_submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assignment_submissions to fetch.
     */
    orderBy?: assignment_submissionOrderByWithRelationInput | assignment_submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing assignment_submissions.
     */
    cursor?: assignment_submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assignment_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assignment_submissions.
     */
    skip?: number
    distinct?: Assignment_submissionScalarFieldEnum | Assignment_submissionScalarFieldEnum[]
  }

  /**
   * assignment_submission create
   */
  export type assignment_submissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment_submission
     */
    select?: assignment_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment_submission
     */
    omit?: assignment_submissionOmit<ExtArgs> | null
    /**
     * The data needed to create a assignment_submission.
     */
    data: XOR<assignment_submissionCreateInput, assignment_submissionUncheckedCreateInput>
  }

  /**
   * assignment_submission createMany
   */
  export type assignment_submissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many assignment_submissions.
     */
    data: assignment_submissionCreateManyInput | assignment_submissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * assignment_submission update
   */
  export type assignment_submissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment_submission
     */
    select?: assignment_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment_submission
     */
    omit?: assignment_submissionOmit<ExtArgs> | null
    /**
     * The data needed to update a assignment_submission.
     */
    data: XOR<assignment_submissionUpdateInput, assignment_submissionUncheckedUpdateInput>
    /**
     * Choose, which assignment_submission to update.
     */
    where: assignment_submissionWhereUniqueInput
  }

  /**
   * assignment_submission updateMany
   */
  export type assignment_submissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update assignment_submissions.
     */
    data: XOR<assignment_submissionUpdateManyMutationInput, assignment_submissionUncheckedUpdateManyInput>
    /**
     * Filter which assignment_submissions to update
     */
    where?: assignment_submissionWhereInput
    /**
     * Limit how many assignment_submissions to update.
     */
    limit?: number
  }

  /**
   * assignment_submission upsert
   */
  export type assignment_submissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment_submission
     */
    select?: assignment_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment_submission
     */
    omit?: assignment_submissionOmit<ExtArgs> | null
    /**
     * The filter to search for the assignment_submission to update in case it exists.
     */
    where: assignment_submissionWhereUniqueInput
    /**
     * In case the assignment_submission found by the `where` argument doesn't exist, create a new assignment_submission with this data.
     */
    create: XOR<assignment_submissionCreateInput, assignment_submissionUncheckedCreateInput>
    /**
     * In case the assignment_submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<assignment_submissionUpdateInput, assignment_submissionUncheckedUpdateInput>
  }

  /**
   * assignment_submission delete
   */
  export type assignment_submissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment_submission
     */
    select?: assignment_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment_submission
     */
    omit?: assignment_submissionOmit<ExtArgs> | null
    /**
     * Filter which assignment_submission to delete.
     */
    where: assignment_submissionWhereUniqueInput
  }

  /**
   * assignment_submission deleteMany
   */
  export type assignment_submissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assignment_submissions to delete
     */
    where?: assignment_submissionWhereInput
    /**
     * Limit how many assignment_submissions to delete.
     */
    limit?: number
  }

  /**
   * assignment_submission without action
   */
  export type assignment_submissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assignment_submission
     */
    select?: assignment_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assignment_submission
     */
    omit?: assignment_submissionOmit<ExtArgs> | null
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


  export const CourseScalarFieldEnum: {
    course_id: 'course_id',
    course_name: 'course_name',
    credits: 'credits',
    num_lectures: 'num_lectures',
    department_id: 'department_id',
    semester: 'semester'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    d_id: 'd_id',
    name: 'name',
    HodId: 'HodId',
    Email: 'Email'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const StudentsScalarFieldEnum: {
    PRN_Number: 'PRN_Number',
    Password: 'Password',
    First_Name: 'First_Name',
    Middle_Name: 'Middle_Name',
    Last_Name: 'Last_Name',
    Name: 'Name',
    Mothers_Name: 'Mothers_Name',
    Email: 'Email',
    Gender: 'Gender',
    Date_of_Birth: 'Date_of_Birth',
    Date_of_Admission: 'Date_of_Admission',
    Street_and_House: 'Street_and_House',
    City: 'City',
    State: 'State',
    PIN_Code: 'PIN_Code',
    Contact_Number: 'Contact_Number',
    Aadhar_Card_Number: 'Aadhar_Card_Number',
    Department_id: 'Department_id',
    Class: 'Class',
    Roll_No: 'Roll_No',
    HSC_Score: 'HSC_Score',
    CET_Percentile: 'CET_Percentile',
    Semester: 'Semester',
    Category: 'Category',
    Year: 'Year'
  };

  export type StudentsScalarFieldEnum = (typeof StudentsScalarFieldEnum)[keyof typeof StudentsScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    t_id: 't_id',
    gender: 'gender',
    qualification: 'qualification',
    designation: 'designation',
    email: 'email',
    password: 'password',
    contact_number: 'contact_number',
    join_date: 'join_date',
    department_id: 'department_id',
    name: 'name',
    salary: 'salary'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const Teacher_courseScalarFieldEnum: {
    id: 'id',
    teacher_id: 'teacher_id',
    course_id: 'course_id'
  };

  export type Teacher_courseScalarFieldEnum = (typeof Teacher_courseScalarFieldEnum)[keyof typeof Teacher_courseScalarFieldEnum]


  export const LectureScalarFieldEnum: {
    id: 'id',
    course_id: 'course_id',
    teacher_id: 'teacher_id',
    lecture_date: 'lecture_date',
    topic: 'topic'
  };

  export type LectureScalarFieldEnum = (typeof LectureScalarFieldEnum)[keyof typeof LectureScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    course_id: 'course_id',
    date: 'date',
    present: 'present',
    teacher_id: 'teacher_id'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const Assignment_submissionScalarFieldEnum: {
    submission_id: 'submission_id',
    assignment_id: 'assignment_id',
    student_course_code: 'student_course_code',
    submissionDate: 'submissionDate',
    status: 'status',
    grade: 'grade',
    remarks: 'remarks'
  };

  export type Assignment_submissionScalarFieldEnum = (typeof Assignment_submissionScalarFieldEnum)[keyof typeof Assignment_submissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const courseOrderByRelevanceFieldEnum: {
    course_name: 'course_name'
  };

  export type courseOrderByRelevanceFieldEnum = (typeof courseOrderByRelevanceFieldEnum)[keyof typeof courseOrderByRelevanceFieldEnum]


  export const departmentOrderByRelevanceFieldEnum: {
    name: 'name',
    Email: 'Email'
  };

  export type departmentOrderByRelevanceFieldEnum = (typeof departmentOrderByRelevanceFieldEnum)[keyof typeof departmentOrderByRelevanceFieldEnum]


  export const studentsOrderByRelevanceFieldEnum: {
    Password: 'Password',
    First_Name: 'First_Name',
    Middle_Name: 'Middle_Name',
    Last_Name: 'Last_Name',
    Name: 'Name',
    Mothers_Name: 'Mothers_Name',
    Email: 'Email',
    Street_and_House: 'Street_and_House',
    City: 'City',
    State: 'State',
    PIN_Code: 'PIN_Code',
    Contact_Number: 'Contact_Number',
    Aadhar_Card_Number: 'Aadhar_Card_Number',
    Class: 'Class',
    Roll_No: 'Roll_No',
    Semester: 'Semester',
    Category: 'Category'
  };

  export type studentsOrderByRelevanceFieldEnum = (typeof studentsOrderByRelevanceFieldEnum)[keyof typeof studentsOrderByRelevanceFieldEnum]


  export const teacherOrderByRelevanceFieldEnum: {
    qualification: 'qualification',
    email: 'email',
    password: 'password',
    contact_number: 'contact_number',
    name: 'name'
  };

  export type teacherOrderByRelevanceFieldEnum = (typeof teacherOrderByRelevanceFieldEnum)[keyof typeof teacherOrderByRelevanceFieldEnum]


  export const lectureOrderByRelevanceFieldEnum: {
    topic: 'topic'
  };

  export type lectureOrderByRelevanceFieldEnum = (typeof lectureOrderByRelevanceFieldEnum)[keyof typeof lectureOrderByRelevanceFieldEnum]


  export const assignment_submissionOrderByRelevanceFieldEnum: {
    student_course_code: 'student_course_code',
    status: 'status',
    grade: 'grade',
    remarks: 'remarks'
  };

  export type assignment_submissionOrderByRelevanceFieldEnum = (typeof assignment_submissionOrderByRelevanceFieldEnum)[keyof typeof assignment_submissionOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'gender'
   */
  export type EnumgenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'teacher_designation'
   */
  export type Enumteacher_designationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'teacher_designation'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type courseWhereInput = {
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    course_id?: IntFilter<"course"> | number
    course_name?: StringNullableFilter<"course"> | string | null
    credits?: IntNullableFilter<"course"> | number | null
    num_lectures?: IntNullableFilter<"course"> | number | null
    department_id?: IntNullableFilter<"course"> | number | null
    semester?: IntNullableFilter<"course"> | number | null
    teacher_courses?: Teacher_courseListRelationFilter
    lectures?: LectureListRelationFilter
    attendances?: AttendanceListRelationFilter
  }

  export type courseOrderByWithRelationInput = {
    course_id?: SortOrder
    course_name?: SortOrderInput | SortOrder
    credits?: SortOrderInput | SortOrder
    num_lectures?: SortOrderInput | SortOrder
    department_id?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    teacher_courses?: teacher_courseOrderByRelationAggregateInput
    lectures?: lectureOrderByRelationAggregateInput
    attendances?: attendanceOrderByRelationAggregateInput
    _relevance?: courseOrderByRelevanceInput
  }

  export type courseWhereUniqueInput = Prisma.AtLeast<{
    course_id?: number
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    course_name?: StringNullableFilter<"course"> | string | null
    credits?: IntNullableFilter<"course"> | number | null
    num_lectures?: IntNullableFilter<"course"> | number | null
    department_id?: IntNullableFilter<"course"> | number | null
    semester?: IntNullableFilter<"course"> | number | null
    teacher_courses?: Teacher_courseListRelationFilter
    lectures?: LectureListRelationFilter
    attendances?: AttendanceListRelationFilter
  }, "course_id">

  export type courseOrderByWithAggregationInput = {
    course_id?: SortOrder
    course_name?: SortOrderInput | SortOrder
    credits?: SortOrderInput | SortOrder
    num_lectures?: SortOrderInput | SortOrder
    department_id?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    _count?: courseCountOrderByAggregateInput
    _avg?: courseAvgOrderByAggregateInput
    _max?: courseMaxOrderByAggregateInput
    _min?: courseMinOrderByAggregateInput
    _sum?: courseSumOrderByAggregateInput
  }

  export type courseScalarWhereWithAggregatesInput = {
    AND?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    OR?: courseScalarWhereWithAggregatesInput[]
    NOT?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    course_id?: IntWithAggregatesFilter<"course"> | number
    course_name?: StringNullableWithAggregatesFilter<"course"> | string | null
    credits?: IntNullableWithAggregatesFilter<"course"> | number | null
    num_lectures?: IntNullableWithAggregatesFilter<"course"> | number | null
    department_id?: IntNullableWithAggregatesFilter<"course"> | number | null
    semester?: IntNullableWithAggregatesFilter<"course"> | number | null
  }

  export type departmentWhereInput = {
    AND?: departmentWhereInput | departmentWhereInput[]
    OR?: departmentWhereInput[]
    NOT?: departmentWhereInput | departmentWhereInput[]
    d_id?: IntFilter<"department"> | number
    name?: StringFilter<"department"> | string
    HodId?: IntNullableFilter<"department"> | number | null
    Email?: StringNullableFilter<"department"> | string | null
  }

  export type departmentOrderByWithRelationInput = {
    d_id?: SortOrder
    name?: SortOrder
    HodId?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    _relevance?: departmentOrderByRelevanceInput
  }

  export type departmentWhereUniqueInput = Prisma.AtLeast<{
    d_id?: number
    AND?: departmentWhereInput | departmentWhereInput[]
    OR?: departmentWhereInput[]
    NOT?: departmentWhereInput | departmentWhereInput[]
    name?: StringFilter<"department"> | string
    HodId?: IntNullableFilter<"department"> | number | null
    Email?: StringNullableFilter<"department"> | string | null
  }, "d_id">

  export type departmentOrderByWithAggregationInput = {
    d_id?: SortOrder
    name?: SortOrder
    HodId?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    _count?: departmentCountOrderByAggregateInput
    _avg?: departmentAvgOrderByAggregateInput
    _max?: departmentMaxOrderByAggregateInput
    _min?: departmentMinOrderByAggregateInput
    _sum?: departmentSumOrderByAggregateInput
  }

  export type departmentScalarWhereWithAggregatesInput = {
    AND?: departmentScalarWhereWithAggregatesInput | departmentScalarWhereWithAggregatesInput[]
    OR?: departmentScalarWhereWithAggregatesInput[]
    NOT?: departmentScalarWhereWithAggregatesInput | departmentScalarWhereWithAggregatesInput[]
    d_id?: IntWithAggregatesFilter<"department"> | number
    name?: StringWithAggregatesFilter<"department"> | string
    HodId?: IntNullableWithAggregatesFilter<"department"> | number | null
    Email?: StringNullableWithAggregatesFilter<"department"> | string | null
  }

  export type studentsWhereInput = {
    AND?: studentsWhereInput | studentsWhereInput[]
    OR?: studentsWhereInput[]
    NOT?: studentsWhereInput | studentsWhereInput[]
    PRN_Number?: IntFilter<"students"> | number
    Password?: StringNullableFilter<"students"> | string | null
    First_Name?: StringNullableFilter<"students"> | string | null
    Middle_Name?: StringNullableFilter<"students"> | string | null
    Last_Name?: StringNullableFilter<"students"> | string | null
    Name?: StringNullableFilter<"students"> | string | null
    Mothers_Name?: StringNullableFilter<"students"> | string | null
    Email?: StringNullableFilter<"students"> | string | null
    Gender?: EnumgenderNullableFilter<"students"> | $Enums.gender | null
    Date_of_Birth?: DateTimeNullableFilter<"students"> | Date | string | null
    Date_of_Admission?: DateTimeNullableFilter<"students"> | Date | string | null
    Street_and_House?: StringNullableFilter<"students"> | string | null
    City?: StringNullableFilter<"students"> | string | null
    State?: StringNullableFilter<"students"> | string | null
    PIN_Code?: StringNullableFilter<"students"> | string | null
    Contact_Number?: StringNullableFilter<"students"> | string | null
    Aadhar_Card_Number?: StringNullableFilter<"students"> | string | null
    Department_id?: IntNullableFilter<"students"> | number | null
    Class?: StringNullableFilter<"students"> | string | null
    Roll_No?: StringNullableFilter<"students"> | string | null
    HSC_Score?: FloatNullableFilter<"students"> | number | null
    CET_Percentile?: FloatNullableFilter<"students"> | number | null
    Semester?: StringNullableFilter<"students"> | string | null
    Category?: StringNullableFilter<"students"> | string | null
    Year?: IntNullableFilter<"students"> | number | null
  }

  export type studentsOrderByWithRelationInput = {
    PRN_Number?: SortOrder
    Password?: SortOrderInput | SortOrder
    First_Name?: SortOrderInput | SortOrder
    Middle_Name?: SortOrderInput | SortOrder
    Last_Name?: SortOrderInput | SortOrder
    Name?: SortOrderInput | SortOrder
    Mothers_Name?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Gender?: SortOrderInput | SortOrder
    Date_of_Birth?: SortOrderInput | SortOrder
    Date_of_Admission?: SortOrderInput | SortOrder
    Street_and_House?: SortOrderInput | SortOrder
    City?: SortOrderInput | SortOrder
    State?: SortOrderInput | SortOrder
    PIN_Code?: SortOrderInput | SortOrder
    Contact_Number?: SortOrderInput | SortOrder
    Aadhar_Card_Number?: SortOrderInput | SortOrder
    Department_id?: SortOrderInput | SortOrder
    Class?: SortOrderInput | SortOrder
    Roll_No?: SortOrderInput | SortOrder
    HSC_Score?: SortOrderInput | SortOrder
    CET_Percentile?: SortOrderInput | SortOrder
    Semester?: SortOrderInput | SortOrder
    Category?: SortOrderInput | SortOrder
    Year?: SortOrderInput | SortOrder
    _relevance?: studentsOrderByRelevanceInput
  }

  export type studentsWhereUniqueInput = Prisma.AtLeast<{
    PRN_Number?: number
    AND?: studentsWhereInput | studentsWhereInput[]
    OR?: studentsWhereInput[]
    NOT?: studentsWhereInput | studentsWhereInput[]
    Password?: StringNullableFilter<"students"> | string | null
    First_Name?: StringNullableFilter<"students"> | string | null
    Middle_Name?: StringNullableFilter<"students"> | string | null
    Last_Name?: StringNullableFilter<"students"> | string | null
    Name?: StringNullableFilter<"students"> | string | null
    Mothers_Name?: StringNullableFilter<"students"> | string | null
    Email?: StringNullableFilter<"students"> | string | null
    Gender?: EnumgenderNullableFilter<"students"> | $Enums.gender | null
    Date_of_Birth?: DateTimeNullableFilter<"students"> | Date | string | null
    Date_of_Admission?: DateTimeNullableFilter<"students"> | Date | string | null
    Street_and_House?: StringNullableFilter<"students"> | string | null
    City?: StringNullableFilter<"students"> | string | null
    State?: StringNullableFilter<"students"> | string | null
    PIN_Code?: StringNullableFilter<"students"> | string | null
    Contact_Number?: StringNullableFilter<"students"> | string | null
    Aadhar_Card_Number?: StringNullableFilter<"students"> | string | null
    Department_id?: IntNullableFilter<"students"> | number | null
    Class?: StringNullableFilter<"students"> | string | null
    Roll_No?: StringNullableFilter<"students"> | string | null
    HSC_Score?: FloatNullableFilter<"students"> | number | null
    CET_Percentile?: FloatNullableFilter<"students"> | number | null
    Semester?: StringNullableFilter<"students"> | string | null
    Category?: StringNullableFilter<"students"> | string | null
    Year?: IntNullableFilter<"students"> | number | null
  }, "PRN_Number">

  export type studentsOrderByWithAggregationInput = {
    PRN_Number?: SortOrder
    Password?: SortOrderInput | SortOrder
    First_Name?: SortOrderInput | SortOrder
    Middle_Name?: SortOrderInput | SortOrder
    Last_Name?: SortOrderInput | SortOrder
    Name?: SortOrderInput | SortOrder
    Mothers_Name?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Gender?: SortOrderInput | SortOrder
    Date_of_Birth?: SortOrderInput | SortOrder
    Date_of_Admission?: SortOrderInput | SortOrder
    Street_and_House?: SortOrderInput | SortOrder
    City?: SortOrderInput | SortOrder
    State?: SortOrderInput | SortOrder
    PIN_Code?: SortOrderInput | SortOrder
    Contact_Number?: SortOrderInput | SortOrder
    Aadhar_Card_Number?: SortOrderInput | SortOrder
    Department_id?: SortOrderInput | SortOrder
    Class?: SortOrderInput | SortOrder
    Roll_No?: SortOrderInput | SortOrder
    HSC_Score?: SortOrderInput | SortOrder
    CET_Percentile?: SortOrderInput | SortOrder
    Semester?: SortOrderInput | SortOrder
    Category?: SortOrderInput | SortOrder
    Year?: SortOrderInput | SortOrder
    _count?: studentsCountOrderByAggregateInput
    _avg?: studentsAvgOrderByAggregateInput
    _max?: studentsMaxOrderByAggregateInput
    _min?: studentsMinOrderByAggregateInput
    _sum?: studentsSumOrderByAggregateInput
  }

  export type studentsScalarWhereWithAggregatesInput = {
    AND?: studentsScalarWhereWithAggregatesInput | studentsScalarWhereWithAggregatesInput[]
    OR?: studentsScalarWhereWithAggregatesInput[]
    NOT?: studentsScalarWhereWithAggregatesInput | studentsScalarWhereWithAggregatesInput[]
    PRN_Number?: IntWithAggregatesFilter<"students"> | number
    Password?: StringNullableWithAggregatesFilter<"students"> | string | null
    First_Name?: StringNullableWithAggregatesFilter<"students"> | string | null
    Middle_Name?: StringNullableWithAggregatesFilter<"students"> | string | null
    Last_Name?: StringNullableWithAggregatesFilter<"students"> | string | null
    Name?: StringNullableWithAggregatesFilter<"students"> | string | null
    Mothers_Name?: StringNullableWithAggregatesFilter<"students"> | string | null
    Email?: StringNullableWithAggregatesFilter<"students"> | string | null
    Gender?: EnumgenderNullableWithAggregatesFilter<"students"> | $Enums.gender | null
    Date_of_Birth?: DateTimeNullableWithAggregatesFilter<"students"> | Date | string | null
    Date_of_Admission?: DateTimeNullableWithAggregatesFilter<"students"> | Date | string | null
    Street_and_House?: StringNullableWithAggregatesFilter<"students"> | string | null
    City?: StringNullableWithAggregatesFilter<"students"> | string | null
    State?: StringNullableWithAggregatesFilter<"students"> | string | null
    PIN_Code?: StringNullableWithAggregatesFilter<"students"> | string | null
    Contact_Number?: StringNullableWithAggregatesFilter<"students"> | string | null
    Aadhar_Card_Number?: StringNullableWithAggregatesFilter<"students"> | string | null
    Department_id?: IntNullableWithAggregatesFilter<"students"> | number | null
    Class?: StringNullableWithAggregatesFilter<"students"> | string | null
    Roll_No?: StringNullableWithAggregatesFilter<"students"> | string | null
    HSC_Score?: FloatNullableWithAggregatesFilter<"students"> | number | null
    CET_Percentile?: FloatNullableWithAggregatesFilter<"students"> | number | null
    Semester?: StringNullableWithAggregatesFilter<"students"> | string | null
    Category?: StringNullableWithAggregatesFilter<"students"> | string | null
    Year?: IntNullableWithAggregatesFilter<"students"> | number | null
  }

  export type teacherWhereInput = {
    AND?: teacherWhereInput | teacherWhereInput[]
    OR?: teacherWhereInput[]
    NOT?: teacherWhereInput | teacherWhereInput[]
    t_id?: IntFilter<"teacher"> | number
    gender?: EnumgenderFilter<"teacher"> | $Enums.gender
    qualification?: StringFilter<"teacher"> | string
    designation?: Enumteacher_designationFilter<"teacher"> | $Enums.teacher_designation
    email?: StringFilter<"teacher"> | string
    password?: StringFilter<"teacher"> | string
    contact_number?: StringNullableFilter<"teacher"> | string | null
    join_date?: DateTimeFilter<"teacher"> | Date | string
    department_id?: IntNullableFilter<"teacher"> | number | null
    name?: StringNullableFilter<"teacher"> | string | null
    salary?: IntNullableFilter<"teacher"> | number | null
    teacher_courses?: Teacher_courseListRelationFilter
    lectures?: LectureListRelationFilter
    attendances?: AttendanceListRelationFilter
  }

  export type teacherOrderByWithRelationInput = {
    t_id?: SortOrder
    gender?: SortOrder
    qualification?: SortOrder
    designation?: SortOrder
    email?: SortOrder
    password?: SortOrder
    contact_number?: SortOrderInput | SortOrder
    join_date?: SortOrder
    department_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    teacher_courses?: teacher_courseOrderByRelationAggregateInput
    lectures?: lectureOrderByRelationAggregateInput
    attendances?: attendanceOrderByRelationAggregateInput
    _relevance?: teacherOrderByRelevanceInput
  }

  export type teacherWhereUniqueInput = Prisma.AtLeast<{
    t_id?: number
    email?: string
    AND?: teacherWhereInput | teacherWhereInput[]
    OR?: teacherWhereInput[]
    NOT?: teacherWhereInput | teacherWhereInput[]
    gender?: EnumgenderFilter<"teacher"> | $Enums.gender
    qualification?: StringFilter<"teacher"> | string
    designation?: Enumteacher_designationFilter<"teacher"> | $Enums.teacher_designation
    password?: StringFilter<"teacher"> | string
    contact_number?: StringNullableFilter<"teacher"> | string | null
    join_date?: DateTimeFilter<"teacher"> | Date | string
    department_id?: IntNullableFilter<"teacher"> | number | null
    name?: StringNullableFilter<"teacher"> | string | null
    salary?: IntNullableFilter<"teacher"> | number | null
    teacher_courses?: Teacher_courseListRelationFilter
    lectures?: LectureListRelationFilter
    attendances?: AttendanceListRelationFilter
  }, "t_id" | "email">

  export type teacherOrderByWithAggregationInput = {
    t_id?: SortOrder
    gender?: SortOrder
    qualification?: SortOrder
    designation?: SortOrder
    email?: SortOrder
    password?: SortOrder
    contact_number?: SortOrderInput | SortOrder
    join_date?: SortOrder
    department_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    salary?: SortOrderInput | SortOrder
    _count?: teacherCountOrderByAggregateInput
    _avg?: teacherAvgOrderByAggregateInput
    _max?: teacherMaxOrderByAggregateInput
    _min?: teacherMinOrderByAggregateInput
    _sum?: teacherSumOrderByAggregateInput
  }

  export type teacherScalarWhereWithAggregatesInput = {
    AND?: teacherScalarWhereWithAggregatesInput | teacherScalarWhereWithAggregatesInput[]
    OR?: teacherScalarWhereWithAggregatesInput[]
    NOT?: teacherScalarWhereWithAggregatesInput | teacherScalarWhereWithAggregatesInput[]
    t_id?: IntWithAggregatesFilter<"teacher"> | number
    gender?: EnumgenderWithAggregatesFilter<"teacher"> | $Enums.gender
    qualification?: StringWithAggregatesFilter<"teacher"> | string
    designation?: Enumteacher_designationWithAggregatesFilter<"teacher"> | $Enums.teacher_designation
    email?: StringWithAggregatesFilter<"teacher"> | string
    password?: StringWithAggregatesFilter<"teacher"> | string
    contact_number?: StringNullableWithAggregatesFilter<"teacher"> | string | null
    join_date?: DateTimeWithAggregatesFilter<"teacher"> | Date | string
    department_id?: IntNullableWithAggregatesFilter<"teacher"> | number | null
    name?: StringNullableWithAggregatesFilter<"teacher"> | string | null
    salary?: IntNullableWithAggregatesFilter<"teacher"> | number | null
  }

  export type teacher_courseWhereInput = {
    AND?: teacher_courseWhereInput | teacher_courseWhereInput[]
    OR?: teacher_courseWhereInput[]
    NOT?: teacher_courseWhereInput | teacher_courseWhereInput[]
    id?: IntFilter<"teacher_course"> | number
    teacher_id?: IntFilter<"teacher_course"> | number
    course_id?: IntFilter<"teacher_course"> | number
    teacher?: XOR<TeacherScalarRelationFilter, teacherWhereInput>
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }

  export type teacher_courseOrderByWithRelationInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    course_id?: SortOrder
    teacher?: teacherOrderByWithRelationInput
    course?: courseOrderByWithRelationInput
  }

  export type teacher_courseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teacher_id_course_id?: teacher_courseTeacher_idCourse_idCompoundUniqueInput
    AND?: teacher_courseWhereInput | teacher_courseWhereInput[]
    OR?: teacher_courseWhereInput[]
    NOT?: teacher_courseWhereInput | teacher_courseWhereInput[]
    teacher_id?: IntFilter<"teacher_course"> | number
    course_id?: IntFilter<"teacher_course"> | number
    teacher?: XOR<TeacherScalarRelationFilter, teacherWhereInput>
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }, "id" | "teacher_id_course_id">

  export type teacher_courseOrderByWithAggregationInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    course_id?: SortOrder
    _count?: teacher_courseCountOrderByAggregateInput
    _avg?: teacher_courseAvgOrderByAggregateInput
    _max?: teacher_courseMaxOrderByAggregateInput
    _min?: teacher_courseMinOrderByAggregateInput
    _sum?: teacher_courseSumOrderByAggregateInput
  }

  export type teacher_courseScalarWhereWithAggregatesInput = {
    AND?: teacher_courseScalarWhereWithAggregatesInput | teacher_courseScalarWhereWithAggregatesInput[]
    OR?: teacher_courseScalarWhereWithAggregatesInput[]
    NOT?: teacher_courseScalarWhereWithAggregatesInput | teacher_courseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"teacher_course"> | number
    teacher_id?: IntWithAggregatesFilter<"teacher_course"> | number
    course_id?: IntWithAggregatesFilter<"teacher_course"> | number
  }

  export type lectureWhereInput = {
    AND?: lectureWhereInput | lectureWhereInput[]
    OR?: lectureWhereInput[]
    NOT?: lectureWhereInput | lectureWhereInput[]
    id?: IntFilter<"lecture"> | number
    course_id?: IntFilter<"lecture"> | number
    teacher_id?: IntFilter<"lecture"> | number
    lecture_date?: DateTimeFilter<"lecture"> | Date | string
    topic?: StringNullableFilter<"lecture"> | string | null
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, teacherWhereInput>
  }

  export type lectureOrderByWithRelationInput = {
    id?: SortOrder
    course_id?: SortOrder
    teacher_id?: SortOrder
    lecture_date?: SortOrder
    topic?: SortOrderInput | SortOrder
    course?: courseOrderByWithRelationInput
    teacher?: teacherOrderByWithRelationInput
    _relevance?: lectureOrderByRelevanceInput
  }

  export type lectureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: lectureWhereInput | lectureWhereInput[]
    OR?: lectureWhereInput[]
    NOT?: lectureWhereInput | lectureWhereInput[]
    course_id?: IntFilter<"lecture"> | number
    teacher_id?: IntFilter<"lecture"> | number
    lecture_date?: DateTimeFilter<"lecture"> | Date | string
    topic?: StringNullableFilter<"lecture"> | string | null
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, teacherWhereInput>
  }, "id">

  export type lectureOrderByWithAggregationInput = {
    id?: SortOrder
    course_id?: SortOrder
    teacher_id?: SortOrder
    lecture_date?: SortOrder
    topic?: SortOrderInput | SortOrder
    _count?: lectureCountOrderByAggregateInput
    _avg?: lectureAvgOrderByAggregateInput
    _max?: lectureMaxOrderByAggregateInput
    _min?: lectureMinOrderByAggregateInput
    _sum?: lectureSumOrderByAggregateInput
  }

  export type lectureScalarWhereWithAggregatesInput = {
    AND?: lectureScalarWhereWithAggregatesInput | lectureScalarWhereWithAggregatesInput[]
    OR?: lectureScalarWhereWithAggregatesInput[]
    NOT?: lectureScalarWhereWithAggregatesInput | lectureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"lecture"> | number
    course_id?: IntWithAggregatesFilter<"lecture"> | number
    teacher_id?: IntWithAggregatesFilter<"lecture"> | number
    lecture_date?: DateTimeWithAggregatesFilter<"lecture"> | Date | string
    topic?: StringNullableWithAggregatesFilter<"lecture"> | string | null
  }

  export type attendanceWhereInput = {
    AND?: attendanceWhereInput | attendanceWhereInput[]
    OR?: attendanceWhereInput[]
    NOT?: attendanceWhereInput | attendanceWhereInput[]
    id?: IntFilter<"attendance"> | number
    course_id?: IntFilter<"attendance"> | number
    date?: DateTimeFilter<"attendance"> | Date | string
    present?: BoolFilter<"attendance"> | boolean
    teacher_id?: IntFilter<"attendance"> | number
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, teacherWhereInput>
  }

  export type attendanceOrderByWithRelationInput = {
    id?: SortOrder
    course_id?: SortOrder
    date?: SortOrder
    present?: SortOrder
    teacher_id?: SortOrder
    course?: courseOrderByWithRelationInput
    teacher?: teacherOrderByWithRelationInput
  }

  export type attendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    course_id_date_teacher_id?: attendanceCourse_idDateTeacher_idCompoundUniqueInput
    AND?: attendanceWhereInput | attendanceWhereInput[]
    OR?: attendanceWhereInput[]
    NOT?: attendanceWhereInput | attendanceWhereInput[]
    course_id?: IntFilter<"attendance"> | number
    date?: DateTimeFilter<"attendance"> | Date | string
    present?: BoolFilter<"attendance"> | boolean
    teacher_id?: IntFilter<"attendance"> | number
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    teacher?: XOR<TeacherScalarRelationFilter, teacherWhereInput>
  }, "id" | "course_id_date_teacher_id">

  export type attendanceOrderByWithAggregationInput = {
    id?: SortOrder
    course_id?: SortOrder
    date?: SortOrder
    present?: SortOrder
    teacher_id?: SortOrder
    _count?: attendanceCountOrderByAggregateInput
    _avg?: attendanceAvgOrderByAggregateInput
    _max?: attendanceMaxOrderByAggregateInput
    _min?: attendanceMinOrderByAggregateInput
    _sum?: attendanceSumOrderByAggregateInput
  }

  export type attendanceScalarWhereWithAggregatesInput = {
    AND?: attendanceScalarWhereWithAggregatesInput | attendanceScalarWhereWithAggregatesInput[]
    OR?: attendanceScalarWhereWithAggregatesInput[]
    NOT?: attendanceScalarWhereWithAggregatesInput | attendanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"attendance"> | number
    course_id?: IntWithAggregatesFilter<"attendance"> | number
    date?: DateTimeWithAggregatesFilter<"attendance"> | Date | string
    present?: BoolWithAggregatesFilter<"attendance"> | boolean
    teacher_id?: IntWithAggregatesFilter<"attendance"> | number
  }

  export type assignment_submissionWhereInput = {
    AND?: assignment_submissionWhereInput | assignment_submissionWhereInput[]
    OR?: assignment_submissionWhereInput[]
    NOT?: assignment_submissionWhereInput | assignment_submissionWhereInput[]
    submission_id?: IntFilter<"assignment_submission"> | number
    assignment_id?: IntFilter<"assignment_submission"> | number
    student_course_code?: StringFilter<"assignment_submission"> | string
    submissionDate?: DateTimeNullableFilter<"assignment_submission"> | Date | string | null
    status?: StringFilter<"assignment_submission"> | string
    grade?: StringNullableFilter<"assignment_submission"> | string | null
    remarks?: StringNullableFilter<"assignment_submission"> | string | null
  }

  export type assignment_submissionOrderByWithRelationInput = {
    submission_id?: SortOrder
    assignment_id?: SortOrder
    student_course_code?: SortOrder
    submissionDate?: SortOrderInput | SortOrder
    status?: SortOrder
    grade?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    _relevance?: assignment_submissionOrderByRelevanceInput
  }

  export type assignment_submissionWhereUniqueInput = Prisma.AtLeast<{
    submission_id?: number
    AND?: assignment_submissionWhereInput | assignment_submissionWhereInput[]
    OR?: assignment_submissionWhereInput[]
    NOT?: assignment_submissionWhereInput | assignment_submissionWhereInput[]
    assignment_id?: IntFilter<"assignment_submission"> | number
    student_course_code?: StringFilter<"assignment_submission"> | string
    submissionDate?: DateTimeNullableFilter<"assignment_submission"> | Date | string | null
    status?: StringFilter<"assignment_submission"> | string
    grade?: StringNullableFilter<"assignment_submission"> | string | null
    remarks?: StringNullableFilter<"assignment_submission"> | string | null
  }, "submission_id">

  export type assignment_submissionOrderByWithAggregationInput = {
    submission_id?: SortOrder
    assignment_id?: SortOrder
    student_course_code?: SortOrder
    submissionDate?: SortOrderInput | SortOrder
    status?: SortOrder
    grade?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    _count?: assignment_submissionCountOrderByAggregateInput
    _avg?: assignment_submissionAvgOrderByAggregateInput
    _max?: assignment_submissionMaxOrderByAggregateInput
    _min?: assignment_submissionMinOrderByAggregateInput
    _sum?: assignment_submissionSumOrderByAggregateInput
  }

  export type assignment_submissionScalarWhereWithAggregatesInput = {
    AND?: assignment_submissionScalarWhereWithAggregatesInput | assignment_submissionScalarWhereWithAggregatesInput[]
    OR?: assignment_submissionScalarWhereWithAggregatesInput[]
    NOT?: assignment_submissionScalarWhereWithAggregatesInput | assignment_submissionScalarWhereWithAggregatesInput[]
    submission_id?: IntWithAggregatesFilter<"assignment_submission"> | number
    assignment_id?: IntWithAggregatesFilter<"assignment_submission"> | number
    student_course_code?: StringWithAggregatesFilter<"assignment_submission"> | string
    submissionDate?: DateTimeNullableWithAggregatesFilter<"assignment_submission"> | Date | string | null
    status?: StringWithAggregatesFilter<"assignment_submission"> | string
    grade?: StringNullableWithAggregatesFilter<"assignment_submission"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"assignment_submission"> | string | null
  }

  export type courseCreateInput = {
    course_id: number
    course_name?: string | null
    credits?: number | null
    num_lectures?: number | null
    department_id?: number | null
    semester?: number | null
    teacher_courses?: teacher_courseCreateNestedManyWithoutCourseInput
    lectures?: lectureCreateNestedManyWithoutCourseInput
    attendances?: attendanceCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateInput = {
    course_id: number
    course_name?: string | null
    credits?: number | null
    num_lectures?: number | null
    department_id?: number | null
    semester?: number | null
    teacher_courses?: teacher_courseUncheckedCreateNestedManyWithoutCourseInput
    lectures?: lectureUncheckedCreateNestedManyWithoutCourseInput
    attendances?: attendanceUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseUpdateInput = {
    course_id?: IntFieldUpdateOperationsInput | number
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    num_lectures?: NullableIntFieldUpdateOperationsInput | number | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    teacher_courses?: teacher_courseUpdateManyWithoutCourseNestedInput
    lectures?: lectureUpdateManyWithoutCourseNestedInput
    attendances?: attendanceUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateInput = {
    course_id?: IntFieldUpdateOperationsInput | number
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    num_lectures?: NullableIntFieldUpdateOperationsInput | number | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    teacher_courses?: teacher_courseUncheckedUpdateManyWithoutCourseNestedInput
    lectures?: lectureUncheckedUpdateManyWithoutCourseNestedInput
    attendances?: attendanceUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseCreateManyInput = {
    course_id: number
    course_name?: string | null
    credits?: number | null
    num_lectures?: number | null
    department_id?: number | null
    semester?: number | null
  }

  export type courseUpdateManyMutationInput = {
    course_id?: IntFieldUpdateOperationsInput | number
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    num_lectures?: NullableIntFieldUpdateOperationsInput | number | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type courseUncheckedUpdateManyInput = {
    course_id?: IntFieldUpdateOperationsInput | number
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    num_lectures?: NullableIntFieldUpdateOperationsInput | number | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type departmentCreateInput = {
    d_id: number
    name: string
    HodId?: number | null
    Email?: string | null
  }

  export type departmentUncheckedCreateInput = {
    d_id: number
    name: string
    HodId?: number | null
    Email?: string | null
  }

  export type departmentUpdateInput = {
    d_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    HodId?: NullableIntFieldUpdateOperationsInput | number | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type departmentUncheckedUpdateInput = {
    d_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    HodId?: NullableIntFieldUpdateOperationsInput | number | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type departmentCreateManyInput = {
    d_id: number
    name: string
    HodId?: number | null
    Email?: string | null
  }

  export type departmentUpdateManyMutationInput = {
    d_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    HodId?: NullableIntFieldUpdateOperationsInput | number | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type departmentUncheckedUpdateManyInput = {
    d_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    HodId?: NullableIntFieldUpdateOperationsInput | number | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type studentsCreateInput = {
    PRN_Number: number
    Password?: string | null
    First_Name?: string | null
    Middle_Name?: string | null
    Last_Name?: string | null
    Name?: string | null
    Mothers_Name?: string | null
    Email?: string | null
    Gender?: $Enums.gender | null
    Date_of_Birth?: Date | string | null
    Date_of_Admission?: Date | string | null
    Street_and_House?: string | null
    City?: string | null
    State?: string | null
    PIN_Code?: string | null
    Contact_Number?: string | null
    Aadhar_Card_Number?: string | null
    Department_id?: number | null
    Class?: string | null
    Roll_No?: string | null
    HSC_Score?: number | null
    CET_Percentile?: number | null
    Semester?: string | null
    Category?: string | null
    Year?: number | null
  }

  export type studentsUncheckedCreateInput = {
    PRN_Number: number
    Password?: string | null
    First_Name?: string | null
    Middle_Name?: string | null
    Last_Name?: string | null
    Name?: string | null
    Mothers_Name?: string | null
    Email?: string | null
    Gender?: $Enums.gender | null
    Date_of_Birth?: Date | string | null
    Date_of_Admission?: Date | string | null
    Street_and_House?: string | null
    City?: string | null
    State?: string | null
    PIN_Code?: string | null
    Contact_Number?: string | null
    Aadhar_Card_Number?: string | null
    Department_id?: number | null
    Class?: string | null
    Roll_No?: string | null
    HSC_Score?: number | null
    CET_Percentile?: number | null
    Semester?: string | null
    Category?: string | null
    Year?: number | null
  }

  export type studentsUpdateInput = {
    PRN_Number?: IntFieldUpdateOperationsInput | number
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    First_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Middle_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Last_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Mothers_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    Date_of_Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Date_of_Admission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Street_and_House?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    PIN_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Contact_Number?: NullableStringFieldUpdateOperationsInput | string | null
    Aadhar_Card_Number?: NullableStringFieldUpdateOperationsInput | string | null
    Department_id?: NullableIntFieldUpdateOperationsInput | number | null
    Class?: NullableStringFieldUpdateOperationsInput | string | null
    Roll_No?: NullableStringFieldUpdateOperationsInput | string | null
    HSC_Score?: NullableFloatFieldUpdateOperationsInput | number | null
    CET_Percentile?: NullableFloatFieldUpdateOperationsInput | number | null
    Semester?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: NullableStringFieldUpdateOperationsInput | string | null
    Year?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type studentsUncheckedUpdateInput = {
    PRN_Number?: IntFieldUpdateOperationsInput | number
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    First_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Middle_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Last_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Mothers_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    Date_of_Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Date_of_Admission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Street_and_House?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    PIN_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Contact_Number?: NullableStringFieldUpdateOperationsInput | string | null
    Aadhar_Card_Number?: NullableStringFieldUpdateOperationsInput | string | null
    Department_id?: NullableIntFieldUpdateOperationsInput | number | null
    Class?: NullableStringFieldUpdateOperationsInput | string | null
    Roll_No?: NullableStringFieldUpdateOperationsInput | string | null
    HSC_Score?: NullableFloatFieldUpdateOperationsInput | number | null
    CET_Percentile?: NullableFloatFieldUpdateOperationsInput | number | null
    Semester?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: NullableStringFieldUpdateOperationsInput | string | null
    Year?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type studentsCreateManyInput = {
    PRN_Number: number
    Password?: string | null
    First_Name?: string | null
    Middle_Name?: string | null
    Last_Name?: string | null
    Name?: string | null
    Mothers_Name?: string | null
    Email?: string | null
    Gender?: $Enums.gender | null
    Date_of_Birth?: Date | string | null
    Date_of_Admission?: Date | string | null
    Street_and_House?: string | null
    City?: string | null
    State?: string | null
    PIN_Code?: string | null
    Contact_Number?: string | null
    Aadhar_Card_Number?: string | null
    Department_id?: number | null
    Class?: string | null
    Roll_No?: string | null
    HSC_Score?: number | null
    CET_Percentile?: number | null
    Semester?: string | null
    Category?: string | null
    Year?: number | null
  }

  export type studentsUpdateManyMutationInput = {
    PRN_Number?: IntFieldUpdateOperationsInput | number
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    First_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Middle_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Last_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Mothers_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    Date_of_Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Date_of_Admission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Street_and_House?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    PIN_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Contact_Number?: NullableStringFieldUpdateOperationsInput | string | null
    Aadhar_Card_Number?: NullableStringFieldUpdateOperationsInput | string | null
    Department_id?: NullableIntFieldUpdateOperationsInput | number | null
    Class?: NullableStringFieldUpdateOperationsInput | string | null
    Roll_No?: NullableStringFieldUpdateOperationsInput | string | null
    HSC_Score?: NullableFloatFieldUpdateOperationsInput | number | null
    CET_Percentile?: NullableFloatFieldUpdateOperationsInput | number | null
    Semester?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: NullableStringFieldUpdateOperationsInput | string | null
    Year?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type studentsUncheckedUpdateManyInput = {
    PRN_Number?: IntFieldUpdateOperationsInput | number
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    First_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Middle_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Last_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Name?: NullableStringFieldUpdateOperationsInput | string | null
    Mothers_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    Date_of_Birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Date_of_Admission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Street_and_House?: NullableStringFieldUpdateOperationsInput | string | null
    City?: NullableStringFieldUpdateOperationsInput | string | null
    State?: NullableStringFieldUpdateOperationsInput | string | null
    PIN_Code?: NullableStringFieldUpdateOperationsInput | string | null
    Contact_Number?: NullableStringFieldUpdateOperationsInput | string | null
    Aadhar_Card_Number?: NullableStringFieldUpdateOperationsInput | string | null
    Department_id?: NullableIntFieldUpdateOperationsInput | number | null
    Class?: NullableStringFieldUpdateOperationsInput | string | null
    Roll_No?: NullableStringFieldUpdateOperationsInput | string | null
    HSC_Score?: NullableFloatFieldUpdateOperationsInput | number | null
    CET_Percentile?: NullableFloatFieldUpdateOperationsInput | number | null
    Semester?: NullableStringFieldUpdateOperationsInput | string | null
    Category?: NullableStringFieldUpdateOperationsInput | string | null
    Year?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type teacherCreateInput = {
    gender: $Enums.gender
    qualification: string
    designation: $Enums.teacher_designation
    email: string
    password: string
    contact_number?: string | null
    join_date: Date | string
    department_id?: number | null
    name?: string | null
    salary?: number | null
    teacher_courses?: teacher_courseCreateNestedManyWithoutTeacherInput
    lectures?: lectureCreateNestedManyWithoutTeacherInput
    attendances?: attendanceCreateNestedManyWithoutTeacherInput
  }

  export type teacherUncheckedCreateInput = {
    t_id?: number
    gender: $Enums.gender
    qualification: string
    designation: $Enums.teacher_designation
    email: string
    password: string
    contact_number?: string | null
    join_date: Date | string
    department_id?: number | null
    name?: string | null
    salary?: number | null
    teacher_courses?: teacher_courseUncheckedCreateNestedManyWithoutTeacherInput
    lectures?: lectureUncheckedCreateNestedManyWithoutTeacherInput
    attendances?: attendanceUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type teacherUpdateInput = {
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    qualification?: StringFieldUpdateOperationsInput | string
    designation?: Enumteacher_designationFieldUpdateOperationsInput | $Enums.teacher_designation
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    join_date?: DateTimeFieldUpdateOperationsInput | Date | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    teacher_courses?: teacher_courseUpdateManyWithoutTeacherNestedInput
    lectures?: lectureUpdateManyWithoutTeacherNestedInput
    attendances?: attendanceUpdateManyWithoutTeacherNestedInput
  }

  export type teacherUncheckedUpdateInput = {
    t_id?: IntFieldUpdateOperationsInput | number
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    qualification?: StringFieldUpdateOperationsInput | string
    designation?: Enumteacher_designationFieldUpdateOperationsInput | $Enums.teacher_designation
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    join_date?: DateTimeFieldUpdateOperationsInput | Date | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    teacher_courses?: teacher_courseUncheckedUpdateManyWithoutTeacherNestedInput
    lectures?: lectureUncheckedUpdateManyWithoutTeacherNestedInput
    attendances?: attendanceUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type teacherCreateManyInput = {
    t_id?: number
    gender: $Enums.gender
    qualification: string
    designation: $Enums.teacher_designation
    email: string
    password: string
    contact_number?: string | null
    join_date: Date | string
    department_id?: number | null
    name?: string | null
    salary?: number | null
  }

  export type teacherUpdateManyMutationInput = {
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    qualification?: StringFieldUpdateOperationsInput | string
    designation?: Enumteacher_designationFieldUpdateOperationsInput | $Enums.teacher_designation
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    join_date?: DateTimeFieldUpdateOperationsInput | Date | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type teacherUncheckedUpdateManyInput = {
    t_id?: IntFieldUpdateOperationsInput | number
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    qualification?: StringFieldUpdateOperationsInput | string
    designation?: Enumteacher_designationFieldUpdateOperationsInput | $Enums.teacher_designation
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    join_date?: DateTimeFieldUpdateOperationsInput | Date | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type teacher_courseCreateInput = {
    teacher: teacherCreateNestedOneWithoutTeacher_coursesInput
    course: courseCreateNestedOneWithoutTeacher_coursesInput
  }

  export type teacher_courseUncheckedCreateInput = {
    id?: number
    teacher_id: number
    course_id: number
  }

  export type teacher_courseUpdateInput = {
    teacher?: teacherUpdateOneRequiredWithoutTeacher_coursesNestedInput
    course?: courseUpdateOneRequiredWithoutTeacher_coursesNestedInput
  }

  export type teacher_courseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type teacher_courseCreateManyInput = {
    id?: number
    teacher_id: number
    course_id: number
  }

  export type teacher_courseUpdateManyMutationInput = {

  }

  export type teacher_courseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type lectureCreateInput = {
    lecture_date: Date | string
    topic?: string | null
    course: courseCreateNestedOneWithoutLecturesInput
    teacher: teacherCreateNestedOneWithoutLecturesInput
  }

  export type lectureUncheckedCreateInput = {
    id?: number
    course_id: number
    teacher_id: number
    lecture_date: Date | string
    topic?: string | null
  }

  export type lectureUpdateInput = {
    lecture_date?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    course?: courseUpdateOneRequiredWithoutLecturesNestedInput
    teacher?: teacherUpdateOneRequiredWithoutLecturesNestedInput
  }

  export type lectureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    lecture_date?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type lectureCreateManyInput = {
    id?: number
    course_id: number
    teacher_id: number
    lecture_date: Date | string
    topic?: string | null
  }

  export type lectureUpdateManyMutationInput = {
    lecture_date?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type lectureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    lecture_date?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type attendanceCreateInput = {
    date: Date | string
    present: boolean
    course: courseCreateNestedOneWithoutAttendancesInput
    teacher: teacherCreateNestedOneWithoutAttendancesInput
  }

  export type attendanceUncheckedCreateInput = {
    id?: number
    course_id: number
    date: Date | string
    present: boolean
    teacher_id: number
  }

  export type attendanceUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
    course?: courseUpdateOneRequiredWithoutAttendancesNestedInput
    teacher?: teacherUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type attendanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
    teacher_id?: IntFieldUpdateOperationsInput | number
  }

  export type attendanceCreateManyInput = {
    id?: number
    course_id: number
    date: Date | string
    present: boolean
    teacher_id: number
  }

  export type attendanceUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
  }

  export type attendanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
    teacher_id?: IntFieldUpdateOperationsInput | number
  }

  export type assignment_submissionCreateInput = {
    assignment_id: number
    student_course_code: string
    submissionDate?: Date | string | null
    status: string
    grade?: string | null
    remarks?: string | null
  }

  export type assignment_submissionUncheckedCreateInput = {
    submission_id?: number
    assignment_id: number
    student_course_code: string
    submissionDate?: Date | string | null
    status: string
    grade?: string | null
    remarks?: string | null
  }

  export type assignment_submissionUpdateInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    student_course_code?: StringFieldUpdateOperationsInput | string
    submissionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type assignment_submissionUncheckedUpdateInput = {
    submission_id?: IntFieldUpdateOperationsInput | number
    assignment_id?: IntFieldUpdateOperationsInput | number
    student_course_code?: StringFieldUpdateOperationsInput | string
    submissionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type assignment_submissionCreateManyInput = {
    submission_id?: number
    assignment_id: number
    student_course_code: string
    submissionDate?: Date | string | null
    status: string
    grade?: string | null
    remarks?: string | null
  }

  export type assignment_submissionUpdateManyMutationInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    student_course_code?: StringFieldUpdateOperationsInput | string
    submissionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type assignment_submissionUncheckedUpdateManyInput = {
    submission_id?: IntFieldUpdateOperationsInput | number
    assignment_id?: IntFieldUpdateOperationsInput | number
    student_course_code?: StringFieldUpdateOperationsInput | string
    submissionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type Teacher_courseListRelationFilter = {
    every?: teacher_courseWhereInput
    some?: teacher_courseWhereInput
    none?: teacher_courseWhereInput
  }

  export type LectureListRelationFilter = {
    every?: lectureWhereInput
    some?: lectureWhereInput
    none?: lectureWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: attendanceWhereInput
    some?: attendanceWhereInput
    none?: attendanceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type teacher_courseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type lectureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type attendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type courseOrderByRelevanceInput = {
    fields: courseOrderByRelevanceFieldEnum | courseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type courseCountOrderByAggregateInput = {
    course_id?: SortOrder
    course_name?: SortOrder
    credits?: SortOrder
    num_lectures?: SortOrder
    department_id?: SortOrder
    semester?: SortOrder
  }

  export type courseAvgOrderByAggregateInput = {
    course_id?: SortOrder
    credits?: SortOrder
    num_lectures?: SortOrder
    department_id?: SortOrder
    semester?: SortOrder
  }

  export type courseMaxOrderByAggregateInput = {
    course_id?: SortOrder
    course_name?: SortOrder
    credits?: SortOrder
    num_lectures?: SortOrder
    department_id?: SortOrder
    semester?: SortOrder
  }

  export type courseMinOrderByAggregateInput = {
    course_id?: SortOrder
    course_name?: SortOrder
    credits?: SortOrder
    num_lectures?: SortOrder
    department_id?: SortOrder
    semester?: SortOrder
  }

  export type courseSumOrderByAggregateInput = {
    course_id?: SortOrder
    credits?: SortOrder
    num_lectures?: SortOrder
    department_id?: SortOrder
    semester?: SortOrder
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

  export type departmentOrderByRelevanceInput = {
    fields: departmentOrderByRelevanceFieldEnum | departmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type departmentCountOrderByAggregateInput = {
    d_id?: SortOrder
    name?: SortOrder
    HodId?: SortOrder
    Email?: SortOrder
  }

  export type departmentAvgOrderByAggregateInput = {
    d_id?: SortOrder
    HodId?: SortOrder
  }

  export type departmentMaxOrderByAggregateInput = {
    d_id?: SortOrder
    name?: SortOrder
    HodId?: SortOrder
    Email?: SortOrder
  }

  export type departmentMinOrderByAggregateInput = {
    d_id?: SortOrder
    name?: SortOrder
    HodId?: SortOrder
    Email?: SortOrder
  }

  export type departmentSumOrderByAggregateInput = {
    d_id?: SortOrder
    HodId?: SortOrder
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

  export type EnumgenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender[] | null
    notIn?: $Enums.gender[] | null
    not?: NestedEnumgenderNullableFilter<$PrismaModel> | $Enums.gender | null
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

  export type studentsOrderByRelevanceInput = {
    fields: studentsOrderByRelevanceFieldEnum | studentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type studentsCountOrderByAggregateInput = {
    PRN_Number?: SortOrder
    Password?: SortOrder
    First_Name?: SortOrder
    Middle_Name?: SortOrder
    Last_Name?: SortOrder
    Name?: SortOrder
    Mothers_Name?: SortOrder
    Email?: SortOrder
    Gender?: SortOrder
    Date_of_Birth?: SortOrder
    Date_of_Admission?: SortOrder
    Street_and_House?: SortOrder
    City?: SortOrder
    State?: SortOrder
    PIN_Code?: SortOrder
    Contact_Number?: SortOrder
    Aadhar_Card_Number?: SortOrder
    Department_id?: SortOrder
    Class?: SortOrder
    Roll_No?: SortOrder
    HSC_Score?: SortOrder
    CET_Percentile?: SortOrder
    Semester?: SortOrder
    Category?: SortOrder
    Year?: SortOrder
  }

  export type studentsAvgOrderByAggregateInput = {
    PRN_Number?: SortOrder
    Department_id?: SortOrder
    HSC_Score?: SortOrder
    CET_Percentile?: SortOrder
    Year?: SortOrder
  }

  export type studentsMaxOrderByAggregateInput = {
    PRN_Number?: SortOrder
    Password?: SortOrder
    First_Name?: SortOrder
    Middle_Name?: SortOrder
    Last_Name?: SortOrder
    Name?: SortOrder
    Mothers_Name?: SortOrder
    Email?: SortOrder
    Gender?: SortOrder
    Date_of_Birth?: SortOrder
    Date_of_Admission?: SortOrder
    Street_and_House?: SortOrder
    City?: SortOrder
    State?: SortOrder
    PIN_Code?: SortOrder
    Contact_Number?: SortOrder
    Aadhar_Card_Number?: SortOrder
    Department_id?: SortOrder
    Class?: SortOrder
    Roll_No?: SortOrder
    HSC_Score?: SortOrder
    CET_Percentile?: SortOrder
    Semester?: SortOrder
    Category?: SortOrder
    Year?: SortOrder
  }

  export type studentsMinOrderByAggregateInput = {
    PRN_Number?: SortOrder
    Password?: SortOrder
    First_Name?: SortOrder
    Middle_Name?: SortOrder
    Last_Name?: SortOrder
    Name?: SortOrder
    Mothers_Name?: SortOrder
    Email?: SortOrder
    Gender?: SortOrder
    Date_of_Birth?: SortOrder
    Date_of_Admission?: SortOrder
    Street_and_House?: SortOrder
    City?: SortOrder
    State?: SortOrder
    PIN_Code?: SortOrder
    Contact_Number?: SortOrder
    Aadhar_Card_Number?: SortOrder
    Department_id?: SortOrder
    Class?: SortOrder
    Roll_No?: SortOrder
    HSC_Score?: SortOrder
    CET_Percentile?: SortOrder
    Semester?: SortOrder
    Category?: SortOrder
    Year?: SortOrder
  }

  export type studentsSumOrderByAggregateInput = {
    PRN_Number?: SortOrder
    Department_id?: SortOrder
    HSC_Score?: SortOrder
    CET_Percentile?: SortOrder
    Year?: SortOrder
  }

  export type EnumgenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender[] | null
    notIn?: $Enums.gender[] | null
    not?: NestedEnumgenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumgenderNullableFilter<$PrismaModel>
    _max?: NestedEnumgenderNullableFilter<$PrismaModel>
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

  export type EnumgenderFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel>
    in?: $Enums.gender[]
    notIn?: $Enums.gender[]
    not?: NestedEnumgenderFilter<$PrismaModel> | $Enums.gender
  }

  export type Enumteacher_designationFilter<$PrismaModel = never> = {
    equals?: $Enums.teacher_designation | Enumteacher_designationFieldRefInput<$PrismaModel>
    in?: $Enums.teacher_designation[]
    notIn?: $Enums.teacher_designation[]
    not?: NestedEnumteacher_designationFilter<$PrismaModel> | $Enums.teacher_designation
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

  export type teacherOrderByRelevanceInput = {
    fields: teacherOrderByRelevanceFieldEnum | teacherOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type teacherCountOrderByAggregateInput = {
    t_id?: SortOrder
    gender?: SortOrder
    qualification?: SortOrder
    designation?: SortOrder
    email?: SortOrder
    password?: SortOrder
    contact_number?: SortOrder
    join_date?: SortOrder
    department_id?: SortOrder
    name?: SortOrder
    salary?: SortOrder
  }

  export type teacherAvgOrderByAggregateInput = {
    t_id?: SortOrder
    department_id?: SortOrder
    salary?: SortOrder
  }

  export type teacherMaxOrderByAggregateInput = {
    t_id?: SortOrder
    gender?: SortOrder
    qualification?: SortOrder
    designation?: SortOrder
    email?: SortOrder
    password?: SortOrder
    contact_number?: SortOrder
    join_date?: SortOrder
    department_id?: SortOrder
    name?: SortOrder
    salary?: SortOrder
  }

  export type teacherMinOrderByAggregateInput = {
    t_id?: SortOrder
    gender?: SortOrder
    qualification?: SortOrder
    designation?: SortOrder
    email?: SortOrder
    password?: SortOrder
    contact_number?: SortOrder
    join_date?: SortOrder
    department_id?: SortOrder
    name?: SortOrder
    salary?: SortOrder
  }

  export type teacherSumOrderByAggregateInput = {
    t_id?: SortOrder
    department_id?: SortOrder
    salary?: SortOrder
  }

  export type EnumgenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel>
    in?: $Enums.gender[]
    notIn?: $Enums.gender[]
    not?: NestedEnumgenderWithAggregatesFilter<$PrismaModel> | $Enums.gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgenderFilter<$PrismaModel>
    _max?: NestedEnumgenderFilter<$PrismaModel>
  }

  export type Enumteacher_designationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.teacher_designation | Enumteacher_designationFieldRefInput<$PrismaModel>
    in?: $Enums.teacher_designation[]
    notIn?: $Enums.teacher_designation[]
    not?: NestedEnumteacher_designationWithAggregatesFilter<$PrismaModel> | $Enums.teacher_designation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumteacher_designationFilter<$PrismaModel>
    _max?: NestedEnumteacher_designationFilter<$PrismaModel>
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

  export type TeacherScalarRelationFilter = {
    is?: teacherWhereInput
    isNot?: teacherWhereInput
  }

  export type CourseScalarRelationFilter = {
    is?: courseWhereInput
    isNot?: courseWhereInput
  }

  export type teacher_courseTeacher_idCourse_idCompoundUniqueInput = {
    teacher_id: number
    course_id: number
  }

  export type teacher_courseCountOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    course_id?: SortOrder
  }

  export type teacher_courseAvgOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    course_id?: SortOrder
  }

  export type teacher_courseMaxOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    course_id?: SortOrder
  }

  export type teacher_courseMinOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    course_id?: SortOrder
  }

  export type teacher_courseSumOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    course_id?: SortOrder
  }

  export type lectureOrderByRelevanceInput = {
    fields: lectureOrderByRelevanceFieldEnum | lectureOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type lectureCountOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    teacher_id?: SortOrder
    lecture_date?: SortOrder
    topic?: SortOrder
  }

  export type lectureAvgOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type lectureMaxOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    teacher_id?: SortOrder
    lecture_date?: SortOrder
    topic?: SortOrder
  }

  export type lectureMinOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    teacher_id?: SortOrder
    lecture_date?: SortOrder
    topic?: SortOrder
  }

  export type lectureSumOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type attendanceCourse_idDateTeacher_idCompoundUniqueInput = {
    course_id: number
    date: Date | string
    teacher_id: number
  }

  export type attendanceCountOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    date?: SortOrder
    present?: SortOrder
    teacher_id?: SortOrder
  }

  export type attendanceAvgOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type attendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    date?: SortOrder
    present?: SortOrder
    teacher_id?: SortOrder
  }

  export type attendanceMinOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    date?: SortOrder
    present?: SortOrder
    teacher_id?: SortOrder
  }

  export type attendanceSumOrderByAggregateInput = {
    id?: SortOrder
    course_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type assignment_submissionOrderByRelevanceInput = {
    fields: assignment_submissionOrderByRelevanceFieldEnum | assignment_submissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type assignment_submissionCountOrderByAggregateInput = {
    submission_id?: SortOrder
    assignment_id?: SortOrder
    student_course_code?: SortOrder
    submissionDate?: SortOrder
    status?: SortOrder
    grade?: SortOrder
    remarks?: SortOrder
  }

  export type assignment_submissionAvgOrderByAggregateInput = {
    submission_id?: SortOrder
    assignment_id?: SortOrder
  }

  export type assignment_submissionMaxOrderByAggregateInput = {
    submission_id?: SortOrder
    assignment_id?: SortOrder
    student_course_code?: SortOrder
    submissionDate?: SortOrder
    status?: SortOrder
    grade?: SortOrder
    remarks?: SortOrder
  }

  export type assignment_submissionMinOrderByAggregateInput = {
    submission_id?: SortOrder
    assignment_id?: SortOrder
    student_course_code?: SortOrder
    submissionDate?: SortOrder
    status?: SortOrder
    grade?: SortOrder
    remarks?: SortOrder
  }

  export type assignment_submissionSumOrderByAggregateInput = {
    submission_id?: SortOrder
    assignment_id?: SortOrder
  }

  export type teacher_courseCreateNestedManyWithoutCourseInput = {
    create?: XOR<teacher_courseCreateWithoutCourseInput, teacher_courseUncheckedCreateWithoutCourseInput> | teacher_courseCreateWithoutCourseInput[] | teacher_courseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: teacher_courseCreateOrConnectWithoutCourseInput | teacher_courseCreateOrConnectWithoutCourseInput[]
    createMany?: teacher_courseCreateManyCourseInputEnvelope
    connect?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
  }

  export type lectureCreateNestedManyWithoutCourseInput = {
    create?: XOR<lectureCreateWithoutCourseInput, lectureUncheckedCreateWithoutCourseInput> | lectureCreateWithoutCourseInput[] | lectureUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutCourseInput | lectureCreateOrConnectWithoutCourseInput[]
    createMany?: lectureCreateManyCourseInputEnvelope
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
  }

  export type attendanceCreateNestedManyWithoutCourseInput = {
    create?: XOR<attendanceCreateWithoutCourseInput, attendanceUncheckedCreateWithoutCourseInput> | attendanceCreateWithoutCourseInput[] | attendanceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutCourseInput | attendanceCreateOrConnectWithoutCourseInput[]
    createMany?: attendanceCreateManyCourseInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type teacher_courseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<teacher_courseCreateWithoutCourseInput, teacher_courseUncheckedCreateWithoutCourseInput> | teacher_courseCreateWithoutCourseInput[] | teacher_courseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: teacher_courseCreateOrConnectWithoutCourseInput | teacher_courseCreateOrConnectWithoutCourseInput[]
    createMany?: teacher_courseCreateManyCourseInputEnvelope
    connect?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
  }

  export type lectureUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<lectureCreateWithoutCourseInput, lectureUncheckedCreateWithoutCourseInput> | lectureCreateWithoutCourseInput[] | lectureUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutCourseInput | lectureCreateOrConnectWithoutCourseInput[]
    createMany?: lectureCreateManyCourseInputEnvelope
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
  }

  export type attendanceUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<attendanceCreateWithoutCourseInput, attendanceUncheckedCreateWithoutCourseInput> | attendanceCreateWithoutCourseInput[] | attendanceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutCourseInput | attendanceCreateOrConnectWithoutCourseInput[]
    createMany?: attendanceCreateManyCourseInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type teacher_courseUpdateManyWithoutCourseNestedInput = {
    create?: XOR<teacher_courseCreateWithoutCourseInput, teacher_courseUncheckedCreateWithoutCourseInput> | teacher_courseCreateWithoutCourseInput[] | teacher_courseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: teacher_courseCreateOrConnectWithoutCourseInput | teacher_courseCreateOrConnectWithoutCourseInput[]
    upsert?: teacher_courseUpsertWithWhereUniqueWithoutCourseInput | teacher_courseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: teacher_courseCreateManyCourseInputEnvelope
    set?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
    disconnect?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
    delete?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
    connect?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
    update?: teacher_courseUpdateWithWhereUniqueWithoutCourseInput | teacher_courseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: teacher_courseUpdateManyWithWhereWithoutCourseInput | teacher_courseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: teacher_courseScalarWhereInput | teacher_courseScalarWhereInput[]
  }

  export type lectureUpdateManyWithoutCourseNestedInput = {
    create?: XOR<lectureCreateWithoutCourseInput, lectureUncheckedCreateWithoutCourseInput> | lectureCreateWithoutCourseInput[] | lectureUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutCourseInput | lectureCreateOrConnectWithoutCourseInput[]
    upsert?: lectureUpsertWithWhereUniqueWithoutCourseInput | lectureUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: lectureCreateManyCourseInputEnvelope
    set?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    disconnect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    delete?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    update?: lectureUpdateWithWhereUniqueWithoutCourseInput | lectureUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: lectureUpdateManyWithWhereWithoutCourseInput | lectureUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: lectureScalarWhereInput | lectureScalarWhereInput[]
  }

  export type attendanceUpdateManyWithoutCourseNestedInput = {
    create?: XOR<attendanceCreateWithoutCourseInput, attendanceUncheckedCreateWithoutCourseInput> | attendanceCreateWithoutCourseInput[] | attendanceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutCourseInput | attendanceCreateOrConnectWithoutCourseInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutCourseInput | attendanceUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: attendanceCreateManyCourseInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutCourseInput | attendanceUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutCourseInput | attendanceUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type teacher_courseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<teacher_courseCreateWithoutCourseInput, teacher_courseUncheckedCreateWithoutCourseInput> | teacher_courseCreateWithoutCourseInput[] | teacher_courseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: teacher_courseCreateOrConnectWithoutCourseInput | teacher_courseCreateOrConnectWithoutCourseInput[]
    upsert?: teacher_courseUpsertWithWhereUniqueWithoutCourseInput | teacher_courseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: teacher_courseCreateManyCourseInputEnvelope
    set?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
    disconnect?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
    delete?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
    connect?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
    update?: teacher_courseUpdateWithWhereUniqueWithoutCourseInput | teacher_courseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: teacher_courseUpdateManyWithWhereWithoutCourseInput | teacher_courseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: teacher_courseScalarWhereInput | teacher_courseScalarWhereInput[]
  }

  export type lectureUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<lectureCreateWithoutCourseInput, lectureUncheckedCreateWithoutCourseInput> | lectureCreateWithoutCourseInput[] | lectureUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutCourseInput | lectureCreateOrConnectWithoutCourseInput[]
    upsert?: lectureUpsertWithWhereUniqueWithoutCourseInput | lectureUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: lectureCreateManyCourseInputEnvelope
    set?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    disconnect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    delete?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    update?: lectureUpdateWithWhereUniqueWithoutCourseInput | lectureUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: lectureUpdateManyWithWhereWithoutCourseInput | lectureUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: lectureScalarWhereInput | lectureScalarWhereInput[]
  }

  export type attendanceUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<attendanceCreateWithoutCourseInput, attendanceUncheckedCreateWithoutCourseInput> | attendanceCreateWithoutCourseInput[] | attendanceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutCourseInput | attendanceCreateOrConnectWithoutCourseInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutCourseInput | attendanceUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: attendanceCreateManyCourseInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutCourseInput | attendanceUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutCourseInput | attendanceUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumgenderFieldUpdateOperationsInput = {
    set?: $Enums.gender | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type teacher_courseCreateNestedManyWithoutTeacherInput = {
    create?: XOR<teacher_courseCreateWithoutTeacherInput, teacher_courseUncheckedCreateWithoutTeacherInput> | teacher_courseCreateWithoutTeacherInput[] | teacher_courseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: teacher_courseCreateOrConnectWithoutTeacherInput | teacher_courseCreateOrConnectWithoutTeacherInput[]
    createMany?: teacher_courseCreateManyTeacherInputEnvelope
    connect?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
  }

  export type lectureCreateNestedManyWithoutTeacherInput = {
    create?: XOR<lectureCreateWithoutTeacherInput, lectureUncheckedCreateWithoutTeacherInput> | lectureCreateWithoutTeacherInput[] | lectureUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutTeacherInput | lectureCreateOrConnectWithoutTeacherInput[]
    createMany?: lectureCreateManyTeacherInputEnvelope
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
  }

  export type attendanceCreateNestedManyWithoutTeacherInput = {
    create?: XOR<attendanceCreateWithoutTeacherInput, attendanceUncheckedCreateWithoutTeacherInput> | attendanceCreateWithoutTeacherInput[] | attendanceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutTeacherInput | attendanceCreateOrConnectWithoutTeacherInput[]
    createMany?: attendanceCreateManyTeacherInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type teacher_courseUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<teacher_courseCreateWithoutTeacherInput, teacher_courseUncheckedCreateWithoutTeacherInput> | teacher_courseCreateWithoutTeacherInput[] | teacher_courseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: teacher_courseCreateOrConnectWithoutTeacherInput | teacher_courseCreateOrConnectWithoutTeacherInput[]
    createMany?: teacher_courseCreateManyTeacherInputEnvelope
    connect?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
  }

  export type lectureUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<lectureCreateWithoutTeacherInput, lectureUncheckedCreateWithoutTeacherInput> | lectureCreateWithoutTeacherInput[] | lectureUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutTeacherInput | lectureCreateOrConnectWithoutTeacherInput[]
    createMany?: lectureCreateManyTeacherInputEnvelope
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
  }

  export type attendanceUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<attendanceCreateWithoutTeacherInput, attendanceUncheckedCreateWithoutTeacherInput> | attendanceCreateWithoutTeacherInput[] | attendanceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutTeacherInput | attendanceCreateOrConnectWithoutTeacherInput[]
    createMany?: attendanceCreateManyTeacherInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type EnumgenderFieldUpdateOperationsInput = {
    set?: $Enums.gender
  }

  export type Enumteacher_designationFieldUpdateOperationsInput = {
    set?: $Enums.teacher_designation
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type teacher_courseUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<teacher_courseCreateWithoutTeacherInput, teacher_courseUncheckedCreateWithoutTeacherInput> | teacher_courseCreateWithoutTeacherInput[] | teacher_courseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: teacher_courseCreateOrConnectWithoutTeacherInput | teacher_courseCreateOrConnectWithoutTeacherInput[]
    upsert?: teacher_courseUpsertWithWhereUniqueWithoutTeacherInput | teacher_courseUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: teacher_courseCreateManyTeacherInputEnvelope
    set?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
    disconnect?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
    delete?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
    connect?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
    update?: teacher_courseUpdateWithWhereUniqueWithoutTeacherInput | teacher_courseUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: teacher_courseUpdateManyWithWhereWithoutTeacherInput | teacher_courseUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: teacher_courseScalarWhereInput | teacher_courseScalarWhereInput[]
  }

  export type lectureUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<lectureCreateWithoutTeacherInput, lectureUncheckedCreateWithoutTeacherInput> | lectureCreateWithoutTeacherInput[] | lectureUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutTeacherInput | lectureCreateOrConnectWithoutTeacherInput[]
    upsert?: lectureUpsertWithWhereUniqueWithoutTeacherInput | lectureUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: lectureCreateManyTeacherInputEnvelope
    set?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    disconnect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    delete?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    update?: lectureUpdateWithWhereUniqueWithoutTeacherInput | lectureUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: lectureUpdateManyWithWhereWithoutTeacherInput | lectureUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: lectureScalarWhereInput | lectureScalarWhereInput[]
  }

  export type attendanceUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<attendanceCreateWithoutTeacherInput, attendanceUncheckedCreateWithoutTeacherInput> | attendanceCreateWithoutTeacherInput[] | attendanceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutTeacherInput | attendanceCreateOrConnectWithoutTeacherInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutTeacherInput | attendanceUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: attendanceCreateManyTeacherInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutTeacherInput | attendanceUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutTeacherInput | attendanceUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type teacher_courseUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<teacher_courseCreateWithoutTeacherInput, teacher_courseUncheckedCreateWithoutTeacherInput> | teacher_courseCreateWithoutTeacherInput[] | teacher_courseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: teacher_courseCreateOrConnectWithoutTeacherInput | teacher_courseCreateOrConnectWithoutTeacherInput[]
    upsert?: teacher_courseUpsertWithWhereUniqueWithoutTeacherInput | teacher_courseUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: teacher_courseCreateManyTeacherInputEnvelope
    set?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
    disconnect?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
    delete?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
    connect?: teacher_courseWhereUniqueInput | teacher_courseWhereUniqueInput[]
    update?: teacher_courseUpdateWithWhereUniqueWithoutTeacherInput | teacher_courseUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: teacher_courseUpdateManyWithWhereWithoutTeacherInput | teacher_courseUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: teacher_courseScalarWhereInput | teacher_courseScalarWhereInput[]
  }

  export type lectureUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<lectureCreateWithoutTeacherInput, lectureUncheckedCreateWithoutTeacherInput> | lectureCreateWithoutTeacherInput[] | lectureUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: lectureCreateOrConnectWithoutTeacherInput | lectureCreateOrConnectWithoutTeacherInput[]
    upsert?: lectureUpsertWithWhereUniqueWithoutTeacherInput | lectureUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: lectureCreateManyTeacherInputEnvelope
    set?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    disconnect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    delete?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    connect?: lectureWhereUniqueInput | lectureWhereUniqueInput[]
    update?: lectureUpdateWithWhereUniqueWithoutTeacherInput | lectureUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: lectureUpdateManyWithWhereWithoutTeacherInput | lectureUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: lectureScalarWhereInput | lectureScalarWhereInput[]
  }

  export type attendanceUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<attendanceCreateWithoutTeacherInput, attendanceUncheckedCreateWithoutTeacherInput> | attendanceCreateWithoutTeacherInput[] | attendanceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutTeacherInput | attendanceCreateOrConnectWithoutTeacherInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutTeacherInput | attendanceUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: attendanceCreateManyTeacherInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutTeacherInput | attendanceUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutTeacherInput | attendanceUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type teacherCreateNestedOneWithoutTeacher_coursesInput = {
    create?: XOR<teacherCreateWithoutTeacher_coursesInput, teacherUncheckedCreateWithoutTeacher_coursesInput>
    connectOrCreate?: teacherCreateOrConnectWithoutTeacher_coursesInput
    connect?: teacherWhereUniqueInput
  }

  export type courseCreateNestedOneWithoutTeacher_coursesInput = {
    create?: XOR<courseCreateWithoutTeacher_coursesInput, courseUncheckedCreateWithoutTeacher_coursesInput>
    connectOrCreate?: courseCreateOrConnectWithoutTeacher_coursesInput
    connect?: courseWhereUniqueInput
  }

  export type teacherUpdateOneRequiredWithoutTeacher_coursesNestedInput = {
    create?: XOR<teacherCreateWithoutTeacher_coursesInput, teacherUncheckedCreateWithoutTeacher_coursesInput>
    connectOrCreate?: teacherCreateOrConnectWithoutTeacher_coursesInput
    upsert?: teacherUpsertWithoutTeacher_coursesInput
    connect?: teacherWhereUniqueInput
    update?: XOR<XOR<teacherUpdateToOneWithWhereWithoutTeacher_coursesInput, teacherUpdateWithoutTeacher_coursesInput>, teacherUncheckedUpdateWithoutTeacher_coursesInput>
  }

  export type courseUpdateOneRequiredWithoutTeacher_coursesNestedInput = {
    create?: XOR<courseCreateWithoutTeacher_coursesInput, courseUncheckedCreateWithoutTeacher_coursesInput>
    connectOrCreate?: courseCreateOrConnectWithoutTeacher_coursesInput
    upsert?: courseUpsertWithoutTeacher_coursesInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutTeacher_coursesInput, courseUpdateWithoutTeacher_coursesInput>, courseUncheckedUpdateWithoutTeacher_coursesInput>
  }

  export type courseCreateNestedOneWithoutLecturesInput = {
    create?: XOR<courseCreateWithoutLecturesInput, courseUncheckedCreateWithoutLecturesInput>
    connectOrCreate?: courseCreateOrConnectWithoutLecturesInput
    connect?: courseWhereUniqueInput
  }

  export type teacherCreateNestedOneWithoutLecturesInput = {
    create?: XOR<teacherCreateWithoutLecturesInput, teacherUncheckedCreateWithoutLecturesInput>
    connectOrCreate?: teacherCreateOrConnectWithoutLecturesInput
    connect?: teacherWhereUniqueInput
  }

  export type courseUpdateOneRequiredWithoutLecturesNestedInput = {
    create?: XOR<courseCreateWithoutLecturesInput, courseUncheckedCreateWithoutLecturesInput>
    connectOrCreate?: courseCreateOrConnectWithoutLecturesInput
    upsert?: courseUpsertWithoutLecturesInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutLecturesInput, courseUpdateWithoutLecturesInput>, courseUncheckedUpdateWithoutLecturesInput>
  }

  export type teacherUpdateOneRequiredWithoutLecturesNestedInput = {
    create?: XOR<teacherCreateWithoutLecturesInput, teacherUncheckedCreateWithoutLecturesInput>
    connectOrCreate?: teacherCreateOrConnectWithoutLecturesInput
    upsert?: teacherUpsertWithoutLecturesInput
    connect?: teacherWhereUniqueInput
    update?: XOR<XOR<teacherUpdateToOneWithWhereWithoutLecturesInput, teacherUpdateWithoutLecturesInput>, teacherUncheckedUpdateWithoutLecturesInput>
  }

  export type courseCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<courseCreateWithoutAttendancesInput, courseUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: courseCreateOrConnectWithoutAttendancesInput
    connect?: courseWhereUniqueInput
  }

  export type teacherCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<teacherCreateWithoutAttendancesInput, teacherUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: teacherCreateOrConnectWithoutAttendancesInput
    connect?: teacherWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type courseUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<courseCreateWithoutAttendancesInput, courseUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: courseCreateOrConnectWithoutAttendancesInput
    upsert?: courseUpsertWithoutAttendancesInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutAttendancesInput, courseUpdateWithoutAttendancesInput>, courseUncheckedUpdateWithoutAttendancesInput>
  }

  export type teacherUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<teacherCreateWithoutAttendancesInput, teacherUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: teacherCreateOrConnectWithoutAttendancesInput
    upsert?: teacherUpsertWithoutAttendancesInput
    connect?: teacherWhereUniqueInput
    update?: XOR<XOR<teacherUpdateToOneWithWhereWithoutAttendancesInput, teacherUpdateWithoutAttendancesInput>, teacherUncheckedUpdateWithoutAttendancesInput>
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

  export type NestedEnumgenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender[] | null
    notIn?: $Enums.gender[] | null
    not?: NestedEnumgenderNullableFilter<$PrismaModel> | $Enums.gender | null
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

  export type NestedEnumgenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender[] | null
    notIn?: $Enums.gender[] | null
    not?: NestedEnumgenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumgenderNullableFilter<$PrismaModel>
    _max?: NestedEnumgenderNullableFilter<$PrismaModel>
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

  export type NestedEnumgenderFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel>
    in?: $Enums.gender[]
    notIn?: $Enums.gender[]
    not?: NestedEnumgenderFilter<$PrismaModel> | $Enums.gender
  }

  export type NestedEnumteacher_designationFilter<$PrismaModel = never> = {
    equals?: $Enums.teacher_designation | Enumteacher_designationFieldRefInput<$PrismaModel>
    in?: $Enums.teacher_designation[]
    notIn?: $Enums.teacher_designation[]
    not?: NestedEnumteacher_designationFilter<$PrismaModel> | $Enums.teacher_designation
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

  export type NestedEnumgenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel>
    in?: $Enums.gender[]
    notIn?: $Enums.gender[]
    not?: NestedEnumgenderWithAggregatesFilter<$PrismaModel> | $Enums.gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgenderFilter<$PrismaModel>
    _max?: NestedEnumgenderFilter<$PrismaModel>
  }

  export type NestedEnumteacher_designationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.teacher_designation | Enumteacher_designationFieldRefInput<$PrismaModel>
    in?: $Enums.teacher_designation[]
    notIn?: $Enums.teacher_designation[]
    not?: NestedEnumteacher_designationWithAggregatesFilter<$PrismaModel> | $Enums.teacher_designation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumteacher_designationFilter<$PrismaModel>
    _max?: NestedEnumteacher_designationFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type teacher_courseCreateWithoutCourseInput = {
    teacher: teacherCreateNestedOneWithoutTeacher_coursesInput
  }

  export type teacher_courseUncheckedCreateWithoutCourseInput = {
    id?: number
    teacher_id: number
  }

  export type teacher_courseCreateOrConnectWithoutCourseInput = {
    where: teacher_courseWhereUniqueInput
    create: XOR<teacher_courseCreateWithoutCourseInput, teacher_courseUncheckedCreateWithoutCourseInput>
  }

  export type teacher_courseCreateManyCourseInputEnvelope = {
    data: teacher_courseCreateManyCourseInput | teacher_courseCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type lectureCreateWithoutCourseInput = {
    lecture_date: Date | string
    topic?: string | null
    teacher: teacherCreateNestedOneWithoutLecturesInput
  }

  export type lectureUncheckedCreateWithoutCourseInput = {
    id?: number
    teacher_id: number
    lecture_date: Date | string
    topic?: string | null
  }

  export type lectureCreateOrConnectWithoutCourseInput = {
    where: lectureWhereUniqueInput
    create: XOR<lectureCreateWithoutCourseInput, lectureUncheckedCreateWithoutCourseInput>
  }

  export type lectureCreateManyCourseInputEnvelope = {
    data: lectureCreateManyCourseInput | lectureCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type attendanceCreateWithoutCourseInput = {
    date: Date | string
    present: boolean
    teacher: teacherCreateNestedOneWithoutAttendancesInput
  }

  export type attendanceUncheckedCreateWithoutCourseInput = {
    id?: number
    date: Date | string
    present: boolean
    teacher_id: number
  }

  export type attendanceCreateOrConnectWithoutCourseInput = {
    where: attendanceWhereUniqueInput
    create: XOR<attendanceCreateWithoutCourseInput, attendanceUncheckedCreateWithoutCourseInput>
  }

  export type attendanceCreateManyCourseInputEnvelope = {
    data: attendanceCreateManyCourseInput | attendanceCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type teacher_courseUpsertWithWhereUniqueWithoutCourseInput = {
    where: teacher_courseWhereUniqueInput
    update: XOR<teacher_courseUpdateWithoutCourseInput, teacher_courseUncheckedUpdateWithoutCourseInput>
    create: XOR<teacher_courseCreateWithoutCourseInput, teacher_courseUncheckedCreateWithoutCourseInput>
  }

  export type teacher_courseUpdateWithWhereUniqueWithoutCourseInput = {
    where: teacher_courseWhereUniqueInput
    data: XOR<teacher_courseUpdateWithoutCourseInput, teacher_courseUncheckedUpdateWithoutCourseInput>
  }

  export type teacher_courseUpdateManyWithWhereWithoutCourseInput = {
    where: teacher_courseScalarWhereInput
    data: XOR<teacher_courseUpdateManyMutationInput, teacher_courseUncheckedUpdateManyWithoutCourseInput>
  }

  export type teacher_courseScalarWhereInput = {
    AND?: teacher_courseScalarWhereInput | teacher_courseScalarWhereInput[]
    OR?: teacher_courseScalarWhereInput[]
    NOT?: teacher_courseScalarWhereInput | teacher_courseScalarWhereInput[]
    id?: IntFilter<"teacher_course"> | number
    teacher_id?: IntFilter<"teacher_course"> | number
    course_id?: IntFilter<"teacher_course"> | number
  }

  export type lectureUpsertWithWhereUniqueWithoutCourseInput = {
    where: lectureWhereUniqueInput
    update: XOR<lectureUpdateWithoutCourseInput, lectureUncheckedUpdateWithoutCourseInput>
    create: XOR<lectureCreateWithoutCourseInput, lectureUncheckedCreateWithoutCourseInput>
  }

  export type lectureUpdateWithWhereUniqueWithoutCourseInput = {
    where: lectureWhereUniqueInput
    data: XOR<lectureUpdateWithoutCourseInput, lectureUncheckedUpdateWithoutCourseInput>
  }

  export type lectureUpdateManyWithWhereWithoutCourseInput = {
    where: lectureScalarWhereInput
    data: XOR<lectureUpdateManyMutationInput, lectureUncheckedUpdateManyWithoutCourseInput>
  }

  export type lectureScalarWhereInput = {
    AND?: lectureScalarWhereInput | lectureScalarWhereInput[]
    OR?: lectureScalarWhereInput[]
    NOT?: lectureScalarWhereInput | lectureScalarWhereInput[]
    id?: IntFilter<"lecture"> | number
    course_id?: IntFilter<"lecture"> | number
    teacher_id?: IntFilter<"lecture"> | number
    lecture_date?: DateTimeFilter<"lecture"> | Date | string
    topic?: StringNullableFilter<"lecture"> | string | null
  }

  export type attendanceUpsertWithWhereUniqueWithoutCourseInput = {
    where: attendanceWhereUniqueInput
    update: XOR<attendanceUpdateWithoutCourseInput, attendanceUncheckedUpdateWithoutCourseInput>
    create: XOR<attendanceCreateWithoutCourseInput, attendanceUncheckedCreateWithoutCourseInput>
  }

  export type attendanceUpdateWithWhereUniqueWithoutCourseInput = {
    where: attendanceWhereUniqueInput
    data: XOR<attendanceUpdateWithoutCourseInput, attendanceUncheckedUpdateWithoutCourseInput>
  }

  export type attendanceUpdateManyWithWhereWithoutCourseInput = {
    where: attendanceScalarWhereInput
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyWithoutCourseInput>
  }

  export type attendanceScalarWhereInput = {
    AND?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
    OR?: attendanceScalarWhereInput[]
    NOT?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
    id?: IntFilter<"attendance"> | number
    course_id?: IntFilter<"attendance"> | number
    date?: DateTimeFilter<"attendance"> | Date | string
    present?: BoolFilter<"attendance"> | boolean
    teacher_id?: IntFilter<"attendance"> | number
  }

  export type teacher_courseCreateWithoutTeacherInput = {
    course: courseCreateNestedOneWithoutTeacher_coursesInput
  }

  export type teacher_courseUncheckedCreateWithoutTeacherInput = {
    id?: number
    course_id: number
  }

  export type teacher_courseCreateOrConnectWithoutTeacherInput = {
    where: teacher_courseWhereUniqueInput
    create: XOR<teacher_courseCreateWithoutTeacherInput, teacher_courseUncheckedCreateWithoutTeacherInput>
  }

  export type teacher_courseCreateManyTeacherInputEnvelope = {
    data: teacher_courseCreateManyTeacherInput | teacher_courseCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type lectureCreateWithoutTeacherInput = {
    lecture_date: Date | string
    topic?: string | null
    course: courseCreateNestedOneWithoutLecturesInput
  }

  export type lectureUncheckedCreateWithoutTeacherInput = {
    id?: number
    course_id: number
    lecture_date: Date | string
    topic?: string | null
  }

  export type lectureCreateOrConnectWithoutTeacherInput = {
    where: lectureWhereUniqueInput
    create: XOR<lectureCreateWithoutTeacherInput, lectureUncheckedCreateWithoutTeacherInput>
  }

  export type lectureCreateManyTeacherInputEnvelope = {
    data: lectureCreateManyTeacherInput | lectureCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type attendanceCreateWithoutTeacherInput = {
    date: Date | string
    present: boolean
    course: courseCreateNestedOneWithoutAttendancesInput
  }

  export type attendanceUncheckedCreateWithoutTeacherInput = {
    id?: number
    course_id: number
    date: Date | string
    present: boolean
  }

  export type attendanceCreateOrConnectWithoutTeacherInput = {
    where: attendanceWhereUniqueInput
    create: XOR<attendanceCreateWithoutTeacherInput, attendanceUncheckedCreateWithoutTeacherInput>
  }

  export type attendanceCreateManyTeacherInputEnvelope = {
    data: attendanceCreateManyTeacherInput | attendanceCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type teacher_courseUpsertWithWhereUniqueWithoutTeacherInput = {
    where: teacher_courseWhereUniqueInput
    update: XOR<teacher_courseUpdateWithoutTeacherInput, teacher_courseUncheckedUpdateWithoutTeacherInput>
    create: XOR<teacher_courseCreateWithoutTeacherInput, teacher_courseUncheckedCreateWithoutTeacherInput>
  }

  export type teacher_courseUpdateWithWhereUniqueWithoutTeacherInput = {
    where: teacher_courseWhereUniqueInput
    data: XOR<teacher_courseUpdateWithoutTeacherInput, teacher_courseUncheckedUpdateWithoutTeacherInput>
  }

  export type teacher_courseUpdateManyWithWhereWithoutTeacherInput = {
    where: teacher_courseScalarWhereInput
    data: XOR<teacher_courseUpdateManyMutationInput, teacher_courseUncheckedUpdateManyWithoutTeacherInput>
  }

  export type lectureUpsertWithWhereUniqueWithoutTeacherInput = {
    where: lectureWhereUniqueInput
    update: XOR<lectureUpdateWithoutTeacherInput, lectureUncheckedUpdateWithoutTeacherInput>
    create: XOR<lectureCreateWithoutTeacherInput, lectureUncheckedCreateWithoutTeacherInput>
  }

  export type lectureUpdateWithWhereUniqueWithoutTeacherInput = {
    where: lectureWhereUniqueInput
    data: XOR<lectureUpdateWithoutTeacherInput, lectureUncheckedUpdateWithoutTeacherInput>
  }

  export type lectureUpdateManyWithWhereWithoutTeacherInput = {
    where: lectureScalarWhereInput
    data: XOR<lectureUpdateManyMutationInput, lectureUncheckedUpdateManyWithoutTeacherInput>
  }

  export type attendanceUpsertWithWhereUniqueWithoutTeacherInput = {
    where: attendanceWhereUniqueInput
    update: XOR<attendanceUpdateWithoutTeacherInput, attendanceUncheckedUpdateWithoutTeacherInput>
    create: XOR<attendanceCreateWithoutTeacherInput, attendanceUncheckedCreateWithoutTeacherInput>
  }

  export type attendanceUpdateWithWhereUniqueWithoutTeacherInput = {
    where: attendanceWhereUniqueInput
    data: XOR<attendanceUpdateWithoutTeacherInput, attendanceUncheckedUpdateWithoutTeacherInput>
  }

  export type attendanceUpdateManyWithWhereWithoutTeacherInput = {
    where: attendanceScalarWhereInput
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyWithoutTeacherInput>
  }

  export type teacherCreateWithoutTeacher_coursesInput = {
    gender: $Enums.gender
    qualification: string
    designation: $Enums.teacher_designation
    email: string
    password: string
    contact_number?: string | null
    join_date: Date | string
    department_id?: number | null
    name?: string | null
    salary?: number | null
    lectures?: lectureCreateNestedManyWithoutTeacherInput
    attendances?: attendanceCreateNestedManyWithoutTeacherInput
  }

  export type teacherUncheckedCreateWithoutTeacher_coursesInput = {
    t_id?: number
    gender: $Enums.gender
    qualification: string
    designation: $Enums.teacher_designation
    email: string
    password: string
    contact_number?: string | null
    join_date: Date | string
    department_id?: number | null
    name?: string | null
    salary?: number | null
    lectures?: lectureUncheckedCreateNestedManyWithoutTeacherInput
    attendances?: attendanceUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type teacherCreateOrConnectWithoutTeacher_coursesInput = {
    where: teacherWhereUniqueInput
    create: XOR<teacherCreateWithoutTeacher_coursesInput, teacherUncheckedCreateWithoutTeacher_coursesInput>
  }

  export type courseCreateWithoutTeacher_coursesInput = {
    course_id: number
    course_name?: string | null
    credits?: number | null
    num_lectures?: number | null
    department_id?: number | null
    semester?: number | null
    lectures?: lectureCreateNestedManyWithoutCourseInput
    attendances?: attendanceCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutTeacher_coursesInput = {
    course_id: number
    course_name?: string | null
    credits?: number | null
    num_lectures?: number | null
    department_id?: number | null
    semester?: number | null
    lectures?: lectureUncheckedCreateNestedManyWithoutCourseInput
    attendances?: attendanceUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutTeacher_coursesInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutTeacher_coursesInput, courseUncheckedCreateWithoutTeacher_coursesInput>
  }

  export type teacherUpsertWithoutTeacher_coursesInput = {
    update: XOR<teacherUpdateWithoutTeacher_coursesInput, teacherUncheckedUpdateWithoutTeacher_coursesInput>
    create: XOR<teacherCreateWithoutTeacher_coursesInput, teacherUncheckedCreateWithoutTeacher_coursesInput>
    where?: teacherWhereInput
  }

  export type teacherUpdateToOneWithWhereWithoutTeacher_coursesInput = {
    where?: teacherWhereInput
    data: XOR<teacherUpdateWithoutTeacher_coursesInput, teacherUncheckedUpdateWithoutTeacher_coursesInput>
  }

  export type teacherUpdateWithoutTeacher_coursesInput = {
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    qualification?: StringFieldUpdateOperationsInput | string
    designation?: Enumteacher_designationFieldUpdateOperationsInput | $Enums.teacher_designation
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    join_date?: DateTimeFieldUpdateOperationsInput | Date | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    lectures?: lectureUpdateManyWithoutTeacherNestedInput
    attendances?: attendanceUpdateManyWithoutTeacherNestedInput
  }

  export type teacherUncheckedUpdateWithoutTeacher_coursesInput = {
    t_id?: IntFieldUpdateOperationsInput | number
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    qualification?: StringFieldUpdateOperationsInput | string
    designation?: Enumteacher_designationFieldUpdateOperationsInput | $Enums.teacher_designation
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    join_date?: DateTimeFieldUpdateOperationsInput | Date | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    lectures?: lectureUncheckedUpdateManyWithoutTeacherNestedInput
    attendances?: attendanceUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type courseUpsertWithoutTeacher_coursesInput = {
    update: XOR<courseUpdateWithoutTeacher_coursesInput, courseUncheckedUpdateWithoutTeacher_coursesInput>
    create: XOR<courseCreateWithoutTeacher_coursesInput, courseUncheckedCreateWithoutTeacher_coursesInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutTeacher_coursesInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutTeacher_coursesInput, courseUncheckedUpdateWithoutTeacher_coursesInput>
  }

  export type courseUpdateWithoutTeacher_coursesInput = {
    course_id?: IntFieldUpdateOperationsInput | number
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    num_lectures?: NullableIntFieldUpdateOperationsInput | number | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    lectures?: lectureUpdateManyWithoutCourseNestedInput
    attendances?: attendanceUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutTeacher_coursesInput = {
    course_id?: IntFieldUpdateOperationsInput | number
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    num_lectures?: NullableIntFieldUpdateOperationsInput | number | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    lectures?: lectureUncheckedUpdateManyWithoutCourseNestedInput
    attendances?: attendanceUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseCreateWithoutLecturesInput = {
    course_id: number
    course_name?: string | null
    credits?: number | null
    num_lectures?: number | null
    department_id?: number | null
    semester?: number | null
    teacher_courses?: teacher_courseCreateNestedManyWithoutCourseInput
    attendances?: attendanceCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutLecturesInput = {
    course_id: number
    course_name?: string | null
    credits?: number | null
    num_lectures?: number | null
    department_id?: number | null
    semester?: number | null
    teacher_courses?: teacher_courseUncheckedCreateNestedManyWithoutCourseInput
    attendances?: attendanceUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutLecturesInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutLecturesInput, courseUncheckedCreateWithoutLecturesInput>
  }

  export type teacherCreateWithoutLecturesInput = {
    gender: $Enums.gender
    qualification: string
    designation: $Enums.teacher_designation
    email: string
    password: string
    contact_number?: string | null
    join_date: Date | string
    department_id?: number | null
    name?: string | null
    salary?: number | null
    teacher_courses?: teacher_courseCreateNestedManyWithoutTeacherInput
    attendances?: attendanceCreateNestedManyWithoutTeacherInput
  }

  export type teacherUncheckedCreateWithoutLecturesInput = {
    t_id?: number
    gender: $Enums.gender
    qualification: string
    designation: $Enums.teacher_designation
    email: string
    password: string
    contact_number?: string | null
    join_date: Date | string
    department_id?: number | null
    name?: string | null
    salary?: number | null
    teacher_courses?: teacher_courseUncheckedCreateNestedManyWithoutTeacherInput
    attendances?: attendanceUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type teacherCreateOrConnectWithoutLecturesInput = {
    where: teacherWhereUniqueInput
    create: XOR<teacherCreateWithoutLecturesInput, teacherUncheckedCreateWithoutLecturesInput>
  }

  export type courseUpsertWithoutLecturesInput = {
    update: XOR<courseUpdateWithoutLecturesInput, courseUncheckedUpdateWithoutLecturesInput>
    create: XOR<courseCreateWithoutLecturesInput, courseUncheckedCreateWithoutLecturesInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutLecturesInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutLecturesInput, courseUncheckedUpdateWithoutLecturesInput>
  }

  export type courseUpdateWithoutLecturesInput = {
    course_id?: IntFieldUpdateOperationsInput | number
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    num_lectures?: NullableIntFieldUpdateOperationsInput | number | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    teacher_courses?: teacher_courseUpdateManyWithoutCourseNestedInput
    attendances?: attendanceUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutLecturesInput = {
    course_id?: IntFieldUpdateOperationsInput | number
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    num_lectures?: NullableIntFieldUpdateOperationsInput | number | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    teacher_courses?: teacher_courseUncheckedUpdateManyWithoutCourseNestedInput
    attendances?: attendanceUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type teacherUpsertWithoutLecturesInput = {
    update: XOR<teacherUpdateWithoutLecturesInput, teacherUncheckedUpdateWithoutLecturesInput>
    create: XOR<teacherCreateWithoutLecturesInput, teacherUncheckedCreateWithoutLecturesInput>
    where?: teacherWhereInput
  }

  export type teacherUpdateToOneWithWhereWithoutLecturesInput = {
    where?: teacherWhereInput
    data: XOR<teacherUpdateWithoutLecturesInput, teacherUncheckedUpdateWithoutLecturesInput>
  }

  export type teacherUpdateWithoutLecturesInput = {
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    qualification?: StringFieldUpdateOperationsInput | string
    designation?: Enumteacher_designationFieldUpdateOperationsInput | $Enums.teacher_designation
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    join_date?: DateTimeFieldUpdateOperationsInput | Date | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    teacher_courses?: teacher_courseUpdateManyWithoutTeacherNestedInput
    attendances?: attendanceUpdateManyWithoutTeacherNestedInput
  }

  export type teacherUncheckedUpdateWithoutLecturesInput = {
    t_id?: IntFieldUpdateOperationsInput | number
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    qualification?: StringFieldUpdateOperationsInput | string
    designation?: Enumteacher_designationFieldUpdateOperationsInput | $Enums.teacher_designation
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    join_date?: DateTimeFieldUpdateOperationsInput | Date | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    teacher_courses?: teacher_courseUncheckedUpdateManyWithoutTeacherNestedInput
    attendances?: attendanceUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type courseCreateWithoutAttendancesInput = {
    course_id: number
    course_name?: string | null
    credits?: number | null
    num_lectures?: number | null
    department_id?: number | null
    semester?: number | null
    teacher_courses?: teacher_courseCreateNestedManyWithoutCourseInput
    lectures?: lectureCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutAttendancesInput = {
    course_id: number
    course_name?: string | null
    credits?: number | null
    num_lectures?: number | null
    department_id?: number | null
    semester?: number | null
    teacher_courses?: teacher_courseUncheckedCreateNestedManyWithoutCourseInput
    lectures?: lectureUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutAttendancesInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutAttendancesInput, courseUncheckedCreateWithoutAttendancesInput>
  }

  export type teacherCreateWithoutAttendancesInput = {
    gender: $Enums.gender
    qualification: string
    designation: $Enums.teacher_designation
    email: string
    password: string
    contact_number?: string | null
    join_date: Date | string
    department_id?: number | null
    name?: string | null
    salary?: number | null
    teacher_courses?: teacher_courseCreateNestedManyWithoutTeacherInput
    lectures?: lectureCreateNestedManyWithoutTeacherInput
  }

  export type teacherUncheckedCreateWithoutAttendancesInput = {
    t_id?: number
    gender: $Enums.gender
    qualification: string
    designation: $Enums.teacher_designation
    email: string
    password: string
    contact_number?: string | null
    join_date: Date | string
    department_id?: number | null
    name?: string | null
    salary?: number | null
    teacher_courses?: teacher_courseUncheckedCreateNestedManyWithoutTeacherInput
    lectures?: lectureUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type teacherCreateOrConnectWithoutAttendancesInput = {
    where: teacherWhereUniqueInput
    create: XOR<teacherCreateWithoutAttendancesInput, teacherUncheckedCreateWithoutAttendancesInput>
  }

  export type courseUpsertWithoutAttendancesInput = {
    update: XOR<courseUpdateWithoutAttendancesInput, courseUncheckedUpdateWithoutAttendancesInput>
    create: XOR<courseCreateWithoutAttendancesInput, courseUncheckedCreateWithoutAttendancesInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutAttendancesInput, courseUncheckedUpdateWithoutAttendancesInput>
  }

  export type courseUpdateWithoutAttendancesInput = {
    course_id?: IntFieldUpdateOperationsInput | number
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    num_lectures?: NullableIntFieldUpdateOperationsInput | number | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    teacher_courses?: teacher_courseUpdateManyWithoutCourseNestedInput
    lectures?: lectureUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutAttendancesInput = {
    course_id?: IntFieldUpdateOperationsInput | number
    course_name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    num_lectures?: NullableIntFieldUpdateOperationsInput | number | null
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    teacher_courses?: teacher_courseUncheckedUpdateManyWithoutCourseNestedInput
    lectures?: lectureUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type teacherUpsertWithoutAttendancesInput = {
    update: XOR<teacherUpdateWithoutAttendancesInput, teacherUncheckedUpdateWithoutAttendancesInput>
    create: XOR<teacherCreateWithoutAttendancesInput, teacherUncheckedCreateWithoutAttendancesInput>
    where?: teacherWhereInput
  }

  export type teacherUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: teacherWhereInput
    data: XOR<teacherUpdateWithoutAttendancesInput, teacherUncheckedUpdateWithoutAttendancesInput>
  }

  export type teacherUpdateWithoutAttendancesInput = {
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    qualification?: StringFieldUpdateOperationsInput | string
    designation?: Enumteacher_designationFieldUpdateOperationsInput | $Enums.teacher_designation
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    join_date?: DateTimeFieldUpdateOperationsInput | Date | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    teacher_courses?: teacher_courseUpdateManyWithoutTeacherNestedInput
    lectures?: lectureUpdateManyWithoutTeacherNestedInput
  }

  export type teacherUncheckedUpdateWithoutAttendancesInput = {
    t_id?: IntFieldUpdateOperationsInput | number
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    qualification?: StringFieldUpdateOperationsInput | string
    designation?: Enumteacher_designationFieldUpdateOperationsInput | $Enums.teacher_designation
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact_number?: NullableStringFieldUpdateOperationsInput | string | null
    join_date?: DateTimeFieldUpdateOperationsInput | Date | string
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    salary?: NullableIntFieldUpdateOperationsInput | number | null
    teacher_courses?: teacher_courseUncheckedUpdateManyWithoutTeacherNestedInput
    lectures?: lectureUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type teacher_courseCreateManyCourseInput = {
    id?: number
    teacher_id: number
  }

  export type lectureCreateManyCourseInput = {
    id?: number
    teacher_id: number
    lecture_date: Date | string
    topic?: string | null
  }

  export type attendanceCreateManyCourseInput = {
    id?: number
    date: Date | string
    present: boolean
    teacher_id: number
  }

  export type teacher_courseUpdateWithoutCourseInput = {
    teacher?: teacherUpdateOneRequiredWithoutTeacher_coursesNestedInput
  }

  export type teacher_courseUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
  }

  export type teacher_courseUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
  }

  export type lectureUpdateWithoutCourseInput = {
    lecture_date?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    teacher?: teacherUpdateOneRequiredWithoutLecturesNestedInput
  }

  export type lectureUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    lecture_date?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type lectureUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    lecture_date?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type attendanceUpdateWithoutCourseInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
    teacher?: teacherUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type attendanceUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
    teacher_id?: IntFieldUpdateOperationsInput | number
  }

  export type attendanceUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
    teacher_id?: IntFieldUpdateOperationsInput | number
  }

  export type teacher_courseCreateManyTeacherInput = {
    id?: number
    course_id: number
  }

  export type lectureCreateManyTeacherInput = {
    id?: number
    course_id: number
    lecture_date: Date | string
    topic?: string | null
  }

  export type attendanceCreateManyTeacherInput = {
    id?: number
    course_id: number
    date: Date | string
    present: boolean
  }

  export type teacher_courseUpdateWithoutTeacherInput = {
    course?: courseUpdateOneRequiredWithoutTeacher_coursesNestedInput
  }

  export type teacher_courseUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type teacher_courseUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
  }

  export type lectureUpdateWithoutTeacherInput = {
    lecture_date?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
    course?: courseUpdateOneRequiredWithoutLecturesNestedInput
  }

  export type lectureUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    lecture_date?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type lectureUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    lecture_date?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type attendanceUpdateWithoutTeacherInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
    course?: courseUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type attendanceUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
  }

  export type attendanceUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    present?: BoolFieldUpdateOperationsInput | boolean
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