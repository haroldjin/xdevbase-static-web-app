import Link from "next/link";
import React from "react";

import { UserAuthForm } from "./molecules/UserAuthForm";
import { useServerTranslation } from "@/i18n";
import { Separator } from "@/components/ui/separator";
import { Namespace, TFunction } from "i18next";

const ContactUsCard = ({t}: {t: TFunction<Namespace, undefined>}) => {
  return (
    <div className="max-w-xs rounded-md  p-10 dark:bg-foreground dark:text-black">
      <p className="mb-3 text-lg font-bold">{t("contactUsCard.title")}</p>
      <p className="mb-2 text-base">{t("contactUsCard.subtitle")}</p>
      <p>
        {t("contactUsCard.contactUs")} <strong>support@xdevbase.com</strong>
      </p>
    </div>
  );
};

/**
 * The login page has the login form along with links to register and reset-password.
 */
export const Login = async () => {
  const { t } = await useServerTranslation();

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:gap-40">
      <div className="flex flex-col justify-center gap-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {t("login.title")}
          </h1>
      </div>
        <UserAuthForm />
        <Separator />
        <div className="flex flex-col items-center justify-center gap-2">
          <Link
            className="text-sm font-medium text-secondary-foreground hover:underline"
            href="/register"
          >
            {t("login.registerButton")}
          </Link>

          <Link
            className="text-sm font-medium text-secondary-foreground  hover:underline"
            href="/reset-password"
          >
            {t("login.forgotPasswordButton")}
          </Link>
        </div>
      </div>
      <ContactUsCard t={t}/>
    </div>
  );
};
