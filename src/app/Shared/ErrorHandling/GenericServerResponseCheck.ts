import { GenericApiResponse, HttpResponse } from "../../global-imports";


export async function ServerResponseError(response: HttpResponse<any>): Promise<GenericApiResponse | null> {
  // ✅ Angular HttpResponse has status and ok just like fetch
  if (response.ok) return null;

  if (response.status === 500) {
    return {
      status: false,
      message: 'Server Error. Please try again later.'
    };
  }

  try {
    const errorData = response.body;
    return {
      status: false,
      message: errorData?.Message || 'Something went wrong. Please try again.'
    };
  } catch {
    return {
      status: false,
      message: 'Unexpected error. Please try again.'
    };
  }
}
