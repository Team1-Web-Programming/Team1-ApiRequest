# API Design

 
<table>
  <tr>
    <th>Endpoint</th>
    <th>Description</th>
    <th>Method</th>
    <th>Authorization</th>
    <th>Request Body</th>
    <th>Success Response</th>
    <th>Failed Response</th>
  </tr>
  <tr>
    <td>GET /</td>
    <td>Retrieve a list of tasks.</td>
    <td>GET</td>
    <td>
      - <strong>Status Code</strong>: 200 OK<br>
      - <strong>Response Success</strong>:
      <pre><code style="color:green">
      [
    {
        "id": 1,
        "title": "Menulis Tugas"
    },
    {
        "id": 2,
        "title": "Belajar API"
    },
    {
        "id": 3,
        "title": "Menonton YouTube"
    },
    {
        "id": 4,
        "title": "Belajar Postman"
    }
]
      </code></pre>
    </td>
    <td>
      - <strong>Status Code</strong>: 500 Internal Server Error <br>
      - <strong>Response Body</strong>:
      <pre><code style="color:red">
      {
          "message": "Error retrieving tasks"
      }
      </code></pre>
    </td>
  </tr>
  <tr>
    <td>POST /tasks</td>
    <td>Create a new task.</td>
    <td>POST</td>
    <td>
      - <strong>Status Code</strong>: 201 Created<br>
      - <strong>Response Success</strong>:
      <pre><code>
      {
          "title": "Task is Added"
      }
      </code></pre>
    </td>
    <td>
      - <strong>Status Code</strong>: 500 Internal Server Error<br>
      - <strong>Response Body</strong>:
      <pre><code style="color:red">
      {
          "message": "Error creating task"
      }
      </code></pre>
    </td>
  </tr>
  <tr>
    <td>PATCH /tasks/:id</td>
    <td>Update an existing task by ID.</td>
    <td>PATCH</td>
    <td>
      - <strong>Status Code</strong>: 200 OK<br>
      - <strong>Response Success</strong>:
      <pre><code>
      {
          "message": "Task title is updated!"
      }
      </code></pre>
    </td>
    <td>
      - <strong>Status Code</strong>: 404 Not Found<br>
      - <strong>Response Body</strong>:
      <pre><code style="color:red">
      {
          "message": "Task not found"
      }
      </code></pre>
    </td>
  </tr>
  <tr>
    <td>DELETE /tasks/:id</td>
    <td>Delete a task by ID.</td>
    <td>DELETE</td>
    <td>
      - <strong>Status Code</strong>: 200 OK<br>
      - <strong>Response Success</strong>:
      <pre><code>
      {
          "message": "Task deleted successfully"
      }
      </code></pre>
    </td>
    <td>
      - <strong>Status Code</strong>: 404 Not Found<br>
      - <strong>Response Body</strong>:
      <pre><code style="color:red">
      {
          "message": "Task not found"
      }
      </code></pre>
      - <strong>Status Code</strong>: 500 Internal Server Error <br>
      - <strong>Response Body</strong>:
      <pre><code style="color:red">
      {
          "message": "Error deleting task"
      }
      </code></pre>
    </td>
  </tr>
</table>
