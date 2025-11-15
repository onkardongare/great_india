import "./globals.css";
import Header from "@/components/Header";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Providers  from "@/redux/reduxProvider";  // new wrapper

 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body className="">
          <Providers>
            <NextIntlClientProvider>
                <Header />
                <div className="flex flex-1 justify-center items-center mt-14">
                  {children}
                </div>
            </NextIntlClientProvider>
          </Providers>
      </body>
    </html>
  );
}