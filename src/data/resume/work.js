/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Tata Consultancy Services',
    position: 'Associate System Engineer',
    url: 'https://www.tcs.com/',
    startDate: '2022-10-17',
    endDate: '2023-05-31',
    summary: "I worked in a project where we have to develop interfaces using B2Bi Application. The purpose of it is to establish a finanacial data communication between the client's companies.",

  },
];

export default work;
