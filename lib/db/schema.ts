import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  name: text("name").notNull(),
  schoolName: text("school_name"),
  schoolType: text("school_type"),
  semesterName: text("semester_name"),
  canvasIcsUrl: text("canvas_ics_url"),
  blackboardIcsUrl: text("blackboard_ics_url"),
  onboardingCompleted: boolean("onboarding_completed").default(false),
  trackingPreferences: jsonb("tracking_preferences"),
  subscriptionPlan: text("subscription_plan").default("free"),
  streakResetMode: text("streak_reset_mode").default("daily"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const coursesTable = pgTable("courses", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => usersTable.id, { onDelete: "cascade" })
    .notNull(),
  title: text("title").notNull(),
  courseCode: text("course_code"),
  instructor: text("instructor"),
  source: text("source").default("manual"),
  sourceId: text("source_id"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const assignmentsTable = pgTable("assignments", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => usersTable.id, { onDelete: "cascade" })
    .notNull(),
  courseId: integer("course_id").references(() => coursesTable.id, {
    onDelete: "set null",
  }),
  title: text("title").notNull(),
  description: text("description"),
  dueDate: timestamp("due_date"),
  completed: boolean("completed").default(false),
  priority: text("priority"),
  source: text("source").default("manual"),
  sourceId: text("source_id"),
  notes: text("notes"),
  dismissed: boolean("dismissed").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const eventsTable = pgTable("events", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => usersTable.id, { onDelete: "cascade" })
    .notNull(),
  courseId: integer("course_id").references(() => coursesTable.id, {
    onDelete: "set null",
  }),
  title: text("title").notNull(),
  description: text("description"),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date"),
  eventType: text("event_type"),
  source: text("source").default("manual"),
  sourceId: text("source_id"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const internshipsTable = pgTable("internships", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => usersTable.id, { onDelete: "cascade" })
    .notNull(),
  companyName: text("company_name").notNull(),
  position: text("position"),
  applicationDate: timestamp("application_date"),
  interviewDate: timestamp("interview_date"),
  status: text("status").default("applied"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const readingMaterialsTable = pgTable("reading_materials", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => usersTable.id, { onDelete: "cascade" })
    .notNull(),
  courseId: integer("course_id").references(() => coursesTable.id, {
    onDelete: "set null",
  }),
  title: text("title").notNull(),
  author: text("author"),
  url: text("url"),
  completed: boolean("completed").default(false),
  priority: text("priority"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Relations
export const usersRelations = relations(usersTable, ({ many }) => ({
  courses: many(coursesTable),
  assignments: many(assignmentsTable),
  events: many(eventsTable),
  internships: many(internshipsTable),
  readingMaterials: many(readingMaterialsTable),
}));

export const coursesRelations = relations(
  coursesTable,
  ({ one, many }) => ({
    user: one(usersTable, {
      fields: [coursesTable.userId],
      references: [usersTable.id],
    }),
    assignments: many(assignmentsTable),
    events: many(eventsTable),
    readingMaterials: many(readingMaterialsTable),
  })
);

export const assignmentsRelations = relations(
  assignmentsTable,
  ({ one }) => ({
    user: one(usersTable, {
      fields: [assignmentsTable.userId],
      references: [usersTable.id],
    }),
    course: one(coursesTable, {
      fields: [assignmentsTable.courseId],
      references: [coursesTable.id],
    }),
  })
);

export const eventsRelations = relations(eventsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [eventsTable.userId],
    references: [usersTable.id],
  }),
  course: one(coursesTable, {
    fields: [eventsTable.courseId],
    references: [coursesTable.id],
  }),
}));

export const internshipsRelations = relations(
  internshipsTable,
  ({ one }) => ({
    user: one(usersTable, {
      fields: [internshipsTable.userId],
      references: [usersTable.id],
    }),
  })
);

export const readingMaterialsRelations = relations(
  readingMaterialsTable,
  ({ one }) => ({
    user: one(usersTable, {
      fields: [readingMaterialsTable.userId],
      references: [usersTable.id],
    }),
    course: one(coursesTable, {
      fields: [readingMaterialsTable.courseId],
      references: [coursesTable.id],
    }),
  })
);
