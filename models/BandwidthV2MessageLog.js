module.exports = function (sequelize, DataTypes) {
  var BandwidthV2MessageLog = sequelize.define('BandwidthV2MessageLog', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      field: 'description',
      allowNull: false
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    text: {
      type: DataTypes.STRING
    },
    messageId: {
      type: DataTypes.STRING,
      field: 'message_id',
      allowNull: false
    },
    message: {
      type: DataTypes.JSON,
      field: 'bandwidth_message',
      allowNull: false
    }

  });
  return BandwidthV2MessageLog;
};