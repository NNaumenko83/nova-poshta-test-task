function e(t){return typeof t=="object"&&t!==null&&"message"in t&&typeof t.message=="string"}function n(t){if(e(t))return t;try{return new Error(JSON.stringify(t))}catch{return new Error(String(t))}}function s(t){return n(t).message}export{s as g};
