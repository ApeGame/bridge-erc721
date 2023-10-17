import { CLIArgumentType } from "hardhat/types";
import { HardhatError } from "hardhat/internal/core/errors";
import { ERRORS } from "hardhat/internal/core/errors-list";
import { BigNumber, utils } from "ethers";

export const bigNumbers: CLIArgumentType<any> = {
  name: "bigNumbers",
  parse: (argName: string, strValue: string) => {
    const strs = strValue.split(",");
    const nums: BigNumber[] = [];
    for (let i = 0; i < strs.length; i++) {
      nums[i] = utils.parseEther(strs[i]);
    }
    return nums;
  },
  /**
   * Check if argument value is of type "boolean"
   *
   * @param argName {string} argument's name - used for context in case of error.
   * @param value {any} argument's value to validate.
   *
   * @throws HH301 if value is not of type "boolean"
   */
  validate: (argName: string, value: any): void => {},
};

export const ints: CLIArgumentType<any> = {
  name: "ints",
  parse: (argName: string, strValue: string) => {
    const strs = strValue.split(",");
    const nums: number[] = [];
    for (let i = 0; i < strs.length; i++) {
      nums[i] = Number(strs[i]);
      if (isNaN(nums[i])) {
        throw new HardhatError(ERRORS.ARGUMENTS.INVALID_VALUE_FOR_TYPE, {
          value: strs[i],
          name: argName,
          type: ints.name,
        });
      }
    }
    return nums;
  },
  /**
   * Check if argument value is of type "boolean"
   *
   * @param argName {string} argument's name - used for context in case of error.
   * @param value {any} argument's value to validate.
   *
   * @throws HH301 if value is not of type "boolean"
   */
  validate: (argName: string, value: any): void => {},
};

export const addresses: CLIArgumentType<any> = {
  name: "addresses",
  parse: (argName: string, strValue: string) => {
    const strs = strValue.split(",");
    return strs;
  },
  /**
   * Check if argument value is of type "boolean"
   *
   * @param argName {string} argument's name - used for context in case of error.
   * @param value {any} argument's value to validate.
   *
   * @throws HH301 if value is not of type "boolean"
   */
  validate: (argName: string, value: any): void => {
    for (let i = 0; i < value.length; i++) {
      const isaddress = utils.isAddress(value[i]);
      if (!isaddress) {
        throw new HardhatError(ERRORS.ARGUMENTS.INVALID_VALUE_FOR_TYPE, {
          value,
          name: argName,
          type: addresses.name,
        });
      }
    }
  },
};

export const Sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
