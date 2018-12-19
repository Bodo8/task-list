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
    public function saveTask(DeadlineTask $deadlineTask);

    public function updateTask(DeadlineTask $deadlineTask);

    public function deleteTask(int $deadlineTask);

    public function createDeadlineTask(int $year, int $month, int $week,
                                       int $day, Task $task): DeadlineTask;

    public function createTask(int $taskId, string $description,
                               bool $importantTask): Task;

    public function getAllTask(): array;
}