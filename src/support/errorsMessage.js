const notEmpty = ({ description }) => !!description
const format = ({ description }) => `<br>${description}</br>`

export default (errors = []) => errors
  .filter(notEmpty)
  .map(format)
  .join('')
