INSERT INTO department (name)
VALUES 
('IT'),
('Finance & Accounting'),
('Sales & Marketing'),
('Operations');

INSERT INTO role (title, salary, department_id)
VALUES
('Full Stack Developer', 100000, 1),
('Software Engineer', 110000, 1),
('Accountant', 80000, 2), 
('Finanical Analyst', 125000, 2),
('Marketing Coordindator', 65000, 3), 
('Sales Lead', 100000, 3),
('Project Manager', 90000, 4),
('Operations Manager', 90000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Sebastien', 'Vettel', 2, null),
('Tommy', 'Boileau', 1, 1),
('George', 'Russell', 4, null),
('Carlos', 'Sainz', 3, 3),
('Charles', 'Leclerc', 6, null),
('Max', 'Verstappen', 5, 5),
('Lewis', 'Hamilton', 7, null),
('Fernando', 'Alonso', 8, 7);

