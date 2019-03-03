import {post, requestBody} from '@loopback/rest';
import {AddParams, AddResult, errorResponse} from '../models';

export class AdditionController {
  /**
   * Returns the sum of 2 numbers.
   *
   * @remarks
   * This is basic endpoint to add two numbers, used to showcase the typedoc package.
   *
   * @param AddParams - complex structure containing 2 numeric properties.
   * @param num1 - number
   * @param num2 - number
   * @returns AddResult - contains "result" propery, which is the sum of the two numbers.
   * @returns errorResponse - contains a "status" (-100) and a "message", if there is an error.
   */

  constructor() {}

  @post('/add')
  async addNumbers(
    @requestBody() addParams: AddParams,
  ): Promise<AddResult | errorResponse> {
    return new Promise((resolve, reject) => {
      console.log('Recieved request @ /add');
      console.log('Validating...');
      if (addParams.num1 && addParams.num2) {
        console.log(`Adding ${addParams.num1} and ${addParams.num2}`);
        let response: AddResult;
        response = {
          result: addParams.num1 + addParams.num2,
        };
        console.log(`Result: ${response.result}`);
        resolve(response);
      } else {
        console.log('Invalid Request.');
        let response: errorResponse = {
          status: -100,
          message: 'Request must contain 2 numbers.',
        };
        resolve(response);
      }
    });
  }
}
