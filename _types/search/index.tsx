export interface ISearchQuery {
  scopes?: {
    name: string;
    parameters?: string[];
  }[];
  filters?: {
    field: string;
    operator:
      | "<"
      | "<="
      | ">"
      | ">="
      | "="
      | "!="
      | "like"
      | "not like"
      | "ilike"
      | "not ilike"
      | "in"
      | "not in";
    type?: "or" | "and";
    value: boolean | string[] | number[] | string | number;
  }[];
  search?: { value: string; case_sensitive?: boolean };
  sort?: {
    field: string;
    derection: "asc" | "desc";
  }[];
}
