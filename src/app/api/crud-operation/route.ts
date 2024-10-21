import { db, Todo } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidateTag } from "next/cache";
// import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

//simple Methods

export async function GET(request: Request) {
  const users = await db.select().from(Todo).orderBy("asc");
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  await db.insert(Todo).values(body);
  revalidateTag("refresh");
  return NextResponse.json("Hello Post Request");
}

export async function PUT(request: Request) {
  const body = await request.json();
  await db.update(Todo).set(body).where(eq(Todo.id, body.id));
  revalidateTag("refresh");
  return NextResponse.json("Hello Post Request");
}

// export async function DELETE(request: Request) {
//   const body = await request.json();
//   await db.delete(Todo).where(eq(Todo.id));
//   revalidateTag("refresh");
//   return NextResponse.json("Hello Post Request");
// }

export async function DELETE(request: Request) {
  const body = await request.json();
  await db.delete(Todo).where(eq(Todo.id, body.id));
  revalidateTag("refresh");
  return NextResponse.json("Todo deleted successfully");
}

//complex methods of crud
// export async function GET() {
//   try {
//     const rows = await db.select().from(Todo);
//     return NextResponse.json(rows, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }

// export async function POST(req: NextRequest) {
//   try {
//     const { id, title, isCompleted } = await req.json();
//     const rows = await db
//       .insert(Todo)
//       .values({ id, title, isCompleted })
//       .returning();
//     return NextResponse.json(rows, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(error, { status: 500 });
//   }
// }

// export async function PUT(req: NextRequest) {
//   try {
//     const { id, title, isCompleted } = await req.json();
//     const rows = await db
//       .update(Todo)
//       .set({ title, isCompleted })
//       .where(eq(Todo.id, id))
//       .returning();
//     return NextResponse.json(rows, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(error, { status: 500 });
//   }
// }

// export async function DELETE(req: NextRequest) {
//   try {
//     const { id } = await req.json();
//     const rows = await db.delete(Todo).where(eq(Todo.id, id)).returning();
//     return NextResponse.json(rows, { status: 200 });
//   } catch (error) {
//     return NextResponse.json(error, { status: 500 });
//   }
// }
