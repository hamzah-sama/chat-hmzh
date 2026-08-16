import { GoogleButton } from "./google-button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../components/ui/card";

export const AuthCard = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-md">
      <Card className="w-full max-w-sm overflow-hidden border-border/60 bg-background/95 shadow-2xl shadow-black/20">
        <CardHeader className="space-y-5 pb-6">
          <div className="space-y-2">
            <CardTitle className="text-xl tracking-tight">
              <div className="flex items-center justify-center gap-4 ">
                Welcome to chat-hmzh
                <img src="../../../public/app-logo.png" className="size-10" />
              </div>
            </CardTitle>

            <CardDescription className="text-sm leading-6">
              Sign in to continue your conversations and start asking anything.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-5">
          {/* Google */}
          <GoogleButton />
        </CardContent>

        <CardFooter className="border-t bg-muted/20 px-6 py-4">
          <p className="w-full text-center text-[11px] leading-5 text-muted-foreground">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};
