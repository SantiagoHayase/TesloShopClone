import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const validRoles = ["admin"];
  if (req.nextUrl.pathname.startsWith("/admin")) {
    const session: any = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (session.user.role !== "admin") {
      const requestedPage = req.nextUrl.pathname;
      const url = req.nextUrl.clone();
      url.pathname = `/`;
      return NextResponse.redirect(url);
    }
  }
  if (req.nextUrl.pathname.startsWith("/api/admin/dashboard")) {
    const session: any = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (!session) {
      return new Response(JSON.stringify({ message: "No autorizado" }), {
        status: 301,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    if (!validRoles.includes(session?.user.role)) {
      const url = req.nextUrl.clone();
      url.pathname = `/`;

      return NextResponse.redirect(url);
    }
  }

  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  //   console.log({ session });
  //   return NextResponse.redirect(new URL("/about-2", req.url));

  if (!session) {
    const requestedPage = req.nextUrl.pathname;

    const url = req.nextUrl.clone();
    url.pathname = `/auth/login`;
    url.search = `p=${requestedPage}`;

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    "/checkout/address",
    "/checkout/summary",
    "/admin",
    "/admin/users",
    "/api/admin/dashboard",
  ],
};
