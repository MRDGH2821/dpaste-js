import * as qs from 'querystring';
import { Syntax, ExpiryDays } from './interfaces';
import httpsRequest from './lib';

/** Delays Function execution
 * @function delay
 * @param {number} n - Delay in miliseconds
 * @returns {Promise<any>} Promise object which does nothing for given miliseconds
 */

async function delay(n: number = 1000): Promise<1> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, n);
  });
}

/**
 * Creates Paste on dpaste.org
 * @async
 * @function CreatePaste
 * @param {string} content - The paste data
 * @param {string} title - The title for Paste
 * @param {Syntax} syntax - Paste encoding
 * @param {ExpiryDays} expiryDays - Expiry duration of the paste
 * @returns {Promise<string>} - URL of Paste
 */
export async function CreatePaste(
  content: string,
  title: string = new Date().toUTCString(),
  syntax: Syntax = 'text',
  expiryDays: ExpiryDays = 7,
): Promise<string> {
  await delay(1000);
  const inputData = {
    content,
    syntax,
    title,
    expiry_days: expiryDays,
  };
  const url = new URL('https://dpaste.com/api/v2/');

  return new Promise((resolve, reject) => {
    httpsRequest(
      {
        host: url.host,
        hostname: url.hostname,
        path: url.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'dpaste-ts dpaste wrapper for node.js',
        },
      },
      qs.stringify(inputData),
    )
      .then((response) => {
        resolve(response.body);
      })
      .catch(reject);
  });
}

/**
 * Gets Paste from dpaste.org
 * @async
 * @function GetRawPaste
 * @param {string} url - The dpaste url
 * @returns {Promise<string>} - Raw data from paste
 */
export async function GetRawPaste(url: string): Promise<string> {
  const newUrl = new URL(`${url.trim()}.txt`, 'https://dpaste.com/');
  await delay(1000);

  return new Promise((resolve, reject) => {
    httpsRequest({
      host: newUrl.host,
      hostname: newUrl.hostname,
      path: newUrl.pathname,
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'dpaste-ts dpaste wrapper for node.js',
      },
    })
      .then((response) => {
        resolve(response.body);
      })
      .catch(reject);
  });
}
