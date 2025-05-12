import NextAuth, { DefaultSession } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    admin: boolean;
    canUpload: boolean;
    canCreate: boolean;
    canViewDeck: boolean;
    canUploadDeck: boolean;
    canAdd: boolean;
    canRemove: boolean;
    canEdit: boolean;
    superAdmin: boolean;
  }

  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string;
      image?: string | null;
      admin: boolean | false;
      canUpload: boolean | false;
      canCreate: boolean | false;
      canViewDeck: boolean | false;
      canUploadDeck: boolean | false;
      canAdd: boolean | false;
      canRemove: boolean | false;
      canEdit: boolean | false;
      superAdmin: boolean | false;
    } & DefaultSession["user"];
    expires: ISODateString;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends Record<string, unknown>, DefaultJWT {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    admin: boolean | false;
    canUpload: boolean | false;
    canCreate: boolean | false;
    canViewDeck: boolean | false;
    canUploadDeck: boolean | false;
    canAdd: boolean | false;
    canRemove: boolean | false;
    canEdit: boolean | false;
    superAdmin: boolean | false;
  }
}
