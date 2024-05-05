package main

// Leetcode #690 Employee Importance | https://leetcode.com/problems/employee-importance/description/

type Employee struct {
	Id           int
	Importance   int
	Subordinates []int
}

func EmployeeImportance(employees []*Employee, id int) int {
	accumulatedImportance := 0

	return getEmployeeImportance(employees, id, accumulatedImportance)
}

func getEmployeeImportance(employees []*Employee, id int, acc int) int {
	for _, employee := range employees {
		if employee.Id == id {
			acc += employee.Importance

			if len(employee.Subordinates) == 0 {
				return acc
			}

			for _, subordinate := range employee.Subordinates {
				filteredEmployees := removeVisitedEmployee(employees, id)
				acc = getEmployeeImportance(filteredEmployees, subordinate, acc)
			}

		}
	}

	return acc
}

func removeVisitedEmployee(employees []*Employee, id int) []*Employee {
	var newEmployees []*Employee

	for _, employee := range employees {
		if employee.Id != id {
			newEmployees = append(newEmployees, employee)
		}
	}

	return newEmployees
}
