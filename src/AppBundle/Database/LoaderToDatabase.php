<?php
/**
 * Created by PhpStorm.
 * User: boguslaw
 * Date: 18.12.18
 * Time: 21:18
 */

namespace AppBundle\Database;


use AppBundle\Entity\DeadlineTask;
use AppBundle\Entity\Task;

interface LoaderToDatabase
{
    public function saveTask(int $year, int $month, int $week, int $day, Task $task);

    public function updateTask(int $year, int $month, int $week, int $day, Task $oldTask, Task $task);

    public function deleteTask(int $year, int $month, int $week, int $day, Task $task);

    public function createDeadlineTask(int $year, int $month, int $week,
                                       int $day, Task $task): DeadlineTask;

    public function createTask(int $taskId, string $description,
                               bool $importantTask): Task;

    public function getAllTask(): array;
}