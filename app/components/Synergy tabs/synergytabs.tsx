import styles from "./synergy.module.css";
import { getTranslation } from "@/lib/translations";
import Link from "next/link";
import { cookies } from "next/headers";

export default async function SynergyTabs() {
    const cookieStore = await cookies();
    const lang = (cookieStore.get("lang")?.value || "en") as "en" | "th";
    const t = getTranslation(lang);

    return (
        <div className={styles.tabs}>
            <Link href="/analytics" >{t.analytics}</Link>
            <Link href="/synergy">{t.synergy}</Link>
        </div>
    );
}