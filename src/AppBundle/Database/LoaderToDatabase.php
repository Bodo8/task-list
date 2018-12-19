<?php
/**
 * Created by PhpStorm.
 * User: boguslaw
 * Date: 18.12.18
 * Time: 21:18
 */

namespace AppBundle\Database;


use AppBundle\Entity\Task;

interface LoaderToDatabase
{
    public function saveTask(Task $task);

    public function updateTask(Task $task);

    public function deleteTask(int $taskId);

    public function createTask();
}