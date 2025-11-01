import { connectToDatabase } from "@/lib/mongodb";
import { checkApiKey } from "@/lib/checkApiKey";
import { User } from "@/models/User";
import { jsonResponse } from "@/lib/apiResponse";

export async function GET(req, { params }) {
  if (!checkApiKey(req)) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  await connectToDatabase();
  const { key } = await params;

  const user = await User.findOne({ discord: key });
  if (!user) {
    return jsonResponse({ error: "User not found" }, 404);
  }

  return jsonResponse(user);
}

export async function PUT(req, { params }) {
  if (!checkApiKey(req)) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  await connectToDatabase();
  const { key } = await params;
  const body = await req.json();

  try {
    const user = await User.findOneAndUpdate({ discord: key }, body, {
      new: true,
      upsert: true,
    });

    return jsonResponse(user.toObject());
  } catch (err) {
    return jsonResponse({ error: err.message }, 400);
  }
}

export async function DELETE(req, { params }) {
  if (!checkApiKey(req)) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  await connectToDatabase();
  const { key } = await params;

  const user = await User.findOne({ discord: key });
  if (!user) {
    return jsonResponse({ error: "User not found" }, 404);
  }

  await user.deleteOne();
  return new Response(null, { status: 204 });
}
