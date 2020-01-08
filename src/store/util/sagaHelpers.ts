/**
 * This function exists because @function [call] does not accept the firebase function directly.
 * @param {*} fn
 */
export async function wrap<T>(fn: () => Promise<T>): Promise<T> {
  return fn();
}
