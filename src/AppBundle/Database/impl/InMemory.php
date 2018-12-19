<?php
/**
 * Created by PhpStorm.
 * User: boguslaw
 * Date: 19.12.18
 * Time: 08:34
 */

namespace AppBundle\Database\impl;


use AppBundle\Database\LoaderToDatabase;
use AppBundle\Entity\DeadlineTask;
use AppBundle\Entity\Task;

class InMemory implements LoaderToDatabase
{

    public function saveTask(DeadlineTask $deadlineTask)
    {
        // TODO: Implement saveTask() method.
    }

    public function updateTask(DeadlineTask $deadlineTask)
    {
        // TODO: Implement updateTask() method.
    }

    public function deleteTask(int $deadlineTask)
    {
        // TODO: Implement deleteTask() method.
    }

    public function createDeadlineTask(int $year, int $month, int $week, int $day, Task $task): DeadlineTask
    {
        // TODO: Implement createDeadlineTask() method.
    }

    public function createTask(int $taskId, string $description, bool $importantTask): Task
    {
        // TODO: Implement createTask() method.
    }

    public function getAllTask(): array
    {
        // TODO: Implement getAllTask() method.
    }
}