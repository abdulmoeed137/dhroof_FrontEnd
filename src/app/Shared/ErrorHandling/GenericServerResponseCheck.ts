import { GenericApiResponse, HttpResponse } from "../../global-imports";


export async function ServerResponseError(response: HttpResponse<any>): Promise<GenericApiResponse | null> {
  // ✅ Angular HttpResponse has status and ok just like fetch
  if (response.ok) return null;

  if (response.status === 500) {
    return {
      Status: false,
      Message: 'Server Error. Please try again later.'
    };
  }

  // 🔴 Handle other statuses like 400, 401, etc.
  try {
    const errorData = response.body;
    return {
      Status: false,
      Message: errorData?.Message || 'Something went wrong. Please try again.'
    };
  } catch {
    return {
      Status: false,
      Message: 'Unexpected error. Please try again.'
    };
  }
}
