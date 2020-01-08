/**
 * This function exists because @function [call] does not accept the firebase function directly.
 * @param {*} fn
 */
export async function wrap(fn: () => Promise<any>) {
  return fn();
}
