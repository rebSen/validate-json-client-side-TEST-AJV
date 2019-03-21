const schema = {
  "type": "object",
  "additionalProperties": false,
  "required": ["hello"],
  "items": {
    "hello": {
      "type": "string"
    }
  }
}
export default schema;