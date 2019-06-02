//const _ = require('underscore')
const _ = require('lodash')

var objects=JSON.parse('[{"id":"0318ec68-c23a-4183-8b73-7c099dc3e546","data":{"name":"Credit Card","steps":["initiate-redirection","get-transaction-status"],"valid":{"to":"","from":""},"is_active":true,"unique_name":"CC","schema_version":"v1.0.0","payment_gateway":"euplatesc"},"tenant_id":"ROU"},{"id":"52ab82b3-d04c-4430-b670-eb862751f4a4","data":{"name":"Credit Card Installment","steps":["initiate-redirection","get-transaction-status"],"valid":{"to":"","from":""},"is_active":true,"unique_name":"CCIN","schema_version":"v1.0.0","payment_gateway":"euplatesc"},"tenant_id":"ROU"},{"id":"ea8d7911-27bc-4783-8acf-97718643f587","data":{"name":"Bank Transfer","steps":["start-transaction","get-transaction-status"],"valid":{"to":"","from":""},"is_active":true,"unique_name":"BT","schema_version":"v1.0.0","payment_gateway":"banktransfer"},"tenant_id":"ROU"},{"id":"3e5ee00d-f083-4f9e-ae39-e688718b9779","data":{"name":"COD","steps":["start-transaction","get-transaction-status"],"valid":{"to":"","from":""},"is_active":true,"unique_name":"COD","schema_version":"v1.0.0","payment_gateway":"cod"},"tenant_id":"ROU"}]')

function extractValidResults(objects) {
    let result = [], from, to;
    let currentTime = (new Date(Date.now())).toISOString();
    if (!_.isEmpty(objects)) {
      objects.forEach(function (object) {
        from = _.get(object, 'data.valid.from');
        to = _.get(object, 'data.valid.to');
        if ((_.isEmpty(from) || from <= currentTime) && (_.isEmpty(to) || to >= currentTime))
          result.push(object);
      });
    }
    return result;
  }

  console.log(extractValidResults(objects))