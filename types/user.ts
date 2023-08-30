import express from 'express';
namespace Users {
  export interface User {
    fullName: string
    password: string
  }

  export interface Request extends express.Request {
    body: {
      fullName: string,
      password: string
    },
    query: {
      page: string;
      pageSize: string;
    }
  }
}

export default Users;