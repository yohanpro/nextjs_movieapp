import { useState } from "react";
const MovieCreateForm = () => {
  const [form, setForm] = useState({
    name: "john",
    description: "hihi"
  });
  const handleChange = e => {
    const target = e.target;
    const name = target.name;
    setForm({
      ...form,
      [name]: target.value
    });
  };
  return (
    <form>
      {JSON.stringify(form)}
      <div className="form-group">
        <label for="name">Name</label>
        <input
          value={form.name}
          onChange={handleChange}
          type="text"
          className="form-control"
          name="name"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Lord of the Rings"
        />
      </div>
      <div className="form-group">
        <label for="description">Description</label>
        <input
          value={form.description}
          onChange={handleChange}
          type="text"
          className="form-control"
          name="description"
          id="description"
          placeholder="Somewhere in Middle-earth..."
        />
      </div>
      <div className="form-group">
        <label for="description">Rating</label>
        <input
          value={form.rating}
          onChange={handleChange}
          type="number"
          max="5"
          min="0"
          className="form-control"
          name="rating"
          id="rating"
          placeholder="3"
        />
        <small id="emailHelp" className="form-text text-muted">
          Max: 5, Min: 0{" "}
        </small>
      </div>
      <div className="form-group">
        <label for="image">Image</label>
        <input
          value={form.image}
          onChange={handleChange}
          type="text"
          className="form-control"
          name="image"
          id="image"
          placeholder="http://....."
        />
      </div>
      <div className="form-group">
        <label for="cover">Cover</label>
        <input
          value={form.cover}
          onChange={handleChange}
          type="text"
          className="form-control"
          name="cover"
          id="cover"
          placeholder="http://......"
        />
      </div>
      <div className="form-group">
        <label for="longDesc">Long Description</label>
        <textarea
          value={form.longDesc}
          onChange={handleChange}
          className="form-control"
          name="longDesc"
          id="longDesc"
          rows="3"
        ></textarea>
      </div>
      <div className="form-group">
        <label for="genre">Genre</label>
        <select multiple className="form-control" id="genre">
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
    </form>
  );
};

export default MovieCreateForm;
