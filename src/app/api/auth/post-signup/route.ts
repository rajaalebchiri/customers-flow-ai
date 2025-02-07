export async function POST(request: Request) {
    const res = await request.json()
    const userId = res.userId
    console.log('Received user ID:', userId)
    return Response.json({ message: "User ID received" })
}