import dbConn from "@/utils/dbConn";
import Contact from "@/modules/contact";
import {NextResponse} from "next/server";

export async function POST(req:any, res:any) {
    try {

        const body = await req.json();
        const val=await dbConn();
        console.log('post',val)

        await Contact.create(body);

        return NextResponse.json({
            message:"Message sent successfully!"
        }, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}