import { connectToDatabase } from "@/lib/mongodb";
import { checkApiKey } from "@/lib/checkApiKey";
import { User } from "@/models/User";
import { jsonResponse } from "@/lib/apiResponse";

export async function PUT(req, { params }) {
  if (!checkApiKey(req)) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  await connectToDatabase();

  const { key, gamemode } = params;
  const body = await req.json();
  const { tier } = body;

  try {
    if (typeof tier === "number") {
      const user = await User.findOneAndUpdate(
        { discord: key },
        { [`tiers.${gamemode}`]: tier },
        { upsert: true, new: true }
      );
      return jsonResponse(user);
    } else if (tier === null) {
      const user = await User.findOneAndUpdate(
        { discord: key },
        { $unset: { [`tiers.${gamemode}`]: "" } },
        { new: true }
      );
      return jsonResponse(user);
    }
    return jsonResponse({ error: "Invalid tier" }, 400);
  } catch (err) {
    return jsonResponse({ error: err.message }, 400);
  }
}
