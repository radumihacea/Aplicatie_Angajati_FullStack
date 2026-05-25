# 🏢 Employee Management System

## 📖 Overview
This is a full-stack web application built to manage employee data efficiently. The project demonstrates the integration of a modern single-page application (SPA) with a robust backend API, handling standard CRUD (Create, Read, Update, Delete) operations for employee records. 

## ✨ Features
* **View Employees:** Displays a comprehensive data table of all registered employees.
* **Add New Employees:** A dedicated form to input and save new employee details (Name, Email, Phone, Salary, Department).
* **Edit Records:** Dynamic routing to view and update existing employee information.
* **Responsive UI:** Styled with Bootstrap for a clean and accessible user experience.

## 💻 Tech Stack

### Frontend (UI)
* **Framework:** Angular (Modern Standalone Components approach)
* **Key Features:** Two-Way Data Binding (`FormsModule`), Dynamic Routing (`RouterModule`), and HTTP Client integration.
* **Styling:** HTML5, CSS3, Bootstrap 5

### Backend (API)
* **Framework:** C# ASP.NET Core Web API
* **Architecture:** RESTful API design pattern.
* **Database Integration:** Entity Framework Core (Code-First approach) connected to a SQL Server database.

## 📂 Project Structure
The repository is divided into two main directories:
1. **`Aplicatie.API/`**: Contains the C# backend project, database context, migrations, and controllers.
2. **`Aplicatie.UI/`**: Contains the Angular workspace, components, models, and services used to consume the API.
