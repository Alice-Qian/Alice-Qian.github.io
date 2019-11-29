import request from "@/utils/request";

export const list = () => request.get("blog/list");
