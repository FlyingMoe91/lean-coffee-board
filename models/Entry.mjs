import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    text: {
      type: mongoose.SchemaTypes.String,
      required: true,
      minlength: 3,
    },
    author: {
      type: mongoose.SchemaTypes.String,
    },
    color: {
      type: mongoose.SchemaTypes.String,
      default: '#0bc45f',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model('Entry', schema);
