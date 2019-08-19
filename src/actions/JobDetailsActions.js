import {
  EDIT_JOB_DETAILS,
  FETCHING_JOB_DETAILS,
  GET_JOB_DETAILS
} from '../constants/JobDetails';
import axios from 'axios';


const URL = 'http://localhost:8095/services/scheduler/api/v1/jobcard/2165';
// eslint-disable-next-line max-len
const AUTH = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRjYzM1ODhmNjM5NzNiOTEzOGVjYmVhZDNlYmI0Nzk2YTBjMzY1NmVlNGYwY2ZjOGE4ZDZjZTI2OTNkOWM5ZTIxZmQ1MjVlZDcyZDk0Y2E5In0.eyJhdWQiOiIxIiwianRpIjoiZGNjMzU4OGY2Mzk3M2I5MTM4ZWNiZWFkM2ViYjQ3OTZhMGMzNjU2ZWU0ZjBjZmM4YThkNmNlMjY5M2Q5YzllMjFmZDUyNWVkNzJkOTRjYTkiLCJpYXQiOjE1NjU5MjUzNzUsIm5iZiI6MTU2NTkyNTM3NSwiZXhwIjoxNTY3MjIxMzc1LCJzdWIiOiI4MDEiLCJzY29wZXMiOltdfQ.ls7NIHWbgjeA9wEjQrgS2r2XD2g7aH_U9_FA4E8Vp7BIFu1PA9BNllDulbajbjhi9341jfE4kGhmdBJx4eilPcLVSISXgbmcmJLAmIvCT8JgXL-Q8249v25wueQdrLnS4OnIDpdd9UFaiOGjb8QiM_RUwxHml99tKleLdSZHnRlWzYtd7WrVLecMwcf5bCwoFs6H8vFvRnElXRu99-RLNoOCTTjOjVV6TVCrToj2IILxxenQFyiTPQjbbhy4gaISPZ3d4Yj98NoGuR2X9cHvQkLFKtCQLtJhd7xfuTP81VmDwACMeCEFbCw34h0ju3gqFsZ99JRgqFKHiiHibasjJl1D-j0jwRpRVGjliKAiKcbA5l_FQ5eIsGICnbbuJ8Pw0ZRPPejRzvcsfRX35L7tFaCB1WTzroyCxrbgg7jXnbcefUevWi6_uiLiNXd6cn3gYi_DRR3SdLLTT4FXTzUZGgs9DOJasvTskDMuW-KclH-LLTEf53ShsFFCkK29KZsgMR19AnJoC83_PLEo0CTFA2TkS4vFZzr2Es4a5Vf9Ho364wOhbxYCrS7ULcCrytZeDcCCbgVM0Yw6IYEs4G8usx1DqEd-7d3iAbhqhkNA4hkY3_xCG5H3nywBsq3dNSpLIsPuCaonuqBqh-wm4ZddEOqyiAEIe-lBooQG6nHCFYg';
// eslint-disable-next-line max-len
const COMP = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyLWlkIjoiODAxIiwicm9sZSI6ImFkbWluIiwiY29tcGFueS1jb2RlIjoiMjQ1NGU1ZjctMjdkYy01MDBjLWE0ZTMtMTQ4NzNjM2NjNTY4IiwidGltZXpvbmUiOiJBdXN0cmFsaWFcL1N5ZG5leSJ9.so9cI2WV0DRvDhbMbPVBvvjbmGni4sx3xfgUn5SL0dTvx37pjc2a7DM44SwC7L8UC_YCHYUNHUXlnEU1tGovxSRJ4UvsxBF4iXHOkCQJabmeul2ybGU4K3JEvEICXJ-CXgjbZsKuT16x6eqALJAx9QT3UPC8_2BNHu2LY09249PTgFLRO6C324axjMClOQY6P9uhVm5xGvaELu4LbhSlHkMiFkPBq5hXWORX8tMK-CieQevSbI4Zubhocc9Fi6W_xvsZcgVgLd8csTfEbqp25VaZMqyqoa1fd1HzVLTJ4mFyl2Qrf6dTCY5LXGSJXSrU_YBDkz9Yfa6KRMHBhtwg6Z3cKdfkUMjXco1Yo-Dmh2FMH7DpZQiOqmr0mPYX7XvHfdPCluW3mBEkBKQBr1icHWMc1CbpRkKuXkZY7JpzCgbFNmUyLKiTgIIJvc66bnPWL9ugubtmXlbmFjrIzb259mGVfzS7r_TLp1Ly8eR35uNSjn47d6qPUBgS13vLu163WlmnpWFqXYYvLYUqFY4B5BP_0Mn-zNOeD7I4Azh5e1T9Ug2ZT32XaoAoHFzwzggplcUtOZpZedm3lAnJemn5j8klun4rEZn4jnuLEsq53-oQQdXKE5QQAlU8-XSRo9nABfLWEMFqpLHW0qV39i7b8UitLCQDp6kSK8ri_cqHzuo';

export const fetching = () => ({
  // eslint-disable-next-line no-empty-label
  type: FETCHING_JOB_DETAILS,
});

// eslint-disable-next-line no-shadow
export const fetchJobDetails = () => dispatch => {
    axios(URL, {
      method: 'GET',
      headers: {
        Authorization: AUTH,
        'Company-User-Access': COMP
      }
    }).then(response => {
      // eslint-disable-next-line no-undef
      dispatch({
        type: GET_JOB_DETAILS,
        payload: response.data.data[0]
      });
    }).catch(error => {
      console.log('Error', error);
    });
  }
;

export const editJobDetails = () => ({
  // eslint-disable-next-line no-empty-label
  type: EDIT_JOB_DETAILS
});
