<?php

namespace AppBundle\Entity;


class Task
{
    private $taskId;
    private $description;
    private $importantTask;

    /**
     * Task constructor.
     * @param $taskId
     * @param $description
     * @param $importantTask
     */
    public function __construct($taskId = null, string $description, bool $importantTask)
    {
        $this->description = $description;
        $this->importantTask = $importantTask;
        if ($taskId) {
            $this->taskId = $taskId;
        }
    }

    /**
     * @return int
     */
    public function getTaskId(): int
    {
        return $this->taskId;
    }

    /**
     * @param int $taskId
     */
    public function setTaskId(int $taskId): void
    {
        $this->taskId = $taskId;
    }


    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    /**
     * @return bool
     */
    public function isImportantTask(): bool
    {
        return $this->importantTask;
    }

    /**
     * @param bool $importantTask
     */
    public function setImportantTask(bool $importantTask): void
    {
        $this->importantTask = $importantTask;
    }


}