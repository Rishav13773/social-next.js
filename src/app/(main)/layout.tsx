import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import QuickAccess from "./_components/QuickAccess";
import SideBar from "./_components/SideBar";

export const metadata: Metadata = {
  title: "Social",
  description: "Generated by create next app",
};

//sidebar

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex h-screen w-[20%]">
              <SideBar />
            </div>
            <div className="flex w-[50%]">{children}</div>
            <div className="flex w-[30%] bg-green-400">
              <QuickAccess />
            </div>
          </div>
        </AntdRegistry>
      </body>
    </html>
  );
}
