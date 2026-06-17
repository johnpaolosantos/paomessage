import "dotenv/config";

import mongoose from "mongoose";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

const seedUsers = [
    [
        "famous_elon_musk",
        "Elon Musk",
        "elon@example.com",
        "https://i.pravatar.cc/150?img=21",
    ],
    [
        "famous_taylor_swift",
        "Taylor Swift",
        "taylor@example.com",
        "https://i.pravatar.cc/150?img=22",
    ],
    [
        "famous_bill_gates",
        "Bill Gates",
        "bill@example.com",
        "https://i.pravatar.cc/150?img=23",
    ],
    [
        "famous_oprah_winfrey",
        "Oprah Winfrey",
        "oprah@example.com",
        "https://i.pravatar.cc/150?img=24",
    ],
    [
        "famous_dwayne_johnson",
        "Dwayne Johnson",
        "therock@example.com",
        "https://i.pravatar.cc/150?img=25",
    ],
    [
        "famous_emma_watson",
        "Emma Watson",
        "emma@example.com",
        "https://i.pravatar.cc/150?img=26",
    ],
    [
        "famous_keanu_reeves",
        "Keanu Reeves",
        "keanu@example.com",
        "https://i.pravatar.cc/150?img=27",
    ],
    [
        "famous_mrbeast",
        "MrBeast",
        "mrbeast@example.com",
        "https://i.pravatar.cc/150?img=28",
    ],
    [
        "famous_mark_zuckerberg",
        "Mark Zuckerberg",
        "mark@example.com",
        "https://i.pravatar.cc/150?img=29",
    ],
    [
        "famous_satya_nadella",
        "Satya Nadella",
        "satya@example.com",
        "https://i.pravatar.cc/150?img=30",
    ],
    [
        "famous_jensen_huang",
        "Jensen Huang",
        "jensen@example.com",
        "https://i.pravatar.cc/150?img=31",
    ],
    [
        "famous_adele",
        "Adele",
        "adele@example.com",
        "https://i.pravatar.cc/150?img=32",
    ],
    [
        "famous_rihanna",
        "Rihanna",
        "rihanna@example.com",
        "https://i.pravatar.cc/150?img=33",
    ],
    [
        "famous_robert_downey_jr",
        "Robert Downey Jr.",
        "rdj@example.com",
        "https://i.pravatar.cc/150?img=34",
    ],
    [
        "famous_tom_hanks",
        "Tom Hanks",
        "tom@example.com",
        "https://i.pravatar.cc/150?img=35",
    ],
    [
        "famous_steve_jobs",
        "Steve Jobs",
        "steve@example.com",
        "https://i.pravatar.cc/150?img=36",
    ],
    [
        "famous_albert_einstein",
        "Albert Einstein",
        "einstein@example.com",
        "https://i.pravatar.cc/150?img=37",
    ],
    [
        "famous_marie_curie",
        "Marie Curie",
        "curie@example.com",
        "https://i.pravatar.cc/150?img=38",
    ],
    [
        "famous_nelson_mandela",
        "Nelson Mandela",
        "mandela@example.com",
        "https://i.pravatar.cc/150?img=39",
    ],
    [
        "famous_warren_buffett",
        "Warren Buffett",
        "buffett@example.com",
        "https://i.pravatar.cc/150?img=40",
    ],
];

async function seedDatabase() {
    await connectDB();

    const result = await User.bulkWrite(
        seedUsers.map(([clerkId, fullName, email, profilePic]) => ({
            updateOne: {
                filter: { clerkId },
                update: {
                    $set: { clerkId, fullName, email, profilePic },
                },
                upsert: true,
            },
        })),
    );

    console.log(
        `Seeded users. Inserted: ${result.upsertedCount}, updated: ${result.modifiedCount}, matched: ${result.matchedCount}`,
    );
}

seedDatabase()
    .catch((error) => {
        console.error("Failed to seed users:", error);
        process.exitCode = 1;
    })
    .finally(async () => {
        await mongoose.connection.close();
    });
