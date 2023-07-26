/*
 * Copyright (c) 2023 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.integrations.source.mysql;

import static io.airbyte.integrations.debezium.internals.DebeziumEventUtils.CDC_DELETED_AT;
import static io.airbyte.integrations.debezium.internals.DebeziumEventUtils.CDC_UPDATED_AT;
import static io.airbyte.integrations.source.mysql.MySqlSource.CDC_LOG_FILE;
import static io.airbyte.integrations.source.mysql.MySqlSource.CDC_LOG_POS;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import io.airbyte.integrations.debezium.CdcMetadataInjector;

public class MySqlCdcConnectorMetadataInjector implements CdcMetadataInjector {

  @Override
  public void addMetaData(final ObjectNode event, final JsonNode source) {
    event.put(CDC_LOG_FILE, source.get("file").asText());
    event.put(CDC_LOG_POS, source.get("pos").asLong());
  }

  public void addMetaDataToRowsFetchedOutsideDebezium(final ObjectNode record, final String transactionTimestamp) {
    record.put(CDC_UPDATED_AT, transactionTimestamp);
    record.put(CDC_LOG_FILE, "");
    record.put(CDC_LOG_POS, 0);
    record.put(CDC_DELETED_AT, (String) null);
  }

  @Override
  public String namespace(final JsonNode source) {
    return source.get("db").asText();
  }

}
