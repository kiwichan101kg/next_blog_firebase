import { withAuth } from "next-auth/middleware";
// export { default } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // callbacks.authorizedがtrueの場合のみ進入できる
    console.log("in middleware: ", req.nextauth.token);
  },
  {
    callbacks: {
      // tokenがあればOK
      authorized: ({ token }) => {
        console.log("in authorized: ", token);
        return !!token;
      },
    },
  }
);

// tokenの有無によってアクセスできるページを制限
export const config = { matcher: ["/(posts|mypage)"] };
