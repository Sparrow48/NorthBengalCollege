"use server"

import { redirect } from "next/navigation";

export async function searchJournal(prevState, formData) {
    const keyword = formData?.has("keyword") ? formData?.get("keyword") : "";
    const departmentSlug = formData?.has("department") ? formData?.get("department") : "";

    if (!keyword) {
        return { message: 'Please enter a search keyword' }
    }

    let redirectPath = `/journals/search?keyword=${encodeURIComponent(keyword)}`;

    if (departmentSlug && departmentSlug !== "all") {
        redirectPath += `&department=${departmentSlug}`;
    }

    redirect(redirectPath);
}