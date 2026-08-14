
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
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model Lecturer
 * 
 */
export type Lecturer = $Result.DefaultSelection<Prisma.$LecturerPayload>
/**
 * Model StudyProgram
 * 
 */
export type StudyProgram = $Result.DefaultSelection<Prisma.$StudyProgramPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model StudentOrg
 * 
 */
export type StudentOrg = $Result.DefaultSelection<Prisma.$StudentOrgPayload>
/**
 * Model MediaFile
 * 
 */
export type MediaFile = $Result.DefaultSelection<Prisma.$MediaFilePayload>
/**
 * Model MenuItem
 * 
 */
export type MenuItem = $Result.DefaultSelection<Prisma.$MenuItemPayload>
/**
 * Model Laboratory
 * 
 */
export type Laboratory = $Result.DefaultSelection<Prisma.$LaboratoryPayload>
/**
 * Model ResearchGroup
 * 
 */
export type ResearchGroup = $Result.DefaultSelection<Prisma.$ResearchGroupPayload>
/**
 * Model Publication
 * 
 */
export type Publication = $Result.DefaultSelection<Prisma.$PublicationPayload>
/**
 * Model InnovationProduct
 * 
 */
export type InnovationProduct = $Result.DefaultSelection<Prisma.$InnovationProductPayload>
/**
 * Model StudentAchievement
 * 
 */
export type StudentAchievement = $Result.DefaultSelection<Prisma.$StudentAchievementPayload>
/**
 * Model AlumniTestimonial
 * 
 */
export type AlumniTestimonial = $Result.DefaultSelection<Prisma.$AlumniTestimonialPayload>
/**
 * Model JobVacancy
 * 
 */
export type JobVacancy = $Result.DefaultSelection<Prisma.$JobVacancyPayload>
/**
 * Model PMBTrack
 * 
 */
export type PMBTrack = $Result.DefaultSelection<Prisma.$PMBTrackPayload>
/**
 * Model AcademicCalendarItem
 * 
 */
export type AcademicCalendarItem = $Result.DefaultSelection<Prisma.$AcademicCalendarItemPayload>
/**
 * Model FAQItem
 * 
 */
export type FAQItem = $Result.DefaultSelection<Prisma.$FAQItemPayload>
/**
 * Model QuickLink
 * 
 */
export type QuickLink = $Result.DefaultSelection<Prisma.$QuickLinkPayload>
/**
 * Model SiteData
 * 
 */
export type SiteData = $Result.DefaultSelection<Prisma.$SiteDataPayload>
/**
 * Model MediaFolder
 * 
 */
export type MediaFolder = $Result.DefaultSelection<Prisma.$MediaFolderPayload>

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs>;

  /**
   * `prisma.lecturer`: Exposes CRUD operations for the **Lecturer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lecturers
    * const lecturers = await prisma.lecturer.findMany()
    * ```
    */
  get lecturer(): Prisma.LecturerDelegate<ExtArgs>;

  /**
   * `prisma.studyProgram`: Exposes CRUD operations for the **StudyProgram** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudyPrograms
    * const studyPrograms = await prisma.studyProgram.findMany()
    * ```
    */
  get studyProgram(): Prisma.StudyProgramDelegate<ExtArgs>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs>;

  /**
   * `prisma.studentOrg`: Exposes CRUD operations for the **StudentOrg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentOrgs
    * const studentOrgs = await prisma.studentOrg.findMany()
    * ```
    */
  get studentOrg(): Prisma.StudentOrgDelegate<ExtArgs>;

  /**
   * `prisma.mediaFile`: Exposes CRUD operations for the **MediaFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaFiles
    * const mediaFiles = await prisma.mediaFile.findMany()
    * ```
    */
  get mediaFile(): Prisma.MediaFileDelegate<ExtArgs>;

  /**
   * `prisma.menuItem`: Exposes CRUD operations for the **MenuItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItems
    * const menuItems = await prisma.menuItem.findMany()
    * ```
    */
  get menuItem(): Prisma.MenuItemDelegate<ExtArgs>;

  /**
   * `prisma.laboratory`: Exposes CRUD operations for the **Laboratory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Laboratories
    * const laboratories = await prisma.laboratory.findMany()
    * ```
    */
  get laboratory(): Prisma.LaboratoryDelegate<ExtArgs>;

  /**
   * `prisma.researchGroup`: Exposes CRUD operations for the **ResearchGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResearchGroups
    * const researchGroups = await prisma.researchGroup.findMany()
    * ```
    */
  get researchGroup(): Prisma.ResearchGroupDelegate<ExtArgs>;

  /**
   * `prisma.publication`: Exposes CRUD operations for the **Publication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publications
    * const publications = await prisma.publication.findMany()
    * ```
    */
  get publication(): Prisma.PublicationDelegate<ExtArgs>;

  /**
   * `prisma.innovationProduct`: Exposes CRUD operations for the **InnovationProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InnovationProducts
    * const innovationProducts = await prisma.innovationProduct.findMany()
    * ```
    */
  get innovationProduct(): Prisma.InnovationProductDelegate<ExtArgs>;

  /**
   * `prisma.studentAchievement`: Exposes CRUD operations for the **StudentAchievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentAchievements
    * const studentAchievements = await prisma.studentAchievement.findMany()
    * ```
    */
  get studentAchievement(): Prisma.StudentAchievementDelegate<ExtArgs>;

  /**
   * `prisma.alumniTestimonial`: Exposes CRUD operations for the **AlumniTestimonial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlumniTestimonials
    * const alumniTestimonials = await prisma.alumniTestimonial.findMany()
    * ```
    */
  get alumniTestimonial(): Prisma.AlumniTestimonialDelegate<ExtArgs>;

  /**
   * `prisma.jobVacancy`: Exposes CRUD operations for the **JobVacancy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobVacancies
    * const jobVacancies = await prisma.jobVacancy.findMany()
    * ```
    */
  get jobVacancy(): Prisma.JobVacancyDelegate<ExtArgs>;

  /**
   * `prisma.pMBTrack`: Exposes CRUD operations for the **PMBTrack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PMBTracks
    * const pMBTracks = await prisma.pMBTrack.findMany()
    * ```
    */
  get pMBTrack(): Prisma.PMBTrackDelegate<ExtArgs>;

  /**
   * `prisma.academicCalendarItem`: Exposes CRUD operations for the **AcademicCalendarItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AcademicCalendarItems
    * const academicCalendarItems = await prisma.academicCalendarItem.findMany()
    * ```
    */
  get academicCalendarItem(): Prisma.AcademicCalendarItemDelegate<ExtArgs>;

  /**
   * `prisma.fAQItem`: Exposes CRUD operations for the **FAQItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FAQItems
    * const fAQItems = await prisma.fAQItem.findMany()
    * ```
    */
  get fAQItem(): Prisma.FAQItemDelegate<ExtArgs>;

  /**
   * `prisma.quickLink`: Exposes CRUD operations for the **QuickLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuickLinks
    * const quickLinks = await prisma.quickLink.findMany()
    * ```
    */
  get quickLink(): Prisma.QuickLinkDelegate<ExtArgs>;

  /**
   * `prisma.siteData`: Exposes CRUD operations for the **SiteData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteData
    * const siteData = await prisma.siteData.findMany()
    * ```
    */
  get siteData(): Prisma.SiteDataDelegate<ExtArgs>;

  /**
   * `prisma.mediaFolder`: Exposes CRUD operations for the **MediaFolder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaFolders
    * const mediaFolders = await prisma.mediaFolder.findMany()
    * ```
    */
  get mediaFolder(): Prisma.MediaFolderDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    News: 'News',
    Lecturer: 'Lecturer',
    StudyProgram: 'StudyProgram',
    Course: 'Course',
    StudentOrg: 'StudentOrg',
    MediaFile: 'MediaFile',
    MenuItem: 'MenuItem',
    Laboratory: 'Laboratory',
    ResearchGroup: 'ResearchGroup',
    Publication: 'Publication',
    InnovationProduct: 'InnovationProduct',
    StudentAchievement: 'StudentAchievement',
    AlumniTestimonial: 'AlumniTestimonial',
    JobVacancy: 'JobVacancy',
    PMBTrack: 'PMBTrack',
    AcademicCalendarItem: 'AcademicCalendarItem',
    FAQItem: 'FAQItem',
    QuickLink: 'QuickLink',
    SiteData: 'SiteData',
    MediaFolder: 'MediaFolder'
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
      modelProps: "user" | "news" | "lecturer" | "studyProgram" | "course" | "studentOrg" | "mediaFile" | "menuItem" | "laboratory" | "researchGroup" | "publication" | "innovationProduct" | "studentAchievement" | "alumniTestimonial" | "jobVacancy" | "pMBTrack" | "academicCalendarItem" | "fAQItem" | "quickLink" | "siteData" | "mediaFolder"
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
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      Lecturer: {
        payload: Prisma.$LecturerPayload<ExtArgs>
        fields: Prisma.LecturerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LecturerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LecturerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          findFirst: {
            args: Prisma.LecturerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LecturerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          findMany: {
            args: Prisma.LecturerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>[]
          }
          create: {
            args: Prisma.LecturerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          createMany: {
            args: Prisma.LecturerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LecturerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          update: {
            args: Prisma.LecturerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          deleteMany: {
            args: Prisma.LecturerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LecturerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LecturerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          aggregate: {
            args: Prisma.LecturerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecturer>
          }
          groupBy: {
            args: Prisma.LecturerGroupByArgs<ExtArgs>
            result: $Utils.Optional<LecturerGroupByOutputType>[]
          }
          count: {
            args: Prisma.LecturerCountArgs<ExtArgs>
            result: $Utils.Optional<LecturerCountAggregateOutputType> | number
          }
        }
      }
      StudyProgram: {
        payload: Prisma.$StudyProgramPayload<ExtArgs>
        fields: Prisma.StudyProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudyProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudyProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload>
          }
          findFirst: {
            args: Prisma.StudyProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudyProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload>
          }
          findMany: {
            args: Prisma.StudyProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload>[]
          }
          create: {
            args: Prisma.StudyProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload>
          }
          createMany: {
            args: Prisma.StudyProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudyProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload>
          }
          update: {
            args: Prisma.StudyProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload>
          }
          deleteMany: {
            args: Prisma.StudyProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudyProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudyProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload>
          }
          aggregate: {
            args: Prisma.StudyProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudyProgram>
          }
          groupBy: {
            args: Prisma.StudyProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudyProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudyProgramCountArgs<ExtArgs>
            result: $Utils.Optional<StudyProgramCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      StudentOrg: {
        payload: Prisma.$StudentOrgPayload<ExtArgs>
        fields: Prisma.StudentOrgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentOrgFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentOrgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentOrgFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentOrgPayload>
          }
          findFirst: {
            args: Prisma.StudentOrgFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentOrgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentOrgFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentOrgPayload>
          }
          findMany: {
            args: Prisma.StudentOrgFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentOrgPayload>[]
          }
          create: {
            args: Prisma.StudentOrgCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentOrgPayload>
          }
          createMany: {
            args: Prisma.StudentOrgCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentOrgDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentOrgPayload>
          }
          update: {
            args: Prisma.StudentOrgUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentOrgPayload>
          }
          deleteMany: {
            args: Prisma.StudentOrgDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentOrgUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentOrgUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentOrgPayload>
          }
          aggregate: {
            args: Prisma.StudentOrgAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentOrg>
          }
          groupBy: {
            args: Prisma.StudentOrgGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentOrgGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentOrgCountArgs<ExtArgs>
            result: $Utils.Optional<StudentOrgCountAggregateOutputType> | number
          }
        }
      }
      MediaFile: {
        payload: Prisma.$MediaFilePayload<ExtArgs>
        fields: Prisma.MediaFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>
          }
          findFirst: {
            args: Prisma.MediaFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>
          }
          findMany: {
            args: Prisma.MediaFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>[]
          }
          create: {
            args: Prisma.MediaFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>
          }
          createMany: {
            args: Prisma.MediaFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MediaFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>
          }
          update: {
            args: Prisma.MediaFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>
          }
          deleteMany: {
            args: Prisma.MediaFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MediaFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>
          }
          aggregate: {
            args: Prisma.MediaFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaFile>
          }
          groupBy: {
            args: Prisma.MediaFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaFileCountArgs<ExtArgs>
            result: $Utils.Optional<MediaFileCountAggregateOutputType> | number
          }
        }
      }
      MenuItem: {
        payload: Prisma.$MenuItemPayload<ExtArgs>
        fields: Prisma.MenuItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findFirst: {
            args: Prisma.MenuItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findMany: {
            args: Prisma.MenuItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          create: {
            args: Prisma.MenuItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          createMany: {
            args: Prisma.MenuItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MenuItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          update: {
            args: Prisma.MenuItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          aggregate: {
            args: Prisma.MenuItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItem>
          }
          groupBy: {
            args: Prisma.MenuItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemCountAggregateOutputType> | number
          }
        }
      }
      Laboratory: {
        payload: Prisma.$LaboratoryPayload<ExtArgs>
        fields: Prisma.LaboratoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LaboratoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaboratoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LaboratoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaboratoryPayload>
          }
          findFirst: {
            args: Prisma.LaboratoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaboratoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LaboratoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaboratoryPayload>
          }
          findMany: {
            args: Prisma.LaboratoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaboratoryPayload>[]
          }
          create: {
            args: Prisma.LaboratoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaboratoryPayload>
          }
          createMany: {
            args: Prisma.LaboratoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LaboratoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaboratoryPayload>
          }
          update: {
            args: Prisma.LaboratoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaboratoryPayload>
          }
          deleteMany: {
            args: Prisma.LaboratoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LaboratoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LaboratoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaboratoryPayload>
          }
          aggregate: {
            args: Prisma.LaboratoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaboratory>
          }
          groupBy: {
            args: Prisma.LaboratoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LaboratoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LaboratoryCountArgs<ExtArgs>
            result: $Utils.Optional<LaboratoryCountAggregateOutputType> | number
          }
        }
      }
      ResearchGroup: {
        payload: Prisma.$ResearchGroupPayload<ExtArgs>
        fields: Prisma.ResearchGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResearchGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResearchGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchGroupPayload>
          }
          findFirst: {
            args: Prisma.ResearchGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResearchGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchGroupPayload>
          }
          findMany: {
            args: Prisma.ResearchGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchGroupPayload>[]
          }
          create: {
            args: Prisma.ResearchGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchGroupPayload>
          }
          createMany: {
            args: Prisma.ResearchGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResearchGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchGroupPayload>
          }
          update: {
            args: Prisma.ResearchGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchGroupPayload>
          }
          deleteMany: {
            args: Prisma.ResearchGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResearchGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResearchGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResearchGroupPayload>
          }
          aggregate: {
            args: Prisma.ResearchGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResearchGroup>
          }
          groupBy: {
            args: Prisma.ResearchGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResearchGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResearchGroupCountArgs<ExtArgs>
            result: $Utils.Optional<ResearchGroupCountAggregateOutputType> | number
          }
        }
      }
      Publication: {
        payload: Prisma.$PublicationPayload<ExtArgs>
        fields: Prisma.PublicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          findFirst: {
            args: Prisma.PublicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          findMany: {
            args: Prisma.PublicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[]
          }
          create: {
            args: Prisma.PublicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          createMany: {
            args: Prisma.PublicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PublicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          update: {
            args: Prisma.PublicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          deleteMany: {
            args: Prisma.PublicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PublicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          aggregate: {
            args: Prisma.PublicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublication>
          }
          groupBy: {
            args: Prisma.PublicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicationCountArgs<ExtArgs>
            result: $Utils.Optional<PublicationCountAggregateOutputType> | number
          }
        }
      }
      InnovationProduct: {
        payload: Prisma.$InnovationProductPayload<ExtArgs>
        fields: Prisma.InnovationProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InnovationProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InnovationProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationProductPayload>
          }
          findFirst: {
            args: Prisma.InnovationProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InnovationProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationProductPayload>
          }
          findMany: {
            args: Prisma.InnovationProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationProductPayload>[]
          }
          create: {
            args: Prisma.InnovationProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationProductPayload>
          }
          createMany: {
            args: Prisma.InnovationProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InnovationProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationProductPayload>
          }
          update: {
            args: Prisma.InnovationProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationProductPayload>
          }
          deleteMany: {
            args: Prisma.InnovationProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InnovationProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InnovationProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovationProductPayload>
          }
          aggregate: {
            args: Prisma.InnovationProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInnovationProduct>
          }
          groupBy: {
            args: Prisma.InnovationProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<InnovationProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.InnovationProductCountArgs<ExtArgs>
            result: $Utils.Optional<InnovationProductCountAggregateOutputType> | number
          }
        }
      }
      StudentAchievement: {
        payload: Prisma.$StudentAchievementPayload<ExtArgs>
        fields: Prisma.StudentAchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentAchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentAchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload>
          }
          findFirst: {
            args: Prisma.StudentAchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentAchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload>
          }
          findMany: {
            args: Prisma.StudentAchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload>[]
          }
          create: {
            args: Prisma.StudentAchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload>
          }
          createMany: {
            args: Prisma.StudentAchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentAchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload>
          }
          update: {
            args: Prisma.StudentAchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload>
          }
          deleteMany: {
            args: Prisma.StudentAchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentAchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentAchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAchievementPayload>
          }
          aggregate: {
            args: Prisma.StudentAchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentAchievement>
          }
          groupBy: {
            args: Prisma.StudentAchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentAchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentAchievementCountArgs<ExtArgs>
            result: $Utils.Optional<StudentAchievementCountAggregateOutputType> | number
          }
        }
      }
      AlumniTestimonial: {
        payload: Prisma.$AlumniTestimonialPayload<ExtArgs>
        fields: Prisma.AlumniTestimonialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlumniTestimonialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniTestimonialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlumniTestimonialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniTestimonialPayload>
          }
          findFirst: {
            args: Prisma.AlumniTestimonialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniTestimonialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlumniTestimonialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniTestimonialPayload>
          }
          findMany: {
            args: Prisma.AlumniTestimonialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniTestimonialPayload>[]
          }
          create: {
            args: Prisma.AlumniTestimonialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniTestimonialPayload>
          }
          createMany: {
            args: Prisma.AlumniTestimonialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlumniTestimonialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniTestimonialPayload>
          }
          update: {
            args: Prisma.AlumniTestimonialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniTestimonialPayload>
          }
          deleteMany: {
            args: Prisma.AlumniTestimonialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlumniTestimonialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlumniTestimonialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlumniTestimonialPayload>
          }
          aggregate: {
            args: Prisma.AlumniTestimonialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlumniTestimonial>
          }
          groupBy: {
            args: Prisma.AlumniTestimonialGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlumniTestimonialGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlumniTestimonialCountArgs<ExtArgs>
            result: $Utils.Optional<AlumniTestimonialCountAggregateOutputType> | number
          }
        }
      }
      JobVacancy: {
        payload: Prisma.$JobVacancyPayload<ExtArgs>
        fields: Prisma.JobVacancyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobVacancyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobVacancyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobVacancyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobVacancyPayload>
          }
          findFirst: {
            args: Prisma.JobVacancyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobVacancyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobVacancyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobVacancyPayload>
          }
          findMany: {
            args: Prisma.JobVacancyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobVacancyPayload>[]
          }
          create: {
            args: Prisma.JobVacancyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobVacancyPayload>
          }
          createMany: {
            args: Prisma.JobVacancyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JobVacancyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobVacancyPayload>
          }
          update: {
            args: Prisma.JobVacancyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobVacancyPayload>
          }
          deleteMany: {
            args: Prisma.JobVacancyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobVacancyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobVacancyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobVacancyPayload>
          }
          aggregate: {
            args: Prisma.JobVacancyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobVacancy>
          }
          groupBy: {
            args: Prisma.JobVacancyGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobVacancyGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobVacancyCountArgs<ExtArgs>
            result: $Utils.Optional<JobVacancyCountAggregateOutputType> | number
          }
        }
      }
      PMBTrack: {
        payload: Prisma.$PMBTrackPayload<ExtArgs>
        fields: Prisma.PMBTrackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PMBTrackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMBTrackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PMBTrackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMBTrackPayload>
          }
          findFirst: {
            args: Prisma.PMBTrackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMBTrackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PMBTrackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMBTrackPayload>
          }
          findMany: {
            args: Prisma.PMBTrackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMBTrackPayload>[]
          }
          create: {
            args: Prisma.PMBTrackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMBTrackPayload>
          }
          createMany: {
            args: Prisma.PMBTrackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PMBTrackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMBTrackPayload>
          }
          update: {
            args: Prisma.PMBTrackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMBTrackPayload>
          }
          deleteMany: {
            args: Prisma.PMBTrackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PMBTrackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PMBTrackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMBTrackPayload>
          }
          aggregate: {
            args: Prisma.PMBTrackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePMBTrack>
          }
          groupBy: {
            args: Prisma.PMBTrackGroupByArgs<ExtArgs>
            result: $Utils.Optional<PMBTrackGroupByOutputType>[]
          }
          count: {
            args: Prisma.PMBTrackCountArgs<ExtArgs>
            result: $Utils.Optional<PMBTrackCountAggregateOutputType> | number
          }
        }
      }
      AcademicCalendarItem: {
        payload: Prisma.$AcademicCalendarItemPayload<ExtArgs>
        fields: Prisma.AcademicCalendarItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcademicCalendarItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicCalendarItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcademicCalendarItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicCalendarItemPayload>
          }
          findFirst: {
            args: Prisma.AcademicCalendarItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicCalendarItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcademicCalendarItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicCalendarItemPayload>
          }
          findMany: {
            args: Prisma.AcademicCalendarItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicCalendarItemPayload>[]
          }
          create: {
            args: Prisma.AcademicCalendarItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicCalendarItemPayload>
          }
          createMany: {
            args: Prisma.AcademicCalendarItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AcademicCalendarItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicCalendarItemPayload>
          }
          update: {
            args: Prisma.AcademicCalendarItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicCalendarItemPayload>
          }
          deleteMany: {
            args: Prisma.AcademicCalendarItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcademicCalendarItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AcademicCalendarItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicCalendarItemPayload>
          }
          aggregate: {
            args: Prisma.AcademicCalendarItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcademicCalendarItem>
          }
          groupBy: {
            args: Prisma.AcademicCalendarItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcademicCalendarItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcademicCalendarItemCountArgs<ExtArgs>
            result: $Utils.Optional<AcademicCalendarItemCountAggregateOutputType> | number
          }
        }
      }
      FAQItem: {
        payload: Prisma.$FAQItemPayload<ExtArgs>
        fields: Prisma.FAQItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FAQItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FAQItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQItemPayload>
          }
          findFirst: {
            args: Prisma.FAQItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FAQItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQItemPayload>
          }
          findMany: {
            args: Prisma.FAQItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQItemPayload>[]
          }
          create: {
            args: Prisma.FAQItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQItemPayload>
          }
          createMany: {
            args: Prisma.FAQItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FAQItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQItemPayload>
          }
          update: {
            args: Prisma.FAQItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQItemPayload>
          }
          deleteMany: {
            args: Prisma.FAQItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FAQItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FAQItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQItemPayload>
          }
          aggregate: {
            args: Prisma.FAQItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFAQItem>
          }
          groupBy: {
            args: Prisma.FAQItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<FAQItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.FAQItemCountArgs<ExtArgs>
            result: $Utils.Optional<FAQItemCountAggregateOutputType> | number
          }
        }
      }
      QuickLink: {
        payload: Prisma.$QuickLinkPayload<ExtArgs>
        fields: Prisma.QuickLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuickLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuickLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickLinkPayload>
          }
          findFirst: {
            args: Prisma.QuickLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuickLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickLinkPayload>
          }
          findMany: {
            args: Prisma.QuickLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickLinkPayload>[]
          }
          create: {
            args: Prisma.QuickLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickLinkPayload>
          }
          createMany: {
            args: Prisma.QuickLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuickLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickLinkPayload>
          }
          update: {
            args: Prisma.QuickLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickLinkPayload>
          }
          deleteMany: {
            args: Prisma.QuickLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuickLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuickLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickLinkPayload>
          }
          aggregate: {
            args: Prisma.QuickLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuickLink>
          }
          groupBy: {
            args: Prisma.QuickLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuickLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuickLinkCountArgs<ExtArgs>
            result: $Utils.Optional<QuickLinkCountAggregateOutputType> | number
          }
        }
      }
      SiteData: {
        payload: Prisma.$SiteDataPayload<ExtArgs>
        fields: Prisma.SiteDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteDataPayload>
          }
          findFirst: {
            args: Prisma.SiteDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteDataPayload>
          }
          findMany: {
            args: Prisma.SiteDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteDataPayload>[]
          }
          create: {
            args: Prisma.SiteDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteDataPayload>
          }
          createMany: {
            args: Prisma.SiteDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SiteDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteDataPayload>
          }
          update: {
            args: Prisma.SiteDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteDataPayload>
          }
          deleteMany: {
            args: Prisma.SiteDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SiteDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteDataPayload>
          }
          aggregate: {
            args: Prisma.SiteDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteData>
          }
          groupBy: {
            args: Prisma.SiteDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteDataCountArgs<ExtArgs>
            result: $Utils.Optional<SiteDataCountAggregateOutputType> | number
          }
        }
      }
      MediaFolder: {
        payload: Prisma.$MediaFolderPayload<ExtArgs>
        fields: Prisma.MediaFolderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFolderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFolderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFolderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFolderPayload>
          }
          findFirst: {
            args: Prisma.MediaFolderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFolderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFolderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFolderPayload>
          }
          findMany: {
            args: Prisma.MediaFolderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFolderPayload>[]
          }
          create: {
            args: Prisma.MediaFolderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFolderPayload>
          }
          createMany: {
            args: Prisma.MediaFolderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MediaFolderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFolderPayload>
          }
          update: {
            args: Prisma.MediaFolderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFolderPayload>
          }
          deleteMany: {
            args: Prisma.MediaFolderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaFolderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MediaFolderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFolderPayload>
          }
          aggregate: {
            args: Prisma.MediaFolderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaFolder>
          }
          groupBy: {
            args: Prisma.MediaFolderGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaFolderGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaFolderCountArgs<ExtArgs>
            result: $Utils.Optional<MediaFolderCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    status: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    status: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    status: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    avatar?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string | null
    role: string
    status: string
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    role?: boolean
    status?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string | null
      role: string
      status: string
      avatar: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
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
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    category: string | null
    date: string | null
    author: string | null
    thumbnail: string | null
    summary: string | null
    content: string | null
    tags: string | null
    featured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    category: string | null
    date: string | null
    author: string | null
    thumbnail: string | null
    summary: string | null
    content: string | null
    tags: string | null
    featured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    category: number
    date: number
    author: number
    thumbnail: number
    summary: number
    content: number
    tags: number
    featured: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    date?: true
    author?: true
    thumbnail?: true
    summary?: true
    content?: true
    tags?: true
    featured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    date?: true
    author?: true
    thumbnail?: true
    summary?: true
    content?: true
    tags?: true
    featured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    category?: true
    date?: true
    author?: true
    thumbnail?: true
    summary?: true
    content?: true
    tags?: true
    featured?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: string
    title: string
    slug: string
    category: string
    date: string
    author: string
    thumbnail: string
    summary: string
    content: string
    tags: string
    featured: boolean
    createdAt: Date
    updatedAt: Date
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    date?: boolean
    author?: boolean
    thumbnail?: boolean
    summary?: boolean
    content?: boolean
    tags?: boolean
    featured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["news"]>


  export type NewsSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    category?: boolean
    date?: boolean
    author?: boolean
    thumbnail?: boolean
    summary?: boolean
    content?: boolean
    tags?: boolean
    featured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      category: string
      date: string
      author: string
      thumbnail: string
      summary: string
      content: string
      tags: string
      featured: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
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
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the News model
   */ 
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'String'>
    readonly title: FieldRef<"News", 'String'>
    readonly slug: FieldRef<"News", 'String'>
    readonly category: FieldRef<"News", 'String'>
    readonly date: FieldRef<"News", 'String'>
    readonly author: FieldRef<"News", 'String'>
    readonly thumbnail: FieldRef<"News", 'String'>
    readonly summary: FieldRef<"News", 'String'>
    readonly content: FieldRef<"News", 'String'>
    readonly tags: FieldRef<"News", 'String'>
    readonly featured: FieldRef<"News", 'Boolean'>
    readonly createdAt: FieldRef<"News", 'DateTime'>
    readonly updatedAt: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
  }


  /**
   * Model Lecturer
   */

  export type AggregateLecturer = {
    _count: LecturerCountAggregateOutputType | null
    _avg: LecturerAvgAggregateOutputType | null
    _sum: LecturerSumAggregateOutputType | null
    _min: LecturerMinAggregateOutputType | null
    _max: LecturerMaxAggregateOutputType | null
  }

  export type LecturerAvgAggregateOutputType = {
    publicationsCount: number | null
  }

  export type LecturerSumAggregateOutputType = {
    publicationsCount: number | null
  }

  export type LecturerMinAggregateOutputType = {
    id: string | null
    name: string | null
    nidn: string | null
    title: string | null
    photo: string | null
    expertise: string | null
    expertiseTags: string | null
    email: string | null
    lab: string | null
    education: string | null
    googleScholar: string | null
    scopus: string | null
    sinta: string | null
    orcid: string | null
    researchGate: string | null
    coursesTaught: string | null
    publicationsCount: number | null
    studyProgram: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LecturerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    nidn: string | null
    title: string | null
    photo: string | null
    expertise: string | null
    expertiseTags: string | null
    email: string | null
    lab: string | null
    education: string | null
    googleScholar: string | null
    scopus: string | null
    sinta: string | null
    orcid: string | null
    researchGate: string | null
    coursesTaught: string | null
    publicationsCount: number | null
    studyProgram: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LecturerCountAggregateOutputType = {
    id: number
    name: number
    nidn: number
    title: number
    photo: number
    expertise: number
    expertiseTags: number
    email: number
    lab: number
    education: number
    googleScholar: number
    scopus: number
    sinta: number
    orcid: number
    researchGate: number
    coursesTaught: number
    publicationsCount: number
    studyProgram: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LecturerAvgAggregateInputType = {
    publicationsCount?: true
  }

  export type LecturerSumAggregateInputType = {
    publicationsCount?: true
  }

  export type LecturerMinAggregateInputType = {
    id?: true
    name?: true
    nidn?: true
    title?: true
    photo?: true
    expertise?: true
    expertiseTags?: true
    email?: true
    lab?: true
    education?: true
    googleScholar?: true
    scopus?: true
    sinta?: true
    orcid?: true
    researchGate?: true
    coursesTaught?: true
    publicationsCount?: true
    studyProgram?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LecturerMaxAggregateInputType = {
    id?: true
    name?: true
    nidn?: true
    title?: true
    photo?: true
    expertise?: true
    expertiseTags?: true
    email?: true
    lab?: true
    education?: true
    googleScholar?: true
    scopus?: true
    sinta?: true
    orcid?: true
    researchGate?: true
    coursesTaught?: true
    publicationsCount?: true
    studyProgram?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LecturerCountAggregateInputType = {
    id?: true
    name?: true
    nidn?: true
    title?: true
    photo?: true
    expertise?: true
    expertiseTags?: true
    email?: true
    lab?: true
    education?: true
    googleScholar?: true
    scopus?: true
    sinta?: true
    orcid?: true
    researchGate?: true
    coursesTaught?: true
    publicationsCount?: true
    studyProgram?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LecturerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lecturer to aggregate.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: LecturerOrderByWithRelationInput | LecturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lecturers
    **/
    _count?: true | LecturerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LecturerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LecturerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LecturerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LecturerMaxAggregateInputType
  }

  export type GetLecturerAggregateType<T extends LecturerAggregateArgs> = {
        [P in keyof T & keyof AggregateLecturer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecturer[P]>
      : GetScalarType<T[P], AggregateLecturer[P]>
  }




  export type LecturerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturerWhereInput
    orderBy?: LecturerOrderByWithAggregationInput | LecturerOrderByWithAggregationInput[]
    by: LecturerScalarFieldEnum[] | LecturerScalarFieldEnum
    having?: LecturerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LecturerCountAggregateInputType | true
    _avg?: LecturerAvgAggregateInputType
    _sum?: LecturerSumAggregateInputType
    _min?: LecturerMinAggregateInputType
    _max?: LecturerMaxAggregateInputType
  }

  export type LecturerGroupByOutputType = {
    id: string
    name: string
    nidn: string
    title: string
    photo: string
    expertise: string
    expertiseTags: string
    email: string
    lab: string
    education: string
    googleScholar: string | null
    scopus: string | null
    sinta: string | null
    orcid: string | null
    researchGate: string | null
    coursesTaught: string
    publicationsCount: number
    studyProgram: string | null
    createdAt: Date
    updatedAt: Date
    _count: LecturerCountAggregateOutputType | null
    _avg: LecturerAvgAggregateOutputType | null
    _sum: LecturerSumAggregateOutputType | null
    _min: LecturerMinAggregateOutputType | null
    _max: LecturerMaxAggregateOutputType | null
  }

  type GetLecturerGroupByPayload<T extends LecturerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LecturerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LecturerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LecturerGroupByOutputType[P]>
            : GetScalarType<T[P], LecturerGroupByOutputType[P]>
        }
      >
    >


  export type LecturerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nidn?: boolean
    title?: boolean
    photo?: boolean
    expertise?: boolean
    expertiseTags?: boolean
    email?: boolean
    lab?: boolean
    education?: boolean
    googleScholar?: boolean
    scopus?: boolean
    sinta?: boolean
    orcid?: boolean
    researchGate?: boolean
    coursesTaught?: boolean
    publicationsCount?: boolean
    studyProgram?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lecturer"]>


  export type LecturerSelectScalar = {
    id?: boolean
    name?: boolean
    nidn?: boolean
    title?: boolean
    photo?: boolean
    expertise?: boolean
    expertiseTags?: boolean
    email?: boolean
    lab?: boolean
    education?: boolean
    googleScholar?: boolean
    scopus?: boolean
    sinta?: boolean
    orcid?: boolean
    researchGate?: boolean
    coursesTaught?: boolean
    publicationsCount?: boolean
    studyProgram?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $LecturerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lecturer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      nidn: string
      title: string
      photo: string
      expertise: string
      expertiseTags: string
      email: string
      lab: string
      education: string
      googleScholar: string | null
      scopus: string | null
      sinta: string | null
      orcid: string | null
      researchGate: string | null
      coursesTaught: string
      publicationsCount: number
      studyProgram: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lecturer"]>
    composites: {}
  }

  type LecturerGetPayload<S extends boolean | null | undefined | LecturerDefaultArgs> = $Result.GetResult<Prisma.$LecturerPayload, S>

  type LecturerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LecturerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LecturerCountAggregateInputType | true
    }

  export interface LecturerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lecturer'], meta: { name: 'Lecturer' } }
    /**
     * Find zero or one Lecturer that matches the filter.
     * @param {LecturerFindUniqueArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LecturerFindUniqueArgs>(args: SelectSubset<T, LecturerFindUniqueArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Lecturer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LecturerFindUniqueOrThrowArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LecturerFindUniqueOrThrowArgs>(args: SelectSubset<T, LecturerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Lecturer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerFindFirstArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LecturerFindFirstArgs>(args?: SelectSubset<T, LecturerFindFirstArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Lecturer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerFindFirstOrThrowArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LecturerFindFirstOrThrowArgs>(args?: SelectSubset<T, LecturerFindFirstOrThrowArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Lecturers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lecturers
     * const lecturers = await prisma.lecturer.findMany()
     * 
     * // Get first 10 Lecturers
     * const lecturers = await prisma.lecturer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lecturerWithIdOnly = await prisma.lecturer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LecturerFindManyArgs>(args?: SelectSubset<T, LecturerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Lecturer.
     * @param {LecturerCreateArgs} args - Arguments to create a Lecturer.
     * @example
     * // Create one Lecturer
     * const Lecturer = await prisma.lecturer.create({
     *   data: {
     *     // ... data to create a Lecturer
     *   }
     * })
     * 
     */
    create<T extends LecturerCreateArgs>(args: SelectSubset<T, LecturerCreateArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Lecturers.
     * @param {LecturerCreateManyArgs} args - Arguments to create many Lecturers.
     * @example
     * // Create many Lecturers
     * const lecturer = await prisma.lecturer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LecturerCreateManyArgs>(args?: SelectSubset<T, LecturerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lecturer.
     * @param {LecturerDeleteArgs} args - Arguments to delete one Lecturer.
     * @example
     * // Delete one Lecturer
     * const Lecturer = await prisma.lecturer.delete({
     *   where: {
     *     // ... filter to delete one Lecturer
     *   }
     * })
     * 
     */
    delete<T extends LecturerDeleteArgs>(args: SelectSubset<T, LecturerDeleteArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Lecturer.
     * @param {LecturerUpdateArgs} args - Arguments to update one Lecturer.
     * @example
     * // Update one Lecturer
     * const lecturer = await prisma.lecturer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LecturerUpdateArgs>(args: SelectSubset<T, LecturerUpdateArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Lecturers.
     * @param {LecturerDeleteManyArgs} args - Arguments to filter Lecturers to delete.
     * @example
     * // Delete a few Lecturers
     * const { count } = await prisma.lecturer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LecturerDeleteManyArgs>(args?: SelectSubset<T, LecturerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lecturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lecturers
     * const lecturer = await prisma.lecturer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LecturerUpdateManyArgs>(args: SelectSubset<T, LecturerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lecturer.
     * @param {LecturerUpsertArgs} args - Arguments to update or create a Lecturer.
     * @example
     * // Update or create a Lecturer
     * const lecturer = await prisma.lecturer.upsert({
     *   create: {
     *     // ... data to create a Lecturer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lecturer we want to update
     *   }
     * })
     */
    upsert<T extends LecturerUpsertArgs>(args: SelectSubset<T, LecturerUpsertArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Lecturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerCountArgs} args - Arguments to filter Lecturers to count.
     * @example
     * // Count the number of Lecturers
     * const count = await prisma.lecturer.count({
     *   where: {
     *     // ... the filter for the Lecturers we want to count
     *   }
     * })
    **/
    count<T extends LecturerCountArgs>(
      args?: Subset<T, LecturerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LecturerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lecturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LecturerAggregateArgs>(args: Subset<T, LecturerAggregateArgs>): Prisma.PrismaPromise<GetLecturerAggregateType<T>>

    /**
     * Group by Lecturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerGroupByArgs} args - Group by arguments.
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
      T extends LecturerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LecturerGroupByArgs['orderBy'] }
        : { orderBy?: LecturerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LecturerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLecturerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lecturer model
   */
  readonly fields: LecturerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lecturer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LecturerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Lecturer model
   */ 
  interface LecturerFieldRefs {
    readonly id: FieldRef<"Lecturer", 'String'>
    readonly name: FieldRef<"Lecturer", 'String'>
    readonly nidn: FieldRef<"Lecturer", 'String'>
    readonly title: FieldRef<"Lecturer", 'String'>
    readonly photo: FieldRef<"Lecturer", 'String'>
    readonly expertise: FieldRef<"Lecturer", 'String'>
    readonly expertiseTags: FieldRef<"Lecturer", 'String'>
    readonly email: FieldRef<"Lecturer", 'String'>
    readonly lab: FieldRef<"Lecturer", 'String'>
    readonly education: FieldRef<"Lecturer", 'String'>
    readonly googleScholar: FieldRef<"Lecturer", 'String'>
    readonly scopus: FieldRef<"Lecturer", 'String'>
    readonly sinta: FieldRef<"Lecturer", 'String'>
    readonly orcid: FieldRef<"Lecturer", 'String'>
    readonly researchGate: FieldRef<"Lecturer", 'String'>
    readonly coursesTaught: FieldRef<"Lecturer", 'String'>
    readonly publicationsCount: FieldRef<"Lecturer", 'Int'>
    readonly studyProgram: FieldRef<"Lecturer", 'String'>
    readonly createdAt: FieldRef<"Lecturer", 'DateTime'>
    readonly updatedAt: FieldRef<"Lecturer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lecturer findUnique
   */
  export type LecturerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where: LecturerWhereUniqueInput
  }

  /**
   * Lecturer findUniqueOrThrow
   */
  export type LecturerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where: LecturerWhereUniqueInput
  }

  /**
   * Lecturer findFirst
   */
  export type LecturerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: LecturerOrderByWithRelationInput | LecturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lecturers.
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lecturers.
     */
    distinct?: LecturerScalarFieldEnum | LecturerScalarFieldEnum[]
  }

  /**
   * Lecturer findFirstOrThrow
   */
  export type LecturerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: LecturerOrderByWithRelationInput | LecturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lecturers.
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lecturers.
     */
    distinct?: LecturerScalarFieldEnum | LecturerScalarFieldEnum[]
  }

  /**
   * Lecturer findMany
   */
  export type LecturerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Filter, which Lecturers to fetch.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: LecturerOrderByWithRelationInput | LecturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lecturers.
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    distinct?: LecturerScalarFieldEnum | LecturerScalarFieldEnum[]
  }

  /**
   * Lecturer create
   */
  export type LecturerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * The data needed to create a Lecturer.
     */
    data: XOR<LecturerCreateInput, LecturerUncheckedCreateInput>
  }

  /**
   * Lecturer createMany
   */
  export type LecturerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lecturers.
     */
    data: LecturerCreateManyInput | LecturerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lecturer update
   */
  export type LecturerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * The data needed to update a Lecturer.
     */
    data: XOR<LecturerUpdateInput, LecturerUncheckedUpdateInput>
    /**
     * Choose, which Lecturer to update.
     */
    where: LecturerWhereUniqueInput
  }

  /**
   * Lecturer updateMany
   */
  export type LecturerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lecturers.
     */
    data: XOR<LecturerUpdateManyMutationInput, LecturerUncheckedUpdateManyInput>
    /**
     * Filter which Lecturers to update
     */
    where?: LecturerWhereInput
  }

  /**
   * Lecturer upsert
   */
  export type LecturerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * The filter to search for the Lecturer to update in case it exists.
     */
    where: LecturerWhereUniqueInput
    /**
     * In case the Lecturer found by the `where` argument doesn't exist, create a new Lecturer with this data.
     */
    create: XOR<LecturerCreateInput, LecturerUncheckedCreateInput>
    /**
     * In case the Lecturer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LecturerUpdateInput, LecturerUncheckedUpdateInput>
  }

  /**
   * Lecturer delete
   */
  export type LecturerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Filter which Lecturer to delete.
     */
    where: LecturerWhereUniqueInput
  }

  /**
   * Lecturer deleteMany
   */
  export type LecturerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lecturers to delete
     */
    where?: LecturerWhereInput
  }

  /**
   * Lecturer without action
   */
  export type LecturerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
  }


  /**
   * Model StudyProgram
   */

  export type AggregateStudyProgram = {
    _count: StudyProgramCountAggregateOutputType | null
    _avg: StudyProgramAvgAggregateOutputType | null
    _sum: StudyProgramSumAggregateOutputType | null
    _min: StudyProgramMinAggregateOutputType | null
    _max: StudyProgramMaxAggregateOutputType | null
  }

  export type StudyProgramAvgAggregateOutputType = {
    totalSks: number | null
    activeStudents: number | null
    capacity: number | null
  }

  export type StudyProgramSumAggregateOutputType = {
    totalSks: number | null
    activeStudents: number | null
    capacity: number | null
  }

  export type StudyProgramMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    degree: string | null
    accreditation: string | null
    headOfProgram: string | null
    headOfProdi: string | null
    headOfProdiNidn: string | null
    headOfProdiPhoto: string | null
    description: string | null
    totalSks: number | null
    activeStudents: number | null
    capacity: number | null
    vision: string | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudyProgramMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    degree: string | null
    accreditation: string | null
    headOfProgram: string | null
    headOfProdi: string | null
    headOfProdiNidn: string | null
    headOfProdiPhoto: string | null
    description: string | null
    totalSks: number | null
    activeStudents: number | null
    capacity: number | null
    vision: string | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudyProgramCountAggregateOutputType = {
    id: number
    code: number
    name: number
    degree: number
    accreditation: number
    headOfProgram: number
    headOfProdi: number
    headOfProdiNidn: number
    headOfProdiPhoto: number
    description: number
    totalSks: number
    activeStudents: number
    capacity: number
    vision: number
    logoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudyProgramAvgAggregateInputType = {
    totalSks?: true
    activeStudents?: true
    capacity?: true
  }

  export type StudyProgramSumAggregateInputType = {
    totalSks?: true
    activeStudents?: true
    capacity?: true
  }

  export type StudyProgramMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    degree?: true
    accreditation?: true
    headOfProgram?: true
    headOfProdi?: true
    headOfProdiNidn?: true
    headOfProdiPhoto?: true
    description?: true
    totalSks?: true
    activeStudents?: true
    capacity?: true
    vision?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudyProgramMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    degree?: true
    accreditation?: true
    headOfProgram?: true
    headOfProdi?: true
    headOfProdiNidn?: true
    headOfProdiPhoto?: true
    description?: true
    totalSks?: true
    activeStudents?: true
    capacity?: true
    vision?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudyProgramCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    degree?: true
    accreditation?: true
    headOfProgram?: true
    headOfProdi?: true
    headOfProdiNidn?: true
    headOfProdiPhoto?: true
    description?: true
    totalSks?: true
    activeStudents?: true
    capacity?: true
    vision?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudyProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyProgram to aggregate.
     */
    where?: StudyProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPrograms to fetch.
     */
    orderBy?: StudyProgramOrderByWithRelationInput | StudyProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudyProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudyPrograms
    **/
    _count?: true | StudyProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudyProgramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudyProgramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudyProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudyProgramMaxAggregateInputType
  }

  export type GetStudyProgramAggregateType<T extends StudyProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateStudyProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudyProgram[P]>
      : GetScalarType<T[P], AggregateStudyProgram[P]>
  }




  export type StudyProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyProgramWhereInput
    orderBy?: StudyProgramOrderByWithAggregationInput | StudyProgramOrderByWithAggregationInput[]
    by: StudyProgramScalarFieldEnum[] | StudyProgramScalarFieldEnum
    having?: StudyProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudyProgramCountAggregateInputType | true
    _avg?: StudyProgramAvgAggregateInputType
    _sum?: StudyProgramSumAggregateInputType
    _min?: StudyProgramMinAggregateInputType
    _max?: StudyProgramMaxAggregateInputType
  }

  export type StudyProgramGroupByOutputType = {
    id: string
    code: string
    name: string
    degree: string
    accreditation: string
    headOfProgram: string
    headOfProdi: string | null
    headOfProdiNidn: string | null
    headOfProdiPhoto: string | null
    description: string
    totalSks: number
    activeStudents: number
    capacity: number
    vision: string
    logoUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: StudyProgramCountAggregateOutputType | null
    _avg: StudyProgramAvgAggregateOutputType | null
    _sum: StudyProgramSumAggregateOutputType | null
    _min: StudyProgramMinAggregateOutputType | null
    _max: StudyProgramMaxAggregateOutputType | null
  }

  type GetStudyProgramGroupByPayload<T extends StudyProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudyProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudyProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudyProgramGroupByOutputType[P]>
            : GetScalarType<T[P], StudyProgramGroupByOutputType[P]>
        }
      >
    >


  export type StudyProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    degree?: boolean
    accreditation?: boolean
    headOfProgram?: boolean
    headOfProdi?: boolean
    headOfProdiNidn?: boolean
    headOfProdiPhoto?: boolean
    description?: boolean
    totalSks?: boolean
    activeStudents?: boolean
    capacity?: boolean
    vision?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["studyProgram"]>


  export type StudyProgramSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    degree?: boolean
    accreditation?: boolean
    headOfProgram?: boolean
    headOfProdi?: boolean
    headOfProdiNidn?: boolean
    headOfProdiPhoto?: boolean
    description?: boolean
    totalSks?: boolean
    activeStudents?: boolean
    capacity?: boolean
    vision?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $StudyProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudyProgram"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      degree: string
      accreditation: string
      headOfProgram: string
      headOfProdi: string | null
      headOfProdiNidn: string | null
      headOfProdiPhoto: string | null
      description: string
      totalSks: number
      activeStudents: number
      capacity: number
      vision: string
      logoUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studyProgram"]>
    composites: {}
  }

  type StudyProgramGetPayload<S extends boolean | null | undefined | StudyProgramDefaultArgs> = $Result.GetResult<Prisma.$StudyProgramPayload, S>

  type StudyProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudyProgramFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudyProgramCountAggregateInputType | true
    }

  export interface StudyProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudyProgram'], meta: { name: 'StudyProgram' } }
    /**
     * Find zero or one StudyProgram that matches the filter.
     * @param {StudyProgramFindUniqueArgs} args - Arguments to find a StudyProgram
     * @example
     * // Get one StudyProgram
     * const studyProgram = await prisma.studyProgram.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudyProgramFindUniqueArgs>(args: SelectSubset<T, StudyProgramFindUniqueArgs<ExtArgs>>): Prisma__StudyProgramClient<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StudyProgram that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StudyProgramFindUniqueOrThrowArgs} args - Arguments to find a StudyProgram
     * @example
     * // Get one StudyProgram
     * const studyProgram = await prisma.studyProgram.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudyProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, StudyProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudyProgramClient<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StudyProgram that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgramFindFirstArgs} args - Arguments to find a StudyProgram
     * @example
     * // Get one StudyProgram
     * const studyProgram = await prisma.studyProgram.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudyProgramFindFirstArgs>(args?: SelectSubset<T, StudyProgramFindFirstArgs<ExtArgs>>): Prisma__StudyProgramClient<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StudyProgram that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgramFindFirstOrThrowArgs} args - Arguments to find a StudyProgram
     * @example
     * // Get one StudyProgram
     * const studyProgram = await prisma.studyProgram.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudyProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, StudyProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudyProgramClient<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StudyPrograms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudyPrograms
     * const studyPrograms = await prisma.studyProgram.findMany()
     * 
     * // Get first 10 StudyPrograms
     * const studyPrograms = await prisma.studyProgram.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studyProgramWithIdOnly = await prisma.studyProgram.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudyProgramFindManyArgs>(args?: SelectSubset<T, StudyProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StudyProgram.
     * @param {StudyProgramCreateArgs} args - Arguments to create a StudyProgram.
     * @example
     * // Create one StudyProgram
     * const StudyProgram = await prisma.studyProgram.create({
     *   data: {
     *     // ... data to create a StudyProgram
     *   }
     * })
     * 
     */
    create<T extends StudyProgramCreateArgs>(args: SelectSubset<T, StudyProgramCreateArgs<ExtArgs>>): Prisma__StudyProgramClient<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StudyPrograms.
     * @param {StudyProgramCreateManyArgs} args - Arguments to create many StudyPrograms.
     * @example
     * // Create many StudyPrograms
     * const studyProgram = await prisma.studyProgram.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudyProgramCreateManyArgs>(args?: SelectSubset<T, StudyProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudyProgram.
     * @param {StudyProgramDeleteArgs} args - Arguments to delete one StudyProgram.
     * @example
     * // Delete one StudyProgram
     * const StudyProgram = await prisma.studyProgram.delete({
     *   where: {
     *     // ... filter to delete one StudyProgram
     *   }
     * })
     * 
     */
    delete<T extends StudyProgramDeleteArgs>(args: SelectSubset<T, StudyProgramDeleteArgs<ExtArgs>>): Prisma__StudyProgramClient<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StudyProgram.
     * @param {StudyProgramUpdateArgs} args - Arguments to update one StudyProgram.
     * @example
     * // Update one StudyProgram
     * const studyProgram = await prisma.studyProgram.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudyProgramUpdateArgs>(args: SelectSubset<T, StudyProgramUpdateArgs<ExtArgs>>): Prisma__StudyProgramClient<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StudyPrograms.
     * @param {StudyProgramDeleteManyArgs} args - Arguments to filter StudyPrograms to delete.
     * @example
     * // Delete a few StudyPrograms
     * const { count } = await prisma.studyProgram.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudyProgramDeleteManyArgs>(args?: SelectSubset<T, StudyProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudyPrograms
     * const studyProgram = await prisma.studyProgram.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudyProgramUpdateManyArgs>(args: SelectSubset<T, StudyProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudyProgram.
     * @param {StudyProgramUpsertArgs} args - Arguments to update or create a StudyProgram.
     * @example
     * // Update or create a StudyProgram
     * const studyProgram = await prisma.studyProgram.upsert({
     *   create: {
     *     // ... data to create a StudyProgram
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudyProgram we want to update
     *   }
     * })
     */
    upsert<T extends StudyProgramUpsertArgs>(args: SelectSubset<T, StudyProgramUpsertArgs<ExtArgs>>): Prisma__StudyProgramClient<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StudyPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgramCountArgs} args - Arguments to filter StudyPrograms to count.
     * @example
     * // Count the number of StudyPrograms
     * const count = await prisma.studyProgram.count({
     *   where: {
     *     // ... the filter for the StudyPrograms we want to count
     *   }
     * })
    **/
    count<T extends StudyProgramCountArgs>(
      args?: Subset<T, StudyProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudyProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudyProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudyProgramAggregateArgs>(args: Subset<T, StudyProgramAggregateArgs>): Prisma.PrismaPromise<GetStudyProgramAggregateType<T>>

    /**
     * Group by StudyProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgramGroupByArgs} args - Group by arguments.
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
      T extends StudyProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudyProgramGroupByArgs['orderBy'] }
        : { orderBy?: StudyProgramGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudyProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudyProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudyProgram model
   */
  readonly fields: StudyProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudyProgram.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudyProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the StudyProgram model
   */ 
  interface StudyProgramFieldRefs {
    readonly id: FieldRef<"StudyProgram", 'String'>
    readonly code: FieldRef<"StudyProgram", 'String'>
    readonly name: FieldRef<"StudyProgram", 'String'>
    readonly degree: FieldRef<"StudyProgram", 'String'>
    readonly accreditation: FieldRef<"StudyProgram", 'String'>
    readonly headOfProgram: FieldRef<"StudyProgram", 'String'>
    readonly headOfProdi: FieldRef<"StudyProgram", 'String'>
    readonly headOfProdiNidn: FieldRef<"StudyProgram", 'String'>
    readonly headOfProdiPhoto: FieldRef<"StudyProgram", 'String'>
    readonly description: FieldRef<"StudyProgram", 'String'>
    readonly totalSks: FieldRef<"StudyProgram", 'Int'>
    readonly activeStudents: FieldRef<"StudyProgram", 'Int'>
    readonly capacity: FieldRef<"StudyProgram", 'Int'>
    readonly vision: FieldRef<"StudyProgram", 'String'>
    readonly logoUrl: FieldRef<"StudyProgram", 'String'>
    readonly createdAt: FieldRef<"StudyProgram", 'DateTime'>
    readonly updatedAt: FieldRef<"StudyProgram", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudyProgram findUnique
   */
  export type StudyProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * Filter, which StudyProgram to fetch.
     */
    where: StudyProgramWhereUniqueInput
  }

  /**
   * StudyProgram findUniqueOrThrow
   */
  export type StudyProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * Filter, which StudyProgram to fetch.
     */
    where: StudyProgramWhereUniqueInput
  }

  /**
   * StudyProgram findFirst
   */
  export type StudyProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * Filter, which StudyProgram to fetch.
     */
    where?: StudyProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPrograms to fetch.
     */
    orderBy?: StudyProgramOrderByWithRelationInput | StudyProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyPrograms.
     */
    cursor?: StudyProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyPrograms.
     */
    distinct?: StudyProgramScalarFieldEnum | StudyProgramScalarFieldEnum[]
  }

  /**
   * StudyProgram findFirstOrThrow
   */
  export type StudyProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * Filter, which StudyProgram to fetch.
     */
    where?: StudyProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPrograms to fetch.
     */
    orderBy?: StudyProgramOrderByWithRelationInput | StudyProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyPrograms.
     */
    cursor?: StudyProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyPrograms.
     */
    distinct?: StudyProgramScalarFieldEnum | StudyProgramScalarFieldEnum[]
  }

  /**
   * StudyProgram findMany
   */
  export type StudyProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * Filter, which StudyPrograms to fetch.
     */
    where?: StudyProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPrograms to fetch.
     */
    orderBy?: StudyProgramOrderByWithRelationInput | StudyProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudyPrograms.
     */
    cursor?: StudyProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPrograms.
     */
    skip?: number
    distinct?: StudyProgramScalarFieldEnum | StudyProgramScalarFieldEnum[]
  }

  /**
   * StudyProgram create
   */
  export type StudyProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * The data needed to create a StudyProgram.
     */
    data: XOR<StudyProgramCreateInput, StudyProgramUncheckedCreateInput>
  }

  /**
   * StudyProgram createMany
   */
  export type StudyProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudyPrograms.
     */
    data: StudyProgramCreateManyInput | StudyProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudyProgram update
   */
  export type StudyProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * The data needed to update a StudyProgram.
     */
    data: XOR<StudyProgramUpdateInput, StudyProgramUncheckedUpdateInput>
    /**
     * Choose, which StudyProgram to update.
     */
    where: StudyProgramWhereUniqueInput
  }

  /**
   * StudyProgram updateMany
   */
  export type StudyProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudyPrograms.
     */
    data: XOR<StudyProgramUpdateManyMutationInput, StudyProgramUncheckedUpdateManyInput>
    /**
     * Filter which StudyPrograms to update
     */
    where?: StudyProgramWhereInput
  }

  /**
   * StudyProgram upsert
   */
  export type StudyProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * The filter to search for the StudyProgram to update in case it exists.
     */
    where: StudyProgramWhereUniqueInput
    /**
     * In case the StudyProgram found by the `where` argument doesn't exist, create a new StudyProgram with this data.
     */
    create: XOR<StudyProgramCreateInput, StudyProgramUncheckedCreateInput>
    /**
     * In case the StudyProgram was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudyProgramUpdateInput, StudyProgramUncheckedUpdateInput>
  }

  /**
   * StudyProgram delete
   */
  export type StudyProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * Filter which StudyProgram to delete.
     */
    where: StudyProgramWhereUniqueInput
  }

  /**
   * StudyProgram deleteMany
   */
  export type StudyProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyPrograms to delete
     */
    where?: StudyProgramWhereInput
  }

  /**
   * StudyProgram without action
   */
  export type StudyProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    sks: number | null
    semester: number | null
  }

  export type CourseSumAggregateOutputType = {
    sks: number | null
    semester: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    sks: number | null
    semester: number | null
    category: string | null
    specialization: string | null
    studyProgram: string | null
    description: string | null
    prerequisites: string | null
    syllabusTopic: string | null
    rpsUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    sks: number | null
    semester: number | null
    category: string | null
    specialization: string | null
    studyProgram: string | null
    description: string | null
    prerequisites: string | null
    syllabusTopic: string | null
    rpsUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    code: number
    name: number
    sks: number
    semester: number
    category: number
    specialization: number
    studyProgram: number
    description: number
    prerequisites: number
    syllabusTopic: number
    rpsUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    sks?: true
    semester?: true
  }

  export type CourseSumAggregateInputType = {
    sks?: true
    semester?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    sks?: true
    semester?: true
    category?: true
    specialization?: true
    studyProgram?: true
    description?: true
    prerequisites?: true
    syllabusTopic?: true
    rpsUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    sks?: true
    semester?: true
    category?: true
    specialization?: true
    studyProgram?: true
    description?: true
    prerequisites?: true
    syllabusTopic?: true
    rpsUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    sks?: true
    semester?: true
    category?: true
    specialization?: true
    studyProgram?: true
    description?: true
    prerequisites?: true
    syllabusTopic?: true
    rpsUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
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




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    code: string
    name: string
    sks: number
    semester: number
    category: string
    specialization: string | null
    studyProgram: string | null
    description: string
    prerequisites: string
    syllabusTopic: string
    rpsUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
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


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    sks?: boolean
    semester?: boolean
    category?: boolean
    specialization?: boolean
    studyProgram?: boolean
    description?: boolean
    prerequisites?: boolean
    syllabusTopic?: boolean
    rpsUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>


  export type CourseSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    sks?: boolean
    semester?: boolean
    category?: boolean
    specialization?: boolean
    studyProgram?: boolean
    description?: boolean
    prerequisites?: boolean
    syllabusTopic?: boolean
    rpsUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      sks: number
      semester: number
      category: string
      specialization: string | null
      studyProgram: string | null
      description: string
      prerequisites: string
      syllabusTopic: string
      rpsUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
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
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
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
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
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
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Course model
   */ 
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly code: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly sks: FieldRef<"Course", 'Int'>
    readonly semester: FieldRef<"Course", 'Int'>
    readonly category: FieldRef<"Course", 'String'>
    readonly specialization: FieldRef<"Course", 'String'>
    readonly studyProgram: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly prerequisites: FieldRef<"Course", 'String'>
    readonly syllabusTopic: FieldRef<"Course", 'String'>
    readonly rpsUrl: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
  }


  /**
   * Model StudentOrg
   */

  export type AggregateStudentOrg = {
    _count: StudentOrgCountAggregateOutputType | null
    _min: StudentOrgMinAggregateOutputType | null
    _max: StudentOrgMaxAggregateOutputType | null
  }

  export type StudentOrgMinAggregateOutputType = {
    id: string | null
    name: string | null
    abbreviation: string | null
    logo: string | null
    description: string | null
    cabinetName: string | null
    cabinetYear: string | null
    leaderName: string | null
    leaderPhoto: string | null
    viceLeaderName: string | null
    divisions: string | null
    upcomingEvents: string | null
    updatedAt: Date | null
  }

  export type StudentOrgMaxAggregateOutputType = {
    id: string | null
    name: string | null
    abbreviation: string | null
    logo: string | null
    description: string | null
    cabinetName: string | null
    cabinetYear: string | null
    leaderName: string | null
    leaderPhoto: string | null
    viceLeaderName: string | null
    divisions: string | null
    upcomingEvents: string | null
    updatedAt: Date | null
  }

  export type StudentOrgCountAggregateOutputType = {
    id: number
    name: number
    abbreviation: number
    logo: number
    description: number
    cabinetName: number
    cabinetYear: number
    leaderName: number
    leaderPhoto: number
    viceLeaderName: number
    divisions: number
    upcomingEvents: number
    updatedAt: number
    _all: number
  }


  export type StudentOrgMinAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    logo?: true
    description?: true
    cabinetName?: true
    cabinetYear?: true
    leaderName?: true
    leaderPhoto?: true
    viceLeaderName?: true
    divisions?: true
    upcomingEvents?: true
    updatedAt?: true
  }

  export type StudentOrgMaxAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    logo?: true
    description?: true
    cabinetName?: true
    cabinetYear?: true
    leaderName?: true
    leaderPhoto?: true
    viceLeaderName?: true
    divisions?: true
    upcomingEvents?: true
    updatedAt?: true
  }

  export type StudentOrgCountAggregateInputType = {
    id?: true
    name?: true
    abbreviation?: true
    logo?: true
    description?: true
    cabinetName?: true
    cabinetYear?: true
    leaderName?: true
    leaderPhoto?: true
    viceLeaderName?: true
    divisions?: true
    upcomingEvents?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentOrgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentOrg to aggregate.
     */
    where?: StudentOrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentOrgs to fetch.
     */
    orderBy?: StudentOrgOrderByWithRelationInput | StudentOrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentOrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentOrgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentOrgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentOrgs
    **/
    _count?: true | StudentOrgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentOrgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentOrgMaxAggregateInputType
  }

  export type GetStudentOrgAggregateType<T extends StudentOrgAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentOrg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentOrg[P]>
      : GetScalarType<T[P], AggregateStudentOrg[P]>
  }




  export type StudentOrgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentOrgWhereInput
    orderBy?: StudentOrgOrderByWithAggregationInput | StudentOrgOrderByWithAggregationInput[]
    by: StudentOrgScalarFieldEnum[] | StudentOrgScalarFieldEnum
    having?: StudentOrgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentOrgCountAggregateInputType | true
    _min?: StudentOrgMinAggregateInputType
    _max?: StudentOrgMaxAggregateInputType
  }

  export type StudentOrgGroupByOutputType = {
    id: string
    name: string
    abbreviation: string
    logo: string
    description: string
    cabinetName: string
    cabinetYear: string
    leaderName: string
    leaderPhoto: string
    viceLeaderName: string
    divisions: string
    upcomingEvents: string
    updatedAt: Date
    _count: StudentOrgCountAggregateOutputType | null
    _min: StudentOrgMinAggregateOutputType | null
    _max: StudentOrgMaxAggregateOutputType | null
  }

  type GetStudentOrgGroupByPayload<T extends StudentOrgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentOrgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentOrgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentOrgGroupByOutputType[P]>
            : GetScalarType<T[P], StudentOrgGroupByOutputType[P]>
        }
      >
    >


  export type StudentOrgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    logo?: boolean
    description?: boolean
    cabinetName?: boolean
    cabinetYear?: boolean
    leaderName?: boolean
    leaderPhoto?: boolean
    viceLeaderName?: boolean
    divisions?: boolean
    upcomingEvents?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["studentOrg"]>


  export type StudentOrgSelectScalar = {
    id?: boolean
    name?: boolean
    abbreviation?: boolean
    logo?: boolean
    description?: boolean
    cabinetName?: boolean
    cabinetYear?: boolean
    leaderName?: boolean
    leaderPhoto?: boolean
    viceLeaderName?: boolean
    divisions?: boolean
    upcomingEvents?: boolean
    updatedAt?: boolean
  }


  export type $StudentOrgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentOrg"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      abbreviation: string
      logo: string
      description: string
      cabinetName: string
      cabinetYear: string
      leaderName: string
      leaderPhoto: string
      viceLeaderName: string
      divisions: string
      upcomingEvents: string
      updatedAt: Date
    }, ExtArgs["result"]["studentOrg"]>
    composites: {}
  }

  type StudentOrgGetPayload<S extends boolean | null | undefined | StudentOrgDefaultArgs> = $Result.GetResult<Prisma.$StudentOrgPayload, S>

  type StudentOrgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentOrgFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudentOrgCountAggregateInputType | true
    }

  export interface StudentOrgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentOrg'], meta: { name: 'StudentOrg' } }
    /**
     * Find zero or one StudentOrg that matches the filter.
     * @param {StudentOrgFindUniqueArgs} args - Arguments to find a StudentOrg
     * @example
     * // Get one StudentOrg
     * const studentOrg = await prisma.studentOrg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentOrgFindUniqueArgs>(args: SelectSubset<T, StudentOrgFindUniqueArgs<ExtArgs>>): Prisma__StudentOrgClient<$Result.GetResult<Prisma.$StudentOrgPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StudentOrg that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StudentOrgFindUniqueOrThrowArgs} args - Arguments to find a StudentOrg
     * @example
     * // Get one StudentOrg
     * const studentOrg = await prisma.studentOrg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentOrgFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentOrgFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentOrgClient<$Result.GetResult<Prisma.$StudentOrgPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StudentOrg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentOrgFindFirstArgs} args - Arguments to find a StudentOrg
     * @example
     * // Get one StudentOrg
     * const studentOrg = await prisma.studentOrg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentOrgFindFirstArgs>(args?: SelectSubset<T, StudentOrgFindFirstArgs<ExtArgs>>): Prisma__StudentOrgClient<$Result.GetResult<Prisma.$StudentOrgPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StudentOrg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentOrgFindFirstOrThrowArgs} args - Arguments to find a StudentOrg
     * @example
     * // Get one StudentOrg
     * const studentOrg = await prisma.studentOrg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentOrgFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentOrgFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentOrgClient<$Result.GetResult<Prisma.$StudentOrgPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StudentOrgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentOrgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentOrgs
     * const studentOrgs = await prisma.studentOrg.findMany()
     * 
     * // Get first 10 StudentOrgs
     * const studentOrgs = await prisma.studentOrg.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentOrgWithIdOnly = await prisma.studentOrg.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentOrgFindManyArgs>(args?: SelectSubset<T, StudentOrgFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentOrgPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StudentOrg.
     * @param {StudentOrgCreateArgs} args - Arguments to create a StudentOrg.
     * @example
     * // Create one StudentOrg
     * const StudentOrg = await prisma.studentOrg.create({
     *   data: {
     *     // ... data to create a StudentOrg
     *   }
     * })
     * 
     */
    create<T extends StudentOrgCreateArgs>(args: SelectSubset<T, StudentOrgCreateArgs<ExtArgs>>): Prisma__StudentOrgClient<$Result.GetResult<Prisma.$StudentOrgPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StudentOrgs.
     * @param {StudentOrgCreateManyArgs} args - Arguments to create many StudentOrgs.
     * @example
     * // Create many StudentOrgs
     * const studentOrg = await prisma.studentOrg.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentOrgCreateManyArgs>(args?: SelectSubset<T, StudentOrgCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentOrg.
     * @param {StudentOrgDeleteArgs} args - Arguments to delete one StudentOrg.
     * @example
     * // Delete one StudentOrg
     * const StudentOrg = await prisma.studentOrg.delete({
     *   where: {
     *     // ... filter to delete one StudentOrg
     *   }
     * })
     * 
     */
    delete<T extends StudentOrgDeleteArgs>(args: SelectSubset<T, StudentOrgDeleteArgs<ExtArgs>>): Prisma__StudentOrgClient<$Result.GetResult<Prisma.$StudentOrgPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StudentOrg.
     * @param {StudentOrgUpdateArgs} args - Arguments to update one StudentOrg.
     * @example
     * // Update one StudentOrg
     * const studentOrg = await prisma.studentOrg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentOrgUpdateArgs>(args: SelectSubset<T, StudentOrgUpdateArgs<ExtArgs>>): Prisma__StudentOrgClient<$Result.GetResult<Prisma.$StudentOrgPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StudentOrgs.
     * @param {StudentOrgDeleteManyArgs} args - Arguments to filter StudentOrgs to delete.
     * @example
     * // Delete a few StudentOrgs
     * const { count } = await prisma.studentOrg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentOrgDeleteManyArgs>(args?: SelectSubset<T, StudentOrgDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentOrgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentOrgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentOrgs
     * const studentOrg = await prisma.studentOrg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentOrgUpdateManyArgs>(args: SelectSubset<T, StudentOrgUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentOrg.
     * @param {StudentOrgUpsertArgs} args - Arguments to update or create a StudentOrg.
     * @example
     * // Update or create a StudentOrg
     * const studentOrg = await prisma.studentOrg.upsert({
     *   create: {
     *     // ... data to create a StudentOrg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentOrg we want to update
     *   }
     * })
     */
    upsert<T extends StudentOrgUpsertArgs>(args: SelectSubset<T, StudentOrgUpsertArgs<ExtArgs>>): Prisma__StudentOrgClient<$Result.GetResult<Prisma.$StudentOrgPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StudentOrgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentOrgCountArgs} args - Arguments to filter StudentOrgs to count.
     * @example
     * // Count the number of StudentOrgs
     * const count = await prisma.studentOrg.count({
     *   where: {
     *     // ... the filter for the StudentOrgs we want to count
     *   }
     * })
    **/
    count<T extends StudentOrgCountArgs>(
      args?: Subset<T, StudentOrgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentOrgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentOrg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentOrgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentOrgAggregateArgs>(args: Subset<T, StudentOrgAggregateArgs>): Prisma.PrismaPromise<GetStudentOrgAggregateType<T>>

    /**
     * Group by StudentOrg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentOrgGroupByArgs} args - Group by arguments.
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
      T extends StudentOrgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentOrgGroupByArgs['orderBy'] }
        : { orderBy?: StudentOrgGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentOrgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentOrgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentOrg model
   */
  readonly fields: StudentOrgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentOrg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentOrgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the StudentOrg model
   */ 
  interface StudentOrgFieldRefs {
    readonly id: FieldRef<"StudentOrg", 'String'>
    readonly name: FieldRef<"StudentOrg", 'String'>
    readonly abbreviation: FieldRef<"StudentOrg", 'String'>
    readonly logo: FieldRef<"StudentOrg", 'String'>
    readonly description: FieldRef<"StudentOrg", 'String'>
    readonly cabinetName: FieldRef<"StudentOrg", 'String'>
    readonly cabinetYear: FieldRef<"StudentOrg", 'String'>
    readonly leaderName: FieldRef<"StudentOrg", 'String'>
    readonly leaderPhoto: FieldRef<"StudentOrg", 'String'>
    readonly viceLeaderName: FieldRef<"StudentOrg", 'String'>
    readonly divisions: FieldRef<"StudentOrg", 'String'>
    readonly upcomingEvents: FieldRef<"StudentOrg", 'String'>
    readonly updatedAt: FieldRef<"StudentOrg", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentOrg findUnique
   */
  export type StudentOrgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOrg
     */
    select?: StudentOrgSelect<ExtArgs> | null
    /**
     * Filter, which StudentOrg to fetch.
     */
    where: StudentOrgWhereUniqueInput
  }

  /**
   * StudentOrg findUniqueOrThrow
   */
  export type StudentOrgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOrg
     */
    select?: StudentOrgSelect<ExtArgs> | null
    /**
     * Filter, which StudentOrg to fetch.
     */
    where: StudentOrgWhereUniqueInput
  }

  /**
   * StudentOrg findFirst
   */
  export type StudentOrgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOrg
     */
    select?: StudentOrgSelect<ExtArgs> | null
    /**
     * Filter, which StudentOrg to fetch.
     */
    where?: StudentOrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentOrgs to fetch.
     */
    orderBy?: StudentOrgOrderByWithRelationInput | StudentOrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentOrgs.
     */
    cursor?: StudentOrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentOrgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentOrgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentOrgs.
     */
    distinct?: StudentOrgScalarFieldEnum | StudentOrgScalarFieldEnum[]
  }

  /**
   * StudentOrg findFirstOrThrow
   */
  export type StudentOrgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOrg
     */
    select?: StudentOrgSelect<ExtArgs> | null
    /**
     * Filter, which StudentOrg to fetch.
     */
    where?: StudentOrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentOrgs to fetch.
     */
    orderBy?: StudentOrgOrderByWithRelationInput | StudentOrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentOrgs.
     */
    cursor?: StudentOrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentOrgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentOrgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentOrgs.
     */
    distinct?: StudentOrgScalarFieldEnum | StudentOrgScalarFieldEnum[]
  }

  /**
   * StudentOrg findMany
   */
  export type StudentOrgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOrg
     */
    select?: StudentOrgSelect<ExtArgs> | null
    /**
     * Filter, which StudentOrgs to fetch.
     */
    where?: StudentOrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentOrgs to fetch.
     */
    orderBy?: StudentOrgOrderByWithRelationInput | StudentOrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentOrgs.
     */
    cursor?: StudentOrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentOrgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentOrgs.
     */
    skip?: number
    distinct?: StudentOrgScalarFieldEnum | StudentOrgScalarFieldEnum[]
  }

  /**
   * StudentOrg create
   */
  export type StudentOrgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOrg
     */
    select?: StudentOrgSelect<ExtArgs> | null
    /**
     * The data needed to create a StudentOrg.
     */
    data: XOR<StudentOrgCreateInput, StudentOrgUncheckedCreateInput>
  }

  /**
   * StudentOrg createMany
   */
  export type StudentOrgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentOrgs.
     */
    data: StudentOrgCreateManyInput | StudentOrgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentOrg update
   */
  export type StudentOrgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOrg
     */
    select?: StudentOrgSelect<ExtArgs> | null
    /**
     * The data needed to update a StudentOrg.
     */
    data: XOR<StudentOrgUpdateInput, StudentOrgUncheckedUpdateInput>
    /**
     * Choose, which StudentOrg to update.
     */
    where: StudentOrgWhereUniqueInput
  }

  /**
   * StudentOrg updateMany
   */
  export type StudentOrgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentOrgs.
     */
    data: XOR<StudentOrgUpdateManyMutationInput, StudentOrgUncheckedUpdateManyInput>
    /**
     * Filter which StudentOrgs to update
     */
    where?: StudentOrgWhereInput
  }

  /**
   * StudentOrg upsert
   */
  export type StudentOrgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOrg
     */
    select?: StudentOrgSelect<ExtArgs> | null
    /**
     * The filter to search for the StudentOrg to update in case it exists.
     */
    where: StudentOrgWhereUniqueInput
    /**
     * In case the StudentOrg found by the `where` argument doesn't exist, create a new StudentOrg with this data.
     */
    create: XOR<StudentOrgCreateInput, StudentOrgUncheckedCreateInput>
    /**
     * In case the StudentOrg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentOrgUpdateInput, StudentOrgUncheckedUpdateInput>
  }

  /**
   * StudentOrg delete
   */
  export type StudentOrgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOrg
     */
    select?: StudentOrgSelect<ExtArgs> | null
    /**
     * Filter which StudentOrg to delete.
     */
    where: StudentOrgWhereUniqueInput
  }

  /**
   * StudentOrg deleteMany
   */
  export type StudentOrgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentOrgs to delete
     */
    where?: StudentOrgWhereInput
  }

  /**
   * StudentOrg without action
   */
  export type StudentOrgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentOrg
     */
    select?: StudentOrgSelect<ExtArgs> | null
  }


  /**
   * Model MediaFile
   */

  export type AggregateMediaFile = {
    _count: MediaFileCountAggregateOutputType | null
    _avg: MediaFileAvgAggregateOutputType | null
    _sum: MediaFileSumAggregateOutputType | null
    _min: MediaFileMinAggregateOutputType | null
    _max: MediaFileMaxAggregateOutputType | null
  }

  export type MediaFileAvgAggregateOutputType = {
    sizeBytes: number | null
  }

  export type MediaFileSumAggregateOutputType = {
    sizeBytes: number | null
  }

  export type MediaFileMinAggregateOutputType = {
    id: string | null
    fileName: string | null
    originalName: string | null
    sizeBytes: number | null
    type: string | null
    url: string | null
    uploadedAt: string | null
    dimensions: string | null
    folderId: string | null
    createdAt: Date | null
  }

  export type MediaFileMaxAggregateOutputType = {
    id: string | null
    fileName: string | null
    originalName: string | null
    sizeBytes: number | null
    type: string | null
    url: string | null
    uploadedAt: string | null
    dimensions: string | null
    folderId: string | null
    createdAt: Date | null
  }

  export type MediaFileCountAggregateOutputType = {
    id: number
    fileName: number
    originalName: number
    sizeBytes: number
    type: number
    url: number
    uploadedAt: number
    dimensions: number
    folderId: number
    createdAt: number
    _all: number
  }


  export type MediaFileAvgAggregateInputType = {
    sizeBytes?: true
  }

  export type MediaFileSumAggregateInputType = {
    sizeBytes?: true
  }

  export type MediaFileMinAggregateInputType = {
    id?: true
    fileName?: true
    originalName?: true
    sizeBytes?: true
    type?: true
    url?: true
    uploadedAt?: true
    dimensions?: true
    folderId?: true
    createdAt?: true
  }

  export type MediaFileMaxAggregateInputType = {
    id?: true
    fileName?: true
    originalName?: true
    sizeBytes?: true
    type?: true
    url?: true
    uploadedAt?: true
    dimensions?: true
    folderId?: true
    createdAt?: true
  }

  export type MediaFileCountAggregateInputType = {
    id?: true
    fileName?: true
    originalName?: true
    sizeBytes?: true
    type?: true
    url?: true
    uploadedAt?: true
    dimensions?: true
    folderId?: true
    createdAt?: true
    _all?: true
  }

  export type MediaFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaFile to aggregate.
     */
    where?: MediaFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFiles to fetch.
     */
    orderBy?: MediaFileOrderByWithRelationInput | MediaFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaFiles
    **/
    _count?: true | MediaFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaFileMaxAggregateInputType
  }

  export type GetMediaFileAggregateType<T extends MediaFileAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaFile[P]>
      : GetScalarType<T[P], AggregateMediaFile[P]>
  }




  export type MediaFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaFileWhereInput
    orderBy?: MediaFileOrderByWithAggregationInput | MediaFileOrderByWithAggregationInput[]
    by: MediaFileScalarFieldEnum[] | MediaFileScalarFieldEnum
    having?: MediaFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaFileCountAggregateInputType | true
    _avg?: MediaFileAvgAggregateInputType
    _sum?: MediaFileSumAggregateInputType
    _min?: MediaFileMinAggregateInputType
    _max?: MediaFileMaxAggregateInputType
  }

  export type MediaFileGroupByOutputType = {
    id: string
    fileName: string
    originalName: string
    sizeBytes: number
    type: string
    url: string
    uploadedAt: string
    dimensions: string | null
    folderId: string | null
    createdAt: Date
    _count: MediaFileCountAggregateOutputType | null
    _avg: MediaFileAvgAggregateOutputType | null
    _sum: MediaFileSumAggregateOutputType | null
    _min: MediaFileMinAggregateOutputType | null
    _max: MediaFileMaxAggregateOutputType | null
  }

  type GetMediaFileGroupByPayload<T extends MediaFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaFileGroupByOutputType[P]>
            : GetScalarType<T[P], MediaFileGroupByOutputType[P]>
        }
      >
    >


  export type MediaFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    originalName?: boolean
    sizeBytes?: boolean
    type?: boolean
    url?: boolean
    uploadedAt?: boolean
    dimensions?: boolean
    folderId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mediaFile"]>


  export type MediaFileSelectScalar = {
    id?: boolean
    fileName?: boolean
    originalName?: boolean
    sizeBytes?: boolean
    type?: boolean
    url?: boolean
    uploadedAt?: boolean
    dimensions?: boolean
    folderId?: boolean
    createdAt?: boolean
  }


  export type $MediaFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaFile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileName: string
      originalName: string
      sizeBytes: number
      type: string
      url: string
      uploadedAt: string
      dimensions: string | null
      folderId: string | null
      createdAt: Date
    }, ExtArgs["result"]["mediaFile"]>
    composites: {}
  }

  type MediaFileGetPayload<S extends boolean | null | undefined | MediaFileDefaultArgs> = $Result.GetResult<Prisma.$MediaFilePayload, S>

  type MediaFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MediaFileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MediaFileCountAggregateInputType | true
    }

  export interface MediaFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaFile'], meta: { name: 'MediaFile' } }
    /**
     * Find zero or one MediaFile that matches the filter.
     * @param {MediaFileFindUniqueArgs} args - Arguments to find a MediaFile
     * @example
     * // Get one MediaFile
     * const mediaFile = await prisma.mediaFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFileFindUniqueArgs>(args: SelectSubset<T, MediaFileFindUniqueArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MediaFile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MediaFileFindUniqueOrThrowArgs} args - Arguments to find a MediaFile
     * @example
     * // Get one MediaFile
     * const mediaFile = await prisma.mediaFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFileFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MediaFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileFindFirstArgs} args - Arguments to find a MediaFile
     * @example
     * // Get one MediaFile
     * const mediaFile = await prisma.mediaFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFileFindFirstArgs>(args?: SelectSubset<T, MediaFileFindFirstArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MediaFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileFindFirstOrThrowArgs} args - Arguments to find a MediaFile
     * @example
     * // Get one MediaFile
     * const mediaFile = await prisma.mediaFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFileFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MediaFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaFiles
     * const mediaFiles = await prisma.mediaFile.findMany()
     * 
     * // Get first 10 MediaFiles
     * const mediaFiles = await prisma.mediaFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaFileWithIdOnly = await prisma.mediaFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFileFindManyArgs>(args?: SelectSubset<T, MediaFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MediaFile.
     * @param {MediaFileCreateArgs} args - Arguments to create a MediaFile.
     * @example
     * // Create one MediaFile
     * const MediaFile = await prisma.mediaFile.create({
     *   data: {
     *     // ... data to create a MediaFile
     *   }
     * })
     * 
     */
    create<T extends MediaFileCreateArgs>(args: SelectSubset<T, MediaFileCreateArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MediaFiles.
     * @param {MediaFileCreateManyArgs} args - Arguments to create many MediaFiles.
     * @example
     * // Create many MediaFiles
     * const mediaFile = await prisma.mediaFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaFileCreateManyArgs>(args?: SelectSubset<T, MediaFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MediaFile.
     * @param {MediaFileDeleteArgs} args - Arguments to delete one MediaFile.
     * @example
     * // Delete one MediaFile
     * const MediaFile = await prisma.mediaFile.delete({
     *   where: {
     *     // ... filter to delete one MediaFile
     *   }
     * })
     * 
     */
    delete<T extends MediaFileDeleteArgs>(args: SelectSubset<T, MediaFileDeleteArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MediaFile.
     * @param {MediaFileUpdateArgs} args - Arguments to update one MediaFile.
     * @example
     * // Update one MediaFile
     * const mediaFile = await prisma.mediaFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaFileUpdateArgs>(args: SelectSubset<T, MediaFileUpdateArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MediaFiles.
     * @param {MediaFileDeleteManyArgs} args - Arguments to filter MediaFiles to delete.
     * @example
     * // Delete a few MediaFiles
     * const { count } = await prisma.mediaFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaFileDeleteManyArgs>(args?: SelectSubset<T, MediaFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaFiles
     * const mediaFile = await prisma.mediaFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaFileUpdateManyArgs>(args: SelectSubset<T, MediaFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MediaFile.
     * @param {MediaFileUpsertArgs} args - Arguments to update or create a MediaFile.
     * @example
     * // Update or create a MediaFile
     * const mediaFile = await prisma.mediaFile.upsert({
     *   create: {
     *     // ... data to create a MediaFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaFile we want to update
     *   }
     * })
     */
    upsert<T extends MediaFileUpsertArgs>(args: SelectSubset<T, MediaFileUpsertArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MediaFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileCountArgs} args - Arguments to filter MediaFiles to count.
     * @example
     * // Count the number of MediaFiles
     * const count = await prisma.mediaFile.count({
     *   where: {
     *     // ... the filter for the MediaFiles we want to count
     *   }
     * })
    **/
    count<T extends MediaFileCountArgs>(
      args?: Subset<T, MediaFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaFileAggregateArgs>(args: Subset<T, MediaFileAggregateArgs>): Prisma.PrismaPromise<GetMediaFileAggregateType<T>>

    /**
     * Group by MediaFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileGroupByArgs} args - Group by arguments.
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
      T extends MediaFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaFileGroupByArgs['orderBy'] }
        : { orderBy?: MediaFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaFile model
   */
  readonly fields: MediaFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MediaFile model
   */ 
  interface MediaFileFieldRefs {
    readonly id: FieldRef<"MediaFile", 'String'>
    readonly fileName: FieldRef<"MediaFile", 'String'>
    readonly originalName: FieldRef<"MediaFile", 'String'>
    readonly sizeBytes: FieldRef<"MediaFile", 'Int'>
    readonly type: FieldRef<"MediaFile", 'String'>
    readonly url: FieldRef<"MediaFile", 'String'>
    readonly uploadedAt: FieldRef<"MediaFile", 'String'>
    readonly dimensions: FieldRef<"MediaFile", 'String'>
    readonly folderId: FieldRef<"MediaFile", 'String'>
    readonly createdAt: FieldRef<"MediaFile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MediaFile findUnique
   */
  export type MediaFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Filter, which MediaFile to fetch.
     */
    where: MediaFileWhereUniqueInput
  }

  /**
   * MediaFile findUniqueOrThrow
   */
  export type MediaFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Filter, which MediaFile to fetch.
     */
    where: MediaFileWhereUniqueInput
  }

  /**
   * MediaFile findFirst
   */
  export type MediaFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Filter, which MediaFile to fetch.
     */
    where?: MediaFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFiles to fetch.
     */
    orderBy?: MediaFileOrderByWithRelationInput | MediaFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaFiles.
     */
    cursor?: MediaFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaFiles.
     */
    distinct?: MediaFileScalarFieldEnum | MediaFileScalarFieldEnum[]
  }

  /**
   * MediaFile findFirstOrThrow
   */
  export type MediaFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Filter, which MediaFile to fetch.
     */
    where?: MediaFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFiles to fetch.
     */
    orderBy?: MediaFileOrderByWithRelationInput | MediaFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaFiles.
     */
    cursor?: MediaFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaFiles.
     */
    distinct?: MediaFileScalarFieldEnum | MediaFileScalarFieldEnum[]
  }

  /**
   * MediaFile findMany
   */
  export type MediaFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Filter, which MediaFiles to fetch.
     */
    where?: MediaFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFiles to fetch.
     */
    orderBy?: MediaFileOrderByWithRelationInput | MediaFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaFiles.
     */
    cursor?: MediaFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFiles.
     */
    skip?: number
    distinct?: MediaFileScalarFieldEnum | MediaFileScalarFieldEnum[]
  }

  /**
   * MediaFile create
   */
  export type MediaFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * The data needed to create a MediaFile.
     */
    data: XOR<MediaFileCreateInput, MediaFileUncheckedCreateInput>
  }

  /**
   * MediaFile createMany
   */
  export type MediaFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaFiles.
     */
    data: MediaFileCreateManyInput | MediaFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaFile update
   */
  export type MediaFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * The data needed to update a MediaFile.
     */
    data: XOR<MediaFileUpdateInput, MediaFileUncheckedUpdateInput>
    /**
     * Choose, which MediaFile to update.
     */
    where: MediaFileWhereUniqueInput
  }

  /**
   * MediaFile updateMany
   */
  export type MediaFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaFiles.
     */
    data: XOR<MediaFileUpdateManyMutationInput, MediaFileUncheckedUpdateManyInput>
    /**
     * Filter which MediaFiles to update
     */
    where?: MediaFileWhereInput
  }

  /**
   * MediaFile upsert
   */
  export type MediaFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * The filter to search for the MediaFile to update in case it exists.
     */
    where: MediaFileWhereUniqueInput
    /**
     * In case the MediaFile found by the `where` argument doesn't exist, create a new MediaFile with this data.
     */
    create: XOR<MediaFileCreateInput, MediaFileUncheckedCreateInput>
    /**
     * In case the MediaFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaFileUpdateInput, MediaFileUncheckedUpdateInput>
  }

  /**
   * MediaFile delete
   */
  export type MediaFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Filter which MediaFile to delete.
     */
    where: MediaFileWhereUniqueInput
  }

  /**
   * MediaFile deleteMany
   */
  export type MediaFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaFiles to delete
     */
    where?: MediaFileWhereInput
  }

  /**
   * MediaFile without action
   */
  export type MediaFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
  }


  /**
   * Model MenuItem
   */

  export type AggregateMenuItem = {
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  export type MenuItemAvgAggregateOutputType = {
    order: number | null
  }

  export type MenuItemSumAggregateOutputType = {
    order: number | null
  }

  export type MenuItemMinAggregateOutputType = {
    id: string | null
    label: string | null
    url: string | null
    isExternal: boolean | null
    isVisible: boolean | null
    badge: string | null
    order: number | null
    parentId: string | null
    icon: string | null
    line1: string | null
    line2: string | null
    childrenData: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemMaxAggregateOutputType = {
    id: string | null
    label: string | null
    url: string | null
    isExternal: boolean | null
    isVisible: boolean | null
    badge: string | null
    order: number | null
    parentId: string | null
    icon: string | null
    line1: string | null
    line2: string | null
    childrenData: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemCountAggregateOutputType = {
    id: number
    label: number
    url: number
    isExternal: number
    isVisible: number
    badge: number
    order: number
    parentId: number
    icon: number
    line1: number
    line2: number
    childrenData: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuItemAvgAggregateInputType = {
    order?: true
  }

  export type MenuItemSumAggregateInputType = {
    order?: true
  }

  export type MenuItemMinAggregateInputType = {
    id?: true
    label?: true
    url?: true
    isExternal?: true
    isVisible?: true
    badge?: true
    order?: true
    parentId?: true
    icon?: true
    line1?: true
    line2?: true
    childrenData?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemMaxAggregateInputType = {
    id?: true
    label?: true
    url?: true
    isExternal?: true
    isVisible?: true
    badge?: true
    order?: true
    parentId?: true
    icon?: true
    line1?: true
    line2?: true
    childrenData?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemCountAggregateInputType = {
    id?: true
    label?: true
    url?: true
    isExternal?: true
    isVisible?: true
    badge?: true
    order?: true
    parentId?: true
    icon?: true
    line1?: true
    line2?: true
    childrenData?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItem to aggregate.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuItems
    **/
    _count?: true | MenuItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemMaxAggregateInputType
  }

  export type GetMenuItemAggregateType<T extends MenuItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItem[P]>
      : GetScalarType<T[P], AggregateMenuItem[P]>
  }




  export type MenuItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithAggregationInput | MenuItemOrderByWithAggregationInput[]
    by: MenuItemScalarFieldEnum[] | MenuItemScalarFieldEnum
    having?: MenuItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemCountAggregateInputType | true
    _avg?: MenuItemAvgAggregateInputType
    _sum?: MenuItemSumAggregateInputType
    _min?: MenuItemMinAggregateInputType
    _max?: MenuItemMaxAggregateInputType
  }

  export type MenuItemGroupByOutputType = {
    id: string
    label: string
    url: string
    isExternal: boolean
    isVisible: boolean
    badge: string | null
    order: number
    parentId: string | null
    icon: string | null
    line1: string | null
    line2: string | null
    childrenData: string | null
    createdAt: Date
    updatedAt: Date
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  type GetMenuItemGroupByPayload<T extends MenuItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    url?: boolean
    isExternal?: boolean
    isVisible?: boolean
    badge?: boolean
    order?: boolean
    parentId?: boolean
    icon?: boolean
    line1?: boolean
    line2?: boolean
    childrenData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["menuItem"]>


  export type MenuItemSelectScalar = {
    id?: boolean
    label?: boolean
    url?: boolean
    isExternal?: boolean
    isVisible?: boolean
    badge?: boolean
    order?: boolean
    parentId?: boolean
    icon?: boolean
    line1?: boolean
    line2?: boolean
    childrenData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $MenuItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      url: string
      isExternal: boolean
      isVisible: boolean
      badge: string | null
      order: number
      parentId: string | null
      icon: string | null
      line1: string | null
      line2: string | null
      childrenData: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menuItem"]>
    composites: {}
  }

  type MenuItemGetPayload<S extends boolean | null | undefined | MenuItemDefaultArgs> = $Result.GetResult<Prisma.$MenuItemPayload, S>

  type MenuItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MenuItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MenuItemCountAggregateInputType | true
    }

  export interface MenuItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItem'], meta: { name: 'MenuItem' } }
    /**
     * Find zero or one MenuItem that matches the filter.
     * @param {MenuItemFindUniqueArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemFindUniqueArgs>(args: SelectSubset<T, MenuItemFindUniqueArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MenuItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MenuItemFindUniqueOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MenuItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemFindFirstArgs>(args?: SelectSubset<T, MenuItemFindFirstArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MenuItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItems
     * const menuItems = await prisma.menuItem.findMany()
     * 
     * // Get first 10 MenuItems
     * const menuItems = await prisma.menuItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuItemFindManyArgs>(args?: SelectSubset<T, MenuItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MenuItem.
     * @param {MenuItemCreateArgs} args - Arguments to create a MenuItem.
     * @example
     * // Create one MenuItem
     * const MenuItem = await prisma.menuItem.create({
     *   data: {
     *     // ... data to create a MenuItem
     *   }
     * })
     * 
     */
    create<T extends MenuItemCreateArgs>(args: SelectSubset<T, MenuItemCreateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MenuItems.
     * @param {MenuItemCreateManyArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemCreateManyArgs>(args?: SelectSubset<T, MenuItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MenuItem.
     * @param {MenuItemDeleteArgs} args - Arguments to delete one MenuItem.
     * @example
     * // Delete one MenuItem
     * const MenuItem = await prisma.menuItem.delete({
     *   where: {
     *     // ... filter to delete one MenuItem
     *   }
     * })
     * 
     */
    delete<T extends MenuItemDeleteArgs>(args: SelectSubset<T, MenuItemDeleteArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MenuItem.
     * @param {MenuItemUpdateArgs} args - Arguments to update one MenuItem.
     * @example
     * // Update one MenuItem
     * const menuItem = await prisma.menuItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemUpdateArgs>(args: SelectSubset<T, MenuItemUpdateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MenuItems.
     * @param {MenuItemDeleteManyArgs} args - Arguments to filter MenuItems to delete.
     * @example
     * // Delete a few MenuItems
     * const { count } = await prisma.menuItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemDeleteManyArgs>(args?: SelectSubset<T, MenuItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemUpdateManyArgs>(args: SelectSubset<T, MenuItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MenuItem.
     * @param {MenuItemUpsertArgs} args - Arguments to update or create a MenuItem.
     * @example
     * // Update or create a MenuItem
     * const menuItem = await prisma.menuItem.upsert({
     *   create: {
     *     // ... data to create a MenuItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItem we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemUpsertArgs>(args: SelectSubset<T, MenuItemUpsertArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCountArgs} args - Arguments to filter MenuItems to count.
     * @example
     * // Count the number of MenuItems
     * const count = await prisma.menuItem.count({
     *   where: {
     *     // ... the filter for the MenuItems we want to count
     *   }
     * })
    **/
    count<T extends MenuItemCountArgs>(
      args?: Subset<T, MenuItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuItemAggregateArgs>(args: Subset<T, MenuItemAggregateArgs>): Prisma.PrismaPromise<GetMenuItemAggregateType<T>>

    /**
     * Group by MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemGroupByArgs} args - Group by arguments.
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
      T extends MenuItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItem model
   */
  readonly fields: MenuItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MenuItem model
   */ 
  interface MenuItemFieldRefs {
    readonly id: FieldRef<"MenuItem", 'String'>
    readonly label: FieldRef<"MenuItem", 'String'>
    readonly url: FieldRef<"MenuItem", 'String'>
    readonly isExternal: FieldRef<"MenuItem", 'Boolean'>
    readonly isVisible: FieldRef<"MenuItem", 'Boolean'>
    readonly badge: FieldRef<"MenuItem", 'String'>
    readonly order: FieldRef<"MenuItem", 'Int'>
    readonly parentId: FieldRef<"MenuItem", 'String'>
    readonly icon: FieldRef<"MenuItem", 'String'>
    readonly line1: FieldRef<"MenuItem", 'String'>
    readonly line2: FieldRef<"MenuItem", 'String'>
    readonly childrenData: FieldRef<"MenuItem", 'String'>
    readonly createdAt: FieldRef<"MenuItem", 'DateTime'>
    readonly updatedAt: FieldRef<"MenuItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MenuItem findUnique
   */
  export type MenuItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findUniqueOrThrow
   */
  export type MenuItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findFirst
   */
  export type MenuItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findFirstOrThrow
   */
  export type MenuItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findMany
   */
  export type MenuItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem create
   */
  export type MenuItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * The data needed to create a MenuItem.
     */
    data: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
  }

  /**
   * MenuItem createMany
   */
  export type MenuItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItem update
   */
  export type MenuItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * The data needed to update a MenuItem.
     */
    data: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
    /**
     * Choose, which MenuItem to update.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem updateMany
   */
  export type MenuItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
  }

  /**
   * MenuItem upsert
   */
  export type MenuItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * The filter to search for the MenuItem to update in case it exists.
     */
    where: MenuItemWhereUniqueInput
    /**
     * In case the MenuItem found by the `where` argument doesn't exist, create a new MenuItem with this data.
     */
    create: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
    /**
     * In case the MenuItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
  }

  /**
   * MenuItem delete
   */
  export type MenuItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Filter which MenuItem to delete.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem deleteMany
   */
  export type MenuItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItems to delete
     */
    where?: MenuItemWhereInput
  }

  /**
   * MenuItem without action
   */
  export type MenuItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
  }


  /**
   * Model Laboratory
   */

  export type AggregateLaboratory = {
    _count: LaboratoryCountAggregateOutputType | null
    _avg: LaboratoryAvgAggregateOutputType | null
    _sum: LaboratorySumAggregateOutputType | null
    _min: LaboratoryMinAggregateOutputType | null
    _max: LaboratoryMaxAggregateOutputType | null
  }

  export type LaboratoryAvgAggregateOutputType = {
    capacity: number | null
  }

  export type LaboratorySumAggregateOutputType = {
    capacity: number | null
  }

  export type LaboratoryMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    shortDesc: string | null
    headOfLab: string | null
    headPhoto: string | null
    labAssistants: string | null
    image: string | null
    location: string | null
    capacity: number | null
    specifications: string | null
    equipmentList: string | null
    softwareInstalled: string | null
    virtualTour360Url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LaboratoryMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    shortDesc: string | null
    headOfLab: string | null
    headPhoto: string | null
    labAssistants: string | null
    image: string | null
    location: string | null
    capacity: number | null
    specifications: string | null
    equipmentList: string | null
    softwareInstalled: string | null
    virtualTour360Url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LaboratoryCountAggregateOutputType = {
    id: number
    code: number
    name: number
    shortDesc: number
    headOfLab: number
    headPhoto: number
    labAssistants: number
    image: number
    location: number
    capacity: number
    specifications: number
    equipmentList: number
    softwareInstalled: number
    virtualTour360Url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LaboratoryAvgAggregateInputType = {
    capacity?: true
  }

  export type LaboratorySumAggregateInputType = {
    capacity?: true
  }

  export type LaboratoryMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    shortDesc?: true
    headOfLab?: true
    headPhoto?: true
    labAssistants?: true
    image?: true
    location?: true
    capacity?: true
    specifications?: true
    equipmentList?: true
    softwareInstalled?: true
    virtualTour360Url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LaboratoryMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    shortDesc?: true
    headOfLab?: true
    headPhoto?: true
    labAssistants?: true
    image?: true
    location?: true
    capacity?: true
    specifications?: true
    equipmentList?: true
    softwareInstalled?: true
    virtualTour360Url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LaboratoryCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    shortDesc?: true
    headOfLab?: true
    headPhoto?: true
    labAssistants?: true
    image?: true
    location?: true
    capacity?: true
    specifications?: true
    equipmentList?: true
    softwareInstalled?: true
    virtualTour360Url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LaboratoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Laboratory to aggregate.
     */
    where?: LaboratoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laboratories to fetch.
     */
    orderBy?: LaboratoryOrderByWithRelationInput | LaboratoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LaboratoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laboratories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laboratories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Laboratories
    **/
    _count?: true | LaboratoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LaboratoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LaboratorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaboratoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaboratoryMaxAggregateInputType
  }

  export type GetLaboratoryAggregateType<T extends LaboratoryAggregateArgs> = {
        [P in keyof T & keyof AggregateLaboratory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaboratory[P]>
      : GetScalarType<T[P], AggregateLaboratory[P]>
  }




  export type LaboratoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaboratoryWhereInput
    orderBy?: LaboratoryOrderByWithAggregationInput | LaboratoryOrderByWithAggregationInput[]
    by: LaboratoryScalarFieldEnum[] | LaboratoryScalarFieldEnum
    having?: LaboratoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaboratoryCountAggregateInputType | true
    _avg?: LaboratoryAvgAggregateInputType
    _sum?: LaboratorySumAggregateInputType
    _min?: LaboratoryMinAggregateInputType
    _max?: LaboratoryMaxAggregateInputType
  }

  export type LaboratoryGroupByOutputType = {
    id: string
    code: string
    name: string
    shortDesc: string
    headOfLab: string
    headPhoto: string
    labAssistants: string
    image: string
    location: string
    capacity: number
    specifications: string
    equipmentList: string
    softwareInstalled: string
    virtualTour360Url: string | null
    createdAt: Date
    updatedAt: Date
    _count: LaboratoryCountAggregateOutputType | null
    _avg: LaboratoryAvgAggregateOutputType | null
    _sum: LaboratorySumAggregateOutputType | null
    _min: LaboratoryMinAggregateOutputType | null
    _max: LaboratoryMaxAggregateOutputType | null
  }

  type GetLaboratoryGroupByPayload<T extends LaboratoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaboratoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaboratoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaboratoryGroupByOutputType[P]>
            : GetScalarType<T[P], LaboratoryGroupByOutputType[P]>
        }
      >
    >


  export type LaboratorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    shortDesc?: boolean
    headOfLab?: boolean
    headPhoto?: boolean
    labAssistants?: boolean
    image?: boolean
    location?: boolean
    capacity?: boolean
    specifications?: boolean
    equipmentList?: boolean
    softwareInstalled?: boolean
    virtualTour360Url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["laboratory"]>


  export type LaboratorySelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    shortDesc?: boolean
    headOfLab?: boolean
    headPhoto?: boolean
    labAssistants?: boolean
    image?: boolean
    location?: boolean
    capacity?: boolean
    specifications?: boolean
    equipmentList?: boolean
    softwareInstalled?: boolean
    virtualTour360Url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $LaboratoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Laboratory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      shortDesc: string
      headOfLab: string
      headPhoto: string
      labAssistants: string
      image: string
      location: string
      capacity: number
      specifications: string
      equipmentList: string
      softwareInstalled: string
      virtualTour360Url: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["laboratory"]>
    composites: {}
  }

  type LaboratoryGetPayload<S extends boolean | null | undefined | LaboratoryDefaultArgs> = $Result.GetResult<Prisma.$LaboratoryPayload, S>

  type LaboratoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LaboratoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LaboratoryCountAggregateInputType | true
    }

  export interface LaboratoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Laboratory'], meta: { name: 'Laboratory' } }
    /**
     * Find zero or one Laboratory that matches the filter.
     * @param {LaboratoryFindUniqueArgs} args - Arguments to find a Laboratory
     * @example
     * // Get one Laboratory
     * const laboratory = await prisma.laboratory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LaboratoryFindUniqueArgs>(args: SelectSubset<T, LaboratoryFindUniqueArgs<ExtArgs>>): Prisma__LaboratoryClient<$Result.GetResult<Prisma.$LaboratoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Laboratory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LaboratoryFindUniqueOrThrowArgs} args - Arguments to find a Laboratory
     * @example
     * // Get one Laboratory
     * const laboratory = await prisma.laboratory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LaboratoryFindUniqueOrThrowArgs>(args: SelectSubset<T, LaboratoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LaboratoryClient<$Result.GetResult<Prisma.$LaboratoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Laboratory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaboratoryFindFirstArgs} args - Arguments to find a Laboratory
     * @example
     * // Get one Laboratory
     * const laboratory = await prisma.laboratory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LaboratoryFindFirstArgs>(args?: SelectSubset<T, LaboratoryFindFirstArgs<ExtArgs>>): Prisma__LaboratoryClient<$Result.GetResult<Prisma.$LaboratoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Laboratory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaboratoryFindFirstOrThrowArgs} args - Arguments to find a Laboratory
     * @example
     * // Get one Laboratory
     * const laboratory = await prisma.laboratory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LaboratoryFindFirstOrThrowArgs>(args?: SelectSubset<T, LaboratoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LaboratoryClient<$Result.GetResult<Prisma.$LaboratoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Laboratories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaboratoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Laboratories
     * const laboratories = await prisma.laboratory.findMany()
     * 
     * // Get first 10 Laboratories
     * const laboratories = await prisma.laboratory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const laboratoryWithIdOnly = await prisma.laboratory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LaboratoryFindManyArgs>(args?: SelectSubset<T, LaboratoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaboratoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Laboratory.
     * @param {LaboratoryCreateArgs} args - Arguments to create a Laboratory.
     * @example
     * // Create one Laboratory
     * const Laboratory = await prisma.laboratory.create({
     *   data: {
     *     // ... data to create a Laboratory
     *   }
     * })
     * 
     */
    create<T extends LaboratoryCreateArgs>(args: SelectSubset<T, LaboratoryCreateArgs<ExtArgs>>): Prisma__LaboratoryClient<$Result.GetResult<Prisma.$LaboratoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Laboratories.
     * @param {LaboratoryCreateManyArgs} args - Arguments to create many Laboratories.
     * @example
     * // Create many Laboratories
     * const laboratory = await prisma.laboratory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LaboratoryCreateManyArgs>(args?: SelectSubset<T, LaboratoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Laboratory.
     * @param {LaboratoryDeleteArgs} args - Arguments to delete one Laboratory.
     * @example
     * // Delete one Laboratory
     * const Laboratory = await prisma.laboratory.delete({
     *   where: {
     *     // ... filter to delete one Laboratory
     *   }
     * })
     * 
     */
    delete<T extends LaboratoryDeleteArgs>(args: SelectSubset<T, LaboratoryDeleteArgs<ExtArgs>>): Prisma__LaboratoryClient<$Result.GetResult<Prisma.$LaboratoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Laboratory.
     * @param {LaboratoryUpdateArgs} args - Arguments to update one Laboratory.
     * @example
     * // Update one Laboratory
     * const laboratory = await prisma.laboratory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LaboratoryUpdateArgs>(args: SelectSubset<T, LaboratoryUpdateArgs<ExtArgs>>): Prisma__LaboratoryClient<$Result.GetResult<Prisma.$LaboratoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Laboratories.
     * @param {LaboratoryDeleteManyArgs} args - Arguments to filter Laboratories to delete.
     * @example
     * // Delete a few Laboratories
     * const { count } = await prisma.laboratory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LaboratoryDeleteManyArgs>(args?: SelectSubset<T, LaboratoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Laboratories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaboratoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Laboratories
     * const laboratory = await prisma.laboratory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LaboratoryUpdateManyArgs>(args: SelectSubset<T, LaboratoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Laboratory.
     * @param {LaboratoryUpsertArgs} args - Arguments to update or create a Laboratory.
     * @example
     * // Update or create a Laboratory
     * const laboratory = await prisma.laboratory.upsert({
     *   create: {
     *     // ... data to create a Laboratory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Laboratory we want to update
     *   }
     * })
     */
    upsert<T extends LaboratoryUpsertArgs>(args: SelectSubset<T, LaboratoryUpsertArgs<ExtArgs>>): Prisma__LaboratoryClient<$Result.GetResult<Prisma.$LaboratoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Laboratories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaboratoryCountArgs} args - Arguments to filter Laboratories to count.
     * @example
     * // Count the number of Laboratories
     * const count = await prisma.laboratory.count({
     *   where: {
     *     // ... the filter for the Laboratories we want to count
     *   }
     * })
    **/
    count<T extends LaboratoryCountArgs>(
      args?: Subset<T, LaboratoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaboratoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Laboratory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaboratoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LaboratoryAggregateArgs>(args: Subset<T, LaboratoryAggregateArgs>): Prisma.PrismaPromise<GetLaboratoryAggregateType<T>>

    /**
     * Group by Laboratory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaboratoryGroupByArgs} args - Group by arguments.
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
      T extends LaboratoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaboratoryGroupByArgs['orderBy'] }
        : { orderBy?: LaboratoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LaboratoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaboratoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Laboratory model
   */
  readonly fields: LaboratoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Laboratory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LaboratoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Laboratory model
   */ 
  interface LaboratoryFieldRefs {
    readonly id: FieldRef<"Laboratory", 'String'>
    readonly code: FieldRef<"Laboratory", 'String'>
    readonly name: FieldRef<"Laboratory", 'String'>
    readonly shortDesc: FieldRef<"Laboratory", 'String'>
    readonly headOfLab: FieldRef<"Laboratory", 'String'>
    readonly headPhoto: FieldRef<"Laboratory", 'String'>
    readonly labAssistants: FieldRef<"Laboratory", 'String'>
    readonly image: FieldRef<"Laboratory", 'String'>
    readonly location: FieldRef<"Laboratory", 'String'>
    readonly capacity: FieldRef<"Laboratory", 'Int'>
    readonly specifications: FieldRef<"Laboratory", 'String'>
    readonly equipmentList: FieldRef<"Laboratory", 'String'>
    readonly softwareInstalled: FieldRef<"Laboratory", 'String'>
    readonly virtualTour360Url: FieldRef<"Laboratory", 'String'>
    readonly createdAt: FieldRef<"Laboratory", 'DateTime'>
    readonly updatedAt: FieldRef<"Laboratory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Laboratory findUnique
   */
  export type LaboratoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratory
     */
    select?: LaboratorySelect<ExtArgs> | null
    /**
     * Filter, which Laboratory to fetch.
     */
    where: LaboratoryWhereUniqueInput
  }

  /**
   * Laboratory findUniqueOrThrow
   */
  export type LaboratoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratory
     */
    select?: LaboratorySelect<ExtArgs> | null
    /**
     * Filter, which Laboratory to fetch.
     */
    where: LaboratoryWhereUniqueInput
  }

  /**
   * Laboratory findFirst
   */
  export type LaboratoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratory
     */
    select?: LaboratorySelect<ExtArgs> | null
    /**
     * Filter, which Laboratory to fetch.
     */
    where?: LaboratoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laboratories to fetch.
     */
    orderBy?: LaboratoryOrderByWithRelationInput | LaboratoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Laboratories.
     */
    cursor?: LaboratoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laboratories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laboratories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Laboratories.
     */
    distinct?: LaboratoryScalarFieldEnum | LaboratoryScalarFieldEnum[]
  }

  /**
   * Laboratory findFirstOrThrow
   */
  export type LaboratoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratory
     */
    select?: LaboratorySelect<ExtArgs> | null
    /**
     * Filter, which Laboratory to fetch.
     */
    where?: LaboratoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laboratories to fetch.
     */
    orderBy?: LaboratoryOrderByWithRelationInput | LaboratoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Laboratories.
     */
    cursor?: LaboratoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laboratories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laboratories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Laboratories.
     */
    distinct?: LaboratoryScalarFieldEnum | LaboratoryScalarFieldEnum[]
  }

  /**
   * Laboratory findMany
   */
  export type LaboratoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratory
     */
    select?: LaboratorySelect<ExtArgs> | null
    /**
     * Filter, which Laboratories to fetch.
     */
    where?: LaboratoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laboratories to fetch.
     */
    orderBy?: LaboratoryOrderByWithRelationInput | LaboratoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Laboratories.
     */
    cursor?: LaboratoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laboratories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laboratories.
     */
    skip?: number
    distinct?: LaboratoryScalarFieldEnum | LaboratoryScalarFieldEnum[]
  }

  /**
   * Laboratory create
   */
  export type LaboratoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratory
     */
    select?: LaboratorySelect<ExtArgs> | null
    /**
     * The data needed to create a Laboratory.
     */
    data: XOR<LaboratoryCreateInput, LaboratoryUncheckedCreateInput>
  }

  /**
   * Laboratory createMany
   */
  export type LaboratoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Laboratories.
     */
    data: LaboratoryCreateManyInput | LaboratoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Laboratory update
   */
  export type LaboratoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratory
     */
    select?: LaboratorySelect<ExtArgs> | null
    /**
     * The data needed to update a Laboratory.
     */
    data: XOR<LaboratoryUpdateInput, LaboratoryUncheckedUpdateInput>
    /**
     * Choose, which Laboratory to update.
     */
    where: LaboratoryWhereUniqueInput
  }

  /**
   * Laboratory updateMany
   */
  export type LaboratoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Laboratories.
     */
    data: XOR<LaboratoryUpdateManyMutationInput, LaboratoryUncheckedUpdateManyInput>
    /**
     * Filter which Laboratories to update
     */
    where?: LaboratoryWhereInput
  }

  /**
   * Laboratory upsert
   */
  export type LaboratoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratory
     */
    select?: LaboratorySelect<ExtArgs> | null
    /**
     * The filter to search for the Laboratory to update in case it exists.
     */
    where: LaboratoryWhereUniqueInput
    /**
     * In case the Laboratory found by the `where` argument doesn't exist, create a new Laboratory with this data.
     */
    create: XOR<LaboratoryCreateInput, LaboratoryUncheckedCreateInput>
    /**
     * In case the Laboratory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LaboratoryUpdateInput, LaboratoryUncheckedUpdateInput>
  }

  /**
   * Laboratory delete
   */
  export type LaboratoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratory
     */
    select?: LaboratorySelect<ExtArgs> | null
    /**
     * Filter which Laboratory to delete.
     */
    where: LaboratoryWhereUniqueInput
  }

  /**
   * Laboratory deleteMany
   */
  export type LaboratoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Laboratories to delete
     */
    where?: LaboratoryWhereInput
  }

  /**
   * Laboratory without action
   */
  export type LaboratoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laboratory
     */
    select?: LaboratorySelect<ExtArgs> | null
  }


  /**
   * Model ResearchGroup
   */

  export type AggregateResearchGroup = {
    _count: ResearchGroupCountAggregateOutputType | null
    _avg: ResearchGroupAvgAggregateOutputType | null
    _sum: ResearchGroupSumAggregateOutputType | null
    _min: ResearchGroupMinAggregateOutputType | null
    _max: ResearchGroupMaxAggregateOutputType | null
  }

  export type ResearchGroupAvgAggregateOutputType = {
    membersCount: number | null
  }

  export type ResearchGroupSumAggregateOutputType = {
    membersCount: number | null
  }

  export type ResearchGroupMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    leadLecturer: string | null
    membersCount: number | null
    description: string | null
    topics: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResearchGroupMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    leadLecturer: string | null
    membersCount: number | null
    description: string | null
    topics: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResearchGroupCountAggregateOutputType = {
    id: number
    code: number
    name: number
    leadLecturer: number
    membersCount: number
    description: number
    topics: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResearchGroupAvgAggregateInputType = {
    membersCount?: true
  }

  export type ResearchGroupSumAggregateInputType = {
    membersCount?: true
  }

  export type ResearchGroupMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    leadLecturer?: true
    membersCount?: true
    description?: true
    topics?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResearchGroupMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    leadLecturer?: true
    membersCount?: true
    description?: true
    topics?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResearchGroupCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    leadLecturer?: true
    membersCount?: true
    description?: true
    topics?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResearchGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResearchGroup to aggregate.
     */
    where?: ResearchGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchGroups to fetch.
     */
    orderBy?: ResearchGroupOrderByWithRelationInput | ResearchGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResearchGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResearchGroups
    **/
    _count?: true | ResearchGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResearchGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResearchGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResearchGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResearchGroupMaxAggregateInputType
  }

  export type GetResearchGroupAggregateType<T extends ResearchGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateResearchGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResearchGroup[P]>
      : GetScalarType<T[P], AggregateResearchGroup[P]>
  }




  export type ResearchGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResearchGroupWhereInput
    orderBy?: ResearchGroupOrderByWithAggregationInput | ResearchGroupOrderByWithAggregationInput[]
    by: ResearchGroupScalarFieldEnum[] | ResearchGroupScalarFieldEnum
    having?: ResearchGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResearchGroupCountAggregateInputType | true
    _avg?: ResearchGroupAvgAggregateInputType
    _sum?: ResearchGroupSumAggregateInputType
    _min?: ResearchGroupMinAggregateInputType
    _max?: ResearchGroupMaxAggregateInputType
  }

  export type ResearchGroupGroupByOutputType = {
    id: string
    code: string
    name: string
    leadLecturer: string
    membersCount: number
    description: string
    topics: string
    createdAt: Date
    updatedAt: Date
    _count: ResearchGroupCountAggregateOutputType | null
    _avg: ResearchGroupAvgAggregateOutputType | null
    _sum: ResearchGroupSumAggregateOutputType | null
    _min: ResearchGroupMinAggregateOutputType | null
    _max: ResearchGroupMaxAggregateOutputType | null
  }

  type GetResearchGroupGroupByPayload<T extends ResearchGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResearchGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResearchGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResearchGroupGroupByOutputType[P]>
            : GetScalarType<T[P], ResearchGroupGroupByOutputType[P]>
        }
      >
    >


  export type ResearchGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    leadLecturer?: boolean
    membersCount?: boolean
    description?: boolean
    topics?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["researchGroup"]>


  export type ResearchGroupSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    leadLecturer?: boolean
    membersCount?: boolean
    description?: boolean
    topics?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ResearchGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResearchGroup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      leadLecturer: string
      membersCount: number
      description: string
      topics: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["researchGroup"]>
    composites: {}
  }

  type ResearchGroupGetPayload<S extends boolean | null | undefined | ResearchGroupDefaultArgs> = $Result.GetResult<Prisma.$ResearchGroupPayload, S>

  type ResearchGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResearchGroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResearchGroupCountAggregateInputType | true
    }

  export interface ResearchGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResearchGroup'], meta: { name: 'ResearchGroup' } }
    /**
     * Find zero or one ResearchGroup that matches the filter.
     * @param {ResearchGroupFindUniqueArgs} args - Arguments to find a ResearchGroup
     * @example
     * // Get one ResearchGroup
     * const researchGroup = await prisma.researchGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResearchGroupFindUniqueArgs>(args: SelectSubset<T, ResearchGroupFindUniqueArgs<ExtArgs>>): Prisma__ResearchGroupClient<$Result.GetResult<Prisma.$ResearchGroupPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ResearchGroup that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResearchGroupFindUniqueOrThrowArgs} args - Arguments to find a ResearchGroup
     * @example
     * // Get one ResearchGroup
     * const researchGroup = await prisma.researchGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResearchGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, ResearchGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResearchGroupClient<$Result.GetResult<Prisma.$ResearchGroupPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ResearchGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchGroupFindFirstArgs} args - Arguments to find a ResearchGroup
     * @example
     * // Get one ResearchGroup
     * const researchGroup = await prisma.researchGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResearchGroupFindFirstArgs>(args?: SelectSubset<T, ResearchGroupFindFirstArgs<ExtArgs>>): Prisma__ResearchGroupClient<$Result.GetResult<Prisma.$ResearchGroupPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ResearchGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchGroupFindFirstOrThrowArgs} args - Arguments to find a ResearchGroup
     * @example
     * // Get one ResearchGroup
     * const researchGroup = await prisma.researchGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResearchGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, ResearchGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResearchGroupClient<$Result.GetResult<Prisma.$ResearchGroupPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ResearchGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResearchGroups
     * const researchGroups = await prisma.researchGroup.findMany()
     * 
     * // Get first 10 ResearchGroups
     * const researchGroups = await prisma.researchGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const researchGroupWithIdOnly = await prisma.researchGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResearchGroupFindManyArgs>(args?: SelectSubset<T, ResearchGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResearchGroupPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ResearchGroup.
     * @param {ResearchGroupCreateArgs} args - Arguments to create a ResearchGroup.
     * @example
     * // Create one ResearchGroup
     * const ResearchGroup = await prisma.researchGroup.create({
     *   data: {
     *     // ... data to create a ResearchGroup
     *   }
     * })
     * 
     */
    create<T extends ResearchGroupCreateArgs>(args: SelectSubset<T, ResearchGroupCreateArgs<ExtArgs>>): Prisma__ResearchGroupClient<$Result.GetResult<Prisma.$ResearchGroupPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ResearchGroups.
     * @param {ResearchGroupCreateManyArgs} args - Arguments to create many ResearchGroups.
     * @example
     * // Create many ResearchGroups
     * const researchGroup = await prisma.researchGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResearchGroupCreateManyArgs>(args?: SelectSubset<T, ResearchGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ResearchGroup.
     * @param {ResearchGroupDeleteArgs} args - Arguments to delete one ResearchGroup.
     * @example
     * // Delete one ResearchGroup
     * const ResearchGroup = await prisma.researchGroup.delete({
     *   where: {
     *     // ... filter to delete one ResearchGroup
     *   }
     * })
     * 
     */
    delete<T extends ResearchGroupDeleteArgs>(args: SelectSubset<T, ResearchGroupDeleteArgs<ExtArgs>>): Prisma__ResearchGroupClient<$Result.GetResult<Prisma.$ResearchGroupPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ResearchGroup.
     * @param {ResearchGroupUpdateArgs} args - Arguments to update one ResearchGroup.
     * @example
     * // Update one ResearchGroup
     * const researchGroup = await prisma.researchGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResearchGroupUpdateArgs>(args: SelectSubset<T, ResearchGroupUpdateArgs<ExtArgs>>): Prisma__ResearchGroupClient<$Result.GetResult<Prisma.$ResearchGroupPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ResearchGroups.
     * @param {ResearchGroupDeleteManyArgs} args - Arguments to filter ResearchGroups to delete.
     * @example
     * // Delete a few ResearchGroups
     * const { count } = await prisma.researchGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResearchGroupDeleteManyArgs>(args?: SelectSubset<T, ResearchGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResearchGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResearchGroups
     * const researchGroup = await prisma.researchGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResearchGroupUpdateManyArgs>(args: SelectSubset<T, ResearchGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResearchGroup.
     * @param {ResearchGroupUpsertArgs} args - Arguments to update or create a ResearchGroup.
     * @example
     * // Update or create a ResearchGroup
     * const researchGroup = await prisma.researchGroup.upsert({
     *   create: {
     *     // ... data to create a ResearchGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResearchGroup we want to update
     *   }
     * })
     */
    upsert<T extends ResearchGroupUpsertArgs>(args: SelectSubset<T, ResearchGroupUpsertArgs<ExtArgs>>): Prisma__ResearchGroupClient<$Result.GetResult<Prisma.$ResearchGroupPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ResearchGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchGroupCountArgs} args - Arguments to filter ResearchGroups to count.
     * @example
     * // Count the number of ResearchGroups
     * const count = await prisma.researchGroup.count({
     *   where: {
     *     // ... the filter for the ResearchGroups we want to count
     *   }
     * })
    **/
    count<T extends ResearchGroupCountArgs>(
      args?: Subset<T, ResearchGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResearchGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResearchGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResearchGroupAggregateArgs>(args: Subset<T, ResearchGroupAggregateArgs>): Prisma.PrismaPromise<GetResearchGroupAggregateType<T>>

    /**
     * Group by ResearchGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResearchGroupGroupByArgs} args - Group by arguments.
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
      T extends ResearchGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResearchGroupGroupByArgs['orderBy'] }
        : { orderBy?: ResearchGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResearchGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResearchGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResearchGroup model
   */
  readonly fields: ResearchGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResearchGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResearchGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ResearchGroup model
   */ 
  interface ResearchGroupFieldRefs {
    readonly id: FieldRef<"ResearchGroup", 'String'>
    readonly code: FieldRef<"ResearchGroup", 'String'>
    readonly name: FieldRef<"ResearchGroup", 'String'>
    readonly leadLecturer: FieldRef<"ResearchGroup", 'String'>
    readonly membersCount: FieldRef<"ResearchGroup", 'Int'>
    readonly description: FieldRef<"ResearchGroup", 'String'>
    readonly topics: FieldRef<"ResearchGroup", 'String'>
    readonly createdAt: FieldRef<"ResearchGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"ResearchGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResearchGroup findUnique
   */
  export type ResearchGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchGroup
     */
    select?: ResearchGroupSelect<ExtArgs> | null
    /**
     * Filter, which ResearchGroup to fetch.
     */
    where: ResearchGroupWhereUniqueInput
  }

  /**
   * ResearchGroup findUniqueOrThrow
   */
  export type ResearchGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchGroup
     */
    select?: ResearchGroupSelect<ExtArgs> | null
    /**
     * Filter, which ResearchGroup to fetch.
     */
    where: ResearchGroupWhereUniqueInput
  }

  /**
   * ResearchGroup findFirst
   */
  export type ResearchGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchGroup
     */
    select?: ResearchGroupSelect<ExtArgs> | null
    /**
     * Filter, which ResearchGroup to fetch.
     */
    where?: ResearchGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchGroups to fetch.
     */
    orderBy?: ResearchGroupOrderByWithRelationInput | ResearchGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResearchGroups.
     */
    cursor?: ResearchGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearchGroups.
     */
    distinct?: ResearchGroupScalarFieldEnum | ResearchGroupScalarFieldEnum[]
  }

  /**
   * ResearchGroup findFirstOrThrow
   */
  export type ResearchGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchGroup
     */
    select?: ResearchGroupSelect<ExtArgs> | null
    /**
     * Filter, which ResearchGroup to fetch.
     */
    where?: ResearchGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchGroups to fetch.
     */
    orderBy?: ResearchGroupOrderByWithRelationInput | ResearchGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResearchGroups.
     */
    cursor?: ResearchGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResearchGroups.
     */
    distinct?: ResearchGroupScalarFieldEnum | ResearchGroupScalarFieldEnum[]
  }

  /**
   * ResearchGroup findMany
   */
  export type ResearchGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchGroup
     */
    select?: ResearchGroupSelect<ExtArgs> | null
    /**
     * Filter, which ResearchGroups to fetch.
     */
    where?: ResearchGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResearchGroups to fetch.
     */
    orderBy?: ResearchGroupOrderByWithRelationInput | ResearchGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResearchGroups.
     */
    cursor?: ResearchGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResearchGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResearchGroups.
     */
    skip?: number
    distinct?: ResearchGroupScalarFieldEnum | ResearchGroupScalarFieldEnum[]
  }

  /**
   * ResearchGroup create
   */
  export type ResearchGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchGroup
     */
    select?: ResearchGroupSelect<ExtArgs> | null
    /**
     * The data needed to create a ResearchGroup.
     */
    data: XOR<ResearchGroupCreateInput, ResearchGroupUncheckedCreateInput>
  }

  /**
   * ResearchGroup createMany
   */
  export type ResearchGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResearchGroups.
     */
    data: ResearchGroupCreateManyInput | ResearchGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResearchGroup update
   */
  export type ResearchGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchGroup
     */
    select?: ResearchGroupSelect<ExtArgs> | null
    /**
     * The data needed to update a ResearchGroup.
     */
    data: XOR<ResearchGroupUpdateInput, ResearchGroupUncheckedUpdateInput>
    /**
     * Choose, which ResearchGroup to update.
     */
    where: ResearchGroupWhereUniqueInput
  }

  /**
   * ResearchGroup updateMany
   */
  export type ResearchGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResearchGroups.
     */
    data: XOR<ResearchGroupUpdateManyMutationInput, ResearchGroupUncheckedUpdateManyInput>
    /**
     * Filter which ResearchGroups to update
     */
    where?: ResearchGroupWhereInput
  }

  /**
   * ResearchGroup upsert
   */
  export type ResearchGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchGroup
     */
    select?: ResearchGroupSelect<ExtArgs> | null
    /**
     * The filter to search for the ResearchGroup to update in case it exists.
     */
    where: ResearchGroupWhereUniqueInput
    /**
     * In case the ResearchGroup found by the `where` argument doesn't exist, create a new ResearchGroup with this data.
     */
    create: XOR<ResearchGroupCreateInput, ResearchGroupUncheckedCreateInput>
    /**
     * In case the ResearchGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResearchGroupUpdateInput, ResearchGroupUncheckedUpdateInput>
  }

  /**
   * ResearchGroup delete
   */
  export type ResearchGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchGroup
     */
    select?: ResearchGroupSelect<ExtArgs> | null
    /**
     * Filter which ResearchGroup to delete.
     */
    where: ResearchGroupWhereUniqueInput
  }

  /**
   * ResearchGroup deleteMany
   */
  export type ResearchGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResearchGroups to delete
     */
    where?: ResearchGroupWhereInput
  }

  /**
   * ResearchGroup without action
   */
  export type ResearchGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResearchGroup
     */
    select?: ResearchGroupSelect<ExtArgs> | null
  }


  /**
   * Model Publication
   */

  export type AggregatePublication = {
    _count: PublicationCountAggregateOutputType | null
    _avg: PublicationAvgAggregateOutputType | null
    _sum: PublicationSumAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  export type PublicationAvgAggregateOutputType = {
    year: number | null
  }

  export type PublicationSumAggregateOutputType = {
    year: number | null
  }

  export type PublicationMinAggregateOutputType = {
    id: string | null
    title: string | null
    authors: string | null
    year: number | null
    publisher: string | null
    type: string | null
    pdfUrl: string | null
    doi: string | null
    specialization: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    authors: string | null
    year: number | null
    publisher: string | null
    type: string | null
    pdfUrl: string | null
    doi: string | null
    specialization: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicationCountAggregateOutputType = {
    id: number
    title: number
    authors: number
    year: number
    publisher: number
    type: number
    pdfUrl: number
    doi: number
    specialization: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PublicationAvgAggregateInputType = {
    year?: true
  }

  export type PublicationSumAggregateInputType = {
    year?: true
  }

  export type PublicationMinAggregateInputType = {
    id?: true
    title?: true
    authors?: true
    year?: true
    publisher?: true
    type?: true
    pdfUrl?: true
    doi?: true
    specialization?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicationMaxAggregateInputType = {
    id?: true
    title?: true
    authors?: true
    year?: true
    publisher?: true
    type?: true
    pdfUrl?: true
    doi?: true
    specialization?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicationCountAggregateInputType = {
    id?: true
    title?: true
    authors?: true
    year?: true
    publisher?: true
    type?: true
    pdfUrl?: true
    doi?: true
    specialization?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PublicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publication to aggregate.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publications
    **/
    _count?: true | PublicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicationMaxAggregateInputType
  }

  export type GetPublicationAggregateType<T extends PublicationAggregateArgs> = {
        [P in keyof T & keyof AggregatePublication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublication[P]>
      : GetScalarType<T[P], AggregatePublication[P]>
  }




  export type PublicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicationWhereInput
    orderBy?: PublicationOrderByWithAggregationInput | PublicationOrderByWithAggregationInput[]
    by: PublicationScalarFieldEnum[] | PublicationScalarFieldEnum
    having?: PublicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicationCountAggregateInputType | true
    _avg?: PublicationAvgAggregateInputType
    _sum?: PublicationSumAggregateInputType
    _min?: PublicationMinAggregateInputType
    _max?: PublicationMaxAggregateInputType
  }

  export type PublicationGroupByOutputType = {
    id: string
    title: string
    authors: string
    year: number
    publisher: string
    type: string
    pdfUrl: string | null
    doi: string | null
    specialization: string | null
    createdAt: Date
    updatedAt: Date
    _count: PublicationCountAggregateOutputType | null
    _avg: PublicationAvgAggregateOutputType | null
    _sum: PublicationSumAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  type GetPublicationGroupByPayload<T extends PublicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicationGroupByOutputType[P]>
            : GetScalarType<T[P], PublicationGroupByOutputType[P]>
        }
      >
    >


  export type PublicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authors?: boolean
    year?: boolean
    publisher?: boolean
    type?: boolean
    pdfUrl?: boolean
    doi?: boolean
    specialization?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["publication"]>


  export type PublicationSelectScalar = {
    id?: boolean
    title?: boolean
    authors?: boolean
    year?: boolean
    publisher?: boolean
    type?: boolean
    pdfUrl?: boolean
    doi?: boolean
    specialization?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $PublicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Publication"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      authors: string
      year: number
      publisher: string
      type: string
      pdfUrl: string | null
      doi: string | null
      specialization: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["publication"]>
    composites: {}
  }

  type PublicationGetPayload<S extends boolean | null | undefined | PublicationDefaultArgs> = $Result.GetResult<Prisma.$PublicationPayload, S>

  type PublicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PublicationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PublicationCountAggregateInputType | true
    }

  export interface PublicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publication'], meta: { name: 'Publication' } }
    /**
     * Find zero or one Publication that matches the filter.
     * @param {PublicationFindUniqueArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicationFindUniqueArgs>(args: SelectSubset<T, PublicationFindUniqueArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Publication that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PublicationFindUniqueOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicationFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Publication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindFirstArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicationFindFirstArgs>(args?: SelectSubset<T, PublicationFindFirstArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Publication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindFirstOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicationFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Publications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publications
     * const publications = await prisma.publication.findMany()
     * 
     * // Get first 10 Publications
     * const publications = await prisma.publication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicationWithIdOnly = await prisma.publication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicationFindManyArgs>(args?: SelectSubset<T, PublicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Publication.
     * @param {PublicationCreateArgs} args - Arguments to create a Publication.
     * @example
     * // Create one Publication
     * const Publication = await prisma.publication.create({
     *   data: {
     *     // ... data to create a Publication
     *   }
     * })
     * 
     */
    create<T extends PublicationCreateArgs>(args: SelectSubset<T, PublicationCreateArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Publications.
     * @param {PublicationCreateManyArgs} args - Arguments to create many Publications.
     * @example
     * // Create many Publications
     * const publication = await prisma.publication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicationCreateManyArgs>(args?: SelectSubset<T, PublicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Publication.
     * @param {PublicationDeleteArgs} args - Arguments to delete one Publication.
     * @example
     * // Delete one Publication
     * const Publication = await prisma.publication.delete({
     *   where: {
     *     // ... filter to delete one Publication
     *   }
     * })
     * 
     */
    delete<T extends PublicationDeleteArgs>(args: SelectSubset<T, PublicationDeleteArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Publication.
     * @param {PublicationUpdateArgs} args - Arguments to update one Publication.
     * @example
     * // Update one Publication
     * const publication = await prisma.publication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicationUpdateArgs>(args: SelectSubset<T, PublicationUpdateArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Publications.
     * @param {PublicationDeleteManyArgs} args - Arguments to filter Publications to delete.
     * @example
     * // Delete a few Publications
     * const { count } = await prisma.publication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicationDeleteManyArgs>(args?: SelectSubset<T, PublicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publications
     * const publication = await prisma.publication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicationUpdateManyArgs>(args: SelectSubset<T, PublicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Publication.
     * @param {PublicationUpsertArgs} args - Arguments to update or create a Publication.
     * @example
     * // Update or create a Publication
     * const publication = await prisma.publication.upsert({
     *   create: {
     *     // ... data to create a Publication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publication we want to update
     *   }
     * })
     */
    upsert<T extends PublicationUpsertArgs>(args: SelectSubset<T, PublicationUpsertArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationCountArgs} args - Arguments to filter Publications to count.
     * @example
     * // Count the number of Publications
     * const count = await prisma.publication.count({
     *   where: {
     *     // ... the filter for the Publications we want to count
     *   }
     * })
    **/
    count<T extends PublicationCountArgs>(
      args?: Subset<T, PublicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublicationAggregateArgs>(args: Subset<T, PublicationAggregateArgs>): Prisma.PrismaPromise<GetPublicationAggregateType<T>>

    /**
     * Group by Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationGroupByArgs} args - Group by arguments.
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
      T extends PublicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicationGroupByArgs['orderBy'] }
        : { orderBy?: PublicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PublicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publication model
   */
  readonly fields: PublicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Publication model
   */ 
  interface PublicationFieldRefs {
    readonly id: FieldRef<"Publication", 'String'>
    readonly title: FieldRef<"Publication", 'String'>
    readonly authors: FieldRef<"Publication", 'String'>
    readonly year: FieldRef<"Publication", 'Int'>
    readonly publisher: FieldRef<"Publication", 'String'>
    readonly type: FieldRef<"Publication", 'String'>
    readonly pdfUrl: FieldRef<"Publication", 'String'>
    readonly doi: FieldRef<"Publication", 'String'>
    readonly specialization: FieldRef<"Publication", 'String'>
    readonly createdAt: FieldRef<"Publication", 'DateTime'>
    readonly updatedAt: FieldRef<"Publication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Publication findUnique
   */
  export type PublicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication findUniqueOrThrow
   */
  export type PublicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication findFirst
   */
  export type PublicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication findFirstOrThrow
   */
  export type PublicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication findMany
   */
  export type PublicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Filter, which Publications to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication create
   */
  export type PublicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * The data needed to create a Publication.
     */
    data: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>
  }

  /**
   * Publication createMany
   */
  export type PublicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publications.
     */
    data: PublicationCreateManyInput | PublicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publication update
   */
  export type PublicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * The data needed to update a Publication.
     */
    data: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>
    /**
     * Choose, which Publication to update.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication updateMany
   */
  export type PublicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publications.
     */
    data: XOR<PublicationUpdateManyMutationInput, PublicationUncheckedUpdateManyInput>
    /**
     * Filter which Publications to update
     */
    where?: PublicationWhereInput
  }

  /**
   * Publication upsert
   */
  export type PublicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * The filter to search for the Publication to update in case it exists.
     */
    where: PublicationWhereUniqueInput
    /**
     * In case the Publication found by the `where` argument doesn't exist, create a new Publication with this data.
     */
    create: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>
    /**
     * In case the Publication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>
  }

  /**
   * Publication delete
   */
  export type PublicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Filter which Publication to delete.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication deleteMany
   */
  export type PublicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publications to delete
     */
    where?: PublicationWhereInput
  }

  /**
   * Publication without action
   */
  export type PublicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
  }


  /**
   * Model InnovationProduct
   */

  export type AggregateInnovationProduct = {
    _count: InnovationProductCountAggregateOutputType | null
    _avg: InnovationProductAvgAggregateOutputType | null
    _sum: InnovationProductSumAggregateOutputType | null
    _min: InnovationProductMinAggregateOutputType | null
    _max: InnovationProductMaxAggregateOutputType | null
  }

  export type InnovationProductAvgAggregateOutputType = {
    year: number | null
  }

  export type InnovationProductSumAggregateOutputType = {
    year: number | null
  }

  export type InnovationProductMinAggregateOutputType = {
    id: string | null
    title: string | null
    developer: string | null
    category: string | null
    year: number | null
    thumbnail: string | null
    description: string | null
    techStack: string | null
    demoUrl: string | null
    githubUrl: string | null
    award: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InnovationProductMaxAggregateOutputType = {
    id: string | null
    title: string | null
    developer: string | null
    category: string | null
    year: number | null
    thumbnail: string | null
    description: string | null
    techStack: string | null
    demoUrl: string | null
    githubUrl: string | null
    award: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InnovationProductCountAggregateOutputType = {
    id: number
    title: number
    developer: number
    category: number
    year: number
    thumbnail: number
    description: number
    techStack: number
    demoUrl: number
    githubUrl: number
    award: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InnovationProductAvgAggregateInputType = {
    year?: true
  }

  export type InnovationProductSumAggregateInputType = {
    year?: true
  }

  export type InnovationProductMinAggregateInputType = {
    id?: true
    title?: true
    developer?: true
    category?: true
    year?: true
    thumbnail?: true
    description?: true
    techStack?: true
    demoUrl?: true
    githubUrl?: true
    award?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InnovationProductMaxAggregateInputType = {
    id?: true
    title?: true
    developer?: true
    category?: true
    year?: true
    thumbnail?: true
    description?: true
    techStack?: true
    demoUrl?: true
    githubUrl?: true
    award?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InnovationProductCountAggregateInputType = {
    id?: true
    title?: true
    developer?: true
    category?: true
    year?: true
    thumbnail?: true
    description?: true
    techStack?: true
    demoUrl?: true
    githubUrl?: true
    award?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InnovationProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InnovationProduct to aggregate.
     */
    where?: InnovationProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InnovationProducts to fetch.
     */
    orderBy?: InnovationProductOrderByWithRelationInput | InnovationProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InnovationProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InnovationProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InnovationProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InnovationProducts
    **/
    _count?: true | InnovationProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InnovationProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InnovationProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InnovationProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InnovationProductMaxAggregateInputType
  }

  export type GetInnovationProductAggregateType<T extends InnovationProductAggregateArgs> = {
        [P in keyof T & keyof AggregateInnovationProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInnovationProduct[P]>
      : GetScalarType<T[P], AggregateInnovationProduct[P]>
  }




  export type InnovationProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InnovationProductWhereInput
    orderBy?: InnovationProductOrderByWithAggregationInput | InnovationProductOrderByWithAggregationInput[]
    by: InnovationProductScalarFieldEnum[] | InnovationProductScalarFieldEnum
    having?: InnovationProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InnovationProductCountAggregateInputType | true
    _avg?: InnovationProductAvgAggregateInputType
    _sum?: InnovationProductSumAggregateInputType
    _min?: InnovationProductMinAggregateInputType
    _max?: InnovationProductMaxAggregateInputType
  }

  export type InnovationProductGroupByOutputType = {
    id: string
    title: string
    developer: string
    category: string
    year: number
    thumbnail: string
    description: string
    techStack: string
    demoUrl: string | null
    githubUrl: string | null
    award: string | null
    createdAt: Date
    updatedAt: Date
    _count: InnovationProductCountAggregateOutputType | null
    _avg: InnovationProductAvgAggregateOutputType | null
    _sum: InnovationProductSumAggregateOutputType | null
    _min: InnovationProductMinAggregateOutputType | null
    _max: InnovationProductMaxAggregateOutputType | null
  }

  type GetInnovationProductGroupByPayload<T extends InnovationProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InnovationProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InnovationProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InnovationProductGroupByOutputType[P]>
            : GetScalarType<T[P], InnovationProductGroupByOutputType[P]>
        }
      >
    >


  export type InnovationProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    developer?: boolean
    category?: boolean
    year?: boolean
    thumbnail?: boolean
    description?: boolean
    techStack?: boolean
    demoUrl?: boolean
    githubUrl?: boolean
    award?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["innovationProduct"]>


  export type InnovationProductSelectScalar = {
    id?: boolean
    title?: boolean
    developer?: boolean
    category?: boolean
    year?: boolean
    thumbnail?: boolean
    description?: boolean
    techStack?: boolean
    demoUrl?: boolean
    githubUrl?: boolean
    award?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $InnovationProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InnovationProduct"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      developer: string
      category: string
      year: number
      thumbnail: string
      description: string
      techStack: string
      demoUrl: string | null
      githubUrl: string | null
      award: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["innovationProduct"]>
    composites: {}
  }

  type InnovationProductGetPayload<S extends boolean | null | undefined | InnovationProductDefaultArgs> = $Result.GetResult<Prisma.$InnovationProductPayload, S>

  type InnovationProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InnovationProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InnovationProductCountAggregateInputType | true
    }

  export interface InnovationProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InnovationProduct'], meta: { name: 'InnovationProduct' } }
    /**
     * Find zero or one InnovationProduct that matches the filter.
     * @param {InnovationProductFindUniqueArgs} args - Arguments to find a InnovationProduct
     * @example
     * // Get one InnovationProduct
     * const innovationProduct = await prisma.innovationProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InnovationProductFindUniqueArgs>(args: SelectSubset<T, InnovationProductFindUniqueArgs<ExtArgs>>): Prisma__InnovationProductClient<$Result.GetResult<Prisma.$InnovationProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InnovationProduct that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InnovationProductFindUniqueOrThrowArgs} args - Arguments to find a InnovationProduct
     * @example
     * // Get one InnovationProduct
     * const innovationProduct = await prisma.innovationProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InnovationProductFindUniqueOrThrowArgs>(args: SelectSubset<T, InnovationProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InnovationProductClient<$Result.GetResult<Prisma.$InnovationProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InnovationProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovationProductFindFirstArgs} args - Arguments to find a InnovationProduct
     * @example
     * // Get one InnovationProduct
     * const innovationProduct = await prisma.innovationProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InnovationProductFindFirstArgs>(args?: SelectSubset<T, InnovationProductFindFirstArgs<ExtArgs>>): Prisma__InnovationProductClient<$Result.GetResult<Prisma.$InnovationProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InnovationProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovationProductFindFirstOrThrowArgs} args - Arguments to find a InnovationProduct
     * @example
     * // Get one InnovationProduct
     * const innovationProduct = await prisma.innovationProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InnovationProductFindFirstOrThrowArgs>(args?: SelectSubset<T, InnovationProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__InnovationProductClient<$Result.GetResult<Prisma.$InnovationProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InnovationProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovationProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InnovationProducts
     * const innovationProducts = await prisma.innovationProduct.findMany()
     * 
     * // Get first 10 InnovationProducts
     * const innovationProducts = await prisma.innovationProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const innovationProductWithIdOnly = await prisma.innovationProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InnovationProductFindManyArgs>(args?: SelectSubset<T, InnovationProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InnovationProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InnovationProduct.
     * @param {InnovationProductCreateArgs} args - Arguments to create a InnovationProduct.
     * @example
     * // Create one InnovationProduct
     * const InnovationProduct = await prisma.innovationProduct.create({
     *   data: {
     *     // ... data to create a InnovationProduct
     *   }
     * })
     * 
     */
    create<T extends InnovationProductCreateArgs>(args: SelectSubset<T, InnovationProductCreateArgs<ExtArgs>>): Prisma__InnovationProductClient<$Result.GetResult<Prisma.$InnovationProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InnovationProducts.
     * @param {InnovationProductCreateManyArgs} args - Arguments to create many InnovationProducts.
     * @example
     * // Create many InnovationProducts
     * const innovationProduct = await prisma.innovationProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InnovationProductCreateManyArgs>(args?: SelectSubset<T, InnovationProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InnovationProduct.
     * @param {InnovationProductDeleteArgs} args - Arguments to delete one InnovationProduct.
     * @example
     * // Delete one InnovationProduct
     * const InnovationProduct = await prisma.innovationProduct.delete({
     *   where: {
     *     // ... filter to delete one InnovationProduct
     *   }
     * })
     * 
     */
    delete<T extends InnovationProductDeleteArgs>(args: SelectSubset<T, InnovationProductDeleteArgs<ExtArgs>>): Prisma__InnovationProductClient<$Result.GetResult<Prisma.$InnovationProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InnovationProduct.
     * @param {InnovationProductUpdateArgs} args - Arguments to update one InnovationProduct.
     * @example
     * // Update one InnovationProduct
     * const innovationProduct = await prisma.innovationProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InnovationProductUpdateArgs>(args: SelectSubset<T, InnovationProductUpdateArgs<ExtArgs>>): Prisma__InnovationProductClient<$Result.GetResult<Prisma.$InnovationProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InnovationProducts.
     * @param {InnovationProductDeleteManyArgs} args - Arguments to filter InnovationProducts to delete.
     * @example
     * // Delete a few InnovationProducts
     * const { count } = await prisma.innovationProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InnovationProductDeleteManyArgs>(args?: SelectSubset<T, InnovationProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InnovationProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovationProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InnovationProducts
     * const innovationProduct = await prisma.innovationProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InnovationProductUpdateManyArgs>(args: SelectSubset<T, InnovationProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InnovationProduct.
     * @param {InnovationProductUpsertArgs} args - Arguments to update or create a InnovationProduct.
     * @example
     * // Update or create a InnovationProduct
     * const innovationProduct = await prisma.innovationProduct.upsert({
     *   create: {
     *     // ... data to create a InnovationProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InnovationProduct we want to update
     *   }
     * })
     */
    upsert<T extends InnovationProductUpsertArgs>(args: SelectSubset<T, InnovationProductUpsertArgs<ExtArgs>>): Prisma__InnovationProductClient<$Result.GetResult<Prisma.$InnovationProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InnovationProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovationProductCountArgs} args - Arguments to filter InnovationProducts to count.
     * @example
     * // Count the number of InnovationProducts
     * const count = await prisma.innovationProduct.count({
     *   where: {
     *     // ... the filter for the InnovationProducts we want to count
     *   }
     * })
    **/
    count<T extends InnovationProductCountArgs>(
      args?: Subset<T, InnovationProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InnovationProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InnovationProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovationProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InnovationProductAggregateArgs>(args: Subset<T, InnovationProductAggregateArgs>): Prisma.PrismaPromise<GetInnovationProductAggregateType<T>>

    /**
     * Group by InnovationProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovationProductGroupByArgs} args - Group by arguments.
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
      T extends InnovationProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InnovationProductGroupByArgs['orderBy'] }
        : { orderBy?: InnovationProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InnovationProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInnovationProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InnovationProduct model
   */
  readonly fields: InnovationProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InnovationProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InnovationProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the InnovationProduct model
   */ 
  interface InnovationProductFieldRefs {
    readonly id: FieldRef<"InnovationProduct", 'String'>
    readonly title: FieldRef<"InnovationProduct", 'String'>
    readonly developer: FieldRef<"InnovationProduct", 'String'>
    readonly category: FieldRef<"InnovationProduct", 'String'>
    readonly year: FieldRef<"InnovationProduct", 'Int'>
    readonly thumbnail: FieldRef<"InnovationProduct", 'String'>
    readonly description: FieldRef<"InnovationProduct", 'String'>
    readonly techStack: FieldRef<"InnovationProduct", 'String'>
    readonly demoUrl: FieldRef<"InnovationProduct", 'String'>
    readonly githubUrl: FieldRef<"InnovationProduct", 'String'>
    readonly award: FieldRef<"InnovationProduct", 'String'>
    readonly createdAt: FieldRef<"InnovationProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"InnovationProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InnovationProduct findUnique
   */
  export type InnovationProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InnovationProduct
     */
    select?: InnovationProductSelect<ExtArgs> | null
    /**
     * Filter, which InnovationProduct to fetch.
     */
    where: InnovationProductWhereUniqueInput
  }

  /**
   * InnovationProduct findUniqueOrThrow
   */
  export type InnovationProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InnovationProduct
     */
    select?: InnovationProductSelect<ExtArgs> | null
    /**
     * Filter, which InnovationProduct to fetch.
     */
    where: InnovationProductWhereUniqueInput
  }

  /**
   * InnovationProduct findFirst
   */
  export type InnovationProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InnovationProduct
     */
    select?: InnovationProductSelect<ExtArgs> | null
    /**
     * Filter, which InnovationProduct to fetch.
     */
    where?: InnovationProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InnovationProducts to fetch.
     */
    orderBy?: InnovationProductOrderByWithRelationInput | InnovationProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InnovationProducts.
     */
    cursor?: InnovationProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InnovationProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InnovationProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InnovationProducts.
     */
    distinct?: InnovationProductScalarFieldEnum | InnovationProductScalarFieldEnum[]
  }

  /**
   * InnovationProduct findFirstOrThrow
   */
  export type InnovationProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InnovationProduct
     */
    select?: InnovationProductSelect<ExtArgs> | null
    /**
     * Filter, which InnovationProduct to fetch.
     */
    where?: InnovationProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InnovationProducts to fetch.
     */
    orderBy?: InnovationProductOrderByWithRelationInput | InnovationProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InnovationProducts.
     */
    cursor?: InnovationProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InnovationProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InnovationProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InnovationProducts.
     */
    distinct?: InnovationProductScalarFieldEnum | InnovationProductScalarFieldEnum[]
  }

  /**
   * InnovationProduct findMany
   */
  export type InnovationProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InnovationProduct
     */
    select?: InnovationProductSelect<ExtArgs> | null
    /**
     * Filter, which InnovationProducts to fetch.
     */
    where?: InnovationProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InnovationProducts to fetch.
     */
    orderBy?: InnovationProductOrderByWithRelationInput | InnovationProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InnovationProducts.
     */
    cursor?: InnovationProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InnovationProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InnovationProducts.
     */
    skip?: number
    distinct?: InnovationProductScalarFieldEnum | InnovationProductScalarFieldEnum[]
  }

  /**
   * InnovationProduct create
   */
  export type InnovationProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InnovationProduct
     */
    select?: InnovationProductSelect<ExtArgs> | null
    /**
     * The data needed to create a InnovationProduct.
     */
    data: XOR<InnovationProductCreateInput, InnovationProductUncheckedCreateInput>
  }

  /**
   * InnovationProduct createMany
   */
  export type InnovationProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InnovationProducts.
     */
    data: InnovationProductCreateManyInput | InnovationProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InnovationProduct update
   */
  export type InnovationProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InnovationProduct
     */
    select?: InnovationProductSelect<ExtArgs> | null
    /**
     * The data needed to update a InnovationProduct.
     */
    data: XOR<InnovationProductUpdateInput, InnovationProductUncheckedUpdateInput>
    /**
     * Choose, which InnovationProduct to update.
     */
    where: InnovationProductWhereUniqueInput
  }

  /**
   * InnovationProduct updateMany
   */
  export type InnovationProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InnovationProducts.
     */
    data: XOR<InnovationProductUpdateManyMutationInput, InnovationProductUncheckedUpdateManyInput>
    /**
     * Filter which InnovationProducts to update
     */
    where?: InnovationProductWhereInput
  }

  /**
   * InnovationProduct upsert
   */
  export type InnovationProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InnovationProduct
     */
    select?: InnovationProductSelect<ExtArgs> | null
    /**
     * The filter to search for the InnovationProduct to update in case it exists.
     */
    where: InnovationProductWhereUniqueInput
    /**
     * In case the InnovationProduct found by the `where` argument doesn't exist, create a new InnovationProduct with this data.
     */
    create: XOR<InnovationProductCreateInput, InnovationProductUncheckedCreateInput>
    /**
     * In case the InnovationProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InnovationProductUpdateInput, InnovationProductUncheckedUpdateInput>
  }

  /**
   * InnovationProduct delete
   */
  export type InnovationProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InnovationProduct
     */
    select?: InnovationProductSelect<ExtArgs> | null
    /**
     * Filter which InnovationProduct to delete.
     */
    where: InnovationProductWhereUniqueInput
  }

  /**
   * InnovationProduct deleteMany
   */
  export type InnovationProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InnovationProducts to delete
     */
    where?: InnovationProductWhereInput
  }

  /**
   * InnovationProduct without action
   */
  export type InnovationProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InnovationProduct
     */
    select?: InnovationProductSelect<ExtArgs> | null
  }


  /**
   * Model StudentAchievement
   */

  export type AggregateStudentAchievement = {
    _count: StudentAchievementCountAggregateOutputType | null
    _avg: StudentAchievementAvgAggregateOutputType | null
    _sum: StudentAchievementSumAggregateOutputType | null
    _min: StudentAchievementMinAggregateOutputType | null
    _max: StudentAchievementMaxAggregateOutputType | null
  }

  export type StudentAchievementAvgAggregateOutputType = {
    year: number | null
  }

  export type StudentAchievementSumAggregateOutputType = {
    year: number | null
  }

  export type StudentAchievementMinAggregateOutputType = {
    id: string | null
    competition: string | null
    title: string | null
    rank: string | null
    level: string | null
    year: number | null
    studentNames: string | null
    mentorLecturer: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentAchievementMaxAggregateOutputType = {
    id: string | null
    competition: string | null
    title: string | null
    rank: string | null
    level: string | null
    year: number | null
    studentNames: string | null
    mentorLecturer: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentAchievementCountAggregateOutputType = {
    id: number
    competition: number
    title: number
    rank: number
    level: number
    year: number
    studentNames: number
    mentorLecturer: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAchievementAvgAggregateInputType = {
    year?: true
  }

  export type StudentAchievementSumAggregateInputType = {
    year?: true
  }

  export type StudentAchievementMinAggregateInputType = {
    id?: true
    competition?: true
    title?: true
    rank?: true
    level?: true
    year?: true
    studentNames?: true
    mentorLecturer?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentAchievementMaxAggregateInputType = {
    id?: true
    competition?: true
    title?: true
    rank?: true
    level?: true
    year?: true
    studentNames?: true
    mentorLecturer?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentAchievementCountAggregateInputType = {
    id?: true
    competition?: true
    title?: true
    rank?: true
    level?: true
    year?: true
    studentNames?: true
    mentorLecturer?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAchievement to aggregate.
     */
    where?: StudentAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAchievements to fetch.
     */
    orderBy?: StudentAchievementOrderByWithRelationInput | StudentAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentAchievements
    **/
    _count?: true | StudentAchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentAchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentAchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentAchievementMaxAggregateInputType
  }

  export type GetStudentAchievementAggregateType<T extends StudentAchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentAchievement[P]>
      : GetScalarType<T[P], AggregateStudentAchievement[P]>
  }




  export type StudentAchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAchievementWhereInput
    orderBy?: StudentAchievementOrderByWithAggregationInput | StudentAchievementOrderByWithAggregationInput[]
    by: StudentAchievementScalarFieldEnum[] | StudentAchievementScalarFieldEnum
    having?: StudentAchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentAchievementCountAggregateInputType | true
    _avg?: StudentAchievementAvgAggregateInputType
    _sum?: StudentAchievementSumAggregateInputType
    _min?: StudentAchievementMinAggregateInputType
    _max?: StudentAchievementMaxAggregateInputType
  }

  export type StudentAchievementGroupByOutputType = {
    id: string
    competition: string
    title: string
    rank: string
    level: string
    year: number
    studentNames: string
    mentorLecturer: string
    image: string
    createdAt: Date
    updatedAt: Date
    _count: StudentAchievementCountAggregateOutputType | null
    _avg: StudentAchievementAvgAggregateOutputType | null
    _sum: StudentAchievementSumAggregateOutputType | null
    _min: StudentAchievementMinAggregateOutputType | null
    _max: StudentAchievementMaxAggregateOutputType | null
  }

  type GetStudentAchievementGroupByPayload<T extends StudentAchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentAchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentAchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentAchievementGroupByOutputType[P]>
            : GetScalarType<T[P], StudentAchievementGroupByOutputType[P]>
        }
      >
    >


  export type StudentAchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competition?: boolean
    title?: boolean
    rank?: boolean
    level?: boolean
    year?: boolean
    studentNames?: boolean
    mentorLecturer?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["studentAchievement"]>


  export type StudentAchievementSelectScalar = {
    id?: boolean
    competition?: boolean
    title?: boolean
    rank?: boolean
    level?: boolean
    year?: boolean
    studentNames?: boolean
    mentorLecturer?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $StudentAchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentAchievement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      competition: string
      title: string
      rank: string
      level: string
      year: number
      studentNames: string
      mentorLecturer: string
      image: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentAchievement"]>
    composites: {}
  }

  type StudentAchievementGetPayload<S extends boolean | null | undefined | StudentAchievementDefaultArgs> = $Result.GetResult<Prisma.$StudentAchievementPayload, S>

  type StudentAchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentAchievementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudentAchievementCountAggregateInputType | true
    }

  export interface StudentAchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentAchievement'], meta: { name: 'StudentAchievement' } }
    /**
     * Find zero or one StudentAchievement that matches the filter.
     * @param {StudentAchievementFindUniqueArgs} args - Arguments to find a StudentAchievement
     * @example
     * // Get one StudentAchievement
     * const studentAchievement = await prisma.studentAchievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentAchievementFindUniqueArgs>(args: SelectSubset<T, StudentAchievementFindUniqueArgs<ExtArgs>>): Prisma__StudentAchievementClient<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StudentAchievement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StudentAchievementFindUniqueOrThrowArgs} args - Arguments to find a StudentAchievement
     * @example
     * // Get one StudentAchievement
     * const studentAchievement = await prisma.studentAchievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentAchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentAchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentAchievementClient<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StudentAchievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementFindFirstArgs} args - Arguments to find a StudentAchievement
     * @example
     * // Get one StudentAchievement
     * const studentAchievement = await prisma.studentAchievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentAchievementFindFirstArgs>(args?: SelectSubset<T, StudentAchievementFindFirstArgs<ExtArgs>>): Prisma__StudentAchievementClient<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StudentAchievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementFindFirstOrThrowArgs} args - Arguments to find a StudentAchievement
     * @example
     * // Get one StudentAchievement
     * const studentAchievement = await prisma.studentAchievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentAchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentAchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentAchievementClient<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StudentAchievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentAchievements
     * const studentAchievements = await prisma.studentAchievement.findMany()
     * 
     * // Get first 10 StudentAchievements
     * const studentAchievements = await prisma.studentAchievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentAchievementWithIdOnly = await prisma.studentAchievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentAchievementFindManyArgs>(args?: SelectSubset<T, StudentAchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StudentAchievement.
     * @param {StudentAchievementCreateArgs} args - Arguments to create a StudentAchievement.
     * @example
     * // Create one StudentAchievement
     * const StudentAchievement = await prisma.studentAchievement.create({
     *   data: {
     *     // ... data to create a StudentAchievement
     *   }
     * })
     * 
     */
    create<T extends StudentAchievementCreateArgs>(args: SelectSubset<T, StudentAchievementCreateArgs<ExtArgs>>): Prisma__StudentAchievementClient<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StudentAchievements.
     * @param {StudentAchievementCreateManyArgs} args - Arguments to create many StudentAchievements.
     * @example
     * // Create many StudentAchievements
     * const studentAchievement = await prisma.studentAchievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentAchievementCreateManyArgs>(args?: SelectSubset<T, StudentAchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentAchievement.
     * @param {StudentAchievementDeleteArgs} args - Arguments to delete one StudentAchievement.
     * @example
     * // Delete one StudentAchievement
     * const StudentAchievement = await prisma.studentAchievement.delete({
     *   where: {
     *     // ... filter to delete one StudentAchievement
     *   }
     * })
     * 
     */
    delete<T extends StudentAchievementDeleteArgs>(args: SelectSubset<T, StudentAchievementDeleteArgs<ExtArgs>>): Prisma__StudentAchievementClient<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StudentAchievement.
     * @param {StudentAchievementUpdateArgs} args - Arguments to update one StudentAchievement.
     * @example
     * // Update one StudentAchievement
     * const studentAchievement = await prisma.studentAchievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentAchievementUpdateArgs>(args: SelectSubset<T, StudentAchievementUpdateArgs<ExtArgs>>): Prisma__StudentAchievementClient<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StudentAchievements.
     * @param {StudentAchievementDeleteManyArgs} args - Arguments to filter StudentAchievements to delete.
     * @example
     * // Delete a few StudentAchievements
     * const { count } = await prisma.studentAchievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentAchievementDeleteManyArgs>(args?: SelectSubset<T, StudentAchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentAchievements
     * const studentAchievement = await prisma.studentAchievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentAchievementUpdateManyArgs>(args: SelectSubset<T, StudentAchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentAchievement.
     * @param {StudentAchievementUpsertArgs} args - Arguments to update or create a StudentAchievement.
     * @example
     * // Update or create a StudentAchievement
     * const studentAchievement = await prisma.studentAchievement.upsert({
     *   create: {
     *     // ... data to create a StudentAchievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentAchievement we want to update
     *   }
     * })
     */
    upsert<T extends StudentAchievementUpsertArgs>(args: SelectSubset<T, StudentAchievementUpsertArgs<ExtArgs>>): Prisma__StudentAchievementClient<$Result.GetResult<Prisma.$StudentAchievementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StudentAchievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementCountArgs} args - Arguments to filter StudentAchievements to count.
     * @example
     * // Count the number of StudentAchievements
     * const count = await prisma.studentAchievement.count({
     *   where: {
     *     // ... the filter for the StudentAchievements we want to count
     *   }
     * })
    **/
    count<T extends StudentAchievementCountArgs>(
      args?: Subset<T, StudentAchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentAchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAchievementAggregateArgs>(args: Subset<T, StudentAchievementAggregateArgs>): Prisma.PrismaPromise<GetStudentAchievementAggregateType<T>>

    /**
     * Group by StudentAchievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAchievementGroupByArgs} args - Group by arguments.
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
      T extends StudentAchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentAchievementGroupByArgs['orderBy'] }
        : { orderBy?: StudentAchievementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentAchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentAchievement model
   */
  readonly fields: StudentAchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentAchievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentAchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the StudentAchievement model
   */ 
  interface StudentAchievementFieldRefs {
    readonly id: FieldRef<"StudentAchievement", 'String'>
    readonly competition: FieldRef<"StudentAchievement", 'String'>
    readonly title: FieldRef<"StudentAchievement", 'String'>
    readonly rank: FieldRef<"StudentAchievement", 'String'>
    readonly level: FieldRef<"StudentAchievement", 'String'>
    readonly year: FieldRef<"StudentAchievement", 'Int'>
    readonly studentNames: FieldRef<"StudentAchievement", 'String'>
    readonly mentorLecturer: FieldRef<"StudentAchievement", 'String'>
    readonly image: FieldRef<"StudentAchievement", 'String'>
    readonly createdAt: FieldRef<"StudentAchievement", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentAchievement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentAchievement findUnique
   */
  export type StudentAchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * Filter, which StudentAchievement to fetch.
     */
    where: StudentAchievementWhereUniqueInput
  }

  /**
   * StudentAchievement findUniqueOrThrow
   */
  export type StudentAchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * Filter, which StudentAchievement to fetch.
     */
    where: StudentAchievementWhereUniqueInput
  }

  /**
   * StudentAchievement findFirst
   */
  export type StudentAchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * Filter, which StudentAchievement to fetch.
     */
    where?: StudentAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAchievements to fetch.
     */
    orderBy?: StudentAchievementOrderByWithRelationInput | StudentAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAchievements.
     */
    cursor?: StudentAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAchievements.
     */
    distinct?: StudentAchievementScalarFieldEnum | StudentAchievementScalarFieldEnum[]
  }

  /**
   * StudentAchievement findFirstOrThrow
   */
  export type StudentAchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * Filter, which StudentAchievement to fetch.
     */
    where?: StudentAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAchievements to fetch.
     */
    orderBy?: StudentAchievementOrderByWithRelationInput | StudentAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAchievements.
     */
    cursor?: StudentAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAchievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAchievements.
     */
    distinct?: StudentAchievementScalarFieldEnum | StudentAchievementScalarFieldEnum[]
  }

  /**
   * StudentAchievement findMany
   */
  export type StudentAchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * Filter, which StudentAchievements to fetch.
     */
    where?: StudentAchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAchievements to fetch.
     */
    orderBy?: StudentAchievementOrderByWithRelationInput | StudentAchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentAchievements.
     */
    cursor?: StudentAchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAchievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAchievements.
     */
    skip?: number
    distinct?: StudentAchievementScalarFieldEnum | StudentAchievementScalarFieldEnum[]
  }

  /**
   * StudentAchievement create
   */
  export type StudentAchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * The data needed to create a StudentAchievement.
     */
    data: XOR<StudentAchievementCreateInput, StudentAchievementUncheckedCreateInput>
  }

  /**
   * StudentAchievement createMany
   */
  export type StudentAchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentAchievements.
     */
    data: StudentAchievementCreateManyInput | StudentAchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentAchievement update
   */
  export type StudentAchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * The data needed to update a StudentAchievement.
     */
    data: XOR<StudentAchievementUpdateInput, StudentAchievementUncheckedUpdateInput>
    /**
     * Choose, which StudentAchievement to update.
     */
    where: StudentAchievementWhereUniqueInput
  }

  /**
   * StudentAchievement updateMany
   */
  export type StudentAchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentAchievements.
     */
    data: XOR<StudentAchievementUpdateManyMutationInput, StudentAchievementUncheckedUpdateManyInput>
    /**
     * Filter which StudentAchievements to update
     */
    where?: StudentAchievementWhereInput
  }

  /**
   * StudentAchievement upsert
   */
  export type StudentAchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * The filter to search for the StudentAchievement to update in case it exists.
     */
    where: StudentAchievementWhereUniqueInput
    /**
     * In case the StudentAchievement found by the `where` argument doesn't exist, create a new StudentAchievement with this data.
     */
    create: XOR<StudentAchievementCreateInput, StudentAchievementUncheckedCreateInput>
    /**
     * In case the StudentAchievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentAchievementUpdateInput, StudentAchievementUncheckedUpdateInput>
  }

  /**
   * StudentAchievement delete
   */
  export type StudentAchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
    /**
     * Filter which StudentAchievement to delete.
     */
    where: StudentAchievementWhereUniqueInput
  }

  /**
   * StudentAchievement deleteMany
   */
  export type StudentAchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAchievements to delete
     */
    where?: StudentAchievementWhereInput
  }

  /**
   * StudentAchievement without action
   */
  export type StudentAchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAchievement
     */
    select?: StudentAchievementSelect<ExtArgs> | null
  }


  /**
   * Model AlumniTestimonial
   */

  export type AggregateAlumniTestimonial = {
    _count: AlumniTestimonialCountAggregateOutputType | null
    _avg: AlumniTestimonialAvgAggregateOutputType | null
    _sum: AlumniTestimonialSumAggregateOutputType | null
    _min: AlumniTestimonialMinAggregateOutputType | null
    _max: AlumniTestimonialMaxAggregateOutputType | null
  }

  export type AlumniTestimonialAvgAggregateOutputType = {
    gradYear: number | null
  }

  export type AlumniTestimonialSumAggregateOutputType = {
    gradYear: number | null
  }

  export type AlumniTestimonialMinAggregateOutputType = {
    id: string | null
    name: string | null
    gradYear: number | null
    role: string | null
    company: string | null
    companyLogo: string | null
    photo: string | null
    quote: string | null
    linkedinUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlumniTestimonialMaxAggregateOutputType = {
    id: string | null
    name: string | null
    gradYear: number | null
    role: string | null
    company: string | null
    companyLogo: string | null
    photo: string | null
    quote: string | null
    linkedinUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlumniTestimonialCountAggregateOutputType = {
    id: number
    name: number
    gradYear: number
    role: number
    company: number
    companyLogo: number
    photo: number
    quote: number
    linkedinUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlumniTestimonialAvgAggregateInputType = {
    gradYear?: true
  }

  export type AlumniTestimonialSumAggregateInputType = {
    gradYear?: true
  }

  export type AlumniTestimonialMinAggregateInputType = {
    id?: true
    name?: true
    gradYear?: true
    role?: true
    company?: true
    companyLogo?: true
    photo?: true
    quote?: true
    linkedinUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlumniTestimonialMaxAggregateInputType = {
    id?: true
    name?: true
    gradYear?: true
    role?: true
    company?: true
    companyLogo?: true
    photo?: true
    quote?: true
    linkedinUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlumniTestimonialCountAggregateInputType = {
    id?: true
    name?: true
    gradYear?: true
    role?: true
    company?: true
    companyLogo?: true
    photo?: true
    quote?: true
    linkedinUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlumniTestimonialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlumniTestimonial to aggregate.
     */
    where?: AlumniTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlumniTestimonials to fetch.
     */
    orderBy?: AlumniTestimonialOrderByWithRelationInput | AlumniTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlumniTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlumniTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlumniTestimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlumniTestimonials
    **/
    _count?: true | AlumniTestimonialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlumniTestimonialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlumniTestimonialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlumniTestimonialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlumniTestimonialMaxAggregateInputType
  }

  export type GetAlumniTestimonialAggregateType<T extends AlumniTestimonialAggregateArgs> = {
        [P in keyof T & keyof AggregateAlumniTestimonial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlumniTestimonial[P]>
      : GetScalarType<T[P], AggregateAlumniTestimonial[P]>
  }




  export type AlumniTestimonialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlumniTestimonialWhereInput
    orderBy?: AlumniTestimonialOrderByWithAggregationInput | AlumniTestimonialOrderByWithAggregationInput[]
    by: AlumniTestimonialScalarFieldEnum[] | AlumniTestimonialScalarFieldEnum
    having?: AlumniTestimonialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlumniTestimonialCountAggregateInputType | true
    _avg?: AlumniTestimonialAvgAggregateInputType
    _sum?: AlumniTestimonialSumAggregateInputType
    _min?: AlumniTestimonialMinAggregateInputType
    _max?: AlumniTestimonialMaxAggregateInputType
  }

  export type AlumniTestimonialGroupByOutputType = {
    id: string
    name: string
    gradYear: number
    role: string
    company: string
    companyLogo: string
    photo: string
    quote: string
    linkedinUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: AlumniTestimonialCountAggregateOutputType | null
    _avg: AlumniTestimonialAvgAggregateOutputType | null
    _sum: AlumniTestimonialSumAggregateOutputType | null
    _min: AlumniTestimonialMinAggregateOutputType | null
    _max: AlumniTestimonialMaxAggregateOutputType | null
  }

  type GetAlumniTestimonialGroupByPayload<T extends AlumniTestimonialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlumniTestimonialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlumniTestimonialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlumniTestimonialGroupByOutputType[P]>
            : GetScalarType<T[P], AlumniTestimonialGroupByOutputType[P]>
        }
      >
    >


  export type AlumniTestimonialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gradYear?: boolean
    role?: boolean
    company?: boolean
    companyLogo?: boolean
    photo?: boolean
    quote?: boolean
    linkedinUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alumniTestimonial"]>


  export type AlumniTestimonialSelectScalar = {
    id?: boolean
    name?: boolean
    gradYear?: boolean
    role?: boolean
    company?: boolean
    companyLogo?: boolean
    photo?: boolean
    quote?: boolean
    linkedinUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AlumniTestimonialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlumniTestimonial"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      gradYear: number
      role: string
      company: string
      companyLogo: string
      photo: string
      quote: string
      linkedinUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alumniTestimonial"]>
    composites: {}
  }

  type AlumniTestimonialGetPayload<S extends boolean | null | undefined | AlumniTestimonialDefaultArgs> = $Result.GetResult<Prisma.$AlumniTestimonialPayload, S>

  type AlumniTestimonialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlumniTestimonialFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlumniTestimonialCountAggregateInputType | true
    }

  export interface AlumniTestimonialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlumniTestimonial'], meta: { name: 'AlumniTestimonial' } }
    /**
     * Find zero or one AlumniTestimonial that matches the filter.
     * @param {AlumniTestimonialFindUniqueArgs} args - Arguments to find a AlumniTestimonial
     * @example
     * // Get one AlumniTestimonial
     * const alumniTestimonial = await prisma.alumniTestimonial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlumniTestimonialFindUniqueArgs>(args: SelectSubset<T, AlumniTestimonialFindUniqueArgs<ExtArgs>>): Prisma__AlumniTestimonialClient<$Result.GetResult<Prisma.$AlumniTestimonialPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AlumniTestimonial that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AlumniTestimonialFindUniqueOrThrowArgs} args - Arguments to find a AlumniTestimonial
     * @example
     * // Get one AlumniTestimonial
     * const alumniTestimonial = await prisma.alumniTestimonial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlumniTestimonialFindUniqueOrThrowArgs>(args: SelectSubset<T, AlumniTestimonialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlumniTestimonialClient<$Result.GetResult<Prisma.$AlumniTestimonialPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AlumniTestimonial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumniTestimonialFindFirstArgs} args - Arguments to find a AlumniTestimonial
     * @example
     * // Get one AlumniTestimonial
     * const alumniTestimonial = await prisma.alumniTestimonial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlumniTestimonialFindFirstArgs>(args?: SelectSubset<T, AlumniTestimonialFindFirstArgs<ExtArgs>>): Prisma__AlumniTestimonialClient<$Result.GetResult<Prisma.$AlumniTestimonialPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AlumniTestimonial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumniTestimonialFindFirstOrThrowArgs} args - Arguments to find a AlumniTestimonial
     * @example
     * // Get one AlumniTestimonial
     * const alumniTestimonial = await prisma.alumniTestimonial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlumniTestimonialFindFirstOrThrowArgs>(args?: SelectSubset<T, AlumniTestimonialFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlumniTestimonialClient<$Result.GetResult<Prisma.$AlumniTestimonialPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AlumniTestimonials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumniTestimonialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlumniTestimonials
     * const alumniTestimonials = await prisma.alumniTestimonial.findMany()
     * 
     * // Get first 10 AlumniTestimonials
     * const alumniTestimonials = await prisma.alumniTestimonial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alumniTestimonialWithIdOnly = await prisma.alumniTestimonial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlumniTestimonialFindManyArgs>(args?: SelectSubset<T, AlumniTestimonialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlumniTestimonialPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AlumniTestimonial.
     * @param {AlumniTestimonialCreateArgs} args - Arguments to create a AlumniTestimonial.
     * @example
     * // Create one AlumniTestimonial
     * const AlumniTestimonial = await prisma.alumniTestimonial.create({
     *   data: {
     *     // ... data to create a AlumniTestimonial
     *   }
     * })
     * 
     */
    create<T extends AlumniTestimonialCreateArgs>(args: SelectSubset<T, AlumniTestimonialCreateArgs<ExtArgs>>): Prisma__AlumniTestimonialClient<$Result.GetResult<Prisma.$AlumniTestimonialPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AlumniTestimonials.
     * @param {AlumniTestimonialCreateManyArgs} args - Arguments to create many AlumniTestimonials.
     * @example
     * // Create many AlumniTestimonials
     * const alumniTestimonial = await prisma.alumniTestimonial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlumniTestimonialCreateManyArgs>(args?: SelectSubset<T, AlumniTestimonialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AlumniTestimonial.
     * @param {AlumniTestimonialDeleteArgs} args - Arguments to delete one AlumniTestimonial.
     * @example
     * // Delete one AlumniTestimonial
     * const AlumniTestimonial = await prisma.alumniTestimonial.delete({
     *   where: {
     *     // ... filter to delete one AlumniTestimonial
     *   }
     * })
     * 
     */
    delete<T extends AlumniTestimonialDeleteArgs>(args: SelectSubset<T, AlumniTestimonialDeleteArgs<ExtArgs>>): Prisma__AlumniTestimonialClient<$Result.GetResult<Prisma.$AlumniTestimonialPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AlumniTestimonial.
     * @param {AlumniTestimonialUpdateArgs} args - Arguments to update one AlumniTestimonial.
     * @example
     * // Update one AlumniTestimonial
     * const alumniTestimonial = await prisma.alumniTestimonial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlumniTestimonialUpdateArgs>(args: SelectSubset<T, AlumniTestimonialUpdateArgs<ExtArgs>>): Prisma__AlumniTestimonialClient<$Result.GetResult<Prisma.$AlumniTestimonialPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AlumniTestimonials.
     * @param {AlumniTestimonialDeleteManyArgs} args - Arguments to filter AlumniTestimonials to delete.
     * @example
     * // Delete a few AlumniTestimonials
     * const { count } = await prisma.alumniTestimonial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlumniTestimonialDeleteManyArgs>(args?: SelectSubset<T, AlumniTestimonialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlumniTestimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumniTestimonialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlumniTestimonials
     * const alumniTestimonial = await prisma.alumniTestimonial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlumniTestimonialUpdateManyArgs>(args: SelectSubset<T, AlumniTestimonialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AlumniTestimonial.
     * @param {AlumniTestimonialUpsertArgs} args - Arguments to update or create a AlumniTestimonial.
     * @example
     * // Update or create a AlumniTestimonial
     * const alumniTestimonial = await prisma.alumniTestimonial.upsert({
     *   create: {
     *     // ... data to create a AlumniTestimonial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlumniTestimonial we want to update
     *   }
     * })
     */
    upsert<T extends AlumniTestimonialUpsertArgs>(args: SelectSubset<T, AlumniTestimonialUpsertArgs<ExtArgs>>): Prisma__AlumniTestimonialClient<$Result.GetResult<Prisma.$AlumniTestimonialPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AlumniTestimonials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumniTestimonialCountArgs} args - Arguments to filter AlumniTestimonials to count.
     * @example
     * // Count the number of AlumniTestimonials
     * const count = await prisma.alumniTestimonial.count({
     *   where: {
     *     // ... the filter for the AlumniTestimonials we want to count
     *   }
     * })
    **/
    count<T extends AlumniTestimonialCountArgs>(
      args?: Subset<T, AlumniTestimonialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlumniTestimonialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlumniTestimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumniTestimonialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlumniTestimonialAggregateArgs>(args: Subset<T, AlumniTestimonialAggregateArgs>): Prisma.PrismaPromise<GetAlumniTestimonialAggregateType<T>>

    /**
     * Group by AlumniTestimonial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumniTestimonialGroupByArgs} args - Group by arguments.
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
      T extends AlumniTestimonialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlumniTestimonialGroupByArgs['orderBy'] }
        : { orderBy?: AlumniTestimonialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlumniTestimonialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumniTestimonialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlumniTestimonial model
   */
  readonly fields: AlumniTestimonialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlumniTestimonial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlumniTestimonialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AlumniTestimonial model
   */ 
  interface AlumniTestimonialFieldRefs {
    readonly id: FieldRef<"AlumniTestimonial", 'String'>
    readonly name: FieldRef<"AlumniTestimonial", 'String'>
    readonly gradYear: FieldRef<"AlumniTestimonial", 'Int'>
    readonly role: FieldRef<"AlumniTestimonial", 'String'>
    readonly company: FieldRef<"AlumniTestimonial", 'String'>
    readonly companyLogo: FieldRef<"AlumniTestimonial", 'String'>
    readonly photo: FieldRef<"AlumniTestimonial", 'String'>
    readonly quote: FieldRef<"AlumniTestimonial", 'String'>
    readonly linkedinUrl: FieldRef<"AlumniTestimonial", 'String'>
    readonly createdAt: FieldRef<"AlumniTestimonial", 'DateTime'>
    readonly updatedAt: FieldRef<"AlumniTestimonial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AlumniTestimonial findUnique
   */
  export type AlumniTestimonialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniTestimonial
     */
    select?: AlumniTestimonialSelect<ExtArgs> | null
    /**
     * Filter, which AlumniTestimonial to fetch.
     */
    where: AlumniTestimonialWhereUniqueInput
  }

  /**
   * AlumniTestimonial findUniqueOrThrow
   */
  export type AlumniTestimonialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniTestimonial
     */
    select?: AlumniTestimonialSelect<ExtArgs> | null
    /**
     * Filter, which AlumniTestimonial to fetch.
     */
    where: AlumniTestimonialWhereUniqueInput
  }

  /**
   * AlumniTestimonial findFirst
   */
  export type AlumniTestimonialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniTestimonial
     */
    select?: AlumniTestimonialSelect<ExtArgs> | null
    /**
     * Filter, which AlumniTestimonial to fetch.
     */
    where?: AlumniTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlumniTestimonials to fetch.
     */
    orderBy?: AlumniTestimonialOrderByWithRelationInput | AlumniTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlumniTestimonials.
     */
    cursor?: AlumniTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlumniTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlumniTestimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlumniTestimonials.
     */
    distinct?: AlumniTestimonialScalarFieldEnum | AlumniTestimonialScalarFieldEnum[]
  }

  /**
   * AlumniTestimonial findFirstOrThrow
   */
  export type AlumniTestimonialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniTestimonial
     */
    select?: AlumniTestimonialSelect<ExtArgs> | null
    /**
     * Filter, which AlumniTestimonial to fetch.
     */
    where?: AlumniTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlumniTestimonials to fetch.
     */
    orderBy?: AlumniTestimonialOrderByWithRelationInput | AlumniTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlumniTestimonials.
     */
    cursor?: AlumniTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlumniTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlumniTestimonials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlumniTestimonials.
     */
    distinct?: AlumniTestimonialScalarFieldEnum | AlumniTestimonialScalarFieldEnum[]
  }

  /**
   * AlumniTestimonial findMany
   */
  export type AlumniTestimonialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniTestimonial
     */
    select?: AlumniTestimonialSelect<ExtArgs> | null
    /**
     * Filter, which AlumniTestimonials to fetch.
     */
    where?: AlumniTestimonialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlumniTestimonials to fetch.
     */
    orderBy?: AlumniTestimonialOrderByWithRelationInput | AlumniTestimonialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlumniTestimonials.
     */
    cursor?: AlumniTestimonialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlumniTestimonials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlumniTestimonials.
     */
    skip?: number
    distinct?: AlumniTestimonialScalarFieldEnum | AlumniTestimonialScalarFieldEnum[]
  }

  /**
   * AlumniTestimonial create
   */
  export type AlumniTestimonialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniTestimonial
     */
    select?: AlumniTestimonialSelect<ExtArgs> | null
    /**
     * The data needed to create a AlumniTestimonial.
     */
    data: XOR<AlumniTestimonialCreateInput, AlumniTestimonialUncheckedCreateInput>
  }

  /**
   * AlumniTestimonial createMany
   */
  export type AlumniTestimonialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlumniTestimonials.
     */
    data: AlumniTestimonialCreateManyInput | AlumniTestimonialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlumniTestimonial update
   */
  export type AlumniTestimonialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniTestimonial
     */
    select?: AlumniTestimonialSelect<ExtArgs> | null
    /**
     * The data needed to update a AlumniTestimonial.
     */
    data: XOR<AlumniTestimonialUpdateInput, AlumniTestimonialUncheckedUpdateInput>
    /**
     * Choose, which AlumniTestimonial to update.
     */
    where: AlumniTestimonialWhereUniqueInput
  }

  /**
   * AlumniTestimonial updateMany
   */
  export type AlumniTestimonialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlumniTestimonials.
     */
    data: XOR<AlumniTestimonialUpdateManyMutationInput, AlumniTestimonialUncheckedUpdateManyInput>
    /**
     * Filter which AlumniTestimonials to update
     */
    where?: AlumniTestimonialWhereInput
  }

  /**
   * AlumniTestimonial upsert
   */
  export type AlumniTestimonialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniTestimonial
     */
    select?: AlumniTestimonialSelect<ExtArgs> | null
    /**
     * The filter to search for the AlumniTestimonial to update in case it exists.
     */
    where: AlumniTestimonialWhereUniqueInput
    /**
     * In case the AlumniTestimonial found by the `where` argument doesn't exist, create a new AlumniTestimonial with this data.
     */
    create: XOR<AlumniTestimonialCreateInput, AlumniTestimonialUncheckedCreateInput>
    /**
     * In case the AlumniTestimonial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlumniTestimonialUpdateInput, AlumniTestimonialUncheckedUpdateInput>
  }

  /**
   * AlumniTestimonial delete
   */
  export type AlumniTestimonialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniTestimonial
     */
    select?: AlumniTestimonialSelect<ExtArgs> | null
    /**
     * Filter which AlumniTestimonial to delete.
     */
    where: AlumniTestimonialWhereUniqueInput
  }

  /**
   * AlumniTestimonial deleteMany
   */
  export type AlumniTestimonialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlumniTestimonials to delete
     */
    where?: AlumniTestimonialWhereInput
  }

  /**
   * AlumniTestimonial without action
   */
  export type AlumniTestimonialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumniTestimonial
     */
    select?: AlumniTestimonialSelect<ExtArgs> | null
  }


  /**
   * Model JobVacancy
   */

  export type AggregateJobVacancy = {
    _count: JobVacancyCountAggregateOutputType | null
    _min: JobVacancyMinAggregateOutputType | null
    _max: JobVacancyMaxAggregateOutputType | null
  }

  export type JobVacancyMinAggregateOutputType = {
    id: string | null
    title: string | null
    company: string | null
    logo: string | null
    location: string | null
    type: string | null
    specialization: string | null
    postedDate: string | null
    applyDeadline: string | null
    requirements: string | null
    applyLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobVacancyMaxAggregateOutputType = {
    id: string | null
    title: string | null
    company: string | null
    logo: string | null
    location: string | null
    type: string | null
    specialization: string | null
    postedDate: string | null
    applyDeadline: string | null
    requirements: string | null
    applyLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobVacancyCountAggregateOutputType = {
    id: number
    title: number
    company: number
    logo: number
    location: number
    type: number
    specialization: number
    postedDate: number
    applyDeadline: number
    requirements: number
    applyLink: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobVacancyMinAggregateInputType = {
    id?: true
    title?: true
    company?: true
    logo?: true
    location?: true
    type?: true
    specialization?: true
    postedDate?: true
    applyDeadline?: true
    requirements?: true
    applyLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobVacancyMaxAggregateInputType = {
    id?: true
    title?: true
    company?: true
    logo?: true
    location?: true
    type?: true
    specialization?: true
    postedDate?: true
    applyDeadline?: true
    requirements?: true
    applyLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobVacancyCountAggregateInputType = {
    id?: true
    title?: true
    company?: true
    logo?: true
    location?: true
    type?: true
    specialization?: true
    postedDate?: true
    applyDeadline?: true
    requirements?: true
    applyLink?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobVacancyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobVacancy to aggregate.
     */
    where?: JobVacancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobVacancies to fetch.
     */
    orderBy?: JobVacancyOrderByWithRelationInput | JobVacancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobVacancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobVacancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobVacancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobVacancies
    **/
    _count?: true | JobVacancyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobVacancyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobVacancyMaxAggregateInputType
  }

  export type GetJobVacancyAggregateType<T extends JobVacancyAggregateArgs> = {
        [P in keyof T & keyof AggregateJobVacancy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobVacancy[P]>
      : GetScalarType<T[P], AggregateJobVacancy[P]>
  }




  export type JobVacancyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobVacancyWhereInput
    orderBy?: JobVacancyOrderByWithAggregationInput | JobVacancyOrderByWithAggregationInput[]
    by: JobVacancyScalarFieldEnum[] | JobVacancyScalarFieldEnum
    having?: JobVacancyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobVacancyCountAggregateInputType | true
    _min?: JobVacancyMinAggregateInputType
    _max?: JobVacancyMaxAggregateInputType
  }

  export type JobVacancyGroupByOutputType = {
    id: string
    title: string
    company: string
    logo: string
    location: string
    type: string
    specialization: string | null
    postedDate: string
    applyDeadline: string
    requirements: string
    applyLink: string
    createdAt: Date
    updatedAt: Date
    _count: JobVacancyCountAggregateOutputType | null
    _min: JobVacancyMinAggregateOutputType | null
    _max: JobVacancyMaxAggregateOutputType | null
  }

  type GetJobVacancyGroupByPayload<T extends JobVacancyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobVacancyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobVacancyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobVacancyGroupByOutputType[P]>
            : GetScalarType<T[P], JobVacancyGroupByOutputType[P]>
        }
      >
    >


  export type JobVacancySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    company?: boolean
    logo?: boolean
    location?: boolean
    type?: boolean
    specialization?: boolean
    postedDate?: boolean
    applyDeadline?: boolean
    requirements?: boolean
    applyLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["jobVacancy"]>


  export type JobVacancySelectScalar = {
    id?: boolean
    title?: boolean
    company?: boolean
    logo?: boolean
    location?: boolean
    type?: boolean
    specialization?: boolean
    postedDate?: boolean
    applyDeadline?: boolean
    requirements?: boolean
    applyLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $JobVacancyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobVacancy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      company: string
      logo: string
      location: string
      type: string
      specialization: string | null
      postedDate: string
      applyDeadline: string
      requirements: string
      applyLink: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobVacancy"]>
    composites: {}
  }

  type JobVacancyGetPayload<S extends boolean | null | undefined | JobVacancyDefaultArgs> = $Result.GetResult<Prisma.$JobVacancyPayload, S>

  type JobVacancyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JobVacancyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobVacancyCountAggregateInputType | true
    }

  export interface JobVacancyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobVacancy'], meta: { name: 'JobVacancy' } }
    /**
     * Find zero or one JobVacancy that matches the filter.
     * @param {JobVacancyFindUniqueArgs} args - Arguments to find a JobVacancy
     * @example
     * // Get one JobVacancy
     * const jobVacancy = await prisma.jobVacancy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobVacancyFindUniqueArgs>(args: SelectSubset<T, JobVacancyFindUniqueArgs<ExtArgs>>): Prisma__JobVacancyClient<$Result.GetResult<Prisma.$JobVacancyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one JobVacancy that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JobVacancyFindUniqueOrThrowArgs} args - Arguments to find a JobVacancy
     * @example
     * // Get one JobVacancy
     * const jobVacancy = await prisma.jobVacancy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobVacancyFindUniqueOrThrowArgs>(args: SelectSubset<T, JobVacancyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobVacancyClient<$Result.GetResult<Prisma.$JobVacancyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first JobVacancy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobVacancyFindFirstArgs} args - Arguments to find a JobVacancy
     * @example
     * // Get one JobVacancy
     * const jobVacancy = await prisma.jobVacancy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobVacancyFindFirstArgs>(args?: SelectSubset<T, JobVacancyFindFirstArgs<ExtArgs>>): Prisma__JobVacancyClient<$Result.GetResult<Prisma.$JobVacancyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first JobVacancy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobVacancyFindFirstOrThrowArgs} args - Arguments to find a JobVacancy
     * @example
     * // Get one JobVacancy
     * const jobVacancy = await prisma.jobVacancy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobVacancyFindFirstOrThrowArgs>(args?: SelectSubset<T, JobVacancyFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobVacancyClient<$Result.GetResult<Prisma.$JobVacancyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more JobVacancies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobVacancyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobVacancies
     * const jobVacancies = await prisma.jobVacancy.findMany()
     * 
     * // Get first 10 JobVacancies
     * const jobVacancies = await prisma.jobVacancy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobVacancyWithIdOnly = await prisma.jobVacancy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobVacancyFindManyArgs>(args?: SelectSubset<T, JobVacancyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobVacancyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a JobVacancy.
     * @param {JobVacancyCreateArgs} args - Arguments to create a JobVacancy.
     * @example
     * // Create one JobVacancy
     * const JobVacancy = await prisma.jobVacancy.create({
     *   data: {
     *     // ... data to create a JobVacancy
     *   }
     * })
     * 
     */
    create<T extends JobVacancyCreateArgs>(args: SelectSubset<T, JobVacancyCreateArgs<ExtArgs>>): Prisma__JobVacancyClient<$Result.GetResult<Prisma.$JobVacancyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many JobVacancies.
     * @param {JobVacancyCreateManyArgs} args - Arguments to create many JobVacancies.
     * @example
     * // Create many JobVacancies
     * const jobVacancy = await prisma.jobVacancy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobVacancyCreateManyArgs>(args?: SelectSubset<T, JobVacancyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JobVacancy.
     * @param {JobVacancyDeleteArgs} args - Arguments to delete one JobVacancy.
     * @example
     * // Delete one JobVacancy
     * const JobVacancy = await prisma.jobVacancy.delete({
     *   where: {
     *     // ... filter to delete one JobVacancy
     *   }
     * })
     * 
     */
    delete<T extends JobVacancyDeleteArgs>(args: SelectSubset<T, JobVacancyDeleteArgs<ExtArgs>>): Prisma__JobVacancyClient<$Result.GetResult<Prisma.$JobVacancyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one JobVacancy.
     * @param {JobVacancyUpdateArgs} args - Arguments to update one JobVacancy.
     * @example
     * // Update one JobVacancy
     * const jobVacancy = await prisma.jobVacancy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobVacancyUpdateArgs>(args: SelectSubset<T, JobVacancyUpdateArgs<ExtArgs>>): Prisma__JobVacancyClient<$Result.GetResult<Prisma.$JobVacancyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more JobVacancies.
     * @param {JobVacancyDeleteManyArgs} args - Arguments to filter JobVacancies to delete.
     * @example
     * // Delete a few JobVacancies
     * const { count } = await prisma.jobVacancy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobVacancyDeleteManyArgs>(args?: SelectSubset<T, JobVacancyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobVacancies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobVacancyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobVacancies
     * const jobVacancy = await prisma.jobVacancy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobVacancyUpdateManyArgs>(args: SelectSubset<T, JobVacancyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JobVacancy.
     * @param {JobVacancyUpsertArgs} args - Arguments to update or create a JobVacancy.
     * @example
     * // Update or create a JobVacancy
     * const jobVacancy = await prisma.jobVacancy.upsert({
     *   create: {
     *     // ... data to create a JobVacancy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobVacancy we want to update
     *   }
     * })
     */
    upsert<T extends JobVacancyUpsertArgs>(args: SelectSubset<T, JobVacancyUpsertArgs<ExtArgs>>): Prisma__JobVacancyClient<$Result.GetResult<Prisma.$JobVacancyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of JobVacancies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobVacancyCountArgs} args - Arguments to filter JobVacancies to count.
     * @example
     * // Count the number of JobVacancies
     * const count = await prisma.jobVacancy.count({
     *   where: {
     *     // ... the filter for the JobVacancies we want to count
     *   }
     * })
    **/
    count<T extends JobVacancyCountArgs>(
      args?: Subset<T, JobVacancyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobVacancyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobVacancy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobVacancyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobVacancyAggregateArgs>(args: Subset<T, JobVacancyAggregateArgs>): Prisma.PrismaPromise<GetJobVacancyAggregateType<T>>

    /**
     * Group by JobVacancy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobVacancyGroupByArgs} args - Group by arguments.
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
      T extends JobVacancyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobVacancyGroupByArgs['orderBy'] }
        : { orderBy?: JobVacancyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobVacancyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobVacancyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobVacancy model
   */
  readonly fields: JobVacancyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobVacancy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobVacancyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the JobVacancy model
   */ 
  interface JobVacancyFieldRefs {
    readonly id: FieldRef<"JobVacancy", 'String'>
    readonly title: FieldRef<"JobVacancy", 'String'>
    readonly company: FieldRef<"JobVacancy", 'String'>
    readonly logo: FieldRef<"JobVacancy", 'String'>
    readonly location: FieldRef<"JobVacancy", 'String'>
    readonly type: FieldRef<"JobVacancy", 'String'>
    readonly specialization: FieldRef<"JobVacancy", 'String'>
    readonly postedDate: FieldRef<"JobVacancy", 'String'>
    readonly applyDeadline: FieldRef<"JobVacancy", 'String'>
    readonly requirements: FieldRef<"JobVacancy", 'String'>
    readonly applyLink: FieldRef<"JobVacancy", 'String'>
    readonly createdAt: FieldRef<"JobVacancy", 'DateTime'>
    readonly updatedAt: FieldRef<"JobVacancy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobVacancy findUnique
   */
  export type JobVacancyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobVacancy
     */
    select?: JobVacancySelect<ExtArgs> | null
    /**
     * Filter, which JobVacancy to fetch.
     */
    where: JobVacancyWhereUniqueInput
  }

  /**
   * JobVacancy findUniqueOrThrow
   */
  export type JobVacancyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobVacancy
     */
    select?: JobVacancySelect<ExtArgs> | null
    /**
     * Filter, which JobVacancy to fetch.
     */
    where: JobVacancyWhereUniqueInput
  }

  /**
   * JobVacancy findFirst
   */
  export type JobVacancyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobVacancy
     */
    select?: JobVacancySelect<ExtArgs> | null
    /**
     * Filter, which JobVacancy to fetch.
     */
    where?: JobVacancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobVacancies to fetch.
     */
    orderBy?: JobVacancyOrderByWithRelationInput | JobVacancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobVacancies.
     */
    cursor?: JobVacancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobVacancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobVacancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobVacancies.
     */
    distinct?: JobVacancyScalarFieldEnum | JobVacancyScalarFieldEnum[]
  }

  /**
   * JobVacancy findFirstOrThrow
   */
  export type JobVacancyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobVacancy
     */
    select?: JobVacancySelect<ExtArgs> | null
    /**
     * Filter, which JobVacancy to fetch.
     */
    where?: JobVacancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobVacancies to fetch.
     */
    orderBy?: JobVacancyOrderByWithRelationInput | JobVacancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobVacancies.
     */
    cursor?: JobVacancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobVacancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobVacancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobVacancies.
     */
    distinct?: JobVacancyScalarFieldEnum | JobVacancyScalarFieldEnum[]
  }

  /**
   * JobVacancy findMany
   */
  export type JobVacancyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobVacancy
     */
    select?: JobVacancySelect<ExtArgs> | null
    /**
     * Filter, which JobVacancies to fetch.
     */
    where?: JobVacancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobVacancies to fetch.
     */
    orderBy?: JobVacancyOrderByWithRelationInput | JobVacancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobVacancies.
     */
    cursor?: JobVacancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobVacancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobVacancies.
     */
    skip?: number
    distinct?: JobVacancyScalarFieldEnum | JobVacancyScalarFieldEnum[]
  }

  /**
   * JobVacancy create
   */
  export type JobVacancyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobVacancy
     */
    select?: JobVacancySelect<ExtArgs> | null
    /**
     * The data needed to create a JobVacancy.
     */
    data: XOR<JobVacancyCreateInput, JobVacancyUncheckedCreateInput>
  }

  /**
   * JobVacancy createMany
   */
  export type JobVacancyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobVacancies.
     */
    data: JobVacancyCreateManyInput | JobVacancyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobVacancy update
   */
  export type JobVacancyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobVacancy
     */
    select?: JobVacancySelect<ExtArgs> | null
    /**
     * The data needed to update a JobVacancy.
     */
    data: XOR<JobVacancyUpdateInput, JobVacancyUncheckedUpdateInput>
    /**
     * Choose, which JobVacancy to update.
     */
    where: JobVacancyWhereUniqueInput
  }

  /**
   * JobVacancy updateMany
   */
  export type JobVacancyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobVacancies.
     */
    data: XOR<JobVacancyUpdateManyMutationInput, JobVacancyUncheckedUpdateManyInput>
    /**
     * Filter which JobVacancies to update
     */
    where?: JobVacancyWhereInput
  }

  /**
   * JobVacancy upsert
   */
  export type JobVacancyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobVacancy
     */
    select?: JobVacancySelect<ExtArgs> | null
    /**
     * The filter to search for the JobVacancy to update in case it exists.
     */
    where: JobVacancyWhereUniqueInput
    /**
     * In case the JobVacancy found by the `where` argument doesn't exist, create a new JobVacancy with this data.
     */
    create: XOR<JobVacancyCreateInput, JobVacancyUncheckedCreateInput>
    /**
     * In case the JobVacancy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobVacancyUpdateInput, JobVacancyUncheckedUpdateInput>
  }

  /**
   * JobVacancy delete
   */
  export type JobVacancyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobVacancy
     */
    select?: JobVacancySelect<ExtArgs> | null
    /**
     * Filter which JobVacancy to delete.
     */
    where: JobVacancyWhereUniqueInput
  }

  /**
   * JobVacancy deleteMany
   */
  export type JobVacancyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobVacancies to delete
     */
    where?: JobVacancyWhereInput
  }

  /**
   * JobVacancy without action
   */
  export type JobVacancyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobVacancy
     */
    select?: JobVacancySelect<ExtArgs> | null
  }


  /**
   * Model PMBTrack
   */

  export type AggregatePMBTrack = {
    _count: PMBTrackCountAggregateOutputType | null
    _avg: PMBTrackAvgAggregateOutputType | null
    _sum: PMBTrackSumAggregateOutputType | null
    _min: PMBTrackMinAggregateOutputType | null
    _max: PMBTrackMaxAggregateOutputType | null
  }

  export type PMBTrackAvgAggregateOutputType = {
    capacity: number | null
  }

  export type PMBTrackSumAggregateOutputType = {
    capacity: number | null
  }

  export type PMBTrackMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    capacity: number | null
    period: string | null
    requirements: string | null
    benefits: string | null
    feeEstimate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PMBTrackMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    capacity: number | null
    period: string | null
    requirements: string | null
    benefits: string | null
    feeEstimate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PMBTrackCountAggregateOutputType = {
    id: number
    code: number
    name: number
    description: number
    capacity: number
    period: number
    requirements: number
    benefits: number
    feeEstimate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PMBTrackAvgAggregateInputType = {
    capacity?: true
  }

  export type PMBTrackSumAggregateInputType = {
    capacity?: true
  }

  export type PMBTrackMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    capacity?: true
    period?: true
    requirements?: true
    benefits?: true
    feeEstimate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PMBTrackMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    capacity?: true
    period?: true
    requirements?: true
    benefits?: true
    feeEstimate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PMBTrackCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    capacity?: true
    period?: true
    requirements?: true
    benefits?: true
    feeEstimate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PMBTrackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PMBTrack to aggregate.
     */
    where?: PMBTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PMBTracks to fetch.
     */
    orderBy?: PMBTrackOrderByWithRelationInput | PMBTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PMBTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PMBTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PMBTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PMBTracks
    **/
    _count?: true | PMBTrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PMBTrackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PMBTrackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PMBTrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PMBTrackMaxAggregateInputType
  }

  export type GetPMBTrackAggregateType<T extends PMBTrackAggregateArgs> = {
        [P in keyof T & keyof AggregatePMBTrack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePMBTrack[P]>
      : GetScalarType<T[P], AggregatePMBTrack[P]>
  }




  export type PMBTrackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PMBTrackWhereInput
    orderBy?: PMBTrackOrderByWithAggregationInput | PMBTrackOrderByWithAggregationInput[]
    by: PMBTrackScalarFieldEnum[] | PMBTrackScalarFieldEnum
    having?: PMBTrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PMBTrackCountAggregateInputType | true
    _avg?: PMBTrackAvgAggregateInputType
    _sum?: PMBTrackSumAggregateInputType
    _min?: PMBTrackMinAggregateInputType
    _max?: PMBTrackMaxAggregateInputType
  }

  export type PMBTrackGroupByOutputType = {
    id: string
    code: string
    name: string
    description: string
    capacity: number
    period: string
    requirements: string
    benefits: string
    feeEstimate: string
    createdAt: Date
    updatedAt: Date
    _count: PMBTrackCountAggregateOutputType | null
    _avg: PMBTrackAvgAggregateOutputType | null
    _sum: PMBTrackSumAggregateOutputType | null
    _min: PMBTrackMinAggregateOutputType | null
    _max: PMBTrackMaxAggregateOutputType | null
  }

  type GetPMBTrackGroupByPayload<T extends PMBTrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PMBTrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PMBTrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PMBTrackGroupByOutputType[P]>
            : GetScalarType<T[P], PMBTrackGroupByOutputType[P]>
        }
      >
    >


  export type PMBTrackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    capacity?: boolean
    period?: boolean
    requirements?: boolean
    benefits?: boolean
    feeEstimate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pMBTrack"]>


  export type PMBTrackSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    capacity?: boolean
    period?: boolean
    requirements?: boolean
    benefits?: boolean
    feeEstimate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $PMBTrackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PMBTrack"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      description: string
      capacity: number
      period: string
      requirements: string
      benefits: string
      feeEstimate: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pMBTrack"]>
    composites: {}
  }

  type PMBTrackGetPayload<S extends boolean | null | undefined | PMBTrackDefaultArgs> = $Result.GetResult<Prisma.$PMBTrackPayload, S>

  type PMBTrackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PMBTrackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PMBTrackCountAggregateInputType | true
    }

  export interface PMBTrackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PMBTrack'], meta: { name: 'PMBTrack' } }
    /**
     * Find zero or one PMBTrack that matches the filter.
     * @param {PMBTrackFindUniqueArgs} args - Arguments to find a PMBTrack
     * @example
     * // Get one PMBTrack
     * const pMBTrack = await prisma.pMBTrack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PMBTrackFindUniqueArgs>(args: SelectSubset<T, PMBTrackFindUniqueArgs<ExtArgs>>): Prisma__PMBTrackClient<$Result.GetResult<Prisma.$PMBTrackPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PMBTrack that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PMBTrackFindUniqueOrThrowArgs} args - Arguments to find a PMBTrack
     * @example
     * // Get one PMBTrack
     * const pMBTrack = await prisma.pMBTrack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PMBTrackFindUniqueOrThrowArgs>(args: SelectSubset<T, PMBTrackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PMBTrackClient<$Result.GetResult<Prisma.$PMBTrackPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PMBTrack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PMBTrackFindFirstArgs} args - Arguments to find a PMBTrack
     * @example
     * // Get one PMBTrack
     * const pMBTrack = await prisma.pMBTrack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PMBTrackFindFirstArgs>(args?: SelectSubset<T, PMBTrackFindFirstArgs<ExtArgs>>): Prisma__PMBTrackClient<$Result.GetResult<Prisma.$PMBTrackPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PMBTrack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PMBTrackFindFirstOrThrowArgs} args - Arguments to find a PMBTrack
     * @example
     * // Get one PMBTrack
     * const pMBTrack = await prisma.pMBTrack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PMBTrackFindFirstOrThrowArgs>(args?: SelectSubset<T, PMBTrackFindFirstOrThrowArgs<ExtArgs>>): Prisma__PMBTrackClient<$Result.GetResult<Prisma.$PMBTrackPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PMBTracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PMBTrackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PMBTracks
     * const pMBTracks = await prisma.pMBTrack.findMany()
     * 
     * // Get first 10 PMBTracks
     * const pMBTracks = await prisma.pMBTrack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pMBTrackWithIdOnly = await prisma.pMBTrack.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PMBTrackFindManyArgs>(args?: SelectSubset<T, PMBTrackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PMBTrackPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PMBTrack.
     * @param {PMBTrackCreateArgs} args - Arguments to create a PMBTrack.
     * @example
     * // Create one PMBTrack
     * const PMBTrack = await prisma.pMBTrack.create({
     *   data: {
     *     // ... data to create a PMBTrack
     *   }
     * })
     * 
     */
    create<T extends PMBTrackCreateArgs>(args: SelectSubset<T, PMBTrackCreateArgs<ExtArgs>>): Prisma__PMBTrackClient<$Result.GetResult<Prisma.$PMBTrackPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PMBTracks.
     * @param {PMBTrackCreateManyArgs} args - Arguments to create many PMBTracks.
     * @example
     * // Create many PMBTracks
     * const pMBTrack = await prisma.pMBTrack.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PMBTrackCreateManyArgs>(args?: SelectSubset<T, PMBTrackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PMBTrack.
     * @param {PMBTrackDeleteArgs} args - Arguments to delete one PMBTrack.
     * @example
     * // Delete one PMBTrack
     * const PMBTrack = await prisma.pMBTrack.delete({
     *   where: {
     *     // ... filter to delete one PMBTrack
     *   }
     * })
     * 
     */
    delete<T extends PMBTrackDeleteArgs>(args: SelectSubset<T, PMBTrackDeleteArgs<ExtArgs>>): Prisma__PMBTrackClient<$Result.GetResult<Prisma.$PMBTrackPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PMBTrack.
     * @param {PMBTrackUpdateArgs} args - Arguments to update one PMBTrack.
     * @example
     * // Update one PMBTrack
     * const pMBTrack = await prisma.pMBTrack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PMBTrackUpdateArgs>(args: SelectSubset<T, PMBTrackUpdateArgs<ExtArgs>>): Prisma__PMBTrackClient<$Result.GetResult<Prisma.$PMBTrackPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PMBTracks.
     * @param {PMBTrackDeleteManyArgs} args - Arguments to filter PMBTracks to delete.
     * @example
     * // Delete a few PMBTracks
     * const { count } = await prisma.pMBTrack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PMBTrackDeleteManyArgs>(args?: SelectSubset<T, PMBTrackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PMBTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PMBTrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PMBTracks
     * const pMBTrack = await prisma.pMBTrack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PMBTrackUpdateManyArgs>(args: SelectSubset<T, PMBTrackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PMBTrack.
     * @param {PMBTrackUpsertArgs} args - Arguments to update or create a PMBTrack.
     * @example
     * // Update or create a PMBTrack
     * const pMBTrack = await prisma.pMBTrack.upsert({
     *   create: {
     *     // ... data to create a PMBTrack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PMBTrack we want to update
     *   }
     * })
     */
    upsert<T extends PMBTrackUpsertArgs>(args: SelectSubset<T, PMBTrackUpsertArgs<ExtArgs>>): Prisma__PMBTrackClient<$Result.GetResult<Prisma.$PMBTrackPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PMBTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PMBTrackCountArgs} args - Arguments to filter PMBTracks to count.
     * @example
     * // Count the number of PMBTracks
     * const count = await prisma.pMBTrack.count({
     *   where: {
     *     // ... the filter for the PMBTracks we want to count
     *   }
     * })
    **/
    count<T extends PMBTrackCountArgs>(
      args?: Subset<T, PMBTrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PMBTrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PMBTrack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PMBTrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PMBTrackAggregateArgs>(args: Subset<T, PMBTrackAggregateArgs>): Prisma.PrismaPromise<GetPMBTrackAggregateType<T>>

    /**
     * Group by PMBTrack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PMBTrackGroupByArgs} args - Group by arguments.
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
      T extends PMBTrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PMBTrackGroupByArgs['orderBy'] }
        : { orderBy?: PMBTrackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PMBTrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPMBTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PMBTrack model
   */
  readonly fields: PMBTrackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PMBTrack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PMBTrackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PMBTrack model
   */ 
  interface PMBTrackFieldRefs {
    readonly id: FieldRef<"PMBTrack", 'String'>
    readonly code: FieldRef<"PMBTrack", 'String'>
    readonly name: FieldRef<"PMBTrack", 'String'>
    readonly description: FieldRef<"PMBTrack", 'String'>
    readonly capacity: FieldRef<"PMBTrack", 'Int'>
    readonly period: FieldRef<"PMBTrack", 'String'>
    readonly requirements: FieldRef<"PMBTrack", 'String'>
    readonly benefits: FieldRef<"PMBTrack", 'String'>
    readonly feeEstimate: FieldRef<"PMBTrack", 'String'>
    readonly createdAt: FieldRef<"PMBTrack", 'DateTime'>
    readonly updatedAt: FieldRef<"PMBTrack", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PMBTrack findUnique
   */
  export type PMBTrackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PMBTrack
     */
    select?: PMBTrackSelect<ExtArgs> | null
    /**
     * Filter, which PMBTrack to fetch.
     */
    where: PMBTrackWhereUniqueInput
  }

  /**
   * PMBTrack findUniqueOrThrow
   */
  export type PMBTrackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PMBTrack
     */
    select?: PMBTrackSelect<ExtArgs> | null
    /**
     * Filter, which PMBTrack to fetch.
     */
    where: PMBTrackWhereUniqueInput
  }

  /**
   * PMBTrack findFirst
   */
  export type PMBTrackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PMBTrack
     */
    select?: PMBTrackSelect<ExtArgs> | null
    /**
     * Filter, which PMBTrack to fetch.
     */
    where?: PMBTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PMBTracks to fetch.
     */
    orderBy?: PMBTrackOrderByWithRelationInput | PMBTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PMBTracks.
     */
    cursor?: PMBTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PMBTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PMBTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PMBTracks.
     */
    distinct?: PMBTrackScalarFieldEnum | PMBTrackScalarFieldEnum[]
  }

  /**
   * PMBTrack findFirstOrThrow
   */
  export type PMBTrackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PMBTrack
     */
    select?: PMBTrackSelect<ExtArgs> | null
    /**
     * Filter, which PMBTrack to fetch.
     */
    where?: PMBTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PMBTracks to fetch.
     */
    orderBy?: PMBTrackOrderByWithRelationInput | PMBTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PMBTracks.
     */
    cursor?: PMBTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PMBTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PMBTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PMBTracks.
     */
    distinct?: PMBTrackScalarFieldEnum | PMBTrackScalarFieldEnum[]
  }

  /**
   * PMBTrack findMany
   */
  export type PMBTrackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PMBTrack
     */
    select?: PMBTrackSelect<ExtArgs> | null
    /**
     * Filter, which PMBTracks to fetch.
     */
    where?: PMBTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PMBTracks to fetch.
     */
    orderBy?: PMBTrackOrderByWithRelationInput | PMBTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PMBTracks.
     */
    cursor?: PMBTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PMBTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PMBTracks.
     */
    skip?: number
    distinct?: PMBTrackScalarFieldEnum | PMBTrackScalarFieldEnum[]
  }

  /**
   * PMBTrack create
   */
  export type PMBTrackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PMBTrack
     */
    select?: PMBTrackSelect<ExtArgs> | null
    /**
     * The data needed to create a PMBTrack.
     */
    data: XOR<PMBTrackCreateInput, PMBTrackUncheckedCreateInput>
  }

  /**
   * PMBTrack createMany
   */
  export type PMBTrackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PMBTracks.
     */
    data: PMBTrackCreateManyInput | PMBTrackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PMBTrack update
   */
  export type PMBTrackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PMBTrack
     */
    select?: PMBTrackSelect<ExtArgs> | null
    /**
     * The data needed to update a PMBTrack.
     */
    data: XOR<PMBTrackUpdateInput, PMBTrackUncheckedUpdateInput>
    /**
     * Choose, which PMBTrack to update.
     */
    where: PMBTrackWhereUniqueInput
  }

  /**
   * PMBTrack updateMany
   */
  export type PMBTrackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PMBTracks.
     */
    data: XOR<PMBTrackUpdateManyMutationInput, PMBTrackUncheckedUpdateManyInput>
    /**
     * Filter which PMBTracks to update
     */
    where?: PMBTrackWhereInput
  }

  /**
   * PMBTrack upsert
   */
  export type PMBTrackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PMBTrack
     */
    select?: PMBTrackSelect<ExtArgs> | null
    /**
     * The filter to search for the PMBTrack to update in case it exists.
     */
    where: PMBTrackWhereUniqueInput
    /**
     * In case the PMBTrack found by the `where` argument doesn't exist, create a new PMBTrack with this data.
     */
    create: XOR<PMBTrackCreateInput, PMBTrackUncheckedCreateInput>
    /**
     * In case the PMBTrack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PMBTrackUpdateInput, PMBTrackUncheckedUpdateInput>
  }

  /**
   * PMBTrack delete
   */
  export type PMBTrackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PMBTrack
     */
    select?: PMBTrackSelect<ExtArgs> | null
    /**
     * Filter which PMBTrack to delete.
     */
    where: PMBTrackWhereUniqueInput
  }

  /**
   * PMBTrack deleteMany
   */
  export type PMBTrackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PMBTracks to delete
     */
    where?: PMBTrackWhereInput
  }

  /**
   * PMBTrack without action
   */
  export type PMBTrackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PMBTrack
     */
    select?: PMBTrackSelect<ExtArgs> | null
  }


  /**
   * Model AcademicCalendarItem
   */

  export type AggregateAcademicCalendarItem = {
    _count: AcademicCalendarItemCountAggregateOutputType | null
    _min: AcademicCalendarItemMinAggregateOutputType | null
    _max: AcademicCalendarItemMaxAggregateOutputType | null
  }

  export type AcademicCalendarItemMinAggregateOutputType = {
    id: string | null
    title: string | null
    startDate: string | null
    endDate: string | null
    category: string | null
    semester: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AcademicCalendarItemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    startDate: string | null
    endDate: string | null
    category: string | null
    semester: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AcademicCalendarItemCountAggregateOutputType = {
    id: number
    title: number
    startDate: number
    endDate: number
    category: number
    semester: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AcademicCalendarItemMinAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    category?: true
    semester?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AcademicCalendarItemMaxAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    category?: true
    semester?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AcademicCalendarItemCountAggregateInputType = {
    id?: true
    title?: true
    startDate?: true
    endDate?: true
    category?: true
    semester?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AcademicCalendarItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicCalendarItem to aggregate.
     */
    where?: AcademicCalendarItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicCalendarItems to fetch.
     */
    orderBy?: AcademicCalendarItemOrderByWithRelationInput | AcademicCalendarItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcademicCalendarItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicCalendarItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicCalendarItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AcademicCalendarItems
    **/
    _count?: true | AcademicCalendarItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcademicCalendarItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcademicCalendarItemMaxAggregateInputType
  }

  export type GetAcademicCalendarItemAggregateType<T extends AcademicCalendarItemAggregateArgs> = {
        [P in keyof T & keyof AggregateAcademicCalendarItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcademicCalendarItem[P]>
      : GetScalarType<T[P], AggregateAcademicCalendarItem[P]>
  }




  export type AcademicCalendarItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademicCalendarItemWhereInput
    orderBy?: AcademicCalendarItemOrderByWithAggregationInput | AcademicCalendarItemOrderByWithAggregationInput[]
    by: AcademicCalendarItemScalarFieldEnum[] | AcademicCalendarItemScalarFieldEnum
    having?: AcademicCalendarItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcademicCalendarItemCountAggregateInputType | true
    _min?: AcademicCalendarItemMinAggregateInputType
    _max?: AcademicCalendarItemMaxAggregateInputType
  }

  export type AcademicCalendarItemGroupByOutputType = {
    id: string
    title: string
    startDate: string
    endDate: string
    category: string
    semester: string
    createdAt: Date
    updatedAt: Date
    _count: AcademicCalendarItemCountAggregateOutputType | null
    _min: AcademicCalendarItemMinAggregateOutputType | null
    _max: AcademicCalendarItemMaxAggregateOutputType | null
  }

  type GetAcademicCalendarItemGroupByPayload<T extends AcademicCalendarItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcademicCalendarItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcademicCalendarItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcademicCalendarItemGroupByOutputType[P]>
            : GetScalarType<T[P], AcademicCalendarItemGroupByOutputType[P]>
        }
      >
    >


  export type AcademicCalendarItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    category?: boolean
    semester?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["academicCalendarItem"]>


  export type AcademicCalendarItemSelectScalar = {
    id?: boolean
    title?: boolean
    startDate?: boolean
    endDate?: boolean
    category?: boolean
    semester?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AcademicCalendarItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AcademicCalendarItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      startDate: string
      endDate: string
      category: string
      semester: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["academicCalendarItem"]>
    composites: {}
  }

  type AcademicCalendarItemGetPayload<S extends boolean | null | undefined | AcademicCalendarItemDefaultArgs> = $Result.GetResult<Prisma.$AcademicCalendarItemPayload, S>

  type AcademicCalendarItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AcademicCalendarItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AcademicCalendarItemCountAggregateInputType | true
    }

  export interface AcademicCalendarItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AcademicCalendarItem'], meta: { name: 'AcademicCalendarItem' } }
    /**
     * Find zero or one AcademicCalendarItem that matches the filter.
     * @param {AcademicCalendarItemFindUniqueArgs} args - Arguments to find a AcademicCalendarItem
     * @example
     * // Get one AcademicCalendarItem
     * const academicCalendarItem = await prisma.academicCalendarItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcademicCalendarItemFindUniqueArgs>(args: SelectSubset<T, AcademicCalendarItemFindUniqueArgs<ExtArgs>>): Prisma__AcademicCalendarItemClient<$Result.GetResult<Prisma.$AcademicCalendarItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AcademicCalendarItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AcademicCalendarItemFindUniqueOrThrowArgs} args - Arguments to find a AcademicCalendarItem
     * @example
     * // Get one AcademicCalendarItem
     * const academicCalendarItem = await prisma.academicCalendarItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcademicCalendarItemFindUniqueOrThrowArgs>(args: SelectSubset<T, AcademicCalendarItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcademicCalendarItemClient<$Result.GetResult<Prisma.$AcademicCalendarItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AcademicCalendarItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicCalendarItemFindFirstArgs} args - Arguments to find a AcademicCalendarItem
     * @example
     * // Get one AcademicCalendarItem
     * const academicCalendarItem = await prisma.academicCalendarItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcademicCalendarItemFindFirstArgs>(args?: SelectSubset<T, AcademicCalendarItemFindFirstArgs<ExtArgs>>): Prisma__AcademicCalendarItemClient<$Result.GetResult<Prisma.$AcademicCalendarItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AcademicCalendarItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicCalendarItemFindFirstOrThrowArgs} args - Arguments to find a AcademicCalendarItem
     * @example
     * // Get one AcademicCalendarItem
     * const academicCalendarItem = await prisma.academicCalendarItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcademicCalendarItemFindFirstOrThrowArgs>(args?: SelectSubset<T, AcademicCalendarItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcademicCalendarItemClient<$Result.GetResult<Prisma.$AcademicCalendarItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AcademicCalendarItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicCalendarItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcademicCalendarItems
     * const academicCalendarItems = await prisma.academicCalendarItem.findMany()
     * 
     * // Get first 10 AcademicCalendarItems
     * const academicCalendarItems = await prisma.academicCalendarItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const academicCalendarItemWithIdOnly = await prisma.academicCalendarItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcademicCalendarItemFindManyArgs>(args?: SelectSubset<T, AcademicCalendarItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicCalendarItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AcademicCalendarItem.
     * @param {AcademicCalendarItemCreateArgs} args - Arguments to create a AcademicCalendarItem.
     * @example
     * // Create one AcademicCalendarItem
     * const AcademicCalendarItem = await prisma.academicCalendarItem.create({
     *   data: {
     *     // ... data to create a AcademicCalendarItem
     *   }
     * })
     * 
     */
    create<T extends AcademicCalendarItemCreateArgs>(args: SelectSubset<T, AcademicCalendarItemCreateArgs<ExtArgs>>): Prisma__AcademicCalendarItemClient<$Result.GetResult<Prisma.$AcademicCalendarItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AcademicCalendarItems.
     * @param {AcademicCalendarItemCreateManyArgs} args - Arguments to create many AcademicCalendarItems.
     * @example
     * // Create many AcademicCalendarItems
     * const academicCalendarItem = await prisma.academicCalendarItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcademicCalendarItemCreateManyArgs>(args?: SelectSubset<T, AcademicCalendarItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AcademicCalendarItem.
     * @param {AcademicCalendarItemDeleteArgs} args - Arguments to delete one AcademicCalendarItem.
     * @example
     * // Delete one AcademicCalendarItem
     * const AcademicCalendarItem = await prisma.academicCalendarItem.delete({
     *   where: {
     *     // ... filter to delete one AcademicCalendarItem
     *   }
     * })
     * 
     */
    delete<T extends AcademicCalendarItemDeleteArgs>(args: SelectSubset<T, AcademicCalendarItemDeleteArgs<ExtArgs>>): Prisma__AcademicCalendarItemClient<$Result.GetResult<Prisma.$AcademicCalendarItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AcademicCalendarItem.
     * @param {AcademicCalendarItemUpdateArgs} args - Arguments to update one AcademicCalendarItem.
     * @example
     * // Update one AcademicCalendarItem
     * const academicCalendarItem = await prisma.academicCalendarItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcademicCalendarItemUpdateArgs>(args: SelectSubset<T, AcademicCalendarItemUpdateArgs<ExtArgs>>): Prisma__AcademicCalendarItemClient<$Result.GetResult<Prisma.$AcademicCalendarItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AcademicCalendarItems.
     * @param {AcademicCalendarItemDeleteManyArgs} args - Arguments to filter AcademicCalendarItems to delete.
     * @example
     * // Delete a few AcademicCalendarItems
     * const { count } = await prisma.academicCalendarItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcademicCalendarItemDeleteManyArgs>(args?: SelectSubset<T, AcademicCalendarItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcademicCalendarItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicCalendarItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcademicCalendarItems
     * const academicCalendarItem = await prisma.academicCalendarItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcademicCalendarItemUpdateManyArgs>(args: SelectSubset<T, AcademicCalendarItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AcademicCalendarItem.
     * @param {AcademicCalendarItemUpsertArgs} args - Arguments to update or create a AcademicCalendarItem.
     * @example
     * // Update or create a AcademicCalendarItem
     * const academicCalendarItem = await prisma.academicCalendarItem.upsert({
     *   create: {
     *     // ... data to create a AcademicCalendarItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcademicCalendarItem we want to update
     *   }
     * })
     */
    upsert<T extends AcademicCalendarItemUpsertArgs>(args: SelectSubset<T, AcademicCalendarItemUpsertArgs<ExtArgs>>): Prisma__AcademicCalendarItemClient<$Result.GetResult<Prisma.$AcademicCalendarItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AcademicCalendarItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicCalendarItemCountArgs} args - Arguments to filter AcademicCalendarItems to count.
     * @example
     * // Count the number of AcademicCalendarItems
     * const count = await prisma.academicCalendarItem.count({
     *   where: {
     *     // ... the filter for the AcademicCalendarItems we want to count
     *   }
     * })
    **/
    count<T extends AcademicCalendarItemCountArgs>(
      args?: Subset<T, AcademicCalendarItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcademicCalendarItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AcademicCalendarItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicCalendarItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcademicCalendarItemAggregateArgs>(args: Subset<T, AcademicCalendarItemAggregateArgs>): Prisma.PrismaPromise<GetAcademicCalendarItemAggregateType<T>>

    /**
     * Group by AcademicCalendarItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicCalendarItemGroupByArgs} args - Group by arguments.
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
      T extends AcademicCalendarItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcademicCalendarItemGroupByArgs['orderBy'] }
        : { orderBy?: AcademicCalendarItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AcademicCalendarItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcademicCalendarItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AcademicCalendarItem model
   */
  readonly fields: AcademicCalendarItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AcademicCalendarItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcademicCalendarItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AcademicCalendarItem model
   */ 
  interface AcademicCalendarItemFieldRefs {
    readonly id: FieldRef<"AcademicCalendarItem", 'String'>
    readonly title: FieldRef<"AcademicCalendarItem", 'String'>
    readonly startDate: FieldRef<"AcademicCalendarItem", 'String'>
    readonly endDate: FieldRef<"AcademicCalendarItem", 'String'>
    readonly category: FieldRef<"AcademicCalendarItem", 'String'>
    readonly semester: FieldRef<"AcademicCalendarItem", 'String'>
    readonly createdAt: FieldRef<"AcademicCalendarItem", 'DateTime'>
    readonly updatedAt: FieldRef<"AcademicCalendarItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AcademicCalendarItem findUnique
   */
  export type AcademicCalendarItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendarItem
     */
    select?: AcademicCalendarItemSelect<ExtArgs> | null
    /**
     * Filter, which AcademicCalendarItem to fetch.
     */
    where: AcademicCalendarItemWhereUniqueInput
  }

  /**
   * AcademicCalendarItem findUniqueOrThrow
   */
  export type AcademicCalendarItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendarItem
     */
    select?: AcademicCalendarItemSelect<ExtArgs> | null
    /**
     * Filter, which AcademicCalendarItem to fetch.
     */
    where: AcademicCalendarItemWhereUniqueInput
  }

  /**
   * AcademicCalendarItem findFirst
   */
  export type AcademicCalendarItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendarItem
     */
    select?: AcademicCalendarItemSelect<ExtArgs> | null
    /**
     * Filter, which AcademicCalendarItem to fetch.
     */
    where?: AcademicCalendarItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicCalendarItems to fetch.
     */
    orderBy?: AcademicCalendarItemOrderByWithRelationInput | AcademicCalendarItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicCalendarItems.
     */
    cursor?: AcademicCalendarItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicCalendarItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicCalendarItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicCalendarItems.
     */
    distinct?: AcademicCalendarItemScalarFieldEnum | AcademicCalendarItemScalarFieldEnum[]
  }

  /**
   * AcademicCalendarItem findFirstOrThrow
   */
  export type AcademicCalendarItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendarItem
     */
    select?: AcademicCalendarItemSelect<ExtArgs> | null
    /**
     * Filter, which AcademicCalendarItem to fetch.
     */
    where?: AcademicCalendarItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicCalendarItems to fetch.
     */
    orderBy?: AcademicCalendarItemOrderByWithRelationInput | AcademicCalendarItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicCalendarItems.
     */
    cursor?: AcademicCalendarItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicCalendarItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicCalendarItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicCalendarItems.
     */
    distinct?: AcademicCalendarItemScalarFieldEnum | AcademicCalendarItemScalarFieldEnum[]
  }

  /**
   * AcademicCalendarItem findMany
   */
  export type AcademicCalendarItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendarItem
     */
    select?: AcademicCalendarItemSelect<ExtArgs> | null
    /**
     * Filter, which AcademicCalendarItems to fetch.
     */
    where?: AcademicCalendarItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicCalendarItems to fetch.
     */
    orderBy?: AcademicCalendarItemOrderByWithRelationInput | AcademicCalendarItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AcademicCalendarItems.
     */
    cursor?: AcademicCalendarItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicCalendarItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicCalendarItems.
     */
    skip?: number
    distinct?: AcademicCalendarItemScalarFieldEnum | AcademicCalendarItemScalarFieldEnum[]
  }

  /**
   * AcademicCalendarItem create
   */
  export type AcademicCalendarItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendarItem
     */
    select?: AcademicCalendarItemSelect<ExtArgs> | null
    /**
     * The data needed to create a AcademicCalendarItem.
     */
    data: XOR<AcademicCalendarItemCreateInput, AcademicCalendarItemUncheckedCreateInput>
  }

  /**
   * AcademicCalendarItem createMany
   */
  export type AcademicCalendarItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcademicCalendarItems.
     */
    data: AcademicCalendarItemCreateManyInput | AcademicCalendarItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcademicCalendarItem update
   */
  export type AcademicCalendarItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendarItem
     */
    select?: AcademicCalendarItemSelect<ExtArgs> | null
    /**
     * The data needed to update a AcademicCalendarItem.
     */
    data: XOR<AcademicCalendarItemUpdateInput, AcademicCalendarItemUncheckedUpdateInput>
    /**
     * Choose, which AcademicCalendarItem to update.
     */
    where: AcademicCalendarItemWhereUniqueInput
  }

  /**
   * AcademicCalendarItem updateMany
   */
  export type AcademicCalendarItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AcademicCalendarItems.
     */
    data: XOR<AcademicCalendarItemUpdateManyMutationInput, AcademicCalendarItemUncheckedUpdateManyInput>
    /**
     * Filter which AcademicCalendarItems to update
     */
    where?: AcademicCalendarItemWhereInput
  }

  /**
   * AcademicCalendarItem upsert
   */
  export type AcademicCalendarItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendarItem
     */
    select?: AcademicCalendarItemSelect<ExtArgs> | null
    /**
     * The filter to search for the AcademicCalendarItem to update in case it exists.
     */
    where: AcademicCalendarItemWhereUniqueInput
    /**
     * In case the AcademicCalendarItem found by the `where` argument doesn't exist, create a new AcademicCalendarItem with this data.
     */
    create: XOR<AcademicCalendarItemCreateInput, AcademicCalendarItemUncheckedCreateInput>
    /**
     * In case the AcademicCalendarItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcademicCalendarItemUpdateInput, AcademicCalendarItemUncheckedUpdateInput>
  }

  /**
   * AcademicCalendarItem delete
   */
  export type AcademicCalendarItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendarItem
     */
    select?: AcademicCalendarItemSelect<ExtArgs> | null
    /**
     * Filter which AcademicCalendarItem to delete.
     */
    where: AcademicCalendarItemWhereUniqueInput
  }

  /**
   * AcademicCalendarItem deleteMany
   */
  export type AcademicCalendarItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicCalendarItems to delete
     */
    where?: AcademicCalendarItemWhereInput
  }

  /**
   * AcademicCalendarItem without action
   */
  export type AcademicCalendarItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicCalendarItem
     */
    select?: AcademicCalendarItemSelect<ExtArgs> | null
  }


  /**
   * Model FAQItem
   */

  export type AggregateFAQItem = {
    _count: FAQItemCountAggregateOutputType | null
    _min: FAQItemMinAggregateOutputType | null
    _max: FAQItemMaxAggregateOutputType | null
  }

  export type FAQItemMinAggregateOutputType = {
    id: string | null
    category: string | null
    question: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FAQItemMaxAggregateOutputType = {
    id: string | null
    category: string | null
    question: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FAQItemCountAggregateOutputType = {
    id: number
    category: number
    question: number
    answer: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FAQItemMinAggregateInputType = {
    id?: true
    category?: true
    question?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FAQItemMaxAggregateInputType = {
    id?: true
    category?: true
    question?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FAQItemCountAggregateInputType = {
    id?: true
    category?: true
    question?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FAQItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQItem to aggregate.
     */
    where?: FAQItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQItems to fetch.
     */
    orderBy?: FAQItemOrderByWithRelationInput | FAQItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FAQItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FAQItems
    **/
    _count?: true | FAQItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FAQItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FAQItemMaxAggregateInputType
  }

  export type GetFAQItemAggregateType<T extends FAQItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFAQItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFAQItem[P]>
      : GetScalarType<T[P], AggregateFAQItem[P]>
  }




  export type FAQItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FAQItemWhereInput
    orderBy?: FAQItemOrderByWithAggregationInput | FAQItemOrderByWithAggregationInput[]
    by: FAQItemScalarFieldEnum[] | FAQItemScalarFieldEnum
    having?: FAQItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FAQItemCountAggregateInputType | true
    _min?: FAQItemMinAggregateInputType
    _max?: FAQItemMaxAggregateInputType
  }

  export type FAQItemGroupByOutputType = {
    id: string
    category: string
    question: string
    answer: string
    createdAt: Date
    updatedAt: Date
    _count: FAQItemCountAggregateOutputType | null
    _min: FAQItemMinAggregateOutputType | null
    _max: FAQItemMaxAggregateOutputType | null
  }

  type GetFAQItemGroupByPayload<T extends FAQItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FAQItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FAQItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FAQItemGroupByOutputType[P]>
            : GetScalarType<T[P], FAQItemGroupByOutputType[P]>
        }
      >
    >


  export type FAQItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fAQItem"]>


  export type FAQItemSelectScalar = {
    id?: boolean
    category?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $FAQItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FAQItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category: string
      question: string
      answer: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fAQItem"]>
    composites: {}
  }

  type FAQItemGetPayload<S extends boolean | null | undefined | FAQItemDefaultArgs> = $Result.GetResult<Prisma.$FAQItemPayload, S>

  type FAQItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FAQItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FAQItemCountAggregateInputType | true
    }

  export interface FAQItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FAQItem'], meta: { name: 'FAQItem' } }
    /**
     * Find zero or one FAQItem that matches the filter.
     * @param {FAQItemFindUniqueArgs} args - Arguments to find a FAQItem
     * @example
     * // Get one FAQItem
     * const fAQItem = await prisma.fAQItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FAQItemFindUniqueArgs>(args: SelectSubset<T, FAQItemFindUniqueArgs<ExtArgs>>): Prisma__FAQItemClient<$Result.GetResult<Prisma.$FAQItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FAQItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FAQItemFindUniqueOrThrowArgs} args - Arguments to find a FAQItem
     * @example
     * // Get one FAQItem
     * const fAQItem = await prisma.fAQItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FAQItemFindUniqueOrThrowArgs>(args: SelectSubset<T, FAQItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FAQItemClient<$Result.GetResult<Prisma.$FAQItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FAQItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQItemFindFirstArgs} args - Arguments to find a FAQItem
     * @example
     * // Get one FAQItem
     * const fAQItem = await prisma.fAQItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FAQItemFindFirstArgs>(args?: SelectSubset<T, FAQItemFindFirstArgs<ExtArgs>>): Prisma__FAQItemClient<$Result.GetResult<Prisma.$FAQItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FAQItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQItemFindFirstOrThrowArgs} args - Arguments to find a FAQItem
     * @example
     * // Get one FAQItem
     * const fAQItem = await prisma.fAQItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FAQItemFindFirstOrThrowArgs>(args?: SelectSubset<T, FAQItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__FAQItemClient<$Result.GetResult<Prisma.$FAQItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FAQItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FAQItems
     * const fAQItems = await prisma.fAQItem.findMany()
     * 
     * // Get first 10 FAQItems
     * const fAQItems = await prisma.fAQItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fAQItemWithIdOnly = await prisma.fAQItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FAQItemFindManyArgs>(args?: SelectSubset<T, FAQItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FAQItem.
     * @param {FAQItemCreateArgs} args - Arguments to create a FAQItem.
     * @example
     * // Create one FAQItem
     * const FAQItem = await prisma.fAQItem.create({
     *   data: {
     *     // ... data to create a FAQItem
     *   }
     * })
     * 
     */
    create<T extends FAQItemCreateArgs>(args: SelectSubset<T, FAQItemCreateArgs<ExtArgs>>): Prisma__FAQItemClient<$Result.GetResult<Prisma.$FAQItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FAQItems.
     * @param {FAQItemCreateManyArgs} args - Arguments to create many FAQItems.
     * @example
     * // Create many FAQItems
     * const fAQItem = await prisma.fAQItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FAQItemCreateManyArgs>(args?: SelectSubset<T, FAQItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FAQItem.
     * @param {FAQItemDeleteArgs} args - Arguments to delete one FAQItem.
     * @example
     * // Delete one FAQItem
     * const FAQItem = await prisma.fAQItem.delete({
     *   where: {
     *     // ... filter to delete one FAQItem
     *   }
     * })
     * 
     */
    delete<T extends FAQItemDeleteArgs>(args: SelectSubset<T, FAQItemDeleteArgs<ExtArgs>>): Prisma__FAQItemClient<$Result.GetResult<Prisma.$FAQItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FAQItem.
     * @param {FAQItemUpdateArgs} args - Arguments to update one FAQItem.
     * @example
     * // Update one FAQItem
     * const fAQItem = await prisma.fAQItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FAQItemUpdateArgs>(args: SelectSubset<T, FAQItemUpdateArgs<ExtArgs>>): Prisma__FAQItemClient<$Result.GetResult<Prisma.$FAQItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FAQItems.
     * @param {FAQItemDeleteManyArgs} args - Arguments to filter FAQItems to delete.
     * @example
     * // Delete a few FAQItems
     * const { count } = await prisma.fAQItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FAQItemDeleteManyArgs>(args?: SelectSubset<T, FAQItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FAQItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FAQItems
     * const fAQItem = await prisma.fAQItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FAQItemUpdateManyArgs>(args: SelectSubset<T, FAQItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FAQItem.
     * @param {FAQItemUpsertArgs} args - Arguments to update or create a FAQItem.
     * @example
     * // Update or create a FAQItem
     * const fAQItem = await prisma.fAQItem.upsert({
     *   create: {
     *     // ... data to create a FAQItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FAQItem we want to update
     *   }
     * })
     */
    upsert<T extends FAQItemUpsertArgs>(args: SelectSubset<T, FAQItemUpsertArgs<ExtArgs>>): Prisma__FAQItemClient<$Result.GetResult<Prisma.$FAQItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FAQItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQItemCountArgs} args - Arguments to filter FAQItems to count.
     * @example
     * // Count the number of FAQItems
     * const count = await prisma.fAQItem.count({
     *   where: {
     *     // ... the filter for the FAQItems we want to count
     *   }
     * })
    **/
    count<T extends FAQItemCountArgs>(
      args?: Subset<T, FAQItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FAQItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FAQItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FAQItemAggregateArgs>(args: Subset<T, FAQItemAggregateArgs>): Prisma.PrismaPromise<GetFAQItemAggregateType<T>>

    /**
     * Group by FAQItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQItemGroupByArgs} args - Group by arguments.
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
      T extends FAQItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FAQItemGroupByArgs['orderBy'] }
        : { orderBy?: FAQItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FAQItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFAQItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FAQItem model
   */
  readonly fields: FAQItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FAQItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FAQItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FAQItem model
   */ 
  interface FAQItemFieldRefs {
    readonly id: FieldRef<"FAQItem", 'String'>
    readonly category: FieldRef<"FAQItem", 'String'>
    readonly question: FieldRef<"FAQItem", 'String'>
    readonly answer: FieldRef<"FAQItem", 'String'>
    readonly createdAt: FieldRef<"FAQItem", 'DateTime'>
    readonly updatedAt: FieldRef<"FAQItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FAQItem findUnique
   */
  export type FAQItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQItem
     */
    select?: FAQItemSelect<ExtArgs> | null
    /**
     * Filter, which FAQItem to fetch.
     */
    where: FAQItemWhereUniqueInput
  }

  /**
   * FAQItem findUniqueOrThrow
   */
  export type FAQItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQItem
     */
    select?: FAQItemSelect<ExtArgs> | null
    /**
     * Filter, which FAQItem to fetch.
     */
    where: FAQItemWhereUniqueInput
  }

  /**
   * FAQItem findFirst
   */
  export type FAQItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQItem
     */
    select?: FAQItemSelect<ExtArgs> | null
    /**
     * Filter, which FAQItem to fetch.
     */
    where?: FAQItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQItems to fetch.
     */
    orderBy?: FAQItemOrderByWithRelationInput | FAQItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQItems.
     */
    cursor?: FAQItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQItems.
     */
    distinct?: FAQItemScalarFieldEnum | FAQItemScalarFieldEnum[]
  }

  /**
   * FAQItem findFirstOrThrow
   */
  export type FAQItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQItem
     */
    select?: FAQItemSelect<ExtArgs> | null
    /**
     * Filter, which FAQItem to fetch.
     */
    where?: FAQItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQItems to fetch.
     */
    orderBy?: FAQItemOrderByWithRelationInput | FAQItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQItems.
     */
    cursor?: FAQItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQItems.
     */
    distinct?: FAQItemScalarFieldEnum | FAQItemScalarFieldEnum[]
  }

  /**
   * FAQItem findMany
   */
  export type FAQItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQItem
     */
    select?: FAQItemSelect<ExtArgs> | null
    /**
     * Filter, which FAQItems to fetch.
     */
    where?: FAQItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQItems to fetch.
     */
    orderBy?: FAQItemOrderByWithRelationInput | FAQItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FAQItems.
     */
    cursor?: FAQItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQItems.
     */
    skip?: number
    distinct?: FAQItemScalarFieldEnum | FAQItemScalarFieldEnum[]
  }

  /**
   * FAQItem create
   */
  export type FAQItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQItem
     */
    select?: FAQItemSelect<ExtArgs> | null
    /**
     * The data needed to create a FAQItem.
     */
    data: XOR<FAQItemCreateInput, FAQItemUncheckedCreateInput>
  }

  /**
   * FAQItem createMany
   */
  export type FAQItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FAQItems.
     */
    data: FAQItemCreateManyInput | FAQItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FAQItem update
   */
  export type FAQItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQItem
     */
    select?: FAQItemSelect<ExtArgs> | null
    /**
     * The data needed to update a FAQItem.
     */
    data: XOR<FAQItemUpdateInput, FAQItemUncheckedUpdateInput>
    /**
     * Choose, which FAQItem to update.
     */
    where: FAQItemWhereUniqueInput
  }

  /**
   * FAQItem updateMany
   */
  export type FAQItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FAQItems.
     */
    data: XOR<FAQItemUpdateManyMutationInput, FAQItemUncheckedUpdateManyInput>
    /**
     * Filter which FAQItems to update
     */
    where?: FAQItemWhereInput
  }

  /**
   * FAQItem upsert
   */
  export type FAQItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQItem
     */
    select?: FAQItemSelect<ExtArgs> | null
    /**
     * The filter to search for the FAQItem to update in case it exists.
     */
    where: FAQItemWhereUniqueInput
    /**
     * In case the FAQItem found by the `where` argument doesn't exist, create a new FAQItem with this data.
     */
    create: XOR<FAQItemCreateInput, FAQItemUncheckedCreateInput>
    /**
     * In case the FAQItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FAQItemUpdateInput, FAQItemUncheckedUpdateInput>
  }

  /**
   * FAQItem delete
   */
  export type FAQItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQItem
     */
    select?: FAQItemSelect<ExtArgs> | null
    /**
     * Filter which FAQItem to delete.
     */
    where: FAQItemWhereUniqueInput
  }

  /**
   * FAQItem deleteMany
   */
  export type FAQItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQItems to delete
     */
    where?: FAQItemWhereInput
  }

  /**
   * FAQItem without action
   */
  export type FAQItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQItem
     */
    select?: FAQItemSelect<ExtArgs> | null
  }


  /**
   * Model QuickLink
   */

  export type AggregateQuickLink = {
    _count: QuickLinkCountAggregateOutputType | null
    _min: QuickLinkMinAggregateOutputType | null
    _max: QuickLinkMaxAggregateOutputType | null
  }

  export type QuickLinkMinAggregateOutputType = {
    id: string | null
    name: string | null
    desc: string | null
    url: string | null
    iconName: string | null
    badge: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuickLinkMaxAggregateOutputType = {
    id: string | null
    name: string | null
    desc: string | null
    url: string | null
    iconName: string | null
    badge: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuickLinkCountAggregateOutputType = {
    id: number
    name: number
    desc: number
    url: number
    iconName: number
    badge: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuickLinkMinAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    url?: true
    iconName?: true
    badge?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuickLinkMaxAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    url?: true
    iconName?: true
    badge?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuickLinkCountAggregateInputType = {
    id?: true
    name?: true
    desc?: true
    url?: true
    iconName?: true
    badge?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuickLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuickLink to aggregate.
     */
    where?: QuickLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuickLinks to fetch.
     */
    orderBy?: QuickLinkOrderByWithRelationInput | QuickLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuickLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuickLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuickLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuickLinks
    **/
    _count?: true | QuickLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuickLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuickLinkMaxAggregateInputType
  }

  export type GetQuickLinkAggregateType<T extends QuickLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateQuickLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuickLink[P]>
      : GetScalarType<T[P], AggregateQuickLink[P]>
  }




  export type QuickLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuickLinkWhereInput
    orderBy?: QuickLinkOrderByWithAggregationInput | QuickLinkOrderByWithAggregationInput[]
    by: QuickLinkScalarFieldEnum[] | QuickLinkScalarFieldEnum
    having?: QuickLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuickLinkCountAggregateInputType | true
    _min?: QuickLinkMinAggregateInputType
    _max?: QuickLinkMaxAggregateInputType
  }

  export type QuickLinkGroupByOutputType = {
    id: string
    name: string
    desc: string
    url: string
    iconName: string
    badge: string | null
    createdAt: Date
    updatedAt: Date
    _count: QuickLinkCountAggregateOutputType | null
    _min: QuickLinkMinAggregateOutputType | null
    _max: QuickLinkMaxAggregateOutputType | null
  }

  type GetQuickLinkGroupByPayload<T extends QuickLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuickLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuickLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuickLinkGroupByOutputType[P]>
            : GetScalarType<T[P], QuickLinkGroupByOutputType[P]>
        }
      >
    >


  export type QuickLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    desc?: boolean
    url?: boolean
    iconName?: boolean
    badge?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["quickLink"]>


  export type QuickLinkSelectScalar = {
    id?: boolean
    name?: boolean
    desc?: boolean
    url?: boolean
    iconName?: boolean
    badge?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $QuickLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuickLink"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      desc: string
      url: string
      iconName: string
      badge: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quickLink"]>
    composites: {}
  }

  type QuickLinkGetPayload<S extends boolean | null | undefined | QuickLinkDefaultArgs> = $Result.GetResult<Prisma.$QuickLinkPayload, S>

  type QuickLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuickLinkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuickLinkCountAggregateInputType | true
    }

  export interface QuickLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuickLink'], meta: { name: 'QuickLink' } }
    /**
     * Find zero or one QuickLink that matches the filter.
     * @param {QuickLinkFindUniqueArgs} args - Arguments to find a QuickLink
     * @example
     * // Get one QuickLink
     * const quickLink = await prisma.quickLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuickLinkFindUniqueArgs>(args: SelectSubset<T, QuickLinkFindUniqueArgs<ExtArgs>>): Prisma__QuickLinkClient<$Result.GetResult<Prisma.$QuickLinkPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one QuickLink that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuickLinkFindUniqueOrThrowArgs} args - Arguments to find a QuickLink
     * @example
     * // Get one QuickLink
     * const quickLink = await prisma.quickLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuickLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, QuickLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuickLinkClient<$Result.GetResult<Prisma.$QuickLinkPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first QuickLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickLinkFindFirstArgs} args - Arguments to find a QuickLink
     * @example
     * // Get one QuickLink
     * const quickLink = await prisma.quickLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuickLinkFindFirstArgs>(args?: SelectSubset<T, QuickLinkFindFirstArgs<ExtArgs>>): Prisma__QuickLinkClient<$Result.GetResult<Prisma.$QuickLinkPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first QuickLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickLinkFindFirstOrThrowArgs} args - Arguments to find a QuickLink
     * @example
     * // Get one QuickLink
     * const quickLink = await prisma.quickLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuickLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, QuickLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuickLinkClient<$Result.GetResult<Prisma.$QuickLinkPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more QuickLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuickLinks
     * const quickLinks = await prisma.quickLink.findMany()
     * 
     * // Get first 10 QuickLinks
     * const quickLinks = await prisma.quickLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quickLinkWithIdOnly = await prisma.quickLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuickLinkFindManyArgs>(args?: SelectSubset<T, QuickLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuickLinkPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a QuickLink.
     * @param {QuickLinkCreateArgs} args - Arguments to create a QuickLink.
     * @example
     * // Create one QuickLink
     * const QuickLink = await prisma.quickLink.create({
     *   data: {
     *     // ... data to create a QuickLink
     *   }
     * })
     * 
     */
    create<T extends QuickLinkCreateArgs>(args: SelectSubset<T, QuickLinkCreateArgs<ExtArgs>>): Prisma__QuickLinkClient<$Result.GetResult<Prisma.$QuickLinkPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many QuickLinks.
     * @param {QuickLinkCreateManyArgs} args - Arguments to create many QuickLinks.
     * @example
     * // Create many QuickLinks
     * const quickLink = await prisma.quickLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuickLinkCreateManyArgs>(args?: SelectSubset<T, QuickLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuickLink.
     * @param {QuickLinkDeleteArgs} args - Arguments to delete one QuickLink.
     * @example
     * // Delete one QuickLink
     * const QuickLink = await prisma.quickLink.delete({
     *   where: {
     *     // ... filter to delete one QuickLink
     *   }
     * })
     * 
     */
    delete<T extends QuickLinkDeleteArgs>(args: SelectSubset<T, QuickLinkDeleteArgs<ExtArgs>>): Prisma__QuickLinkClient<$Result.GetResult<Prisma.$QuickLinkPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one QuickLink.
     * @param {QuickLinkUpdateArgs} args - Arguments to update one QuickLink.
     * @example
     * // Update one QuickLink
     * const quickLink = await prisma.quickLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuickLinkUpdateArgs>(args: SelectSubset<T, QuickLinkUpdateArgs<ExtArgs>>): Prisma__QuickLinkClient<$Result.GetResult<Prisma.$QuickLinkPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more QuickLinks.
     * @param {QuickLinkDeleteManyArgs} args - Arguments to filter QuickLinks to delete.
     * @example
     * // Delete a few QuickLinks
     * const { count } = await prisma.quickLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuickLinkDeleteManyArgs>(args?: SelectSubset<T, QuickLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuickLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuickLinks
     * const quickLink = await prisma.quickLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuickLinkUpdateManyArgs>(args: SelectSubset<T, QuickLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuickLink.
     * @param {QuickLinkUpsertArgs} args - Arguments to update or create a QuickLink.
     * @example
     * // Update or create a QuickLink
     * const quickLink = await prisma.quickLink.upsert({
     *   create: {
     *     // ... data to create a QuickLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuickLink we want to update
     *   }
     * })
     */
    upsert<T extends QuickLinkUpsertArgs>(args: SelectSubset<T, QuickLinkUpsertArgs<ExtArgs>>): Prisma__QuickLinkClient<$Result.GetResult<Prisma.$QuickLinkPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of QuickLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickLinkCountArgs} args - Arguments to filter QuickLinks to count.
     * @example
     * // Count the number of QuickLinks
     * const count = await prisma.quickLink.count({
     *   where: {
     *     // ... the filter for the QuickLinks we want to count
     *   }
     * })
    **/
    count<T extends QuickLinkCountArgs>(
      args?: Subset<T, QuickLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuickLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuickLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuickLinkAggregateArgs>(args: Subset<T, QuickLinkAggregateArgs>): Prisma.PrismaPromise<GetQuickLinkAggregateType<T>>

    /**
     * Group by QuickLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickLinkGroupByArgs} args - Group by arguments.
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
      T extends QuickLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuickLinkGroupByArgs['orderBy'] }
        : { orderBy?: QuickLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuickLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuickLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuickLink model
   */
  readonly fields: QuickLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuickLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuickLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the QuickLink model
   */ 
  interface QuickLinkFieldRefs {
    readonly id: FieldRef<"QuickLink", 'String'>
    readonly name: FieldRef<"QuickLink", 'String'>
    readonly desc: FieldRef<"QuickLink", 'String'>
    readonly url: FieldRef<"QuickLink", 'String'>
    readonly iconName: FieldRef<"QuickLink", 'String'>
    readonly badge: FieldRef<"QuickLink", 'String'>
    readonly createdAt: FieldRef<"QuickLink", 'DateTime'>
    readonly updatedAt: FieldRef<"QuickLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuickLink findUnique
   */
  export type QuickLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickLink
     */
    select?: QuickLinkSelect<ExtArgs> | null
    /**
     * Filter, which QuickLink to fetch.
     */
    where: QuickLinkWhereUniqueInput
  }

  /**
   * QuickLink findUniqueOrThrow
   */
  export type QuickLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickLink
     */
    select?: QuickLinkSelect<ExtArgs> | null
    /**
     * Filter, which QuickLink to fetch.
     */
    where: QuickLinkWhereUniqueInput
  }

  /**
   * QuickLink findFirst
   */
  export type QuickLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickLink
     */
    select?: QuickLinkSelect<ExtArgs> | null
    /**
     * Filter, which QuickLink to fetch.
     */
    where?: QuickLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuickLinks to fetch.
     */
    orderBy?: QuickLinkOrderByWithRelationInput | QuickLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuickLinks.
     */
    cursor?: QuickLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuickLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuickLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuickLinks.
     */
    distinct?: QuickLinkScalarFieldEnum | QuickLinkScalarFieldEnum[]
  }

  /**
   * QuickLink findFirstOrThrow
   */
  export type QuickLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickLink
     */
    select?: QuickLinkSelect<ExtArgs> | null
    /**
     * Filter, which QuickLink to fetch.
     */
    where?: QuickLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuickLinks to fetch.
     */
    orderBy?: QuickLinkOrderByWithRelationInput | QuickLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuickLinks.
     */
    cursor?: QuickLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuickLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuickLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuickLinks.
     */
    distinct?: QuickLinkScalarFieldEnum | QuickLinkScalarFieldEnum[]
  }

  /**
   * QuickLink findMany
   */
  export type QuickLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickLink
     */
    select?: QuickLinkSelect<ExtArgs> | null
    /**
     * Filter, which QuickLinks to fetch.
     */
    where?: QuickLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuickLinks to fetch.
     */
    orderBy?: QuickLinkOrderByWithRelationInput | QuickLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuickLinks.
     */
    cursor?: QuickLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuickLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuickLinks.
     */
    skip?: number
    distinct?: QuickLinkScalarFieldEnum | QuickLinkScalarFieldEnum[]
  }

  /**
   * QuickLink create
   */
  export type QuickLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickLink
     */
    select?: QuickLinkSelect<ExtArgs> | null
    /**
     * The data needed to create a QuickLink.
     */
    data: XOR<QuickLinkCreateInput, QuickLinkUncheckedCreateInput>
  }

  /**
   * QuickLink createMany
   */
  export type QuickLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuickLinks.
     */
    data: QuickLinkCreateManyInput | QuickLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuickLink update
   */
  export type QuickLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickLink
     */
    select?: QuickLinkSelect<ExtArgs> | null
    /**
     * The data needed to update a QuickLink.
     */
    data: XOR<QuickLinkUpdateInput, QuickLinkUncheckedUpdateInput>
    /**
     * Choose, which QuickLink to update.
     */
    where: QuickLinkWhereUniqueInput
  }

  /**
   * QuickLink updateMany
   */
  export type QuickLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuickLinks.
     */
    data: XOR<QuickLinkUpdateManyMutationInput, QuickLinkUncheckedUpdateManyInput>
    /**
     * Filter which QuickLinks to update
     */
    where?: QuickLinkWhereInput
  }

  /**
   * QuickLink upsert
   */
  export type QuickLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickLink
     */
    select?: QuickLinkSelect<ExtArgs> | null
    /**
     * The filter to search for the QuickLink to update in case it exists.
     */
    where: QuickLinkWhereUniqueInput
    /**
     * In case the QuickLink found by the `where` argument doesn't exist, create a new QuickLink with this data.
     */
    create: XOR<QuickLinkCreateInput, QuickLinkUncheckedCreateInput>
    /**
     * In case the QuickLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuickLinkUpdateInput, QuickLinkUncheckedUpdateInput>
  }

  /**
   * QuickLink delete
   */
  export type QuickLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickLink
     */
    select?: QuickLinkSelect<ExtArgs> | null
    /**
     * Filter which QuickLink to delete.
     */
    where: QuickLinkWhereUniqueInput
  }

  /**
   * QuickLink deleteMany
   */
  export type QuickLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuickLinks to delete
     */
    where?: QuickLinkWhereInput
  }

  /**
   * QuickLink without action
   */
  export type QuickLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickLink
     */
    select?: QuickLinkSelect<ExtArgs> | null
  }


  /**
   * Model SiteData
   */

  export type AggregateSiteData = {
    _count: SiteDataCountAggregateOutputType | null
    _min: SiteDataMinAggregateOutputType | null
    _max: SiteDataMaxAggregateOutputType | null
  }

  export type SiteDataMinAggregateOutputType = {
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteDataMaxAggregateOutputType = {
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SiteDataCountAggregateOutputType = {
    key: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SiteDataMinAggregateInputType = {
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteDataMaxAggregateInputType = {
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SiteDataCountAggregateInputType = {
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteData to aggregate.
     */
    where?: SiteDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteData to fetch.
     */
    orderBy?: SiteDataOrderByWithRelationInput | SiteDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteData
    **/
    _count?: true | SiteDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteDataMaxAggregateInputType
  }

  export type GetSiteDataAggregateType<T extends SiteDataAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteData[P]>
      : GetScalarType<T[P], AggregateSiteData[P]>
  }




  export type SiteDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteDataWhereInput
    orderBy?: SiteDataOrderByWithAggregationInput | SiteDataOrderByWithAggregationInput[]
    by: SiteDataScalarFieldEnum[] | SiteDataScalarFieldEnum
    having?: SiteDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteDataCountAggregateInputType | true
    _min?: SiteDataMinAggregateInputType
    _max?: SiteDataMaxAggregateInputType
  }

  export type SiteDataGroupByOutputType = {
    key: string
    value: string
    createdAt: Date
    updatedAt: Date
    _count: SiteDataCountAggregateOutputType | null
    _min: SiteDataMinAggregateOutputType | null
    _max: SiteDataMaxAggregateOutputType | null
  }

  type GetSiteDataGroupByPayload<T extends SiteDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteDataGroupByOutputType[P]>
            : GetScalarType<T[P], SiteDataGroupByOutputType[P]>
        }
      >
    >


  export type SiteDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteData"]>


  export type SiteDataSelectScalar = {
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SiteDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["siteData"]>
    composites: {}
  }

  type SiteDataGetPayload<S extends boolean | null | undefined | SiteDataDefaultArgs> = $Result.GetResult<Prisma.$SiteDataPayload, S>

  type SiteDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SiteDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SiteDataCountAggregateInputType | true
    }

  export interface SiteDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteData'], meta: { name: 'SiteData' } }
    /**
     * Find zero or one SiteData that matches the filter.
     * @param {SiteDataFindUniqueArgs} args - Arguments to find a SiteData
     * @example
     * // Get one SiteData
     * const siteData = await prisma.siteData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteDataFindUniqueArgs>(args: SelectSubset<T, SiteDataFindUniqueArgs<ExtArgs>>): Prisma__SiteDataClient<$Result.GetResult<Prisma.$SiteDataPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SiteData that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SiteDataFindUniqueOrThrowArgs} args - Arguments to find a SiteData
     * @example
     * // Get one SiteData
     * const siteData = await prisma.siteData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteDataFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteDataClient<$Result.GetResult<Prisma.$SiteDataPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SiteData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteDataFindFirstArgs} args - Arguments to find a SiteData
     * @example
     * // Get one SiteData
     * const siteData = await prisma.siteData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteDataFindFirstArgs>(args?: SelectSubset<T, SiteDataFindFirstArgs<ExtArgs>>): Prisma__SiteDataClient<$Result.GetResult<Prisma.$SiteDataPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SiteData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteDataFindFirstOrThrowArgs} args - Arguments to find a SiteData
     * @example
     * // Get one SiteData
     * const siteData = await prisma.siteData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteDataFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteDataClient<$Result.GetResult<Prisma.$SiteDataPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SiteData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteData
     * const siteData = await prisma.siteData.findMany()
     * 
     * // Get first 10 SiteData
     * const siteData = await prisma.siteData.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const siteDataWithKeyOnly = await prisma.siteData.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends SiteDataFindManyArgs>(args?: SelectSubset<T, SiteDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteDataPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SiteData.
     * @param {SiteDataCreateArgs} args - Arguments to create a SiteData.
     * @example
     * // Create one SiteData
     * const SiteData = await prisma.siteData.create({
     *   data: {
     *     // ... data to create a SiteData
     *   }
     * })
     * 
     */
    create<T extends SiteDataCreateArgs>(args: SelectSubset<T, SiteDataCreateArgs<ExtArgs>>): Prisma__SiteDataClient<$Result.GetResult<Prisma.$SiteDataPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SiteData.
     * @param {SiteDataCreateManyArgs} args - Arguments to create many SiteData.
     * @example
     * // Create many SiteData
     * const siteData = await prisma.siteData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteDataCreateManyArgs>(args?: SelectSubset<T, SiteDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SiteData.
     * @param {SiteDataDeleteArgs} args - Arguments to delete one SiteData.
     * @example
     * // Delete one SiteData
     * const SiteData = await prisma.siteData.delete({
     *   where: {
     *     // ... filter to delete one SiteData
     *   }
     * })
     * 
     */
    delete<T extends SiteDataDeleteArgs>(args: SelectSubset<T, SiteDataDeleteArgs<ExtArgs>>): Prisma__SiteDataClient<$Result.GetResult<Prisma.$SiteDataPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SiteData.
     * @param {SiteDataUpdateArgs} args - Arguments to update one SiteData.
     * @example
     * // Update one SiteData
     * const siteData = await prisma.siteData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteDataUpdateArgs>(args: SelectSubset<T, SiteDataUpdateArgs<ExtArgs>>): Prisma__SiteDataClient<$Result.GetResult<Prisma.$SiteDataPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SiteData.
     * @param {SiteDataDeleteManyArgs} args - Arguments to filter SiteData to delete.
     * @example
     * // Delete a few SiteData
     * const { count } = await prisma.siteData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteDataDeleteManyArgs>(args?: SelectSubset<T, SiteDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteData
     * const siteData = await prisma.siteData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteDataUpdateManyArgs>(args: SelectSubset<T, SiteDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SiteData.
     * @param {SiteDataUpsertArgs} args - Arguments to update or create a SiteData.
     * @example
     * // Update or create a SiteData
     * const siteData = await prisma.siteData.upsert({
     *   create: {
     *     // ... data to create a SiteData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteData we want to update
     *   }
     * })
     */
    upsert<T extends SiteDataUpsertArgs>(args: SelectSubset<T, SiteDataUpsertArgs<ExtArgs>>): Prisma__SiteDataClient<$Result.GetResult<Prisma.$SiteDataPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SiteData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteDataCountArgs} args - Arguments to filter SiteData to count.
     * @example
     * // Count the number of SiteData
     * const count = await prisma.siteData.count({
     *   where: {
     *     // ... the filter for the SiteData we want to count
     *   }
     * })
    **/
    count<T extends SiteDataCountArgs>(
      args?: Subset<T, SiteDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteDataAggregateArgs>(args: Subset<T, SiteDataAggregateArgs>): Prisma.PrismaPromise<GetSiteDataAggregateType<T>>

    /**
     * Group by SiteData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteDataGroupByArgs} args - Group by arguments.
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
      T extends SiteDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteDataGroupByArgs['orderBy'] }
        : { orderBy?: SiteDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiteDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteData model
   */
  readonly fields: SiteDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SiteData model
   */ 
  interface SiteDataFieldRefs {
    readonly key: FieldRef<"SiteData", 'String'>
    readonly value: FieldRef<"SiteData", 'String'>
    readonly createdAt: FieldRef<"SiteData", 'DateTime'>
    readonly updatedAt: FieldRef<"SiteData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteData findUnique
   */
  export type SiteDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteData
     */
    select?: SiteDataSelect<ExtArgs> | null
    /**
     * Filter, which SiteData to fetch.
     */
    where: SiteDataWhereUniqueInput
  }

  /**
   * SiteData findUniqueOrThrow
   */
  export type SiteDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteData
     */
    select?: SiteDataSelect<ExtArgs> | null
    /**
     * Filter, which SiteData to fetch.
     */
    where: SiteDataWhereUniqueInput
  }

  /**
   * SiteData findFirst
   */
  export type SiteDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteData
     */
    select?: SiteDataSelect<ExtArgs> | null
    /**
     * Filter, which SiteData to fetch.
     */
    where?: SiteDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteData to fetch.
     */
    orderBy?: SiteDataOrderByWithRelationInput | SiteDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteData.
     */
    cursor?: SiteDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteData.
     */
    distinct?: SiteDataScalarFieldEnum | SiteDataScalarFieldEnum[]
  }

  /**
   * SiteData findFirstOrThrow
   */
  export type SiteDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteData
     */
    select?: SiteDataSelect<ExtArgs> | null
    /**
     * Filter, which SiteData to fetch.
     */
    where?: SiteDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteData to fetch.
     */
    orderBy?: SiteDataOrderByWithRelationInput | SiteDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteData.
     */
    cursor?: SiteDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteData.
     */
    distinct?: SiteDataScalarFieldEnum | SiteDataScalarFieldEnum[]
  }

  /**
   * SiteData findMany
   */
  export type SiteDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteData
     */
    select?: SiteDataSelect<ExtArgs> | null
    /**
     * Filter, which SiteData to fetch.
     */
    where?: SiteDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteData to fetch.
     */
    orderBy?: SiteDataOrderByWithRelationInput | SiteDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteData.
     */
    cursor?: SiteDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteData.
     */
    skip?: number
    distinct?: SiteDataScalarFieldEnum | SiteDataScalarFieldEnum[]
  }

  /**
   * SiteData create
   */
  export type SiteDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteData
     */
    select?: SiteDataSelect<ExtArgs> | null
    /**
     * The data needed to create a SiteData.
     */
    data: XOR<SiteDataCreateInput, SiteDataUncheckedCreateInput>
  }

  /**
   * SiteData createMany
   */
  export type SiteDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteData.
     */
    data: SiteDataCreateManyInput | SiteDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteData update
   */
  export type SiteDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteData
     */
    select?: SiteDataSelect<ExtArgs> | null
    /**
     * The data needed to update a SiteData.
     */
    data: XOR<SiteDataUpdateInput, SiteDataUncheckedUpdateInput>
    /**
     * Choose, which SiteData to update.
     */
    where: SiteDataWhereUniqueInput
  }

  /**
   * SiteData updateMany
   */
  export type SiteDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteData.
     */
    data: XOR<SiteDataUpdateManyMutationInput, SiteDataUncheckedUpdateManyInput>
    /**
     * Filter which SiteData to update
     */
    where?: SiteDataWhereInput
  }

  /**
   * SiteData upsert
   */
  export type SiteDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteData
     */
    select?: SiteDataSelect<ExtArgs> | null
    /**
     * The filter to search for the SiteData to update in case it exists.
     */
    where: SiteDataWhereUniqueInput
    /**
     * In case the SiteData found by the `where` argument doesn't exist, create a new SiteData with this data.
     */
    create: XOR<SiteDataCreateInput, SiteDataUncheckedCreateInput>
    /**
     * In case the SiteData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteDataUpdateInput, SiteDataUncheckedUpdateInput>
  }

  /**
   * SiteData delete
   */
  export type SiteDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteData
     */
    select?: SiteDataSelect<ExtArgs> | null
    /**
     * Filter which SiteData to delete.
     */
    where: SiteDataWhereUniqueInput
  }

  /**
   * SiteData deleteMany
   */
  export type SiteDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteData to delete
     */
    where?: SiteDataWhereInput
  }

  /**
   * SiteData without action
   */
  export type SiteDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteData
     */
    select?: SiteDataSelect<ExtArgs> | null
  }


  /**
   * Model MediaFolder
   */

  export type AggregateMediaFolder = {
    _count: MediaFolderCountAggregateOutputType | null
    _min: MediaFolderMinAggregateOutputType | null
    _max: MediaFolderMaxAggregateOutputType | null
  }

  export type MediaFolderMinAggregateOutputType = {
    id: string | null
    name: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaFolderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaFolderCountAggregateOutputType = {
    id: number
    name: number
    parentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MediaFolderMinAggregateInputType = {
    id?: true
    name?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaFolderMaxAggregateInputType = {
    id?: true
    name?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaFolderCountAggregateInputType = {
    id?: true
    name?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MediaFolderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaFolder to aggregate.
     */
    where?: MediaFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFolders to fetch.
     */
    orderBy?: MediaFolderOrderByWithRelationInput | MediaFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaFolders
    **/
    _count?: true | MediaFolderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaFolderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaFolderMaxAggregateInputType
  }

  export type GetMediaFolderAggregateType<T extends MediaFolderAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaFolder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaFolder[P]>
      : GetScalarType<T[P], AggregateMediaFolder[P]>
  }




  export type MediaFolderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaFolderWhereInput
    orderBy?: MediaFolderOrderByWithAggregationInput | MediaFolderOrderByWithAggregationInput[]
    by: MediaFolderScalarFieldEnum[] | MediaFolderScalarFieldEnum
    having?: MediaFolderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaFolderCountAggregateInputType | true
    _min?: MediaFolderMinAggregateInputType
    _max?: MediaFolderMaxAggregateInputType
  }

  export type MediaFolderGroupByOutputType = {
    id: string
    name: string
    parentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: MediaFolderCountAggregateOutputType | null
    _min: MediaFolderMinAggregateOutputType | null
    _max: MediaFolderMaxAggregateOutputType | null
  }

  type GetMediaFolderGroupByPayload<T extends MediaFolderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaFolderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaFolderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaFolderGroupByOutputType[P]>
            : GetScalarType<T[P], MediaFolderGroupByOutputType[P]>
        }
      >
    >


  export type MediaFolderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mediaFolder"]>


  export type MediaFolderSelectScalar = {
    id?: boolean
    name?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $MediaFolderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaFolder"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      parentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mediaFolder"]>
    composites: {}
  }

  type MediaFolderGetPayload<S extends boolean | null | undefined | MediaFolderDefaultArgs> = $Result.GetResult<Prisma.$MediaFolderPayload, S>

  type MediaFolderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MediaFolderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MediaFolderCountAggregateInputType | true
    }

  export interface MediaFolderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaFolder'], meta: { name: 'MediaFolder' } }
    /**
     * Find zero or one MediaFolder that matches the filter.
     * @param {MediaFolderFindUniqueArgs} args - Arguments to find a MediaFolder
     * @example
     * // Get one MediaFolder
     * const mediaFolder = await prisma.mediaFolder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFolderFindUniqueArgs>(args: SelectSubset<T, MediaFolderFindUniqueArgs<ExtArgs>>): Prisma__MediaFolderClient<$Result.GetResult<Prisma.$MediaFolderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MediaFolder that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MediaFolderFindUniqueOrThrowArgs} args - Arguments to find a MediaFolder
     * @example
     * // Get one MediaFolder
     * const mediaFolder = await prisma.mediaFolder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFolderFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFolderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaFolderClient<$Result.GetResult<Prisma.$MediaFolderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MediaFolder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFolderFindFirstArgs} args - Arguments to find a MediaFolder
     * @example
     * // Get one MediaFolder
     * const mediaFolder = await prisma.mediaFolder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFolderFindFirstArgs>(args?: SelectSubset<T, MediaFolderFindFirstArgs<ExtArgs>>): Prisma__MediaFolderClient<$Result.GetResult<Prisma.$MediaFolderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MediaFolder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFolderFindFirstOrThrowArgs} args - Arguments to find a MediaFolder
     * @example
     * // Get one MediaFolder
     * const mediaFolder = await prisma.mediaFolder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFolderFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFolderFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaFolderClient<$Result.GetResult<Prisma.$MediaFolderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MediaFolders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFolderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaFolders
     * const mediaFolders = await prisma.mediaFolder.findMany()
     * 
     * // Get first 10 MediaFolders
     * const mediaFolders = await prisma.mediaFolder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaFolderWithIdOnly = await prisma.mediaFolder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFolderFindManyArgs>(args?: SelectSubset<T, MediaFolderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaFolderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MediaFolder.
     * @param {MediaFolderCreateArgs} args - Arguments to create a MediaFolder.
     * @example
     * // Create one MediaFolder
     * const MediaFolder = await prisma.mediaFolder.create({
     *   data: {
     *     // ... data to create a MediaFolder
     *   }
     * })
     * 
     */
    create<T extends MediaFolderCreateArgs>(args: SelectSubset<T, MediaFolderCreateArgs<ExtArgs>>): Prisma__MediaFolderClient<$Result.GetResult<Prisma.$MediaFolderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MediaFolders.
     * @param {MediaFolderCreateManyArgs} args - Arguments to create many MediaFolders.
     * @example
     * // Create many MediaFolders
     * const mediaFolder = await prisma.mediaFolder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaFolderCreateManyArgs>(args?: SelectSubset<T, MediaFolderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MediaFolder.
     * @param {MediaFolderDeleteArgs} args - Arguments to delete one MediaFolder.
     * @example
     * // Delete one MediaFolder
     * const MediaFolder = await prisma.mediaFolder.delete({
     *   where: {
     *     // ... filter to delete one MediaFolder
     *   }
     * })
     * 
     */
    delete<T extends MediaFolderDeleteArgs>(args: SelectSubset<T, MediaFolderDeleteArgs<ExtArgs>>): Prisma__MediaFolderClient<$Result.GetResult<Prisma.$MediaFolderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MediaFolder.
     * @param {MediaFolderUpdateArgs} args - Arguments to update one MediaFolder.
     * @example
     * // Update one MediaFolder
     * const mediaFolder = await prisma.mediaFolder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaFolderUpdateArgs>(args: SelectSubset<T, MediaFolderUpdateArgs<ExtArgs>>): Prisma__MediaFolderClient<$Result.GetResult<Prisma.$MediaFolderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MediaFolders.
     * @param {MediaFolderDeleteManyArgs} args - Arguments to filter MediaFolders to delete.
     * @example
     * // Delete a few MediaFolders
     * const { count } = await prisma.mediaFolder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaFolderDeleteManyArgs>(args?: SelectSubset<T, MediaFolderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaFolders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFolderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaFolders
     * const mediaFolder = await prisma.mediaFolder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaFolderUpdateManyArgs>(args: SelectSubset<T, MediaFolderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MediaFolder.
     * @param {MediaFolderUpsertArgs} args - Arguments to update or create a MediaFolder.
     * @example
     * // Update or create a MediaFolder
     * const mediaFolder = await prisma.mediaFolder.upsert({
     *   create: {
     *     // ... data to create a MediaFolder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaFolder we want to update
     *   }
     * })
     */
    upsert<T extends MediaFolderUpsertArgs>(args: SelectSubset<T, MediaFolderUpsertArgs<ExtArgs>>): Prisma__MediaFolderClient<$Result.GetResult<Prisma.$MediaFolderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MediaFolders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFolderCountArgs} args - Arguments to filter MediaFolders to count.
     * @example
     * // Count the number of MediaFolders
     * const count = await prisma.mediaFolder.count({
     *   where: {
     *     // ... the filter for the MediaFolders we want to count
     *   }
     * })
    **/
    count<T extends MediaFolderCountArgs>(
      args?: Subset<T, MediaFolderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaFolderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaFolder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFolderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaFolderAggregateArgs>(args: Subset<T, MediaFolderAggregateArgs>): Prisma.PrismaPromise<GetMediaFolderAggregateType<T>>

    /**
     * Group by MediaFolder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFolderGroupByArgs} args - Group by arguments.
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
      T extends MediaFolderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaFolderGroupByArgs['orderBy'] }
        : { orderBy?: MediaFolderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaFolderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaFolderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaFolder model
   */
  readonly fields: MediaFolderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaFolder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaFolderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MediaFolder model
   */ 
  interface MediaFolderFieldRefs {
    readonly id: FieldRef<"MediaFolder", 'String'>
    readonly name: FieldRef<"MediaFolder", 'String'>
    readonly parentId: FieldRef<"MediaFolder", 'String'>
    readonly createdAt: FieldRef<"MediaFolder", 'DateTime'>
    readonly updatedAt: FieldRef<"MediaFolder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MediaFolder findUnique
   */
  export type MediaFolderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFolder
     */
    select?: MediaFolderSelect<ExtArgs> | null
    /**
     * Filter, which MediaFolder to fetch.
     */
    where: MediaFolderWhereUniqueInput
  }

  /**
   * MediaFolder findUniqueOrThrow
   */
  export type MediaFolderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFolder
     */
    select?: MediaFolderSelect<ExtArgs> | null
    /**
     * Filter, which MediaFolder to fetch.
     */
    where: MediaFolderWhereUniqueInput
  }

  /**
   * MediaFolder findFirst
   */
  export type MediaFolderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFolder
     */
    select?: MediaFolderSelect<ExtArgs> | null
    /**
     * Filter, which MediaFolder to fetch.
     */
    where?: MediaFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFolders to fetch.
     */
    orderBy?: MediaFolderOrderByWithRelationInput | MediaFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaFolders.
     */
    cursor?: MediaFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaFolders.
     */
    distinct?: MediaFolderScalarFieldEnum | MediaFolderScalarFieldEnum[]
  }

  /**
   * MediaFolder findFirstOrThrow
   */
  export type MediaFolderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFolder
     */
    select?: MediaFolderSelect<ExtArgs> | null
    /**
     * Filter, which MediaFolder to fetch.
     */
    where?: MediaFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFolders to fetch.
     */
    orderBy?: MediaFolderOrderByWithRelationInput | MediaFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaFolders.
     */
    cursor?: MediaFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaFolders.
     */
    distinct?: MediaFolderScalarFieldEnum | MediaFolderScalarFieldEnum[]
  }

  /**
   * MediaFolder findMany
   */
  export type MediaFolderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFolder
     */
    select?: MediaFolderSelect<ExtArgs> | null
    /**
     * Filter, which MediaFolders to fetch.
     */
    where?: MediaFolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFolders to fetch.
     */
    orderBy?: MediaFolderOrderByWithRelationInput | MediaFolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaFolders.
     */
    cursor?: MediaFolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFolders.
     */
    skip?: number
    distinct?: MediaFolderScalarFieldEnum | MediaFolderScalarFieldEnum[]
  }

  /**
   * MediaFolder create
   */
  export type MediaFolderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFolder
     */
    select?: MediaFolderSelect<ExtArgs> | null
    /**
     * The data needed to create a MediaFolder.
     */
    data: XOR<MediaFolderCreateInput, MediaFolderUncheckedCreateInput>
  }

  /**
   * MediaFolder createMany
   */
  export type MediaFolderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaFolders.
     */
    data: MediaFolderCreateManyInput | MediaFolderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaFolder update
   */
  export type MediaFolderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFolder
     */
    select?: MediaFolderSelect<ExtArgs> | null
    /**
     * The data needed to update a MediaFolder.
     */
    data: XOR<MediaFolderUpdateInput, MediaFolderUncheckedUpdateInput>
    /**
     * Choose, which MediaFolder to update.
     */
    where: MediaFolderWhereUniqueInput
  }

  /**
   * MediaFolder updateMany
   */
  export type MediaFolderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaFolders.
     */
    data: XOR<MediaFolderUpdateManyMutationInput, MediaFolderUncheckedUpdateManyInput>
    /**
     * Filter which MediaFolders to update
     */
    where?: MediaFolderWhereInput
  }

  /**
   * MediaFolder upsert
   */
  export type MediaFolderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFolder
     */
    select?: MediaFolderSelect<ExtArgs> | null
    /**
     * The filter to search for the MediaFolder to update in case it exists.
     */
    where: MediaFolderWhereUniqueInput
    /**
     * In case the MediaFolder found by the `where` argument doesn't exist, create a new MediaFolder with this data.
     */
    create: XOR<MediaFolderCreateInput, MediaFolderUncheckedCreateInput>
    /**
     * In case the MediaFolder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaFolderUpdateInput, MediaFolderUncheckedUpdateInput>
  }

  /**
   * MediaFolder delete
   */
  export type MediaFolderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFolder
     */
    select?: MediaFolderSelect<ExtArgs> | null
    /**
     * Filter which MediaFolder to delete.
     */
    where: MediaFolderWhereUniqueInput
  }

  /**
   * MediaFolder deleteMany
   */
  export type MediaFolderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaFolders to delete
     */
    where?: MediaFolderWhereInput
  }

  /**
   * MediaFolder without action
   */
  export type MediaFolderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFolder
     */
    select?: MediaFolderSelect<ExtArgs> | null
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
    role: 'role',
    status: 'status',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    category: 'category',
    date: 'date',
    author: 'author',
    thumbnail: 'thumbnail',
    summary: 'summary',
    content: 'content',
    tags: 'tags',
    featured: 'featured',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const LecturerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nidn: 'nidn',
    title: 'title',
    photo: 'photo',
    expertise: 'expertise',
    expertiseTags: 'expertiseTags',
    email: 'email',
    lab: 'lab',
    education: 'education',
    googleScholar: 'googleScholar',
    scopus: 'scopus',
    sinta: 'sinta',
    orcid: 'orcid',
    researchGate: 'researchGate',
    coursesTaught: 'coursesTaught',
    publicationsCount: 'publicationsCount',
    studyProgram: 'studyProgram',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LecturerScalarFieldEnum = (typeof LecturerScalarFieldEnum)[keyof typeof LecturerScalarFieldEnum]


  export const StudyProgramScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    degree: 'degree',
    accreditation: 'accreditation',
    headOfProgram: 'headOfProgram',
    headOfProdi: 'headOfProdi',
    headOfProdiNidn: 'headOfProdiNidn',
    headOfProdiPhoto: 'headOfProdiPhoto',
    description: 'description',
    totalSks: 'totalSks',
    activeStudents: 'activeStudents',
    capacity: 'capacity',
    vision: 'vision',
    logoUrl: 'logoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudyProgramScalarFieldEnum = (typeof StudyProgramScalarFieldEnum)[keyof typeof StudyProgramScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    sks: 'sks',
    semester: 'semester',
    category: 'category',
    specialization: 'specialization',
    studyProgram: 'studyProgram',
    description: 'description',
    prerequisites: 'prerequisites',
    syllabusTopic: 'syllabusTopic',
    rpsUrl: 'rpsUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const StudentOrgScalarFieldEnum: {
    id: 'id',
    name: 'name',
    abbreviation: 'abbreviation',
    logo: 'logo',
    description: 'description',
    cabinetName: 'cabinetName',
    cabinetYear: 'cabinetYear',
    leaderName: 'leaderName',
    leaderPhoto: 'leaderPhoto',
    viceLeaderName: 'viceLeaderName',
    divisions: 'divisions',
    upcomingEvents: 'upcomingEvents',
    updatedAt: 'updatedAt'
  };

  export type StudentOrgScalarFieldEnum = (typeof StudentOrgScalarFieldEnum)[keyof typeof StudentOrgScalarFieldEnum]


  export const MediaFileScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    originalName: 'originalName',
    sizeBytes: 'sizeBytes',
    type: 'type',
    url: 'url',
    uploadedAt: 'uploadedAt',
    dimensions: 'dimensions',
    folderId: 'folderId',
    createdAt: 'createdAt'
  };

  export type MediaFileScalarFieldEnum = (typeof MediaFileScalarFieldEnum)[keyof typeof MediaFileScalarFieldEnum]


  export const MenuItemScalarFieldEnum: {
    id: 'id',
    label: 'label',
    url: 'url',
    isExternal: 'isExternal',
    isVisible: 'isVisible',
    badge: 'badge',
    order: 'order',
    parentId: 'parentId',
    icon: 'icon',
    line1: 'line1',
    line2: 'line2',
    childrenData: 'childrenData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuItemScalarFieldEnum = (typeof MenuItemScalarFieldEnum)[keyof typeof MenuItemScalarFieldEnum]


  export const LaboratoryScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    shortDesc: 'shortDesc',
    headOfLab: 'headOfLab',
    headPhoto: 'headPhoto',
    labAssistants: 'labAssistants',
    image: 'image',
    location: 'location',
    capacity: 'capacity',
    specifications: 'specifications',
    equipmentList: 'equipmentList',
    softwareInstalled: 'softwareInstalled',
    virtualTour360Url: 'virtualTour360Url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LaboratoryScalarFieldEnum = (typeof LaboratoryScalarFieldEnum)[keyof typeof LaboratoryScalarFieldEnum]


  export const ResearchGroupScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    leadLecturer: 'leadLecturer',
    membersCount: 'membersCount',
    description: 'description',
    topics: 'topics',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResearchGroupScalarFieldEnum = (typeof ResearchGroupScalarFieldEnum)[keyof typeof ResearchGroupScalarFieldEnum]


  export const PublicationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    authors: 'authors',
    year: 'year',
    publisher: 'publisher',
    type: 'type',
    pdfUrl: 'pdfUrl',
    doi: 'doi',
    specialization: 'specialization',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PublicationScalarFieldEnum = (typeof PublicationScalarFieldEnum)[keyof typeof PublicationScalarFieldEnum]


  export const InnovationProductScalarFieldEnum: {
    id: 'id',
    title: 'title',
    developer: 'developer',
    category: 'category',
    year: 'year',
    thumbnail: 'thumbnail',
    description: 'description',
    techStack: 'techStack',
    demoUrl: 'demoUrl',
    githubUrl: 'githubUrl',
    award: 'award',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InnovationProductScalarFieldEnum = (typeof InnovationProductScalarFieldEnum)[keyof typeof InnovationProductScalarFieldEnum]


  export const StudentAchievementScalarFieldEnum: {
    id: 'id',
    competition: 'competition',
    title: 'title',
    rank: 'rank',
    level: 'level',
    year: 'year',
    studentNames: 'studentNames',
    mentorLecturer: 'mentorLecturer',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentAchievementScalarFieldEnum = (typeof StudentAchievementScalarFieldEnum)[keyof typeof StudentAchievementScalarFieldEnum]


  export const AlumniTestimonialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gradYear: 'gradYear',
    role: 'role',
    company: 'company',
    companyLogo: 'companyLogo',
    photo: 'photo',
    quote: 'quote',
    linkedinUrl: 'linkedinUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlumniTestimonialScalarFieldEnum = (typeof AlumniTestimonialScalarFieldEnum)[keyof typeof AlumniTestimonialScalarFieldEnum]


  export const JobVacancyScalarFieldEnum: {
    id: 'id',
    title: 'title',
    company: 'company',
    logo: 'logo',
    location: 'location',
    type: 'type',
    specialization: 'specialization',
    postedDate: 'postedDate',
    applyDeadline: 'applyDeadline',
    requirements: 'requirements',
    applyLink: 'applyLink',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobVacancyScalarFieldEnum = (typeof JobVacancyScalarFieldEnum)[keyof typeof JobVacancyScalarFieldEnum]


  export const PMBTrackScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    capacity: 'capacity',
    period: 'period',
    requirements: 'requirements',
    benefits: 'benefits',
    feeEstimate: 'feeEstimate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PMBTrackScalarFieldEnum = (typeof PMBTrackScalarFieldEnum)[keyof typeof PMBTrackScalarFieldEnum]


  export const AcademicCalendarItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    startDate: 'startDate',
    endDate: 'endDate',
    category: 'category',
    semester: 'semester',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AcademicCalendarItemScalarFieldEnum = (typeof AcademicCalendarItemScalarFieldEnum)[keyof typeof AcademicCalendarItemScalarFieldEnum]


  export const FAQItemScalarFieldEnum: {
    id: 'id',
    category: 'category',
    question: 'question',
    answer: 'answer',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FAQItemScalarFieldEnum = (typeof FAQItemScalarFieldEnum)[keyof typeof FAQItemScalarFieldEnum]


  export const QuickLinkScalarFieldEnum: {
    id: 'id',
    name: 'name',
    desc: 'desc',
    url: 'url',
    iconName: 'iconName',
    badge: 'badge',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuickLinkScalarFieldEnum = (typeof QuickLinkScalarFieldEnum)[keyof typeof QuickLinkScalarFieldEnum]


  export const SiteDataScalarFieldEnum: {
    key: 'key',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SiteDataScalarFieldEnum = (typeof SiteDataScalarFieldEnum)[keyof typeof SiteDataScalarFieldEnum]


  export const MediaFolderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MediaFolderScalarFieldEnum = (typeof MediaFolderScalarFieldEnum)[keyof typeof MediaFolderScalarFieldEnum]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    status?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: StringFilter<"News"> | string
    title?: StringFilter<"News"> | string
    slug?: StringFilter<"News"> | string
    category?: StringFilter<"News"> | string
    date?: StringFilter<"News"> | string
    author?: StringFilter<"News"> | string
    thumbnail?: StringFilter<"News"> | string
    summary?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    tags?: StringFilter<"News"> | string
    featured?: BoolFilter<"News"> | boolean
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    date?: SortOrder
    author?: SortOrder
    thumbnail?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    title?: StringFilter<"News"> | string
    category?: StringFilter<"News"> | string
    date?: StringFilter<"News"> | string
    author?: StringFilter<"News"> | string
    thumbnail?: StringFilter<"News"> | string
    summary?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    tags?: StringFilter<"News"> | string
    featured?: BoolFilter<"News"> | boolean
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
  }, "id" | "slug">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    date?: SortOrder
    author?: SortOrder
    thumbnail?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsCountOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"News"> | string
    title?: StringWithAggregatesFilter<"News"> | string
    slug?: StringWithAggregatesFilter<"News"> | string
    category?: StringWithAggregatesFilter<"News"> | string
    date?: StringWithAggregatesFilter<"News"> | string
    author?: StringWithAggregatesFilter<"News"> | string
    thumbnail?: StringWithAggregatesFilter<"News"> | string
    summary?: StringWithAggregatesFilter<"News"> | string
    content?: StringWithAggregatesFilter<"News"> | string
    tags?: StringWithAggregatesFilter<"News"> | string
    featured?: BoolWithAggregatesFilter<"News"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
  }

  export type LecturerWhereInput = {
    AND?: LecturerWhereInput | LecturerWhereInput[]
    OR?: LecturerWhereInput[]
    NOT?: LecturerWhereInput | LecturerWhereInput[]
    id?: StringFilter<"Lecturer"> | string
    name?: StringFilter<"Lecturer"> | string
    nidn?: StringFilter<"Lecturer"> | string
    title?: StringFilter<"Lecturer"> | string
    photo?: StringFilter<"Lecturer"> | string
    expertise?: StringFilter<"Lecturer"> | string
    expertiseTags?: StringFilter<"Lecturer"> | string
    email?: StringFilter<"Lecturer"> | string
    lab?: StringFilter<"Lecturer"> | string
    education?: StringFilter<"Lecturer"> | string
    googleScholar?: StringNullableFilter<"Lecturer"> | string | null
    scopus?: StringNullableFilter<"Lecturer"> | string | null
    sinta?: StringNullableFilter<"Lecturer"> | string | null
    orcid?: StringNullableFilter<"Lecturer"> | string | null
    researchGate?: StringNullableFilter<"Lecturer"> | string | null
    coursesTaught?: StringFilter<"Lecturer"> | string
    publicationsCount?: IntFilter<"Lecturer"> | number
    studyProgram?: StringNullableFilter<"Lecturer"> | string | null
    createdAt?: DateTimeFilter<"Lecturer"> | Date | string
    updatedAt?: DateTimeFilter<"Lecturer"> | Date | string
  }

  export type LecturerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nidn?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    expertise?: SortOrder
    expertiseTags?: SortOrder
    email?: SortOrder
    lab?: SortOrder
    education?: SortOrder
    googleScholar?: SortOrderInput | SortOrder
    scopus?: SortOrderInput | SortOrder
    sinta?: SortOrderInput | SortOrder
    orcid?: SortOrderInput | SortOrder
    researchGate?: SortOrderInput | SortOrder
    coursesTaught?: SortOrder
    publicationsCount?: SortOrder
    studyProgram?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LecturerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nidn?: string
    AND?: LecturerWhereInput | LecturerWhereInput[]
    OR?: LecturerWhereInput[]
    NOT?: LecturerWhereInput | LecturerWhereInput[]
    name?: StringFilter<"Lecturer"> | string
    title?: StringFilter<"Lecturer"> | string
    photo?: StringFilter<"Lecturer"> | string
    expertise?: StringFilter<"Lecturer"> | string
    expertiseTags?: StringFilter<"Lecturer"> | string
    email?: StringFilter<"Lecturer"> | string
    lab?: StringFilter<"Lecturer"> | string
    education?: StringFilter<"Lecturer"> | string
    googleScholar?: StringNullableFilter<"Lecturer"> | string | null
    scopus?: StringNullableFilter<"Lecturer"> | string | null
    sinta?: StringNullableFilter<"Lecturer"> | string | null
    orcid?: StringNullableFilter<"Lecturer"> | string | null
    researchGate?: StringNullableFilter<"Lecturer"> | string | null
    coursesTaught?: StringFilter<"Lecturer"> | string
    publicationsCount?: IntFilter<"Lecturer"> | number
    studyProgram?: StringNullableFilter<"Lecturer"> | string | null
    createdAt?: DateTimeFilter<"Lecturer"> | Date | string
    updatedAt?: DateTimeFilter<"Lecturer"> | Date | string
  }, "id" | "nidn">

  export type LecturerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nidn?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    expertise?: SortOrder
    expertiseTags?: SortOrder
    email?: SortOrder
    lab?: SortOrder
    education?: SortOrder
    googleScholar?: SortOrderInput | SortOrder
    scopus?: SortOrderInput | SortOrder
    sinta?: SortOrderInput | SortOrder
    orcid?: SortOrderInput | SortOrder
    researchGate?: SortOrderInput | SortOrder
    coursesTaught?: SortOrder
    publicationsCount?: SortOrder
    studyProgram?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LecturerCountOrderByAggregateInput
    _avg?: LecturerAvgOrderByAggregateInput
    _max?: LecturerMaxOrderByAggregateInput
    _min?: LecturerMinOrderByAggregateInput
    _sum?: LecturerSumOrderByAggregateInput
  }

  export type LecturerScalarWhereWithAggregatesInput = {
    AND?: LecturerScalarWhereWithAggregatesInput | LecturerScalarWhereWithAggregatesInput[]
    OR?: LecturerScalarWhereWithAggregatesInput[]
    NOT?: LecturerScalarWhereWithAggregatesInput | LecturerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lecturer"> | string
    name?: StringWithAggregatesFilter<"Lecturer"> | string
    nidn?: StringWithAggregatesFilter<"Lecturer"> | string
    title?: StringWithAggregatesFilter<"Lecturer"> | string
    photo?: StringWithAggregatesFilter<"Lecturer"> | string
    expertise?: StringWithAggregatesFilter<"Lecturer"> | string
    expertiseTags?: StringWithAggregatesFilter<"Lecturer"> | string
    email?: StringWithAggregatesFilter<"Lecturer"> | string
    lab?: StringWithAggregatesFilter<"Lecturer"> | string
    education?: StringWithAggregatesFilter<"Lecturer"> | string
    googleScholar?: StringNullableWithAggregatesFilter<"Lecturer"> | string | null
    scopus?: StringNullableWithAggregatesFilter<"Lecturer"> | string | null
    sinta?: StringNullableWithAggregatesFilter<"Lecturer"> | string | null
    orcid?: StringNullableWithAggregatesFilter<"Lecturer"> | string | null
    researchGate?: StringNullableWithAggregatesFilter<"Lecturer"> | string | null
    coursesTaught?: StringWithAggregatesFilter<"Lecturer"> | string
    publicationsCount?: IntWithAggregatesFilter<"Lecturer"> | number
    studyProgram?: StringNullableWithAggregatesFilter<"Lecturer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lecturer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lecturer"> | Date | string
  }

  export type StudyProgramWhereInput = {
    AND?: StudyProgramWhereInput | StudyProgramWhereInput[]
    OR?: StudyProgramWhereInput[]
    NOT?: StudyProgramWhereInput | StudyProgramWhereInput[]
    id?: StringFilter<"StudyProgram"> | string
    code?: StringFilter<"StudyProgram"> | string
    name?: StringFilter<"StudyProgram"> | string
    degree?: StringFilter<"StudyProgram"> | string
    accreditation?: StringFilter<"StudyProgram"> | string
    headOfProgram?: StringFilter<"StudyProgram"> | string
    headOfProdi?: StringNullableFilter<"StudyProgram"> | string | null
    headOfProdiNidn?: StringNullableFilter<"StudyProgram"> | string | null
    headOfProdiPhoto?: StringNullableFilter<"StudyProgram"> | string | null
    description?: StringFilter<"StudyProgram"> | string
    totalSks?: IntFilter<"StudyProgram"> | number
    activeStudents?: IntFilter<"StudyProgram"> | number
    capacity?: IntFilter<"StudyProgram"> | number
    vision?: StringFilter<"StudyProgram"> | string
    logoUrl?: StringNullableFilter<"StudyProgram"> | string | null
    createdAt?: DateTimeFilter<"StudyProgram"> | Date | string
    updatedAt?: DateTimeFilter<"StudyProgram"> | Date | string
  }

  export type StudyProgramOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    degree?: SortOrder
    accreditation?: SortOrder
    headOfProgram?: SortOrder
    headOfProdi?: SortOrderInput | SortOrder
    headOfProdiNidn?: SortOrderInput | SortOrder
    headOfProdiPhoto?: SortOrderInput | SortOrder
    description?: SortOrder
    totalSks?: SortOrder
    activeStudents?: SortOrder
    capacity?: SortOrder
    vision?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: StudyProgramWhereInput | StudyProgramWhereInput[]
    OR?: StudyProgramWhereInput[]
    NOT?: StudyProgramWhereInput | StudyProgramWhereInput[]
    name?: StringFilter<"StudyProgram"> | string
    degree?: StringFilter<"StudyProgram"> | string
    accreditation?: StringFilter<"StudyProgram"> | string
    headOfProgram?: StringFilter<"StudyProgram"> | string
    headOfProdi?: StringNullableFilter<"StudyProgram"> | string | null
    headOfProdiNidn?: StringNullableFilter<"StudyProgram"> | string | null
    headOfProdiPhoto?: StringNullableFilter<"StudyProgram"> | string | null
    description?: StringFilter<"StudyProgram"> | string
    totalSks?: IntFilter<"StudyProgram"> | number
    activeStudents?: IntFilter<"StudyProgram"> | number
    capacity?: IntFilter<"StudyProgram"> | number
    vision?: StringFilter<"StudyProgram"> | string
    logoUrl?: StringNullableFilter<"StudyProgram"> | string | null
    createdAt?: DateTimeFilter<"StudyProgram"> | Date | string
    updatedAt?: DateTimeFilter<"StudyProgram"> | Date | string
  }, "id" | "code">

  export type StudyProgramOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    degree?: SortOrder
    accreditation?: SortOrder
    headOfProgram?: SortOrder
    headOfProdi?: SortOrderInput | SortOrder
    headOfProdiNidn?: SortOrderInput | SortOrder
    headOfProdiPhoto?: SortOrderInput | SortOrder
    description?: SortOrder
    totalSks?: SortOrder
    activeStudents?: SortOrder
    capacity?: SortOrder
    vision?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudyProgramCountOrderByAggregateInput
    _avg?: StudyProgramAvgOrderByAggregateInput
    _max?: StudyProgramMaxOrderByAggregateInput
    _min?: StudyProgramMinOrderByAggregateInput
    _sum?: StudyProgramSumOrderByAggregateInput
  }

  export type StudyProgramScalarWhereWithAggregatesInput = {
    AND?: StudyProgramScalarWhereWithAggregatesInput | StudyProgramScalarWhereWithAggregatesInput[]
    OR?: StudyProgramScalarWhereWithAggregatesInput[]
    NOT?: StudyProgramScalarWhereWithAggregatesInput | StudyProgramScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudyProgram"> | string
    code?: StringWithAggregatesFilter<"StudyProgram"> | string
    name?: StringWithAggregatesFilter<"StudyProgram"> | string
    degree?: StringWithAggregatesFilter<"StudyProgram"> | string
    accreditation?: StringWithAggregatesFilter<"StudyProgram"> | string
    headOfProgram?: StringWithAggregatesFilter<"StudyProgram"> | string
    headOfProdi?: StringNullableWithAggregatesFilter<"StudyProgram"> | string | null
    headOfProdiNidn?: StringNullableWithAggregatesFilter<"StudyProgram"> | string | null
    headOfProdiPhoto?: StringNullableWithAggregatesFilter<"StudyProgram"> | string | null
    description?: StringWithAggregatesFilter<"StudyProgram"> | string
    totalSks?: IntWithAggregatesFilter<"StudyProgram"> | number
    activeStudents?: IntWithAggregatesFilter<"StudyProgram"> | number
    capacity?: IntWithAggregatesFilter<"StudyProgram"> | number
    vision?: StringWithAggregatesFilter<"StudyProgram"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"StudyProgram"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StudyProgram"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudyProgram"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    code?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    sks?: IntFilter<"Course"> | number
    semester?: IntFilter<"Course"> | number
    category?: StringFilter<"Course"> | string
    specialization?: StringNullableFilter<"Course"> | string | null
    studyProgram?: StringNullableFilter<"Course"> | string | null
    description?: StringFilter<"Course"> | string
    prerequisites?: StringFilter<"Course"> | string
    syllabusTopic?: StringFilter<"Course"> | string
    rpsUrl?: StringNullableFilter<"Course"> | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    sks?: SortOrder
    semester?: SortOrder
    category?: SortOrder
    specialization?: SortOrderInput | SortOrder
    studyProgram?: SortOrderInput | SortOrder
    description?: SortOrder
    prerequisites?: SortOrder
    syllabusTopic?: SortOrder
    rpsUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    sks?: IntFilter<"Course"> | number
    semester?: IntFilter<"Course"> | number
    category?: StringFilter<"Course"> | string
    specialization?: StringNullableFilter<"Course"> | string | null
    studyProgram?: StringNullableFilter<"Course"> | string | null
    description?: StringFilter<"Course"> | string
    prerequisites?: StringFilter<"Course"> | string
    syllabusTopic?: StringFilter<"Course"> | string
    rpsUrl?: StringNullableFilter<"Course"> | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }, "id" | "code">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    sks?: SortOrder
    semester?: SortOrder
    category?: SortOrder
    specialization?: SortOrderInput | SortOrder
    studyProgram?: SortOrderInput | SortOrder
    description?: SortOrder
    prerequisites?: SortOrder
    syllabusTopic?: SortOrder
    rpsUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    code?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    sks?: IntWithAggregatesFilter<"Course"> | number
    semester?: IntWithAggregatesFilter<"Course"> | number
    category?: StringWithAggregatesFilter<"Course"> | string
    specialization?: StringNullableWithAggregatesFilter<"Course"> | string | null
    studyProgram?: StringNullableWithAggregatesFilter<"Course"> | string | null
    description?: StringWithAggregatesFilter<"Course"> | string
    prerequisites?: StringWithAggregatesFilter<"Course"> | string
    syllabusTopic?: StringWithAggregatesFilter<"Course"> | string
    rpsUrl?: StringNullableWithAggregatesFilter<"Course"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type StudentOrgWhereInput = {
    AND?: StudentOrgWhereInput | StudentOrgWhereInput[]
    OR?: StudentOrgWhereInput[]
    NOT?: StudentOrgWhereInput | StudentOrgWhereInput[]
    id?: StringFilter<"StudentOrg"> | string
    name?: StringFilter<"StudentOrg"> | string
    abbreviation?: StringFilter<"StudentOrg"> | string
    logo?: StringFilter<"StudentOrg"> | string
    description?: StringFilter<"StudentOrg"> | string
    cabinetName?: StringFilter<"StudentOrg"> | string
    cabinetYear?: StringFilter<"StudentOrg"> | string
    leaderName?: StringFilter<"StudentOrg"> | string
    leaderPhoto?: StringFilter<"StudentOrg"> | string
    viceLeaderName?: StringFilter<"StudentOrg"> | string
    divisions?: StringFilter<"StudentOrg"> | string
    upcomingEvents?: StringFilter<"StudentOrg"> | string
    updatedAt?: DateTimeFilter<"StudentOrg"> | Date | string
  }

  export type StudentOrgOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    logo?: SortOrder
    description?: SortOrder
    cabinetName?: SortOrder
    cabinetYear?: SortOrder
    leaderName?: SortOrder
    leaderPhoto?: SortOrder
    viceLeaderName?: SortOrder
    divisions?: SortOrder
    upcomingEvents?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentOrgWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentOrgWhereInput | StudentOrgWhereInput[]
    OR?: StudentOrgWhereInput[]
    NOT?: StudentOrgWhereInput | StudentOrgWhereInput[]
    name?: StringFilter<"StudentOrg"> | string
    abbreviation?: StringFilter<"StudentOrg"> | string
    logo?: StringFilter<"StudentOrg"> | string
    description?: StringFilter<"StudentOrg"> | string
    cabinetName?: StringFilter<"StudentOrg"> | string
    cabinetYear?: StringFilter<"StudentOrg"> | string
    leaderName?: StringFilter<"StudentOrg"> | string
    leaderPhoto?: StringFilter<"StudentOrg"> | string
    viceLeaderName?: StringFilter<"StudentOrg"> | string
    divisions?: StringFilter<"StudentOrg"> | string
    upcomingEvents?: StringFilter<"StudentOrg"> | string
    updatedAt?: DateTimeFilter<"StudentOrg"> | Date | string
  }, "id">

  export type StudentOrgOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    logo?: SortOrder
    description?: SortOrder
    cabinetName?: SortOrder
    cabinetYear?: SortOrder
    leaderName?: SortOrder
    leaderPhoto?: SortOrder
    viceLeaderName?: SortOrder
    divisions?: SortOrder
    upcomingEvents?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentOrgCountOrderByAggregateInput
    _max?: StudentOrgMaxOrderByAggregateInput
    _min?: StudentOrgMinOrderByAggregateInput
  }

  export type StudentOrgScalarWhereWithAggregatesInput = {
    AND?: StudentOrgScalarWhereWithAggregatesInput | StudentOrgScalarWhereWithAggregatesInput[]
    OR?: StudentOrgScalarWhereWithAggregatesInput[]
    NOT?: StudentOrgScalarWhereWithAggregatesInput | StudentOrgScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentOrg"> | string
    name?: StringWithAggregatesFilter<"StudentOrg"> | string
    abbreviation?: StringWithAggregatesFilter<"StudentOrg"> | string
    logo?: StringWithAggregatesFilter<"StudentOrg"> | string
    description?: StringWithAggregatesFilter<"StudentOrg"> | string
    cabinetName?: StringWithAggregatesFilter<"StudentOrg"> | string
    cabinetYear?: StringWithAggregatesFilter<"StudentOrg"> | string
    leaderName?: StringWithAggregatesFilter<"StudentOrg"> | string
    leaderPhoto?: StringWithAggregatesFilter<"StudentOrg"> | string
    viceLeaderName?: StringWithAggregatesFilter<"StudentOrg"> | string
    divisions?: StringWithAggregatesFilter<"StudentOrg"> | string
    upcomingEvents?: StringWithAggregatesFilter<"StudentOrg"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentOrg"> | Date | string
  }

  export type MediaFileWhereInput = {
    AND?: MediaFileWhereInput | MediaFileWhereInput[]
    OR?: MediaFileWhereInput[]
    NOT?: MediaFileWhereInput | MediaFileWhereInput[]
    id?: StringFilter<"MediaFile"> | string
    fileName?: StringFilter<"MediaFile"> | string
    originalName?: StringFilter<"MediaFile"> | string
    sizeBytes?: IntFilter<"MediaFile"> | number
    type?: StringFilter<"MediaFile"> | string
    url?: StringFilter<"MediaFile"> | string
    uploadedAt?: StringFilter<"MediaFile"> | string
    dimensions?: StringNullableFilter<"MediaFile"> | string | null
    folderId?: StringNullableFilter<"MediaFile"> | string | null
    createdAt?: DateTimeFilter<"MediaFile"> | Date | string
  }

  export type MediaFileOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    sizeBytes?: SortOrder
    type?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    dimensions?: SortOrderInput | SortOrder
    folderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type MediaFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaFileWhereInput | MediaFileWhereInput[]
    OR?: MediaFileWhereInput[]
    NOT?: MediaFileWhereInput | MediaFileWhereInput[]
    fileName?: StringFilter<"MediaFile"> | string
    originalName?: StringFilter<"MediaFile"> | string
    sizeBytes?: IntFilter<"MediaFile"> | number
    type?: StringFilter<"MediaFile"> | string
    url?: StringFilter<"MediaFile"> | string
    uploadedAt?: StringFilter<"MediaFile"> | string
    dimensions?: StringNullableFilter<"MediaFile"> | string | null
    folderId?: StringNullableFilter<"MediaFile"> | string | null
    createdAt?: DateTimeFilter<"MediaFile"> | Date | string
  }, "id">

  export type MediaFileOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    sizeBytes?: SortOrder
    type?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    dimensions?: SortOrderInput | SortOrder
    folderId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MediaFileCountOrderByAggregateInput
    _avg?: MediaFileAvgOrderByAggregateInput
    _max?: MediaFileMaxOrderByAggregateInput
    _min?: MediaFileMinOrderByAggregateInput
    _sum?: MediaFileSumOrderByAggregateInput
  }

  export type MediaFileScalarWhereWithAggregatesInput = {
    AND?: MediaFileScalarWhereWithAggregatesInput | MediaFileScalarWhereWithAggregatesInput[]
    OR?: MediaFileScalarWhereWithAggregatesInput[]
    NOT?: MediaFileScalarWhereWithAggregatesInput | MediaFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MediaFile"> | string
    fileName?: StringWithAggregatesFilter<"MediaFile"> | string
    originalName?: StringWithAggregatesFilter<"MediaFile"> | string
    sizeBytes?: IntWithAggregatesFilter<"MediaFile"> | number
    type?: StringWithAggregatesFilter<"MediaFile"> | string
    url?: StringWithAggregatesFilter<"MediaFile"> | string
    uploadedAt?: StringWithAggregatesFilter<"MediaFile"> | string
    dimensions?: StringNullableWithAggregatesFilter<"MediaFile"> | string | null
    folderId?: StringNullableWithAggregatesFilter<"MediaFile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MediaFile"> | Date | string
  }

  export type MenuItemWhereInput = {
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    id?: StringFilter<"MenuItem"> | string
    label?: StringFilter<"MenuItem"> | string
    url?: StringFilter<"MenuItem"> | string
    isExternal?: BoolFilter<"MenuItem"> | boolean
    isVisible?: BoolFilter<"MenuItem"> | boolean
    badge?: StringNullableFilter<"MenuItem"> | string | null
    order?: IntFilter<"MenuItem"> | number
    parentId?: StringNullableFilter<"MenuItem"> | string | null
    icon?: StringNullableFilter<"MenuItem"> | string | null
    line1?: StringNullableFilter<"MenuItem"> | string | null
    line2?: StringNullableFilter<"MenuItem"> | string | null
    childrenData?: StringNullableFilter<"MenuItem"> | string | null
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
  }

  export type MenuItemOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrder
    isExternal?: SortOrder
    isVisible?: SortOrder
    badge?: SortOrderInput | SortOrder
    order?: SortOrder
    parentId?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    line1?: SortOrderInput | SortOrder
    line2?: SortOrderInput | SortOrder
    childrenData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    label?: StringFilter<"MenuItem"> | string
    url?: StringFilter<"MenuItem"> | string
    isExternal?: BoolFilter<"MenuItem"> | boolean
    isVisible?: BoolFilter<"MenuItem"> | boolean
    badge?: StringNullableFilter<"MenuItem"> | string | null
    order?: IntFilter<"MenuItem"> | number
    parentId?: StringNullableFilter<"MenuItem"> | string | null
    icon?: StringNullableFilter<"MenuItem"> | string | null
    line1?: StringNullableFilter<"MenuItem"> | string | null
    line2?: StringNullableFilter<"MenuItem"> | string | null
    childrenData?: StringNullableFilter<"MenuItem"> | string | null
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
  }, "id">

  export type MenuItemOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrder
    isExternal?: SortOrder
    isVisible?: SortOrder
    badge?: SortOrderInput | SortOrder
    order?: SortOrder
    parentId?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    line1?: SortOrderInput | SortOrder
    line2?: SortOrderInput | SortOrder
    childrenData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuItemCountOrderByAggregateInput
    _avg?: MenuItemAvgOrderByAggregateInput
    _max?: MenuItemMaxOrderByAggregateInput
    _min?: MenuItemMinOrderByAggregateInput
    _sum?: MenuItemSumOrderByAggregateInput
  }

  export type MenuItemScalarWhereWithAggregatesInput = {
    AND?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    OR?: MenuItemScalarWhereWithAggregatesInput[]
    NOT?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MenuItem"> | string
    label?: StringWithAggregatesFilter<"MenuItem"> | string
    url?: StringWithAggregatesFilter<"MenuItem"> | string
    isExternal?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    isVisible?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    badge?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    order?: IntWithAggregatesFilter<"MenuItem"> | number
    parentId?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    icon?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    line1?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    line2?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    childrenData?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
  }

  export type LaboratoryWhereInput = {
    AND?: LaboratoryWhereInput | LaboratoryWhereInput[]
    OR?: LaboratoryWhereInput[]
    NOT?: LaboratoryWhereInput | LaboratoryWhereInput[]
    id?: StringFilter<"Laboratory"> | string
    code?: StringFilter<"Laboratory"> | string
    name?: StringFilter<"Laboratory"> | string
    shortDesc?: StringFilter<"Laboratory"> | string
    headOfLab?: StringFilter<"Laboratory"> | string
    headPhoto?: StringFilter<"Laboratory"> | string
    labAssistants?: StringFilter<"Laboratory"> | string
    image?: StringFilter<"Laboratory"> | string
    location?: StringFilter<"Laboratory"> | string
    capacity?: IntFilter<"Laboratory"> | number
    specifications?: StringFilter<"Laboratory"> | string
    equipmentList?: StringFilter<"Laboratory"> | string
    softwareInstalled?: StringFilter<"Laboratory"> | string
    virtualTour360Url?: StringNullableFilter<"Laboratory"> | string | null
    createdAt?: DateTimeFilter<"Laboratory"> | Date | string
    updatedAt?: DateTimeFilter<"Laboratory"> | Date | string
  }

  export type LaboratoryOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    shortDesc?: SortOrder
    headOfLab?: SortOrder
    headPhoto?: SortOrder
    labAssistants?: SortOrder
    image?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    specifications?: SortOrder
    equipmentList?: SortOrder
    softwareInstalled?: SortOrder
    virtualTour360Url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaboratoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: LaboratoryWhereInput | LaboratoryWhereInput[]
    OR?: LaboratoryWhereInput[]
    NOT?: LaboratoryWhereInput | LaboratoryWhereInput[]
    name?: StringFilter<"Laboratory"> | string
    shortDesc?: StringFilter<"Laboratory"> | string
    headOfLab?: StringFilter<"Laboratory"> | string
    headPhoto?: StringFilter<"Laboratory"> | string
    labAssistants?: StringFilter<"Laboratory"> | string
    image?: StringFilter<"Laboratory"> | string
    location?: StringFilter<"Laboratory"> | string
    capacity?: IntFilter<"Laboratory"> | number
    specifications?: StringFilter<"Laboratory"> | string
    equipmentList?: StringFilter<"Laboratory"> | string
    softwareInstalled?: StringFilter<"Laboratory"> | string
    virtualTour360Url?: StringNullableFilter<"Laboratory"> | string | null
    createdAt?: DateTimeFilter<"Laboratory"> | Date | string
    updatedAt?: DateTimeFilter<"Laboratory"> | Date | string
  }, "id" | "code">

  export type LaboratoryOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    shortDesc?: SortOrder
    headOfLab?: SortOrder
    headPhoto?: SortOrder
    labAssistants?: SortOrder
    image?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    specifications?: SortOrder
    equipmentList?: SortOrder
    softwareInstalled?: SortOrder
    virtualTour360Url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LaboratoryCountOrderByAggregateInput
    _avg?: LaboratoryAvgOrderByAggregateInput
    _max?: LaboratoryMaxOrderByAggregateInput
    _min?: LaboratoryMinOrderByAggregateInput
    _sum?: LaboratorySumOrderByAggregateInput
  }

  export type LaboratoryScalarWhereWithAggregatesInput = {
    AND?: LaboratoryScalarWhereWithAggregatesInput | LaboratoryScalarWhereWithAggregatesInput[]
    OR?: LaboratoryScalarWhereWithAggregatesInput[]
    NOT?: LaboratoryScalarWhereWithAggregatesInput | LaboratoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Laboratory"> | string
    code?: StringWithAggregatesFilter<"Laboratory"> | string
    name?: StringWithAggregatesFilter<"Laboratory"> | string
    shortDesc?: StringWithAggregatesFilter<"Laboratory"> | string
    headOfLab?: StringWithAggregatesFilter<"Laboratory"> | string
    headPhoto?: StringWithAggregatesFilter<"Laboratory"> | string
    labAssistants?: StringWithAggregatesFilter<"Laboratory"> | string
    image?: StringWithAggregatesFilter<"Laboratory"> | string
    location?: StringWithAggregatesFilter<"Laboratory"> | string
    capacity?: IntWithAggregatesFilter<"Laboratory"> | number
    specifications?: StringWithAggregatesFilter<"Laboratory"> | string
    equipmentList?: StringWithAggregatesFilter<"Laboratory"> | string
    softwareInstalled?: StringWithAggregatesFilter<"Laboratory"> | string
    virtualTour360Url?: StringNullableWithAggregatesFilter<"Laboratory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Laboratory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Laboratory"> | Date | string
  }

  export type ResearchGroupWhereInput = {
    AND?: ResearchGroupWhereInput | ResearchGroupWhereInput[]
    OR?: ResearchGroupWhereInput[]
    NOT?: ResearchGroupWhereInput | ResearchGroupWhereInput[]
    id?: StringFilter<"ResearchGroup"> | string
    code?: StringFilter<"ResearchGroup"> | string
    name?: StringFilter<"ResearchGroup"> | string
    leadLecturer?: StringFilter<"ResearchGroup"> | string
    membersCount?: IntFilter<"ResearchGroup"> | number
    description?: StringFilter<"ResearchGroup"> | string
    topics?: StringFilter<"ResearchGroup"> | string
    createdAt?: DateTimeFilter<"ResearchGroup"> | Date | string
    updatedAt?: DateTimeFilter<"ResearchGroup"> | Date | string
  }

  export type ResearchGroupOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    leadLecturer?: SortOrder
    membersCount?: SortOrder
    description?: SortOrder
    topics?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResearchGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ResearchGroupWhereInput | ResearchGroupWhereInput[]
    OR?: ResearchGroupWhereInput[]
    NOT?: ResearchGroupWhereInput | ResearchGroupWhereInput[]
    name?: StringFilter<"ResearchGroup"> | string
    leadLecturer?: StringFilter<"ResearchGroup"> | string
    membersCount?: IntFilter<"ResearchGroup"> | number
    description?: StringFilter<"ResearchGroup"> | string
    topics?: StringFilter<"ResearchGroup"> | string
    createdAt?: DateTimeFilter<"ResearchGroup"> | Date | string
    updatedAt?: DateTimeFilter<"ResearchGroup"> | Date | string
  }, "id" | "code">

  export type ResearchGroupOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    leadLecturer?: SortOrder
    membersCount?: SortOrder
    description?: SortOrder
    topics?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResearchGroupCountOrderByAggregateInput
    _avg?: ResearchGroupAvgOrderByAggregateInput
    _max?: ResearchGroupMaxOrderByAggregateInput
    _min?: ResearchGroupMinOrderByAggregateInput
    _sum?: ResearchGroupSumOrderByAggregateInput
  }

  export type ResearchGroupScalarWhereWithAggregatesInput = {
    AND?: ResearchGroupScalarWhereWithAggregatesInput | ResearchGroupScalarWhereWithAggregatesInput[]
    OR?: ResearchGroupScalarWhereWithAggregatesInput[]
    NOT?: ResearchGroupScalarWhereWithAggregatesInput | ResearchGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ResearchGroup"> | string
    code?: StringWithAggregatesFilter<"ResearchGroup"> | string
    name?: StringWithAggregatesFilter<"ResearchGroup"> | string
    leadLecturer?: StringWithAggregatesFilter<"ResearchGroup"> | string
    membersCount?: IntWithAggregatesFilter<"ResearchGroup"> | number
    description?: StringWithAggregatesFilter<"ResearchGroup"> | string
    topics?: StringWithAggregatesFilter<"ResearchGroup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ResearchGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ResearchGroup"> | Date | string
  }

  export type PublicationWhereInput = {
    AND?: PublicationWhereInput | PublicationWhereInput[]
    OR?: PublicationWhereInput[]
    NOT?: PublicationWhereInput | PublicationWhereInput[]
    id?: StringFilter<"Publication"> | string
    title?: StringFilter<"Publication"> | string
    authors?: StringFilter<"Publication"> | string
    year?: IntFilter<"Publication"> | number
    publisher?: StringFilter<"Publication"> | string
    type?: StringFilter<"Publication"> | string
    pdfUrl?: StringNullableFilter<"Publication"> | string | null
    doi?: StringNullableFilter<"Publication"> | string | null
    specialization?: StringNullableFilter<"Publication"> | string | null
    createdAt?: DateTimeFilter<"Publication"> | Date | string
    updatedAt?: DateTimeFilter<"Publication"> | Date | string
  }

  export type PublicationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    authors?: SortOrder
    year?: SortOrder
    publisher?: SortOrder
    type?: SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    doi?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PublicationWhereInput | PublicationWhereInput[]
    OR?: PublicationWhereInput[]
    NOT?: PublicationWhereInput | PublicationWhereInput[]
    title?: StringFilter<"Publication"> | string
    authors?: StringFilter<"Publication"> | string
    year?: IntFilter<"Publication"> | number
    publisher?: StringFilter<"Publication"> | string
    type?: StringFilter<"Publication"> | string
    pdfUrl?: StringNullableFilter<"Publication"> | string | null
    doi?: StringNullableFilter<"Publication"> | string | null
    specialization?: StringNullableFilter<"Publication"> | string | null
    createdAt?: DateTimeFilter<"Publication"> | Date | string
    updatedAt?: DateTimeFilter<"Publication"> | Date | string
  }, "id">

  export type PublicationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    authors?: SortOrder
    year?: SortOrder
    publisher?: SortOrder
    type?: SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    doi?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PublicationCountOrderByAggregateInput
    _avg?: PublicationAvgOrderByAggregateInput
    _max?: PublicationMaxOrderByAggregateInput
    _min?: PublicationMinOrderByAggregateInput
    _sum?: PublicationSumOrderByAggregateInput
  }

  export type PublicationScalarWhereWithAggregatesInput = {
    AND?: PublicationScalarWhereWithAggregatesInput | PublicationScalarWhereWithAggregatesInput[]
    OR?: PublicationScalarWhereWithAggregatesInput[]
    NOT?: PublicationScalarWhereWithAggregatesInput | PublicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Publication"> | string
    title?: StringWithAggregatesFilter<"Publication"> | string
    authors?: StringWithAggregatesFilter<"Publication"> | string
    year?: IntWithAggregatesFilter<"Publication"> | number
    publisher?: StringWithAggregatesFilter<"Publication"> | string
    type?: StringWithAggregatesFilter<"Publication"> | string
    pdfUrl?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    doi?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    specialization?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Publication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Publication"> | Date | string
  }

  export type InnovationProductWhereInput = {
    AND?: InnovationProductWhereInput | InnovationProductWhereInput[]
    OR?: InnovationProductWhereInput[]
    NOT?: InnovationProductWhereInput | InnovationProductWhereInput[]
    id?: StringFilter<"InnovationProduct"> | string
    title?: StringFilter<"InnovationProduct"> | string
    developer?: StringFilter<"InnovationProduct"> | string
    category?: StringFilter<"InnovationProduct"> | string
    year?: IntFilter<"InnovationProduct"> | number
    thumbnail?: StringFilter<"InnovationProduct"> | string
    description?: StringFilter<"InnovationProduct"> | string
    techStack?: StringFilter<"InnovationProduct"> | string
    demoUrl?: StringNullableFilter<"InnovationProduct"> | string | null
    githubUrl?: StringNullableFilter<"InnovationProduct"> | string | null
    award?: StringNullableFilter<"InnovationProduct"> | string | null
    createdAt?: DateTimeFilter<"InnovationProduct"> | Date | string
    updatedAt?: DateTimeFilter<"InnovationProduct"> | Date | string
  }

  export type InnovationProductOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    developer?: SortOrder
    category?: SortOrder
    year?: SortOrder
    thumbnail?: SortOrder
    description?: SortOrder
    techStack?: SortOrder
    demoUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    award?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InnovationProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InnovationProductWhereInput | InnovationProductWhereInput[]
    OR?: InnovationProductWhereInput[]
    NOT?: InnovationProductWhereInput | InnovationProductWhereInput[]
    title?: StringFilter<"InnovationProduct"> | string
    developer?: StringFilter<"InnovationProduct"> | string
    category?: StringFilter<"InnovationProduct"> | string
    year?: IntFilter<"InnovationProduct"> | number
    thumbnail?: StringFilter<"InnovationProduct"> | string
    description?: StringFilter<"InnovationProduct"> | string
    techStack?: StringFilter<"InnovationProduct"> | string
    demoUrl?: StringNullableFilter<"InnovationProduct"> | string | null
    githubUrl?: StringNullableFilter<"InnovationProduct"> | string | null
    award?: StringNullableFilter<"InnovationProduct"> | string | null
    createdAt?: DateTimeFilter<"InnovationProduct"> | Date | string
    updatedAt?: DateTimeFilter<"InnovationProduct"> | Date | string
  }, "id">

  export type InnovationProductOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    developer?: SortOrder
    category?: SortOrder
    year?: SortOrder
    thumbnail?: SortOrder
    description?: SortOrder
    techStack?: SortOrder
    demoUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    award?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InnovationProductCountOrderByAggregateInput
    _avg?: InnovationProductAvgOrderByAggregateInput
    _max?: InnovationProductMaxOrderByAggregateInput
    _min?: InnovationProductMinOrderByAggregateInput
    _sum?: InnovationProductSumOrderByAggregateInput
  }

  export type InnovationProductScalarWhereWithAggregatesInput = {
    AND?: InnovationProductScalarWhereWithAggregatesInput | InnovationProductScalarWhereWithAggregatesInput[]
    OR?: InnovationProductScalarWhereWithAggregatesInput[]
    NOT?: InnovationProductScalarWhereWithAggregatesInput | InnovationProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InnovationProduct"> | string
    title?: StringWithAggregatesFilter<"InnovationProduct"> | string
    developer?: StringWithAggregatesFilter<"InnovationProduct"> | string
    category?: StringWithAggregatesFilter<"InnovationProduct"> | string
    year?: IntWithAggregatesFilter<"InnovationProduct"> | number
    thumbnail?: StringWithAggregatesFilter<"InnovationProduct"> | string
    description?: StringWithAggregatesFilter<"InnovationProduct"> | string
    techStack?: StringWithAggregatesFilter<"InnovationProduct"> | string
    demoUrl?: StringNullableWithAggregatesFilter<"InnovationProduct"> | string | null
    githubUrl?: StringNullableWithAggregatesFilter<"InnovationProduct"> | string | null
    award?: StringNullableWithAggregatesFilter<"InnovationProduct"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InnovationProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InnovationProduct"> | Date | string
  }

  export type StudentAchievementWhereInput = {
    AND?: StudentAchievementWhereInput | StudentAchievementWhereInput[]
    OR?: StudentAchievementWhereInput[]
    NOT?: StudentAchievementWhereInput | StudentAchievementWhereInput[]
    id?: StringFilter<"StudentAchievement"> | string
    competition?: StringFilter<"StudentAchievement"> | string
    title?: StringFilter<"StudentAchievement"> | string
    rank?: StringFilter<"StudentAchievement"> | string
    level?: StringFilter<"StudentAchievement"> | string
    year?: IntFilter<"StudentAchievement"> | number
    studentNames?: StringFilter<"StudentAchievement"> | string
    mentorLecturer?: StringFilter<"StudentAchievement"> | string
    image?: StringFilter<"StudentAchievement"> | string
    createdAt?: DateTimeFilter<"StudentAchievement"> | Date | string
    updatedAt?: DateTimeFilter<"StudentAchievement"> | Date | string
  }

  export type StudentAchievementOrderByWithRelationInput = {
    id?: SortOrder
    competition?: SortOrder
    title?: SortOrder
    rank?: SortOrder
    level?: SortOrder
    year?: SortOrder
    studentNames?: SortOrder
    mentorLecturer?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentAchievementWhereInput | StudentAchievementWhereInput[]
    OR?: StudentAchievementWhereInput[]
    NOT?: StudentAchievementWhereInput | StudentAchievementWhereInput[]
    competition?: StringFilter<"StudentAchievement"> | string
    title?: StringFilter<"StudentAchievement"> | string
    rank?: StringFilter<"StudentAchievement"> | string
    level?: StringFilter<"StudentAchievement"> | string
    year?: IntFilter<"StudentAchievement"> | number
    studentNames?: StringFilter<"StudentAchievement"> | string
    mentorLecturer?: StringFilter<"StudentAchievement"> | string
    image?: StringFilter<"StudentAchievement"> | string
    createdAt?: DateTimeFilter<"StudentAchievement"> | Date | string
    updatedAt?: DateTimeFilter<"StudentAchievement"> | Date | string
  }, "id">

  export type StudentAchievementOrderByWithAggregationInput = {
    id?: SortOrder
    competition?: SortOrder
    title?: SortOrder
    rank?: SortOrder
    level?: SortOrder
    year?: SortOrder
    studentNames?: SortOrder
    mentorLecturer?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentAchievementCountOrderByAggregateInput
    _avg?: StudentAchievementAvgOrderByAggregateInput
    _max?: StudentAchievementMaxOrderByAggregateInput
    _min?: StudentAchievementMinOrderByAggregateInput
    _sum?: StudentAchievementSumOrderByAggregateInput
  }

  export type StudentAchievementScalarWhereWithAggregatesInput = {
    AND?: StudentAchievementScalarWhereWithAggregatesInput | StudentAchievementScalarWhereWithAggregatesInput[]
    OR?: StudentAchievementScalarWhereWithAggregatesInput[]
    NOT?: StudentAchievementScalarWhereWithAggregatesInput | StudentAchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentAchievement"> | string
    competition?: StringWithAggregatesFilter<"StudentAchievement"> | string
    title?: StringWithAggregatesFilter<"StudentAchievement"> | string
    rank?: StringWithAggregatesFilter<"StudentAchievement"> | string
    level?: StringWithAggregatesFilter<"StudentAchievement"> | string
    year?: IntWithAggregatesFilter<"StudentAchievement"> | number
    studentNames?: StringWithAggregatesFilter<"StudentAchievement"> | string
    mentorLecturer?: StringWithAggregatesFilter<"StudentAchievement"> | string
    image?: StringWithAggregatesFilter<"StudentAchievement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StudentAchievement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentAchievement"> | Date | string
  }

  export type AlumniTestimonialWhereInput = {
    AND?: AlumniTestimonialWhereInput | AlumniTestimonialWhereInput[]
    OR?: AlumniTestimonialWhereInput[]
    NOT?: AlumniTestimonialWhereInput | AlumniTestimonialWhereInput[]
    id?: StringFilter<"AlumniTestimonial"> | string
    name?: StringFilter<"AlumniTestimonial"> | string
    gradYear?: IntFilter<"AlumniTestimonial"> | number
    role?: StringFilter<"AlumniTestimonial"> | string
    company?: StringFilter<"AlumniTestimonial"> | string
    companyLogo?: StringFilter<"AlumniTestimonial"> | string
    photo?: StringFilter<"AlumniTestimonial"> | string
    quote?: StringFilter<"AlumniTestimonial"> | string
    linkedinUrl?: StringNullableFilter<"AlumniTestimonial"> | string | null
    createdAt?: DateTimeFilter<"AlumniTestimonial"> | Date | string
    updatedAt?: DateTimeFilter<"AlumniTestimonial"> | Date | string
  }

  export type AlumniTestimonialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gradYear?: SortOrder
    role?: SortOrder
    company?: SortOrder
    companyLogo?: SortOrder
    photo?: SortOrder
    quote?: SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlumniTestimonialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlumniTestimonialWhereInput | AlumniTestimonialWhereInput[]
    OR?: AlumniTestimonialWhereInput[]
    NOT?: AlumniTestimonialWhereInput | AlumniTestimonialWhereInput[]
    name?: StringFilter<"AlumniTestimonial"> | string
    gradYear?: IntFilter<"AlumniTestimonial"> | number
    role?: StringFilter<"AlumniTestimonial"> | string
    company?: StringFilter<"AlumniTestimonial"> | string
    companyLogo?: StringFilter<"AlumniTestimonial"> | string
    photo?: StringFilter<"AlumniTestimonial"> | string
    quote?: StringFilter<"AlumniTestimonial"> | string
    linkedinUrl?: StringNullableFilter<"AlumniTestimonial"> | string | null
    createdAt?: DateTimeFilter<"AlumniTestimonial"> | Date | string
    updatedAt?: DateTimeFilter<"AlumniTestimonial"> | Date | string
  }, "id">

  export type AlumniTestimonialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gradYear?: SortOrder
    role?: SortOrder
    company?: SortOrder
    companyLogo?: SortOrder
    photo?: SortOrder
    quote?: SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlumniTestimonialCountOrderByAggregateInput
    _avg?: AlumniTestimonialAvgOrderByAggregateInput
    _max?: AlumniTestimonialMaxOrderByAggregateInput
    _min?: AlumniTestimonialMinOrderByAggregateInput
    _sum?: AlumniTestimonialSumOrderByAggregateInput
  }

  export type AlumniTestimonialScalarWhereWithAggregatesInput = {
    AND?: AlumniTestimonialScalarWhereWithAggregatesInput | AlumniTestimonialScalarWhereWithAggregatesInput[]
    OR?: AlumniTestimonialScalarWhereWithAggregatesInput[]
    NOT?: AlumniTestimonialScalarWhereWithAggregatesInput | AlumniTestimonialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlumniTestimonial"> | string
    name?: StringWithAggregatesFilter<"AlumniTestimonial"> | string
    gradYear?: IntWithAggregatesFilter<"AlumniTestimonial"> | number
    role?: StringWithAggregatesFilter<"AlumniTestimonial"> | string
    company?: StringWithAggregatesFilter<"AlumniTestimonial"> | string
    companyLogo?: StringWithAggregatesFilter<"AlumniTestimonial"> | string
    photo?: StringWithAggregatesFilter<"AlumniTestimonial"> | string
    quote?: StringWithAggregatesFilter<"AlumniTestimonial"> | string
    linkedinUrl?: StringNullableWithAggregatesFilter<"AlumniTestimonial"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AlumniTestimonial"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AlumniTestimonial"> | Date | string
  }

  export type JobVacancyWhereInput = {
    AND?: JobVacancyWhereInput | JobVacancyWhereInput[]
    OR?: JobVacancyWhereInput[]
    NOT?: JobVacancyWhereInput | JobVacancyWhereInput[]
    id?: StringFilter<"JobVacancy"> | string
    title?: StringFilter<"JobVacancy"> | string
    company?: StringFilter<"JobVacancy"> | string
    logo?: StringFilter<"JobVacancy"> | string
    location?: StringFilter<"JobVacancy"> | string
    type?: StringFilter<"JobVacancy"> | string
    specialization?: StringNullableFilter<"JobVacancy"> | string | null
    postedDate?: StringFilter<"JobVacancy"> | string
    applyDeadline?: StringFilter<"JobVacancy"> | string
    requirements?: StringFilter<"JobVacancy"> | string
    applyLink?: StringFilter<"JobVacancy"> | string
    createdAt?: DateTimeFilter<"JobVacancy"> | Date | string
    updatedAt?: DateTimeFilter<"JobVacancy"> | Date | string
  }

  export type JobVacancyOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    logo?: SortOrder
    location?: SortOrder
    type?: SortOrder
    specialization?: SortOrderInput | SortOrder
    postedDate?: SortOrder
    applyDeadline?: SortOrder
    requirements?: SortOrder
    applyLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobVacancyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobVacancyWhereInput | JobVacancyWhereInput[]
    OR?: JobVacancyWhereInput[]
    NOT?: JobVacancyWhereInput | JobVacancyWhereInput[]
    title?: StringFilter<"JobVacancy"> | string
    company?: StringFilter<"JobVacancy"> | string
    logo?: StringFilter<"JobVacancy"> | string
    location?: StringFilter<"JobVacancy"> | string
    type?: StringFilter<"JobVacancy"> | string
    specialization?: StringNullableFilter<"JobVacancy"> | string | null
    postedDate?: StringFilter<"JobVacancy"> | string
    applyDeadline?: StringFilter<"JobVacancy"> | string
    requirements?: StringFilter<"JobVacancy"> | string
    applyLink?: StringFilter<"JobVacancy"> | string
    createdAt?: DateTimeFilter<"JobVacancy"> | Date | string
    updatedAt?: DateTimeFilter<"JobVacancy"> | Date | string
  }, "id">

  export type JobVacancyOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    logo?: SortOrder
    location?: SortOrder
    type?: SortOrder
    specialization?: SortOrderInput | SortOrder
    postedDate?: SortOrder
    applyDeadline?: SortOrder
    requirements?: SortOrder
    applyLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobVacancyCountOrderByAggregateInput
    _max?: JobVacancyMaxOrderByAggregateInput
    _min?: JobVacancyMinOrderByAggregateInput
  }

  export type JobVacancyScalarWhereWithAggregatesInput = {
    AND?: JobVacancyScalarWhereWithAggregatesInput | JobVacancyScalarWhereWithAggregatesInput[]
    OR?: JobVacancyScalarWhereWithAggregatesInput[]
    NOT?: JobVacancyScalarWhereWithAggregatesInput | JobVacancyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobVacancy"> | string
    title?: StringWithAggregatesFilter<"JobVacancy"> | string
    company?: StringWithAggregatesFilter<"JobVacancy"> | string
    logo?: StringWithAggregatesFilter<"JobVacancy"> | string
    location?: StringWithAggregatesFilter<"JobVacancy"> | string
    type?: StringWithAggregatesFilter<"JobVacancy"> | string
    specialization?: StringNullableWithAggregatesFilter<"JobVacancy"> | string | null
    postedDate?: StringWithAggregatesFilter<"JobVacancy"> | string
    applyDeadline?: StringWithAggregatesFilter<"JobVacancy"> | string
    requirements?: StringWithAggregatesFilter<"JobVacancy"> | string
    applyLink?: StringWithAggregatesFilter<"JobVacancy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"JobVacancy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobVacancy"> | Date | string
  }

  export type PMBTrackWhereInput = {
    AND?: PMBTrackWhereInput | PMBTrackWhereInput[]
    OR?: PMBTrackWhereInput[]
    NOT?: PMBTrackWhereInput | PMBTrackWhereInput[]
    id?: StringFilter<"PMBTrack"> | string
    code?: StringFilter<"PMBTrack"> | string
    name?: StringFilter<"PMBTrack"> | string
    description?: StringFilter<"PMBTrack"> | string
    capacity?: IntFilter<"PMBTrack"> | number
    period?: StringFilter<"PMBTrack"> | string
    requirements?: StringFilter<"PMBTrack"> | string
    benefits?: StringFilter<"PMBTrack"> | string
    feeEstimate?: StringFilter<"PMBTrack"> | string
    createdAt?: DateTimeFilter<"PMBTrack"> | Date | string
    updatedAt?: DateTimeFilter<"PMBTrack"> | Date | string
  }

  export type PMBTrackOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    capacity?: SortOrder
    period?: SortOrder
    requirements?: SortOrder
    benefits?: SortOrder
    feeEstimate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PMBTrackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: PMBTrackWhereInput | PMBTrackWhereInput[]
    OR?: PMBTrackWhereInput[]
    NOT?: PMBTrackWhereInput | PMBTrackWhereInput[]
    name?: StringFilter<"PMBTrack"> | string
    description?: StringFilter<"PMBTrack"> | string
    capacity?: IntFilter<"PMBTrack"> | number
    period?: StringFilter<"PMBTrack"> | string
    requirements?: StringFilter<"PMBTrack"> | string
    benefits?: StringFilter<"PMBTrack"> | string
    feeEstimate?: StringFilter<"PMBTrack"> | string
    createdAt?: DateTimeFilter<"PMBTrack"> | Date | string
    updatedAt?: DateTimeFilter<"PMBTrack"> | Date | string
  }, "id" | "code">

  export type PMBTrackOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    capacity?: SortOrder
    period?: SortOrder
    requirements?: SortOrder
    benefits?: SortOrder
    feeEstimate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PMBTrackCountOrderByAggregateInput
    _avg?: PMBTrackAvgOrderByAggregateInput
    _max?: PMBTrackMaxOrderByAggregateInput
    _min?: PMBTrackMinOrderByAggregateInput
    _sum?: PMBTrackSumOrderByAggregateInput
  }

  export type PMBTrackScalarWhereWithAggregatesInput = {
    AND?: PMBTrackScalarWhereWithAggregatesInput | PMBTrackScalarWhereWithAggregatesInput[]
    OR?: PMBTrackScalarWhereWithAggregatesInput[]
    NOT?: PMBTrackScalarWhereWithAggregatesInput | PMBTrackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PMBTrack"> | string
    code?: StringWithAggregatesFilter<"PMBTrack"> | string
    name?: StringWithAggregatesFilter<"PMBTrack"> | string
    description?: StringWithAggregatesFilter<"PMBTrack"> | string
    capacity?: IntWithAggregatesFilter<"PMBTrack"> | number
    period?: StringWithAggregatesFilter<"PMBTrack"> | string
    requirements?: StringWithAggregatesFilter<"PMBTrack"> | string
    benefits?: StringWithAggregatesFilter<"PMBTrack"> | string
    feeEstimate?: StringWithAggregatesFilter<"PMBTrack"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PMBTrack"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PMBTrack"> | Date | string
  }

  export type AcademicCalendarItemWhereInput = {
    AND?: AcademicCalendarItemWhereInput | AcademicCalendarItemWhereInput[]
    OR?: AcademicCalendarItemWhereInput[]
    NOT?: AcademicCalendarItemWhereInput | AcademicCalendarItemWhereInput[]
    id?: StringFilter<"AcademicCalendarItem"> | string
    title?: StringFilter<"AcademicCalendarItem"> | string
    startDate?: StringFilter<"AcademicCalendarItem"> | string
    endDate?: StringFilter<"AcademicCalendarItem"> | string
    category?: StringFilter<"AcademicCalendarItem"> | string
    semester?: StringFilter<"AcademicCalendarItem"> | string
    createdAt?: DateTimeFilter<"AcademicCalendarItem"> | Date | string
    updatedAt?: DateTimeFilter<"AcademicCalendarItem"> | Date | string
  }

  export type AcademicCalendarItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    category?: SortOrder
    semester?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcademicCalendarItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AcademicCalendarItemWhereInput | AcademicCalendarItemWhereInput[]
    OR?: AcademicCalendarItemWhereInput[]
    NOT?: AcademicCalendarItemWhereInput | AcademicCalendarItemWhereInput[]
    title?: StringFilter<"AcademicCalendarItem"> | string
    startDate?: StringFilter<"AcademicCalendarItem"> | string
    endDate?: StringFilter<"AcademicCalendarItem"> | string
    category?: StringFilter<"AcademicCalendarItem"> | string
    semester?: StringFilter<"AcademicCalendarItem"> | string
    createdAt?: DateTimeFilter<"AcademicCalendarItem"> | Date | string
    updatedAt?: DateTimeFilter<"AcademicCalendarItem"> | Date | string
  }, "id">

  export type AcademicCalendarItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    category?: SortOrder
    semester?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AcademicCalendarItemCountOrderByAggregateInput
    _max?: AcademicCalendarItemMaxOrderByAggregateInput
    _min?: AcademicCalendarItemMinOrderByAggregateInput
  }

  export type AcademicCalendarItemScalarWhereWithAggregatesInput = {
    AND?: AcademicCalendarItemScalarWhereWithAggregatesInput | AcademicCalendarItemScalarWhereWithAggregatesInput[]
    OR?: AcademicCalendarItemScalarWhereWithAggregatesInput[]
    NOT?: AcademicCalendarItemScalarWhereWithAggregatesInput | AcademicCalendarItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AcademicCalendarItem"> | string
    title?: StringWithAggregatesFilter<"AcademicCalendarItem"> | string
    startDate?: StringWithAggregatesFilter<"AcademicCalendarItem"> | string
    endDate?: StringWithAggregatesFilter<"AcademicCalendarItem"> | string
    category?: StringWithAggregatesFilter<"AcademicCalendarItem"> | string
    semester?: StringWithAggregatesFilter<"AcademicCalendarItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AcademicCalendarItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AcademicCalendarItem"> | Date | string
  }

  export type FAQItemWhereInput = {
    AND?: FAQItemWhereInput | FAQItemWhereInput[]
    OR?: FAQItemWhereInput[]
    NOT?: FAQItemWhereInput | FAQItemWhereInput[]
    id?: StringFilter<"FAQItem"> | string
    category?: StringFilter<"FAQItem"> | string
    question?: StringFilter<"FAQItem"> | string
    answer?: StringFilter<"FAQItem"> | string
    createdAt?: DateTimeFilter<"FAQItem"> | Date | string
    updatedAt?: DateTimeFilter<"FAQItem"> | Date | string
  }

  export type FAQItemOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FAQItemWhereInput | FAQItemWhereInput[]
    OR?: FAQItemWhereInput[]
    NOT?: FAQItemWhereInput | FAQItemWhereInput[]
    category?: StringFilter<"FAQItem"> | string
    question?: StringFilter<"FAQItem"> | string
    answer?: StringFilter<"FAQItem"> | string
    createdAt?: DateTimeFilter<"FAQItem"> | Date | string
    updatedAt?: DateTimeFilter<"FAQItem"> | Date | string
  }, "id">

  export type FAQItemOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FAQItemCountOrderByAggregateInput
    _max?: FAQItemMaxOrderByAggregateInput
    _min?: FAQItemMinOrderByAggregateInput
  }

  export type FAQItemScalarWhereWithAggregatesInput = {
    AND?: FAQItemScalarWhereWithAggregatesInput | FAQItemScalarWhereWithAggregatesInput[]
    OR?: FAQItemScalarWhereWithAggregatesInput[]
    NOT?: FAQItemScalarWhereWithAggregatesInput | FAQItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FAQItem"> | string
    category?: StringWithAggregatesFilter<"FAQItem"> | string
    question?: StringWithAggregatesFilter<"FAQItem"> | string
    answer?: StringWithAggregatesFilter<"FAQItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FAQItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FAQItem"> | Date | string
  }

  export type QuickLinkWhereInput = {
    AND?: QuickLinkWhereInput | QuickLinkWhereInput[]
    OR?: QuickLinkWhereInput[]
    NOT?: QuickLinkWhereInput | QuickLinkWhereInput[]
    id?: StringFilter<"QuickLink"> | string
    name?: StringFilter<"QuickLink"> | string
    desc?: StringFilter<"QuickLink"> | string
    url?: StringFilter<"QuickLink"> | string
    iconName?: StringFilter<"QuickLink"> | string
    badge?: StringNullableFilter<"QuickLink"> | string | null
    createdAt?: DateTimeFilter<"QuickLink"> | Date | string
    updatedAt?: DateTimeFilter<"QuickLink"> | Date | string
  }

  export type QuickLinkOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    url?: SortOrder
    iconName?: SortOrder
    badge?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuickLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuickLinkWhereInput | QuickLinkWhereInput[]
    OR?: QuickLinkWhereInput[]
    NOT?: QuickLinkWhereInput | QuickLinkWhereInput[]
    name?: StringFilter<"QuickLink"> | string
    desc?: StringFilter<"QuickLink"> | string
    url?: StringFilter<"QuickLink"> | string
    iconName?: StringFilter<"QuickLink"> | string
    badge?: StringNullableFilter<"QuickLink"> | string | null
    createdAt?: DateTimeFilter<"QuickLink"> | Date | string
    updatedAt?: DateTimeFilter<"QuickLink"> | Date | string
  }, "id">

  export type QuickLinkOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    url?: SortOrder
    iconName?: SortOrder
    badge?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuickLinkCountOrderByAggregateInput
    _max?: QuickLinkMaxOrderByAggregateInput
    _min?: QuickLinkMinOrderByAggregateInput
  }

  export type QuickLinkScalarWhereWithAggregatesInput = {
    AND?: QuickLinkScalarWhereWithAggregatesInput | QuickLinkScalarWhereWithAggregatesInput[]
    OR?: QuickLinkScalarWhereWithAggregatesInput[]
    NOT?: QuickLinkScalarWhereWithAggregatesInput | QuickLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuickLink"> | string
    name?: StringWithAggregatesFilter<"QuickLink"> | string
    desc?: StringWithAggregatesFilter<"QuickLink"> | string
    url?: StringWithAggregatesFilter<"QuickLink"> | string
    iconName?: StringWithAggregatesFilter<"QuickLink"> | string
    badge?: StringNullableWithAggregatesFilter<"QuickLink"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QuickLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuickLink"> | Date | string
  }

  export type SiteDataWhereInput = {
    AND?: SiteDataWhereInput | SiteDataWhereInput[]
    OR?: SiteDataWhereInput[]
    NOT?: SiteDataWhereInput | SiteDataWhereInput[]
    key?: StringFilter<"SiteData"> | string
    value?: StringFilter<"SiteData"> | string
    createdAt?: DateTimeFilter<"SiteData"> | Date | string
    updatedAt?: DateTimeFilter<"SiteData"> | Date | string
  }

  export type SiteDataOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteDataWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: SiteDataWhereInput | SiteDataWhereInput[]
    OR?: SiteDataWhereInput[]
    NOT?: SiteDataWhereInput | SiteDataWhereInput[]
    value?: StringFilter<"SiteData"> | string
    createdAt?: DateTimeFilter<"SiteData"> | Date | string
    updatedAt?: DateTimeFilter<"SiteData"> | Date | string
  }, "key">

  export type SiteDataOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteDataCountOrderByAggregateInput
    _max?: SiteDataMaxOrderByAggregateInput
    _min?: SiteDataMinOrderByAggregateInput
  }

  export type SiteDataScalarWhereWithAggregatesInput = {
    AND?: SiteDataScalarWhereWithAggregatesInput | SiteDataScalarWhereWithAggregatesInput[]
    OR?: SiteDataScalarWhereWithAggregatesInput[]
    NOT?: SiteDataScalarWhereWithAggregatesInput | SiteDataScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"SiteData"> | string
    value?: StringWithAggregatesFilter<"SiteData"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SiteData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteData"> | Date | string
  }

  export type MediaFolderWhereInput = {
    AND?: MediaFolderWhereInput | MediaFolderWhereInput[]
    OR?: MediaFolderWhereInput[]
    NOT?: MediaFolderWhereInput | MediaFolderWhereInput[]
    id?: StringFilter<"MediaFolder"> | string
    name?: StringFilter<"MediaFolder"> | string
    parentId?: StringNullableFilter<"MediaFolder"> | string | null
    createdAt?: DateTimeFilter<"MediaFolder"> | Date | string
    updatedAt?: DateTimeFilter<"MediaFolder"> | Date | string
  }

  export type MediaFolderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaFolderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaFolderWhereInput | MediaFolderWhereInput[]
    OR?: MediaFolderWhereInput[]
    NOT?: MediaFolderWhereInput | MediaFolderWhereInput[]
    name?: StringFilter<"MediaFolder"> | string
    parentId?: StringNullableFilter<"MediaFolder"> | string | null
    createdAt?: DateTimeFilter<"MediaFolder"> | Date | string
    updatedAt?: DateTimeFilter<"MediaFolder"> | Date | string
  }, "id">

  export type MediaFolderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MediaFolderCountOrderByAggregateInput
    _max?: MediaFolderMaxOrderByAggregateInput
    _min?: MediaFolderMinOrderByAggregateInput
  }

  export type MediaFolderScalarWhereWithAggregatesInput = {
    AND?: MediaFolderScalarWhereWithAggregatesInput | MediaFolderScalarWhereWithAggregatesInput[]
    OR?: MediaFolderScalarWhereWithAggregatesInput[]
    NOT?: MediaFolderScalarWhereWithAggregatesInput | MediaFolderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MediaFolder"> | string
    name?: StringWithAggregatesFilter<"MediaFolder"> | string
    parentId?: StringNullableWithAggregatesFilter<"MediaFolder"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MediaFolder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MediaFolder"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: string
    status?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: string
    status?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password?: string | null
    role?: string
    status?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateInput = {
    id?: string
    title: string
    slug: string
    category: string
    date: string
    author: string
    thumbnail: string
    summary: string
    content: string
    tags: string
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    category: string
    date: string
    author: string
    thumbnail: string
    summary: string
    content: string
    tags: string
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateManyInput = {
    id?: string
    title: string
    slug: string
    category: string
    date: string
    author: string
    thumbnail: string
    summary: string
    content: string
    tags: string
    featured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerCreateInput = {
    id?: string
    name: string
    nidn: string
    title: string
    photo: string
    expertise: string
    expertiseTags: string
    email: string
    lab: string
    education: string
    googleScholar?: string | null
    scopus?: string | null
    sinta?: string | null
    orcid?: string | null
    researchGate?: string | null
    coursesTaught: string
    publicationsCount?: number
    studyProgram?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerUncheckedCreateInput = {
    id?: string
    name: string
    nidn: string
    title: string
    photo: string
    expertise: string
    expertiseTags: string
    email: string
    lab: string
    education: string
    googleScholar?: string | null
    scopus?: string | null
    sinta?: string | null
    orcid?: string | null
    researchGate?: string | null
    coursesTaught: string
    publicationsCount?: number
    studyProgram?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nidn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    expertiseTags?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    lab?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    googleScholar?: NullableStringFieldUpdateOperationsInput | string | null
    scopus?: NullableStringFieldUpdateOperationsInput | string | null
    sinta?: NullableStringFieldUpdateOperationsInput | string | null
    orcid?: NullableStringFieldUpdateOperationsInput | string | null
    researchGate?: NullableStringFieldUpdateOperationsInput | string | null
    coursesTaught?: StringFieldUpdateOperationsInput | string
    publicationsCount?: IntFieldUpdateOperationsInput | number
    studyProgram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nidn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    expertiseTags?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    lab?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    googleScholar?: NullableStringFieldUpdateOperationsInput | string | null
    scopus?: NullableStringFieldUpdateOperationsInput | string | null
    sinta?: NullableStringFieldUpdateOperationsInput | string | null
    orcid?: NullableStringFieldUpdateOperationsInput | string | null
    researchGate?: NullableStringFieldUpdateOperationsInput | string | null
    coursesTaught?: StringFieldUpdateOperationsInput | string
    publicationsCount?: IntFieldUpdateOperationsInput | number
    studyProgram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerCreateManyInput = {
    id?: string
    name: string
    nidn: string
    title: string
    photo: string
    expertise: string
    expertiseTags: string
    email: string
    lab: string
    education: string
    googleScholar?: string | null
    scopus?: string | null
    sinta?: string | null
    orcid?: string | null
    researchGate?: string | null
    coursesTaught: string
    publicationsCount?: number
    studyProgram?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nidn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    expertiseTags?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    lab?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    googleScholar?: NullableStringFieldUpdateOperationsInput | string | null
    scopus?: NullableStringFieldUpdateOperationsInput | string | null
    sinta?: NullableStringFieldUpdateOperationsInput | string | null
    orcid?: NullableStringFieldUpdateOperationsInput | string | null
    researchGate?: NullableStringFieldUpdateOperationsInput | string | null
    coursesTaught?: StringFieldUpdateOperationsInput | string
    publicationsCount?: IntFieldUpdateOperationsInput | number
    studyProgram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nidn?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    expertise?: StringFieldUpdateOperationsInput | string
    expertiseTags?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    lab?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    googleScholar?: NullableStringFieldUpdateOperationsInput | string | null
    scopus?: NullableStringFieldUpdateOperationsInput | string | null
    sinta?: NullableStringFieldUpdateOperationsInput | string | null
    orcid?: NullableStringFieldUpdateOperationsInput | string | null
    researchGate?: NullableStringFieldUpdateOperationsInput | string | null
    coursesTaught?: StringFieldUpdateOperationsInput | string
    publicationsCount?: IntFieldUpdateOperationsInput | number
    studyProgram?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyProgramCreateInput = {
    id?: string
    code: string
    name: string
    degree: string
    accreditation: string
    headOfProgram: string
    headOfProdi?: string | null
    headOfProdiNidn?: string | null
    headOfProdiPhoto?: string | null
    description: string
    totalSks?: number
    activeStudents?: number
    capacity?: number
    vision: string
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyProgramUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    degree: string
    accreditation: string
    headOfProgram: string
    headOfProdi?: string | null
    headOfProdiNidn?: string | null
    headOfProdiPhoto?: string | null
    description: string
    totalSks?: number
    activeStudents?: number
    capacity?: number
    vision: string
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyProgramUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    accreditation?: StringFieldUpdateOperationsInput | string
    headOfProgram?: StringFieldUpdateOperationsInput | string
    headOfProdi?: NullableStringFieldUpdateOperationsInput | string | null
    headOfProdiNidn?: NullableStringFieldUpdateOperationsInput | string | null
    headOfProdiPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    totalSks?: IntFieldUpdateOperationsInput | number
    activeStudents?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    vision?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyProgramUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    accreditation?: StringFieldUpdateOperationsInput | string
    headOfProgram?: StringFieldUpdateOperationsInput | string
    headOfProdi?: NullableStringFieldUpdateOperationsInput | string | null
    headOfProdiNidn?: NullableStringFieldUpdateOperationsInput | string | null
    headOfProdiPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    totalSks?: IntFieldUpdateOperationsInput | number
    activeStudents?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    vision?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyProgramCreateManyInput = {
    id?: string
    code: string
    name: string
    degree: string
    accreditation: string
    headOfProgram: string
    headOfProdi?: string | null
    headOfProdiNidn?: string | null
    headOfProdiPhoto?: string | null
    description: string
    totalSks?: number
    activeStudents?: number
    capacity?: number
    vision: string
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudyProgramUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    accreditation?: StringFieldUpdateOperationsInput | string
    headOfProgram?: StringFieldUpdateOperationsInput | string
    headOfProdi?: NullableStringFieldUpdateOperationsInput | string | null
    headOfProdiNidn?: NullableStringFieldUpdateOperationsInput | string | null
    headOfProdiPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    totalSks?: IntFieldUpdateOperationsInput | number
    activeStudents?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    vision?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyProgramUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    accreditation?: StringFieldUpdateOperationsInput | string
    headOfProgram?: StringFieldUpdateOperationsInput | string
    headOfProdi?: NullableStringFieldUpdateOperationsInput | string | null
    headOfProdiNidn?: NullableStringFieldUpdateOperationsInput | string | null
    headOfProdiPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    totalSks?: IntFieldUpdateOperationsInput | number
    activeStudents?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    vision?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    id?: string
    code: string
    name: string
    sks: number
    semester: number
    category: string
    specialization?: string | null
    studyProgram?: string | null
    description: string
    prerequisites: string
    syllabusTopic: string
    rpsUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    sks: number
    semester: number
    category: string
    specialization?: string | null
    studyProgram?: string | null
    description: string
    prerequisites: string
    syllabusTopic: string
    rpsUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    studyProgram?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    prerequisites?: StringFieldUpdateOperationsInput | string
    syllabusTopic?: StringFieldUpdateOperationsInput | string
    rpsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    studyProgram?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    prerequisites?: StringFieldUpdateOperationsInput | string
    syllabusTopic?: StringFieldUpdateOperationsInput | string
    rpsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateManyInput = {
    id?: string
    code: string
    name: string
    sks: number
    semester: number
    category: string
    specialization?: string | null
    studyProgram?: string | null
    description: string
    prerequisites: string
    syllabusTopic: string
    rpsUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    studyProgram?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    prerequisites?: StringFieldUpdateOperationsInput | string
    syllabusTopic?: StringFieldUpdateOperationsInput | string
    rpsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sks?: IntFieldUpdateOperationsInput | number
    semester?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    studyProgram?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    prerequisites?: StringFieldUpdateOperationsInput | string
    syllabusTopic?: StringFieldUpdateOperationsInput | string
    rpsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentOrgCreateInput = {
    id?: string
    name: string
    abbreviation: string
    logo: string
    description: string
    cabinetName: string
    cabinetYear: string
    leaderName: string
    leaderPhoto: string
    viceLeaderName: string
    divisions: string
    upcomingEvents: string
    updatedAt?: Date | string
  }

  export type StudentOrgUncheckedCreateInput = {
    id?: string
    name: string
    abbreviation: string
    logo: string
    description: string
    cabinetName: string
    cabinetYear: string
    leaderName: string
    leaderPhoto: string
    viceLeaderName: string
    divisions: string
    upcomingEvents: string
    updatedAt?: Date | string
  }

  export type StudentOrgUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cabinetName?: StringFieldUpdateOperationsInput | string
    cabinetYear?: StringFieldUpdateOperationsInput | string
    leaderName?: StringFieldUpdateOperationsInput | string
    leaderPhoto?: StringFieldUpdateOperationsInput | string
    viceLeaderName?: StringFieldUpdateOperationsInput | string
    divisions?: StringFieldUpdateOperationsInput | string
    upcomingEvents?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentOrgUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cabinetName?: StringFieldUpdateOperationsInput | string
    cabinetYear?: StringFieldUpdateOperationsInput | string
    leaderName?: StringFieldUpdateOperationsInput | string
    leaderPhoto?: StringFieldUpdateOperationsInput | string
    viceLeaderName?: StringFieldUpdateOperationsInput | string
    divisions?: StringFieldUpdateOperationsInput | string
    upcomingEvents?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentOrgCreateManyInput = {
    id?: string
    name: string
    abbreviation: string
    logo: string
    description: string
    cabinetName: string
    cabinetYear: string
    leaderName: string
    leaderPhoto: string
    viceLeaderName: string
    divisions: string
    upcomingEvents: string
    updatedAt?: Date | string
  }

  export type StudentOrgUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cabinetName?: StringFieldUpdateOperationsInput | string
    cabinetYear?: StringFieldUpdateOperationsInput | string
    leaderName?: StringFieldUpdateOperationsInput | string
    leaderPhoto?: StringFieldUpdateOperationsInput | string
    viceLeaderName?: StringFieldUpdateOperationsInput | string
    divisions?: StringFieldUpdateOperationsInput | string
    upcomingEvents?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentOrgUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    abbreviation?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cabinetName?: StringFieldUpdateOperationsInput | string
    cabinetYear?: StringFieldUpdateOperationsInput | string
    leaderName?: StringFieldUpdateOperationsInput | string
    leaderPhoto?: StringFieldUpdateOperationsInput | string
    viceLeaderName?: StringFieldUpdateOperationsInput | string
    divisions?: StringFieldUpdateOperationsInput | string
    upcomingEvents?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaFileCreateInput = {
    id?: string
    fileName: string
    originalName: string
    sizeBytes: number
    type: string
    url: string
    uploadedAt: string
    dimensions?: string | null
    folderId?: string | null
    createdAt?: Date | string
  }

  export type MediaFileUncheckedCreateInput = {
    id?: string
    fileName: string
    originalName: string
    sizeBytes: number
    type: string
    url: string
    uploadedAt: string
    dimensions?: string | null
    folderId?: string | null
    createdAt?: Date | string
  }

  export type MediaFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: StringFieldUpdateOperationsInput | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: StringFieldUpdateOperationsInput | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaFileCreateManyInput = {
    id?: string
    fileName: string
    originalName: string
    sizeBytes: number
    type: string
    url: string
    uploadedAt: string
    dimensions?: string | null
    folderId?: string | null
    createdAt?: Date | string
  }

  export type MediaFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: StringFieldUpdateOperationsInput | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    sizeBytes?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    uploadedAt?: StringFieldUpdateOperationsInput | string
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemCreateInput = {
    id?: string
    label: string
    url: string
    isExternal?: boolean
    isVisible?: boolean
    badge?: string | null
    order?: number
    parentId?: string | null
    icon?: string | null
    line1?: string | null
    line2?: string | null
    childrenData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemUncheckedCreateInput = {
    id?: string
    label: string
    url: string
    isExternal?: boolean
    isVisible?: boolean
    badge?: string | null
    order?: number
    parentId?: string | null
    icon?: string | null
    line1?: string | null
    line2?: string | null
    childrenData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    line1?: NullableStringFieldUpdateOperationsInput | string | null
    line2?: NullableStringFieldUpdateOperationsInput | string | null
    childrenData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    line1?: NullableStringFieldUpdateOperationsInput | string | null
    line2?: NullableStringFieldUpdateOperationsInput | string | null
    childrenData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemCreateManyInput = {
    id?: string
    label: string
    url: string
    isExternal?: boolean
    isVisible?: boolean
    badge?: string | null
    order?: number
    parentId?: string | null
    icon?: string | null
    line1?: string | null
    line2?: string | null
    childrenData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    line1?: NullableStringFieldUpdateOperationsInput | string | null
    line2?: NullableStringFieldUpdateOperationsInput | string | null
    childrenData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    line1?: NullableStringFieldUpdateOperationsInput | string | null
    line2?: NullableStringFieldUpdateOperationsInput | string | null
    childrenData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaboratoryCreateInput = {
    id?: string
    code: string
    name: string
    shortDesc: string
    headOfLab: string
    headPhoto: string
    labAssistants: string
    image: string
    location: string
    capacity: number
    specifications: string
    equipmentList: string
    softwareInstalled: string
    virtualTour360Url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaboratoryUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    shortDesc: string
    headOfLab: string
    headPhoto: string
    labAssistants: string
    image: string
    location: string
    capacity: number
    specifications: string
    equipmentList: string
    softwareInstalled: string
    virtualTour360Url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaboratoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortDesc?: StringFieldUpdateOperationsInput | string
    headOfLab?: StringFieldUpdateOperationsInput | string
    headPhoto?: StringFieldUpdateOperationsInput | string
    labAssistants?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    specifications?: StringFieldUpdateOperationsInput | string
    equipmentList?: StringFieldUpdateOperationsInput | string
    softwareInstalled?: StringFieldUpdateOperationsInput | string
    virtualTour360Url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaboratoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortDesc?: StringFieldUpdateOperationsInput | string
    headOfLab?: StringFieldUpdateOperationsInput | string
    headPhoto?: StringFieldUpdateOperationsInput | string
    labAssistants?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    specifications?: StringFieldUpdateOperationsInput | string
    equipmentList?: StringFieldUpdateOperationsInput | string
    softwareInstalled?: StringFieldUpdateOperationsInput | string
    virtualTour360Url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaboratoryCreateManyInput = {
    id?: string
    code: string
    name: string
    shortDesc: string
    headOfLab: string
    headPhoto: string
    labAssistants: string
    image: string
    location: string
    capacity: number
    specifications: string
    equipmentList: string
    softwareInstalled: string
    virtualTour360Url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaboratoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortDesc?: StringFieldUpdateOperationsInput | string
    headOfLab?: StringFieldUpdateOperationsInput | string
    headPhoto?: StringFieldUpdateOperationsInput | string
    labAssistants?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    specifications?: StringFieldUpdateOperationsInput | string
    equipmentList?: StringFieldUpdateOperationsInput | string
    softwareInstalled?: StringFieldUpdateOperationsInput | string
    virtualTour360Url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaboratoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortDesc?: StringFieldUpdateOperationsInput | string
    headOfLab?: StringFieldUpdateOperationsInput | string
    headPhoto?: StringFieldUpdateOperationsInput | string
    labAssistants?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    specifications?: StringFieldUpdateOperationsInput | string
    equipmentList?: StringFieldUpdateOperationsInput | string
    softwareInstalled?: StringFieldUpdateOperationsInput | string
    virtualTour360Url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchGroupCreateInput = {
    id?: string
    code: string
    name: string
    leadLecturer: string
    membersCount: number
    description: string
    topics: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResearchGroupUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    leadLecturer: string
    membersCount: number
    description: string
    topics: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResearchGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leadLecturer?: StringFieldUpdateOperationsInput | string
    membersCount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leadLecturer?: StringFieldUpdateOperationsInput | string
    membersCount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchGroupCreateManyInput = {
    id?: string
    code: string
    name: string
    leadLecturer: string
    membersCount: number
    description: string
    topics: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResearchGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leadLecturer?: StringFieldUpdateOperationsInput | string
    membersCount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResearchGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leadLecturer?: StringFieldUpdateOperationsInput | string
    membersCount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationCreateInput = {
    id?: string
    title: string
    authors: string
    year: number
    publisher: string
    type: string
    pdfUrl?: string | null
    doi?: string | null
    specialization?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationUncheckedCreateInput = {
    id?: string
    title: string
    authors: string
    year: number
    publisher: string
    type: string
    pdfUrl?: string | null
    doi?: string | null
    specialization?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authors?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    publisher?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    doi?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authors?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    publisher?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    doi?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationCreateManyInput = {
    id?: string
    title: string
    authors: string
    year: number
    publisher: string
    type: string
    pdfUrl?: string | null
    doi?: string | null
    specialization?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authors?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    publisher?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    doi?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    authors?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    publisher?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    doi?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InnovationProductCreateInput = {
    id?: string
    title: string
    developer: string
    category: string
    year: number
    thumbnail: string
    description: string
    techStack: string
    demoUrl?: string | null
    githubUrl?: string | null
    award?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InnovationProductUncheckedCreateInput = {
    id?: string
    title: string
    developer: string
    category: string
    year: number
    thumbnail: string
    description: string
    techStack: string
    demoUrl?: string | null
    githubUrl?: string | null
    award?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InnovationProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    techStack?: StringFieldUpdateOperationsInput | string
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    award?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InnovationProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    techStack?: StringFieldUpdateOperationsInput | string
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    award?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InnovationProductCreateManyInput = {
    id?: string
    title: string
    developer: string
    category: string
    year: number
    thumbnail: string
    description: string
    techStack: string
    demoUrl?: string | null
    githubUrl?: string | null
    award?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InnovationProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    techStack?: StringFieldUpdateOperationsInput | string
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    award?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InnovationProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    developer?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    techStack?: StringFieldUpdateOperationsInput | string
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    award?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAchievementCreateInput = {
    id?: string
    competition: string
    title: string
    rank: string
    level: string
    year: number
    studentNames: string
    mentorLecturer: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentAchievementUncheckedCreateInput = {
    id?: string
    competition: string
    title: string
    rank: string
    level: string
    year: number
    studentNames: string
    mentorLecturer: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentAchievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    competition?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rank?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    studentNames?: StringFieldUpdateOperationsInput | string
    mentorLecturer?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAchievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    competition?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rank?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    studentNames?: StringFieldUpdateOperationsInput | string
    mentorLecturer?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAchievementCreateManyInput = {
    id?: string
    competition: string
    title: string
    rank: string
    level: string
    year: number
    studentNames: string
    mentorLecturer: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentAchievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    competition?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rank?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    studentNames?: StringFieldUpdateOperationsInput | string
    mentorLecturer?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAchievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    competition?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rank?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    studentNames?: StringFieldUpdateOperationsInput | string
    mentorLecturer?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlumniTestimonialCreateInput = {
    id?: string
    name: string
    gradYear: number
    role: string
    company: string
    companyLogo: string
    photo: string
    quote: string
    linkedinUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlumniTestimonialUncheckedCreateInput = {
    id?: string
    name: string
    gradYear: number
    role: string
    company: string
    companyLogo: string
    photo: string
    quote: string
    linkedinUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlumniTestimonialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gradYear?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    companyLogo?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlumniTestimonialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gradYear?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    companyLogo?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlumniTestimonialCreateManyInput = {
    id?: string
    name: string
    gradYear: number
    role: string
    company: string
    companyLogo: string
    photo: string
    quote: string
    linkedinUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlumniTestimonialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gradYear?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    companyLogo?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlumniTestimonialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gradYear?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    companyLogo?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobVacancyCreateInput = {
    id?: string
    title: string
    company: string
    logo: string
    location: string
    type: string
    specialization?: string | null
    postedDate: string
    applyDeadline: string
    requirements: string
    applyLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobVacancyUncheckedCreateInput = {
    id?: string
    title: string
    company: string
    logo: string
    location: string
    type: string
    specialization?: string | null
    postedDate: string
    applyDeadline: string
    requirements: string
    applyLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobVacancyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    postedDate?: StringFieldUpdateOperationsInput | string
    applyDeadline?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    applyLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobVacancyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    postedDate?: StringFieldUpdateOperationsInput | string
    applyDeadline?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    applyLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobVacancyCreateManyInput = {
    id?: string
    title: string
    company: string
    logo: string
    location: string
    type: string
    specialization?: string | null
    postedDate: string
    applyDeadline: string
    requirements: string
    applyLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobVacancyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    postedDate?: StringFieldUpdateOperationsInput | string
    applyDeadline?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    applyLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobVacancyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    postedDate?: StringFieldUpdateOperationsInput | string
    applyDeadline?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    applyLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PMBTrackCreateInput = {
    id?: string
    code: string
    name: string
    description: string
    capacity: number
    period: string
    requirements: string
    benefits: string
    feeEstimate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PMBTrackUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    description: string
    capacity: number
    period: string
    requirements: string
    benefits: string
    feeEstimate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PMBTrackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    period?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    feeEstimate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PMBTrackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    period?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    feeEstimate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PMBTrackCreateManyInput = {
    id?: string
    code: string
    name: string
    description: string
    capacity: number
    period: string
    requirements: string
    benefits: string
    feeEstimate: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PMBTrackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    period?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    feeEstimate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PMBTrackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    period?: StringFieldUpdateOperationsInput | string
    requirements?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    feeEstimate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicCalendarItemCreateInput = {
    id?: string
    title: string
    startDate: string
    endDate: string
    category: string
    semester: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcademicCalendarItemUncheckedCreateInput = {
    id?: string
    title: string
    startDate: string
    endDate: string
    category: string
    semester: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcademicCalendarItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicCalendarItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicCalendarItemCreateManyInput = {
    id?: string
    title: string
    startDate: string
    endDate: string
    category: string
    semester: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcademicCalendarItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicCalendarItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQItemCreateInput = {
    id?: string
    category: string
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQItemUncheckedCreateInput = {
    id?: string
    category: string
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQItemCreateManyInput = {
    id?: string
    category: string
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuickLinkCreateInput = {
    id?: string
    name: string
    desc: string
    url: string
    iconName: string
    badge?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuickLinkUncheckedCreateInput = {
    id?: string
    name: string
    desc: string
    url: string
    iconName: string
    badge?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuickLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuickLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuickLinkCreateManyInput = {
    id?: string
    name: string
    desc: string
    url: string
    iconName: string
    badge?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuickLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuickLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    iconName?: StringFieldUpdateOperationsInput | string
    badge?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteDataCreateInput = {
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteDataUncheckedCreateInput = {
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteDataUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteDataUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteDataCreateManyInput = {
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SiteDataUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteDataUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaFolderCreateInput = {
    id?: string
    name: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaFolderUncheckedCreateInput = {
    id?: string
    name: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaFolderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaFolderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaFolderCreateManyInput = {
    id?: string
    name: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaFolderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaFolderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    date?: SortOrder
    author?: SortOrder
    thumbnail?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    date?: SortOrder
    author?: SortOrder
    thumbnail?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    category?: SortOrder
    date?: SortOrder
    author?: SortOrder
    thumbnail?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    featured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type LecturerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nidn?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    expertise?: SortOrder
    expertiseTags?: SortOrder
    email?: SortOrder
    lab?: SortOrder
    education?: SortOrder
    googleScholar?: SortOrder
    scopus?: SortOrder
    sinta?: SortOrder
    orcid?: SortOrder
    researchGate?: SortOrder
    coursesTaught?: SortOrder
    publicationsCount?: SortOrder
    studyProgram?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LecturerAvgOrderByAggregateInput = {
    publicationsCount?: SortOrder
  }

  export type LecturerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nidn?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    expertise?: SortOrder
    expertiseTags?: SortOrder
    email?: SortOrder
    lab?: SortOrder
    education?: SortOrder
    googleScholar?: SortOrder
    scopus?: SortOrder
    sinta?: SortOrder
    orcid?: SortOrder
    researchGate?: SortOrder
    coursesTaught?: SortOrder
    publicationsCount?: SortOrder
    studyProgram?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LecturerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nidn?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    expertise?: SortOrder
    expertiseTags?: SortOrder
    email?: SortOrder
    lab?: SortOrder
    education?: SortOrder
    googleScholar?: SortOrder
    scopus?: SortOrder
    sinta?: SortOrder
    orcid?: SortOrder
    researchGate?: SortOrder
    coursesTaught?: SortOrder
    publicationsCount?: SortOrder
    studyProgram?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LecturerSumOrderByAggregateInput = {
    publicationsCount?: SortOrder
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

  export type StudyProgramCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    degree?: SortOrder
    accreditation?: SortOrder
    headOfProgram?: SortOrder
    headOfProdi?: SortOrder
    headOfProdiNidn?: SortOrder
    headOfProdiPhoto?: SortOrder
    description?: SortOrder
    totalSks?: SortOrder
    activeStudents?: SortOrder
    capacity?: SortOrder
    vision?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyProgramAvgOrderByAggregateInput = {
    totalSks?: SortOrder
    activeStudents?: SortOrder
    capacity?: SortOrder
  }

  export type StudyProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    degree?: SortOrder
    accreditation?: SortOrder
    headOfProgram?: SortOrder
    headOfProdi?: SortOrder
    headOfProdiNidn?: SortOrder
    headOfProdiPhoto?: SortOrder
    description?: SortOrder
    totalSks?: SortOrder
    activeStudents?: SortOrder
    capacity?: SortOrder
    vision?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyProgramMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    degree?: SortOrder
    accreditation?: SortOrder
    headOfProgram?: SortOrder
    headOfProdi?: SortOrder
    headOfProdiNidn?: SortOrder
    headOfProdiPhoto?: SortOrder
    description?: SortOrder
    totalSks?: SortOrder
    activeStudents?: SortOrder
    capacity?: SortOrder
    vision?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudyProgramSumOrderByAggregateInput = {
    totalSks?: SortOrder
    activeStudents?: SortOrder
    capacity?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    sks?: SortOrder
    semester?: SortOrder
    category?: SortOrder
    specialization?: SortOrder
    studyProgram?: SortOrder
    description?: SortOrder
    prerequisites?: SortOrder
    syllabusTopic?: SortOrder
    rpsUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    sks?: SortOrder
    semester?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    sks?: SortOrder
    semester?: SortOrder
    category?: SortOrder
    specialization?: SortOrder
    studyProgram?: SortOrder
    description?: SortOrder
    prerequisites?: SortOrder
    syllabusTopic?: SortOrder
    rpsUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    sks?: SortOrder
    semester?: SortOrder
    category?: SortOrder
    specialization?: SortOrder
    studyProgram?: SortOrder
    description?: SortOrder
    prerequisites?: SortOrder
    syllabusTopic?: SortOrder
    rpsUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    sks?: SortOrder
    semester?: SortOrder
  }

  export type StudentOrgCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    logo?: SortOrder
    description?: SortOrder
    cabinetName?: SortOrder
    cabinetYear?: SortOrder
    leaderName?: SortOrder
    leaderPhoto?: SortOrder
    viceLeaderName?: SortOrder
    divisions?: SortOrder
    upcomingEvents?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentOrgMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    logo?: SortOrder
    description?: SortOrder
    cabinetName?: SortOrder
    cabinetYear?: SortOrder
    leaderName?: SortOrder
    leaderPhoto?: SortOrder
    viceLeaderName?: SortOrder
    divisions?: SortOrder
    upcomingEvents?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentOrgMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbreviation?: SortOrder
    logo?: SortOrder
    description?: SortOrder
    cabinetName?: SortOrder
    cabinetYear?: SortOrder
    leaderName?: SortOrder
    leaderPhoto?: SortOrder
    viceLeaderName?: SortOrder
    divisions?: SortOrder
    upcomingEvents?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaFileCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    sizeBytes?: SortOrder
    type?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    dimensions?: SortOrder
    folderId?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaFileAvgOrderByAggregateInput = {
    sizeBytes?: SortOrder
  }

  export type MediaFileMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    sizeBytes?: SortOrder
    type?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    dimensions?: SortOrder
    folderId?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaFileMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    originalName?: SortOrder
    sizeBytes?: SortOrder
    type?: SortOrder
    url?: SortOrder
    uploadedAt?: SortOrder
    dimensions?: SortOrder
    folderId?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaFileSumOrderByAggregateInput = {
    sizeBytes?: SortOrder
  }

  export type MenuItemCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrder
    isExternal?: SortOrder
    isVisible?: SortOrder
    badge?: SortOrder
    order?: SortOrder
    parentId?: SortOrder
    icon?: SortOrder
    line1?: SortOrder
    line2?: SortOrder
    childrenData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type MenuItemMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrder
    isExternal?: SortOrder
    isVisible?: SortOrder
    badge?: SortOrder
    order?: SortOrder
    parentId?: SortOrder
    icon?: SortOrder
    line1?: SortOrder
    line2?: SortOrder
    childrenData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    url?: SortOrder
    isExternal?: SortOrder
    isVisible?: SortOrder
    badge?: SortOrder
    order?: SortOrder
    parentId?: SortOrder
    icon?: SortOrder
    line1?: SortOrder
    line2?: SortOrder
    childrenData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type LaboratoryCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    shortDesc?: SortOrder
    headOfLab?: SortOrder
    headPhoto?: SortOrder
    labAssistants?: SortOrder
    image?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    specifications?: SortOrder
    equipmentList?: SortOrder
    softwareInstalled?: SortOrder
    virtualTour360Url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaboratoryAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type LaboratoryMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    shortDesc?: SortOrder
    headOfLab?: SortOrder
    headPhoto?: SortOrder
    labAssistants?: SortOrder
    image?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    specifications?: SortOrder
    equipmentList?: SortOrder
    softwareInstalled?: SortOrder
    virtualTour360Url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaboratoryMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    shortDesc?: SortOrder
    headOfLab?: SortOrder
    headPhoto?: SortOrder
    labAssistants?: SortOrder
    image?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    specifications?: SortOrder
    equipmentList?: SortOrder
    softwareInstalled?: SortOrder
    virtualTour360Url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaboratorySumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type ResearchGroupCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    leadLecturer?: SortOrder
    membersCount?: SortOrder
    description?: SortOrder
    topics?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResearchGroupAvgOrderByAggregateInput = {
    membersCount?: SortOrder
  }

  export type ResearchGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    leadLecturer?: SortOrder
    membersCount?: SortOrder
    description?: SortOrder
    topics?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResearchGroupMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    leadLecturer?: SortOrder
    membersCount?: SortOrder
    description?: SortOrder
    topics?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResearchGroupSumOrderByAggregateInput = {
    membersCount?: SortOrder
  }

  export type PublicationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authors?: SortOrder
    year?: SortOrder
    publisher?: SortOrder
    type?: SortOrder
    pdfUrl?: SortOrder
    doi?: SortOrder
    specialization?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicationAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type PublicationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authors?: SortOrder
    year?: SortOrder
    publisher?: SortOrder
    type?: SortOrder
    pdfUrl?: SortOrder
    doi?: SortOrder
    specialization?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authors?: SortOrder
    year?: SortOrder
    publisher?: SortOrder
    type?: SortOrder
    pdfUrl?: SortOrder
    doi?: SortOrder
    specialization?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicationSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type InnovationProductCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    developer?: SortOrder
    category?: SortOrder
    year?: SortOrder
    thumbnail?: SortOrder
    description?: SortOrder
    techStack?: SortOrder
    demoUrl?: SortOrder
    githubUrl?: SortOrder
    award?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InnovationProductAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type InnovationProductMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    developer?: SortOrder
    category?: SortOrder
    year?: SortOrder
    thumbnail?: SortOrder
    description?: SortOrder
    techStack?: SortOrder
    demoUrl?: SortOrder
    githubUrl?: SortOrder
    award?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InnovationProductMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    developer?: SortOrder
    category?: SortOrder
    year?: SortOrder
    thumbnail?: SortOrder
    description?: SortOrder
    techStack?: SortOrder
    demoUrl?: SortOrder
    githubUrl?: SortOrder
    award?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InnovationProductSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type StudentAchievementCountOrderByAggregateInput = {
    id?: SortOrder
    competition?: SortOrder
    title?: SortOrder
    rank?: SortOrder
    level?: SortOrder
    year?: SortOrder
    studentNames?: SortOrder
    mentorLecturer?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAchievementAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type StudentAchievementMaxOrderByAggregateInput = {
    id?: SortOrder
    competition?: SortOrder
    title?: SortOrder
    rank?: SortOrder
    level?: SortOrder
    year?: SortOrder
    studentNames?: SortOrder
    mentorLecturer?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAchievementMinOrderByAggregateInput = {
    id?: SortOrder
    competition?: SortOrder
    title?: SortOrder
    rank?: SortOrder
    level?: SortOrder
    year?: SortOrder
    studentNames?: SortOrder
    mentorLecturer?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAchievementSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type AlumniTestimonialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gradYear?: SortOrder
    role?: SortOrder
    company?: SortOrder
    companyLogo?: SortOrder
    photo?: SortOrder
    quote?: SortOrder
    linkedinUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlumniTestimonialAvgOrderByAggregateInput = {
    gradYear?: SortOrder
  }

  export type AlumniTestimonialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gradYear?: SortOrder
    role?: SortOrder
    company?: SortOrder
    companyLogo?: SortOrder
    photo?: SortOrder
    quote?: SortOrder
    linkedinUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlumniTestimonialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gradYear?: SortOrder
    role?: SortOrder
    company?: SortOrder
    companyLogo?: SortOrder
    photo?: SortOrder
    quote?: SortOrder
    linkedinUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlumniTestimonialSumOrderByAggregateInput = {
    gradYear?: SortOrder
  }

  export type JobVacancyCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    logo?: SortOrder
    location?: SortOrder
    type?: SortOrder
    specialization?: SortOrder
    postedDate?: SortOrder
    applyDeadline?: SortOrder
    requirements?: SortOrder
    applyLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobVacancyMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    logo?: SortOrder
    location?: SortOrder
    type?: SortOrder
    specialization?: SortOrder
    postedDate?: SortOrder
    applyDeadline?: SortOrder
    requirements?: SortOrder
    applyLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobVacancyMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    company?: SortOrder
    logo?: SortOrder
    location?: SortOrder
    type?: SortOrder
    specialization?: SortOrder
    postedDate?: SortOrder
    applyDeadline?: SortOrder
    requirements?: SortOrder
    applyLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PMBTrackCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    capacity?: SortOrder
    period?: SortOrder
    requirements?: SortOrder
    benefits?: SortOrder
    feeEstimate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PMBTrackAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type PMBTrackMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    capacity?: SortOrder
    period?: SortOrder
    requirements?: SortOrder
    benefits?: SortOrder
    feeEstimate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PMBTrackMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    capacity?: SortOrder
    period?: SortOrder
    requirements?: SortOrder
    benefits?: SortOrder
    feeEstimate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PMBTrackSumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type AcademicCalendarItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    category?: SortOrder
    semester?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcademicCalendarItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    category?: SortOrder
    semester?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcademicCalendarItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    category?: SortOrder
    semester?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQItemCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQItemMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQItemMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuickLinkCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    url?: SortOrder
    iconName?: SortOrder
    badge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuickLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    url?: SortOrder
    iconName?: SortOrder
    badge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuickLinkMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    url?: SortOrder
    iconName?: SortOrder
    badge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteDataCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteDataMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteDataMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaFolderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaFolderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaFolderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NewsDefaultArgs instead
     */
    export type NewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NewsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LecturerDefaultArgs instead
     */
    export type LecturerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LecturerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudyProgramDefaultArgs instead
     */
    export type StudyProgramArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudyProgramDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseDefaultArgs instead
     */
    export type CourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentOrgDefaultArgs instead
     */
    export type StudentOrgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentOrgDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MediaFileDefaultArgs instead
     */
    export type MediaFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MediaFileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuItemDefaultArgs instead
     */
    export type MenuItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LaboratoryDefaultArgs instead
     */
    export type LaboratoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LaboratoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResearchGroupDefaultArgs instead
     */
    export type ResearchGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResearchGroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PublicationDefaultArgs instead
     */
    export type PublicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PublicationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InnovationProductDefaultArgs instead
     */
    export type InnovationProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InnovationProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentAchievementDefaultArgs instead
     */
    export type StudentAchievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentAchievementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlumniTestimonialDefaultArgs instead
     */
    export type AlumniTestimonialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlumniTestimonialDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobVacancyDefaultArgs instead
     */
    export type JobVacancyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobVacancyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PMBTrackDefaultArgs instead
     */
    export type PMBTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PMBTrackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AcademicCalendarItemDefaultArgs instead
     */
    export type AcademicCalendarItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AcademicCalendarItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FAQItemDefaultArgs instead
     */
    export type FAQItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FAQItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuickLinkDefaultArgs instead
     */
    export type QuickLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuickLinkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SiteDataDefaultArgs instead
     */
    export type SiteDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SiteDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MediaFolderDefaultArgs instead
     */
    export type MediaFolderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MediaFolderDefaultArgs<ExtArgs>

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