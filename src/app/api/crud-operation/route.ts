import { db, Todo } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const rows = await db.select().from(Todo);
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { id, title, isCompleted } = await req.json();
    const rows = await db
      .insert(Todo)
      .values({ id, title, isCompleted })
      .returning();
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, title, isCompleted } = await req.json();
    const rows = await db
      .update(Todo)
      .set({ title, isCompleted })
      .where(eq(Todo.id, id))
      .returning();
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    const rows = await db.delete(Todo).where(eq(Todo.id, id)).returning();
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
