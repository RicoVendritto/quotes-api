const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "quote_db",
  dialect: "postgres",
  define: {
    underscored: true
  }
});

class Speaker extends Sequelize.Model {}
class Quote extends Sequelize.Model {}

Speaker.init(
  {
    name: Sequelize.STRING,
    image_url: Sequelize.TEXT
  },
  {
    sequelize,
    modelName: "speaker"
  }
);

Quote.init(
  {
    text: Sequelize.TEXT
  },
  {
    sequelize,
    modelName: "quote"
  }
);

Speaker.hasMany(Quote, { onDelete: "cascade" });
Quote.belongsTo(Speaker);

module.exports = {
  Speaker,
  Quote,
  sequelize
};
